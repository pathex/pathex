// ===========================================================
// PathEx Foundation — interactions
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById('site-header');
  const onScrollHeader = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealEls.forEach(el => el.classList.add('in-view'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in-view'), i * 60);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ---------- Animated stat counters ---------- */
  const statNums = document.querySelectorAll('.stat-num');
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => statObserver.observe(el));

  /* ---------- The Path: scroll-traced spine with travelling marker ----------
     A signature element: an SVG path drawn down the page (echoing the
     logo's swoosh), with a gold dot that travels along it as the user
     scrolls — visualising a student's journey through the Foundation. */
  const spinePath = document.getElementById('spine-path');
  const marker = document.getElementById('path-marker');
  const spineSvg = document.getElementById('path-spine');

  function buildSpine() {
    const docHeight = document.documentElement.scrollHeight;
    const width = window.innerWidth;
    spineSvg.setAttribute('height', docHeight);
    spineSvg.style.height = docHeight + 'px';

    // A gentle S-curve path down the right margin area, referencing the
    // logo's asymmetric swoosh. Anchored responsively near the right edge
    // on desktop; hidden entirely on narrow screens via CSS.
    const x1 = width - 70;
    const x2 = width - 140;
    let d = `M ${x1} 0 `;
    const segments = Math.max(6, Math.floor(docHeight / 700));
    for (let i = 1; i <= segments; i++) {
      const y = (docHeight / segments) * i;
      const cx = i % 2 === 0 ? x1 : x2;
      const prevY = (docHeight / segments) * (i - 1);
      d += `C ${cx} ${prevY + (y - prevY) * 0.3}, ${cx} ${prevY + (y - prevY) * 0.7}, ${(i === segments ? x1 : (i % 2 === 0 ? x2 : x1))} ${y} `;
    }
    spinePath.setAttribute('d', d);
    spinePath.pathLength = spinePath.getTotalLength ? spinePath.getTotalLength() : 0;
  }

  function updateMarker() {
    if (window.innerWidth <= 900) { marker.style.opacity = '0'; return; }
    const total = spinePath.getTotalLength();
    if (!total) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
    const point = spinePath.getPointAtLength(progress * total);
    marker.style.opacity = '1';
    marker.style.transform = `translate(${point.x - 6}px, ${point.y - 6}px)`;
  }

  let resizeTimer;
  function refreshSpine() {
    buildSpine();
    updateMarker();
  }
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshSpine, 200);
  });
  window.addEventListener('scroll', () => requestAnimationFrame(updateMarker), { passive: true });
  window.addEventListener('load', refreshSpine);
  refreshSpine();
  // Rebuild once more after fonts/images shift layout
  setTimeout(refreshSpine, 800);

  /* ---------- Buttons respond to scroll: subtle entrance pop ---------- */
  const btns = document.querySelectorAll('.btn');
  const btnObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'btn-pop 0.6s cubic-bezier(0.34,1.56,0.64,1)';
      }
    });
  }, { threshold: 0.6 });
  btns.forEach(b => btnObserver.observe(b));

  const styleTag = document.createElement('style');
  styleTag.textContent = `@keyframes btn-pop{0%{transform:scale(0.92);}60%{transform:scale(1.03);}100%{transform:scale(1);}}`;
  document.head.appendChild(styleTag);

});
