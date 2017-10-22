<?php
$servername = "enhanced-cs.c6i7wvyicmua.us-east-2.rds.amazonaws.com";
$username = "cs_admin";
$password = "1234Qwer??";
$conn = new mysql($servername, $username, $password);
if($conn->connect_error)
{
				die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
