

function priem(priem){
	
		for (index = 2;index < priem ;index++) {
			if (priem % index == 0) {
				postMessage(index);
			}
		}      
}  


priem(100);
