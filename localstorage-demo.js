const profileInputs = document.querySelectorAll('#profile-form input');

for (let i = 0; i < profileInputs.length; i += 1) {
  const input = profileInputs[i];
  const savedInputValue = localStorage.getItem(input.name);
  if (savedInputValue) {
    input.value = savedInputValue;
  }
  input.addEventListener('change', function (event) {
    localStorage.setItem(event.target.name, event.target.value);
  });
}
