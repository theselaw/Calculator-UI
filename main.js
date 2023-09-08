<!-- Add this script tag to your HTML, either within the <head> or before the closing </body> tag -->
<script>
  // Function to handle button click events
  function handleButtonClick(value) {
    const inputElement = document.getElementById("input");
    if (value === "=") {
      try {
        // Evaluate the expression in the input field
        const result = eval(inputElement.textContent);
        // Display the result
        document.getElementById("result").textContent = result;
      } catch (error) {
        // Handle invalid expressions
        document.getElementById("result").textContent = "Error";
      }
    } else if (value === "c") {
      // Clear the input and result
      inputElement.textContent = "";
      document.getElementById("result").textContent = "";
    } else if (value === "DEL") {
      // Delete the last character from the input
      inputElement.textContent = inputElement.textContent.slice(0, -1);
    } else {
      // Append the clicked button value to the input
      inputElement.textContent += value;
    }
  }

  // Add click event listeners to calculator buttons
  const buttons = document.querySelectorAll("td");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      handleButtonClick(button.textContent);
    });
  });
</script>
