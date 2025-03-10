function redirectTo(url) {
    window.location.href = url;
}

function redirectToCart() {
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function () {
            window.location.href = 'cart.html';
        });
    });
}