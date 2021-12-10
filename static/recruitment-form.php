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

  $area = $_POST['area'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
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
    $mail->addAddress('geral@autopecas.pt', 'Autopeças');

    // Content
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->WordWrap = 50;
    $mail->Subject = "Autopeças | Recrutamento - {$name}";

    $mail->Body = "
      <div style='width: 100%; height: 60px; background: black; margin-bottom: 40px;'></div> 
      <img src='https://res.cloudinary.com/ddbuiilei/image/upload/f_png/v1635701997/logo_yvtrks.svg' style='margin: 15px 0 15px 25px;' />
      <h3 style='margin: 15px 0 15px 25px;'>Nova candidatura recebida</h3>
      <div style='margin: 15px 0 15px 25px;'>
        <p><span>Nome: <strong>{$name}</strong></span><span style='margin-left:15px;'>Área: <strong>{$area}</strong></span></p>
        <p><span>Telefone: <strong>{$phone}</strong></span><span style='margin-left:15px;'>Email: <strong>{$email}</strong></span></p>
        <p>Mensagem:</p>
        <p>{$message}</p>
      </div>
      <p style='font-size: 11px; margin-top: 30px; margin-left: 25px;'>Mensagem enviada através do formulário de recrutamento no website Autopecas.pt</p>
    ";

    if (array_key_exists('file', $_FILES)) {
        $filename = $_FILES['file']['name'];
        $uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['file']['name']));
        if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $mail->Body .= "<p style='font-size: 11px; margin-left: 25px;'>CV enviado em anexo.</p>";
        }
    }

    $mail->Body .= "
      <div style='width: 100%; height: 60px; background: black; margin-top: 40px;'></div>
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