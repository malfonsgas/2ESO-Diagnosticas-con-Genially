
/*window.onload= function Fescala() {
    var aleatorio = Math.random();
    document.getElementById('Escala').innerHTML = "Escala 1:"+ 1000*Math.round(4*aleatorio+1);
   EscalaPlano=1000*Math.round(4*aleatorio+1);
    }

*/

function comprobar1(){
	var Respuesta1=document.getElementById("respuesta1").value;
	var Respuesta2=document.getElementById("respuesta2").value;

	

	if (Respuesta1=="t=d/80"){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
	}


	if (Respuesta2==90){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else{
		document.getElementById("Incorrecto2").style='display:block';
		document.getElementById("Correcto2").style='display:none';
	}
	if ((Respuesta2==90) && (Respuesta1=="t=d/80")){
		document.getElementById("Contenido").style='display:none';
		document.getElementById("Codigo").style='display:block';


	}


}
