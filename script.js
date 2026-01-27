document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msg = document.getElementById('formMessage');
    
    if (!name || !email || !message) {
        msg.textContent = 'Please fill all fields.';
        msg.className = 'form-note error';
    } else if (!email.includes('@')) {
        msg.textContent = 'Invalid email.';
        msg.className = 'form-note error';
    } else {
        msg.textContent = 'Thank you! Message sent.';
        msg.className = 'form-note success';
        this.reset();
    }
    
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 4000);
});

