	var print = ""
	var val = 0;
	do {
		print += "JavaScript " + val;
		print += "<br>";
		val += 1;
	}
	while (val < 6);
	document.getElementById("p-id").innerHTML = print;
