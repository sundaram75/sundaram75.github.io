let currentStep = 0; // Current step is set to 0 initially
showStep(currentStep); // Display the current step

function showStep(n) {
    // Get all the step elements
    let steps = document.getElementsByClassName("step");
    // Display the current step
    steps[n].style.display = "block";
    
    // Update buttons: Hide Previous button for first step
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    
    // Update buttons: Change Next button to "Submit" on the last step
    if (n == (steps.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    
    // Update step indicators
    updateStepIndicator(n);
}

function nextPrev(n) {
    // Get all the step elements
    let steps = document.getElementsByClassName("step");
    
    // Exit the function if any fields are invalid
    if (n == 1 && !validateForm()) return false;
    
    // Hide the current step
    steps[currentStep].style.display = "none";
    
    // Increment or decrement the step
    currentStep = currentStep + n;
    
    // If the last step is reached, submit the form
    if (currentStep >= steps.length) {
        document.getElementById("multistepForm").submit();
        return false;
    }
    
    // Display the next or previous step
    showStep(currentStep);
}

function validateForm() {
    // This function validates fields in the current step
    let valid = true;
    let currentInputs = document.getElementsByClassName("step")[currentStep].getElementsByTagName("input");
    
    // Check if any input is empty
    for (let i = 0; i < currentInputs.length; i++) {
        if (currentInputs[i].value == "") {
            currentInputs[i].className += " invalid";
            valid = false;
        }
    }
    
    // Mark the step as finished if valid
    if (valid) {
        document.getElementsByClassName("stepCircle")[currentStep].className += " finish";
    }
    return valid;
}

function updateStepIndicator(n) {
    // Remove "active" class from all circles
    let steps = document.getElementsByClassName("stepCircle");
    for (let i = 0; i < steps.length; i++) {
        steps[i].className = steps[i].className.replace(" active", "");
    }
    
    // Add "active" class to the current circle
    steps[n].className += " active";
}

// Handle calculate button click without form refresh
document.getElementById("calculateBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form refresh
    let amountField = document.getElementById("amount");
    let amount = parseFloat(amountField.value);
    
    if (!isNaN(amount)) {
        // Perform your calculations and update the amount field (just an example)
        let calculatedValue = amount * 1.1; // Example calculation
        amountField.value = calculatedValue.toFixed(2);
    } else {
        alert("Please enter a valid amount");
    }
}
