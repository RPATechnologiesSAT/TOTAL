function seleccionarMunicipio(element,municipio){
	
	var seleccionado = "no seleccionado";
	var encontrado = false;
	
	function findWord(word, str) {
		word = word.toUpperCase();
		str = str.toUpperCase();
		
	  return RegExp('\\b'+ word +'\\b').test(str);
	}
	function findAyto(word, str) {
			word = word.toUpperCase();
			str = str.toUpperCase();
			
		  if(RegExp('\\b'+ word +'\\b').test(str) == true){
				return true
			}else if(str.search(word) != -1){
				return true
			}
		}
	
	try{
		var botones = document.getElementById("organismo").getElementsByTagName("input");
		for (var i = 0; i< botones.length; i++) {
			
				municipioAiterar = botones[i].value.substring(12);

				/*if(municipioAiterar.replace(/[\u0300-\u036f]/g, "").toUpperCase() == municipio.replace(/[\u0300-\u036f]/g, "").toUpperCase() || municipioAiterar.replace(/[\u0300-\u036f]/g, "").toUpperCase().includes(municipio.replace(/[\u0300-\u036f]/g, "").toUpperCase())){
				   botones[i].checked = true;
				   seleccionado = "seleccionado"
				   break;

				}*/
				
				encontrado = findWord(municipio,municipioAiterar)
				
				if(encontrado == true || municipio === municipioAiterar){
					botones[i].checked = true;
					seleccionado = "seleccionado"
					break;
				}
				
		}
	}catch(e){
		seleccionado ="no seleccionado"
	}

	return seleccionado
	
}