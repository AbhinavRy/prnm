<?php
if (isset($_FILES) && (bool) $_FILES) {

    $allowedExtensions = array("pdf", "doc", "docx", "gif", "jpeg", "jpg", "png");

    $files = array();
    foreach ($_FILES as $name => $file) {
        $file_name = $file['name'];
        $temp_name = $file['tmp_name'];
        $file_type = $file['type'];
        $path_parts = pathinfo($file_name);
        $ext = $path_parts['extension'];
        if (!in_array($ext, $allowedExtensions)) {
            die("File $file_name has the extensions $ext which is not allowed");
        }
        array_push($files, $file);
    }

    // email fields: to, from, subject, and so on
    $from="info@kajalsarswat.000webhostapp.com";
    $to = "devkush25@gmail.com,";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $university = $_POST['university'];
    $message = $_POST['message'];
    $headers = "From: $from";
    $subject="Attaching file";
$email_message = 'Complaint Request
                    Name:       '.$name.'
                    Email:      '.$email.'
                    Phone no.:  '.$phone.'
                    Pincode: '.$university.'
                    Message:    '.$message.'';
$email_message.="
Please find the attachment";
    // boundary
    $semi_rand = md5(time());
    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

    // headers for attachment
    $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";

    // multipart boundary
    $message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $email_message . "\n\n";
    $message .= "--{$mime_boundary}\n";

    // preparing attachments
    for ($x = 0; $x < count($files); $x++) {
        $file = fopen($files[$x]['tmp_name'], "rb");
        $data = fread($file, filesize($files[$x]['tmp_name']));
        fclose($file);
        $data = chunk_split(base64_encode($data));
        $name = $files[$x]['name'];
        $message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$name\"\n" .
                "Content-Disposition: attachment;\n" . " filename=\"$name\"\n" .
                "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
        $message .= "--{$mime_boundary}\n";
    }
    // send

    $ok = mail($to, $subject, $message, $headers);
    if ($ok) {
        echo "<p>mail sent to us</p>";
    } else {
        echo "<p>mail could not be sent!</p>";
    }
}?>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
body{
  margin: 0;
  padding: 0;
}
.contact-form{
  width: 80%;
 
  background: #f1f1f1;
  position: absolute;
  top: 5%;
  left: 11%;
 
  padding: 30px 40px;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 20px #000000b3;
  font-family: "Montserrat",sans-serif;
  bottom:5%;
  height:max-content;
}
.contact-form h1{
  margin-top: 0;
  font-weight: 200;
}
.txtb{
  border:1px solid gray;
  margin: 8px 0;
  padding: 12px 18px;
  border-radius: 8px;
}
.txtb label{
  display: block;
  text-align: left;
  color: #333;
  text-transform: uppercase;
  font-size: 14px;
}
.txtb input,.txtb textarea{
  width: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 18px;
  margin-top: 6px;
}
.btn{
  display: inline-block;
  background: #9b59b6;
  padding: 14px 0;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 8px;
  width: 100%;
}

</style>
<style>
@media only screen and (max-width: 1055px){
.contact-form{
  width: 80%;
 
  background: #f1f1f1;
  position: absolute;
  top: 2%;
  left: 11%;
 
  padding: 30px 40px;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 20px #000000b3;
  font-family: "Montserrat",sans-serif;
  bottom: 2%;
  height: max-content;
}
.contact-form h1{
  margin-top: 0;
  font-weight: 200;
}


}
</style>

  </head>
  <body>
  <div class="contact-form">
    <h1>“COMPLAINT FORM”</h1>
    <h2>Contact Us</h2>
    <form method="post" action="" enctype="multipart/form-data">
    <div class="txtb">
      <label>Full Name :</label>
      <input type="text" name="name" value="" placeholder="">
    </div>

    <div class="txtb">
      <label>Email :</label>
      <input type="email" name="email" value="" placeholder="">
    </div>

    <div class="txtb">
      <label>Phone Number :</label>
      <input type="tel" name="phone" value="" placeholder="">
    </div>

   

<div class="txtb">
      <label>Pincode :</label>
      <input type="text" name="university" value="" placeholder="">
    </div>



<div class="txtb">
      <label>Attachment:</label>
      <input type="file" name="attach1" value="" placeholder="">
    </div>

    <div class="txtb">
      <label>Mention your Complaint :</label>
      <textarea name="message" placeholder=""></textarea>
    </div>
   
   
   
<div class="btn">
            <input type="submit" value="Send Mail"/>
    </div>
    </footer>
    </form>
  </div>

  </body>
</html>
