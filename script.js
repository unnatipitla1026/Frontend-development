/* Hamburger fuction */
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}

/* Notification banner */
  const notification = document.getElementById("notification");
    const message = document.getElementById("message");

    function showSuccess() {
      notification.className = "notification success";
      message.textContent = "✅ Operation completed successfully!";
      notification.style.display = "flex";
    }

    function showError() {
      notification.className = "notification error";
      message.textContent = "❌ Something went wrong. Please try again.";
      notification.style.display = "flex";
    }

    function hideNotification() {
      notification.style.display = "none";
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
