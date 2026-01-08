const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const links = document.querySelectorAll(".menu-link");

    // Toggle menu open/close
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    });

    // Close menu on link click
    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.classList.remove("no-scroll");
      });
    });
