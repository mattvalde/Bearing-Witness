(function () {
  const revealItems = document.querySelectorAll('.reveal-bubble');

  if (!revealItems.length) return;

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Prevents the animation from replaying and jumping around
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.12,
  });

  revealItems.forEach((item) => observer.observe(item));
})();