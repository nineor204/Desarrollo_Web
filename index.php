<?php
session_start();
if (isset($_SESSION['user'])) {
    header('Location: panel_usuario.php');
    exit;
} else {
    header('Location: inicio_sesion.php');
    exit;
}
?>
