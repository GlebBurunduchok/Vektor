(() => {
  'use strict';
  const en = {
    privacyLink:'Privacy Policy', termsLink:'Terms of Use', creditsLink:'Sources and licences', skip:'Skip to content', navigation:'Main navigation', navFeatures:'Features', navScreens:'Interface', navInstall:'How to install', navDownload:'Download',
    earlyAccess:'Ready for your first trips', heroLine1:'Your journey.', heroLine2:'Your direction.',
    heroLead:'Less clutter on your screen. More focus on the road. Vektor helps you find a place, plan your route and see the next turn.',
    downloadFor:'Download for', comingSoon:'Coming soon for', iphoneSoon:'iPhone — coming soon', releaseNote:'· test version · Android 8.0+', installHelp:'Installing an APK for the first time?',
    orbitLabel:'Start from where you are', homeAlt:'Vektor home screen with a map of Kyiv and address search', floatingTitle:'A familiar road. A fresh perspective.', floatingText:'By car or on foot', realScreenshot:'Actual screen from the test version',
    strip1:'No account needed', strip2:'Ukrainian & English', strip3:'Made for the road',
    featuresLabel:'01 / HERE FOR THE EVERYDAY', featuresTitle:'What matters, in plain sight.', featuresLead:'From “Where to?” to your next turn. Get going without learning a complicated app.',
    feature1Title:'A route that keeps you going', feature1Text:'Turns, distance and the street name on one screen. Left the route? Vektor requests a new one when your location is accurate enough.', feature1Foot:'Driving & walking',
    feature2Title:'Places worth coming back to', feature2Text:'Addresses, places, home and work. Save your favourites, revisit recent searches or choose a point right on the map.', feature2Foot:'Search & saved places',
    feature3Title:'Comfort, at your own pace', feature3Text:'A light map by day, a dark one by night. Your next turn stays within reach in a notification, even with the screen locked.', feature3Foot:'Two themes & background guidance',
    screensLabel:'02 / EVERYTHING IN ITS PLACE', screensTitle:'The map. The road.<br>Nothing in the way.', screensLead:'Meet Vektor before your first trip. These are real screens from the app.', screensAria:'App screens',
    tabHome:'Your everyday starting point', tabHomeText:'Search, favourites, home and work.', tabNight:'Different time. Same simplicity.', tabNightText:'A dark map for evening routes.', tabReports:'Mark what matters', tabReportsText:'Animals, ice, obstacles and other events.',
    reportsNote:'Reports are currently stored on your phone. Sharing reports with other drivers is planned.', screenHomeCaption:'Open. Find. Go.', screenNightCaption:'Your route, in a different light.', screenReportsCaption:'See something? Mark it on the map.',
    installLabel:'03 / BE ONE OF THE FIRST', installTitle:'A few steps.<br>Then you’re on your way.', installLead:'For now, Vektor is installed using an APK file. The app is free and there is no account to create.',
    step1Title:'Download the APK', step1Text:'Tap “Download for Android” on this website. Wait for the download to finish.', step2Title:'Open the file', step2Text:'Open Vektor.apk from your downloads. If Android asks, allow this browser to install apps.',
    step3Title:'Grant access', step3Text:'Allow precise location while using the app. Enable notifications to see turns on your lock screen.', step4Title:'Choose your direction', step4Text:'Find an address, check the route and tap “Start navigation”. Go outdoors for your first GPS test.',
    downloadApk:'Download APK', installNote:'Android 8.0+ · Maps, search and route recalculation require an internet connection.',
    nextLabel:'MORE AHEAD', nextTitle:'Vektor grows<br>with every journey.', nextLead:'This is the first test version. We are gradually improving guidance and adding things that help on the road.',
    next1:'Reports from other drivers', next2:'Better address and footpath coverage', next3:'Better guidance with weak GPS', planned:'Planned', research:'Researching', forIphone:'for iPhone', soon:'Coming soon',
    faqLabel:'BEFORE YOU GO', faqTitle:'Questions?<br>Here are the answers.',
    faq1q:'Does Vektor already work without GPS?', faq1a:'Primary guidance uses Android location: GPS or network sources. Vektor tells you when accuracy is insufficient. The new test build also estimates motion from sensors using a known or manually chosen position. Error accumulates; this does not guarantee accurate guidance or protection against jamming.',
    faq2q:'Do I need an internet connection?', faq2a:'Yes. The current version needs the internet to load maps, search for addresses, and plan or recalculate routes. Full offline maps have not been added yet.',
    faq3q:'What if I take a wrong turn?', faq3a:'With an internet connection, Vektor automatically requests a new route after a confirmed deviation. It needs several fresh, accurate location fixes so ordinary GPS error does not trigger unnecessary recalculations.',
    faq4q:'Can I see turns when my screen is locked?', faq4a:'During an active trip, Vektor shows the next turn, distance and street in an ongoing notification. Allow notifications and enable their content on the lock screen in your phone settings.',
    faq5q:'Can other drivers see my reports?', faq5a:'Reports are local for now: they are only visible on the phone where they were created. Sharing between drivers and alerts about events ahead are planned separately.',
    faq6q:'What happens to my data?', faq6a:'This website uses no analytics, advertising trackers or sign-up forms. Your language preference is saved only in your browser. Saved places and app reports stay on your phone; coordinates and queries needed for maps, search and routes are sent to the respective mapping services. GitHub, as the host, may keep technical request logs.',
    faq7q:'When will the iPhone version arrive?', faq7a:'An iPhone version is planned. There is no release date yet. An installation link will appear here when it is ready.',
    downloadLabel:'SEE YOU ON THE ROAD', downloadTitle:'Your next journey<br>starts here.', downloadLead:'Try the first version of Vektor for Android.', downloadAndroid:'Download for Android', beta:'test version',
    footerMotto:'Keep your direction.', footerQuestions:'Questions & answers ↗', safety:'Vektor is a navigation aid. Follow road signs and actual traffic conditions. Set up routes and add reports only after stopping safely.'
  };
  const nodes = [...document.querySelectorAll('[data-i18n], [data-i18n-alt], [data-i18n-aria]')];
  const originals = new Map(nodes.map(node => [node, {html:node.innerHTML, alt:node.getAttribute('alt'), aria:node.getAttribute('aria-label')}]));
  const screens = {
    home:{src:'assets/home.webp', caption:'screenHomeCaption', uk:'Відкрив. Знайшов. Поїхав.', alt:{uk:'Головний екран Vektor: карта та пошук', en:'Vektor home screen: map and search'}},
    night:{src:'assets/night.webp', caption:'screenNightCaption', uk:'Твій маршрут в іншому світлі.', alt:{uk:'Темна тема Vektor з побудованим маршрутом', en:'Vektor dark theme with a planned route'}},
    reports:{src:'assets/reports.webp', caption:'screenReportsCaption', uk:'Побачив? Познач на карті.', alt:{uk:'Вибір дорожньої події у Vektor', en:'Selecting a road report in Vektor'}}
  };
  let language='uk';
  let selectedScreen='home';
  function updateScreen(key, focus=false) {
    if(!screens[key]) return;
    selectedScreen=key;
    const screen=screens[key];
    document.querySelectorAll('[data-screen]').forEach(button=>{
      const selected=button.dataset.screen===key;
      button.classList.toggle('active',selected);
      button.setAttribute('aria-selected',String(selected));
      button.tabIndex=selected?0:-1;
      if(selected && focus) button.focus();
    });
    const image=document.getElementById('screen-image');
    image.src=screen.src;
    image.alt=screen.alt[language];
    const caption=document.getElementById('screen-caption');
    caption.textContent=language==='en'?en[screen.caption]:screen.uk;
    document.getElementById('screen-panel').setAttribute('aria-labelledby',`tab-${key}`);
  }
  function setLanguage(next, remember=true) {
    language=next==='en'?'en':'uk';
    document.documentElement.lang=language;
    document.querySelectorAll('[data-legal]').forEach(link=>link.href=`${link.dataset.legal}-${language}.html`);
    nodes.forEach(node=>{
      const original=originals.get(node);
      if(node.dataset.i18n) node.innerHTML=language==='en'?(en[node.dataset.i18n]??original.html):original.html;
      if(node.dataset.i18nAlt) node.alt=language==='en'?(en[node.dataset.i18nAlt]??original.alt):original.alt;
      if(node.dataset.i18nAria) node.setAttribute('aria-label',language==='en'?(en[node.dataset.i18nAria]??original.aria):original.aria);
    });
    document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===language)));
    document.title=language==='en'?'Vektor — your direction':'Vektor — твій напрямок';
    document.querySelector('meta[name="description"]').content=language==='en'?'Vektor for Android. Routes, clear turns, light and dark maps. Download the APK test version. iPhone coming soon.':'Vektor — навігатор для Android. Маршрути, зрозумілі повороти, світла й темна карта. Завантажте тестову версію APK. iPhone — скоро.';
    updateScreen(selectedScreen);
    if(remember) {
      try {localStorage.setItem('vektor-language',language);} catch {}
      try {const url=new URL(location.href); url.searchParams.set('lang',language); history.replaceState(null,'',url);} catch {}
    }
  }
  document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
  document.querySelectorAll('[data-screen]').forEach(button=>{
    button.addEventListener('click',()=>updateScreen(button.dataset.screen));
    button.addEventListener('keydown',event=>{
      const keys=Object.keys(screens);
      let index=keys.indexOf(selectedScreen);
      if(event.key==='ArrowRight'||event.key==='ArrowDown') index=(index+1)%keys.length;
      else if(event.key==='ArrowLeft'||event.key==='ArrowUp') index=(index+keys.length-1)%keys.length;
      else if(event.key==='Home') index=0;
      else if(event.key==='End') index=keys.length-1;
      else return;
      event.preventDefault(); updateScreen(keys[index],true);
    });
  });
  const config=window.VEKTOR_CONFIG || {};
  if(config.apkUrl) {
    try {
      const url=new URL(config.apkUrl,document.baseURI);
      if(['http:','https:','file:'].includes(url.protocol)) document.querySelectorAll('.apk-link').forEach(link=>link.href=url.href);
    } catch {}
  }
  document.querySelectorAll('[data-version]').forEach(node=>node.textContent=config.version||'1.0');
  document.querySelectorAll('[data-apk-size]').forEach(node=>node.textContent=config.apkSize||'53.1 MB');
  document.querySelectorAll('[data-year]').forEach(node=>node.textContent=String(new Date().getFullYear()));
  let saved;
  try {saved=localStorage.getItem('vektor-language');} catch {}
  setLanguage(new URLSearchParams(location.search).get('lang')||saved||'uk',false);
})();
