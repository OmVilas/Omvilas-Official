let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Navbar Toggle for Mobile
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
};

// Dark Mode Toggle
const darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
};

// Scroll Reveal Animation
ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
}).reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
});
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Change every 5 seconds
setInterval(showNextSlide, 5000);
.hero-section {
  display: flex;
  height: 90vh;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}

.slider {
  width: 70%;
  position: relative;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
  z-index: 2;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.static-info {
  width: 30%;
  background: #fff8f0;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #333;
}

.static-info h1 {
  font-size: 2rem;
  color: #4b2e2e;
  margin-bottom: 1rem;
}

.static-info p {
  margin-bottom: 1rem;
  font-size: 1rem;
}

.static-info button {
  background: #8DC26F;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.static-info button:hover {
  background: #76b852;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
  }
  .slider, .static-info {
    width: 100%;
    height: 50vh;
  }
}
