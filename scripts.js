// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const demoButtons = document.querySelectorAll('.interactive-demo');

    demoButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('This is an interactive demo!');
        });
    });
});
