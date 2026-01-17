const phoneInput = document.querySelector("#phone-input");

phoneInput.addEventListener('input', function(e) {
    const formatter = new libphonenumber.AsYouType('BR');
    e.target.value = formatter.input(e.target.value);
});
