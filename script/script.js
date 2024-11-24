document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos del DOM
    const btnLogin = document.getElementById('btnLogin');
    const btnRegister = document.getElementById('btnRegister');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Función para mostrar el formulario de inicio de sesión
    btnLogin.addEventListener('click', () => {
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    // Función para mostrar el formulario de registro
    btnRegister.addEventListener('click', () => {
        btnRegister.classList.add('active');
        btnLogin.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btnLogin');
    const btnRegister = document.getElementById('btnRegister');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Arreglo para almacenar usuarios
    const users = [];

    // Cambiar a la vista de inicio de sesión
    btnLogin.addEventListener('click', () => {
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    // Cambiar a la vista de registro
    btnRegister.addEventListener('click', () => {
        btnRegister.classList.add('active');
        btnLogin.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Manejar registro de usuario
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = registerForm.querySelector('input[name="username"]').value;
        const password = registerForm.querySelector('input[name="password"]').value;

        // Verificar si el usuario ya existe
        if (users.some(user => user.username === username)) {
            alert('El usuario ya está registrado. Intenta con otro nombre de usuario.');
        } else {
            // Agregar usuario al arreglo
            users.push({ username, password });
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            btnLogin.click(); // Cambiar a la vista de inicio de sesión automáticamente
        }

        // Limpiar los campos del formulario
        registerForm.reset();
    });

    // Manejar inicio de sesión
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = loginForm.querySelector('input[name="username"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;

        // Verificar si las credenciales son correctas
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            alert(`Bienvenido, ${username}!`);
        } else {
            alert('Usuario o contraseña incorrectos.');
        }

        // Limpiar los campos del formulario
        loginForm.reset();
    });
});

