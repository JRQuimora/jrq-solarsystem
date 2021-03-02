var days = 0;

setInterval(function(){ 
	days = days + 16;
	
	if (days >= 36500) {
		time = days / 36500;
		document.getElementById('yearsCount').innerHTML = time.toFixed(2) + " Earth Centuries";
	}
	else if (days >= 3650) {
		time = days / 3650;
		document.getElementById('yearsCount').innerHTML = time.toFixed(2) + " Earth Decade/s";
	}else if (days >= 365) {
		time = days / 365;
		document.getElementById('yearsCount').innerHTML = time.toFixed(2) + " Earth Year/s";
	}
	else{
		document.getElementById('yearsCount').innerHTML = days + " Earth Days";
	}
 }, 1000);


function sun(){
	hide();
	document.getElementById('planetImg').setAttribute('src','');
	document.getElementById('infoCont').style = "width: 100%;";
	document.getElementById('planetImg').setAttribute('src','res/sunImg.png');
	document.getElementById('planetName').innerHTML = "Sun";
	document.getElementById('planetDescription').innerHTML = "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation. It is by far the most important source of energy for life on Earth.";
	document.getElementById('sun').style = "-ms-transform: translate(-50%, -50%) scale(2); transform: translate(-50%, -50%) scale(2);";
}

function mercury(){
	hide();
	showDetails('mercury',75,"Mercury","res/mercuryImg.png","Mercury is the closest planet to the sun. As such, it circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god. The Sumerians also knew of Mercury since at least 5,000 years ago. It was often associated with Nabu, the god of writing.");			
}

function venus(){
	hide();
	showDetails('venus',65,"Venus","res/venusImg.png","Venus, the second planet from the sun, is named after the Roman goddess of love and beauty and is the only planet named after a female. Venus may have been named after the most beautiful deity of the pantheon because it shone the brightest among the five planets known to ancient astronomers.");		
}
function earth(){
	hide();
	showDetails('earth',55,"Earth","res/earthImg.png","Earth, our home, is the third planet from the sun. It's the only planet known to have an atmosphere containing free oxygen, oceans of water on its surface and, of course, life.");
}
function mars(){
	hide();
	showDetails('mars',45,"Mars","res/marsImg.png","Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".");
}
function jupiter(){
	hide();
	showDetails('jupiter',35,"Jupiter","res/jupiterImg.png","Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. ");
}
function saturn(){
	hide();
	showDetails('saturn',25,"Saturn","res/saturnImg.png","Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.");
}
function uranus(){
	hide();
	showDetails('uranus',25,"Uranus","res/uranusImg.png","Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.");
}
function neptune(){
	hide();
	showDetails('neptune',25,"Neptune","res/neptuneImg.png","Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.");
}
function hide(){
	document.getElementById('infoCont').style = "width: 0;";
	document.getElementById('sun').style = "-ms-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1);";
	document.getElementById('mercury').style = "-ms-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1);";
	document.getElementById('venus').style = "-ms-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1);";
	document.getElementById('earth').style = "-ms-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1);";
	document.getElementById('mars').style = "-ms-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1);";
	document.getElementById('jupiter').style = "-ms-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1);";
	document.getElementById('saturn').style = "-ms-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1);";
	document.getElementById('uranus').style = "-ms-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1);";
	document.getElementById('neptune').style = "-ms-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1);";
}




if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 	setTimeout(function(){
		toMiddle();
	}, 1000);
 	document.getElementById('yearsCount').style = "font-size: 10vw;";
 	document.getElementById('sunLbl').style = "font-size: 3vw;";
 	document.getElementById('mercuryLbl').style = "font-size: 3vw;";
 	document.getElementById('venusLbl').style = "font-size: 3vw;";
 	document.getElementById('earthLbl').style = "font-size: 3vw;";
 	document.getElementById('marsLbl').style = "font-size: 3vw;";
 	document.getElementById('jupiterLbl').style = "font-size: 3vw;";
 	document.getElementById('saturnLbl').style = "font-size: 3vw;";
 	document.getElementById('uranusLbl').style = "font-size: 3vw;";
 	document.getElementById('neptuneLbl').style = "font-size: 3vw;";
 	document.getElementById('infoCont').style = "padding-top:150px;";
 	document.getElementById('planetDescription').style = " background: rgba(19,19,19,0.7);";
}

function toMiddle(){
	document.getElementById('sun').scrollIntoView();
	var viewportH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	window.scrollBy(0, ( document.getElementById('sun').getBoundingClientRect().height-viewportH)/2);
}

function showDetails(planetId,widthPercent,planetName,planetImg,planetDescription){
	if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.getElementById(planetId).style = "width:"+widthPercent+"%; padding-bottom:"+widthPercent+"%;";
	}else{
		document.getElementById(planetId).style = "width:100px; padding-bottom:100px;";
	}
	document.getElementById('planetImg').setAttribute('src','');
	document.getElementById('infoCont').style = "width: 100%;";
	document.getElementById('planetImg').setAttribute('src',planetImg);
	document.getElementById('planetName').innerHTML = planetName;
	document.getElementById('planetDescription').innerHTML = planetDescription;
}

