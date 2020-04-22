<?php


$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);

$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);

$name = trim($name);
$phone = trim($phone);
$email = trim($email);


echo $name;
echo "<br>";
echo $phone;
echo "<br>";
echo $email;


mail("vomihe1169@2go-mail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: pulse@mail.ru \r\n");

?>