const form = document.getElementById('regForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value.trim(),
    regno: document.getElementById('regno').value.trim(),
    email: document.getElementById('email').value.trim(),
    mobile: document.getElementById('mobile').value.trim(),
    event: document.getElementById('event').value,
    time: new Date().toLocaleString()
  };

  const list = JSON.parse(localStorage.getItem('lpuRegistrations') || '[]');
  list.push(data);
  localStorage.setItem('lpuRegistrations', JSON.stringify(list));

  msg.innerHTML = '<i class="fa-solid fa-circle-check"></i> Registration saved in this browser!';
  form.reset();
  setTimeout(() => (msg.textContent = ''), 4000);
}); 