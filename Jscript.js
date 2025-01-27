document.addEventListener('DOMContentLoaded', () => {
  // Typed.js configuration
  const typed = new Typed('#typed-text', {
    strings: ['Bonny Tilahun', 'Front-End Developer', 'CSE Student at Astu'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 2000,
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('mobile-menu');
  const menu = document.querySelector('.menu');
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Send message to Telegram bot
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const telegram = document.getElementById('telegram').value;  
    const message = document.getElementById('message').value;

    const botToken = '7802841628:AAFOVeP9IHT0l3jL36SXJJskypAuX_Zj32U'; 
    const chatId = '7335067649'; 

    const text = `New message from ${name} (Telegram: @${telegram}):\n\n${message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          alert('Message sent successfully!');
          contactForm.reset(); 
        } else {
          alert('There was an error sending your message. Please try again.');
        }
      })
      .catch(error => {
        alert('There was an error sending your message. Please try again.');
      });
  });
});
