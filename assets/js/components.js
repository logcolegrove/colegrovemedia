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

  // ── NAV ──
  var navEl = document.getElementById('site-nav');
  if (navEl) {
    var active = navEl.getAttribute('data-active') || '';
    var nav = document.createElement('nav');
    nav.id = 'main-nav';
    nav.innerHTML =
      '<div class="nav-logo"><a href="/"><img src="/assets/images/logo.svg" alt="Colegrove Media"></a></div>'
      + '<ul class="nav-links">'
        + '<li><a href="/services"' + (active === 'services' ? ' class="active"' : '') + '>Services</a></li>'
        + '<li><a href="/work"' + (active === 'work' ? ' class="active"' : '') + '>Portfolio</a></li>'
        + '<li><a href="/about"' + (active === 'about' ? ' class="active"' : '') + '>About</a></li>'
        + '<li><a href="/pricing"' + (active === 'pricing' ? ' class="active"' : '') + '>Pricing</a></li>'
      + '</ul>'
      + '<a href="/brief" class="nav-cta">Get a Quote</a>';
    navEl.replaceWith(nav);
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
