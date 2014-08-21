// Funciones java para el APP
function controlsesion()
//controla el nivel de acceso a cada pag asi como la existencia de la informac necesaria para imprimirla.
{
 var control_licencia = localStorage.getItem("mem_licencia");	
 var control_room = localStorage.getItem("roomdb");

				if (control_licencia != "" || control_licencia != NULL || control_licencia >= "5") {
                        console.log("Acceso a Pagina con licencia de hotel " + control_licencia);
                    } 
					else{
						console.log("Acceso a Pagina sin licencia de hotel " + control_room);
						document.location.href = "index.html";
					}
			    
				if (control_room != "" || control_room != NULL) {
                        console.log("Acceso a Pagina con habitacion " + control_room);
						
                    } 
					else{
						console.log("Acceso a Pagina sin habitacion " + control_room);
						document.location.href = "log.html";
					}

}

function print_lavanderia()
{
	var control_lavanderiacodigo = localStorage.getItem("mem_lavanderiacodigo");
	if (control_lavanderiacodigo) {
                        
						$.get("http://190.145.24.146/app/lavanderia_busqueda.php",{codigo: control_lavanderiacodigo}, lavanderiacodres, "jsonp");
 
 function lavanderiacodres(respuesta){
				        var estadolavanderia = respuesta.estado;
						var tiempoestimadolavanderia = respuesta.tiempo;
						localStorage.setItem("mem_lavanderiatiempo", tiempoestimadolavanderia);
						if(estadolavanderia == 'enespera'){
						console.log("Lavanderia solicitada en espera " + control_lavanderiacodigo);
						document.location.href = "respuestas.html#lavanderiaenespera";
														}
						if(estadolavanderia == 'enproceso'){
						console.log("Lavanderia solicitada en proceso " + tiempoestimadolavanderia);
						document.location.href = "respuestas.html#lavanderiaenproceso";
														}
						if(estadolavanderia == 'finalizado'){
						console.log("Lavanderia finalizada " + control_lavanderiacodigo);
						document.location.href = "respuestas.html#lavanderiafinalizada";
														}																												
																				
						
						}
						
						}
						
						else{
							document.location.href = "request.html#lavanderia";
							console.log("Lavanderia no solicitada " + control_lavanderiacodigo);
						}
						
                          
}

function handle_lavanderia()
{
 var nombre_lavanderia = localStorage.getItem("nombredb");
 var room_lavanderia = localStorage.getItem("roomdb");
 var lavanderia_pantalones = $("#lavanderia_pantalones").val();
 var lavanderia_camisa = $("#lavanderia_camisa").val();
 var lavanderia_chaqueta = $("#lavanderia_chaqueta").val();
 var lavanderia_op1 = $("#lavanderia_op1").val();
 var lavanderia_op2 = $("#lavanderia_op2").val();
 var lavanderia_op3 = $("#lavanderia_op3").val();
 	
 $.get("http://190.145.24.146/app/lavanderia.php",{room: room_lavanderia, nombre: nombre_lavanderia, pantalones: lavanderia_pantalones, camisa: lavanderia_camisa, chaqueta: lavanderia_chaqueta, op1: lavanderia_op1, op2: lavanderia_op2, op3: lavanderia_op3}, lavanderiares, "jsonp");
 
 function lavanderiares(respuesta){
				        var lavanderia_codigosolicitud = respuesta.codigosolicitud;
                                              localStorage.setItem("mem_lavanderiacodigo", lavanderia_codigosolicitud);
						console.log("Se envio solicitud de lavanderia: " + lavanderia_codigosolicitud);
						}
				
				   
}



function handle_mantenimiento()
{
 var nombre_mantenimiento = localStorage.getItem("nombredb");
 var room_mantenimiento = localStorage.getItem("roomdb");
 var mantenimiento_bano = $("#bano").val();
 console.log("man bano: " + mantenimiento_bano);
 var mantenimiento_ducha = $("#ducha").val();
 var mantenimiento_ventanas = $("#ventanas").val();
 var mantenimiento_puerta = $("#puerta").val();
 var mantenimiento_luces = $("#luces").val();
 var mantenimiento_otros = $("#otros").val();
 var mantenimiento_comentariostxt = $("#comentariostxt").val();
 console.log("man coments: " + mantenimiento_comentariostxt);
 	
 $.get("http://190.145.24.146/app/mantenimiento.php",{room: room_mantenimiento, nombre: nombre_mantenimiento, bano: mantenimiento_bano, comentariostxt: mantenimiento_comentariostxt}, amadellavesres, "jsonp");
 console.log("Envieget Man: " + mantenimiento_puerta);
 
 function amadellavesres(respuestaa){
				        var amadellaves_codigosolicitud = respuestaa.codigosolicitud;
                                              localStorage.setItem("mem_mantenimientocodigo", amadellaves_codigosolicitud);
						console.log("Se envio solicitud de mantenimiento: " + amadellaves_codigosolicitud);
						}
						document.location.href = "respuestas.html#res_mantenimiento";
				   
}

