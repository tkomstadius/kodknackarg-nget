function getAds() {
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
	xmlhttp.open("GET","../database/data_it_stockholm.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 

	var toDisplay; 
	var x=xmlDoc.getElementsByTagName("matchningdata");
		toDisplay = "<br><br><h3>Jobb som passar dina kriterier</h3><br><br>";
		//console.log(x.length);
		//for (i=0;i<x.length;i++)
		// displays the place ads
		for(i=1; i<10; i++)
		  { 
		  	//toDisplay += "<a href='javascript:matchAd()'>";
		  	toDisplay += "<a href='javascript:matchAd()'>"
		  	toDisplay += x[i].getElementsByTagName("annonsrubrik")[0].childNodes[0].nodeValue+ ", Företag: ";
		  	toDisplay += x[i].getElementsByTagName("arbetsplatsnamn")[0].childNodes[0].nodeValue;
		  	toDisplay += "</a><br><br>";
		  	}

		document.getElementById("searchResult").innerHTML = toDisplay;
			
}
function getButton(){
	var display = "<a href='#searchList'><div id='search' onclick='getAds()''></div></a>";							
	document.getElementById("showButton").innerHTML = display;
}
function matchAd(){
	xmlhttp.open("GET","../database/jobb2_data_it_stockholm_chef.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;
	var x = xmlDoc.getElementsByTagName("annons"); 
	//console.log(x[0]);
    var display = x[0].getElementsByTagName("annonstext")[0].childNodes[0].nodeValue;
    display = "<img id='logo-top' src='../graphics/Annonser/experis.png>";
	document.getElementById("adResult").innerHTML = display;
	//alert(x[0].getElementsByTagName("annonstext")[0].childNodes[0].nodeValue);
}