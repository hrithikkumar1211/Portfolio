// Scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  
  // Form confirmation
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    form.reset();
  });
  