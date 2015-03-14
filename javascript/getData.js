function getAds(){
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	// Arbetsförmedlingen har en spärr på sin databas från http-request. De ska eventuellt ta bort denna i framtiden (eftersom vi lyfte frågan) 
	// men kan inte göra något just nu. Vi får därför "fulkoda" från vårt egna provisoriska databassystem. 	
	//  xmlhttp.open("GET","http://api.arbetsformedlingen.se/platsannons/soklista/kommuner?lanid=10",false);
	xmlhttp.open("GET","database/data_it_stockholm.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 

	var toDisplay; 
	
	if(document.getElementById("searchResult").innerHTML == ""){
		document.getElementById("button1").innerHTML = "Take me back!";
		console.log("den e noll");
		var x=xmlDoc.getElementsByTagName("matchningdata");
		toDisplay = "<br><br><h3>Jobb som passar dina kriterier</h3><br><br>";
		//console.log(x.length);
		//for (i=0;i<x.length;i++)
		for(i=1; i<4; i++)
		  { 
		  	toDisplay += "<a href='javascript:matchAd(" +i+ ")'>";
		  	toDisplay += x[i].getElementsByTagName("annonsrubrik")[0].childNodes[0].nodeValue+ ", Företag: ";
		  	toDisplay += x[i].getElementsByTagName("arbetsplatsnamn")[0].childNodes[0].nodeValue;
		  	toDisplay += "</a><br><br>";
		  	}

		document.getElementById("searchResult").innerHTML = toDisplay;
	}
	else {
		document.getElementById("button1").innerHTML = "Show me some jobs!";
		document.getElementById("searchResult").innerHTML = "";
		console.log("den e nånting");
	}
	
}
function matchAd(){
	xmlhttp.open("GET","database/jobb2_data_it_stockholm_chef.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;
	var x = xmlDoc.getElementsByTagName("annons"); 
	console.log(x[0]);
	alert(x[0].getElementsByTagName("annonstext")[0].childNodes[0].nodeValue);
}