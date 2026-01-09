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
