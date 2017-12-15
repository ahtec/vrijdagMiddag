

function priem(){
	
	var o ={
		ISBN    : "92837634",
		autheur : "Erik"    ,
		nr :  1  ,
		tekst: "Als je over Pi spreekt kom je soms nog een ander getal tegen, het getal Tau. Tau is simpel: het is precies twee keer Pi! Wetenschappers hebben sinds de jaren '80 onderzoek gedaan naar het gebruik van het getal Pi, en kwamen tot de conclusie dat je makkelijker kunt rekenen en mooiere formules krijgt als je Tau gebruikt in plaats van Pi: als je Tau gebruikt, wordt de formule voor de omtrek van een cirkel dus straal x Tau."
	}
	var temo;
//	var i = 9;
//var intervali

	for(i=0;i<99;i++){
		o.nr = i;
	}
				
	temo = JSON.stringify(o);
	postMessage(temo);

}  


priem();
