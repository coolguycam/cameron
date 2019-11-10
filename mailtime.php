<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Content-type: application/x-www-form-urlencoded');
$errors = '';
$myemail = 'camerondimitroff@gmail.com';
if(empty($_POST['firstname']) ||
   empty($_POST['lastname']) ||
   empty($_POST['email']) ||
   empty($_POST['msg']) ||
   empty($_POST['subject']))
{
    $errors .= "\n Error: all '*' fields are required";
}
$fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$email_address = $_POST['email'];
$message = $_POST['msg'];
$subject = $_POST['subject'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}
var_dump($_POST);
if(empty($errors))
{
$to = $myemail;
$email_subject = "Contact form submission: $fname $lname";
$email_body = "You have received a new message. ".
" Here are the details:\n Name: $fname $lname \n ".
"Email: $email_address\n Message \n $message";
$headers .= "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
}

?>