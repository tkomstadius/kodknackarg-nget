if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

xmlhttp.open("GET","database/lan.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

// Creating table of content
lan_och_platser = "<table><tr><th>Län</th><th>Antal</th></tr>";
var x=xmlDoc.getElementsByTagName("sokdata");
for (i=0;i<x.length;i++)
  { 
  	lan_och_platser += "<tr><td>" + x[i].getElementsByTagName("namn")[0].childNodes[0].nodeValue + "</td><td>" + x[i].getElementsByTagName("antal_platsannonser")[0].childNodes[0].nodeValue + "</td></tr>";
  }
lan_och_platser += "</table>";
// Returning result in "content"
document.getElementById("content").innerHTML = lan_och_platser;