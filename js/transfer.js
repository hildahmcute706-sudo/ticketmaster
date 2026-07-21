// ======================================
// ELEMENTS
// ======================================

const recipientInput = document.getElementById("recipient");
const continueBtn = document.getElementById("continueBtn");

// ======================================
// CONTINUE BUTTON
// ======================================

continueBtn.addEventListener("click", function () {

    const value = recipientInput.value.trim();

    // Empty

    if (value === "") {

        alert("Please enter an email address or mobile number.");

        recipientInput.focus();

        return;

    }

    // Email

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Mobile

    const phoneRegex =
        /^[0-9+\-\s()]{8,20}$/;

    if (
        !emailRegex.test(value) &&
        !phoneRegex.test(value)
    ) {

        alert("Please enter a valid email address or mobile number.");

        recipientInput.focus();

        return;

    }

    // Continue

    window.location.href = "confirm.html";

});

// ======================================
// ENTER KEY
// ======================================

recipientInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        continueBtn.click();

    }

});

// ======================================
// AUTO TRIM
// ======================================

recipientInput.addEventListener("blur", function () {

    recipientInput.value = recipientInput.value.trim();

});

// ======================================
// INPUT FOCUS EFFECT
// ======================================

recipientInput.addEventListener("focus", function () {

    recipientInput.select();

});