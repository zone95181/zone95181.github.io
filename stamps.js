/*stamps*/
/*20241128*/
var canvas = document.createElement("canvas");
var c = canvas.getContext("2d");
var imglogo = new Image();
var imgstamp_production = new Image();
var imgtab_main = new Image();
var imgtab_text = new Image();
var imgtab_background = new Image();
var imgfish = new Image();
var imgpig = new Image();
var imgfox = new Image();
var imgcaterpillar = new Image();
var imggrasshopper = new Image();
var imgaa = new Image();
var imgii = new Image();
var imguu = new Image();
var imgee = new Image();
var imgoo = new Image();
var imgclover = new Image();
var imgarrow = new Image();
var imgspiral = new Image();
var imgcloud = new Image();
var imgwood = new Image();
var imgbrank = new Image();
var target_image = new Image();

var canvas_element = [
	[imgbrank,0,0,0,0,0,0],
	[imgbrank,0,0,0,0,0,0],
	[imgbrank,0,0,0,0,0,0],
]

var anchor = document.createElement("a");

let canvas_select = 0;
let timer_start = 0;
let MouseX = 0;
let MouseY = 0;

imglogo.src = "logo.png? raw=true";
imgstamp_production.src = "stamp_production.png? raw=true";
imgtab_main.src = "tab_main.png? raw=true";
imgtab_text.src = "tab_text.png? raw=true";
imgtab_background.src = "tab_background.png? raw=true";
imgfish.src = "fish.png? raw=true";
imgpig.src = "pig.png? raw=true";
imgfox.src = "fox.png? raw=true";
imgcaterpillar.src = "caterpillar.png? raw=true";
imggrasshopper.src = "grasshopper.png? raw=true";
imgaa.src = "aa.png? raw=true";
imgii.src = "ii.png? raw=true";
imguu.src = "uu.png? raw=true";
imgee.src = "ee.png? raw=true";
imgoo.src = "oo.png? raw=true";
imgclover.src = "clover.png? raw=true";
imgarrow.src = "arrow.png? raw=true";
imgspiral.src = "spiral.png? raw=true";
imgcloud.src = "cloud.png? raw=true";
imgwood.src = "wood.png? raw=true";
imgbrank.src = "brank.png? raw=true";

function onLoad()
{
	c = document.getElementById("logo_image").getContext("2d");
	c.clearRect(0, 0, imglogo.width, imglogo.height);
	c.drawImage(imglogo, 0, 0, imglogo.width, imglogo.height);

	c = document.getElementById("stamp_creation").getContext("2d");
	c.clearRect(0, 0, imgstamp_production.width, imgstamp_production.height);
	c.drawImage(imgstamp_production, 0, 0, imgstamp_production.width, imgstamp_production.height);

	c = document.getElementById("stamp_tab1").getContext("2d");
	c.clearRect(0, 0, imgtab_main.width, imgtab_main.height);
	c.drawImage(imgtab_main, 0, 0, imgtab_main.width, imgtab_main.height);

	c = document.getElementById("stamp_tab2").getContext("2d");
	c.clearRect(0, 0, imgtab_text.width, imgtab_text.height);
	c.drawImage(imgtab_text, 0, 0, imgtab_text.width, imgtab_text.height);

	c = document.getElementById("stamp_tab3").getContext("2d");
	c.clearRect(0, 0, imgtab_background.width, imgtab_background.height);
	c.drawImage(imgtab_background, 0, 0, imgtab_background.width, imgtab_background.height);

	c = document.getElementById("stamp_part_main1").getContext("2d");
	c.clearRect(0, 0, imgfish.width, imgfish.height);
	c.drawImage(imgfish, 0, 0, imgfish.width, imgfish.height);

	c = document.getElementById("stamp_part_main2").getContext("2d");
	c.clearRect(0, 0, imgpig.width, imgpig.height);
	c.drawImage(imgpig, 0, 0, imgpig.width, imgpig.height);

	c = document.getElementById("stamp_part_main3").getContext("2d");
	c.clearRect(0, 0, imgfox.width, imgfox.height);
	c.drawImage(imgfox, 0, 0, imgfox.width, imgfox.height);

	c = document.getElementById("stamp_part_main4").getContext("2d");
	c.clearRect(0, 0, imgcaterpillar.width, imgcaterpillar.height);
	c.drawImage(imgcaterpillar, 0, 0, imgcaterpillar.width, imgcaterpillar.height);

	c = document.getElementById("stamp_part_main5").getContext("2d");
	c.clearRect(0, 0, imggrasshopper.width, imggrasshopper.height);
	c.drawImage(imggrasshopper, 0, 0, imggrasshopper.width, imggrasshopper.height);

	c = document.getElementById("stamp_part_text1").getContext("2d");
	c.clearRect(0, 0, imgaa.width, imgaa.height);
	c.drawImage(imgaa, 0, 0, imgaa.width, imgaa.height);

	c = document.getElementById("stamp_part_text2").getContext("2d");
	c.clearRect(0, 0, imgii.width, imgii.height);
	c.drawImage(imgii, 0, 0, imgii.width, imgii.height);

	c = document.getElementById("stamp_part_text3").getContext("2d");
	c.clearRect(0, 0, imguu.width, imguu.height);
	c.drawImage(imguu, 0, 0, imguu.width, imguu.height);

	c = document.getElementById("stamp_part_text4").getContext("2d");
	c.clearRect(0, 0, imgee.width, imgee.height);
	c.drawImage(imgee, 0, 0, imgee.width, imgee.height);

	c = document.getElementById("stamp_part_text5").getContext("2d");
	c.clearRect(0, 0, imgoo.width, imgoo.height);
	c.drawImage(imgoo, 0, 0, imgoo.width, imgoo.height);

	c = document.getElementById("stamp_part_background1").getContext("2d");
	c.clearRect(0, 0, imgclover.width, imgclover.height);
	c.drawImage(imgclover, 0, 0, imgclover.width, imgclover.height);

	c = document.getElementById("stamp_part_background2").getContext("2d");
	c.clearRect(0, 0, imgarrow.width, imgarrow.height);
	c.drawImage(imgarrow, 0, 0, imgarrow.width, imgarrow.height);

	c = document.getElementById("stamp_part_background3").getContext("2d");
	c.clearRect(0, 0, imgspiral.width, imgspiral.height);
	c.drawImage(imgspiral, 0, 0, imgspiral.width, imgspiral.height);

	c = document.getElementById("stamp_part_background4").getContext("2d");
	c.clearRect(0, 0, imgcloud.width, imgcloud.height);
	c.drawImage(imgcloud, 0, 0, imgcloud.width, imgcloud.height);

	c = document.getElementById("stamp_part_background5").getContext("2d");
	c.clearRect(0, 0, imgwood.width, imgwood.height);
	c.drawImage(imgwood, 0, 0, imgwood.width, imgwood.height);

	c = null;
}

function Canvas_Main()
{
	switch (event.target.id)
	{
		case "stamp_part_main1":
		canvas_element[1][0] = imgfish;
		canvas_element[1][1] = imgfish.width;
		canvas_element[1][2] = imgfish.height;
			break;
		case "stamp_part_main2":
		canvas_element[1][0] = imgpig;
		canvas_element[1][1] = imgpig.width;
		canvas_element[1][2] = imgpig.height;
			break;
		case "stamp_part_main3":
		canvas_element[1][0] = imgfox;
		canvas_element[1][1] = imgfox.width;
		canvas_element[1][2] = imgfox.height;
			break;
		case "stamp_part_main4":
		canvas_element[1][0] = imgcaterpillar;
		canvas_element[1][1] = imgcaterpillar.width;
		canvas_element[1][2] = imgcaterpillar.height;
			break;
		case "stamp_part_main5":
		canvas_element[1][0] = imggrasshopper;
		canvas_element[1][1] = imggrasshopper.width;
		canvas_element[1][2] = imggrasshopper.height;
			break;
	}
	canvas_element[1][3] = 0;
	canvas_element[1][4] = 0;
	canvas_element[1][5] = 0;
	canvas_element[1][6] = 0;
	Canvas_Draw();
}

function Canvas_Text()
{
	switch (event.target.id)
	{
		case "stamp_part_text1":
		canvas_element[2][0] = imgaa;
		canvas_element[2][1] = imgaa.width;
		canvas_element[2][2] = imgaa.height;
			break;
		case "stamp_part_text2":
		canvas_element[2][0] = imgii;
		canvas_element[2][1] = imgii.width;
		canvas_element[2][2] = imgii.height;
			break;
		case "stamp_part_text3":
		canvas_element[2][0] = imguu;
		canvas_element[2][1] = imguu.width;
		canvas_element[2][2] = imguu.height;
			break;
		case "stamp_part_text4":
		canvas_element[2][0] = imgee;
		canvas_element[2][1] = imgee.width;
		canvas_element[2][2] = imgee.height;
			break;
		case "stamp_part_text5":
		canvas_element[2][0] = imgoo;
		canvas_element[2][1] = imgoo.width;
		canvas_element[2][2] = imgoo.height;
			break;
	}
	canvas_element[2][3] = 0;
	canvas_element[2][4] = 0;
	canvas_element[2][5] = 0;
	canvas_element[2][6] = 0;
	Canvas_Draw();
}

function Canvas_Background()
{
	switch (event.target.id)
	{
		case "stamp_part_background1":
		canvas_element[0][0] = imgclover;
		canvas_element[0][1] = imgclover.width;
		canvas_element[0][2] = imgclover.height;
			break;
		case "stamp_part_background2":
		canvas_element[0][0] = imgarrow;
		canvas_element[0][1] = imgarrow.width;
		canvas_element[0][2] = imgarrow.height;
			break;
		case "stamp_part_background3":
		canvas_element[0][0] = imgspiral;
		canvas_element[0][1] = imgspiral.width;
		canvas_element[0][2] = imgspiral.height;
			break;
		case "stamp_part_background4":
		canvas_element[0][0] = imgcloud;
		canvas_element[0][1] = imgcloud.width;
		canvas_element[0][2] = imgcloud.height;
			break;
		case "stamp_part_background5":
		canvas_element[0][0] = imgwood;
		canvas_element[0][1] = imgwood.width;
		canvas_element[0][2] = imgwood.height;
			break;
	}
	canvas_element[0][3] = 0;
	canvas_element[0][4] = 0;
	canvas_element[0][5] = 0;
	canvas_element[0][6] = 0;
	Canvas_Draw();
}


function Canvas_Draw()
{
	c = document.getElementById("stamp_canvas").getContext("2d");
	c.clearRect(0, 0, document.getElementById("stamp_canvas").width, document.getElementById("stamp_canvas").height);

	c.translate((document.getElementById("stamp_canvas").width / 2 + canvas_element[0][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), (document.getElementById("stamp_canvas").height / 2 + canvas_element[0][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));
	c.rotate(canvas_element[0][5] * Math.PI / 180);
	c.drawImage(canvas_element[0][0], -(document.getElementById("stamp_canvas").width / 2), -(document.getElementById("stamp_canvas").height / 2), canvas_element[0][1], canvas_element[0][2]);
	c.rotate(-canvas_element[0][5] * Math.PI / 180);
	c.translate( -(document.getElementById("stamp_canvas").width / 2 + canvas_element[0][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), -(document.getElementById("stamp_canvas").height / 2 + canvas_element[0][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));





	c.translate((document.getElementById("stamp_canvas").width / 2 + canvas_element[1][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), (document.getElementById("stamp_canvas").height / 2 + canvas_element[1][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));
	c.rotate(canvas_element[1][5] * Math.PI / 180);
	c.drawImage(canvas_element[1][0], -(document.getElementById("stamp_canvas").width / 2), -(document.getElementById("stamp_canvas").height / 2), canvas_element[1][1], canvas_element[1][2]);
	c.rotate(-canvas_element[1][5] * Math.PI / 180);
	c.translate( -(document.getElementById("stamp_canvas").width / 2 + canvas_element[1][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), -(document.getElementById("stamp_canvas").height / 2 + canvas_element[1][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));








	c.translate((document.getElementById("stamp_canvas").width / 2 + canvas_element[2][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), (document.getElementById("stamp_canvas").height / 2 + canvas_element[2][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));
	c.rotate(canvas_element[2][5] * Math.PI / 180);
	c.drawImage(canvas_element[2][0], -(document.getElementById("stamp_canvas").width / 2), -(document.getElementById("stamp_canvas").height / 2), canvas_element[2][1], canvas_element[2][2]);
	c.rotate(-canvas_element[2][5] * Math.PI / 180);
	c.translate( -(document.getElementById("stamp_canvas").width / 2 + canvas_element[2][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), -(document.getElementById("stamp_canvas").height / 2 + canvas_element[2][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));


	c = null;
}

function Canvas_Select()
{
	switch (event.target.id)
	{
		case "stamp_tab1":
			if (canvas_select == 1)
			{
				canvas_select = 0;
				document.getElementById("stamp_canvas_frame").style.border = "10px double rgba(0, 0, 0, 50%)";
			}
			else
			{
				canvas_select = 1;
				document.getElementById("stamp_canvas_frame").style.border = "10px double rgba(255, 0, 0, 50%)";
			}
			break;

		case "stamp_tab2":
			if (canvas_select == 2)
			{
				canvas_select = 0;
				document.getElementById("stamp_canvas_frame").style.border = "10px double rgba(0, 0, 0, 50%)";
			}
			else
			{
				canvas_select = 2;
				document.getElementById("stamp_canvas_frame").style.border = "10px double rgba(0, 255, 0, 50%)";
			}
			break;
		case "stamp_tab3":
			if (canvas_select == 3)
			{
				canvas_select = 0;
				document.getElementById("stamp_canvas_frame").style.border = "10px double rgba(0, 0, 0, 50%)";
			}
			else
			{
				canvas_select = 3;
				document.getElementById("stamp_canvas_frame").style.border = "10px double rgba(0, 0, 255, 50%)";
			}
			break;
	}
}

function Canvas_Mousedown()
{
	document.addEventListener("mousemove", Canvas_Layout);
	document.addEventListener("mouseup", Canvas_Mouseup);

	switch (canvas_select)
	{
		case 1:
			MouseX = event.clientX - document.getElementById("stamp_canvas").clientLeft - canvas_element[1][3];
			MouseY = event.clientY - document.getElementById("stamp_canvas").clientTop - canvas_element[1][4];
			break;
		case 2:
			MouseX = event.clientX - document.getElementById("stamp_canvas").clientLeft - canvas_element[2][3];
			MouseY = event.clientY - document.getElementById("stamp_canvas").clientTop - canvas_element[2][4];
			break;
		case 3:
			MouseX = event.clientX - document.getElementById("stamp_canvas").clientLeft - canvas_element[0][3];
			MouseY = event.clientY - document.getElementById("stamp_canvas").clientTop - canvas_element[0][4];
			break;
	}
}

function Canvas_Mouseup()
{
	document.removeEventListener("mousemove", Canvas_Layout);
	document.removeEventListener("mouseup", Canvas_Mouseup);
}

function Canvas_Layout(event)
{
	switch (canvas_select)
	{
		case 1:
			canvas_element[1][3] = event.clientX - document.getElementById("stamp_canvas").clientLeft - MouseX;
			canvas_element[1][4] = event.clientY - document.getElementById("stamp_canvas").clientTop - MouseY;
	canvas_element[1][3] = event.clientX - document.getElementById("stamp_canvas").clientLeft - MouseX;
	canvas_element[1][4] = event.clientY - document.getElementById("stamp_canvas").clientTop - MouseY;
			break;
		case 2:
			canvas_element[2][3] = event.clientX - document.getElementById("stamp_canvas").clientLeft - MouseX;
			canvas_element[2][4] = event.clientY - document.getElementById("stamp_canvas").clientTop - MouseY;
	canvas_element[2][3] = event.clientX - document.getElementById("stamp_canvas").clientLeft - MouseX;
	canvas_element[2][4] = event.clientY - document.getElementById("stamp_canvas").clientTop - MouseY;
			break;
		case 3:
			canvas_element[0][3] = event.clientX - document.getElementById("stamp_canvas").clientLeft - MouseX;
			canvas_element[0][4] = event.clientY - document.getElementById("stamp_canvas").clientTop - MouseY;
	canvas_element[0][3] = event.clientX - document.getElementById("stamp_canvas").clientLeft - MouseX;
	canvas_element[0][4] = event.clientY - document.getElementById("stamp_canvas").clientTop - MouseY;
			break;
	}
	Canvas_Draw();
document.getElementById("text_test").textContent = canvas_element[1][3] + " " + canvas_element[1][4];

document.getElementById("text_test2").textContent = (document.getElementById("stamp_canvas").width / 2 + canvas_element[1][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width) + " " + (document.getElementById("stamp_canvas").height / 2 + canvas_element[1][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height);

}

function Canvas_Download()
{
	c = document.getElementById("stamp_canvas");
	anchor.href = c.toDataURL("image/png");
	anchor.download = "canvasimage.png";
	anchor.click();
}

function Canvas_Adjust_Rotate()
{
	switch (canvas_select)
	{
		case 1:
			canvas_element[1][6] = canvas_element[1][5];	
			canvas_element[1][5] = (2 * 360 * (event.pageX - document.getElementById("stamp_adjust1").getBoundingClientRect().left) / (document.getElementById("stamp_adjust1").getBoundingClientRect().right - document.getElementById("stamp_adjust1").getBoundingClientRect().left) - (2 * 180));
			break;
		case 2:
			canvas_element[2][6] = canvas_element[2][5];	
			canvas_element[2][5] = (2 * 360 * (event.pageX - document.getElementById("stamp_adjust1").getBoundingClientRect().left) / (document.getElementById("stamp_adjust1").getBoundingClientRect().right - document.getElementById("stamp_adjust1").getBoundingClientRect().left) - (2 * 180));
			break;
		case 3:
			canvas_element[0][6] = canvas_element[0][5];	
			canvas_element[0][5] = (2 * 360 * (event.pageX - document.getElementById("stamp_adjust1").getBoundingClientRect().left) / (document.getElementById("stamp_adjust1").getBoundingClientRect().right - document.getElementById("stamp_adjust1").getBoundingClientRect().left) - (2 * 180));
			break;
	}
	Canvas_Draw();
}

function Canvas_Adjust_Scale()
{
	
}

function Canvas_Adjust_Rotate_Mousedown()
{
	document.getElementById("stamp_adjust1").addEventListener("mousemove", Canvas_Adjust_Rotate);
	document.addEventListener("mouseup", Canvas_Adjust_Rotate_Mouseup);
	Canvas_Adjust_Rotate();
}

function Canvas_Adjust_Rotate_Mouseup()
{
	document.getElementById("stamp_adjust1").removeEventListener("mousemove", Canvas_Adjust_Rotate);
	document.removeEventListener("mouseup", Canvas_Adjust_Rotate_Mouseup);
}

function Canvas_Adjust_Scale_Mousedown()
{
}

function Canvas_Adjust_Scale_Mouseup()
{
}

window.onload = onLoad;

document.getElementById("stamp_part_main1").addEventListener("click", Canvas_Main);
document.getElementById("stamp_part_main2").addEventListener("click", Canvas_Main);
document.getElementById("stamp_part_main3").addEventListener("click", Canvas_Main);
document.getElementById("stamp_part_main4").addEventListener("click", Canvas_Main);
document.getElementById("stamp_part_main5").addEventListener("click", Canvas_Main);
document.getElementById("stamp_part_text1").addEventListener("click", Canvas_Text);
document.getElementById("stamp_part_text2").addEventListener("click", Canvas_Text);
document.getElementById("stamp_part_text3").addEventListener("click", Canvas_Text);
document.getElementById("stamp_part_text4").addEventListener("click", Canvas_Text);
document.getElementById("stamp_part_text5").addEventListener("click", Canvas_Text);
document.getElementById("stamp_part_background1").addEventListener("click", Canvas_Background);
document.getElementById("stamp_part_background2").addEventListener("click", Canvas_Background);
document.getElementById("stamp_part_background3").addEventListener("click", Canvas_Background);
document.getElementById("stamp_part_background4").addEventListener("click", Canvas_Background);
document.getElementById("stamp_part_background5").addEventListener("click", Canvas_Background);
document.getElementById("stamp_tab1").addEventListener("click", Canvas_Select);
document.getElementById("stamp_tab2").addEventListener("click", Canvas_Select);
document.getElementById("stamp_tab3").addEventListener("click", Canvas_Select);
document.getElementById("stamp_adjust1").addEventListener("mousedown", Canvas_Adjust_Rotate_Mousedown);	
document.getElementById("stamp_adjust2").addEventListener("click", Canvas_Adjust_Scale_Mousedown);
document.getElementById("stamp_adjust2").addEventListener("click", Canvas_Adjust_Scale);
document.getElementById("stamp_canvas").addEventListener("mousedown", Canvas_Mousedown);

document.getElementById("stamp_creation").addEventListener("click", Canvas_Download);

