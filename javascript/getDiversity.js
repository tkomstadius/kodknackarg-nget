window.onload = function() {
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	var url = "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/AA/AA0003/AA0003B/IntGr1Kom";
	xmlhttp.open("GET",url,false);
	xmlhttp.send();
	//xmlhttp.open("GET","http://api.scb.se/OV0104/v1/doris/sv/ssd/START/AA/AA0003/AA0003B/IntGr1Kom",false);
	//xmlhttp.send();
	//xmlDoc=xmlhttp.responseXML; 
	
	console.log(xmlhttp.status);
	console.log(xmlhttp.statusText);


	//console.log("Checking2");
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	        myFunction(myArr);
    }
    // Getting data from SCB
    var on = {"query": [
    {
      "code": "Region",
      "selection": {
        "filter": "item",
        "values": [
          "0182"
        ]
      }
    },
    {
      "code": "Bakgrund",
      "selection": {
        "filter": "vs:IntegrationBakgrundKön",
        "values": [
          "1",
          "2"
        ]
      }
    },
    {
      "code": "ContentsCode",
      "selection": {
        "filter": "item",
        "values": [
          "AA0003Q4"
        ]
      }
    },
    {
      "code": "Tid",
      "selection": {
        "filter": "item",
        "values": [
          "2012"
        ]
      }
    }
  ],
  "response": {
    "format": "px"
  }
}

    function myFunction(arr) {
	    var out = "";
	    var i;
	    
	    for(i = 0; i < arr.length; i++) {
	        out += arr[i].url;
	    }
	   // console.log(on.out);
	    //document.getElementById("diversity").innerHTML = out;
	}
	

}
