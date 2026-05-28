/* ═══════════════════════════════════════════════════════════════
   COLEGROVE MEDIA — COMPONENTS
   Injects nav and footer HTML so they live in one place.

   Usage: Add these to your page:
     <div id="site-nav" data-active="services"></div>
     <div id="site-footer"></div>

   data-active values: home, services, work, about, pricing
   (omit or leave empty for pages with no active nav state)
   ═══════════════════════════════════════════════════════════════ */

(function(){

  // ── SERVICE LIST (mirrors homepage "What We Do") ──
  // link = future per-service page path. Pages without files 404 until built.
  // thumb = optional thumbnail image. Empty string = colored box fallback.
  var SERVICE_CATS = [
    {label:'Video', items:[
      {name:'Brand Videos',     link:'/services/brand-videos',     thumb:'/assets/images/thumb-ignis.jpeg'},
      {name:'Testimonials',     link:'/services/testimonials',     thumb:'/assets/images/thumb-team-testimonial.jpeg'},
      {name:'Social Clips / Ads', link:'/services/social-clips',   thumb:'/assets/images/thumb-girls-on-the-run.jpeg'},
      {name:'Live Streams',     link:'/services/live-streams',     thumb:'/assets/images/thumb-salt-lake-summit.jpeg'}
    ]},
    {label:'Photo', items:[
      {name:'Headshots',         link:'/headshots',                thumb:'https://logcolegrove.github.io/colegrovemedia/assets/images/654c134434654e76e7cb7274_example%204.jpg'},
      {name:'Real Estate Photos', link:'/services/real-estate-photos', thumb:'/assets/images/thumb-spring-ridge.jpeg'},
      {name:'Drone Photos',      link:'/services/drone-photos',    thumb:'/assets/images/thumb-iceland.jpg'},
      {name:'3D Virtual Tours',  link:'/services/3d-virtual-tours', thumb:''}
    ]},
    {label:'Animation', items:[
      {name:'Animated Explainers', link:'/services/animated-explainers', thumb:'/assets/images/thumb-nonprofit-explainer.jpeg'},
      {name:'Motion Graphics',   link:'/services/motion-graphics', thumb:'/assets/images/thumb-smartsimple.jpg'},
      {name:'Logo Animations',   link:'/services/logo-animations', thumb:''},
      {name:'Website Animations / Lottie', link:'/services/website-animations', thumb:''}
    ]},
    {label:'Design', items:[
      {name:'Graphic Design',    link:'/services/graphic-design',  thumb:'/assets/images/thumb-foundant-brand.jpeg'},
      {name:'Web Design',        link:'/services/web-design',      thumb:''},
      {name:'Virtual Stagings',  link:'/services/virtual-stagings', thumb:'/assets/images/thumb-someday-ranch.jpeg'},
      {name:'Satellite Maps',    link:'/services/satellite-maps',  thumb:''}
    ]}
  ];

  // ── FEATURED PORTFOLIO (top 3 by featuredOrder) ──
  var FEATURED_PORTFOLIO = [
    {title:'Powering Wildfire Intelligence', cat:'Brand Video', thumb:'/assets/images/thumb-ignis.jpeg', href:'/work'},
    {title:'Nonprofit Explainer',           cat:'Animated Explainer', thumb:'/assets/images/thumb-nonprofit-explainer.jpeg', href:'/work'},
    {title:'Iceland',                       cat:'Drone / FPV', thumb:'/assets/images/thumb-iceland.jpg', href:'/work'}
  ];

  // ── HELPERS ──
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  var CHEV = '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.75l2.5 2.5 2.5-2.5"/></svg>';
  var CHEV_LG = '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5l4 4 4-4"/></svg>';

  // ── BUILD: SERVICES MEGA ──
  function buildServicesMega(){
    var html = '<div class="mega mega-services" id="megaServices" role="menu" aria-label="Services menu">';
    SERVICE_CATS.forEach(function(cat){
      html += '<div class="mega-col">';
      html += '<div class="mega-cat-title">' + esc(cat.label) + '</div>';
      cat.items.forEach(function(it){
        var thumbStyle = it.thumb ? ' style="background-image:url(' + JSON.stringify(it.thumb).slice(1,-1) + ')"' : '';
        html += '<a class="mega-item" href="' + esc(it.link) + '" role="menuitem">'
              + '<span class="mega-item-thumb"' + thumbStyle + ' aria-hidden="true"></span>'
              + '<span class="mega-item-name">' + esc(it.name) + '</span>'
              + '<span class="mega-item-arrow" aria-hidden="true">&rarr;</span>'
              + '</a>';
      });
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  // ── BUILD: PORTFOLIO MEGA ──
  function buildPortfolioMega(){
    var html = '<div class="mega" id="megaPortfolio" role="menu" aria-label="Portfolio menu">';
    html += '<div class="mega-portfolio">';
    FEATURED_PORTFOLIO.forEach(function(p){
      var thumbStyle = ' style="background-image:url(' + JSON.stringify(p.thumb).slice(1,-1) + ')"';
      html += '<a class="mega-feat" href="' + esc(p.href) + '" role="menuitem">'
            + '<div class="mega-feat-thumb"' + thumbStyle + '></div>'
            + '<div class="mega-feat-meta">'
              + '<div class="mega-feat-cat">' + esc(p.cat) + '</div>'
              + '<div class="mega-feat-title">' + esc(p.title) + '</div>'
            + '</div>'
            + '</a>';
    });
    html += '</div>';
    html += '<div class="mega-foot"><a href="/work">See all work <span>&rarr;</span></a></div>';
    html += '</div>';
    return html;
  }

  // ── BUILD: MOBILE OVERLAY ──
  function buildMobileMenu(active){
    var html = '<div class="mobile-menu" id="mobileMenu" aria-hidden="true">';

    // Services (collapsible)
    html += '<div class="mm-section">'
          + '<div class="mm-row" data-mm-section="services">'
            + '<a href="/services"' + (active === 'services' ? ' aria-current="page"' : '') + '>Services</a>'
            + '<button class="mm-toggle" type="button" aria-expanded="false" aria-controls="mmSubServices" aria-label="Toggle Services submenu">' + CHEV_LG + '</button>'
          + '</div>'
          + '<div class="mm-sub" id="mmSubServices">';
    SERVICE_CATS.forEach(function(cat){
      cat.items.forEach(function(it){
        html += '<a href="' + esc(it.link) + '">' + esc(it.name) + '</a>';
      });
    });
    html += '</div></div>';

    // Portfolio (single link, no submenu)
    html += '<div class="mm-section"><div class="mm-row"><a href="/work"' + (active === 'work' ? ' aria-current="page"' : '') + '>Portfolio</a></div></div>';

    // About / Pricing
    html += '<div class="mm-section"><div class="mm-row"><a href="/about"' + (active === 'about' ? ' aria-current="page"' : '') + '>About</a></div></div>';
    html += '<div class="mm-section"><div class="mm-row"><a href="/pricing"' + (active === 'pricing' ? ' aria-current="page"' : '') + '>Pricing</a></div></div>';

    // CTAs
    html += '<div class="mm-cta-row">'
          + '<a href="/brief" class="btn-fill">Get a Quote</a>'
          + '<a href="https://calendar.app.google/VkHDTa5U2EankpWW6" class="btn-ghost">Book a call</a>'
          + '</div>';

    html += '</div>';
    return html;
  }

  // ── NAV ──
  var navEl = document.getElementById('site-nav');
  if (navEl) {
    var active = navEl.getAttribute('data-active') || '';
    var nav = document.createElement('nav');
    nav.id = 'main-nav';

    var serviceTrigger = '<button class="nav-trigger" type="button" data-mega="megaServices" aria-haspopup="true" aria-expanded="false" aria-controls="megaServices">Services ' + CHEV + '</button>';
    var portfolioTrigger = '<button class="nav-trigger" type="button" data-mega="megaPortfolio" aria-haspopup="true" aria-expanded="false" aria-controls="megaPortfolio">Portfolio ' + CHEV + '</button>';

    nav.innerHTML =
      '<div class="nav-logo"><a href="/" aria-label="Colegrove Media home"><img src="/assets/images/logo.svg" alt="Colegrove Media"></a></div>'
      + '<ul class="nav-links">'
        + '<li>' + serviceTrigger + buildServicesMega() + '</li>'
        + '<li>' + portfolioTrigger + buildPortfolioMega() + '</li>'
        + '<li><a href="/about"' + (active === 'about' ? ' class="active"' : '') + '>About</a></li>'
        + '<li><a href="/pricing"' + (active === 'pricing' ? ' class="active"' : '') + '>Pricing</a></li>'
      + '</ul>'
      + '<a href="/brief" class="nav-cta">Get a Quote</a>'
      + '<button class="nav-burger" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobileMenu">'
        + '<span></span><span></span><span></span>'
      + '</button>';

    // Apply active state on Services / Portfolio triggers
    if (active === 'services' || active === 'work') {
      // simple post-processing: find the right trigger and add a teal hint via class
      setTimeout(function(){
        var triggers = nav.querySelectorAll('.nav-trigger');
        if (active === 'services' && triggers[0]) triggers[0].classList.add('active');
        if (active === 'work' && triggers[1]) triggers[1].classList.add('active');
      }, 0);
    }

    navEl.replaceWith(nav);

    // Mount mobile menu at end of body
    var mm = document.createElement('div');
    mm.innerHTML = buildMobileMenu(active);
    document.body.appendChild(mm.firstChild);
  }

  // ── FOOTER ──
  var footerEl = document.getElementById('site-footer');
  if (footerEl) {
    var footer = document.createElement('footer');
    footer.innerHTML =
      '<div class="footer-main">'
        + '<div>'
          + '<img src="/assets/images/logo.svg" alt="Colegrove Media" class="footer-logo-img">'
          + '<p class="footer-tagline">A creative partner for brands that mean business — video, photo, animation, and design from Bozeman, MT.</p>'
        + '</div>'
        + '<div>'
          + '<div class="footer-col-title">Pages</div>'
          + '<ul class="footer-links">'
            + '<li><a href="/">Home</a></li>'
            + '<li><a href="/work">Portfolio</a></li>'
            + '<li><a href="/about">About</a></li>'
            + '<li><a href="/services">Services</a></li>'
            + '<li><a href="/pricing">Pricing</a></li>'
          + '</ul>'
        + '</div>'
        + '<div>'
          + '<div class="footer-col-title">Services</div>'
          + '<ul class="footer-links">'
            + '<li><a href="/services?cat=video">Video</a></li>'
            + '<li><a href="/services?cat=photo">Photo</a></li>'
            + '<li><a href="/services?cat=animation">Animation</a></li>'
            + '<li><a href="/services?cat=design">Design</a></li>'
          + '</ul>'
        + '</div>'
        + '<div>'
          + '<div class="footer-col-title">Contact</div>'
          + '<ul class="footer-links">'
            + '<li><a href="mailto:logan@colegrovemedia.com">logan@colegrovemedia.com</a></li>'
            + '<li><a href="tel:4062099945">(406) 209-9945</a></li>'
            + '<li><a href="https://maps.app.goo.gl/hJnk5TnfzeGA8EU29">Bozeman, Montana</a></li>'
            + '<li><a href="https://calendar.app.google/VkHDTa5U2EankpWW6">Schedule a Call</a></li>'
            + '<li><a href="/brief">Project Brief</a></li>'
          + '</ul>'
        + '</div>'
      + '</div>'
      + '<div class="footer-bottom">'
        + '<span id="footer-year"></span>'
        + '<span>Bozeman, Montana</span>'
        + '<a href="/terms">Terms &amp; Conditions</a>'
      + '</div>';
    footerEl.replaceWith(footer);
  }

})();
