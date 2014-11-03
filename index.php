<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/chat.css">

	<script src="js/jquery.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/pusher.min.js"></script>
	<script src="js/chat.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="message-wrap col-lg-12">
				<div class="msg-wrap" id="mensajes"></div>
				<div class="send-wrap navbar navbar-default navbar-fixed-bottom boton">
					<textarea id="mymsg" class="form-control send-message" rows="3" placeholder="Write a reply..."></textarea>
					<div class="btn-panel">
						<a href="javascript:enviarMensaje();" class=" col-lg-4 text-right btn   send-message-btn pull-right" role="button"><i class="fa fa-plus"></i> Enviar Mensaje</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>