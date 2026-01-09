/*hamburger code*/
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

/*day 5*/
    document.getElementById("myForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const input = document.getElementById("textInput");
      const errorMsg = document.getElementById("errorMsg");

      if (input.value.trim() === "") {
        errorMsg.textContent = "Input cannot be empty.";
        input.focus();
      } else {
        errorMsg.textContent = "";
        alert("Submitted: " + input.value);
        input.value = "";
      }
    });
