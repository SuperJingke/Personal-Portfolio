document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Stop actual form submission

    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);

    // 
    const recipient = "jingkeliang88@gmail.com";
    const subject = `Message from ${name}`;
    const template = `Greetings Jingke, %0A%0Ahope this message finds you well.%0A%0A I am ${name}, reaching out via your portfolio website.`;
    const body = `${template}%0A%0A${message}`;

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
// Note: %0A is URL encoding for a new line character