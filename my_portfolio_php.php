<?php 


$to_email = "mdsujon5036@gmail.com";
$name = $_POST['name'];
$email = $_POST['email'];
$user_subject = $_POST['subject'];
$subject = "New form submision - portfolio";
$message = $_POST['message'];
$body = "User Name:- $name. \n". 
        "User Email:- $email. \n".
        "User Subject:- $user_subject. \n".
        "User Message:- $message. \n";

$headers = "From: utsujon934@gmail.com";

if (mail($to_email, $subject, $body, $headers)) {
    echo "Email successfully sent to $to_email...";
} else {
    echo "Email sending failed...";
}

header('location: index.html');

?>
