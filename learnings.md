### JavasScript learning

```javascript 
// The "e" in the function(e) is an Event Object.
// the e contains all information about the event that just occured.
// This informartion is necessary to be manipulated, as it was done for the input formatter.

const input = document.querySelector("#phoneInput");

input.addEventListener('input', function(e){
    const formatter = new libphonenumber.AsYouType('BR');
    e.target.value = formatter.input(e.target.value)
});

// e.target = takes the element which triggered the event;

````