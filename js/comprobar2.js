
/*window.onload= function Fescala() {
    var aleatorio = Math.random();
    document.getElementById('Escala').innerHTML = "Escala 1:"+ 1000*Math.round(4*aleatorio+1);
   EscalaPlano=1000*Math.round(4*aleatorio+1);
    }

*/

function comprobar2(){
	var Respuesta1=document.getElementById("respuesta1").value;
	var Respuesta2=document.getElementById("respuesta2").value;
	var Respuesta3=document.getElementById("respuesta3").value;
	var Respuesta4=document.getElementById("respuesta4").value;

	

	if (Respuesta1=="His grandparents"){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
	}


	if (Respuesta2==29){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else{
		document.getElementById("Incorrecto2").style='display:block';
		document.getElementById("Correcto2").style='display:none';
	}

if (Respuesta3==104){
	 	document.getElementById("Correcto3").style='display:block';
	 	document.getElementById("Incorrecto3").style='display:none';
	} else{
		document.getElementById("Incorrecto3").style='display:block';
		document.getElementById("Correcto3").style='display:none';
	}


if (Respuesta4=="15/52"){
	 	document.getElementById("Correcto4").style='display:block';
	 	document.getElementById("Incorrecto4").style='display:none';
	} else{
		document.getElementById("Correcto4").style='display:none';
		document.getElementById("Incorrecto4").style='display:block';
	}

	if ((Respuesta1=="His grandparents") && (Respuesta2==29)&& (Respuesta3==104)&& (Respuesta4=="15/52")){
		document.getElementById("Contenido").style='display:none';
		document.getElementById("Codigo").style='display:block';


	}


}
