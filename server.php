<?php
	//importamos la libreria de pusher
	require('libs/Pusher.php');
	//comprobamos que llego un mensaje por el metodo GET
	if($_GET){
		if(isset($_GET['usuario']) && isset($_GET['mensaje'])){
			/*creamos un objeto pusher*/
			$pusher = new Pusher('KEY', 'SECRET', 'APP_ID');
			//enviamos el mensaje recibido a todos los clientes conectados
			$pusher->trigger('chat', 'mensaje', array('usuario'=> $_GET['usuario'],'mensaje' => $_GET['mensaje']) );
		}
	}
?>