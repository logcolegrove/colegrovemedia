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
  // thumb = optional thumbnail image. Empty/null = fallback SVG icon.
  var SERVICE_CATS = [
    {label:'Video', link:'/services?cat=video',
     desc:'Cinematic storytelling that connects emotionally and drives people to act.',
     items:[
      {name:'Brand Videos',     link:'/brand-videos',     thumb:'/assets/images/mega/thumb-ignis.jpg'},
      {name:'Testimonials',     link:'/testimonials',     thumb:'/assets/images/mega/thumb-team-testimonial.jpg'},
      {name:'Social Clips / Ads', link:'/social-clips',   thumb:'/assets/images/mega/thumb-girls-on-the-run.jpg'},
      {name:'Live Streams',     link:'/live-streams',     thumb:'/assets/images/mega/thumb-salt-lake-summit.jpg'}
    ]},
    {label:'Photo', link:'/services?cat=photo',
     desc:'Stills captured on location or in studio with authentic, polished retouching.',
     items:[
      {name:'Headshots',         link:'/headshots',                thumb:'/assets/images/mega/headshot-dog.jpg'},
      {name:'Real Estate Photos', link:'/real-estate-photos', thumb:'/assets/images/mega/thumb-spring-ridge.jpg'},
      {name:'Drone Photos',      link:'/drone-photos',    thumb:'/assets/images/mega/thumb-iceland.jpg'},
      {name:'3D Virtual Tours',  link:'/3d-virtual-tours', thumb:'', icon:'3d-virtual-tour'}
    ]},
    {label:'Animation', link:'/services?cat=animation',
     desc:'Complex ideas made clear through motion, narration, and sound design.',
     items:[
      {name:'Animated Explainers', link:'/animated-explainers', thumb:'/assets/images/mega/thumb-nonprofit-explainer.jpg'},
      {name:'Motion Graphics',   link:'/motion-graphics', thumb:'/assets/images/mega/thumb-smartsimple.jpg'},
      {name:'Logo Animations',   link:'/logo-animations', thumb:'/assets/images/colegrove-media-favicon.svg'},
      {name:'Website Animations / Lottie', link:'/website-animations', thumb:'', icon:'lottie-animation'}
    ]},
    {label:'Design', link:'/services?cat=design',
     desc:'Visual identity that holds together from first impression to final touchpoint.',
     items:[
      {name:'Graphic Design',    link:'/graphic-design',  thumb:'/assets/images/mega/thumb-foundant-brand.jpg'},
      {name:'Web Design',        link:'/web-design',      thumb:'', icon:'web-design'},
      {name:'Virtual Stagings',  link:'/virtual-stagings', thumb:'', icon:'virtual-staging'},
      {name:'Satellite Maps',    link:'/satellite-maps',  thumb:'/assets/images/mega/thumb-someday-ranch.jpg'}
    ]}
  ];

  // Fallback SVG used when a service has no thumbnail image AND no icon mapped
  var FALLBACK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 10v6m11-11h-6M7 12H1m17.07-7.07l-4.24 4.24M9.17 14.83l-4.24 4.24m0-14.14l4.24 4.24m5.66 5.66l4.24 4.24"/></svg>';

  // Service icons (mirror CS_ICONS from portfolio-data.js for visual consistency
  // with the "Coming Soon" tiles on the work page)
  var ICON_MAP = {
    '3d-virtual-tour':'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 2L18 6v8l-8 4-8-4V6z"/><path d="M10 2v12M2 6l8 4 8-4"/></svg>',
    'web-design':'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="18" height="14" rx="2"/><path d="M1 7h18M5 5h.01M7 5h.01M9 5h.01"/></svg>',
    'satellite-map':'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="7"/><path d="M10 3a9 9 0 0 1 0 14M3 10h14"/></svg>',
    'lottie-animation':'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="M7 10l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'virtual-staging':'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="16" height="9" rx="1"/><path d="M6 7V5a4 4 0 0 1 8 0v2"/></svg>'
  };

  // ── FEATURED PORTFOLIO ──
  // hero = the cinematic centerpiece. grid = 4 supporting pieces showing range.
  // Each href deep-links into /work, where openModal(slug) fires on load.
  var PORTFOLIO_HERO = {
    slug:'powering-wildfire-intelligence',
    title:'Powering Wildfire Intelligence',
    cat:'Brand Video',
    thumb:'/assets/images/mega-lg/thumb-ignis.jpg'
  };
  var PORTFOLIO_GRID = [
    {slug:'iceland-in-motion',             title:'Iceland in Motion',       cat:'Drone / FPV',        thumb:'/assets/images/mega-lg/thumb-iceland.jpg'},
    {slug:'streamline-your-nonprofit',     title:'Streamline Your Nonprofit', cat:'Animated Explainer', thumb:'/assets/images/mega-lg/thumb-nonprofit-explainer.jpg'},
    {slug:'anything-for-the-grasslands',   title:'Anything For The Grasslands', cat:'Testimonial',    thumb:'/assets/images/mega-lg/Anything-For-The-Graslands-Thumbnail-PF.jpg'},
    {slug:'smartsimple-animated-explainer', title:'SmartSimple Explainer',  cat:'Animated Explainer', thumb:'/assets/images/mega-lg/thumb-smartsimple.jpg'}
  ];

  // ── HELPERS ──
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  var CHEV = '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.75l2.5 2.5 2.5-2.5"/></svg>';
  var CHEV_LG = '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5l4 4 4-4"/></svg>';

  // ── PRELOAD MEGA THUMBNAILS ──
  // Warm the browser cache immediately so hovering the mega menu shows
  // images instantly instead of waiting for a network fetch. Uses both
  // <link rel="preload"> (high-priority hint) and Image() (cache trigger).
  (function preloadMegaThumbs(){
    var urls = [];
    SERVICE_CATS.forEach(function(cat){
      cat.items.forEach(function(it){ if (it.thumb) urls.push(it.thumb); });
    });
    if (PORTFOLIO_HERO && PORTFOLIO_HERO.thumb) urls.push(PORTFOLIO_HERO.thumb);
    PORTFOLIO_GRID.forEach(function(p){ if (p.thumb) urls.push(p.thumb); });
    // Dedupe
    var seen = {};
    urls = urls.filter(function(u){ if (seen[u]) return false; seen[u] = true; return true; });
    urls.forEach(function(u){
      var link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = u;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
      // Also kick off a low-level cache fetch as belt-and-suspenders
      var im = new Image();
      im.src = u;
    });
  })();

  // ── BUILD: SERVICES MEGA ──
  function buildServicesMega(){
    var html = '<div class="mega mega-services" id="megaServices" role="menu" aria-label="Services menu">';
    html += '<div class="mega-inner">';
    html += '<div class="mega-services-grid">';
    SERVICE_CATS.forEach(function(cat){
      html += '<div class="mega-col">';
      html += '<a class="mega-cat-title" href="' + esc(cat.link) + '"><span>' + esc(cat.label) + '</span></a>';
      html += '<p class="mega-cat-desc">' + esc(cat.desc) + '</p>';
      html += '<div class="mega-col-items">';
      cat.items.forEach(function(it){
        var thumbInner;
        if (it.thumb) {
          thumbInner = '<img src="' + esc(it.thumb) + '" alt="" loading="eager" decoding="async">';
        } else if (it.icon && ICON_MAP[it.icon]) {
          thumbInner = ICON_MAP[it.icon];
        } else {
          thumbInner = FALLBACK_SVG;
        }
        html += '<a class="mega-item" href="' + esc(it.link) + '" role="menuitem">'
              + '<span class="mega-item-thumb" aria-hidden="true">' + thumbInner + '</span>'
              + '<span class="mega-item-name">' + esc(it.name) + '</span>'
              + '<span class="mega-item-arrow" aria-hidden="true">&rarr;</span>'
              + '</a>';
      });
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '<div class="mega-foot"><a href="/services">See all services <span>&rarr;</span></a></div>';
    html += '</div>';
    html += '</div>';
    return html;
  }

  // ── BUILD: PORTFOLIO MEGA ──
  function buildPortfolioMega(){
    var PLAY_SVG = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 3L15 9L5 15V3Z" fill="rgba(0,242,166,0.95)"/></svg>';
    function featCard(p, isHero){
      var href = '/work?p=' + encodeURIComponent(p.slug);
      return '<a class="mega-feat' + (isHero ? ' mega-feat-hero' : '') + '" href="' + esc(href) + '" role="menuitem">'
           + '<div class="mega-feat-thumb">'
             + '<img src="' + esc(p.thumb) + '" alt="" loading="eager" decoding="async">'
             + '<div class="mega-feat-play" aria-hidden="true">' + PLAY_SVG + '</div>'
           + '</div>'
           + '<div class="mega-feat-meta">'
             + '<div class="mega-feat-cat">' + esc(p.cat) + '</div>'
             + '<div class="mega-feat-title">' + esc(p.title) + '</div>'
           + '</div>'
           + '</a>';
    }

    var html = '<div class="mega mega-portfolio-panel" id="megaPortfolio" role="menu" aria-label="Portfolio menu">';
    html += '<div class="mega-inner">';
    html += '<div class="mega-portfolio-header">Featured Work</div>';
    html += '<div class="mega-portfolio">';
    // Hero (left) + 2x2 grid (right)
    html += '<div class="mega-portfolio-hero">' + featCard(PORTFOLIO_HERO, true) + '</div>';
    html += '<div class="mega-portfolio-grid">';
    PORTFOLIO_GRID.forEach(function(p){ html += featCard(p, false); });
    html += '</div>';
    html += '</div>';
    html += '<div class="mega-foot"><a href="/work">See all work <span>&rarr;</span></a></div>';
    html += '</div>';
    html += '</div>';
    return html;
  }

  // ── BUILD: MOBILE OVERLAY ──
  function buildMobileMenu(active){
    var html = '<div class="mobile-menu" id="mobileMenu" aria-hidden="true">';

    // Services (collapsible, categorized)
    html += '<div class="mm-section">'
          + '<div class="mm-row" data-mm-section="services">'
            + '<a href="/services"' + (active === 'services' ? ' aria-current="page"' : '') + '>Services</a>'
            + '<button class="mm-toggle" type="button" aria-expanded="false" aria-controls="mmSubServices" aria-label="Toggle Services submenu">' + CHEV_LG + '</button>'
          + '</div>'
          + '<div class="mm-sub" id="mmSubServices">';
    SERVICE_CATS.forEach(function(cat){
      html += '<a class="mm-cat-link" href="' + esc(cat.link) + '"><span>' + esc(cat.label) + '</span></a>';
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

    // Contact
    html += '<div class="mm-contact">'
          + '<div class="mm-contact-label">Contact</div>'
          + '<a href="mailto:logan@colegrovemedia.com">logan@colegrovemedia.com</a>'
          + '<a href="tel:4062099945">(406) 209-9945</a>'
          + '<a href="https://maps.app.goo.gl/hJnk5TnfzeGA8EU29">Bozeman, Montana</a>'
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

    var serviceTrigger = '<a class="nav-trigger" href="/services" data-mega="megaServices" aria-haspopup="true" aria-expanded="false" aria-controls="megaServices">Services ' + CHEV + '</a>';
    var portfolioTrigger = '<a class="nav-trigger" href="/work" data-mega="megaPortfolio" aria-haspopup="true" aria-expanded="false" aria-controls="megaPortfolio">Portfolio ' + CHEV + '</a>';

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
