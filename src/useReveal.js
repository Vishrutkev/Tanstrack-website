import { useEffect } from 'react';

// Gentle scroll-reveal for elements with class="reveal".
// Content is never permanently hidden: a 1.5s safety timer force-reveals
// anything the IntersectionObserver misses.
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    const show = (el) => el.classList.add('in');

    // Anything already on screen shows immediately.
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
    });

    if (!('IntersectionObserver' in window)) {
      els.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    const fallback = setTimeout(() => {
      els.forEach(show);
      io.disconnect();
    }, 1500);

    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);
}
