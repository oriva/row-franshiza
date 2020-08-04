<?
$to = 'partners@rowstudio.ru';
$subject = 'Заявка с сайта франшизы!';
$name=''; $phone=''; $question=''; $occupation='';
if (!empty($_POST["name"])) {
	$name = '<p style = "font-size: 1.2em; color: #333" ><span style = "font-weight: 600" > Имя:</span > '.$_POST['name'].' </p>';
};
if(!empty($_POST["phone"])) {
	$phone = '<p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Телефон:</span> ' . $_POST['phone'] . '</p>';
};
if(!empty($_POST["city"])) {
	$question = '<p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Город:</span> ' . $_POST['city'] . '</p>';
}
$message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body style="padding: 20px; border: 1px solid #000">
                        <p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Заявка: ' . $_POST['type'] . '</span></p>'
	. $name . $phone . $question . $occupation .
	'</body>
                </html>';
echo $message;
$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: partners.rowstudio.ru <partners@rowstudio.ru>\r\n";
mail($to, $subject, $message, $headers);
?>