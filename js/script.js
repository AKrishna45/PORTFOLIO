// =====================
// Mobile Menu Toggle
// =====================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    navLinks.style.right = "0";
  } else {
    navLinks.style.right = "-100%";
  }
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
    navLinks.style.right = "-100%";
  });
});


// =====================
// Animate Skills Circles
// =====================
function animateSkills() {
  document.querySelectorAll(".circle").forEach(circle => {
    let percent = circle.getAttribute("data-percent");
    let number = circle.querySelector(".number");

    circle.style.setProperty("--percent", percent);

    // Animate number counting
    let count = 0;
    let interval = setInterval(() => {
      if (count >= percent) {
        clearInterval(interval);
      } else {
        count++;
        number.textContent = count + "%";
      }
    }, 20);
  });
}

// Trigger animation when skills section is visible
const skillsSection = document.querySelector("#skills");
let skillsAnimated = false;

window.addEventListener("scroll", () => {
  const sectionTop = skillsSection.offsetTop - 300;
  if (window.scrollY >= sectionTop && !skillsAnimated) {
    animateSkills();
    skillsAnimated = true;
  }
});


// =====================
// Smooth Scrolling
// =====================
document.querySelectorAll('.nav-links a, .cta-buttons a').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// =====================
// Contact Form (EmailJS)
// =====================
(function() {
  emailjs.init("i7WeBHRUlI2YwQ8b-"); // Replace with your EmailJS Public Key
})();

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const params = {
    fullname: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_wefgwum", "template_4cd4jvg", params)
    .then(() => {
      alert("Message sent successfully!");
      contactForm.reset();
    })
    .catch(() => {
      alert("Failed to send message. Try again later.");
    });
});
