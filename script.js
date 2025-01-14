// Toggle Background Color
const toggleBgBtn = document.getElementById('toggleBgBtn');
let isLightBlue = false;

toggleBgBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = isLightBlue ? '#f4f4f4' : '#add8e6';
  isLightBlue = !isLightBlue;
});

// Slider for Text Size
const textSizeSlider = document.getElementById('textSizeSlider');
const infoText = document.getElementById('infoText');

textSizeSlider.addEventListener('input', (e) => {
  infoText.style.fontSize = `${e.target.value}px`;
});

// Modal Event Handlers
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

openModalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

document.querySelector('.overlay').addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Form Validation
const contactForm = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

contactForm.addEventListener('submit', (e) => {
  let isValid = true;

  if (nameField.value.trim().length < 3) {
    nameError.classList.remove('hidden');
    isValid = false;
  } else {
    nameError.classList.add('hidden');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value.trim())) {
    emailError.classList.remove('hidden');
    isValid = false;
  } else {
    emailError.classList.add('hidden');
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(passwordField.value.trim())) {
    passwordError.classList.remove('hidden');
    isValid = false;
  } else {
    passwordError.classList.add('hidden');
  }

  if (!isValid) e.preventDefault();
});

// Dropdown Message
const serviceDropdown = document.getElementById('serviceDropdown');
const dropdownMessage = document.getElementById('dropdownMessage');

serviceDropdown.addEventListener('change', () => {
  dropdownMessage.textContent = `You selected: ${serviceDropdown.value}`;
});
