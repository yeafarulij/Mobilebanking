document.addEventListener('DOMContentLoaded', function () {
    const qrFab = document.getElementById('qr-fab');
    const qrPanel = document.getElementById('qr-panel');

    qrFab.addEventListener('click', function () {
        qrPanel.classList.toggle('show');
    });
});

function goBack() {
    window.history.back();
}

function redirectToSendPage() {
    window.location.href = 'send.html';
}
