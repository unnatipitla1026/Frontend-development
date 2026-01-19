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
function showPopup(event){
        event.preventDefault(); // page reload stop
        alert("✅ Form Submitted Successfully!");
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
