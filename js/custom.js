window.onload=function(){
	var proj1 = document.getElementById('proj1');
	var proj2 = document.getElementById('proj2');
	var proj3 = document.getElementById('proj3');
	var imgToShow = document.getElementById("displayProjImage");


	proj1.addEventListener("mouseover",function(){
		document.getElementById("displayProjImage").src="img/hs_calculator.png";
	});
	proj2.addEventListener("mouseover",function(){
		document.getElementById("displayProjImage").src="img/learn2hack.png";
	});
	proj3.addEventListener("mouseover",function(){
		document.getElementById("displayProjImage").src="img/foodnatic.png";
	});
	proj4.addEventListener("mouseover",function(){
		document.getElementById("displayProjImage").src="img/escape_dimension.png";
	});
	proj5.addEventListener("mouseover",function(){
		document.getElementById("displayProjImage").src="img/opencode.jpg";
	});
	proj6.addEventListener("mouseover",function(){
		document.getElementById("displayProjImage").src="img/meetupvancouver.png";
	});
}

$(function(){
    $("#toTheTop").click(function(event){
        event.preventDefault();
        $("body").animate({"scrollTop": "0px"}, 300);
    })
});

$(function(){
    $("#toTheBottom").click(function(event){
        event.preventDefault();
        $("body").animate({"scrollTop":$(document).height() }, 300);
    })
});

$(function(){
    $("#navBartoTheTop").click(function(event){
        event.preventDefault();
        $("body").animate({"scrollTop": "0px"}, 300);
    })
});
