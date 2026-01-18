/* Hamburger */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

/* Pop-up Box */
function openPopup() {
    let value = document.getElementById("searchInput").value;
    if(value.trim() !== "") {
        document.getElementById("popup").style.display = "flex";
        document.getElementById("searchText").innerText =
            "You searched for: " + value;
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

/* Notification banner */
    function showSuccess() {
        showNotification("✅ Action Successful!", "success");
    }

    function showError() {
        showNotification("❌ Something went wrong!", "error");
    }

    function showNotification(message, type) {
        const notification = document.getElementById("notification");
        notification.textContent = message;
        notification.className = "notification " + type;
        notification.style.display = "block";

        setTimeout(() => {
            notification.style.display = "none";
        }, 3000);
    }

/* Form input & submit  */
const usernameInput = document.getElementById("username");
const errorMsg = document.getElementById("errorMsg");
const submitBtn = document.getElementById("submitBtn");
const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (usernameInput && submitBtn && contactForm) {

  // Enable / disable submit button
  usernameInput.addEventListener("input", () => {
    if (usernameInput.value.trim() === "") {
      submitBtn.disabled = true;
      errorMsg.style.display = "block";
    } else {
      submitBtn.disabled = false;
      errorMsg.style.display = "none";
    }
  });

  // Prevent empty submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (usernameInput.value.trim() === "") {
      errorMsg.style.display = "block";
      submitBtn.disabled = true;
      return;
    }
successMsg.textContent = "Form submitted successfully!";
errorMsg.style.display = "none";
usernameInput.value = "";
submitBtn.disabled = true;
  });
}

// GO-TO-TOP BUTTON
 const topBtn = document.getElementById("topBtn");

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    };

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
