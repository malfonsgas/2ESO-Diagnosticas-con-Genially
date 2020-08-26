

function comprobar5(){
	
	var Respuesta2=document.getElementById("respuesta2").value;
	var Respuesta3=document.getElementById("respuesta3").value;

	var check1=document.getElementById("afirm1");
	var check2=document.getElementById("afirm2");
	var check3=document.getElementById("afirm3");
	var check4=document.getElementById("afirm4");
	var check5=document.getElementById("afirm5");

	var Respuesta1=(check1.checked && !check2.checked && !check3.checked && check4.checked && check5.checked);
	


	if (Respuesta1){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
	}


	if (Respuesta2==1.7){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else{
		document.getElementById("Incorrecto2").style='display:block';
		document.getElementById("Correcto2").style='display:none';
	}

if (Respuesta3=="right"){
	 	document.getElementById("Correcto3").style='display:block';
	 	document.getElementById("Incorrecto3").style='display:none';
	} else{
		document.getElementById("Incorrecto3").style='display:block';
		document.getElementById("Correcto3").style='display:none';
	}



	if ((Respuesta1==true) && (Respuesta2==1.7)&& (Respuesta3=="right")){
		document.getElementById("Contenido").style='display:none';
		document.getElementById("Codigo").style='display:block';
	}


}
