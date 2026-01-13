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
