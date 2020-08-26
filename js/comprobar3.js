
/*window.onload= function Fescala() {
    var aleatorio = Math.random();
    document.getElementById('Escala').innerHTML = "Escala 1:"+ 1000*Math.round(4*aleatorio+1);
   EscalaPlano=1000*Math.round(4*aleatorio+1);
    }

*/

function comprobar3(){
	var Respuesta1=document.getElementById("respuesta1").value;
	var Respuesta2=document.getElementById("respuesta2").value;
	var Respuesta3=document.getElementById("respuesta3").value;

	

	if (Respuesta1==7.5){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
	}


	if (Respuesta2==8.5){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else{
		document.getElementById("Incorrecto2").style='display:block';
		document.getElementById("Correcto2").style='display:none';
	}

if (Respuesta3==3){
	 	document.getElementById("Correcto3").style='display:block';
	 	document.getElementById("Incorrecto3").style='display:none';
	} else{
		document.getElementById("Incorrecto3").style='display:block';
		document.getElementById("Correcto3").style='display:none';
	}



	if ((Respuesta1==7.5) && (Respuesta2==8.5) && (Respuesta3==3)){
		document.getElementById("Contenido").style='display:none';
		document.getElementById("Codigo").style='display:block';


	}


}
