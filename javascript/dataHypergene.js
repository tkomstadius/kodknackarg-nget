if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

var url = "https://www.kolada.se/index.php?page=index/api";
xmlhttp.open("GET","url",false);
xmlhttp.send();
// xmlDoc=xmlhttp.responseXML; 
console.log("Öppnar data");

// // Search function for län.
// var x=xmlDoc.getElementsByTagName("sokdata");
// var number = 1;


// for (i=0;i<x.length;i++)
//   { 
//   	// console.log(number);
//   	document.getElementById(number).innerHTML = x[i].getElementsByTagName("namn")[0].childNodes[0].nodeValue;
//   	number++;
//   }
