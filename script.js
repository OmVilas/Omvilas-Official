// Initialize AOS animation
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Back to top button
window.addEventListener('scroll', function() {
  var backToTop = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

document.getElementById('backToTop').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close mobile menu if open
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar shrink on scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    document.querySelector('header').classList.add('shrink');
  } else {
    document.querySelector('header').classList.remove('shrink');
  }
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const subject = this.querySelector('input[type="text"]').value;
  const message = this.querySelector('textarea').value;
  
  // Here you would typically send the form data to a server
  console.log('Form submitted:', { name, email, subject, message });
  
  // Show success message
  alert('Thank you for your message! We will get back to you soon.');
  
  // Reset form
  this.reset();
});

// Product hover effect enhancement
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.querySelector('.card-img-top').style.transform = 'scale(1.05)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.querySelector('.card-img-top').style.transform = 'scale(1)';
  });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});