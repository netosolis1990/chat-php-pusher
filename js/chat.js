$(document).ready(function() {
	//Aqui Pusher recibe como parametro la KEY
	var pusher = new Pusher('KEY');
	//Suscribirnos a un canal de comunicacion
	var channel = pusher.subscribe('chat');
	fecha = new Date();
	//Escuchamos un evento...en este caso llamado mensaje... cuando escuche por el evento entonces mostrara el mensaje recibido
	channel.bind('mensaje', function(data) {
		cad = '<div class="media msg">'+
		'<a class="pull-left" href="#">'+
		'<img class="media-object" style="width: 32px; height: 32px;" src="">'+
		'</a>'+
		'<div class="media-body">'+
		'<small class="pull-right time"><i class="fa fa-clock-o"></i>'+fecha.getHours()+':'+fecha.getMinutes()+'</small>'+
		'<h5 class="media-heading">'+data.usuario+'</h5>'+
		'<small class="col-lg-10">'+data.mensaje+'</small>'+
		'</div>'+
		'</div>';
		$('#mensajes').append(cad);
		$("#mensajes").scrollTop($("#mensajes")[0].scrollHeight+30);
	});
});


/*Esta funcion envia un mensaje al presionar "Enviar Mensaje", primero comprueba si ya existe un nombre de usuario
si no, entonces crea uno (id unico),despues se usa la funcion $.get de jquery para enviarle el mensaje al server*/

function enviarMensaje(){
	msg = $('#mymsg').val();
	if(msg.length == 0 )return;
	//generamos un usuario unico 
	if(!localStorage.getItem('usuario')){
		usuario = new Date().getTime();
		localStorage.setItem('usuario',usuario);
	}
	else{
		usuario = localStorage.getItem('usuario');
	}
	//enviamos el mensaje al servidor mediante AJAX
	$.get('server.php',{usuario:usuario,mensaje:msg},function(data) {
		//limpiamos el area de texto y hacemos que baje el scroll hasta el nuevo mensaje
		$('#mymsg').val('');
		$("#mensajes").scrollTop($("#mensajes")[0].scrollHeight+30);
	});
}