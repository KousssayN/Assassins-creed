<link rel="stylesheet" href="styles.css">
<?php
require("connexion.php");
    
$tel = $_POST["tel"]; 
$mail = $_POST["mail"];
$psw = $_POST["psw"];

$req_tel = "SELECT telnum FROM accounts WHERE telnum = '$tel'";
$req_mail = "SELECT email FROM accounts WHERE email = '$mail'";
$req_psw = "SELECT password FROM accounts WHERE password = '$psw'";

$res_tel = mysqli_query($cnx, $req_tel);
$res_mail = mysqli_query($cnx, $req_mail);
$res_psw = mysqli_query($cnx, $req_psw);

$row_tel = mysqli_num_rows($res_tel);
$row_mail = mysqli_num_rows($res_mail);
$row_psw = mysqli_num_rows($res_psw);

if ($row_tel != 0 && $row_mail != 0 && $row_psw != 0) {
    echo("<div class='divPhpSuc'>Hello, welcome back! You logged in successfully.</div>");
} else {
    echo("<div class='divPhpFail'>Unfortunately, your account is not found. Try signing up first.</div>");
}

?>