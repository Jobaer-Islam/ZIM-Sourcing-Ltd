/* ZIM Sourcing Ltd, site behaviour. No dependencies. */
(function () {
  'use strict';

  try { console.info('ZIM Sourcing build', document.documentElement.dataset.build || 'dev'); } catch (e) {}

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var suspendable = [];            // background work paused while the menu is open

  /* ---------------------------------------------------------------- theme */
  var STORE = 'zim-theme';
  function currentTheme() {
    return root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  document.addEventListener('click', function (e) {
    if (!e.target.closest || !e.target.closest('.theme-toggle')) return;
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(STORE, next); } catch (err) {}
  });

  /* ------------------------------------------------------- sticky header */
  var header = document.querySelector('.header');
  var toTop = document.querySelector('.totop');
  function onScroll() {
    if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
    if (toTop) toTop.classList.toggle('is-vis', window.scrollY > 620);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --------------------------------------------------------------- drawer
     The scroll lock is a single class on <html>. Never an inline style:
     an inline style left behind by an error locks the page permanently. */
  var drawer = document.querySelector('.drawer');
  var lastFocus = null;

  function lockScroll(on) { root.classList.toggle('nav-open', !!on); }

  // Screen readers announce the menu button by this attribute, so it has to
  // follow the drawer's actual state rather than sitting at its markup value.
  function setExpanded(on) {
    document.querySelectorAll('.nav-toggle').forEach(function (b) {
      b.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
  }

  function openDrawer() {
    if (!drawer || drawer.classList.contains('is-open')) return;
    lastFocus = document.activeElement;
    drawer.classList.add('is-open');
    lockScroll(true);
    setExpanded(true);
    try { suspendable.forEach(function (t) { t.pause(); }); } catch (e) {}
    var first = drawer.querySelector('button, a');
    if (first) first.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    lockScroll(false);
    setExpanded(false);
    try { suspendable.forEach(function (t) { t.resume(); }); } catch (e) {}
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    lastFocus = null;
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    if (e.target.closest('.nav-toggle')) { openDrawer(); return; }
    if (e.target.closest('[data-drawer-close]')) { closeDrawer(); return; }
    if (e.target.classList && e.target.classList.contains('drawer-scrim')) { closeDrawer(); return; }
    // Any link inside the drawer closes it. Same-page anchors do not reload,
    // so without this the scroll lock would survive and look like a freeze.
    if (e.target.closest('.drawer a')) { closeDrawer(); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) closeDrawer();
  });

  // Focus trap
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || !drawer || !drawer.classList.contains('is-open')) return;
    var f = drawer.querySelectorAll('a[href], button:not([disabled]), input, select, textarea');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* ------------------------------------------------------------ failsafes
     The page must never be left unscrollable, whatever else goes wrong. */
  function release() {
    lockScroll(false);
    setExpanded(false);
    if (drawer) drawer.classList.remove('is-open');
  }
  window.addEventListener('error', release);
  window.addEventListener('unhandledrejection', release);
  window.addEventListener('hashchange', function () {
    if (drawer && drawer.classList.contains('is-open')) closeDrawer(); else release();
  });
  window.addEventListener('pageshow', release);
  setInterval(function () {
    if (root.classList.contains('nav-open') && !(drawer && drawer.classList.contains('is-open'))) release();
  }, 1000);

  /* ------------------------------------------------- mobile accordion nav */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.m-acc-btn');
    if (!btn) return;
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    if (panel) panel.classList.toggle('is-open', !open);
  });

  /* ------------------------------------------------- desktop dropdown keys */
  document.querySelectorAll('.nav-item > .nav-link[aria-haspopup]').forEach(function (link) {
    link.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'ArrowDown') return;
      e.preventDefault();
      var item = link.closest('.nav-item');
      var open = item.classList.toggle('is-open');
      link.setAttribute('aria-expanded', String(open));
      if (open) { var a = item.querySelector('.dropdown a'); if (a) a.focus(); }
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.nav-item.is-open').forEach(function (i) {
      if (!i.contains(e.target)) {
        i.classList.remove('is-open');
        var l = i.querySelector('[aria-haspopup]');
        if (l) l.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ------------------------------------------------------------ accordions */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.acc-btn');
    if (!btn) return;
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    var open = btn.getAttribute('aria-expanded') === 'true';
    var group = btn.closest('[data-acc-single]');
    if (group && !open) {
      group.querySelectorAll('.acc-btn[aria-expanded="true"]').forEach(function (o) {
        o.setAttribute('aria-expanded', 'false');
        var p = document.getElementById(o.getAttribute('aria-controls'));
        if (p) p.classList.remove('is-open');
      });
    }
    btn.setAttribute('aria-expanded', String(!open));
    if (panel) panel.classList.toggle('is-open', !open);
  });

  /* --------------------------------------------------------------- reveal */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(function (r) { r.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
      reveals.forEach(function (r, i) {
        r.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
        io.observe(r);
      });
    }
  }

  /* ------------------------------------------------------------- counters */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window && !reduce) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target; co.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var dec = (String(target).split('.')[1] || '').length;
        var start = null;
        function tick(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / 1300, 1);
          el.textContent = (target * (1 - Math.pow(1 - p, 3))).toFixed(dec) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { co.observe(c); });
  }

  /* --------------------------------------------------------- hero slides */
  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    var idx = 0, timer = null, visible = true, allowed = true;
    var HOLD = 6000;

    function show(n) {
      var prev = idx;
      idx = (n + slides.length) % slides.length;
      if (prev === idx) return;
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('is-prev');
        slides[i].classList.toggle('is-active', i === idx);
      }
      // Hold the outgoing frame opaque underneath. Fading both at once
      // leaves a gap where neither is visible and the hero flashes dark.
      slides[prev].classList.add('is-prev');
      setTimeout(function () { slides[prev].classList.remove('is-prev'); }, 1500);
    }
    function sync() {
      clearInterval(timer);
      if (visible && allowed && !document.hidden && !reduce) timer = setInterval(function () { show(idx + 1); }, HOLD);
    }

    suspendable.push({
      pause: function () { allowed = false; sync(); },
      resume: function () { allowed = true; sync(); }
    });
    var hero = document.querySelector('.hero');
    if (hero && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; sync(); },
        { threshold: 0.01 }).observe(hero);
    }
    document.addEventListener('visibilitychange', sync);
    sync();
  }

  /* ---------------------------------------------------- ambient spotlight */
  var ambient = document.querySelector('.ambient');
  if (ambient && window.matchMedia('(hover: hover)').matches &&
      window.matchMedia('(min-width: 1081px)').matches && !reduce) {
    var px = 0, py = 0, queued = false;
    window.addEventListener('pointermove', function (e) {
      px = e.clientX; py = e.clientY;
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () {
        ambient.style.setProperty('--mx', px + 'px');
        ambient.style.setProperty('--my', py + 'px');
        queued = false;
      });
    }, { passive: true });
  }

  /* ------------------------------------------------------- scroll progress */
  var bar = document.querySelector('.progress');
  if (bar && !reduce) {
    var ticking = false;
    function draw() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + Math.min(Math.max(max > 0 ? window.scrollY / max : 0, 0), 1) + ')';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(draw); }
    }, { passive: true });
    draw();
  }

  /* --------------------------------------------- looping strips: clone + pause */
  document.querySelectorAll('.marquee').forEach(function (m) {
    var track = m.querySelector('.marquee-track');
    if (track && !m.dataset.cloned) { m.appendChild(track.cloneNode(true)); m.dataset.cloned = '1'; }
  });
  var loops = document.querySelectorAll('.marquee-track, .ticker-track');
  if (loops.length && 'IntersectionObserver' in window) {
    var lo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        en.target.style.animationPlayState = en.isIntersecting ? '' : 'paused';
      });
    }, { threshold: 0 });
    loops.forEach(function (el) { lo.observe(el); });
  }

  /* --------------------------------------------------------------- ticker */
  var ticker = document.querySelector('[data-ticker]');
  if (ticker) {
    var track = ticker.querySelector('.ticker-track');
    function esc(v) {
      return String(v).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    }
    function dup() {
      Array.prototype.slice.call(track.children).forEach(function (li) {
        track.appendChild(li.cloneNode(true));
      });
    }
    dup();
    fetch(ticker.dataset.src || 'assets/data/industry-news.json', { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || !d.items || !d.items.length) return;
        track.innerHTML = d.items.map(function (it) {
          var inner = '<span class="tick-date">' + esc(it.date || '') + '</span>' +
                      '<span class="tick-text">' + esc(it.text || '') + '</span>' +
                      '<span class="tick-src">' + esc(it.source || '') + '</span>';
          return '<li class="tick-item">' +
            (it.url ? '<a href="' + esc(it.url) + '" target="_blank" rel="noopener">' + inner + '</a>' : inner) +
            '</li>';
        }).join('');
        dup();
      })
      .catch(function () {});
  }

  /* ------------------------------------------------------- footer clock
     Dhaka is UTC+6 with no daylight saving, so the offset is fixed and the
     time is correct regardless of where the visitor is. */
  var clock = document.querySelector('[data-clock]');
  if (clock) {
    var elTime = clock.querySelector('[data-clock-time]');
    var elDot = clock.querySelector('[data-clock-dot]');
    var elText = clock.querySelector('[data-clock-status]');
    var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function tickClock() {
      var now = new Date();
      var dhaka = new Date(now.getTime() + (now.getTimezoneOffset() + 360) * 60000);
      var h = dhaka.getHours(), m = dhaka.getMinutes(), day = dhaka.getDay();
      elTime.textContent = (h % 12 || 12) + ':' + (m < 10 ? '0' : '') + m + ' ' + (h < 12 ? 'am' : 'pm');

      var state, label;
      if (day === 0) {
        state = 'is-appt';
        label = 'Sunday, by appointment';
      } else if (h >= 10 && h < 18) {
        state = 'is-open';
        label = 'Open now';
      } else {
        state = 'is-shut';
        var next = h < 10 ? 'today' : (day === 6 ? 'Monday' : DAYS[(day + 1) % 7]);
        label = 'Closed, opens ' + next + ' at 10 am';
      }
      elDot.className = 'clock-dot ' + state;
      elText.textContent = label;
    }
    tickClock();
    setInterval(tickClock, 30000);
  }


  /* ------------------------------------------------------------------ film
     The video carries preload="none", so nothing is fetched until a buyer
     presses play. The cover is a real button, not an overlay div, so it is
     reachable by keyboard and announced correctly. */
  document.querySelectorAll('[data-film]').forEach(function (film) {
    var video = film.querySelector('[data-film-video]');
    var cover = film.querySelector('[data-film-play]');
    if (!video || !cover) return;
    function fail() {
      // a missing or unplayable file should say so, not sit there looking broken
      film.classList.remove('is-playing');
      var meta = film.querySelector('.film-meta');
      if (meta && !film.dataset.failed) {
        film.dataset.failed = '1';
        meta.textContent = 'The film could not be loaded. It may still be uploading, ' +
                           'or the file is missing from assets/video/.';
      }
    }
    cover.addEventListener('click', function () {
      film.classList.add('is-playing');
      var p = video.play();
      if (p && p.catch) p.catch(function () { video.controls = true; });
      video.focus({ preventScroll: true });
    });
    video.addEventListener('ended', function () { film.classList.remove('is-playing'); });
    video.addEventListener('error', fail);
    var src = video.querySelector('source');
    if (src) src.addEventListener('error', fail);
  });

  /* --------------------------------------------------------------- tracker
     Each stage explains itself on demand. One open at a time keeps the panel
     the same height it was designed at. */
  document.querySelectorAll('[data-tracker]').forEach(function (panel) {
    var buttons = [].slice.call(panel.querySelectorAll('.track-btn'));
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        buttons.forEach(function (other) {
          other.setAttribute('aria-expanded', 'false');
          var d = document.getElementById(other.getAttribute('aria-controls'));
          if (d) d.hidden = true;
        });
        if (!open) {
          btn.setAttribute('aria-expanded', 'true');
          var det = document.getElementById(btn.getAttribute('aria-controls'));
          if (det) det.hidden = false;
        }
      });
    });
  });


  /* ------------------------------------------------------------ copy chips */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var label = btn.querySelector('span');
    function flash(text, ok) {
      btn.classList.toggle('is-done', !!ok);
      if (label) label.textContent = text;
      setTimeout(function () {
        btn.classList.remove('is-done');
        if (label) label.textContent = 'Copy';
      }, 1800);
    }
    function legacy(text) {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.top = '0'; ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select(); ta.setSelectionRange(0, text.length);
      var done = false;
      try { done = document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      return done;
    }
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () { flash('Copied', true); },
          function () { var done = legacy(text); flash(done ? 'Copied' : 'Select and copy', done); }
        );
      } else {
        var done = legacy(text);
        flash(done ? 'Copied' : 'Select and copy', done);
      }
    });
  });

  /* --------------------------------------------------------- time zone panel
     Both clocks are derived from the visitor's own device through Intl, so
     daylight saving is handled wherever they happen to be. A fixed table of
     London/New York equivalents goes wrong twice a year; this cannot. */
  (function () {
    var panel = document.querySelector('[data-tz]');
    if (!panel) return;
    var elD = panel.querySelector('[data-tz-dhaka]');
    var elL = panel.querySelector('[data-tz-local]');
    var elName = panel.querySelector('[data-tz-name]');
    var elOff = panel.querySelector('[data-tz-offset]');
    var elDot = panel.querySelector('[data-tz-dot]');
    var elSt = panel.querySelector('[data-tz-status]');
    var elWin = panel.querySelector('[data-tz-window]');
    var OPEN = 10, CLOSE = 18;                       // Dhaka office hours

    function fmt(date, tz) {
      try {
        return new Intl.DateTimeFormat([], {
          hour: 'numeric', minute: '2-digit', hour12: true, timeZone: tz
        }).format(date).toLowerCase().replace(/\s/g, ' ');
      } catch (e) { return ''; }
    }
    function dhakaParts(now) {
      // read the wall clock in Dhaka without assuming the visitor's offset
      var s = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dhaka', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
      }).formatToParts(now);
      var out = {};
      s.forEach(function (p) { out[p.type] = p.value; });
      return { h: parseInt(out.hour, 10), m: parseInt(out.minute, 10), day: out.weekday };
    }

    function tick() {
      var now = new Date();
      var d = dhakaParts(now);
      if (elD) elD.textContent = fmt(now, 'Asia/Dhaka');
      if (elL) elL.textContent = fmt(now);

      var zone = '';
      try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
      if (elName && zone) elName.textContent = '(' + zone.split('/').pop().replace(/_/g, ' ') + ')';
      if (elOff) {
        var mins = -now.getTimezoneOffset();
        var sign = mins < 0 ? '-' : '+';
        var abs = Math.abs(mins);
        elOff.textContent = 'GMT' + sign + Math.floor(abs / 60) + (abs % 60 ? ':' + String(abs % 60).padStart(2, '0') : '');
      }

      var state, label;
      if (d.day === 'Sun') { state = 'is-appt'; label = 'Sunday in Dhaka, by appointment'; }
      else if (d.h >= OPEN && d.h < CLOSE) { state = 'is-open'; label = 'Open now in Dhaka'; }
      else { state = 'is-shut'; label = 'Closed in Dhaka right now'; }
      if (elDot) elDot.className = 'clock-dot ' + state;
      if (elSt) elSt.textContent = label;

      // today's 10:00 and 18:00 Dhaka, expressed on the visitor's own clock
      if (elWin) {
        var utcOpen = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), OPEN - 6, 0);
        var utcClose = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), CLOSE - 6, 0);
        var a = fmt(new Date(utcOpen)), b = fmt(new Date(utcClose));
        elWin.textContent = '';
        elWin.appendChild(document.createTextNode('Our Monday to Saturday hours land between '));
        var st = document.createElement('strong'); st.textContent = a + ' and ' + b;
        elWin.appendChild(st);
        elWin.appendChild(document.createTextNode(' on your clock.'));
      }
    }
    tick();
    setInterval(tick, 30000);
  })();


  /* ------------------------------------------------------------- faq filter
     Eighteen questions is a lot to scroll on a phone. Typing narrows the list
     to matching questions and answers; clearing it puts everything back. */
  (function () {
    var box = document.querySelector('[data-faq-filter]');
    if (!box) return;
    var count = document.querySelector('[data-faq-count]');
    var items = [].slice.call(document.querySelectorAll('.acc-item'));
    var groups = [].slice.call(document.querySelectorAll('.acc'));
    var headings = groups.map(function (g) { return g.previousElementSibling; });
    var empty = document.createElement('p');
    empty.className = 'faq-empty';
    empty.hidden = true;
    if (groups.length) groups[groups.length - 1].parentNode.appendChild(empty);

    var total = items.length;
    function apply() {
      var term = box.value.trim().toLowerCase();
      var shown = 0;
      items.forEach(function (item) {
        var hay = (item.textContent + ' ' + (item.getAttribute('data-keys') || '')).toLowerCase();
        var hit = !term || hay.indexOf(term) > -1;
        item.hidden = !hit;
        if (hit) shown++;
      });
      groups.forEach(function (g, i) {
        var any = g.querySelector('.acc-item:not([hidden])');
        g.hidden = !any;
        if (headings[i] && headings[i].tagName === 'H2') headings[i].hidden = !any;
      });
      if (count) {
        count.textContent = !term ? ''
          : shown === 0 ? 'No questions match "' + box.value.trim() + '".'
          : shown + (shown === 1 ? ' question matches' : ' questions match') + ' of ' + total + '.';
      }
      empty.hidden = !(term && shown === 0);
      if (!empty.hidden) {
        empty.textContent = '';
        empty.appendChild(document.createTextNode('Nothing here answers that. '));
        var a = document.createElement('a');
        a.href = 'quote.html'; a.textContent = 'Ask us directly';
        empty.appendChild(a);
        empty.appendChild(document.createTextNode(' and we will answer it for your programme.'));
      }
    }
    box.addEventListener('input', apply);
    box.addEventListener('search', apply);
    apply();
  })();


  /* ------------------------------------------------------------- quote bar */
  (function () {
    var bar = document.querySelector('[data-quotebar]');
    if (!bar) return;
    if (/\/quote(\.html)?$/.test(location.pathname)) { bar.remove(); return; }

    var up = null;
    function check() {
      // one full screen of scrolling means the visitor is reading, not bouncing
      var should = window.scrollY > window.innerHeight * 0.9;
      if (should === up) return;
      up = should;
      bar.classList.toggle('is-up', up);
      bar.setAttribute('aria-hidden', up ? 'false' : 'true');
    }
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    check();
  })();


  /* ------------------------------------------------------- cluster explorer
     A proper tab set: arrow keys move between clusters, as a screen-reader
     user would expect, and only the selected tab stays in the tab order. */
  document.querySelectorAll('[data-clusters]').forEach(function (root) {
    var tabs = [].slice.call(root.querySelectorAll('[role="tab"]'));
    if (!tabs.length) return;

    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (tab, i) {
      tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
      tab.addEventListener('click', function () { select(tab); });
      tab.addEventListener('keydown', function (e) {
        var go = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1
               : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1
               : e.key === 'Home' ? 'first' : e.key === 'End' ? 'last' : 0;
        if (!go) return;
        e.preventDefault();
        var next = go === 'first' ? tabs[0]
                 : go === 'last' ? tabs[tabs.length - 1]
                 : tabs[(i + go + tabs.length) % tabs.length];
        select(next, true);
      });
    });
  });


  /* -------------------------------------------------------- section marker
     Long pages get a small dot rail that shows where you are and jumps to a
     section. It is generated from the page's own sections, so it can never
     fall out of step with the content, and it only appears when a page is
     long enough to be worth it. */
  (function () {
    // a section is navigable if either it or its own heading carries an id
    var sections = [].slice.call(document.querySelectorAll('main section'))
      .map(function (sec) {
        var h = sec.querySelector('h2');
        if (!h) return null;
        var anchor = sec.id || h.id;
        return anchor ? { el: sec, anchor: anchor, title: (h.textContent || '').trim() } : null;
      })
      .filter(Boolean);
    if (sections.length < 4 || document.documentElement.scrollHeight < 4000) return;

    var nav = document.createElement('nav');
    nav.className = 'sectionnav';
    nav.setAttribute('aria-label', 'Sections on this page');

    var links = sections.map(function (sec) {
      var name = sec.title.replace(/\.$/, '');
      var a = document.createElement('a');
      a.href = '#' + sec.anchor;
      var dot = document.createElement('span'); dot.className = 'dot'; dot.setAttribute('aria-hidden', 'true');
      var tip = document.createElement('span'); tip.className = 'tip'; tip.textContent = name;
      a.appendChild(dot); a.appendChild(tip);
      nav.appendChild(a);
      return a;
    });
    document.body.appendChild(nav);

    var current = -1;
    function mark() {
      var line = window.scrollY + window.innerHeight * 0.3;
      var found = 0;
      sections.forEach(function (sec, i) { if (sec.el.offsetTop <= line) found = i; });
      if (found !== current) {
        current = found;
        links.forEach(function (a, i) {
          a.classList.toggle('is-here', i === found);
          if (i === found) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      }
      nav.classList.toggle('is-on', window.scrollY > window.innerHeight * 0.6);
    }
    window.addEventListener('scroll', mark, { passive: true });
    window.addEventListener('resize', mark, { passive: true });
    mark();
  })();


  /* ----------------------------------------------------------------- entry
     The opening screen composes itself once, then tracks the scroll: the
     frame drifts slower than the page and the words lift away. Transform and
     opacity only, written inside one rAF, so it never reads layout mid-scroll. */
  (function () {
    var hero = document.querySelector('[data-entry]');
    if (!hero) return;
    var slides = hero.querySelector('[data-parallax]');
    var grid = hero.querySelector('.hero-grid');
    var calm = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (calm.matches) { hero.classList.add('is-entered', 'is-settled'); return; }

    function enter() { hero.classList.add('is-entered'); }
    requestAnimationFrame(function () { requestAnimationFrame(enter); });
    // Failsafe: rAF does not run in a background tab. Without this, a page
    // opened in a tab the visitor has not switched to yet would hold its hero
    // text at opacity 0. The entry is decoration; the words are not.
    setTimeout(enter, 400);
    setTimeout(function () { hero.classList.add('is-settled'); }, 1900);

    var ticking = false, height = hero.offsetHeight;
    function paint() {
      ticking = false;
      var y = window.scrollY;
      if (y > height) return;                        // nothing to do once it is past
      var t = y / height;                            // 0 at the top, 1 at the fold
      if (slides) slides.style.transform = 'translate3d(0,' + (y * 0.18).toFixed(1) + 'px,0)';
      if (grid) {
        // hold the words at full strength for the first fifth, then let them go
        var fade = Math.min(1, Math.max(0, (t - 0.2) / 0.65));
        grid.style.opacity = String(1 - fade);
        grid.style.transform = 'translate3d(0,' + (y * -0.05).toFixed(1) + 'px,0)';
      }
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(paint);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { height = hero.offsetHeight; onScroll(); }, { passive: true });
    calm.addEventListener('change', function (e) {
      if (!e.matches) return;
      if (slides) slides.style.transform = '';
      if (grid) { grid.style.opacity = ''; grid.style.transform = ''; }
    });
  })();


  /* ----------------------------------------------------------------- drift
     The background wash answers the scroll: it slides a fraction of the
     distance travelled and brightens a little while the page is moving,
     settling back when it stops. One custom property and one class, both
     written inside an animation frame. */
  (function () {
    var drift = document.querySelector('.drift');
    if (!drift || reduce) return;

    var RANGE = 170;                // total travel in px across the whole page
    var queued = false, idle = null;

    function paint() {
      queued = false;
      var doc = document.documentElement;
      var span = doc.scrollHeight - window.innerHeight;
      var t = span > 0 ? Math.min(1, Math.max(0, window.scrollY / span)) : 0;
      drift.style.setProperty('--drift', (RANGE * (0.5 - t)).toFixed(1));
    }

    function onScroll() {
      if (!queued) { queued = true; requestAnimationFrame(paint); }
      if (!drift.classList.contains('is-moving')) drift.classList.add('is-moving');
      clearTimeout(idle);
      idle = setTimeout(function () { drift.classList.remove('is-moving'); }, 420);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', paint, { passive: true });
    paint();
  })();

  /* ----------------------------------------------------------------- misc */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('.totop')) window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* --------------------------------------------------------- quote helpers
     The checklist is a nudge, not a gate: it only tells a buyer what makes a
     costing more accurate, and remembers the ticks on this device. */
  document.querySelectorAll('[data-packlist]').forEach(function (list) {
    var boxes = [].slice.call(list.querySelectorAll('input[type="checkbox"]'));
    var score = document.querySelector('[data-pack-score]');
    var KEY = 'zim-packlist';
    try {
      var saved = JSON.parse(localStorage.getItem(KEY) || '[]');
      boxes.forEach(function (b, i) { b.checked = !!saved[i]; });
    } catch (e) {}
    function paint() {
      var n = boxes.filter(function (b) { return b.checked; }).length;
      if (score) {
        score.textContent = n === 0 ? 'Nothing ticked yet. Send what you have anyway.'
          : n === boxes.length ? 'That is everything we need for an accurate first costing.'
          : n + ' of ' + boxes.length + ' ready. Send what you have, we will ask about the rest.';
      }
      try { localStorage.setItem(KEY, JSON.stringify(boxes.map(function (b) { return b.checked ? 1 : 0; }))); } catch (e) {}
    }
    boxes.forEach(function (b) { b.addEventListener('change', paint); });
    paint();
  });

  /* ----------------------------------------------------------------- forms */
  document.querySelectorAll('form[data-validate]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    var steps = [].slice.call(form.querySelectorAll('.form-step'));
    var stepped = form.hasAttribute('data-steps') && steps.length > 1;
    var current = 0;

    function setError(wrap, bad) { if (wrap) wrap.classList.toggle('field-error', bad); }

    function checkField(f) {
      var val = (f.value || '').trim();
      if (f.type === 'checkbox') return f.checked;
      if (!val) return false;
      if (f.type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val);
      if (f.hasAttribute('data-no-past')) return val >= new Date().toISOString().slice(0, 10);
      return true;
    }

    // validate one step (or the whole form when it is not stepped)
    function validate(scope) {
      var ok = true, firstBad = null;
      scope.querySelectorAll('[required]').forEach(function (f) {
        var good = checkField(f);
        var wrap = f.closest('.field');
        setError(wrap, !good);
        if (!good) { ok = false; if (!firstBad) firstBad = f; }
      });
      // optional fields that still have to make sense when filled in
      scope.querySelectorAll('[data-no-past]').forEach(function (f) {
        var val = (f.value || '').trim();
        var bad = !!val && val < new Date().toISOString().slice(0, 10);
        setError(f.closest('.field'), bad);
        if (bad) { ok = false; if (!firstBad) firstBad = f; }
      });
      scope.querySelectorAll('[data-require-one]').forEach(function (group) {
        var any = !!group.querySelector('input:checked');
        var wrap = group.closest('.field');
        setError(wrap, !any);
        if (!any) { ok = false; if (!firstBad) firstBad = group.querySelector('input'); }
      });
      var fileInput = scope.querySelector('input[type="file"][data-maxmb]');
      if (fileInput && fileInput.files && fileInput.files.length) {
        var max = parseFloat(fileInput.getAttribute('data-maxmb')) * 1048576;
        var tooBig = [].slice.call(fileInput.files).some(function (f) { return f.size > max; });
        setError(fileInput.closest('.field'), tooBig);
        if (tooBig) { ok = false; if (!firstBad) firstBad = fileInput; }
      }
      if (!ok && firstBad) {
        firstBad.focus({ preventScroll: true });
        firstBad.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
      return ok;
    }

    /* ---------------------------------------------------------- stepping */
    if (stepped) {
      var back = form.querySelector('[data-step-back]');
      var next = form.querySelector('[data-step-next]');
      var send = form.querySelector('[data-step-send]');
      var fill = form.querySelector('[data-step-fill]');
      var count = form.querySelector('[data-step-count]');
      var dots = [].slice.call(form.querySelectorAll('[data-step-dot]'));

      function show(i) {
        current = i;
        steps.forEach(function (s, n) { s.hidden = n !== i; });
        if (back) back.hidden = i === 0;
        if (next) next.hidden = i === steps.length - 1;
        if (send) send.hidden = i !== steps.length - 1;
        if (fill) fill.style.width = ((i + 1) / steps.length * 100) + '%';
        if (count) count.textContent = 'Step ' + (i + 1) + ' of ' + steps.length;
        dots.forEach(function (d, n) { d.classList.toggle('is-on', n <= i); });
        if (status) status.className = 'form-status';
      }
      if (next) next.addEventListener('click', function () {
        if (validate(steps[current])) show(Math.min(current + 1, steps.length - 1));
        else if (status) { status.className = 'form-status is-err'; status.textContent = 'Please complete the highlighted fields before continuing.'; }
      });
      if (back) back.addEventListener('click', function () { show(Math.max(current - 1, 0)); });
      show(0);
    }

    /* ------------------------------------------------------- file picker */
    var drop = form.querySelector('[data-drop]');
    if (drop) {
      var input = drop.querySelector('input[type="file"]');
      var list = form.querySelector('[data-drop-list]');
      var max = parseFloat(input.getAttribute('data-maxmb') || '20') * 1048576;
      function paintFiles() {
        if (!list) return;
        list.textContent = '';
        [].slice.call(input.files || []).forEach(function (f) {
          var li = document.createElement('li');
          var big = f.size > max;
          li.className = big ? 'is-big' : '';
          li.appendChild(document.createTextNode(f.name));
          var s = document.createElement('span');
          s.textContent = (f.size / 1048576).toFixed(1) + ' MB' + (big ? ' — too large' : '');
          li.appendChild(s);
          list.appendChild(li);
        });
      }
      input.addEventListener('change', paintFiles);
      ['dragenter', 'dragover'].forEach(function (ev) {
        drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('is-over'); });
      });
      ['dragleave', 'drop'].forEach(function (ev) {
        drop.addEventListener(ev, function () { drop.classList.remove('is-over'); });
      });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
          input.files = e.dataTransfer.files;
          paintFiles();
        }
      });
    }

    form.addEventListener('input', function (e) {
      if (e.target.matches('.input, .select, .textarea')) {
        var w = e.target.closest('.field'); if (w) w.classList.remove('field-error');
      }
    });
    form.addEventListener('change', function (e) {
      if (e.target.type === 'checkbox') {
        var w = e.target.closest('.field'); if (w) w.classList.remove('field-error');
      }
    });

    function reference() {
      var d = new Date();
      return 'ZIM-RFQ-' + d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') +
             String(d.getDate()).padStart(2, '0') + '-' + String(Math.floor(Math.random() * 9000) + 1000);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var hp = form.querySelector('input[name="company_website"]');
      if (hp && hp.value) return;                                   // honeypot

      if (!validate(form)) {
        if (status) { status.className = 'form-status is-err'; status.textContent = 'Please complete the highlighted fields.'; }
        return;
      }

      if (form.getAttribute('action') === '#preview') {
        if (status) {
          status.className = 'form-status is-ok';
          status.textContent = 'Preview only: your enquiry has been validated. Nothing has been sent. Connect your own enquiry service to enable submissions.';
          status.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
        return;
      }

      var ref = reference();
      var refField = form.querySelector('input[name="_reference"]');
      if (!refField) {
        refField = document.createElement('input');
        refField.type = 'hidden'; refField.name = '_reference';
        form.appendChild(refField);
      }
      refField.value = ref;

      var action = form.getAttribute('action') || '';
      var ready = action && action.indexOf('REPLACE') === -1 && action.charAt(0) !== '#';
      var files = form.querySelector('input[type="file"]');
      var hasFiles = files && files.files && files.files.length;

      if (!ready) {
        var data = new FormData(form), lines = [];
        data.forEach(function (v, k) {
          if (k === 'company_website' || k === 'attachments' || k.charAt(0) === '_' || !String(v).trim()) return;
          lines.push(k.replace(/_/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); }) + ': ' + v);
        });
        lines.push('Reference: ' + ref);
        window.location.href = 'mailto:' + (form.dataset.mailto || 'contact@zimsourcing.com') +
          '?subject=' + encodeURIComponent('Quotation request ' + ref + ' — ' + (data.get('company') || data.get('name') || 'new enquiry')) +
          '&body=' + encodeURIComponent(lines.join('\n'));
        if (status) {
          status.className = 'form-status is-ok';
          status.textContent = 'Opening your email application with the enquiry pre-filled. Your reference is ' + ref + '.' +
            (hasFiles ? ' Please attach your files to that email before sending.' : '') +
            ' If nothing opens, email contact@zimsourcing.com directly.';
          status.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      var label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }

      fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('bad status');
          form.reset();
          if (stepped) { steps.forEach(function (s, n) { s.hidden = n !== 0; }); }
          if (status) {
            status.className = 'form-status is-ok';
            status.textContent = 'Thank you, your request has been received. A ZIM Sourcing Ltd merchandiser will review it and reply by email. Your reference is ' + ref + ' — please keep it for future correspondence.';
            status.scrollIntoView({ block: 'center', behavior: 'smooth' });
          }
        })
        .catch(function () {
          if (status) {
            status.className = 'form-status is-err';
            status.textContent = 'The form could not be sent. Please email contact@zimsourcing.com and we will pick it up from there.';
          }
        })
        .finally(function () { if (btn) { btn.disabled = false; btn.textContent = label; } });
    });
  });
})();
