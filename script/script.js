function validEmail() {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let email = document.getElementById('email').value;
    const errorSpan = document.querySelector('.email-error');

    if(!emailRegex.test(email)) {
        errorSpan.style.visibility = 'visible';    
    }

    else {
        errorSpan.style.visibility='hidden';
    }
}