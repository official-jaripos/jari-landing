/**
 * Jaripos Analytics — DataLayer Event Tracker
 * =============================================
 * Pushes custom events to GTM dataLayer for routing to
 * GA4, Meta Pixel, TikTok Pixel, Hotjar, etc.
 * 
 * Events tracked:
 * - cta_click        : All elements with [data-track] attribute
 * - scroll_depth     : 25%, 50%, 75%, 100% milestones
 * - nav_click        : Navigation menu link clicks
 * - whatsapp_click   : WhatsApp button/link clicks
 * - form_submit      : Form submissions
 * - time_on_page     : 30s, 60s, 120s, 300s milestones
 * - page_view        : Enhanced page view with metadata
 */
(function () {
  'use strict';

  // Ensure dataLayer exists
  window.dataLayer = window.dataLayer || [];

  // ─── Utility ──────────────────────────────────────────────
  function pushEvent(eventName, params) {
    window.dataLayer.push(Object.assign({ event: eventName }, params || {}));
  }

  function getPageMeta() {
    return {
      page_title: document.title,
      page_path: window.location.pathname,
      page_url: window.location.href,
      page_referrer: document.referrer || '(direct)'
    };
  }

  // ─── 1. Enhanced Page View ────────────────────────────────
  pushEvent('page_view', getPageMeta());

  // ─── 2. CTA Click Tracking (data-track attribute) ────────
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-track]');
    if (!el) return;

    pushEvent('cta_click', {
      cta_name: el.getAttribute('data-track'),
      cta_text: (el.textContent || '').trim().substring(0, 100),
      cta_url: el.getAttribute('href') || '',
      cta_location: getPageMeta().page_path
    });
  }, true);

  // ─── 3. Scroll Depth Tracking ────────────────────────────
  (function () {
    var milestones = [25, 50, 75, 100];
    var reached = {};

    function getScrollPercent() {
      var docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      var winHeight = window.innerHeight;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (docHeight <= winHeight) return 100;
      return Math.round((scrollTop / (docHeight - winHeight)) * 100);
    }

    var scrollTimer = null;
    window.addEventListener('scroll', function () {
      if (scrollTimer) return;
      scrollTimer = setTimeout(function () {
        scrollTimer = null;
        var pct = getScrollPercent();
        for (var i = 0; i < milestones.length; i++) {
          var m = milestones[i];
          if (pct >= m && !reached[m]) {
            reached[m] = true;
            pushEvent('scroll_depth', {
              scroll_percentage: m,
              page_path: window.location.pathname
            });
          }
        }
      }, 200);
    }, { passive: true });
  })();

  // ─── 4. Navigation Click Tracking ────────────────────────
  document.addEventListener('click', function (e) {
    var link = e.target.closest('.nav-link, .mobile-nav-link');
    if (!link) return;

    pushEvent('nav_click', {
      nav_text: (link.textContent || '').trim(),
      nav_url: link.getAttribute('href') || '',
      nav_type: link.classList.contains('mobile-nav-link') ? 'mobile' : 'desktop'
    });
  }, true);

  // ─── 5. WhatsApp / Phone Click Tracking ──────────────────
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href*="wa.me"], a[href*="whatsapp"], a[href^="tel:"]');
    if (!link) return;

    var href = link.getAttribute('href') || '';
    var isPhone = href.indexOf('tel:') === 0;

    pushEvent('whatsapp_click', {
      wa_url: href,
      wa_type: isPhone ? 'phone' : 'whatsapp',
      wa_location: getPageMeta().page_path,
      wa_text: (link.textContent || '').trim().substring(0, 100)
    });
  }, true);

  // ─── 6. Form Submission Tracking ─────────────────────────
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || form.tagName !== 'FORM') return;

    pushEvent('form_submit', {
      form_id: form.id || '(unnamed)',
      form_action: form.action || '',
      form_page: window.location.pathname
    });
  }, true);

  // ─── 7. Time on Page Tracking ────────────────────────────
  (function () {
    var milestones = [30, 60, 120, 300]; // seconds
    var reached = {};
    var startTime = Date.now();

    setInterval(function () {
      // Pause tracking when tab is hidden
      if (document.hidden) return;

      var elapsed = Math.floor((Date.now() - startTime) / 1000);
      for (var i = 0; i < milestones.length; i++) {
        var m = milestones[i];
        if (elapsed >= m && !reached[m]) {
          reached[m] = true;
          pushEvent('time_on_page', {
            time_seconds: m,
            page_path: window.location.pathname
          });
        }
      }
    }, 5000);
  })();

})();
