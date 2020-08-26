

function Comprueba_codigo(){
	
	var Code=document.getElementById("Contrasena").value;


	if (Code=="AYFBRQ"){
	 	document.getElementById("Texto").style='display:None';
	 	document.getElementById("Error").style='display:None';
	 	document.getElementById("Contrasena").style='display:None';
	 	document.getElementById("Boton").style='display:None';
	 	document.getElementById("Final").style='display:block';
	 	document.getElementById("ImagenFinal").style='display:block';
	 
	 } 
	 else{
		document.getElementById("Error").style='display:block';
		document.getElementById("Final").style='display:None';
	 	}

	 }