document.addEventListener('DOMContentLoaded', function () {
    const accountInput = document.getElementById('account-no');
    const continueBtn = document.getElementById('continue-btn');
    const langToggle = document.getElementById('lang-toggle');

    // Enable/Disable Continue Button based on input
    accountInput.addEventListener('input', function () {
        if (accountInput.value.trim() !== '') {
            continueBtn.classList.add('active');
            continueBtn.disabled = false;
        } else {
            continueBtn.classList.remove('active');
            continueBtn.disabled = true;
        }
    });

    // When "Continue" is clicked, redirect to final.html
    continueBtn.addEventListener('click', function () {
        if (!continueBtn.disabled) {
            window.location.href = 'name.html'; // Redirect to final.html
        }
    });

    // Toggle language button
    langToggle.addEventListener('click', function () {
        langToggle.textContent = langToggle.textContent === 'አማ' ? 'EN' : 'አማ';
    });

    // Back button functionality (history back)
    document.querySelector('.back-button').addEventListener('click', function () {
        window.history.back();
    });

    // Refresh button functionality
    document.getElementById('refresh-button').addEventListener('click', function () {
        location.reload();
    });
});