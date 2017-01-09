window.onload=function(){
	var proj1 = document.getElementById('proj1');
	var proj2 = document.getElementById('proj2');
	var proj3 = document.getElementById('proj3');
	var imgToShow = document.getElementById("displayProjImage");


	proj1.addEventListener("mouseover",function(){
		document.getElementById("displayProjImage").src="img/foodnatic.png";
		console.log(1);
	});
	proj2.addEventListener("mouseover",function(){
		document.getElementById("displayProjImage").src="img/renderer1.png";
		console.log(2);
	});
	proj3.addEventListener("mouseover",function(){
		document.getElementById("displayProjImage").src="img/meetupvancouver.png";
		console.log(3);
	});
	proj4.addEventListener("mouseover",function(){
		document.getElementById("displayProjImage").src="img/rollingball2.png";
		console.log(3);
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
