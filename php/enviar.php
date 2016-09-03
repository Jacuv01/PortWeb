<?php 
	$destino="jcchv92@gmail.com";
	$nombre = $_POST["inputName"];
	$correo = $_POST["inputEmail"];
	$asunto = $_POST["inputSubject"];
	$mensaje = $_POST["inputMessage"];
	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\Mensaje" . $mensaje;
	mail($destino, $asunto, $contenido);
	header("Location:index.html");
?>