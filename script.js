var days = 0;
var infoCont = false;

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

sun();

function mercury(){
	document.getElementById('infoCont').style = "width: 0px;";
	setTimeout(function(){ 
		document.getElementById('planetImg').setAttribute('src','');
		document.getElementById('infoCont').style = "width: 450px;";
		document.getElementById('planetImg').setAttribute('src','http://assets.stickpng.com/images/580b585b2edbce24c47b2709.png');
		document.getElementById('planetName').innerHTML = "Mercury";
		document.getElementById('planetDescription').innerHTML = "Mercury is the closest planet to the sun. As such, it circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god. The Sumerians also knew of Mercury since at least 5,000 years ago. It was often associated with Nabu, the god of writing.";
		document.getElementById('sun').style = "width: 60px; height: 60px";
		document.getElementById('mercury').style = "width: 100px; height: 100px;";
		document.getElementById('venus').style = "width: 50px; height: 50px;";
		document.getElementById('earth').style = "width: 50px; height: 50px;";
		document.getElementById('mars').style = "width: 50px; height: 50px;";
		document.getElementById('jupiter').style = "width: 50px; height: 50px;";
		document.getElementById('saturn').style = "width: 50px; height: 50px;";
		document.getElementById('uranus').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('neptune').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('saturnRing').style = "width: 50px; height: 30px; top: -5px; left:-20px;";
	}, 2000);
}

function venus(){
	document.getElementById('infoCont').style = "width: 0px;";
	setTimeout(function(){ 
		document.getElementById('planetImg').setAttribute('src','');
		document.getElementById('infoCont').style = "width: 450px;";
		document.getElementById('planetImg').setAttribute('src','http://assets.stickpng.com/images/580b585b2edbce24c47b2712.png');
		document.getElementById('planetName').innerHTML = "Venus";
		document.getElementById('planetDescription').innerHTML = "Venus, the second planet from the sun, is named after the Roman goddess of love and beauty and is the only planet named after a female. Venus may have been named after the most beautiful deity of the pantheon because it shone the brightest among the five planets known to ancient astronomers.";
		document.getElementById('sun').style = "width: 60px; height: 60px";
		document.getElementById('mercury').style = "width: 50px; height: 50px;";
		document.getElementById('venus').style = "width: 100px; height: 100px;";
		document.getElementById('earth').style = "width: 50px; height: 50px;";
		document.getElementById('mars').style = "width: 50px; height: 50px;";
		document.getElementById('jupiter').style = "width: 50px; height: 50px;";
		document.getElementById('saturn').style = "width: 50px; height: 50px;";
		document.getElementById('uranus').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('neptune').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('saturnRing').style = "width: 50px; height: 30px; top: -5px; left:-20px;";
	}, 2000);
	
}
function earth(){
	document.getElementById('infoCont').style = "width: 0px;";
	setTimeout(function(){ 
		document.getElementById('planetImg').setAttribute('src','');
		document.getElementById('infoCont').style = "width: 450px;";
		document.getElementById('planetImg').setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png');
		document.getElementById('planetName').innerHTML = "Earth";
		document.getElementById('planetDescription').innerHTML = "Earth, our home, is the third planet from the sun. It's the only planet known to have an atmosphere containing free oxygen, oceans of water on its surface and, of course, life.";
		document.getElementById('sun').style = "width: 60px; height: 60px";
		document.getElementById('mercury').style = "width: 50px; height: 50px;";
		document.getElementById('venus').style = "width: 50px; height: 50px;";
		document.getElementById('earth').style = "width: 100px; height: 100px;";
		document.getElementById('mars').style = "width: 50px; height: 50px;";
		document.getElementById('jupiter').style = "width: 50px; height: 50px;";
		document.getElementById('saturn').style = "width: 50px; height: 50px;";
		document.getElementById('uranus').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('neptune').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('saturnRing').style = "width: 50px; height: 30px; top: -5px; left:-20px;";
	}, 2000);
	
}

function mars(){
	document.getElementById('infoCont').style = "width: 0px;";
	setTimeout(function(){ 
		document.getElementById('planetImg').setAttribute('src','');
		document.getElementById('infoCont').style = "width: 450px;";
		document.getElementById('planetImg').setAttribute('src','https://pngimg.com/uploads/mars_planet/mars_planet_PNG38.png');
		document.getElementById('planetName').innerHTML = "Mars";
		document.getElementById('planetDescription').innerHTML = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".";
		document.getElementById('sun').style = "width: 60px; height: 60px";
		document.getElementById('mercury').style = "width: 50px; height: 50px;";
		document.getElementById('venus').style = "width: 50px; height: 50px;";
		document.getElementById('earth').style = "width: 50px; height: 50px;";
		document.getElementById('mars').style = "width: 100px; height: 100px;";
		document.getElementById('jupiter').style = "width: 50px; height: 50px;";
		document.getElementById('saturn').style = "width: 50px; height: 50px;";
		document.getElementById('uranus').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('neptune').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('saturnRing').style = "width: 50px; height: 30px; top: -5px; left:-20px;";
	}, 2000);
	
}

function jupiter(){
	document.getElementById('infoCont').style = "width: 0px;";
	setTimeout(function(){ 
		document.getElementById('planetImg').setAttribute('src','');
		document.getElementById('infoCont').style = "width: 450px;";
		document.getElementById('planetImg').setAttribute('src','http://assets.stickpng.com/images/580b585b2edbce24c47b2707.png');
		document.getElementById('planetName').innerHTML = "Jupiter";
		document.getElementById('planetDescription').innerHTML = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. ";
		document.getElementById('sun').style = "width: 60px; height: 60px";
		document.getElementById('mercury').style = "width: 50px; height: 50px;";
		document.getElementById('venus').style = "width: 50px; height: 50px;";
		document.getElementById('earth').style = "width: 50px; height: 50px;";
		document.getElementById('mars').style = "width: 50px; height: 50px;";
		document.getElementById('jupiter').style = "width: 100px; height: 100px;";
		document.getElementById('saturn').style = "width: 50px; height: 50px;";
		document.getElementById('uranus').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('neptune').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('saturnRing').style = "width: 50px; height: 30px; top: -5px; left:-20px;";;
	}, 2000);
	
}

function saturn(){
	document.getElementById('infoCont').style = "width: 0px;";
	setTimeout(function(){ 
		document.getElementById('planetImg').setAttribute('src','');
		document.getElementById('infoCont').style = "width: 450px;";
		document.getElementById('planetImg').setAttribute('src','http://assets.stickpng.com/images/580b585b2edbce24c47b270d.png');
		document.getElementById('planetName').innerHTML = "Saturn";
		document.getElementById('planetDescription').innerHTML = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive";
		document.getElementById('sun').style = "width: 60px; height: 60px";
		document.getElementById('mercury').style = "width: 50px; height: 50px;";
		document.getElementById('venus').style = "width: 50px; height: 50px;";
		document.getElementById('earth').style = "width: 50px; height: 50px;";
		document.getElementById('mars').style = "width: 50px; height: 50px;";
		document.getElementById('jupiter').style = "width: 50px; height: 50px;";
		document.getElementById('saturn').style = "width: 100px; height: 100px;";
		document.getElementById('uranus').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('neptune').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('saturnRing').style = "width: 120px; height: 120px; top: -20px; left:-30px; border: 20px solid gray; transform: rotateX(-100deg); ";
	}, 2000);
	
}

function uranus(){
	document.getElementById('infoCont').style = "width: 0px;";
	setTimeout(function(){ 
		document.getElementById('planetImg').setAttribute('src','');
		document.getElementById('infoCont').style = "width: 450px;";
		document.getElementById('planetImg').setAttribute('src','https://images.squarespace-cdn.com/content/v1/52c1f91ee4b0a77a50337e61/1531774522177-55LZ1VMLZDP7LE4L0YQ9/ke17ZwdGBToddI8pDm48kNF1yWqZiLxbnhdx_tB3xkFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxjVTZQxrdmZPu3Rqe18k9H9vWU1rhWwimXNCOWwsFCxPcv4M1NZ3ThKDrajXBMZ7A/uranus.png');
		document.getElementById('planetName').innerHTML = "Uranus";
		document.getElementById('planetDescription').innerHTML = "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.";
		document.getElementById('sun').style = "width: 60px; height: 60px";
		document.getElementById('mercury').style = "width: 50px; height: 50px;";
		document.getElementById('venus').style = "width: 50px; height: 50px;";
		document.getElementById('earth').style = "width: 50px; height: 50px;";
		document.getElementById('mars').style = "width: 50px; height: 50px;";
		document.getElementById('jupiter').style = "width: 50px; height: 50px;";
		document.getElementById('saturn').style = "width: 50px; height: 50px;";
		document.getElementById('uranus').style = "width: 100px; height: 100px; top:-50px;";
		document.getElementById('neptune').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('saturnRing').style = "width: 50px; height: 30px; top: -5px; left:-20px;";
	}, 2000);
	
}

function neptune(){
	document.getElementById('infoCont').style = "width: 0px;";
	setTimeout(function(){ 
		document.getElementById('planetImg').setAttribute('src','');
		document.getElementById('infoCont').style = "width: 450px;";
		document.getElementById('planetImg').setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/d/da/3D_Neptune.png');
		document.getElementById('planetName').innerHTML = "Neptune";
		document.getElementById('planetDescription').innerHTML = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.";
		document.getElementById('sun').style = "width: 60px; height: 60px";
		document.getElementById('mercury').style = "width: 50px; height: 50px;";
		document.getElementById('venus').style = "width: 50px; height: 50px;";
		document.getElementById('earth').style = "width: 50px; height: 50px;";
		document.getElementById('mars').style = "width: 50px; height: 50px;";
		document.getElementById('jupiter').style = "width: 50px; height: 50px;";
		document.getElementById('saturn').style = "width: 50px; height: 50px;";
		document.getElementById('uranus').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('neptune').style = "width: 100px; height: 100px; top: -50px;";
		document.getElementById('saturnRing').style = "width: 50px; height: 30px; top: -5px; left:-20px;";
	}, 2000);
	
}

function sun(){
	document.getElementById('infoCont').style = "width: 0px;";
	setTimeout(function(){ 
		document.getElementById('planetImg').setAttribute('src','');
		document.getElementById('infoCont').style = "width: 450px;";
		document.getElementById('planetImg').setAttribute('src','https://webstockreview.net/images/clipart-sun-space-12.png');
		document.getElementById('planetName').innerHTML = "Sun";
		document.getElementById('planetDescription').innerHTML = "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation. It is by far the most important source of energy for life on Earth.";
		document.getElementById('sun').style = "width: 100px; height: 100px";
		document.getElementById('mercury').style = "width: 50px; height: 50px;";
		document.getElementById('venus').style = "width: 50px; height: 50px;";
		document.getElementById('earth').style = "width: 50px; height: 50px;";
		document.getElementById('mars').style = "width: 50px; height: 50px;";
		document.getElementById('jupiter').style = "width: 50px; height: 50px;";
		document.getElementById('saturn').style = "width: 50px; height: 50px;";
		document.getElementById('uranus').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('neptune').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('saturnRing').style = "width: 50px; height: 30px; top: -5px; left:-20px;";
	}, 2000);
	
}

function hide(){
	document.getElementById('infoCont').style = "width: 0px;";
		document.getElementById('sun').style = "width: 60px; height: 60px";
		document.getElementById('mercury').style = "width: 50px; height: 50px;";
		document.getElementById('venus').style = "width: 50px; height: 50px;";
		document.getElementById('earth').style = "width: 50px; height: 50px;";
		document.getElementById('mars').style = "width: 50px; height: 50px;";
		document.getElementById('jupiter').style = "width: 50px; height: 50px;";
		document.getElementById('saturn').style = "width: 50px; height: 50px;";
		document.getElementById('uranus').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('neptune').style = "width: 50px; height: 50px; top: -25px";
		document.getElementById('saturnRing').style = "width: 50px; height: 30px; top: -5px; left:-20px;";
}

