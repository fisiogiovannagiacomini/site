// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');

hamburger?.addEventListener('click', () => {
  drawer.classList.toggle('open');
});

// Close drawer on click (mobile)
drawer?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => drawer.classList.remove('open'));
});

// FAQ accordion feel (optional)
const faqs = document.querySelectorAll('.faq details');
faqs.forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      faqs.forEach(other => { if (other !== d) other.open = false; });
    }
  });
});
