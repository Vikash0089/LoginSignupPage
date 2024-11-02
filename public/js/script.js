// Frontend validation for signup and login forms
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector('#signupForm');
    const loginForm = document.querySelector('#loginForm');

    function showError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.innerText = message;
        errorDiv.style.display = 'block';
    }

    function clearError(input) {
        const errorDiv = input.nextElementSibling;
        errorDiv.innerText = '';
        errorDiv.style.display = 'none';
    }

    function validateForm(form) {
        let isValid = true;
        const username = form.querySelector('input[name="username"]');
        const password = form.querySelector('input[name="password"]');

        if (!username.value || username.value.length < 3) {
            showError(username, 'Username must be at least 3 characters.');
            isValid = false;
        } else {
            clearError(username);
        }

        if (!password.value || password.value.length < 6) {
            showError(password, 'Password must be at least 6 characters.');
            isValid = false;
        } else {
            clearError(password);
        }

        return isValid;
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            if (!validateForm(signupForm)) e.preventDefault();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            if (!validateForm(loginForm)) e.preventDefault();
        });
    }
});
