document.getElementById('year').textContent = new Date().getFullYear();

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const targets = document.querySelectorAll('.about-card, .destination, .section-heading');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  targets.forEach((target) => observer.observe(target));
} else {
  document.querySelectorAll('.about-card, .destination, .section-heading').forEach((target) => target.classList.add('in-view'));
}
