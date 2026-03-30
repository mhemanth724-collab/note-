const registrationForm = document.getElementById("registrationForm");
const message = document.getElementById("message");

function showMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
}

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const course = document.getElementById("course").value;
    const termsAccepted = document.getElementById("terms").checked;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!fullName || !email || !phone || !age || !password || !confirmPassword || !course) {
        showMessage("Please fill in all fields.", "error");
        return;
    }

    if (!emailPattern.test(email)) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }

    if (!phonePattern.test(phone)) {
        showMessage("Phone number must be exactly 10 digits.", "error");
        return;
    }

    if (Number(age) < 18) {
        showMessage("You must be at least 18 years old to register.", "error");
        return;
    }

    if (password.length < 6) {
        showMessage("Password must be at least 6 characters long.", "error");
        return;
    }

    if (password !== confirmPassword) {
        showMessage("Passwords do not match.", "error");
        return;
    }

    if (!termsAccepted) {
        showMessage("Please accept the terms and conditions.", "error");
        return;
    }

    showMessage("Registration successful. Your form is ready to submit.", "success");
    registrationForm.reset();
});
