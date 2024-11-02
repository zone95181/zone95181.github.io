/*numberplaceforbrowser*/
/*20241102*/
var canvas = document.createElement("canvas");
var c = canvas.getContext("2d");
var imglogo = new Image();

imglogo.src = "logo.png? raw=true";


function onLoad()
{
	c = document.getElementById("logo_image").getContext("2d");
	c.clearRect(0, 0, imglogo.width, imglogo.height);
	c.drawImage(imglogo, 0, 0, imglogo.width, imglogo.height);
	c = null;
}

window.onload = onLoad;

