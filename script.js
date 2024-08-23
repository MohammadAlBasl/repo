// script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("يرجى ملء جميع الحقول.");
    } else {
        alert("تم إرسال رسالتك بنجاح!");
        this.reset();
    }
});
