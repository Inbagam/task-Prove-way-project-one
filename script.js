const panel = document.getElementById('mobilePanel');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => {
    panel.style.width = '250px'; // Expand panel
});

closeBtn.addEventListener('click', () => {
    panel.style.width = '0'; // Collapse panel
});
