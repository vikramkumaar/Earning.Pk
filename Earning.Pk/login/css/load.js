function onLoad(){
	const cars  = JSON.parse(localStorage.getItem("LOGED_IN_USER"));

	document.getElementById("naam").innerHTML= cars[0];
	document.getElementById("name1").innerHTML= cars[0];
	document.getElementById("di").innerHTML= cars[2];
	document.getElementById("phon").innerHTML= cars[3];
	document.getElementById("mail").innerHTML= cars[1];
	document.getElementById("mail1").innerHTML= cars[1];
}
