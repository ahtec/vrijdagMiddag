

function priem(){
	
	var o ={
		ISBN    : "92837634",
		autheur : "Erik"    ,
		nr :  1
	}
	var temo;
//	var i = 9;
//var intervali

	for(i=0;i<99;i++){
		o.nr = i;
				
	temo = JSON.stringify(o);
	postMessage(temo);
	}

}  


priem();
