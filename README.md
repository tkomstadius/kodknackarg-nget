# kodknackargänget
Kodknackargänget gör Hack for Sweden. 
En ascool hemsida som ska lösa ALLA våra problem. 


Projektet behöver ligga på en server (använd xampp på windows och ampp på mac)

/*************************************************************/
			Länkar 
exempel:
http://www.w3schools.com/xml/tryit.asp?filename=tryxml_display_table

w3schools JSON tutorial:
http://www.w3schools.com/json/tryit.asp?filename=tryjson_server_sql
/*************************************************************/


/*************************************************************/
			Beskrivning av databashantering

Lista alla län på: 
	api.arbetsformedlingen.se/af/v0/platsannons/soklista/lan
	sparad som lan.xml
Spara tagg "id" för län-ID


Sortera platsannonser för valt län på:
	api.arbetsformedlingen.se/af/v0/platsannonser/matchning?lanid=10 (Byt 10 mot ditt län-ID)
	sparat Stockholms län (id=1) som allajobb_stockholm.xml
Välj ett jobb, spara tagg "annonsid" 


Sortera på yrkesområde på: 
	api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrkesomraden
	sparat som yrkesomraden.xml
Spara tagg "id"


Sök efter alla jobb inom ett visst yrkesområde på: 
	api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrkesgrupper?yrkesomradeid=3 (byt ut 3 mot yrkesomr.ID)
		id 		område
		2 		bygg
		3		data/it
		5		försäljning/inköp/marknadsföring
	sparat alla jobb inom data/IT som data_it_jobb.xml
	sparat alla jobb inom bygg som bygg_jobb.xml
Spara tagg "id"


sök matchningar på yrkesgrupp och län och/eller nyckelord:
	api.arbetsformedlingen.se/af/v0/platsannonser/matchning?lanid=1&yrkesomradeid=3&nyckelord=chef
	sparat jobb inom data/IT i Stockholm med nyckelord "chef" som data_it_stockholm_chef.xml
	sparat jobb inom data/IT i Stockholm som data_it_stockholm.xml
	sparat jobb inom bygg i Stockholm som bygg_stockholm.xml
spara tagg "annonsid"


sök på exakt annonsID med: 
	api.arbetsformedlingen.se/af/v0/platsannonser/6208750 (Byt ut 62... mot annonsid)
	sparat första 3 jobben inom data/IT i Stockholm med nyckelord "chef" som 
		jobb1.data_it_stockholm_chef.xml
		jobb2.data_...
		jobb3.data_...


/*************************************************************/
