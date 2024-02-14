<link rel="stylesheet" href="styles.css">
<?php
require("connexion.php");

$name = $_POST["np"];
$prename = $_POST["prename"];
$tel = $_POST["tel2"];
$mail = $_POST["mail2"];
$psw = $_POST["psw2"];



$req = "SELECT COUNT(email) AS emailCount FROM accounts WHERE email = '$mail'";
$res = mysqli_query($cnx, $req);

if (!$res) {
    die("Error in SQL query: ". mysqli_error($cnx));
}

$row = mysqli_fetch_array($res);
$emailCount = $row['emailCount'];

if ($emailCount == 0) {
    // email doesn't exist
    $insert = "INSERT INTO `accounts` (`name`, `lastname`, `telnum`, `email`, `password`)
                    VALUES ('$name', '$prename', '$tel', '$mail', '$psw')";

    if (mysqli_query($cnx, $insert)) {
        echo "<div class=divPhpSuc >Signup successful!</div>";
    } else {
        die("<div class=divPhpFail >Failed to signup:</div> " . mysqli_error($cnx));
    }
} else {
    echo "<div class=divPhpFail >Email already exists. Try using another one.</div>";
}

// close the database connection
mysqli_close($cnx);
?>