const formRef = document.querySelector('.login-form');

const handleSubmit = (event) => {
    
    event.preventDefault();
    const { elements: { email, password },
    } = event.currentTarget;
    if (email.value === " " || password.value === "") {
        alert('Заповніть всі поля!')
        return
    }

    const userLogin = {
        email: email.value,
        password:password.value,
    }
    console.log(userLogin);
    formRef.reset();
};

formRef.addEventListener('submit', handleSubmit);