<?php


$name = $_POST['name'];

$email = $_POST['email'];

$mes = $_POST['mes'];


$mail = "Prueba de mensaje";
//Titulo
$titulo = "PRUEBA DE TITULO";
//cabecera
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
//dirección del remitente 
$headers .= "From: Geeky Theory <'$email'>\r\n";
//Enviamos el mensaje a info@geekytheory.com 
$bool = mail("webmarketing@mayan.mx",$titulo,$mail,$headers);
if($bool){
    echo "Mensaje enviado";
}else{
    echo "Mensaje no enviado";
}














?>