<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if (isset($_POST)) {
  $mail = new PHPMailer(TRUE);

  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $subject = $_POST['subject'];
   $message = wordwrap($_POST['message'], 125);
  $message = htmlentities($message);
  $message = nl2br($message);

  try {
    // Server settings
    $mail->IsSMTP();
    $mail->Host = "sv01.invisual.pt";
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;
    $mail->Username = "autopecas@invisual.pt";
    $mail->Password = "auto#lausivni";

    // Recipients
    $mail->setFrom('autopecas@invisual.pt', 'Autopeças');
    $mail->addAddress('eduardo.araujo@invisual.pt', 'Eduardo');
    //$mail->addReplyTo($email, $name);

    // Content
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->WordWrap = 50;
    $mail->Subject = "Autopeças | Formulário - {$subject}";

    $mail->Body = "
        <h2>Nova mensagem no formulário de contacto</h2>
        <br />
        <p>Nome <strong>{$name}</strong></p>
        <p>Email <strong>{$email}</strong></p>
        <p>Telefone <strong>{$phone}</strong></p>
        <p>Assunto <strong>{$subject}</strong></p>
        <p>Mensagem:</p>
        <p>{$message}</p>
    ";


    $mail->send();

    echo 'success';
    // #######################################################################
  } catch (Exception $e) {
    /* PHPMailer exception. */
    echo $e->errorMessage();
  } catch (\Exception $e) {
    /* PHP exception (note the backslash to select the global namespace Exception class). */
    echo $e->getMessage();
  }
}