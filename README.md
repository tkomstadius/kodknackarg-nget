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

Söker efter län på: 
	api.arbetsformedlingen.se/af/v0/platsannons/soklista/lan
	sparad som lan.xml
Spara tagg "id" för län-ID

Sortera platsannonser för ett län på:
	api.arbetsformedlingen.se/af/v0/platsannonser/matchning?lanid=10 (Byt 10 mot ditt län-ID)
	sparat Stockholms län (id=1) som allajobb_stockholm.xml
Välj ett jobb, spara tagg "annonsid" 

sök sedan på exakt annonsID med: 
/platsannonser/{:annonsid *}


ELLER 

Sortera på yrkesområde på: 
	api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrkesomraden
	sparat som yrkesomraden.xml
Spara tagg "id"

Sök efter alla jobb inom ett visst yrkesområde på: 
	api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrkesgrupper?yrkesomradeid=3 (byt ut 3 mot yrkesomr.ID)
	sparat alla jobb inom data/IT som data_it_jobb.xml
Spara tagg "id"



xml på yrkesgrupp och län:
	api.arbetsformedlingen.se/af/v0/platsannonser/matchning?lanid=1&yrkesid={M}&
nyckelord ={M}

/*************************************************************/
