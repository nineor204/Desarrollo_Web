<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: inicio_sesion.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Panel de Usuario</title>
    <link rel="stylesheet" href="estilos_pastel.css">
</head>
<body>
    <div class="container">
        <h1>Bienvenido, <?php echo htmlspecialchars($_SESSION['user']); ?>!</h1>
        <a href="cerrar_sesion.php"><button>Cerrar Sesión</button></a>
    </div>
</body>
</html>
