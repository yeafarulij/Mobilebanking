// JavaScript for name editing and navigation functionality

const mainName = document.getElementById('mainName');
const subName = document.getElementById('subName');
const refreshIcon = document.querySelector('.refresh-icon');
const backButton = document.querySelector('.back-button i');

// Allow name editing when clicking on the main name
mainName.addEventListener('click', () => {
    let currentText = mainName.innerText;
    let newName = prompt('Edit name:', currentText);
    if (newName) {
        mainName.innerText = newName;
        subName.innerText = newName.split('-')[0]; // Update subName with the base name
    }
});

// Redirect to send.html when clicking the refresh icon
refreshIcon.addEventListener('click', () => {
    window.location.href = 'payment.html';
});

// Redirect to send.html when clicking the back button
backButton.addEventListener('click', () => {
    window.location.href = 'send.html';
});