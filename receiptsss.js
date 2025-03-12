document.addEventListener('DOMContentLoaded', function () {
    const qrFab = document.getElementById('qr-fab');
    const qrPanel = document.getElementById('qr-panel');

    // QR Fab Button - Show/Hide QR Panel
    qrFab.addEventListener('click', function () {
        if (qrPanel.style.bottom === '80px') {
            qrPanel.style.bottom = '-100%';
        } else {
            qrPanel.style.bottom = '80px'; // Slides up just above the FAB
        }
    });

    // Hide QR Panel when clicking outside
    document.addEventListener('click', function (event) {
        if (!qrPanel.contains(event.target) && !qrFab.contains(event.target)) {
            qrPanel.style.bottom = '-100%';
        }
    });
});
