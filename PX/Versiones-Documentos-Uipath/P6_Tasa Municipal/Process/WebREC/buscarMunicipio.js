function buscarMunicipio(element,municipio){
	//inicio variables
    
    var municipioSeleccionado = "no aytoEncontrado";
	var municipioIterado="";
	var aytoEncontrado = false; //ayuntamiento
	var ajtaEncontrado = false; //ajuntament
	
	
	try{
		
		/*Obtenemos municipios de la búsqueda en la web REC del ministerio*/
		var municipios = document.getElementById("organismo").getElementsByTagName("strong");
		
		
		/*=================================================================================================*/
		/*Funcion para buscar el ayto a ietar con el ayto de rec*/
		function findWord(word, str) {
			/*
			Se convierte el ayto a buscar, y el ayto a iterar en mayúsculas 
			para no tener problemas de diferencias en Mays y minusculas
			*/
			word = word.toUpperCase();
			str = str.toUpperCase();
			
			if(RegExp('\\b'+ word +'\\b').test(str) == true){
				return true
			}else if(str.search(word) != -1){
				return true
			}
		  
		  
		}
		/*=================================================================================================*/
		
		//Busqueda municipio
		for (m in municipios) {
			
			municipioIterado= municipios[m].innerText.substring(16); //Extraemos solo el municipio(sin "Ayuntamiento de ")
			aytoEncontrado = findWord(municipio,municipioIterado);   //Nos indica si existe o no en la pagina de búsqueda de resultados de Rec
			
			
			
			if(aytoEncontrado == true || municipio === municipioIterado){
				//Si es Ayuntamiento
				municipioSeleccionado = municipios[m].innerText;
				break;
			}else{
				municipioIterado= municipios[m].innerText.substring(14);
				ajtaEncontrado = findWord(municipio,municipioIterado);
				
				if(ajtaEncontrado == true){
					//Si es Ajuntament de...
					municipioSeleccionado = municipios[m].innerText;
					break;
				}
				
				municipioIterado= municipios[m].innerText.substring(11);
				ajtaEncontrado = findWord(municipio,municipioIterado);
				
				if(ajtaEncontrado == true){
					//Si es Ajuntament sin 'de'
					municipioSeleccionado = municipios[m].innerText;
					break;
				}
				
			}
			
				
			
			
			
			
		}
		
	   return municipioSeleccionado;
	}catch(e){
		municipioSeleccionado = "no encontrado"
		return municipioSeleccionado;
	}   
}