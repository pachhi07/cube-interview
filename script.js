// hamburger 
function toggleMenu() {
      const navContainer = document.querySelector('.nav_container');
      const overlay = document.querySelector('.overlay');

      navContainer.classList.toggle('open');
      overlay.classList.toggle('active');

    }

  
//   Collection section
  document.querySelectorAll(".accordion_header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains("active");

      document.querySelectorAll(".accordion_item").forEach(i => i.classList.remove("active"));
      if (!isOpen) item.classList.add("active");

      document.querySelectorAll(".accordion_header .toggle").forEach(t => (t.textContent = "+"));
      if (!isOpen) header.querySelector(".toggle").textContent = "−";
    });
  });

  // Carousel
  const images = document.querySelectorAll(".carousel_img");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    images[i].classList.add("active");
    dots[i].classList.add("active");
  }

  document.querySelector(".arrow.left").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
  });

  document.querySelector(".arrow.right").addEventListener("click", () => {
    index = (index + 1) % images.length;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(i);
    });
  });

//   counters
let hasCounted = false;

  function countUp(element, target) {
    let current = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      element.textContent = Math.floor(current) + "%";
    }, 20);
  }

  function handleScroll() {
    const section = document.getElementById("stats");
    const top = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight && !hasCounted) {
      hasCounted = true;
      document.querySelectorAll(".counter").forEach(counter => {
        const target = +counter.getAttribute("data-target");
        countUp(counter, target);
      });
    }
  }

  window.addEventListener("scroll", handleScroll);

//   Testimonial section
const tTrack = document.querySelector(".testimonial_track");
  const tDots = document.querySelectorAll(".testimonial_dot");
  const tLeft = document.querySelector(".testimonial_arrow.t_left");
  const tRight = document.querySelector(".testimonial_arrow.t_right");

  let tIndex = 0;

  function updateTestimonials() {
    const cardWidth = document.querySelector(".testimonial_card").offsetWidth + 20;
    tTrack.style.transform = `translateX(-${tIndex * cardWidth}px)`;

    tDots.forEach(dot => dot.classList.remove("active"));
    if (tDots[tIndex]) tDots[tIndex].classList.add("active");
  }

  tRight.addEventListener("click", () => {
    if (tIndex < tDots.length - 1) tIndex++;
    updateTestimonials();
  });

  tLeft.addEventListener("click", () => {
    if (tIndex > 0) tIndex--;
    updateTestimonials();
  });

  tDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      tIndex = i;
      updateTestimonials();
    });
  });

//   Faqs section
document.querySelectorAll(".faq_question").forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.parentElement;
      item.classList.toggle("active");
    });
  });

//   product section
const imagess = [
  "https://via.placeholder.com/400x500?text=Perfume+1",
  "https://via.placeholder.com/400x500?text=Perfume+2",
  "https://via.placeholder.com/400x500?text=Perfume+3",
  "https://via.placeholder.com/400x500?text=Perfume+4"
];

function showSlide(index) {
  document.getElementById("main-image").src = imagess[index];
  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  document.querySelectorAll('.dot')[index].classList.add('active');
}

function changeMainImage(index) {
  showSlide(index);
}

function selectPlan(plan) {
  document.querySelectorAll('.card-body').forEach(el => el.classList.add('hidden'));
  document.getElementById(plan).classList.remove('hidden');
}