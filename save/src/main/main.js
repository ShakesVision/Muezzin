// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, Tray, Menu, Notification} = require('electron')
const path = require('path')

let tray = null
let mainWindow, mediaWindow;
var systray;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 600,
    backgroundColor:"#212121",
    icon: '../../ressources/images/icon.png',
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true
    }
  })

  mainWindow.removeMenu()

  mainWindow.maximize();
  // and load the index.html of the app.
  mainWindow.loadFile('src/main/index.html')


  mainWindow.on('minimize',function(event){
    event.preventDefault();
    mainWindow.hide();
  });

  
  mainWindow.on('close', function (event) {
    if(!app.isQuiting && systray){
        event.preventDefault();
        mainWindow.hide();
        return false;
    }
    else{
      app.isQuiting = true;
      app.quit();
      return true;
    }
  });

  //Create hidden mediaPlayer
  mediaWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, 'preload.js'),
    }
  });  

  mediaWindow.loadFile('src/mediaPlayer/mediaPlayer.html');
}


app.on('before-quit', function () {
  app.isQuiting = true;
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  tray = new Tray('ressources/images/icon.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open', click:  function(){
      mainWindow.show(); }},
    { label: 'Quit', click:  function(){
      app.isQuiting = true;
      app.quit();}}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin' && systray) app.quit()
})

const Store = require('electron-store');
const store = new Store();
const adhan = require('adhan')
const momentz = require('moment-timezone')
const language = require('../common/language.js')
const AutoLaunch = require('auto-launch');
const { autoUpdater } = require("electron-updater")

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"
autoUpdater.checkForUpdatesAndNotify()

function showNotification (message) {
  if (Notification.isSupported()){
    const NOTIFICATION_TITLE = 'Muezzin'
    const NOTIFICATION_BODY = message
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY, icon:"../ressources/images/BETA.png" }).show()
  }
}

var lat, lon, calcmeth, madhab, hlr, pcr, shafaq, prayerTimes, adhanPath;
var customValues, delay;
var prayerTimes, datePrayerTimes, tomorrowPrayers;
var adhanCheck, notifCheck, lang, startupSound;
var langFajr, langSunrise, langDhuhr, langAsr, langMaghrib, langIsha, langAdhan, langNow;


checkFirstTime()
loadSettings();
setUpHandlers();
checkTime();

/**
* Checks for Athan time and current time, then if they are the same, it plays the Athan
*/
function checkTime(){
  var interval = setInterval(function(){
    var prayers = nextPrayer();
    if (prayers != undefined && (adhanCheck || notifCheck)){
        var timeUntilCurrentPrayer = timeUntilPrayer(prayers[0])
        console.log(timeUntilCurrentPrayer)
        if(timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] == -1 && timeUntilCurrentPrayer[2] == 0){ //-1 because math.floor
          //if(timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] == -26 && timeUntilCurrentPrayer[2] == 0){ //TESTING
          if (adhanCheck){
            mediaWindow.webContents.send('play', adhanPath);
          }
          if (notifCheck){
            langNow + ": " + prayers[2]
          }
        }
    } 
  }, 1000)
}


/**
* Loads all required variables from the store
*/
async function loadSettings(){
  lat = await store.get('latitude', 0.00);
  lon = await store.get('longitude', 0.00);
  timezone = await store.get('timezone', momentz.tz.guess(),);
  calcmeth = await store.get('calcmeth', "MWL");
  madhab = await store.get('madhab', 'Shafi'); 
  hlr = await store.get( 'hlr', 'TA');
  pcr = await store.get('pcr', 'CC');
  shafaq = await store.get('shafaq', 'shafaqG');
  adhanPath = await store.get('adhanFile', [false, "../../ressources/audio/Adhan - Mecca.mp3", true]);
  adhanCheck = await store.get('adhanCheck', true);
  notifCheck = await store.get('notifCheck', true);
  lang = await store.get('language', 'en');
  loadLang();
  systray = await store.get('systray', true);
  startupSound = await store.get('startup', false);
  customValues = await store.get('customSettings', [false, 0,0,0]);
  delay = await store.get('delay', [false, 0]);
  var autoStart = await window.api.getFromStore('autoStart', 'true');
  setAutoStart(autoStart)
}


/**
* Takes all the loaded settings and calculated the prayers times for 'date'
* @param {Date} date
* @return {adhan.PrayerTimes} prayerTimes
*/
function calcPrayerTimes(date = new Date()){
  console.log("ola")
  var coordinates = new adhan.Coordinates(lat, lon)

  // https://github.com/batoulapps/adhan-js/blob/master/METHODS.md

  //TO add one, change CalculationMethod.js, Adhan.d.ts and Adhan.js
  if (customValues != undefined && !customValues[0]){
    switch(calcmeth) {
      case "MWL":
        params = adhan.CalculationMethod.MuslimWorldLeague();
        break;
      case "Egyptian":
        params = adhan.CalculationMethod.Egyptian();
        break;
      case "Karachi":
        params = adhan.CalculationMethod.Karachi();
        break;
      case "UAQ":
        params = adhan.CalculationMethod.UmmAlQura();
        break;
      case "Dubai":
        params = adhan.CalculationMethod.Dubai();
        break;
      case "Qatar":
        params = adhan.CalculationMethod.Qatar();
        break;
      case "Kuwait":
        params = adhan.CalculationMethod.Kuwait();
        break;
      case "MC":
        params = adhan.CalculationMethod.MoonsightingCommittee();
        break;
      case "Singapore":
        params = adhan.CalculationMethod.Singapore();
        break;
      case "Turkey":
        params = adhan.CalculationMethod.Turkey();
        break;
      case "Tehran":
        params = adhan.CalculationMethod.Tehran();
        break;
      case "ISNA":
        params = adhan.CalculationMethod.NorthAmerica();
        break;
      case "France12":
        params = adhan.CalculationMethod.France12();
        break;
      case "France15":
        params = adhan.CalculationMethod.France15();
        break;
      case "France18":
        params = adhan.CalculationMethod.France18();
        break;
      case "Russia":
        params = adhan.CalculationMethod.Russia();
        break;
      case "Gulf":
        params = adhan.CalculationMethod.Gulf();
        break;
      default:
        params = adhan.CalculationMethod.MuslimWorldLeague();
    } 
  }
  else{
    params = adhan.CalculationMethod.Other();
    params.fajrAngle = customValues[1]
    params.maghribAngle = customValues[2]
    params.ishaAngle = customValues[3]
  }

  if (delay[0]){
    params.ishaInterval = delay[1]
  }
  
  switch(madhab){
    case "Shafi":
      params.madhab = adhan.Madhab.Shafi;
      break;
    case "Hanafi":
      params.madhab = adhan.Madhab.Hanafi;
      break;
    default:
      params.madhab = adhan.Madhab.Shafi;
  }
  
  switch(hlr){
    case "MOTN":
      params.HighLatitudeRule = adhan.HighLatitudeRule.MiddleOfTheNight;
      break;
    case "SOTN":
      params.HighLatitudeRule = adhan.HighLatitudeRule.SeventhOfTheNight;
      break;
    case "TA":
      params.HighLatitudeRule = adhan.HighLatitudeRule.TwilightAngle;
      break;
    default:
      params.HighLatitudeRule = adhan.HighLatitudeRule.recommended(coordinates)
  }

  switch(pcr){
    case "CC":
      params.PolarCircleResolution = adhan.PolarCircleResolution.AqrabBalad;
      break;
    case "CD":
      params.PolarCircleResolution = adhan.PolarCircleResolution.AqrabYaum;
      break;
    case "UND":
      params.PolarCircleResolution = adhan.PolarCircleResolution.Unresolved;
      break;
    default:
      params.PolarCircleResolution = adhan.PolarCircleResolution.AqrabBalad;
  }

  switch(shafaq){
    case "shafaqG":
      params.shafaq = adhan.Shafaq.General;
      break;
    case "shafaqR":
      params.shafaq = adhan.Shafaq.Ahmer;
      break;
    case "shafaqW":
      params.shafaq = adhan.Shafaq.Abyad;
      break;
    default:
      params.shafaq = adhan.Shafaq.General;
  }
  prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
  return prayerTimes;
}


//Sets up all the IPC handlers for communication with renderers
async function setUpHandlers(){
  ipcMain.handle('getStoreValue', (event, key, defaultValue) => {
    if (defaultValue != undefined){
      return store.get(key, defaultValue);
    }
    else{
      return store.get(key);
    }
  });
  ipcMain.handle('setStoreValue', (event, key, value) => {
    return store.set(key, value);
  });
  ipcMain.handle('prayers',  (event, message)  => {
    waitFor(lat, calcPrayerTimes())
    event.sender.send('prayersReply', prayerTimes)
  });
  ipcMain.handle('date-request',  (event, message)  => {
    waitFor(lat, datePrayerTimes = calcPrayerTimes(new Date(message)));
    event.sender.send('date-reply', datePrayerTimes)
  });
  ipcMain.handle('tomorrow-request',  (event, message)  => {
    waitFor(lat, tomorrowPrayers = calcPrayerTimes(message))
    event.sender.send('tomorrow-reply', tomorrowPrayers)
  });

  //Media Handlers
  ipcMain.handle('play',  (event, message)  => {
    mediaWindow.webContents.send('play', adhanPath);
  });
  ipcMain.handle('stop',  (event, message)  => {
    mediaWindow.webContents.send('stop', {});
  });
  ipcMain.handle('volume-request',  (event, message)  => {
    mediaWindow.webContents.send('volume-reply', message);
  });
  ipcMain.handle('progress-request',  (event, message)  => {
    mainWindow.webContents.send('progress-reply', message);
  });

  ipcMain.handle("settingsO", function(){
  })
  ipcMain.handle("settingsC", function(){
    loadSettings()
    calcPrayerTimes()
  })

  ipcMain.handle("startup-request", function(){
    mediaWindow.webContents.send('startup-reply', startupSound);
  })
}


function calcTomorrowPrayers(){
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  tomorrowPrayers = calcPrayerTimes(tomorrow)
}


//Waits for someting to be defined before doing some other thing
async function waitFor(something, doSomething){
  var valueChecker = setInterval(function(){
    if (something != undefined){
      clearInterval(valueChecker)
      doSomething;
      return true;
    }
  }, 100)
}


/**
* Returns the current and next prayers with their names
* @return {[adhan.PrayerTimes.prayer & string]} [currentPrayer, nextPrayer, currentName, nextName]
*/
function nextPrayer(){
  var now = new Date();
  var currentPrayer, nextPrayer, currentName, nextName;
    if (now >= prayerTimes.isha){
      if (tomorrowPrayers == undefined){
        calcTomorrowPrayers();
      }
      currentPrayer = prayerTimes.isha;
      nextPrayer = tomorrowPrayers.fajr
      currentName = langIsha
      nextName = langFajr
  }
  else if (now >= prayerTimes.maghrib){
      currentPrayer = prayerTimes.maghrib;
      nextPrayer = prayerTimes.isha;
      currentName = langMaghrib
      nextName = langIsha
  }
  else if (now >= prayerTimes.asr){
      currentPrayer = prayerTimes.asr;
      nextPrayer = prayerTimes.maghrib;
      currentName = langAsr
      nextName = langMaghrib
  }
  else if (now >= prayerTimes.dhuhr){
      currentPrayer = prayerTimes.dhuhr;
      nextPrayer = prayerTimes.asr;
      currentName = langDhuhr
      nextName = langAsr
  }
  else if (now >= prayerTimes.fajr){
      currentPrayer = prayerTimes.fajr;
      nextPrayer = prayerTimes.dhuhr;
      currentName = langFajr
      nextName = langDhuhr
  }
  else{
      currentPrayer = prayerTimes.fajr;
      nextPrayer = prayerTimes.fajr;
      currentName = langFajr
      nextName = langFajr
  }
    return [currentPrayer, nextPrayer, currentName, nextName]

}


/**
* If the prayer is defined, returns the [hours, minutes, seconds] before/after the prayer
* @param {adhan.PrayerTimes} prayer
* @return {Numer[]} time
*/
function timeUntilPrayer(prayer) {
  var now = new Date()
  if (prayer != undefined){
      return msToTime(prayer - now);
  }
  else{
      return null;
  }
}


/**
* Converts miliseconds to [hours, minutes, seconds]
* @param {Number} duration
* @return {Numer[]} res
*/
function msToTime(duration){ //https://stackoverflow.com/questions/19700283/how-to-convert-time-in-milliseconds-to-hours-min-sec-format-in-javascript
  var seconds = Math.floor((duration / 1000) % 60) + 1,
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  var res = [hours, minutes, seconds]
  return res;
}

function checkFirstTime(){
  var first = !store.has("lat")
  if (first){
    var IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');

    // Create IPGeolocationAPI object. Constructor takes two parameters.
    var ipgeolocationApi = new IPGeolocationAPI("b9aed80a71d043149013540fb449a384", false); 

    var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');

    // Get complete geolocation for the calling machine's IP address
    ipgeolocationApi.getGeolocation(handleResponse);

    // Function to handle response from IP Geolocation API
    function handleResponse(json) {
      loadDefaultCalcMethod(json["continent_code"], json["country_code2"])
      store.set('latitude', json["latitude"])
      store.set('longitude', json["longitude"])
      loadSettings()
      mainWindow.webContents.send('update');
    }
  }
}

function loadDefaultCalcMethod(continentCode, countryCode){
  if (countryCode == "RU"){
    store.set('calcmeth', "Russia");
  }
  else if (countryCode == "GB"){
    store.set('calcmeth', "ISNA");
  }
  if (countryCode == "SG"){
    store.set('calcmeth', "Singapore");
  }
  else if (countryCode == "QA"){
    store.set('calcmeth', "Qatar");
  }
  else if (countryCode == "TR"){
    store.set('calcmeth', "Turkey");
  }
  else if (countryCode == "IR"){
    store.set('calcmeth', "Tehran");
  }
  else if (countryCode == "KW"){
    store.set('calcmeth', "Kuwait");
  }
  else if (countryCode == "AE"){
    store.set('calcmeth', "Dubai");
  }
  else if (countryCode == "PK"){
    store.set('calcmeth', "Karachi");
  }
  else if (countryCode == "EG"){
    store.set('calcmeth', "Egyptian");
  }
  else if (countryCode == "SA"){
    store.set('calcmeth', "UAQ");
  }
  else{
    switch (continentCode){
      case "NA": //N America
        store.set('calcmeth', "ISNA");
        break;
      case "AF": //Africa
        break;
      case "EU": //Europe
        store.set('calcmeth', "MWL");
        break;
      case "AS": //Asia
        store.set('calcmeth', "ISNA");
        break;
      case "SA": //S America
        store.set('calcmeth', "MWL");
        break;
      case "OC": //Oceania
        store.set('calcmeth', "MWL");
        break;
      case "AN": //Antartica
        store.set('calcmeth', "MC");
        break;
      default:
        store.set('calcmeth', "MWL");
    }
  }
}

function loadLang(){
  langFajr =  language.loadTrans(lang, 'fajr')
  langSunrise =  language.loadTrans(lang, 'sunrise')
  langDhuhr = language.loadTrans(lang, 'dhuhr')
  langAsr= language.loadTrans(lang, 'asr')
  langMaghrib = language.loadTrans(lang, 'maghrib')
  langIsha = language.loadTrans(lang, 'isha')
  langAdhan = language.loadTrans(lang, 'adhan')
  langNow = language.loadTrans(lang, 'now')
}

function setAutoStart(autoStart){
  var autoLauncher = new AutoLaunch({
    name: "Muezzin"
  });
  if(autoStart){
    // Checking if autoLaunch is enabled, if not then enabling it.
    autoLauncher.isEnabled().then(function(isEnabled) {
      if (isEnabled) return;
      autoLauncher.enable();
    }).catch(function (err) {
      throw err;
    });
  }
  else{
    if (autoLauncher.isEnabled()){
      try {
        autoLauncher.disable();
      } catch (error) {
        throw error
      }
    }
  }
  
}