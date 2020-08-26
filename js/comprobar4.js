

function comprobar4(){
	var Respuesta1=document.getElementById("respuesta1").value;
	var Respuesta2=document.getElementById("respuesta2").value;
	var Respuesta3=document.getElementById("respuesta3").value;


	
	if (Respuesta1=="GCF"){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
	}
	if (Respuesta2==6){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else{
		document.getElementById("Correcto2").style='display:none';
		document.getElementById("Incorrecto2").style='display:block';
	}


	if (Respuesta3==15){
	 	document.getElementById("Correcto3").style='display:block';
	 	document.getElementById("Incorrecto3").style='display:none';
	} else{
		document.getElementById("Incorrecto3").style='display:block';
		document.getElementById("Correcto3").style='display:none';
	}



	if ((Respuesta1=="GCF") && (Respuesta2==6) && (Respuesta3==15)){
		document.getElementById("Contenido").style='display:none';
		document.getElementById("Codigo").style='display:block';


	}


}
