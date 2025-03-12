document.addEventListener('DOMContentLoaded', () => {
    const pinInput = document.getElementById('pin');
    const pinLabel = document.getElementById('pin-label');

    // Show the "PIN" label as a placeholder when the input is empty
    pinInput.addEventListener('focus', () => {
        pinLabel.style.display = 'none'; // Hide label when focused
    });

    pinInput.addEventListener('blur', () => {
        // Show label again if input is empty
        if (pinInput.value === '') {
            pinLabel.style.display = 'block'; // Show label if no input
        }
    });

    pinInput.addEventListener('input', () => {
        // If there is any input, keep it as text type
        if (pinInput.value.length > 0) {
            pinLabel.style.display = 'none'; // Hide label when typing
        } else {
            pinLabel.style.display = 'block'; // Show label if input is empty
        }
    });
});
