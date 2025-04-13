// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Toast notification for experience section
const jobs = document.querySelectorAll('.job');
const toast = document.getElementById('toast');
jobs.forEach(job => {
  job.addEventListener('click', () => {
    const message = `Learn more about my role at ${job.textContent.split(' - ')[0]}`;
    toast.textContent = message;
    toast.style.opacity = 1;
    setTimeout(() => (toast.style.opacity = 0), 3000);
  });
});

// PDF download
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  const element = document.body;
  const opt = {
    margin:       0,
    filename:     'resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
});

// Contact form validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name) {
    formMessage.textContent = 'Please enter your name.';
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    formMessage.textContent = 'Please enter a valid email.';
  } else if (message.length < 10) {
    formMessage.textContent = 'Message must be at least 10 characters.';
  } else {
    alert('Message sent successfully!');
    form.reset();
    formMessage.textContent = '';
  }
});
