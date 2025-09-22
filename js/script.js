// ================= Mobile Navbar Toggle =================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// ================= Active Nav Highlight on Scroll =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ================= Smooth Scroll (optional: also in CSS) =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ================= EmailJS Integration =================
(function () {
  emailjs.init("i7WeBHRUlI2YwQ8b-"); 
})();

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  
  const name = this.querySelector('input[placeholder="Your Name"]').value;
  const email = this.querySelector('input[placeholder="Your Email"]').value;
  const subject = this.querySelector('input[placeholder="Subject"]').value;
  const message = this.querySelector("textarea").value;

  emailjs
    .send("service_wefgwum", "template_4cd4jvg", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    })
    .then(
      () => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
      },
      (error) => {
        console.error("❌ Error:", error);
        alert("⚠️ Failed to send message. Please try again later.");
      }
    );
});
