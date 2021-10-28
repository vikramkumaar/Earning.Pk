function onLoad(){
	const info  = JSON.parse(localStorage.getItem("LOGED_IN_USER"));

	document.getElementById("naam").innerHTML= info[0];
	document.getElementById("name1").innerHTML= info[0];
	document.getElementById("di").innerHTML= info[2];
	document.getElementById("phon").innerHTML= info[3];
	document.getElementById("mail").innerHTML= info[1];
	document.getElementById("mail1").innerHTML= info[1];
}
