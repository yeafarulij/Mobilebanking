document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');
    const balanceAmount = document.getElementById('balance-amount');
    const toggleMoneyBtn = document.getElementById('toggle-money-btn');
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const qrFab = document.getElementById('qr-fab');
    const qrPanel = document.getElementById('qr-panel');
    let balanceVisible = false;

    /* Language toggle functionality */
    langToggle.addEventListener('click', function() {
        langToggle.textContent = langToggle.textContent === 'አማ' ? 'EN' : 'አማ';
    });

    /* Toggle balance visibility */
    toggleMoneyBtn.addEventListener('click', function() {
        if (balanceVisible) {
            balanceAmount.textContent = '***** Br.';
            toggleMoneyBtn.innerHTML = '<i class="fas fa-eye"></i>';
        } else {
            balanceAmount.textContent = '127,591,274.77 Br.';
            toggleMoneyBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
        }
        balanceVisible = !balanceVisible;
    });

    /* Side menu toggle */
    menuToggle.addEventListener('click', function() {
        if (sideMenu.style.width === '0px' || sideMenu.style.width === '') {
            sideMenu.style.width = '250px'; /* Minimized size */
        } else {
            sideMenu.style.width = '0px';
        }
    });

    /* Hide side menu when clicking outside */
    document.addEventListener('click', function(event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.style.width = '0px';
        }
    });

    /* QR Fab Button - Show/Hide QR Panel */
    qrFab.addEventListener('click', function() {
        if (qrPanel.style.bottom === '80px') {
            qrPanel.style.bottom = '-100%';
        } else {
            qrPanel.style.bottom = '80px'; /* Slides up just above the FAB */
        }
    });

    /* Hide QR Panel when clicking outside */
    document.addEventListener('click', function(event) {
        if (!qrPanel.contains(event.target) && !qrFab.contains(event.target)) {
            qrPanel.style.bottom = '-100%';
        }
    });

    /* Display current date and time */
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    document.getElementById('current-date').textContent = formattedDate;
});