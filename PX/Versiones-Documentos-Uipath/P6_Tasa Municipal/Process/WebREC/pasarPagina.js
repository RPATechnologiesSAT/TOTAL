function pasarPagina(){
	var hayPagina = "no";
	
	try{
		botonSiguiente = document.getElementById("tablaResultados").getElementsByClassName("pagelinks")(0).getElementsByClassName("ui-button-text")


		for (var i = 0; i< botonSiguiente.length; i++) {
			if(botonSiguiente[i].innerText == "Siguiente"){
				botonSiguiente[i].click();
				hayPagina = "si"
			}
		}
	}catch(e){
		hayPagina = "no"
	}
	
	return hayPagina;
}