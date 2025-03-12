const amountInput = document.getElementById('amount');
const reasonInput = document.getElementById('reason');
const continueBtn = document.getElementById('continueBtn');

// Enable button when both inputs have values
function checkInputs() {
    if (amountInput.value.trim() !== "" && reasonInput.value.trim() !== "") {
        continueBtn.disabled = false;
        continueBtn.classList.add('active');
    } else {
        continueBtn.disabled = true;
        continueBtn.classList.remove('active');
    }
}

amountInput.addEventListener('input', checkInputs);
reasonInput.addEventListener('input', checkInputs);

// Add function to handle the button click
continueBtn.addEventListener('click', () => {
    if (!continueBtn.disabled) {
        alert(`Amount: ${amountInput.value}\nReason: ${reasonInput.value}`);
    }
});
