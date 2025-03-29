// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close menu when clicking on a link
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      if (
        filterValue === "all" ||
        item.getAttribute("data-category") === filterValue
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
