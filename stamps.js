/*stamps*/
/*20241202*/
var canvas = document.createElement("canvas");
var c = canvas.getContext("2d");
var imglogo = new Image();
var imgbrank = new Image();
var imgnowloading = new Image();
var imgmain_table = new Image();
var imgtext_table = new Image();
var imgbackground_table = new Image();
var imgsystem_table = new Image();

var canvas_element = [
	[imgbrank,0,0,0,0,0,0,1,0,0],
	[imgbrank,0,0,0,0,0,0,1,0,0],
	[imgbrank,0,0,0,0,0,0,1,0,0],
]

var table_element = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
]

var table_number = [
	[5, 0, 1, 2, 3, 4],
	[5, 0, 1, 2, 3, 4],
	[5, 0, 1, 2, 3, 4],
]

var anchor = document.createElement("a");

let canvas_select = 0;
let timer_start = 0;
let MouseX = 0;
let MouseY = 0;

let PartX = 0;
let PartY = 0;

let Now = new Date();
let table_prepare = 0;

imglogo.src = "logo.png? raw=true";
imgbrank.src = "brank.png? raw=true";
imgnowloading.src = "nowloading.png? raw=true";

imgnowloading.onload = () => {
	test();
}

imgsystem_table.onload = () => {
	arrange_system();
}
imgmain_table.onload = () => {
	arrange_main();
}
imgtext_table.onload = () => {
	arrange_text();
}
imgbackground_table.onload = () => {
	arrange_background();
}

function test()
{
	c = document.getElementById("logo_image").getContext("2d");
	c.clearRect(0, 0, imglogo.width, imglogo.height);
	c.drawImage(imglogo, 0, 0, imglogo.width, imglogo.height);

	c = document.getElementById("stamp_canvas").getContext("2d");
	c.clearRect(0, 0, imgnowloading.width, imgnowloading.height);
	c.drawImage(imgnowloading, 0, 0, imgnowloading.width, imgnowloading.height);

table_element = [
	[document.getElementById("main_table_all"), document.getElementById("main_table_all"), document.getElementById("main_table_all"), document.getElementById("main_table_all"), document.getElementById("main_table_all")],

	[document.getElementById("text_table_all"), 
document.getElementById("text_table_all"), document.getElementById("text_table_all"), document.getElementById("text_table_all"), document.getElementById("text_table_all")],

	[document.getElementById("background_table_all"), document.getElementById("background_table_all"), document.getElementById("background_table_all"), document.getElementById("background_table_all"), document.getElementById("background_table_all")],
]

	c = null;


	Table_Draw();

imgsystem_table.src = "system_table.png? raw=true";
imgsystem_table.width = 1000;
imgsystem_table.height = 1000;

imgmain_table.src = "main_table.png? raw=true";
imgmain_table.width = 1000;
imgmain_table.height = 1000;

imgtext_table.src = "text_table.png? raw=true";
imgtext_table.width = 1000;
imgtext_table.height = 1000;

imgbackground_table.src = "background_table.png? raw=true";
imgbackground_table.width = 1000;
imgbackground_table.height = 1000;


}
	

function onLoad()
{
}

function arrange_system()
{
	c = document.getElementById("system_table_all").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(imgsystem_table, 0, 0, 10000, 10000);

	c = document.getElementById("stamp_creation").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), 0, -1400, 10000, 10000);

	c = document.getElementById("stamp_tab1").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -7000, -200, 10000, 10000);

	c = document.getElementById("stamp_tab2").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -8000, -200, 10000, 10000);

	c = document.getElementById("stamp_tab3").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -9000, -200, 10000, 10000);

	c = document.getElementById("stamp_part_main_left").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -1000, 0, 10000, 10000);

	c = document.getElementById("stamp_part_main_right").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -2000, 0, 10000, 10000);

	c = document.getElementById("stamp_part_text_left").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -3000, 0, 10000, 10000);

	c = document.getElementById("stamp_part_text_right").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -4000, 0, 10000, 10000);

	c = document.getElementById("stamp_part_background_left").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -5000, 0, 10000, 10000);

	c = document.getElementById("stamp_part_background_right").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -6000, 0, 10000, 10000);

	c = document.getElementById("stamp_adjust1").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -1000, -1475, 10000, 10000);

	c = document.getElementById("stamp_adjust2").getContext("2d");
	c.clearRect(0, 0, 1000, 1000);
	c.drawImage(document.getElementById("system_table_all"), -2000, -1475, 10000, 10000);

	c = null;

	Table_Draw();

	table_prepare = table_prepare + 1;

	if (table_prepare == 4)
	{
		c = document.getElementById("stamp_canvas").getContext("2d");
		c.clearRect(0, 0, imgbrank.width, imgbrank.height);
		c.drawImage(imgbrank, 0, 0, imgbrank.width, imgbrank.height);

		c = null;
	}
}

function arrange_main()
{
	c = document.getElementById("main_table_all").getContext("2d");
	c.clearRect(0, 0, imgmain_table.width, imgmain_table.height);
	c.drawImage(imgmain_table, 0, 0, document.getElementById("main_table_all").width, document.getElementById("main_table_all").height);

	Table_Draw();

	c = null;

	table_prepare = table_prepare + 1;

	if (table_prepare == 4)
	{
		c = document.getElementById("stamp_canvas").getContext("2d");
		c.clearRect(0, 0, imgbrank.width, imgbrank.height);
		c.drawImage(imgbrank, 0, 0, imgbrank.width, imgbrank.height);

		c = null;
	}
}

function arrange_text()
{
	c = document.getElementById("text_table_all").getContext("2d");
	c.clearRect(0, 0, imgtext_table.width, imgtext_table.height);
	c.drawImage(imgtext_table, 0, 0, document.getElementById("text_table_all").width, document.getElementById("text_table_all").height);

	c = null;

	Table_Draw();

	table_prepare = table_prepare + 1;

	if (table_prepare == 4)
	{
		c = document.getElementById("stamp_canvas").getContext("2d");
		c.clearRect(0, 0, imgbrank.width, imgbrank.height);
		c.drawImage(imgbrank, 0, 0, imgbrank.width, imgbrank.height);

		c = null;
	}
}

function arrange_background()
{
	c = document.getElementById("background_table_all").getContext("2d");
	c.clearRect(0, 0, imgbackground_table.width, imgbackground_table.height);
	c.drawImage(imgbackground_table, 0, 0, document.getElementById("background_table_all").width, document.getElementById("background_table_all").height);

	c = null;

	Table_Draw();

	table_prepare = table_prepare + 1;

	if (table_prepare == 4)
	{
		c = document.getElementById("stamp_canvas").getContext("2d");
		c.clearRect(0, 0, imgbrank.width, imgbrank.height);
		c.drawImage(imgbrank, 0, 0, imgbrank.width, imgbrank.height);

		c = null;
	}
}

function Canvas_Main()
{
	switch (event.target.id)
	{
		case "stamp_part_main1":
		canvas_element[1][0] = document.getElementById("stamp_part_main1");
		canvas_element[1][1] = document.getElementById("stamp_part_main1").width;
		canvas_element[1][2] = document.getElementById("stamp_part_main1").height;
			break;
		case "stamp_part_main2":
		canvas_element[1][0] = document.getElementById("stamp_part_main2");
		canvas_element[1][1] = document.getElementById("stamp_part_main2").width;
		canvas_element[1][2] = document.getElementById("stamp_part_main2").height;
			break;
		case "stamp_part_main3":
		canvas_element[1][0] = document.getElementById("stamp_part_main3");
		canvas_element[1][1] = document.getElementById("stamp_part_main3").width;
		canvas_element[1][2] = document.getElementById("stamp_part_main3").height;
			break;
		case "stamp_part_main4":
		canvas_element[1][0] = document.getElementById("stamp_part_main4");
		canvas_element[1][1] = document.getElementById("stamp_part_main4").width;
		canvas_element[1][2] = document.getElementById("stamp_part_main4").height;
			break;
		case "stamp_part_main5":
		canvas_element[1][0] = document.getElementById("stamp_part_main5");
		canvas_element[1][1] = document.getElementById("stamp_part_main5").width;
		canvas_element[1][2] = document.getElementById("stamp_part_main5").height;
			break;
	}
	canvas_element[1][3] = 0;
	canvas_element[1][4] = 0;

	Canvas_Draw();
}

function Canvas_Text()
{
	switch (event.target.id)
	{
		case "stamp_part_text1":
		canvas_element[2][0] = document.getElementById("stamp_part_text1");
		canvas_element[2][1] = document.getElementById("stamp_part_text1").width;
		canvas_element[2][2] = document.getElementById("stamp_part_text1").height;
			break;
		case "stamp_part_text2":
		canvas_element[2][0] = document.getElementById("stamp_part_text2");
		canvas_element[2][1] = document.getElementById("stamp_part_text2").width;
		canvas_element[2][2] = document.getElementById("stamp_part_text2").height;
			break;
		case "stamp_part_text3":
		canvas_element[2][0] = document.getElementById("stamp_part_text3");
		canvas_element[2][1] = document.getElementById("stamp_part_text3").width;
		canvas_element[2][2] = document.getElementById("stamp_part_text3").height;
			break;
		case "stamp_part_text4":
		canvas_element[2][0] = document.getElementById("stamp_part_text4");
		canvas_element[2][1] = document.getElementById("stamp_part_text4").width;
		canvas_element[2][2] = document.getElementById("stamp_part_text4").height;
			break;
		case "stamp_part_text5":
		canvas_element[2][0] = document.getElementById("stamp_part_text5");
		canvas_element[2][1] = document.getElementById("stamp_part_text5").width;
		canvas_element[2][2] = document.getElementById("stamp_part_text5").height;
			break;
	}
	canvas_element[2][3] = 0;
	canvas_element[2][4] = 0;

	Canvas_Draw();
}

function Canvas_Background()
{
	switch (event.target.id)
	{
		case "stamp_part_background1":
		canvas_element[0][0] = document.getElementById("stamp_part_background1");
		canvas_element[0][1] = document.getElementById("stamp_part_background1").width;
		canvas_element[0][2] = document.getElementById("stamp_part_background1").height;
			break;
		case "stamp_part_background2":
		canvas_element[0][0] = document.getElementById("stamp_part_background2");
		canvas_element[0][1] = document.getElementById("stamp_part_background2").width;
		canvas_element[0][2] = document.getElementById("stamp_part_background2").height;
			break;
		case "stamp_part_background3":
		canvas_element[0][0] = document.getElementById("stamp_part_background3");
		canvas_element[0][1] = document.getElementById("stamp_part_background3").width;
		canvas_element[0][2] = document.getElementById("stamp_part_background3").height;
			break;
		case "stamp_part_background4":
		canvas_element[0][0] = document.getElementById("stamp_part_background4");
		canvas_element[0][1] = document.getElementById("stamp_part_background4").width;
		canvas_element[0][2] = document.getElementById("stamp_part_background4").height;
			break;
		case "stamp_part_background5":
		canvas_element[0][0] = document.getElementById("stamp_part_background5");
		canvas_element[0][1] = document.getElementById("stamp_part_background5").width;
		canvas_element[0][2] = document.getElementById("stamp_part_background5").height;
			break;

	}
	canvas_element[0][3] = 0;
	canvas_element[0][4] = 0;

	Canvas_Draw();
}


function Canvas_Draw()
{
	c = document.getElementById("stamp_canvas").getContext("2d");
	c.clearRect(0, 0, document.getElementById("stamp_canvas").width, document.getElementById("stamp_canvas").height);

	c.translate((document.getElementById("stamp_canvas").width / 2 + canvas_element[0][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), (document.getElementById("stamp_canvas").height / 2 + canvas_element[0][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));
	c.rotate(canvas_element[0][5] * Math.PI / 180);
	c.drawImage(canvas_element[0][0], -(document.getElementById("stamp_canvas").width / 2) * canvas_element[0][7], -(document.getElementById("stamp_canvas").height / 2) * canvas_element[0][7], canvas_element[0][1] * canvas_element[0][7], canvas_element[0][2] * canvas_element[0][7]);
	c.rotate(-canvas_element[0][5] * Math.PI / 180);
	c.translate( -(document.getElementById("stamp_canvas").width / 2 + canvas_element[0][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), -(document.getElementById("stamp_canvas").height / 2 + canvas_element[0][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));

	c.translate((document.getElementById("stamp_canvas").width / 2 + canvas_element[1][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), (document.getElementById("stamp_canvas").height / 2 + canvas_element[1][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));
	c.rotate(canvas_element[1][5] * Math.PI / 180);
	c.drawImage(canvas_element[1][0], -(document.getElementById("stamp_canvas").width / 2) * canvas_element[1][7], -(document.getElementById("stamp_canvas").height / 2) * canvas_element[1][7], canvas_element[1][1] * canvas_element[1][7], canvas_element[1][2] * canvas_element[1][7]);
	c.rotate(-canvas_element[1][5] * Math.PI / 180);
	c.translate( -(document.getElementById("stamp_canvas").width / 2 + canvas_element[1][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), -(document.getElementById("stamp_canvas").height / 2 + canvas_element[1][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));

	c.translate((document.getElementById("stamp_canvas").width / 2 + canvas_element[2][3] * document.getElementById("stamp_canvas").width / document.getElementById("stamp_canvas").getBoundingClientRect().width), (document.getElementById("stamp_canvas").height / 2 + canvas_element[2][4] * document.getElementById("stamp_canvas").height / document.getElementById("stamp_canvas").getBoundingClientRect().height));
	c.rotate(canvas_element[2][5] * Math.PI / 180);
	c.drawImage(canvas_element[2][0], -(document.getElementById("stamp_canvas").width / 2) * canvas_element[2][7], -(document.getElementById("stamp_canvas").height / 2) * canvas_element[2][7], canvas_element[2][1] * canvas_element[2][7], canvas_element[2][2] * canvas_element[2][7]);
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
			c = document.getElementById("stamp_adjust1").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -1000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -4000 + canvas_element[1][8], -1475, 10000, 10000);
			c = document.getElementById("stamp_adjust2").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -2000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -6000 + canvas_element[1][9], -1475, 10000, 10000);


			c = null;

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
			c = document.getElementById("stamp_adjust1").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -1000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -4000 + canvas_element[2][8], -1475, 10000, 10000);
			c = document.getElementById("stamp_adjust2").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -2000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -6000 + canvas_element[2][9], -1475, 10000, 10000);


			c = null;

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
			c = document.getElementById("stamp_adjust1").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -1000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -4000 + canvas_element[0][8], -1475, 10000, 10000);
			c = document.getElementById("stamp_adjust2").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -2000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -6000 + canvas_element[0][9], -1475, 10000, 10000);


			c = null;

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

function Canvas_Adjust_Rotate()
{
	switch (canvas_select)
	{
		case 1:
			canvas_element[1][6] = canvas_element[1][5];	
			canvas_element[1][5] = (2 * 360 * (event.pageX - document.getElementById("stamp_adjust1").getBoundingClientRect().left) / (document.getElementById("stamp_adjust1").getBoundingClientRect().right - document.getElementById("stamp_adjust1").getBoundingClientRect().left) - (2 * 180));
			canvas_element[1][8] = (event.clientX - document.getElementById("stamp_adjust1").getBoundingClientRect().left - (document.getElementById("stamp_adjust1").getBoundingClientRect().width / 2)) * document.getElementById("stamp_adjust1").width / document.getElementById("stamp_adjust1").getBoundingClientRect().width;
			c = document.getElementById("stamp_adjust1").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -1000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -4000 + canvas_element[1][8], -1475, 10000, 10000);

			c = null;

			break;
		case 2:
			canvas_element[2][6] = canvas_element[2][5];	
			canvas_element[2][5] = (2 * 360 * (event.pageX - document.getElementById("stamp_adjust1").getBoundingClientRect().left) / (document.getElementById("stamp_adjust1").getBoundingClientRect().right - document.getElementById("stamp_adjust1").getBoundingClientRect().left) - (2 * 180));
			canvas_element[2][8] = (event.clientX - document.getElementById("stamp_adjust1").getBoundingClientRect().left - (document.getElementById("stamp_adjust1").getBoundingClientRect().width / 2)) * document.getElementById("stamp_adjust1").width / document.getElementById("stamp_adjust1").getBoundingClientRect().width;
			c = document.getElementById("stamp_adjust1").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -1000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -4000 + canvas_element[2][8], -1475, 10000, 10000);

			c = null;

			break;
		case 3:
			canvas_element[0][6] = canvas_element[0][5];	
			canvas_element[0][5] = (2 * 360 * (event.pageX - document.getElementById("stamp_adjust1").getBoundingClientRect().left) / (document.getElementById("stamp_adjust1").getBoundingClientRect().right - document.getElementById("stamp_adjust1").getBoundingClientRect().left) - (2 * 180));
			canvas_element[0][8] = (event.clientX - document.getElementById("stamp_adjust1").getBoundingClientRect().left - (document.getElementById("stamp_adjust1").getBoundingClientRect().width / 2)) * document.getElementById("stamp_adjust1").width / document.getElementById("stamp_adjust1").getBoundingClientRect().width;
			c = document.getElementById("stamp_adjust1").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -1000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -4000 + canvas_element[0][8], -1475, 10000, 10000);

			c = null;

			break;
	}
	Canvas_Draw();
}

function Canvas_Adjust_Scale_Mousedown()
{
	document.getElementById("stamp_adjust2").addEventListener("mousemove", Canvas_Adjust_Scale);
	document.addEventListener("mouseup", Canvas_Adjust_Scale_Mouseup);
	Canvas_Adjust_Scale();
}

function Canvas_Adjust_Scale_Mouseup()
{
	document.getElementById("stamp_adjust2").removeEventListener("mousemove", Canvas_Adjust_Scale);
	document.removeEventListener("mouseup", Canvas_Adjust_Scale_Mouseup);
}

function Canvas_Adjust_Scale()
{
	switch (canvas_select)
	{
		case 1:
			canvas_element[1][7] = (event.clientX - document.getElementById("stamp_adjust2").getBoundingClientRect().left) * 2 / document.getElementById("stamp_adjust2").getBoundingClientRect().width;
			canvas_element[1][9] = (event.clientX - document.getElementById("stamp_adjust1").getBoundingClientRect().left - (document.getElementById("stamp_adjust1").getBoundingClientRect().width / 2)) * document.getElementById("stamp_adjust1").width / document.getElementById("stamp_adjust1").getBoundingClientRect().width;
			c = document.getElementById("stamp_adjust2").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -2000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -6000 + canvas_element[1][9], -1475, 10000, 10000);

			c = null;

			break;
		case 2:
			canvas_element[2][7] = (event.clientX - document.getElementById("stamp_adjust2").getBoundingClientRect().left) * 2 / document.getElementById("stamp_adjust2").getBoundingClientRect().width;
			canvas_element[2][9] = (event.clientX - document.getElementById("stamp_adjust1").getBoundingClientRect().left - (document.getElementById("stamp_adjust1").getBoundingClientRect().width / 2)) * document.getElementById("stamp_adjust1").width / document.getElementById("stamp_adjust1").getBoundingClientRect().width;
			c = document.getElementById("stamp_adjust2").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -2000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -6000 + canvas_element[2][9], -1475, 10000, 10000);

			c = null;

			break;
		case 3:
			canvas_element[0][7] = (event.clientX - document.getElementById("stamp_adjust2").getBoundingClientRect().left) * 2 / document.getElementById("stamp_adjust2").getBoundingClientRect().width;
			canvas_element[0][9] = (event.clientX - document.getElementById("stamp_adjust1").getBoundingClientRect().left - (document.getElementById("stamp_adjust1").getBoundingClientRect().width / 2)) * document.getElementById("stamp_adjust1").width / document.getElementById("stamp_adjust1").getBoundingClientRect().width;
			c = document.getElementById("stamp_adjust2").getContext("2d");
			c.clearRect(0, 0, 1000, 1000);
			c.drawImage(document.getElementById("system_table_all"), -2000, -1475, 10000, 10000);
			c.drawImage(document.getElementById("system_table_all"), -6000 + canvas_element[0][9], -1475, 10000, 10000);

			c = null;

			break;
	}
	Canvas_Draw();
}

function Table_Draw()
{


	c = document.getElementById("stamp_part_main1").getContext("2d");
	c.clearRect(0, 0, table_element[0][table_number[0][1]].width, table_element[0][table_number[0][1]].height);
	c.drawImage(table_element[0][table_number[0][1]], 1000 * ((table_number[0][1] + 1) % 10), 1000 * Math.floor((table_number[0][1] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_main2").getContext("2d");
	c.clearRect(0, 0, table_element[0][table_number[0][2]].width, table_element[0][table_number[0][2]].height);
	c.drawImage(table_element[0][table_number[0][2]], 1000 * ((table_number[0][2] + 1) % 10), 1000 * Math.floor((table_number[0][2] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_main3").getContext("2d");
	c.clearRect(0, 0, table_element[0][table_number[0][3]].width, table_element[0][table_number[0][3]].height);
	c.drawImage(table_element[0][table_number[0][3]], 1000 * ((table_number[0][3] + 1) % 10), 1000 * Math.floor((table_number[0][3] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_main4").getContext("2d");
	c.clearRect(0, 0, table_element[0][table_number[0][4]].width, table_element[0][table_number[0][4]].height);
	c.drawImage(table_element[0][table_number[0][4]], 1000 * ((table_number[0][4] + 1) % 10), 1000 * Math.floor((table_number[0][4] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_main5").getContext("2d");
	c.clearRect(0, 0, table_element[0][table_number[0][5]].width, table_element[0][table_number[0][5]].height);
	c.drawImage(table_element[0][table_number[0][5]], 1000 * ((table_number[0][5] + 1) % 10), 1000 * Math.floor((table_number[0][5] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_text1").getContext("2d");
	c.clearRect(0, 0, table_element[1][table_number[1][1]].width, table_element[1][table_number[1][1]].height);
	c.drawImage(table_element[1][table_number[1][1]], 1000 * ((table_number[1][1] + 1) % 10), 1000 * Math.floor((table_number[1][1] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_text2").getContext("2d");
	c.clearRect(0, 0, table_element[1][table_number[1][2]].width, table_element[1][table_number[1][2]].height);
	c.drawImage(table_element[1][table_number[1][2]], 1000 * ((table_number[1][2] + 1) % 10), 1000 * Math.floor((table_number[1][2] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_text3").getContext("2d");
	c.clearRect(0, 0, table_element[1][table_number[1][3]].width, table_element[1][table_number[1][3]].height);
	c.drawImage(table_element[1][table_number[1][3]], 1000 * ((table_number[1][3] + 1) % 10), 1000 * Math.floor((table_number[1][3] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_text4").getContext("2d");
	c.clearRect(0, 0, table_element[1][table_number[1][4]].width, table_element[1][table_number[1][4]].height);
	c.drawImage(table_element[1][table_number[1][4]], 1000 * ((table_number[1][4] + 1) % 10), 1000 * Math.floor((table_number[1][4] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_text5").getContext("2d");
	c.clearRect(0, 0, table_element[1][table_number[1][5]].width, table_element[1][table_number[1][5]].height);
	c.drawImage(table_element[1][table_number[1][5]], 1000 * ((table_number[1][5] + 1) % 10), 1000 * Math.floor((table_number[1][5] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_background1").getContext("2d");
	c.clearRect(0, 0, table_element[2][table_number[2][1]].width, table_element[2][table_number[2][1]].height);
	c.drawImage(table_element[2][table_number[2][1]], 1000 * ((table_number[2][1] + 1) % 10), 1000 * Math.floor((table_number[2][1] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_background2").getContext("2d");
	c.clearRect(0, 0, table_element[2][table_number[2][2]].width, table_element[2][table_number[2][2]].height);
	c.drawImage(table_element[2][table_number[2][2]], 1000 * ((table_number[2][2] + 1) % 10), 1000 * Math.floor((table_number[2][2] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_background3").getContext("2d");
	c.clearRect(0, 0, table_element[2][table_number[2][3]].width, table_element[2][table_number[2][3]].height);
	c.drawImage(table_element[2][table_number[2][3]], 1000 * ((table_number[2][3] + 1) % 10), 1000 * Math.floor((table_number[2][3] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_background4").getContext("2d");
	c.clearRect(0, 0, table_element[2][table_number[2][4]].width, table_element[2][table_number[2][4]].height);
	c.drawImage(table_element[2][table_number[2][4]], 1000 * ((table_number[2][4] + 1) % 10), 1000 * Math.floor((table_number[2][4] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = document.getElementById("stamp_part_background5").getContext("2d");
	c.clearRect(0, 0, table_element[2][table_number[2][5]].width, table_element[2][table_number[2][5]].height);
	c.drawImage(table_element[2][table_number[2][5]], 1000 * ((table_number[2][5] + 1) % 10), 1000 * Math.floor((table_number[2][5] + 1) / 10), 1000, 1000, 0, 0, 1000, 1000);

	c = null;
}

function Table_Main()
{
	switch (event.target.id)
	{
		case "stamp_part_main_right":
			if (table_number[0][1] > 0)
			{
				table_number[0][1] = parseInt(table_number[0][1]) - 1;
			}
			else
			{
				table_number[0][1] = parseInt(table_number[0][0]) - 1;
			}
			break;
		case "stamp_part_main_left":
			if (table_number[0][1] < table_number[0][0] - 1)
			{
				table_number[0][1] = parseInt(table_number[0][1]) + 1;
			}
			else
			{
				table_number[0][1] = 0;
			}
			break;
		case "stamp_part_text_right":
			if (table_number[1][1] > 0)
			{
				table_number[1][1] = parseInt(table_number[1][1]) - 1;
			}
			else
			{
				table_number[1][1] = parseInt(table_number[1][0]) - 1;
			}
			break;
		case "stamp_part_text_left":
			if (table_number[1][1] < table_number[1][0] - 1)
			{
				table_number[1][1] = parseInt(table_number[1][1]) + 1;
			}
			else
			{
				table_number[1][1] = 0;
			}
			break;
		case "stamp_part_background_right":
			if (table_number[2][1] > 0)
			{
				table_number[2][1] = parseInt(table_number[2][1]) - 1;
			}
			else
			{
				table_number[2][1] = parseInt(table_number[2][0]) - 1;
			}
			break;
		case "stamp_part_background_left":
			if (table_number[2][1] < table_number[2][0] - 1)
			{
				table_number[2][1] = parseInt(table_number[2][1]) + 1;
			}
			else
			{
				table_number[2][1] = 0;
			}
			break;
	}


	table_number[0][2] = (table_number[0][1] + 1) % table_number[0][0];
	table_number[0][3] = (table_number[0][1] + 2) % table_number[0][0];
	table_number[0][4] = (table_number[0][1] + 3) % table_number[0][0];
	table_number[0][5] = (table_number[0][1] + 4) % table_number[0][0];
	table_number[1][2] = (table_number[1][1] + 1) % table_number[1][0];
	table_number[1][3] = (table_number[1][1] + 2) % table_number[1][0];
	table_number[1][4] = (table_number[1][1] + 3) % table_number[1][0];
	table_number[1][5] = (table_number[1][1] + 4) % table_number[1][0];
	table_number[2][2] = (table_number[2][1] + 1) % table_number[2][0];
	table_number[2][3] = (table_number[2][1] + 2) % table_number[2][0];
	table_number[2][4] = (table_number[2][1] + 3) % table_number[2][0];
	table_number[2][5] = (table_number[2][1] + 4) % table_number[2][0];

	Table_Draw();

}

function Canvas_Download()
{
	c = document.getElementById("stamp_canvas");
	anchor.href = c.toDataURL("image/png");
	anchor.download = Now.getFullYear() + (Now.getMonth() + 1) + (Now.getDate() + 1) + Now.getHours() + Now.getMinutes() + Now.getSeconds() + ".png";
	anchor.click();
}

window.onload = onLoad;

document.getElementById("stamp_part_main_left").addEventListener("click", Table_Main);
document.getElementById("stamp_part_main1").addEventListener("click", Canvas_Main);
document.getElementById("stamp_part_main2").addEventListener("click", Canvas_Main);
document.getElementById("stamp_part_main3").addEventListener("click", Canvas_Main);
document.getElementById("stamp_part_main4").addEventListener("click", Canvas_Main);
document.getElementById("stamp_part_main5").addEventListener("click", Canvas_Main);
document.getElementById("stamp_part_main_right").addEventListener("click", Table_Main);
document.getElementById("stamp_part_text_left").addEventListener("click", Table_Main);
document.getElementById("stamp_part_text1").addEventListener("click", Canvas_Text);
document.getElementById("stamp_part_text2").addEventListener("click", Canvas_Text);
document.getElementById("stamp_part_text3").addEventListener("click", Canvas_Text);
document.getElementById("stamp_part_text4").addEventListener("click", Canvas_Text);
document.getElementById("stamp_part_text5").addEventListener("click", Canvas_Text);
document.getElementById("stamp_part_text_right").addEventListener("click", Table_Main);
document.getElementById("stamp_part_background_left").addEventListener("click", Table_Main);
document.getElementById("stamp_part_background1").addEventListener("click", Canvas_Background);
document.getElementById("stamp_part_background2").addEventListener("click", Canvas_Background);
document.getElementById("stamp_part_background3").addEventListener("click", Canvas_Background);
document.getElementById("stamp_part_background4").addEventListener("click", Canvas_Background);
document.getElementById("stamp_part_background5").addEventListener("click", Canvas_Background);
document.getElementById("stamp_part_background_right").addEventListener("click", Table_Main);
document.getElementById("stamp_tab1").addEventListener("click", Canvas_Select);
document.getElementById("stamp_tab2").addEventListener("click", Canvas_Select);
document.getElementById("stamp_tab3").addEventListener("click", Canvas_Select);
document.getElementById("stamp_adjust1").addEventListener("mousedown", Canvas_Adjust_Rotate_Mousedown);	
document.getElementById("stamp_adjust2").addEventListener("mousedown", Canvas_Adjust_Scale_Mousedown);
document.getElementById("stamp_canvas").addEventListener("mousedown", Canvas_Mousedown);



document.getElementById("stamp_creation").addEventListener("click", Canvas_Download);

