<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de Sesión</title>
    <link rel="stylesheet" href="./estilos/estilos_pastel.css">
    <script defer src="./script/script.js"></script>
</head>
<body>
    <div class="container">
        <h1>Bienvenido a la App UTPL</h1>
        <div id="tabs">
            <button id="btnLogin" class="active">Iniciar Sesión</button>
            <button id="btnRegister">Registrarse</button>
        </div>
        <div id="loginForm" class="form">
            <form action="autenticacion_usuario.php" method="POST">
                <input type="text" name="username" placeholder="Usuario" required>
                <input type="password" name="password" placeholder="Contraseña" required>
                <button type="submit">Acceder</button>
            </form>
        </div>
        <div id="registerForm" class="form hidden">
            <form action="registro_usuario.php" method="POST">
                <input type="text" name="username" placeholder="Ingrese nuevo usuario" required>
                <input type="password" name="password" placeholder="Ingrese nueva contraseña" required>
                <button type="submit">Registrar</button>
            </form>
        </div>
    </div>
</body>
</html>
