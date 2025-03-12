const userName = document.getElementById('userName');
const continueButton = document.getElementById('continueButton');
const amountInput = document.getElementById('amountInput');
const reasonInput = document.getElementById('reasonInput');
const imageSection = document.getElementById('imageSection');
const receiptImage = document.getElementById('receiptImage');
const imageUpload = document.getElementById('imageUpload');
const loadingOverlay = document.getElementById('loadingOverlay');

// Simulate fetching user's name from name.html
const userEnteredName = "fuade endris hassen"; 
userName.innerText = userEnteredName;

// Enable the Continue button when both fields are filled
function checkFields() {
    if (amountInput.value && reasonInput.value) {
        continueButton.classList.add('active');
        continueButton.disabled = false;
    } else {
        continueButton.classList.remove('active');
        continueButton.disabled = true;
    }
}

amountInput.addEventListener('input', checkFields);
reasonInput.addEventListener('input', checkFields);

// Handle Continue button click
continueButton.addEventListener('click', () => {
    // Show the loading overlay
    loadingOverlay.style.display = 'flex';
    
    // Simulate the loading delay (for example, 2 seconds)
    setTimeout(() => {
        window.location.href = 'final.html'; // Redirect to final.html
    }, 2000); // Adjust the delay as necessary (2000ms = 2 seconds)
});

// Back button functionality
const backButton = document.querySelector('.back-button');
backButton.addEventListener('click', () => {
    window.history.back(); // Go back to the previous page
});

// Refresh button functionality
const refreshButton = document.querySelector('.refresh-button');
refreshButton.addEventListener('click', () => {
    window.location.reload(); // Refresh the current page
});

// QR button functionality (FAB)
const fabButton = document.querySelector('.fab');
fabButton.addEventListener('click', () => {
    alert('QR code button clicked!');
});

// Handle editing the name by clicking the name itself (popup)
userName.addEventListener('click', () => {
    const newName = prompt("Edit name:", userName.innerText);
    if (newName && newName.trim() !== "") {
        userName.innerText = newName.trim();
    }
});

// Make image editable
receiptImage.addEventListener('click', () => {
    imageUpload.click(); // Trigger file input when image is clicked
});

// Handle image upload
imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            receiptImage.src = e.target.result; // Update image source
        };
        reader.readAsDataURL(file); // Read the uploaded file
    }
});
