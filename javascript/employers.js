// DataBase function
function getDataBase(dataFile, firstNode){

	// Checks if the request can ba opend
	if (window.XMLHttpRequest)
	  {   // code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp1=new XMLHttpRequest();
		  // xmlhttp2=new XMLHttpRequest();
	  }
	else
	  {	  // code for IE6, IE5
		  xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");
		  // xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	// creates the sr
	var fileName = "database/" + dataFile + ".xml";
	// var parameterName = firstNode
	// console.log(fileName);
	
	
	//open the specific file
	xmlhttp1.open("GET", fileName ,false);
	xmlhttp1.send();
	xmlDoc1=xmlhttp1.responseXML; 


	//Search och display 
	var xx=xmlDoc1.getElementsByTagName('firstNode');
	var countLan1 = 1;

	console.log(countLan1);
	console.log(countLan1);
	for (i=0; i< xx.length; i++ ){
		console.log(countLan1);
		// ta ut endast så att rätt föregats kommer ut
		document.getElementById(countLan1).innerHTML = 
		xx[i].getElementsByTagName("namn")[0].childNodes[0].nodeValue;
		countLan1++;
	}

}

