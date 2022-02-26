module.exports = {
    loadTrans: function loadTranslation(lang, value){
        return dict[lang][value];
    }
}

var dict = {
    en: {
        'settings': 'Settings', //settingsTitle
        'language': 'Language', //langText
        'timeformat': 'Time format', //tfText
        '24hour': '24 Hour', //24hTimeFormatText
        '12hour': '12 Hour', //12hTimeFormatText
        'showSseconds': 'Show seconds', //showSecondsText
        'dateFormat': 'Date format', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'Notifications', //notifText
        'notifCheck': 'Enable notifications', //notifCheckText
        'coordinates': 'Coordinates', //coordinatesText
        'latitude': 'Latitude', //latText
        'longitude': 'Longitude', //lonText
        'timezone': 'Time zone', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': 'Enable Adhan', //adhanCheckText
        'AdhanMecca': 'Adhan Mecca', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Custom Adhan', //customAdhanText
        'duaAfterAdhan': "Du'a after Adhan", //duaAfterText
        'theme': 'Theme', //themeText
        'darkMode': 'Dark Mode', //darkModeText
        'bgImage': 'Background Image', //bgImageText
        'bgImageCheck': 'Enable Background Image', //bgImageCheckText
        'calcMethods': 'Calculation Methods', //calcMethodsText
        'mwl': 'Muslim World League', //MWL
        'egyptian': 'Egyptian', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapore', //Singapore
        'turkey': 'Turkey', //Turkey
        'tehran': 'Tehran', //Tehran
        'isna': 'ISNA (NA)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'High Latitude Rule', //hlrText
        'motn': 'Middle of the Night', //MOTN
        'sotn': 'Seventh of the Night', //SOTN
        'ta': 'Twilight Angle', //TA
        'pcr': 'Polar Circle Resolution', //pcrText
        'cc': 'Closest City', //CC
        'cd': 'Closest Date', //CD
        'und': 'Do not calculate', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'General', //shafaqG
        'ahmer': 'Red Twilight (ahmer)', //shafaqR
        'abyad': 'White Twilight (abyad)', //shafaqW
        'return': 'Return', //return
        'general': 'General', //v-pills-general-tab
        'location': 'Location', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Appearance', //v-pills-appearance-tab
        'advanced': 'Advanced', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Auto Start', //autoStartText
        'startAtLaunch': 'Start at launch', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, All rights reserved.', //copyright
        'quote': 'Indeed, prayer has been decreed upon the believers a decree of specified times.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Sunrise',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Now',
        'timeUntil': 'Time until',
        'startUpSound': 'Start Up Sound', //startUpSoundText
        'playSound': 'Play sound on startup', //startUpSoundText2
        'sysTray': 'System tray', //systrayText
        'minToTray': 'Minimize to tray', //systrayCheckText
        'customSettings': 'Custom settings', //customSettText
        'enableCS': 'Enable Custom Calculation Settings', //enableCalcText
        'fAngle': 'Fajr Angle', //fajrAngleText
        'mAngle': 'Maghrib Angle', //maghribAngleText
        'iAngle': 'Isha Angle', //ishaAngleText
        'delayAfterM': 'Delay after Maghrib', //delayText
        'delayMin': 'Delay (minutes)', //delayFormText
        'france': 'France', //France12 15 & 18
        'russia': 'Russia', //Russia
        'gulf': 'Gulf Region', //Gulf
        'donate': 'Donate', //menu label
        'preferences': 'Preferences', //menu label
        'resetSettings': 'Reset settings', //menu label
    },
    fr: {
        'settings': 'Options', //settingsTitle
        'language': 'Langue', //langText
        'timeformat': 'Format du temps', //tfText
        '24hour': '24 heures', //24hTimeFormatText
        '12hour': '12 heures', //12hTimeFormatText
        'showSseconds': 'Montrer les secondes', //showSecondsText
        'dateFormat': 'Format de la date', //dfText
        'dateFormat1': 'JJ/MM/AAAA', //id="df1Text"
        'dateFormat2': 'MM/JJ/AAAA', //id="df2Text"
        'dateFormat3': 'AAAA/MM/JJ', //id="df3Text"
        'notifications': 'Notifications', //notifText
        'notifCheck': 'Activer les notifications', //notifCheckText
        'coordinates': 'Coordonées', //coordinatesText
        'latitude': 'Latitude', //latText
        'longitude': 'Longitude', //lonText
        'timezone': 'Fuseau horaire', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': "Activer l'Adhan", //adhanCheckText
        'AdhanMecca': 'Adhan Mecque', //adhanMeccaText
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Custom Adhan', //customAdhanText
        'duaAfterAdhan': "Du'a après l'Adhan", //duaAfterText
        'theme': 'Thème', //themeText
        'darkMode': 'Mode sombre', //darkModeText
        'bgImage': 'Image de fond', //bgImageText
        'bgImageCheck': 'Activer les images de fond', //bgImageCheckText
        'calcMethods': 'Méthodes de calcul', //calcMethodsText
        'mwl': 'Ligue Musulmane Mondiale', //MWL
        'egyptian': 'Egyptien', //Egyptian
        'karachi': 'Karâchi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC
        'singapore': 'Singapour', //Singapore
        'turkey': 'Turquie', //Turkey
        'tehran': 'Téhéran', //Tehran
        'isna': 'ISNA (Amérique)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Règle de latitude élevée', //hlrText
        'motn': 'Millieu de la Nuit', //MOTN
        'sotn': 'Septième de la nuit', //SOTN
        'ta': 'Angle crépusculaire', //TA
        'pcr': 'Résolution du cercle polaire', //pcrText
        'cc': 'Ville la plus Proche', //CC
        'cd': 'Date la plus Proche', //CD
        'und': 'Ne pas Calculer', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'Général', //shafaqG v-pills-general-tab
        'ahmer': 'Crépuscule rouge (ahmer)', //shafaqR
        'abyad': 'Crépuscule blanc (abyad)', //shafaqW
        'return': 'Retourner', //return
        'location': 'Location', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Apparence', //v-pills-appearance-tab
        'advanced': 'Avancé', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Démarrage automatique ', //autoStartText
        'startAtLaunch': 'Lancer au demarrage', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, Tous droits réservés.', //copyright
        'quote': 'En Effet, la Salât demeure, pour les croyants, une prescription, à des temps déterminés.', //quote
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Sunrise',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Maintenant',
        'timeUntil': 'Temps avant',
        'startUpSound': 'Son de démarrage', //startUpSoundText
        'playSound': 'Jouer le son au démarrage', //startUpSoundText2
        'sysTray': "Barre d'état système", //systrayText
        'minToTray': "Réduire dans la barre d'état", //systrayCheckText
        'customSettings': 'Paramètres personnalisés', //customSettText
        'enableCS': 'Activer les paramètres de calcul personnalisés', //enableCalcText
        'fAngle': 'Angle du Fajr', //fajrAngleText
        'mAngle': 'Angle du Maghrib', //maghribAngleText
        'iAngle': "Angle de l'Isha", //ishaAngleText
        'delayAfterM': 'Délai après le Maghrib', //delayText
        'delayMin': 'Delai (minutes)', //delayFormText
        'france': 'France', //France12 15 & 18
        'russia': 'Russie', //Russia
        'gulf': 'Région du Golfe', //Gulf
        'donate': 'Donate', //menu label
        'preferences': 'Preferences', //menu label
        'resetSettings': 'Reset settings', //menu label
    },
    es: {
        'settings': 'Ajustes', //settingsTitle
        'language': 'Idioma', //langText
        'timeformat': 'Formato de tiempo', //tfText
        '24hour': '24 horas', //24hTimeFormatText
        '12hour': '12 horas', //12hTimeFormatText
        'showSseconds': 'Mostrar segundos ', //showSecondsText
        'dateFormat': 'Formato de fecha', //dfText
        'dateFormat1': 'DD/MM/AAAA', //id="df1Text"
        'dateFormat2': 'MM/DD/AAAA', //id="df2Text"
        'dateFormat3': 'AAAA/MM/DD', //id="df3Text"
        'notifications': 'Notificaciones', //notifText
        'notifCheck': 'Permitir notificaciones', //notifCheckText
        'coordinates': 'Coordenadas', //coordinatesText
        'latitude': 'Latitud', //latText
        'longitude': 'Longitud', //lonText
        'timezone': 'Zona horaria', // tzText
        'adhan': 'Adán', //adhanText and others in main
        'adhanCheck': 'Activar Adán', //adhanCheckText
        'AdhanMecca': 'Adán Meca', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adán al-Aqsa', //adhanAqsaText
        'customAdhan': 'Adán personalizado', //customAdhanText
        'duaAfterAdhan': "Dua después del Adán", //duaAfterText
        'theme': 'Tema', //themeText
        'darkMode': 'Modo oscuro', //darkModeText
        'bgImage': 'Imagen de fondo', //bgImageText
        'bgImageCheck': 'Activar imagen de fondo', //bgImageCheckText
        'calcMethods': 'Métodos de cálculo', //calcMethodsText
        'mwl': 'Liga Mundial Musulmana', //MWL
        'egyptian': 'Egipcio', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapur', //Singapore
        'turkey': 'Turquía', //Turkey
        'tehran': 'Teherán', //Tehran
        'isna': 'ISNA (America)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Regla de alta latitud', //hlrText
        'motn': 'Mitad de la noche', //MOTN
        'sotn': 'Séptimo de la noche', //SOTN
        'ta': 'ángulo crepuscular', //TA
        'pcr': 'Resolución del círculo polar', //pcrText
        'cc': 'Ciudad más cercana', //CC
        'cd': 'Fecha más cercana', //CD
        'und': 'No calcular', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'General', //shafaqG
        'ahmer': 'Crepúsculo rojo (ahmer)', //shafaqR
        'abyad': 'Crepúsculo blanco (abyad)', //shafaqW
        'return': 'Regresar', //return
        'general': 'General', //v-pills-general-tab
        'location': 'Localización', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Apariencia', //v-pills-appearance-tab
        'advanced': 'Avanzado', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Inicio automático', //autoStartText
        'startAtLaunch': 'Iniciar en el lanzamiento', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, Todos los derechos reservados.', //copyright
        'quote': 'Ciertamente el salat es para los creyentes, un precepto en tiempos determinados.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Corán: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Sunrise',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Ahora',
        'timeUntil': 'Tiempo antes el',
        'startUpSound': 'Sonido de inicio', //startUpSoundText
        'playSound': 'Jugar sonido al iniciar', //startUpSoundText2
        'sysTray': 'Bandeja del sistema', //systrayText
        'minToTray': 'Minimizar a la bandeja', //systrayCheckText
        'customSettings': 'Ajustes personalizados', //customSettText
        'enableCS': 'Activar la configuración de cálculo personalizada', //enableCalcText
        'fAngle': 'Ángulo del Fajr', //fajrAngleText
        'mAngle': 'Ángulo del Magreb', //maghribAngleText
        'iAngle': 'Ángulo del Isha', //ishaAngleText
        'delayAfterM': 'Retraso después del Magreb', //delayText
        'delayMin': 'Retraso (minutos) ', //delayFormText
        'france': 'Francia', //France12 15 & 18
        'russia': 'Rusia', //Russia
        'gulf': 'Región del Golfo ', //Gulf
        'donate': 'Donate', //menu label
        'preferences': 'Preferences', //menu label
        'resetSettings': 'Reset settings', //menu label
    },
    ar: {
        'settings': 'الإعدادات', //settingsTitle
        'language': 'لغة', //langText
        'timeformat': 'تنسيق الوقت', //tfText
        '24hour': '24', //24hTimeFormatText  
        '12hour': '12', //12hTimeFormatText
        'showSseconds': 'عرض الثواني', //showSecondsText
        'dateFormat': 'صيغة التاريخ', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'إشعارات', //notifText
        'notifCheck': 'تمكين الإخطارات', //notifCheckText
        'coordinates': ' إحداثيات', //coordinatesText
        'latitude': 'خط العرض', //latText
        'longitude': ' خط الطول', //lonText
        'timezone': 'وحدة زمنية', // tzText
        'adhan': 'الأذان', //adhanText and others in main
        'adhanCheck': 'تمكين الأذان', //adhanCheckText
        'AdhanMecca': 'أذان مكة', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'أذان الأقصى', //adhanAqsaText
        'customAdhan': 'مخصص الأذان', //customAdhanText
        'duaAfterAdhan': "دعاء بعد الأذان", //duaAfterText
        'theme': 'سمة', //themeText
        'darkMode': 'الوضع الداكن', //darkModeText
        'bgImage': 'الصورة الخلفية', //bgImageText
        'bgImageCheck': 'تمكين صورة الخلفية', //bgImageCheckText
        'calcMethods': 'طرق الحساب', //calcMethodsText
        'mwl': 'رابطة العالم الإسلامي', //MWL
        'egyptian': 'مصرية', //Egyptian
        'karachi': 'كراتشي', //Karachi
        'uaq': 'أم القرى', //UAQ
        'dubai': 'دبي', //Dubai
        'qatar': 'دولة قطر', //Qatar
        'kuwait': 'الكويت', //Kuwait
        'mc': 'لجنة الهلال', //MC //pas traduire ça
        'singapore': 'سنغافورة', //Singapore
        'turkey': 'ديك رومى', //Turkey
        'tehran': 'طهران', //Tehran
        'isna': 'ISNA (أمريكا)', //ISNA
        'madhab': 'مدهب', //MadhabText
        'shafi': 'شافي', //shafi
        'hanafi': 'حنفي', //Hanafi
        'hlr': 'قاعدة خط العرض العليا', //hlrText
        'motn': 'منتصف الليل', //MOTN
        'sotn': 'السابع من الليل', //SOTN
        'ta': 'زاوية الشفق', //TA
        'pcr': 'قرار الدائرة القطبية', //pcrText
        'cc': 'اقرب مدينة', //CC
        'cd': 'أقرب تاريخ', //CD
        'und': 'لا تحسب', //UND
        'shafaq': 'شفق', //ShafaqText
        'general': 'عام', //shafaqG
        'ahmer': 'أحمر', //shafaqR
        'abyad': 'أبيض', //shafaqW
        'return': 'إرجاع', //return
        'general': 'عام', //v-pills-general-tab
        'location': 'موقع', //v-pills-location-tab
        'audio': 'صوتي', //v-pills-audio-tab
        'appearance': 'مظهر', //v-pills-appearance-tab
        'advanced': 'متقدم', //v-pills-advanced-tab
        'muezzin': 'مؤذن',
        'autoStart': 'بدء تلقائي', //autoStartText
        'startAtLaunch': 'ابدأ عند الإطلاق', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, All rights reserved.', //copyright
        'quote': 'إِنَّ الصَّلاةَ كانَت عَلَى المُؤمِنينَ كِتابًا مَوقوتًا', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "القرآن: 4/103", //source
        'fajr': 'الفجر',
        'sunrise': 'شروق',
        'dhuhr': 'الزره',
        'asr': 'عسير',
        'maghrib': 'المغرب',
        'isha': 'عيسبا',
        'now': 'الآن',
        'timeUntil': 'الوقت حتى',
        'startUpSound': 'بدء الصوت', //startUpSoundText
        'playSound': 'تشغيل الصوت عند بدء التشغيل', //startUpSoundText2
        'sysTray': 'علبة النظام', //systrayText
        'minToTray': 'تقليل الدرج', //systrayCheckText
        'customSettings': 'إعدادات مخصصة', //customSettText
        'enableCS': 'تمكين إعدادات حساب مخصص', //enableCalcText
        'fAngle': 'زاوية الفجر', //fajrAngleText
        'mAngle': 'زاوية المغرب', //maghribAngleText
        'iAngle': 'زاوية الاسما', //ishaAngleText
        'delayAfterM': 'تأخير بعد المغرب', //delayText
        'delayMin': 'تأخير (دقائق) ', //delayFormText
        'france': 'فرنسا', //France12 15 & 18
        'russia': 'روسيا', //Russia
        'gulf': 'منطقة الخليج ', //Gulf
        'donate': 'Donate', //menu label
        'preferences': 'Preferences', //menu label
        'resetSettings': 'Reset settings', //menu label
    },
    it: {
        'settings': 'Impostazioni', //settingsTitle
        'language': 'Lingua', //langText
        'timeformat': 'Formato orario', //tfText
        '24hour': '24 Ore', //24hTimeFormatText
        '12hour': '12 Ore', //12hTimeFormatText
        'showSseconds': 'Mostra secondi', //showSecondsText
        'dateFormat': 'Date format', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'Notifiche', //notifText
        'notifCheck': 'Attivare le notifiche', //notifCheckText
        'coordinates': 'Coordinates', //coordinatesText
        'latitude': 'Latitudine', //latText
        'longitude': 'Longitudine', //lonText
        'timezone': 'Fuso orario', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': 'Abilita Adhan', //adhanCheckText
        'AdhanMecca': 'Adhan Mecca', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Adhan personalizzato', //customAdhanText
        'duaAfterAdhan': "Du'un dopo Adhan", //duaAfterText
        'theme': 'Tema', //themeText
        'darkMode': 'Modalità scura', //darkModeText
        'bgImage': 'Immagine di sfondo', //bgImageText
        'bgImageCheck': 'Abilita immagine di sfondo', //bgImageCheckText
        'calcMethods': 'Metodi di calcolo', //calcMethodsText
        'mwl': 'Lega mondiale musulmana', //MWL
        'egyptian': 'Egiziano', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapore', //Singapore
        'turkey': 'Turchia', //Turkey
        'tehran': 'Tehran', //Tehran
        'isna': 'ISNA (America)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Regola di alta latitudine', //hlrText
        'motn': 'Nel mezzo della notte', //MOTN
        'sotn': 'Settimo della notte', //SOTN
        'ta': 'Angolo crepuscolare', //TA
        'pcr': 'Risoluzione del cerchio polare', //pcrText
        'cc': 'La città più vicina', //CC
        'cd': 'Data più vicina', //CD
        'und': 'Non calcolare', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'Generale', //shafaqG
        'ahmer': 'Crepuscolo Rosso(ahmer)', //shafaqR
        'abyad': 'Crepuscolo bianco (abyad)', //shafaqW
        'return': 'Ritorno', //return
        'general': 'Generale', //v-pills-general-tab
        'location': 'Posizione', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Aspetto esteriore', //v-pills-appearance-tab
        'advanced': 'Avanzate', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Avvio automatico', //autoStartText
        'startAtLaunch': 'Inizia al lancio', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, Tutti i diritti riservati.', //copyright
        'quote': 'Infatti, la preghiera è stata decretata sui credenti con un decreto di tempi determinati.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Alba',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Adesso',
        'timeUntil': 'Tempo fino',
        'startUpSound': 'Avvia suono', //startUpSoundText
        'playSound': "Riproduci suono all'avvio", //startUpSoundText2
        'sysTray': 'Area di notifica', //systrayText
        'minToTray': 'Riduci a icona nel vassoio', //systrayCheckText
        'customSettings': 'Impostazioni personalizzate', //customSettText
        'enableCS': 'Abilita impostazioni di calcolo personalizzate', //enableCalcText
        'fAngle': 'Angolo Fajr', //fajrAngleText
        'mAngle': 'Angolo Maghrib', //maghribAngleText
        'iAngle': 'Angolo Isha', //ishaAngleText
        'delayAfterM': 'Ritardo dopor Maghrib', //delayText
        'delayMin': 'Ritardo (minuti)', //delayFormText
        'france': 'Francia', //France12 15 & 18
        'russia': 'Russia', //Russia
        'gulf': 'Gulf region', //Gulf
        'donate': 'Donate', //menu label
        'preferences': 'Preferences', //menu label
        'resetSettings': 'Reset settings', //menu label
    },
}