<!DOCTYPE HTML>
<html>

<head>
	<title>
		Alert Box vs Prompt Box
	</title>
</head>

<body style="text-align:center;" id="body">

	<h1 style="color:green;">
		GeeksforGeeks
	</h1>
	
	<button onclick="alertBox()">
		Show Alert Box
	</button>
	<button onclick="promptBox()">
		Show Prompt Box
	</button>
	
	<script>
		function alertBox(){
			alert("GeeksforGeeks: This" +
					" is an Alert Box.");
		}

		function promptBox(){
			prompt("Enter your Name:");
		}
	</script>
</body>

</html>					
