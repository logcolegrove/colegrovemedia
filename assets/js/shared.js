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

// ── DESKTOP MEGA MENU + MOBILE HAMBURGER ──
(function(){
  var nav = document.getElementById('main-nav');
  if (!nav) return;

  var triggers = nav.querySelectorAll('.nav-trigger');
  var burger = nav.querySelector('.nav-burger');
  var mobile = document.getElementById('mobileMenu');

  // Track all mega panels and the trigger that owns each
  var panels = {};
  triggers.forEach(function(t){
    var id = t.getAttribute('data-mega');
    var panel = document.getElementById(id);
    if (panel) panels[id] = {trigger:t, panel:panel};
  });

  function openMega(id){
    Object.keys(panels).forEach(function(k){
      if (k === id) {
        panels[k].panel.classList.add('open');
        panels[k].trigger.setAttribute('aria-expanded', 'true');
      } else {
        panels[k].panel.classList.remove('open');
        panels[k].trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }
  function closeAllMega(){
    Object.keys(panels).forEach(function(k){
      panels[k].panel.classList.remove('open');
      panels[k].trigger.setAttribute('aria-expanded', 'false');
    });
  }

  // Desktop: hover to open, click toggles
  Object.keys(panels).forEach(function(id){
    var t = panels[id].trigger;
    var p = panels[id].panel;
    var li = t.parentElement;
    var hoverT;

    li.addEventListener('mouseenter', function(){
      clearTimeout(hoverT);
      if (window.matchMedia('(hover: hover)').matches) openMega(id);
    });
    li.addEventListener('mouseleave', function(){
      hoverT = setTimeout(function(){
        if (window.matchMedia('(hover: hover)').matches) closeAllMega();
      }, 120);
    });
    t.addEventListener('click', function(e){
      e.preventDefault();
      var isOpen = p.classList.contains('open');
      if (isOpen) closeAllMega(); else openMega(id);
    });
    t.addEventListener('keydown', function(e){
      if (e.key === 'Escape') { closeAllMega(); t.focus(); }
      else if (e.key === 'ArrowDown') {
        e.preventDefault();
        openMega(id);
        var first = p.querySelector('a');
        if (first) first.focus();
      }
    });
    p.addEventListener('keydown', function(e){
      if (e.key === 'Escape') { closeAllMega(); t.focus(); }
    });
  });

  // Click outside closes mega
  document.addEventListener('click', function(e){
    if (e.target.closest('.nav-trigger') || e.target.closest('.mega')) return;
    closeAllMega();
  });

  // Mobile hamburger toggle
  if (burger && mobile) {
    function openMobile(){
      mobile.classList.add('open');
      mobile.setAttribute('aria-hidden', 'false');
      burger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('mm-open');
    }
    function closeMobile(){
      mobile.classList.remove('open');
      mobile.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('mm-open');
      // Also close any open submenus inside
      mobile.querySelectorAll('.mm-toggle[aria-expanded="true"]').forEach(function(b){
        b.setAttribute('aria-expanded', 'false');
        var sub = document.getElementById(b.getAttribute('aria-controls'));
        if (sub) sub.classList.remove('open');
      });
    }
    burger.addEventListener('click', function(){
      if (mobile.classList.contains('open')) closeMobile(); else openMobile();
    });
    // Esc closes
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && mobile.classList.contains('open')) closeMobile();
    });
    // Close when a nav link is tapped
    mobile.addEventListener('click', function(e){
      var a = e.target.closest('a');
      if (a && a.getAttribute('href')) closeMobile();
    });
    // Submenu toggles
    mobile.querySelectorAll('.mm-toggle').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var sub = document.getElementById(btn.getAttribute('aria-controls'));
        if (!sub) return;
        var open = sub.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    // Auto-close when viewport crosses to desktop width
    var resizeT;
    window.addEventListener('resize', function(){
      clearTimeout(resizeT);
      resizeT = setTimeout(function(){
        if (window.innerWidth > 960 && mobile.classList.contains('open')) closeMobile();
      }, 120);
    });
  }
})();
