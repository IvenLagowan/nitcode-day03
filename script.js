const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        errorMsg.textContent = 'Please fill in both fields.';
        return;
    }

    // TO DO: Implement your login logic here
    // For demonstration purposes, we'll just alert the credentials
    alert(`Username: ${username}, Password: ${password}`);
});
