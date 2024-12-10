// Handle page transitions
const connectButton = document.getElementById('connect-button');
const connectPage = document.getElementById('connect-page');
const welcomePage = document.getElementById('welcome-page');

// Show connect page when "Connect Wallet" is clicked
connectButton.addEventListener('click', function () {
    // Hide welcome page and show connect page
    welcomePage.classList.add('hidden');
    connectPage.classList.remove('hidden');
});
