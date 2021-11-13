
window.onload=function funLoad(){
	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
		var modal = document.getElementById("myModal");
	    modal.style.display = "none";
	}

	window.onclick = function(event) {
		var modal = document.getElementById("myModal");
		if (event.target == modal) {
		    modal.style.display = "none";
		}
	}
}

async function search_function(){
	var decider=document.getElementById('check_box');		
	var modal = document.getElementById("myModal");
	var str=document.getElementById("search").value;
	if(decider.checked){
		const api_url="http://www.omdbapi.com/?t="+str+"&apikey=43ab01aa&plot=full";
		await getapi(api_url);
	}
	else{
		const api_url="http://www.omdbapi.com/?t="+str+"&apikey=43ab01aa&";
		await getapi(api_url);
	}		
	modal.style.display="block";
};

async function getapi(url){
	
	const response=await fetch(url);
	var data=await response.json();
	if(data.Poster==="undefined"){
		console.log("not found");
	}
	// console.log(data.Title);
	document.getElementById("image").src=data.Poster;
	document.getElementById("details8").innerHTML=data.imdbRating;
	document.getElementById("details1").innerHTML=data.Title;
	document.getElementById("details2").innerHTML=data.Year;
	document.getElementById("details3").innerHTML=data.Genre;
	document.getElementById("details4").innerHTML=data.Director;
	document.getElementById("details5").innerHTML=data.Actors ;
	document.getElementById("details6").innerHTML=data.Language;
	document.getElementById("details7").innerHTML=data.Plot;
};
	
	