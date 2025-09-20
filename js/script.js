// Navbar Toggle (Hamburger Menu)

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Close menu when clicking a nav link
document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  })
);

// Active Link on Scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


// EmailJS Integration

// Initialize EmailJS with your public key
(function () {
  emailjs.init("i7WeBHRUlI2YwQ8b-"); // Replace with your EmailJS Public Key
})();

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = contactForm.querySelector('input[placeholder="Your Email"]').value.trim();
    const subject = contactForm.querySelector('input[placeholder="Subject"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("⚠️ Please fill out all fields.");
      return;
    }

    // Send email with EmailJS
    emailjs
      .send("service_wefgwum", "template_4cd4jvg", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      })
      .then(
        (response) => {
          alert("✅ Thank you! Your message has been sent.");
          contactForm.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  });
}
