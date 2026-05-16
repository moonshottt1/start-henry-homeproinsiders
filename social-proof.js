/* Social Proof Toasts — Bathroom Remodel */
(function() {
  // Inject styles
  var style = document.createElement('style');
  style.textContent = '.sp-toast{position:fixed;bottom:20px;left:16px;background:#fff;border-radius:10px;box-shadow:0 6px 28px rgba(0,0,0,0.2);padding:14px 18px;display:flex;align-items:center;gap:10px;max-width:65vw;z-index:9000;transform:translateX(-120%) scale(0.9);transition:transform 0.35s cubic-bezier(0.175,0.885,0.32,1.275);border-left:4px solid #16a34a}.sp-toast.show{transform:translateX(0) scale(1)}.sp-toast-icon{font-size:1.3rem;flex-shrink:0}.sp-toast-text{font-size:0.78rem;color:#333;line-height:1.35}.sp-toast-text strong{color:#111}.sp-toast-time{font-size:0.65rem;color:#999;margin-top:2px}.sp-flag{position:fixed;bottom:82px;right:29px;font-size:1.3rem;z-index:9998}.sp-chat{position:fixed;bottom:20px;right:20px;width:56px;height:56px;background:#2563eb;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(37,99,235,0.4);z-index:9999;text-decoration:none;transition:transform 0.2s,box-shadow 0.2s;animation:sp-pulse 2s infinite}.sp-chat:hover{transform:scale(1.1);box-shadow:0 6px 24px rgba(37,99,235,0.5)}@keyframes sp-pulse{0%,100%{box-shadow:0 4px 16px rgba(37,99,235,0.4)}50%{box-shadow:0 4px 24px rgba(37,99,235,0.6)}}';
  document.head.appendChild(style);

  // Inject toast HTML
  var div = document.createElement('div');
  div.className = 'sp-toast';
  div.id = 'sp-toast';
  div.innerHTML = '<span class="sp-toast-icon" id="sp-icon"></span><div><div class="sp-toast-text" id="sp-msg"></div><div class="sp-toast-time" id="sp-time"></div></div>';
  document.body.appendChild(div);

  // Chat bubble + flag above it
  var ctaLink = document.querySelector('a[href*="/cf/click"]');
  var ctaHref = ctaLink ? ctaLink.getAttribute('href') : '#';

  var flag = document.createElement('div');
  flag.className = 'sp-flag';
  flag.textContent = '\uD83C\uDDFA\uD83C\uDDF8';
  document.body.appendChild(flag);

  var chat = document.createElement('a');
  chat.className = 'sp-chat';
  chat.href = ctaHref;
  chat.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/><circle cx="8" cy="10" r="1.2"/><circle cx="12" cy="10" r="1.2"/><circle cx="16" cy="10" r="1.2"/></svg>';
  document.body.appendChild(chat);

  // Remove any existing flag/chat elements from the page to avoid duplicates
  document.querySelectorAll('.flag, .chat-bubble').forEach(function(el) { el.remove(); });

  var names = ['James','Mary','Robert','Jennifer','Michael','Linda','David','Sarah','William','Jessica','Richard','Karen','Thomas','Nancy','Chris','Lisa','Daniel','Betty','Matthew','Sandra','Anthony','Ashley','Mark','Dorothy','Steven','Emily','Andrew','Donna','Kevin','Carol','Brian','Amanda','George','Melissa','Edward','Deborah','Jason','Stephanie','Ryan','Rebecca','Jacob','Sharon','Gary','Laura','Tim','Cynthia','Jose','Kathleen','Larry','Amy'];

  var templates = [
    '{name} from {city} just locked in a competitive quote',
    '{name} in {city} just got matched with top contractors',
    'A homeowner in {city} just secured contractor pricing',
    '{name} from {city} just claimed their spot',
    '{name} in {city} just got their remodel estimate back',
    'A {city} homeowner just got connected — contractors are booking fast',
    '{name} from {city} just grabbed a quote before prices change',
    '{name} in {city} just got matched — contractors are responding fast',
    '{name} from {city} just saw the latest remodel pricing',
    'A homeowner near {city} just jumped on new rates',
    '{name} in {city} just submitted — contractors are responding now',
    '{name} from {city} just compared prices and picked a contractor',
    'A {city} resident just got 3 contractor quotes back',
    '{name} in {city} just took advantage of current pricing',
    '{name} from {city} just started — spots are filling up',
    '{name} in {city} just got matched with a trusted contractor',
    'A {city} homeowner just connected with a 5-star workmanship contractor',
    '{name} from {city} just got paired with a trusted, top-rated contractor'
  ];

  var icons = ['\u2705', '\uD83D\uDD25', '\uD83D\uDEE0\uFE0F', '\uD83C\uDFE0'];
  var times = ['Just now','1 min ago','2 mins ago','3 mins ago','5 mins ago','7 mins ago','9 mins ago','12 mins ago','15 mins ago','18 mins ago','21 mins ago','24 mins ago','28 mins ago','32 mins ago','37 mins ago'];

  var toast = document.getElementById('sp-toast');
  var msgEl = document.getElementById('sp-msg');
  var timeEl = document.getElementById('sp-time');
  var iconEl = document.getElementById('sp-icon');
  var city = 'your area';

  window._spSetCity = function(c) { if (c) city = c; };

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function showToast() {
    var name = pick(names);
    var tpl = pick(templates);
    var msg = tpl.replace('{name}', name).replace('{city}', city);
    iconEl.textContent = pick(icons);
    msgEl.innerHTML = '<strong>' + msg + '</strong>';
    timeEl.textContent = pick(times);
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, 4000);
  }

  fetch('https://ipapi.co/json/').then(function(r){return r.json()}).then(function(d){
    if(d&&d.city){city=d.city;if(window._spSetCity)window._spSetCity(d.city)}
  }).catch(function(){
    fetch('https://ip-api.com/json/?fields=city').then(function(r){return r.json()}).then(function(d){
      if(d&&d.city){city=d.city}
    }).catch(function(){});
  });

  setTimeout(function() { showToast(); setInterval(showToast, 7000); }, 2000);
})();
