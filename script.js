document.addEventListener("DOMContentLoaded", function () {
  function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav_menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav_menu";
    }
  }

  const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

  toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
  });

  var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });

  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(".featured-name", { delay: 100 });
  sr.reveal(".text-info", { delay: 200 });
  sr.reveal(".text-btn", { delay: 200 });
  sr.reveal(".social_icons", { delay: 200 });
  sr.reveal(".featured-image", { delay: 320 });

  sr.reveal(".project-box", { interval: 200 });
  sr.reveal(".top-header", {});

  const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  srLeft.reveal(".about-info", { delay: 100 });
  srLeft.reveal(".contact-info", { delay: 100 });

  const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  srRight.reveal(".skill", { delay: 100 });
  srRight.reveal(".skill-box", { delay: 100 });

  const section = document.querySelectorAll(".section[id]");

  function scrollActive() {
    const scrollY = window.scrollY;
    section.forEach((current) => {
      const sectionTop = current.offsetTop - 50,
        sectionHeight = current.offsetHeight,
        sectionId = current.getAttribute("id");

      const navLink = document.querySelector(".nav_menu_list a[href*=" + sectionId + "]");
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active-link");
        } else {
          navLink.classList.remove("active-link");
        }
      }
    });
  }

  window.addEventListener("scroll", scrollActive);
});
