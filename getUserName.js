const userName = document.querySelector("#userName");
const phoneNumber = document.querySelector("#phone-input");

const userForm = document.querySelector("form");


userForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    try {

        const response = await fetch('/senddata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: userName.value, cellphone: phoneNumber.value})
        });

        const result = await response.json();

        if(response.ok) {
            console.log('Success', result);
            userName.value = "";
            phoneNumber.value = "";
        } else {
            console.error('Error', result.error);
        }

    } catch (error) {
        console.error('Request faield', error);
    }
});
