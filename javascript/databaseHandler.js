if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  xmlhttp2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
	  }

// var url = "http://api.arbetsformedlingen.se/platsannons/soklista/kommuner?lanid=10.xml";
xmlhttp.open("GET","javascript/database/lan.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

console.log(xmlDoc);
// Search function for län.
var x1=xmlDoc.getElementsByTagName("sokdata");
var countLan = 1;

for (i=0;i<x1.length;i++)
  { 
  	// console.log(countLan);
  	document.getElementById(countLan).innerHTML = x1[i].getElementsByTagName("namn")[0].childNodes[0].nodeValue;
  	countLan++;
  }
// xmlhttp2.open("GET","database/yrkesomraden.xml", false);
// xmlhttp2.send();
// xmlDoc2 = xmlhttp2.responseXML;

// // Search function for yrkesomraden
// var y = xmlDoc2.getElementsByTagName("sokdata");
// var countYrke = 23; 
// for (i=0;i<y.length;i++)
//   { 
//   	// console.log(countYrke);
//   	document.getElementById(countYrke).innerHTML = y[i].getElementsByTagName("namn")[0].childNodes[0].nodeValue;
//   	countYrke++;
//   }


  