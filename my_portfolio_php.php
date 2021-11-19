<?php 

// $name = $_POST['name'];
// $email = $_POST['email'];
// $subject = $_POST['subject'];
// $message = $_POST['message'];

// $name = $_POST['name'];
// $email= $_POST['email'];
// $message= $_POST['message'];
// $to = "youremail@mail.com";
// $subject = "Mail From website";
// $txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
// $headers = "From: noreply@yoursite.com" . "\r\n" .
// "CC: somebodyelse@example.com";
// if($email!=NULL){
//     mail($to,$subject,$txt,$headers);
// }
// //redirect
// header("Location:thankyou.html");


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