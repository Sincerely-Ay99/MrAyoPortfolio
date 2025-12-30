lucide.createIcons();

/* ================= MOBILE NAV ================= */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
}
menuBtn.addEventListener('click', toggleMenu);

/* ================= DARK MODE ================= */


/* ================= FAQ SMOOTH ACCORDION ================= */
function toggleFaq(button) {
  const content = button.nextElementSibling;

  document.querySelectorAll('.faq-content').forEach(item => {
    if (item !== content) {
      item.style.maxHeight = null;
    }
  });

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}

/* ================= PORTFOLIO MODAL ================= */
const modal = document.getElementById('modal');

function openModal(title, img, desc) {
  modal.classList.remove('hidden');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalImg').src = img;
  document.getElementById('modalDesc').textContent = desc;
}

function closeModal() {
  modal.classList.add('hidden');
}

/* ================= PARTICLES ================= */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles() {
  particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.6)';

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();

/* ================= EMAILJS + FORM VALIDATION ================= */
emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const error = document.getElementById('formError');

  if (!name || !email.includes('@') || !message) {
    error.classList.remove('hidden');
    return;
  }

  error.classList.add('hidden');

  emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    {
      from_name: name,
      from_email: email,
      message: message
    }
  )
  .then(() => {
    alert("Message sent successfully!");
    this.reset();
  })
  .catch(() => {
    alert("Failed to send message. Please try again.");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const html = document.documentElement;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.classList.add("dark");
  }

  toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");

    // Save preference
    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
const slider = document.getElementById("reviewSlider");

if (slider) {
  let index = 0;
  const cardWidth = 344; // card width + gap
  const visibleCards = 3;

  setInterval(() => {
    index++;

    if (index > slider.children.length - visibleCards) {
      index = 0;
    }

    slider.style.transform = `translateX(-${index * cardWidth}px)`;
  }, 3000);
}
