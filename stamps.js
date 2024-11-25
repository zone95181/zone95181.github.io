/*stamps*/
/*20241125*/
var canvas = document.createElement("canvas");
var c = canvas.getContext("2d");
var imglogo = new Image();
var imgstamp_production = new Image();
var imgfish = new Image();
var imgaa = new Image();
var imgclover = new Image();
var imgbrank = new Image();

var canvas_element = [
	[imgbrank,0,0,0,0],
	[imgbrank,0,0,0,0],
	[imgbrank,0,0,0,0],
]

var anchor = document.createElement("a");

imglogo.src = "logo.png? raw=true";
imgstamp_production.src = "stamp_production.png? raw=true";
imgfish.src = "fish.png? raw=true";
imgaa.src = "aa.png? raw=true";
imgclover.src = "clover.png? raw=true";
imgbrank.src = "brank.png? raw=true";

function onLoad()
{
	c = document.getElementById("logo_image").getContext("2d");
	c.clearRect(0, 0, imglogo.width, imglogo.height);
	c.drawImage(imglogo, 0, 0, imglogo.width, imglogo.height);

	c = document.getElementById("stamp_creation").getContext("2d");
	c.clearRect(0, 0, imgstamp_production.width, imgstamp_production.height);
	c.drawImage(imgstamp_production, 0, 0, imgstamp_production.width, imgstamp_production.height);

	c = document.getElementById("stamp1").getContext("2d");
	c.clearRect(0, 0, imgfish.width, imgfish.height);
	c.drawImage(imgfish, 0, 0, imgfish.width, imgfish.height);

	c = document.getElementById("stamp2").getContext("2d");
	c.clearRect(0, 0, imgaa.width, imgaa.height);
	c.drawImage(imgaa, 0, 0, imgaa.width, imgaa.height);

	c = document.getElementById("stamp3").getContext("2d");
	c.clearRect(0, 0, imgclover.width, imgclover.height);
	c.drawImage(imgclover, 0, 0, imgclover.width, imgclover.height);

	c = null;
}

function Canvas_Main()
{
	canvas_element[1][0] = imgfish;
	canvas_element[1][1] = imgfish.width;
	canvas_element[1][2] = imgfish.height;
	canvas_element[1][3] = 0;
	canvas_element[1][4] = 0;
	Canvas_Draw();
}

function Canvas_Text()
{
	canvas_element[2][0] = imgaa;
	canvas_element[2][1] = imgaa.width;
	canvas_element[2][2] = imgaa.height;
	canvas_element[2][3] = 0;
	canvas_element[2][4] = 0;
	Canvas_Draw();
}

function Canvas_Background()
{
	canvas_element[0][0] = imgclover;
	canvas_element[0][1] = imgclover.width;
	canvas_element[0][2] = imgclover.height;
	canvas_element[0][3] = 0;
	canvas_element[0][4] = 0;
	Canvas_Draw();
}


function Canvas_Draw()
{
	c = document.getElementById("stamp_canvas").getContext("2d");
	c.clearRect(0, 0, document.getElementById("stamp_canvas").width, document.getElementById("stamp_canvas").height);
	c.drawImage(canvas_element[0][0], canvas_element[0][3], canvas_element[0][4], canvas_element[0][1], canvas_element[0][2]);
	c.drawImage(canvas_element[1][0], canvas_element[1][3], canvas_element[1][4], canvas_element[1][1], canvas_element[1][2]);
	c.drawImage(canvas_element[2][0], canvas_element[2][3], canvas_element[2][4], canvas_element[2][1], canvas_element[2][2]);

	c = null;
}

function Canvas_Download()
{
	c = document.getElementById("stamp_canvas");
	alert(imgaa.crossOrigin);
	anchor.href = c.toDataURL("image/png");
	anchor.download = "canvasimage.png";
	anchor.click();
}

window.onload = onLoad;

document.getElementById("stamp1").addEventListener("click", Canvas_Main);
document.getElementById("stamp2").addEventListener("click", Canvas_Text);
document.getElementById("stamp3").addEventListener("click", Canvas_Background);
document.getElementById("stamp_creation").addEventListener("click", Canvas_Download);
