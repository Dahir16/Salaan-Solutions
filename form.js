const userName = document.getElementById('userName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');


// contact form
const form = document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        userName: userName.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email sent');
            userName.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        }else {
            alert('Try again later!')
        }
    }
    xhr.send(JSON.stringify(formData));

});