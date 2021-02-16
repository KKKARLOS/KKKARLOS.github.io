<?php 
//Datos del formulario

$mensaje="<h1 style='color:#3498db;'>".$_POST["nombre"]."</h1>";
$mensaje.="<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
$mensaje.= "<b>Email: ".$_POST["email"]."</b>";
$mensaje.="<b>Telefono: ".$_POST["telefono"]."</b>";
$mensaje.= "<b>Mensaje:".$_POST["mensaje"]."</b>";

$para      = $_POST["email"];
$titulo    = "Solicitudes de clientes";
$cabeceras = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$cabeceras .= 'From: juaristi@areafor.com <br> Reply-To: juaristi@areafor.com';
mail($para, $titulo, $mensaje, $cabeceras);
header("Location:".$_SERVER['HTTP_REFERER']);
?>