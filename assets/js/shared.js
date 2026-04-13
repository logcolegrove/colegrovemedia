/* ═══════════════════════════════════════════════════════════════
   COLEGROVE MEDIA — SHARED JS
   Nav scroll-hide, reveal animations, footer year.
   Imported by every page.
   ═══════════════════════════════════════════════════════════════ */

// ── NAV SCROLL-HIDE ──
(function(){
  var nav = document.getElementById('main-nav');
  if (!nav) return;
  var lastY = window.scrollY, ticking = false;
  window.addEventListener('scroll', function(){
    if (!ticking) {
      requestAnimationFrame(function(){
        var y = window.scrollY;
        if (y < 80) nav.classList.remove('nav-hidden');
        else if (y > lastY) nav.classList.add('nav-hidden');
        else nav.classList.remove('nav-hidden');
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, {passive: true});
})();

// ── REVEAL OBSERVER ──
(function(){
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.1});
  els.forEach(function(el){ io.observe(el); });
})();

// ── FOOTER YEAR ──
(function(){
  var el = document.getElementById('footer-year');
  if (el) el.textContent = '© ' + new Date().getFullYear() + ' Colegrove Media';
})();
