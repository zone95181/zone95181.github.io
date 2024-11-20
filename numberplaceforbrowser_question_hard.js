/*numberplaceforbrowser_question_hard*/
/*20241120*/
const image_array = 
[
	[document.getElementById("table_test01_01_image"), document.getElementById("table_test01_02_image"), document.getElementById("table_test01_03_image"), document.getElementById("table_test01_04_image"), document.getElementById("table_test01_05_image"), document.getElementById("table_test01_06_image"), document.getElementById("table_test01_07_image"), document.getElementById("table_test01_08_image"), document.getElementById("table_test01_09_image")],
	[document.getElementById("table_test02_01_image"), document.getElementById("table_test02_02_image"), document.getElementById("table_test02_03_image"), document.getElementById("table_test02_04_image"), document.getElementById("table_test02_05_image"), document.getElementById("table_test02_06_image"), document.getElementById("table_test02_07_image"), document.getElementById("table_test02_08_image"), document.getElementById("table_test02_09_image")],
	[document.getElementById("table_test03_01_image"), document.getElementById("table_test03_02_image"), document.getElementById("table_test03_03_image"), document.getElementById("table_test03_04_image"), document.getElementById("table_test03_05_image"), document.getElementById("table_test03_06_image"), document.getElementById("table_test03_07_image"), document.getElementById("table_test03_08_image"), document.getElementById("table_test03_09_image")],
	[document.getElementById("table_test04_01_image"), document.getElementById("table_test04_02_image"), document.getElementById("table_test04_03_image"), document.getElementById("table_test04_04_image"), document.getElementById("table_test04_05_image"), document.getElementById("table_test04_06_image"), document.getElementById("table_test04_07_image"), document.getElementById("table_test04_08_image"), document.getElementById("table_test04_09_image")],
	[document.getElementById("table_test05_01_image"), document.getElementById("table_test05_02_image"), document.getElementById("table_test05_03_image"), document.getElementById("table_test05_04_image"), document.getElementById("table_test05_05_image"), document.getElementById("table_test05_06_image"), document.getElementById("table_test05_07_image"), document.getElementById("table_test05_08_image"), document.getElementById("table_test05_09_image")],
	[document.getElementById("table_test06_01_image"), document.getElementById("table_test06_02_image"), document.getElementById("table_test06_03_image"), document.getElementById("table_test06_04_image"), document.getElementById("table_test06_05_image"), document.getElementById("table_test06_06_image"), document.getElementById("table_test06_07_image"), document.getElementById("table_test06_08_image"), document.getElementById("table_test06_09_image")],
	[document.getElementById("table_test07_01_image"), document.getElementById("table_test07_02_image"), document.getElementById("table_test07_03_image"), document.getElementById("table_test07_04_image"), document.getElementById("table_test07_05_image"), document.getElementById("table_test07_06_image"), document.getElementById("table_test07_07_image"), document.getElementById("table_test07_08_image"), document.getElementById("table_test07_09_image")],
	[document.getElementById("table_test08_01_image"), document.getElementById("table_test08_02_image"), document.getElementById("table_test08_03_image"), document.getElementById("table_test08_04_image"), document.getElementById("table_test08_05_image"), document.getElementById("table_test08_06_image"), document.getElementById("table_test08_07_image"), document.getElementById("table_test08_08_image"), document.getElementById("table_test08_09_image")],
	[document.getElementById("table_test09_01_image"), document.getElementById("table_test09_02_image"), document.getElementById("table_test09_03_image"), document.getElementById("table_test09_04_image"), document.getElementById("table_test09_05_image"), document.getElementById("table_test09_06_image"), document.getElementById("table_test09_07_image"), document.getElementById("table_test09_08_image"), document.getElementById("table_test09_09_image")]
];

const number_array = 
[
	[document.getElementById("table_test01_01"), document.getElementById("table_test01_02"), document.getElementById("table_test01_03"), document.getElementById("table_test01_04"), document.getElementById("table_test01_05"), document.getElementById("table_test01_06"), document.getElementById("table_test01_07"), document.getElementById("table_test01_08"), document.getElementById("table_test01_09")],
	[document.getElementById("table_test02_01"), document.getElementById("table_test02_02"), document.getElementById("table_test02_03"), document.getElementById("table_test02_04"), document.getElementById("table_test02_05"), document.getElementById("table_test02_06"), document.getElementById("table_test02_07"), document.getElementById("table_test02_08"), document.getElementById("table_test02_09")],
	[document.getElementById("table_test03_01"), document.getElementById("table_test03_02"), document.getElementById("table_test03_03"), document.getElementById("table_test03_04"), document.getElementById("table_test03_05"), document.getElementById("table_test03_06"), document.getElementById("table_test03_07"), document.getElementById("table_test03_08"), document.getElementById("table_test03_09")],
	[document.getElementById("table_test04_01"), document.getElementById("table_test04_02"), document.getElementById("table_test04_03"), document.getElementById("table_test04_04"), document.getElementById("table_test04_05"), document.getElementById("table_test04_06"), document.getElementById("table_test04_07"), document.getElementById("table_test04_08"), document.getElementById("table_test04_09")],
	[document.getElementById("table_test05_01"), document.getElementById("table_test05_02"), document.getElementById("table_test05_03"), document.getElementById("table_test05_04"), document.getElementById("table_test05_05"), document.getElementById("table_test05_06"), document.getElementById("table_test05_07"), document.getElementById("table_test05_08"), document.getElementById("table_test05_09")],
	[document.getElementById("table_test06_01"), document.getElementById("table_test06_02"), document.getElementById("table_test06_03"), document.getElementById("table_test06_04"), document.getElementById("table_test06_05"), document.getElementById("table_test06_06"), document.getElementById("table_test06_07"), document.getElementById("table_test06_08"), document.getElementById("table_test06_09")],
	[document.getElementById("table_test07_01"), document.getElementById("table_test07_02"), document.getElementById("table_test07_03"), document.getElementById("table_test07_04"), document.getElementById("table_test07_05"), document.getElementById("table_test07_06"), document.getElementById("table_test07_07"), document.getElementById("table_test07_08"), document.getElementById("table_test07_09")],
	[document.getElementById("table_test08_01"), document.getElementById("table_test08_02"), document.getElementById("table_test08_03"), document.getElementById("table_test08_04"), document.getElementById("table_test08_05"), document.getElementById("table_test08_06"), document.getElementById("table_test08_07"), document.getElementById("table_test08_08"), document.getElementById("table_test08_09")],
	[document.getElementById("table_test09_01"), document.getElementById("table_test09_02"), document.getElementById("table_test09_03"), document.getElementById("table_test09_04"), document.getElementById("table_test09_05"), document.getElementById("table_test09_06"), document.getElementById("table_test09_07"), document.getElementById("table_test09_08"), document.getElementById("table_test09_09")]
];
const question_data = 
[
"abcdefghi/F/I/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/F/abcdefghi/G/B/-1",
"abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/F/A/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/G/abcdefghi/A/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/B/F/E/abcdefghi/-1",
"abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/F/D/abcdefghi/H/abcdefghi/C/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/E/B/abcdefghi/G/A/abcdefghi/-1",
"C/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/H/D/F/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/E/abcdefghi/abcdefghi/-1",
"D/E/G/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/D/B/abcdefghi/abcdefghi/E/G/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/A/G/abcdefghi/F/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/F/I/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/G/D/A/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/E/abcdefghi/A/-1",
"abcdefghi/abcdefghi/F/abcdefghi/H/D/abcdefghi/abcdefghi/I/H/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/E/abcdefghi/C/abcdefghi/abcdefghi/A/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/F/abcdefghi/I/abcdefghi/abcdefghi/-1",
"I/F/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/D/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/B/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/A/abcdefghi/B/A/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/F/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/D/I/A/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/A/abcdefghi/C/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/abcdefghi/B/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"C/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/F/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/E/H/G/abcdefghi/abcdefghi/F/abcdefghi/D/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/I/abcdefghi/abcdefghi/A/-1",
"I/B/C/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/A/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/I/-1",
"abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/E/D/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/I/A/abcdefghi/F/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/C/D/-1",
"abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/F/C/D/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/A/C/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/E/H/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/B/I/abcdefghi/abcdefghi/-1",
"D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/H/C/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/C/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/H/D/C/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/H/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/F/G/C/-1",
"abcdefghi/F/abcdefghi/B/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/G/D/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/E/C/A/H/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/C/abcdefghi/I/-1",
"abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/A/D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/abcdefghi/I/D/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/B/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/H/D/E/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/F/I/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/B/abcdefghi/abcdefghi/F/I/C/A/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/-1",
"A/abcdefghi/F/B/abcdefghi/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/A/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/H/A/abcdefghi/abcdefghi/E/C/abcdefghi/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/I/abcdefghi/G/-1",
"abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/F/abcdefghi/I/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/A/E/G/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/A/E/abcdefghi/abcdefghi/C/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/H/C/A/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/G/I/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/E/abcdefghi/F/-1",
"abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/E/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/C/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/H/-1",
"abcdefghi/A/abcdefghi/I/C/abcdefghi/H/abcdefghi/B/C/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/F/C/abcdefghi/A/A/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/G/C/abcdefghi/A/abcdefghi/B/E/abcdefghi/abcdefghi/abcdefghi/D/B/C/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/-1",
"H/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/F/C/abcdefghi/B/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/-1",
"abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/G/abcdefghi/abcdefghi/C/D/abcdefghi/E/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/F/-1",
"abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/H/abcdefghi/A/H/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/C/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/E/G/abcdefghi/abcdefghi/D/-1",
"A/F/abcdefghi/E/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/C/I/abcdefghi/-1",
"abcdefghi/A/abcdefghi/I/G/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/F/abcdefghi/B/A/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/C/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/G/F/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/D/C/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/E/I/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/C/A/B/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/H/H/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/F/H/G/abcdefghi/abcdefghi/D/A/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/-1",
"abcdefghi/abcdefghi/I/C/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/I/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/A/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/-1",
"F/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/C/D/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/F/C/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/C/abcdefghi/D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/H/C/abcdefghi/G/-1",
"abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/H/D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/F/B/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/A/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/G/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/-1",
"A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/I/abcdefghi/abcdefghi/C/abcdefghi/H/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/D/abcdefghi/G/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/H/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/G/C/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/D/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/G/E/F/abcdefghi/I/abcdefghi/abcdefghi/F/A/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/A/abcdefghi/-1",
"G/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/H/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/G/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/A/abcdefghi/F/abcdefghi/I/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/-1",
"D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/A/E/abcdefghi/G/abcdefghi/B/abcdefghi/C/abcdefghi/G/C/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/-1",
"abcdefghi/abcdefghi/abcdefghi/I/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/A/I/abcdefghi/abcdefghi/B/E/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/abcdefghi/C/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/F/E/C/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/-1",
"D/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/B/A/abcdefghi/A/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/G/I/abcdefghi/abcdefghi/D/abcdefghi/H/A/abcdefghi/abcdefghi/D/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/-1",
"abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/E/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/G/F/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/D/D/abcdefghi/B/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/F/-1",
"E/abcdefghi/D/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/G/abcdefghi/abcdefghi/F/E/A/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/E/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/C/I/abcdefghi/abcdefghi/F/H/C/abcdefghi/abcdefghi/B/abcdefghi/D/A/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/E/D/B/G/abcdefghi/C/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/D/E/abcdefghi/C/abcdefghi/H/F/abcdefghi/C/abcdefghi/abcdefghi/I/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/D/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/-1",
"abcdefghi/abcdefghi/E/H/C/abcdefghi/F/abcdefghi/D/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/I/G/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/I/H/B/abcdefghi/abcdefghi/A/abcdefghi/C/-1",
"abcdefghi/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/A/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/I/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/B/abcdefghi/C/G/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/C/B/H/-1",
"abcdefghi/D/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/F/I/B/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/H/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/F/G/B/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/H/-1",
"abcdefghi/E/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/H/abcdefghi/F/A/abcdefghi/B/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/H/abcdefghi/D/abcdefghi/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/E/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/-1",
"abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/E/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/D/I/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/F/-1",
"C/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/D/E/abcdefghi/abcdefghi/H/abcdefghi/B/G/abcdefghi/abcdefghi/A/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/E/D/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/C/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/-1",
"B/E/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/F/abcdefghi/G/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/A/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/G/E/abcdefghi/abcdefghi/C/A/abcdefghi/abcdefghi/-1",
"A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/G/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/G/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/B/F/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/F/C/I/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/E/H/H/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/-1",
"I/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/E/B/D/abcdefghi/abcdefghi/abcdefghi/C/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/I/abcdefghi/F/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/H/abcdefghi/F/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/-1",
"abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/C/I/B/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/G/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/I/B/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/C/C/abcdefghi/A/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/-1",
"abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/H/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/I/B/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/H/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/A/D/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/I/F/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/C/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/H/I/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/G/C/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/B/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/B/C/abcdefghi/G/-1",
"abcdefghi/abcdefghi/I/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/H/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/G/I/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/D/abcdefghi/E/A/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/-1",
"F/abcdefghi/E/abcdefghi/abcdefghi/I/D/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/G/abcdefghi/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/E/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/B/G/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/abcdefghi/D/abcdefghi/A/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/F/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/I/C/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/B/F/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/B/E/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/-1",
"F/A/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/A/C/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/-1",
"F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/H/C/abcdefghi/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/B/I/-1",
"G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/E/I/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/E/abcdefghi/F/abcdefghi/C/-1",
"abcdefghi/I/abcdefghi/abcdefghi/H/D/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/abcdefghi/I/abcdefghi/E/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/C/G/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/H/abcdefghi/F/abcdefghi/abcdefghi/D/G/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/H/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/A/C/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/D/-1",
"G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/D/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/C/abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/D/abcdefghi/-1",
"I/A/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/D/H/B/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/B/F/C/abcdefghi/-1",
"abcdefghi/D/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/H/abcdefghi/B/E/H/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/E/B/abcdefghi/abcdefghi/F/abcdefghi/I/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/-1",
"I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/G/D/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/E/D/H/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/D/abcdefghi/F/A/abcdefghi/abcdefghi/G/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/C/-1",
"F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/I/abcdefghi/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/D/G/B/abcdefghi/abcdefghi/C/F/A/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/B/E/abcdefghi/G/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/A/H/abcdefghi/abcdefghi/-1",
"H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/E/abcdefghi/D/abcdefghi/C/B/F/abcdefghi/G/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/E/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/I/E/-1",
"abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/H/G/A/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/F/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/B/I/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/D/abcdefghi/H/G/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/F/-1",
"I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/F/C/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/E/G/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/E/H/F/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/F/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/F/C/abcdefghi/H/-1",
"abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/I/abcdefghi/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/E/-1",
"abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/E/C/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/F/H/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/A/B/abcdefghi/abcdefghi/G/F/abcdefghi/G/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/C/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/abcdefghi/B/abcdefghi/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/C/abcdefghi/abcdefghi/E/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/-1",
"I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/F/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/E/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/E/I/abcdefghi/A/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/C/H/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/G/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/H/abcdefghi/D/abcdefghi/abcdefghi/B/C/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/-1",
"abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/I/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/A/C/I/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/F/G/H/A/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/I/B/H/abcdefghi/A/abcdefghi/abcdefghi/-1",
"abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/C/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/A/G/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/I/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/-1",
"A/G/E/H/abcdefghi/I/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/B/E/abcdefghi/abcdefghi/H/D/abcdefghi/-1",
"H/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/I/B/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/F/abcdefghi/abcdefghi/F/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/-1",
"I/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/D/abcdefghi/G/D/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/F/D/abcdefghi/C/abcdefghi/A/I/E/-1",
"abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/G/E/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/-1",
"A/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/G/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/abcdefghi/C/-1",
"B/abcdefghi/abcdefghi/abcdefghi/I/H/E/abcdefghi/G/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/F/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/D/I/abcdefghi/abcdefghi/G/abcdefghi/C/H/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/B/abcdefghi/-1",
"abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/D/abcdefghi/D/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/F/B/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/C/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/F/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/I/C/abcdefghi/-1",
"I/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/E/C/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/D/B/-1",
"B/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/C/I/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/H/-1",
"B/G/abcdefghi/I/E/A/D/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/E/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/D/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/E/F/abcdefghi/-1",
"abcdefghi/abcdefghi/C/abcdefghi/B/E/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/D/F/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/-1",
"A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/D/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/F/C/abcdefghi/B/abcdefghi/abcdefghi/H/H/abcdefghi/C/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/G/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/I/C/abcdefghi/E/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/F/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/E/-1",
"abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/F/abcdefghi/I/abcdefghi/abcdefghi/D/B/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/E/A/abcdefghi/H/B/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/E/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/G/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/E/C/-1",
"I/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/G/A/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/B/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/G/abcdefghi/B/C/abcdefghi/A/I/abcdefghi/abcdefghi/-1",
"B/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/B/F/E/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/-1",
"H/abcdefghi/C/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/D/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/G/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/G/I/abcdefghi/abcdefghi/E/abcdefghi/F/A/D/-1",
"abcdefghi/E/A/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/G/abcdefghi/abcdefghi/C/A/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/F/abcdefghi/G/abcdefghi/abcdefghi/E/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/D/B/abcdefghi/C/abcdefghi/-1",
"abcdefghi/A/abcdefghi/E/C/abcdefghi/abcdefghi/I/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/F/C/abcdefghi/G/B/abcdefghi/E/I/abcdefghi/H/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/G/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/I/-1",
"abcdefghi/abcdefghi/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/I/B/H/abcdefghi/abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/H/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/G/-1",
"E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/A/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/G/abcdefghi/B/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/D/abcdefghi/G/abcdefghi/H/I/abcdefghi/E/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/G/B/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/E/D/G/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/-1",
"abcdefghi/abcdefghi/D/abcdefghi/B/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/H/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/A/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/C/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/H/B/abcdefghi/abcdefghi/A/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/abcdefghi/E/-1",
"abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/C/I/B/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/G/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/G/abcdefghi/D/H/abcdefghi/B/abcdefghi/abcdefghi/E/F/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/H/-1",
"abcdefghi/A/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/I/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/E/F/abcdefghi/abcdefghi/C/G/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/G/I/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/G/abcdefghi/C/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/F/B/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/B/abcdefghi/abcdefghi/I/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/C/H/-1",
"E/abcdefghi/D/I/H/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/G/D/abcdefghi/abcdefghi/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/C/F/D/abcdefghi/abcdefghi/G/H/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/G/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/G/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/I/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/C/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/E/D/E/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/-1",
"C/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/F/H/abcdefghi/E/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/A/F/C/abcdefghi/I/abcdefghi/B/B/abcdefghi/abcdefghi/abcdefghi/G/A/abcdefghi/E/abcdefghi/-1",
"C/abcdefghi/D/abcdefghi/abcdefghi/I/F/abcdefghi/B/H/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/G/G/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/E/I/A/D/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/G/F/D/A/abcdefghi/I/-1",
"G/abcdefghi/abcdefghi/C/E/B/H/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/A/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/I/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/A/-1",
"abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/E/abcdefghi/abcdefghi/B/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/D/F/abcdefghi/G/-1",
"H/E/B/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/H/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/E/-1",
"I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/G/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/D/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/A/F/I/-1",
"D/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/D/F/B/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/H/G/abcdefghi/E/abcdefghi/-1",
"abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/B/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/F/abcdefghi/A/E/H/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/C/B/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/C/D/G/D/abcdefghi/B/A/abcdefghi/H/abcdefghi/abcdefghi/-1",
"A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/D/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/F/I/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/abcdefghi/D/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/-1",
"A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/G/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/I/-1",
"abcdefghi/H/A/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/F/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/abcdefghi/G/F/E/C/abcdefghi/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/-1",
"F/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/G/E/A/E/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/-1",
"C/D/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/C/abcdefghi/abcdefghi/I/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/A/abcdefghi/E/I/abcdefghi/H/B/abcdefghi/A/abcdefghi/D/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/-1",
"A/C/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/H/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/C/abcdefghi/D/abcdefghi/E/abcdefghi/F/abcdefghi/H/E/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/G/abcdefghi/abcdefghi/H/I/abcdefghi/-1",
"H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/H/C/B/I/C/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/C/F/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/B/D/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/D/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/B/E/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/H/F/abcdefghi/E/abcdefghi/D/A/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/-1",
"D/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/G/abcdefghi/abcdefghi/E/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/G/D/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/G/abcdefghi/abcdefghi/abcdefghi/F/B/A/H/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/-1",
"F/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/E/A/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/H/abcdefghi/G/A/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/H/-1",
"abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/B/F/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/I/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/H/E/F/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/I/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/G/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/B/I/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/A/abcdefghi/E/D/H/-1",
"abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/B/A/abcdefghi/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/C/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/C/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/G/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/G/abcdefghi/C/F/-1",
"abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/F/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/A/A/abcdefghi/abcdefghi/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/A/G/abcdefghi/H/abcdefghi/D/abcdefghi/D/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/F/abcdefghi/-1",
"abcdefghi/G/abcdefghi/F/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/C/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/abcdefghi/G/H/abcdefghi/F/abcdefghi/I/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/E/G/abcdefghi/H/E/C/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/-1",
"E/B/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/A/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/E/abcdefghi/G/D/abcdefghi/abcdefghi/E/abcdefghi/F/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/I/E/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/D/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/-1",
"D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/G/B/abcdefghi/A/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/I/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/G/-1",
"abcdefghi/abcdefghi/G/E/abcdefghi/B/abcdefghi/abcdefghi/I/A/E/H/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/abcdefghi/I/abcdefghi/H/B/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/D/E/abcdefghi/-1",
"G/I/abcdefghi/F/B/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/D/-1",
"F/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/G/E/D/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/E/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/A/E/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/G/-1",
"abcdefghi/H/abcdefghi/I/B/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/abcdefghi/H/abcdefghi/I/B/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/B/A/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/C/A/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/D/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/F/D/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/D/abcdefghi/G/A/abcdefghi/H/A/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/G/D/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/F/H/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/abcdefghi/C/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/D/E/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/I/-1",
"F/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/F/D/abcdefghi/H/abcdefghi/A/H/I/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/G/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/E/abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/E/D/-1",
"abcdefghi/abcdefghi/F/I/G/abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/H/abcdefghi/G/E/abcdefghi/F/C/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/G/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/-1",
"B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/H/I/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/G/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/H/G/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/G/abcdefghi/D/H/abcdefghi/-1",
"abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/C/H/abcdefghi/E/abcdefghi/D/D/abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/H/G/I/abcdefghi/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/-1",
"abcdefghi/A/abcdefghi/abcdefghi/E/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/E/A/D/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/C/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/C/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/B/E/abcdefghi/H/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/A/F/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/A/H/-1",
"abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/I/B/G/I/D/B/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/-1",
"abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/H/abcdefghi/abcdefghi/I/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/F/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/abcdefghi/F/abcdefghi/H/-1",
"abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/H/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/abcdefghi/H/abcdefghi/B/G/A/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/-1",
"abcdefghi/A/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/D/I/H/abcdefghi/F/C/G/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/C/A/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/F/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/E/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/D/F/abcdefghi/A/abcdefghi/G/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/I/abcdefghi/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/F/C/abcdefghi/B/abcdefghi/abcdefghi/D/F/abcdefghi/B/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/-1",
"H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/A/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/E/C/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/G/E/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/C/H/abcdefghi/abcdefghi/abcdefghi/D/-1",
"abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/C/abcdefghi/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/D/F/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/-1",
"abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/G/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/-1",
"I/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/B/F/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/H/C/abcdefghi/abcdefghi/-1",
"abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/D/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/G/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/A/C/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/G/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/I/D/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/H/abcdefghi/G/B/abcdefghi/C/abcdefghi/abcdefghi/-1",
"F/G/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/E/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/A/abcdefghi/F/I/abcdefghi/C/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/E/abcdefghi/D/abcdefghi/B/-1",
"I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/E/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/D/abcdefghi/A/F/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/-1",
"E/I/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/H/A/C/G/abcdefghi/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/G/abcdefghi/E/A/I/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/-1",
"G/E/H/abcdefghi/I/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/abcdefghi/A/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/G/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/H/abcdefghi/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/E/-1",
"abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/G/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/B/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/I/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/D/C/I/abcdefghi/A/-1",
"abcdefghi/B/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/A/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/F/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/C/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/G/abcdefghi/abcdefghi/H/-1",
"E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/F/E/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/G/B/I/abcdefghi/H/abcdefghi/abcdefghi/-1",
"abcdefghi/E/C/D/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/C/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/-1",
"abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/E/abcdefghi/C/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/B/abcdefghi/H/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/I/B/G/abcdefghi/abcdefghi/A/-1",
"abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/B/H/abcdefghi/F/D/abcdefghi/abcdefghi/C/G/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/F/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/E/abcdefghi/abcdefghi/I/C/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/B/H/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/abcdefghi/-1",
"abcdefghi/abcdefghi/F/B/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/E/B/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/A/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/F/abcdefghi/-1",
"E/D/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/A/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/D/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/D/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/F/C/abcdefghi/-1",
"abcdefghi/G/abcdefghi/D/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/C/H/abcdefghi/F/D/abcdefghi/G/abcdefghi/-1",
"C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/G/D/E/abcdefghi/H/G/abcdefghi/abcdefghi/B/A/G/B/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/G/E/abcdefghi/abcdefghi/C/A/abcdefghi/G/F/abcdefghi/D/-1",
"A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/F/B/I/abcdefghi/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/A/B/abcdefghi/H/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/H/E/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/G/B/I/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/C/B/I/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/-1",
"D/abcdefghi/A/abcdefghi/I/C/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/G/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/G/abcdefghi/F/G/C/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/-1",
"abcdefghi/D/abcdefghi/I/abcdefghi/H/abcdefghi/F/abcdefghi/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/C/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/E/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/I/G/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/D/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/A/abcdefghi/D/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/E/E/H/abcdefghi/abcdefghi/G/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/E/C/I/abcdefghi/-1",
"E/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/I/E/abcdefghi/F/abcdefghi/I/abcdefghi/A/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/B/abcdefghi/G/abcdefghi/D/E/-1",
"A/D/abcdefghi/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/I/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/F/abcdefghi/G/abcdefghi/C/abcdefghi/I/abcdefghi/A/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/B/abcdefghi/abcdefghi/A/-1",
"abcdefghi/D/abcdefghi/B/abcdefghi/E/abcdefghi/abcdefghi/G/I/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/I/F/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/A/-1",
"F/abcdefghi/B/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/C/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/E/H/abcdefghi/D/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/-1",
"G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/H/F/abcdefghi/B/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/F/A/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/I/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/E/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"H/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/abcdefghi/H/abcdefghi/G/C/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/G/C/-1",
"H/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/I/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/D/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/F/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/-1",
];

const answer_data = 
[
"D/F/I/E/B/A/C/H/G/H/B/E/C/I/G/D/A/F/G/C/A/F/D/H/E/B/I/B/H/F/A/C/I/G/D/E/I/D/G/H/F/E/B/C/A/E/A/C/D/G/B/F/I/H/A/G/H/B/E/C/I/F/D/F/I/B/G/A/D/H/E/C/C/E/D/I/H/F/A/G/B/-1",
"F/C/B/H/D/G/E/I/A/E/G/A/F/B/I/H/C/D/I/H/D/C/A/E/B/G/F/A/D/C/I/F/H/G/B/E/H/I/E/B/G/D/A/F/C/B/F/G/E/C/A/D/H/I/G/E/F/A/H/C/I/D/B/D/B/I/G/E/F/C/A/H/C/A/H/D/I/B/F/E/G/-1",
"E/I/H/A/C/B/F/D/G/B/G/F/D/I/H/A/C/E/D/C/A/G/E/F/I/B/H/I/A/D/B/H/G/E/F/C/C/F/E/I/D/A/H/G/B/H/B/G/C/F/E/D/I/A/G/D/B/H/A/I/C/E/F/A/E/C/F/G/D/B/H/I/F/H/I/E/B/C/G/A/D/-1",
"C/E/H/I/F/G/A/B/D/F/B/G/D/C/A/I/H/E/A/I/D/E/B/H/C/G/F/G/D/E/B/I/C/F/A/H/H/F/I/G/A/E/D/C/B/B/A/C/H/D/F/G/E/I/I/C/A/F/E/B/H/D/G/E/H/F/A/G/D/B/I/C/D/G/B/C/H/I/E/F/A/-1",
"D/E/G/B/F/H/I/A/C/A/H/C/D/I/E/F/G/B/F/B/I/C/A/G/E/H/D/B/F/H/E/G/D/A/C/I/I/G/E/A/C/F/B/D/H/C/A/D/H/B/I/G/E/F/H/I/B/G/E/C/D/F/A/G/C/F/I/D/A/H/B/E/E/D/A/F/H/B/C/I/G/-1",
"G/E/B/A/I/H/F/C/D/H/D/I/B/C/F/A/G/E/F/C/A/D/E/G/H/I/B/C/B/F/E/A/I/D/H/G/A/G/D/H/B/C/I/E/F/I/H/E/F/G/D/B/A/C/E/F/H/G/D/A/C/B/I/B/A/C/I/F/E/G/D/H/D/I/G/C/H/B/E/F/A/-1",
"C/B/F/A/H/D/G/E/I/H/E/A/F/I/G/B/C/D/D/I/G/E/B/C/F/H/A/A/F/E/H/G/B/D/I/C/B/D/I/C/A/F/H/G/E/G/H/C/D/E/I/A/B/F/I/A/D/G/C/H/E/F/B/F/G/B/I/D/E/C/A/H/E/C/H/B/F/A/I/D/G/-1",
"I/F/A/H/B/G/C/E/D/E/C/B/A/I/D/F/H/G/H/G/D/E/C/F/B/I/A/G/I/C/F/H/A/D/B/E/D/A/F/C/E/B/H/G/I/B/E/H/D/G/I/A/F/C/F/D/G/B/A/E/I/C/H/C/B/E/I/D/H/G/A/F/A/H/I/G/F/C/E/D/B/-1",
"D/E/I/G/C/F/B/A/H/B/A/H/I/E/D/C/G/F/F/C/G/B/A/H/E/D/I/A/H/E/F/G/C/I/B/D/I/D/C/E/B/A/F/H/G/G/B/F/D/H/I/A/E/C/C/G/A/H/F/E/D/I/B/H/F/D/A/I/B/G/C/E/E/I/B/C/D/G/H/F/A/-1",
"C/A/D/I/F/G/B/H/E/G/I/B/E/C/H/D/A/F/H/F/E/A/D/B/G/C/I/A/C/I/H/E/D/F/B/G/B/G/H/F/I/A/C/E/D/D/E/F/G/B/C/A/I/H/E/H/G/C/A/F/I/D/B/I/D/A/B/G/E/H/F/C/F/B/C/D/H/I/E/G/A/-1",
"I/B/C/F/D/G/A/E/H/E/A/F/H/I/B/D/G/C/D/G/H/A/E/C/I/B/F/B/E/D/I/A/F/C/H/G/F/C/I/B/G/H/E/D/A/A/H/G/E/C/D/F/I/B/C/D/A/G/B/I/H/F/E/H/I/B/C/F/E/G/A/D/G/F/E/D/H/A/B/C/I/-1",
"I/D/B/F/A/C/G/E/H/G/A/H/E/B/D/F/I/C/F/E/C/I/H/G/D/A/B/A/H/G/C/F/I/B/D/E/D/B/I/A/E/H/C/G/F/C/F/E/G/D/B/A/H/I/E/C/D/B/I/A/H/F/G/H/G/F/D/C/E/I/B/A/B/I/A/H/G/F/E/C/D/-1",
"E/B/I/A/G/F/C/D/H/D/H/A/C/E/I/B/G/F/C/F/G/B/H/D/E/I/A/B/D/F/H/A/E/G/C/I/G/I/E/F/B/C/H/A/D/H/A/C/D/I/G/F/E/B/I/G/B/E/D/H/A/F/C/F/E/H/I/C/A/D/B/G/A/C/D/G/F/B/I/H/E/-1",
"D/B/A/G/I/F/C/E/H/C/H/E/A/D/B/I/F/G/G/F/I/H/C/E/D/B/A/E/A/B/I/F/G/H/D/C/F/D/G/C/A/H/B/I/E/I/C/H/B/E/D/G/A/F/H/I/F/D/G/A/E/C/B/B/E/C/F/H/I/A/G/D/A/G/D/E/B/C/F/H/I/-1",
"C/A/F/B/H/D/G/E/I/G/B/D/I/F/E/C/A/H/H/E/I/C/A/G/D/B/F/F/G/C/D/B/A/H/I/E/B/I/E/G/C/H/A/F/D/D/H/A/E/I/F/B/C/G/I/C/G/F/D/B/E/H/A/E/F/H/A/G/C/I/D/B/A/D/B/H/E/I/F/G/C/-1",
"C/F/A/B/G/D/E/I/H/H/E/I/A/C/F/G/D/B/G/D/B/E/H/I/A/C/F/E/H/F/D/I/A/B/G/C/A/B/G/H/F/C/I/E/D/I/C/D/G/B/E/H/F/A/F/I/E/C/A/H/D/B/G/B/A/C/I/D/G/F/H/E/D/G/H/F/E/B/C/A/I/-1",
"G/E/F/D/H/A/I/B/C/D/I/B/C/G/F/A/E/H/A/C/H/I/E/B/D/F/G/H/B/G/E/A/D/F/C/I/C/D/I/B/F/H/E/G/A/F/A/E/G/I/C/H/D/B/I/G/C/A/D/E/B/H/F/E/H/A/F/B/G/C/I/D/B/F/D/H/C/I/G/A/E/-1",
"I/F/B/C/A/D/H/G/E/H/C/E/B/G/F/D/I/A/A/G/D/I/H/E/F/C/B/D/H/F/E/B/G/C/A/I/B/I/C/H/D/A/G/E/F/G/E/A/F/C/I/B/D/H/C/A/H/D/E/B/I/F/G/E/D/I/G/F/H/A/B/C/F/B/G/A/I/C/E/H/D/-1",
"D/H/E/C/B/G/F/I/A/C/A/I/F/D/E/G/B/H/F/G/B/H/A/I/D/E/C/B/E/D/G/F/H/C/A/I/H/F/C/B/I/A/E/G/D/A/I/G/E/C/D/H/F/B/G/B/F/I/H/C/A/D/E/E/D/H/A/G/B/I/C/F/I/C/A/D/E/F/B/H/G/-1",
"A/E/F/B/I/G/C/D/H/B/H/C/A/D/E/F/G/I/I/G/D/H/C/F/E/B/A/H/A/B/I/E/C/G/F/D/F/D/E/G/B/H/A/I/C/C/I/G/F/A/D/H/E/B/G/B/H/C/F/I/D/A/E/D/C/I/E/G/A/B/H/F/E/F/A/D/H/B/I/C/G/-1",
"E/H/C/G/I/B/D/F/A/A/B/G/D/C/F/E/I/H/D/I/F/A/E/H/G/B/C/I/A/H/F/G/D/C/E/B/B/F/E/I/A/C/H/D/G/G/C/D/H/B/E/I/A/F/F/D/A/C/H/I/B/G/E/H/E/I/B/F/G/A/C/D/C/G/B/E/D/A/F/H/I/-1",
"D/C/H/G/I/B/F/A/E/G/F/B/E/D/A/I/H/C/A/E/I/F/C/H/G/B/D/E/B/A/D/G/F/C/I/H/H/I/C/B/A/E/D/F/G/F/G/D/I/H/C/A/E/B/I/D/E/H/F/G/B/C/A/B/A/F/C/E/D/H/G/I/C/H/G/A/B/I/E/D/F/-1",
"E/I/G/F/H/C/D/B/A/D/F/A/G/E/B/H/C/I/B/C/H/D/I/A/E/G/F/A/E/D/H/G/F/C/I/B/C/B/I/A/D/E/F/H/G/H/G/F/B/C/I/A/E/D/G/D/B/E/A/H/I/F/C/F/H/C/I/B/D/G/A/E/I/A/E/C/F/G/B/D/H/-1",
"F/A/E/I/C/G/H/D/B/C/I/D/H/A/B/E/F/G/G/B/H/E/D/F/C/I/A/A/D/B/G/E/H/F/C/I/E/C/I/B/F/D/A/G/H/H/F/G/C/I/A/D/B/E/I/E/A/D/B/C/G/H/F/D/G/F/A/H/I/B/E/C/B/H/C/F/G/E/I/A/D/-1",
"H/E/D/C/A/G/I/F/B/I/F/B/E/H/D/C/G/A/C/A/G/F/B/I/H/D/E/A/G/H/I/D/F/E/B/C/B/D/I/A/E/C/F/H/G/F/C/E/B/G/H/D/A/I/E/H/A/D/C/B/G/I/F/G/B/F/H/I/E/A/C/D/D/I/C/G/F/A/B/E/H/-1",
"E/D/C/F/B/G/A/I/H/I/H/B/E/D/A/F/G/C/A/G/F/C/I/H/B/E/D/F/E/D/I/G/B/C/H/A/C/A/H/D/F/E/I/B/G/B/I/G/A/H/C/D/F/E/D/F/E/G/C/I/H/A/B/H/C/A/B/E/F/G/D/I/G/B/I/H/A/D/E/C/F/-1",
"I/E/F/B/G/C/D/H/A/C/H/D/I/A/E/B/F/G/B/G/A/H/F/D/I/C/E/G/I/B/E/C/F/A/D/H/D/A/H/G/I/B/F/E/C/F/C/E/D/H/A/G/I/B/H/B/C/A/D/I/E/G/F/E/D/G/F/B/H/C/A/I/A/F/I/C/E/G/H/B/D/-1",
"A/F/G/E/D/I/H/C/B/H/D/C/B/G/A/E/F/I/I/B/E/H/F/C/D/G/A/G/A/H/F/E/B/I/D/C/E/C/D/I/A/H/G/B/F/F/I/B/G/C/D/A/H/E/D/G/I/C/B/E/F/A/H/C/H/F/A/I/G/B/E/D/B/E/A/D/H/F/C/I/G/-1",
"B/A/F/I/G/H/E/D/C/H/E/C/D/A/F/B/I/G/G/I/D/C/B/E/H/F/A/I/D/H/E/C/A/F/G/B/A/G/B/H/F/D/I/C/E/C/F/E/B/I/G/D/A/H/D/B/I/A/H/C/G/E/F/E/C/G/F/D/B/A/H/I/F/H/A/G/E/I/C/B/D/-1",
"B/E/A/H/I/D/C/G/F/F/H/D/G/C/A/E/B/I/G/I/C/F/B/E/D/H/A/D/C/I/A/H/B/F/E/G/H/G/F/D/E/C/A/I/B/A/B/E/I/G/F/H/D/C/I/D/H/C/F/G/B/A/E/E/F/G/B/A/H/I/C/D/C/A/B/E/D/I/G/F/H/-1",
"G/I/H/E/A/F/D/C/B/E/A/C/H/D/B/G/F/I/F/B/D/G/I/C/H/E/A/B/D/E/A/F/H/C/I/G/I/C/A/B/G/E/F/D/H/H/F/G/D/C/I/A/B/E/D/H/F/I/E/A/B/G/C/C/E/B/F/H/G/I/A/D/A/G/I/C/B/D/E/H/F/-1",
"A/D/I/C/G/B/E/F/H/F/E/G/H/D/A/I/C/B/C/H/B/I/E/F/A/G/D/I/G/D/B/C/E/H/A/F/H/B/C/A/F/G/D/E/I/E/F/A/D/H/I/C/B/G/G/A/E/F/I/D/B/H/C/B/I/H/G/A/C/F/D/E/D/C/F/E/B/H/G/I/A/-1",
"F/C/A/E/D/G/I/H/B/B/H/D/C/F/I/E/A/G/E/I/G/A/H/B/C/D/F/I/F/B/G/A/D/H/C/E/A/G/C/B/E/H/D/F/I/D/E/H/I/C/F/G/B/A/C/A/F/H/G/E/B/I/D/G/D/I/F/B/C/A/E/H/H/B/E/D/I/A/F/G/C/-1",
"D/G/F/B/C/E/A/H/I/H/A/B/I/D/F/G/C/E/I/C/E/A/H/G/B/F/D/A/H/I/G/E/D/F/B/C/E/F/C/H/I/B/D/G/A/B/D/G/C/F/A/E/I/H/C/E/D/F/G/I/H/A/B/G/B/H/D/A/C/I/E/F/F/I/A/E/B/H/C/D/G/-1",
"D/F/G/I/C/B/E/A/H/B/H/C/G/E/A/I/D/F/A/I/E/H/D/F/G/C/B/I/G/H/C/A/D/F/B/E/E/D/B/F/H/G/C/I/A/F/C/A/B/I/E/H/G/D/C/E/I/A/B/H/D/F/G/G/A/D/E/F/I/B/H/C/H/B/F/D/G/C/A/E/I/-1",
"A/H/D/E/B/F/G/C/I/I/F/C/D/H/G/A/B/E/G/B/E/C/A/I/F/H/D/C/G/B/H/D/E/I/A/F/E/A/I/B/F/C/D/G/H/F/D/H/G/I/A/C/E/B/H/I/A/F/C/B/E/D/G/D/C/G/I/E/H/B/F/A/B/E/F/A/G/D/H/I/C/-1",
"H/F/B/I/E/D/G/C/A/I/G/A/F/C/H/B/E/D/D/C/E/B/A/G/I/F/H/F/I/C/H/B/A/D/G/E/E/H/G/D/I/F/A/B/C/A/B/D/C/G/E/F/H/I/B/E/F/A/D/C/H/I/G/G/A/I/E/H/B/C/D/F/C/D/H/G/F/I/E/A/B/-1",
"G/A/F/H/D/C/E/B/I/I/E/B/F/A/G/H/C/D/C/D/H/I/E/B/F/G/A/A/H/I/B/C/D/G/F/E/F/C/D/E/G/H/I/A/B/B/G/E/A/I/F/D/H/C/E/F/A/G/B/I/C/D/H/D/B/G/C/H/E/A/I/F/H/I/C/D/F/A/B/E/G/-1",
"D/F/I/A/G/E/B/H/C/E/B/H/C/D/I/A/F/G/C/A/G/B/F/H/I/D/E/H/G/C/F/E/A/D/B/I/B/I/F/H/C/D/E/G/A/A/E/D/G/I/B/F/C/H/G/C/E/D/A/F/H/I/B/I/D/B/E/H/G/C/A/F/F/H/A/I/B/C/G/E/D/-1",
"C/D/H/I/E/G/B/F/A/A/B/F/D/H/C/E/I/G/I/G/E/B/F/A/H/C/D/E/H/A/C/B/D/I/G/F/D/F/G/A/I/H/C/B/E/B/C/I/F/G/E/D/A/H/H/I/B/G/D/F/A/E/C/G/A/D/E/C/I/F/H/B/F/E/C/H/A/B/G/D/I/-1",
"D/H/B/G/I/F/A/E/C/C/F/A/D/E/B/G/I/H/G/I/E/H/A/C/D/B/F/I/C/F/E/D/H/B/A/G/A/D/G/B/C/I/H/F/E/B/E/H/F/G/A/C/D/I/F/G/I/C/B/D/E/H/A/E/A/D/I/H/G/F/C/B/H/B/C/A/F/E/I/G/D/-1",
"I/F/D/H/G/B/E/C/A/A/C/H/D/I/E/F/B/G/B/E/G/A/C/F/D/I/H/F/B/I/G/A/D/H/E/C/G/H/E/C/F/I/A/D/B/C/D/A/B/E/H/G/F/I/H/A/F/E/B/C/I/G/D/D/I/B/F/H/G/C/A/E/E/G/C/I/D/A/B/H/F/-1",
"E/I/D/F/C/G/A/H/B/C/H/F/A/B/D/I/E/G/B/G/A/H/E/I/D/C/F/F/E/B/C/A/H/G/I/D/G/D/C/I/F/E/H/B/A/H/A/I/D/G/B/C/F/E/A/F/G/E/H/C/B/D/I/D/B/H/G/I/F/E/A/C/I/C/E/B/D/A/F/G/H/-1",
"B/C/I/G/A/D/H/E/F/F/G/E/I/H/C/B/A/D/A/H/D/E/B/F/G/C/I/E/I/F/H/C/G/D/B/A/D/A/H/B/I/E/F/G/C/G/B/C/F/D/A/I/H/E/H/D/A/C/G/I/E/F/B/I/E/G/A/F/B/C/D/H/C/F/B/D/E/H/A/I/G/-1",
"H/F/I/E/D/B/G/A/C/B/C/A/H/G/F/E/I/D/G/D/E/A/C/I/H/F/B/C/B/H/I/E/D/A/G/F/A/E/G/B/F/H/C/D/I/F/I/D/C/A/G/B/E/H/D/G/B/F/H/E/I/C/A/I/A/F/G/B/C/D/H/E/E/H/C/D/I/A/F/B/G/-1",
"B/G/E/H/C/I/F/A/D/F/H/A/D/B/E/I/C/G/I/C/D/A/G/F/H/B/E/D/A/C/F/H/B/G/E/I/G/E/I/C/D/A/B/F/H/H/F/B/E/I/G/C/D/A/A/B/G/I/E/C/D/H/F/C/D/F/G/A/H/E/I/B/E/I/H/B/F/D/A/G/C/-1",
"F/I/C/D/E/B/H/G/A/A/G/H/F/I/C/B/D/E/D/B/E/H/A/G/F/C/I/I/F/A/C/H/D/G/E/B/E/C/G/A/B/I/D/H/F/H/D/B/G/F/E/A/I/C/B/H/D/E/C/F/I/A/G/C/A/I/B/G/H/E/F/D/G/E/F/I/D/A/C/B/H/-1",
"G/D/E/I/H/C/A/B/F/I/B/A/F/E/D/H/G/C/C/H/F/B/G/A/E/I/D/D/E/I/C/B/G/F/H/A/H/A/C/E/I/F/G/D/B/F/G/B/D/A/H/I/C/E/E/I/H/A/C/B/D/F/G/B/F/G/H/D/E/C/A/I/A/C/D/G/F/I/B/E/H/-1",
"A/E/B/I/H/F/D/G/C/G/C/H/D/A/B/I/E/F/F/I/D/G/E/C/B/A/H/E/F/A/C/B/G/H/D/I/H/D/I/E/F/A/G/C/B/B/G/C/H/D/I/E/F/A/I/B/G/A/C/E/F/H/D/D/A/F/B/G/H/C/I/E/C/H/E/F/I/D/A/B/G/-1",
"I/F/C/E/B/G/H/A/D/H/A/G/D/F/C/I/B/E/B/E/D/H/A/I/F/C/G/A/C/E/B/H/D/G/F/I/F/I/B/G/E/A/C/D/H/D/G/H/C/I/F/A/E/B/E/B/F/A/G/H/D/I/C/G/D/I/F/C/E/B/H/A/C/H/A/I/D/B/E/G/F/-1",
"C/A/G/I/F/H/B/D/E/D/E/H/C/B/G/F/I/A/F/B/I/A/D/E/G/H/C/G/I/B/F/C/A/H/E/D/H/D/A/E/G/I/C/F/B/E/C/F/B/H/D/A/G/I/I/F/D/H/A/C/E/B/G/B/G/C/D/E/F/I/A/H/A/H/E/G/I/B/D/C/F/-1",
"B/E/G/D/I/A/H/F/C/F/H/A/E/C/B/I/G/D/D/I/C/G/H/F/E/B/A/E/C/B/F/G/H/D/A/I/I/A/H/B/E/D/F/C/G/G/F/D/C/A/I/B/H/E/A/B/I/H/D/G/C/E/F/C/D/F/A/B/E/G/I/H/H/G/E/I/F/C/A/D/B/-1",
"A/B/E/I/F/D/H/G/C/C/F/I/G/E/H/D/B/A/G/H/D/C/B/A/E/F/I/H/G/F/B/A/C/I/D/E/E/D/A/H/I/G/F/C/B/I/C/B/F/D/E/G/A/H/D/E/C/A/G/I/B/H/F/F/I/H/D/C/B/A/E/G/B/A/G/E/H/F/C/I/D/-1",
"B/C/H/D/A/E/F/I/G/F/D/A/I/G/H/E/B/C/G/I/E/B/C/F/D/H/A/D/G/B/C/F/I/H/A/E/E/A/I/H/D/G/C/F/B/C/H/F/A/E/B/G/D/I/A/F/D/G/I/C/B/E/H/H/E/G/F/B/A/I/C/D/I/B/C/E/H/D/A/G/F/-1",
"I/H/B/C/F/D/A/E/G/A/E/D/B/G/I/H/C/F/F/C/G/H/A/E/B/D/I/E/I/C/G/D/B/F/H/A/G/F/H/E/C/A/D/I/B/D/B/A/I/H/F/C/G/E/C/G/I/F/B/H/E/A/D/B/A/E/D/I/C/G/F/H/H/D/F/A/E/G/I/B/C/-1",
"A/E/H/F/G/D/C/I/B/B/G/I/H/E/C/D/F/A/D/C/F/A/B/I/G/H/E/E/A/B/G/D/F/I/C/H/G/I/C/B/A/H/F/E/D/H/F/D/C/I/E/A/B/G/F/H/E/D/C/G/B/A/I/I/B/G/E/F/A/H/D/C/C/D/A/I/H/B/E/G/F/-1",
"E/B/I/A/G/H/C/D/F/C/D/F/E/B/I/H/G/A/H/A/G/C/F/D/E/B/I/F/C/B/H/A/G/I/E/D/D/I/A/F/C/E/B/H/G/G/H/E/D/I/B/A/F/C/B/G/D/I/H/C/F/A/E/A/E/C/B/D/F/G/I/H/I/F/H/G/E/A/D/C/B/-1",
"A/H/B/D/E/G/C/F/I/C/D/I/F/B/A/G/H/E/E/F/G/C/H/I/A/B/D/I/C/F/A/D/E/H/G/B/H/B/E/G/I/F/D/C/A/G/A/D/H/C/B/E/I/F/B/E/C/I/G/D/F/A/H/F/I/H/E/A/C/B/D/G/D/G/A/B/F/H/I/E/C/-1",
"G/F/B/D/I/H/E/C/A/H/C/I/G/A/E/D/B/F/A/E/D/C/B/F/G/H/I/B/D/A/F/C/G/H/I/E/I/H/F/B/E/D/A/G/C/E/G/C/I/H/A/F/D/B/C/A/E/H/G/I/B/F/D/D/B/G/E/F/C/I/A/H/F/I/H/A/D/B/C/E/G/-1",
"B/A/I/E/D/G/C/F/H/C/G/F/H/A/B/I/E/D/E/D/H/C/F/I/G/A/B/H/E/A/D/B/C/F/G/I/I/B/G/F/E/H/A/D/C/F/C/D/G/I/A/H/B/E/A/I/C/B/G/E/D/H/F/D/H/E/A/C/F/B/I/G/G/F/B/I/H/D/E/C/A/-1",
"F/G/E/A/H/I/D/C/B/H/C/D/B/E/F/A/G/I/B/I/A/C/D/G/F/E/H/D/H/I/G/C/E/B/F/A/C/A/F/I/B/H/E/D/G/E/B/G/F/A/D/H/I/C/G/F/H/D/I/A/C/B/E/A/D/B/E/G/C/I/H/F/I/E/C/H/F/B/G/A/D/-1",
"G/B/H/I/F/C/E/A/D/D/A/C/E/G/B/F/I/H/E/F/I/D/A/H/B/G/C/I/C/B/F/H/E/G/D/A/A/D/E/G/C/I/H/B/F/F/H/G/B/D/A/C/E/I/C/I/A/H/B/G/D/F/E/H/G/F/A/E/D/I/C/B/B/E/D/C/I/F/A/H/G/-1",
"F/A/B/H/D/I/E/C/G/C/E/H/B/A/G/F/I/D/D/G/I/E/F/C/B/H/A/E/I/C/D/B/A/G/F/H/B/F/A/G/H/E/C/D/I/G/H/D/C/I/F/A/E/B/H/C/G/A/E/D/I/B/F/I/B/E/F/G/H/D/A/C/A/D/F/I/C/B/H/G/E/-1",
"F/I/B/C/D/G/E/H/A/D/H/C/E/F/A/I/G/B/G/E/A/I/H/B/D/F/C/B/D/I/F/A/C/G/E/H/E/G/F/B/I/H/A/C/D/C/A/H/G/E/D/B/I/F/A/C/E/H/B/I/F/D/G/I/B/G/D/C/F/H/A/E/H/F/D/A/G/E/C/B/I/-1",
"G/A/I/C/F/D/E/B/H/F/E/C/H/G/B/A/I/D/D/B/H/E/I/A/C/F/G/H/F/G/A/C/E/I/D/B/C/D/B/I/H/F/G/E/A/A/I/E/B/D/G/H/C/F/E/H/F/G/B/C/D/A/I/I/C/D/F/A/H/B/G/E/B/G/A/D/E/I/F/H/C/-1",
"F/I/E/B/H/D/G/C/A/A/H/G/E/I/C/D/F/B/B/C/D/F/A/G/H/I/E/E/B/F/G/C/A/I/H/D/H/A/C/D/E/I/B/G/F/D/G/I/H/B/F/E/A/C/G/F/B/C/D/H/A/E/I/C/D/A/I/G/E/F/B/H/I/E/H/A/F/B/C/D/G/-1",
"A/H/D/B/G/C/I/F/E/B/C/F/E/I/D/G/A/H/E/I/G/F/H/A/B/D/C/F/D/B/C/A/I/E/H/G/H/G/E/D/F/B/C/I/A/I/A/C/H/E/G/D/B/F/G/F/H/I/D/E/A/C/B/D/B/A/G/C/F/H/E/I/C/E/I/A/B/H/F/G/D/-1",
"G/I/E/A/C/D/B/H/F/D/F/H/G/B/E/I/A/C/C/A/B/F/I/H/D/G/E/I/G/F/D/E/C/A/B/H/B/C/D/H/A/F/G/E/I/E/H/A/I/G/B/C/F/D/F/B/C/E/D/A/H/I/G/H/D/I/B/F/G/E/C/A/A/E/G/C/H/I/F/D/B/-1",
"I/A/F/C/B/D/H/G/E/D/C/H/A/G/E/B/I/F/B/G/E/H/I/F/C/D/A/C/F/I/D/E/G/A/H/B/E/H/G/B/A/I/D/F/C/A/D/B/F/C/H/I/E/G/F/I/C/G/H/A/E/B/D/H/B/D/E/F/C/G/A/I/G/E/A/I/D/B/F/C/H/-1",
"A/D/B/I/F/H/G/E/C/C/I/G/D/E/A/H/F/B/E/H/F/B/C/G/D/A/I/D/A/E/F/H/B/I/C/G/G/C/H/A/I/E/B/D/F/F/B/I/G/D/C/A/H/E/H/F/A/C/B/I/E/G/D/I/E/D/H/G/F/C/B/A/B/G/C/E/A/D/F/I/H/-1",
"I/H/C/F/B/E/A/G/D/E/G/B/A/D/H/C/F/I/A/D/F/I/C/G/H/E/B/D/A/I/G/E/B/F/C/H/H/F/G/C/A/I/B/D/E/B/C/E/D/H/F/G/I/A/C/B/D/E/F/A/I/H/G/G/E/H/B/I/C/D/A/F/F/I/A/H/G/D/E/B/C/-1",
"F/D/C/H/E/I/G/B/A/I/H/B/G/D/A/C/E/F/E/A/G/F/B/C/D/H/I/H/G/A/C/I/E/F/D/B/B/E/F/A/H/D/I/G/C/D/C/I/B/F/G/E/A/H/C/I/D/E/A/H/B/F/G/A/F/E/I/G/B/H/C/D/G/B/H/D/C/F/A/I/E/-1",
"H/B/G/D/F/I/E/C/A/C/E/F/B/A/G/D/I/H/D/I/A/H/C/E/B/G/F/A/F/D/G/E/C/I/H/B/B/C/I/A/D/H/F/E/G/G/H/E/F/I/B/C/A/D/F/A/C/I/H/D/G/B/E/E/G/H/C/B/F/A/D/I/I/D/B/E/G/A/H/F/C/-1",
"H/B/C/I/E/F/G/A/D/A/D/F/B/C/G/I/E/H/G/I/E/A/D/H/C/B/F/C/G/B/H/A/D/E/F/I/I/H/A/G/F/E/B/D/C/F/E/D/C/I/B/A/H/G/D/A/I/E/H/C/F/G/B/E/F/G/D/B/I/H/C/A/B/C/H/F/G/A/D/I/E/-1",
"C/B/D/E/F/I/A/G/H/G/A/F/C/D/H/B/I/E/H/I/E/G/B/A/F/C/D/B/F/C/H/G/D/E/A/I/A/E/I/B/C/F/D/H/G/D/G/H/A/I/E/C/B/F/I/C/A/D/E/G/H/F/B/F/D/B/I/H/C/G/E/A/E/H/G/F/A/B/I/D/C/-1",
"E/B/D/I/H/G/F/C/A/H/G/A/C/D/F/B/E/I/I/F/C/A/B/E/G/H/D/A/H/B/D/E/I/C/F/G/C/D/G/H/F/B/I/A/E/F/I/E/G/C/A/D/B/H/G/A/H/F/I/C/E/D/B/D/E/F/B/G/H/A/I/C/B/C/I/E/A/D/H/G/F/-1",
"I/G/D/H/E/B/A/F/C/H/F/E/I/C/A/B/D/G/B/A/C/G/F/D/H/E/I/A/E/F/B/G/H/I/C/D/C/D/H/F/I/E/G/A/B/G/B/I/A/D/C/E/H/F/F/C/B/E/H/I/D/G/A/D/H/A/C/B/G/F/I/E/E/I/G/D/A/F/C/B/H/-1",
"E/I/F/A/D/H/B/C/G/B/G/C/E/F/I/H/D/A/D/H/A/C/B/G/I/E/F/C/E/H/G/A/B/F/I/D/F/A/D/I/C/E/G/H/B/G/B/I/D/H/F/E/A/C/I/C/E/B/G/D/A/F/H/A/F/B/H/E/C/D/G/I/H/D/G/F/I/A/C/B/E/-1",
"H/E/A/D/B/C/F/G/I/C/G/I/E/F/H/A/B/D/B/D/F/G/I/A/E/C/H/A/F/E/H/G/I/C/D/B/I/H/C/B/E/D/G/A/F/G/B/D/A/C/F/H/I/E/E/I/H/C/A/B/D/F/G/F/C/G/I/D/E/B/H/A/D/A/B/F/H/G/I/E/C/-1",
"A/I/C/G/E/D/H/B/F/H/F/G/I/A/B/D/C/E/B/D/E/C/F/H/A/I/G/C/H/D/E/G/F/I/A/B/I/E/F/A/B/C/G/D/H/G/B/A/D/H/I/F/E/C/E/A/H/B/I/G/C/F/D/D/G/I/F/C/E/B/H/A/F/C/B/H/D/A/E/G/I/-1",
"I/G/E/A/B/F/D/C/H/C/H/F/D/G/E/A/I/B/B/A/D/C/H/I/E/G/F/D/C/G/E/I/B/F/H/A/H/B/I/F/C/A/G/D/E/E/F/A/H/D/G/C/B/I/A/D/H/B/E/C/I/F/G/F/I/C/G/A/H/B/E/D/G/E/B/I/F/D/H/A/C/-1",
"G/I/B/D/E/A/H/C/F/D/C/F/G/H/B/E/I/A/A/E/H/F/I/C/G/D/B/B/H/G/C/D/E/A/F/I/I/A/C/H/F/G/D/B/E/F/D/E/A/B/I/C/G/H/H/F/A/I/G/D/B/E/C/C/B/D/E/A/F/I/H/G/E/G/I/B/C/H/F/A/D/-1",
"E/A/C/D/H/F/I/G/B/D/B/G/C/E/I/F/H/A/I/H/F/G/B/A/C/E/D/H/F/I/E/A/D/B/C/G/G/D/A/B/C/H/E/I/F/B/C/E/I/F/G/D/A/H/F/E/B/H/G/C/A/D/I/A/I/H/F/D/E/G/B/C/C/G/D/A/I/B/H/F/E/-1",
"G/B/E/H/I/A/C/F/D/D/I/F/C/B/G/H/A/E/H/A/C/F/E/D/G/I/B/I/H/G/D/C/B/F/E/A/F/D/A/I/H/E/B/C/G/C/E/B/A/G/F/I/D/H/E/F/H/G/A/C/D/B/I/B/G/D/E/F/I/A/H/C/A/C/I/B/D/H/E/G/F/-1",
"C/H/E/D/B/A/I/F/G/F/G/D/I/C/H/E/B/A/A/I/B/F/E/G/H/C/D/I/A/C/G/F/D/B/E/H/B/D/H/E/I/C/G/A/F/E/F/G/H/A/B/D/I/C/D/E/A/C/G/I/F/H/B/H/B/F/A/D/E/C/G/I/G/C/I/B/H/F/A/D/E/-1",
"D/F/I/C/A/B/G/E/H/A/B/E/G/D/H/I/C/F/H/C/G/I/E/F/D/B/A/C/H/B/A/F/G/E/D/I/G/A/D/B/I/E/F/H/C/I/E/F/D/H/C/A/G/B/F/G/C/E/B/I/H/A/D/E/D/H/F/C/A/B/I/G/B/I/A/H/G/D/C/F/E/-1",
"A/G/E/H/D/I/F/B/C/B/F/C/G/E/A/D/I/H/H/I/D/B/C/F/A/G/E/I/E/F/C/H/B/G/A/D/C/D/A/I/G/E/B/H/F/G/B/H/F/A/D/C/E/I/E/A/G/D/F/H/I/C/B/D/H/I/A/B/C/E/F/G/F/C/B/E/I/G/H/D/A/-1",
"H/G/D/C/B/A/I/F/E/I/B/E/D/F/G/H/A/C/C/F/A/E/I/H/D/B/G/A/D/H/G/E/I/F/C/B/F/E/C/A/H/B/G/D/I/G/I/B/F/C/D/A/E/H/D/A/I/B/G/C/E/H/F/B/H/F/I/A/E/C/G/D/E/C/G/H/D/F/B/I/A/-1",
"I/B/H/G/D/A/E/F/C/F/C/A/I/E/B/D/H/G/D/G/E/C/H/F/B/A/I/E/D/B/F/A/I/C/G/H/H/A/F/E/G/C/I/B/D/C/I/G/H/B/D/F/E/A/A/H/I/D/F/E/G/C/B/B/E/C/A/I/G/H/D/F/G/F/D/B/C/H/A/I/E/-1",
"B/E/G/A/H/F/D/I/C/I/D/A/G/C/B/E/H/F/H/F/C/D/I/E/B/A/G/A/C/F/I/B/H/G/E/D/G/H/B/E/A/D/C/F/I/E/I/D/F/G/C/H/B/A/C/A/I/B/E/G/F/D/H/D/B/H/C/F/A/I/G/E/F/G/E/H/D/I/A/C/B/-1",
"A/E/D/C/H/I/G/B/F/I/H/B/F/E/G/C/A/D/G/C/F/D/A/B/H/E/I/B/D/A/E/C/F/I/H/G/E/I/C/B/G/H/F/D/A/H/F/G/I/D/A/E/C/B/D/B/E/G/I/C/A/F/H/C/A/I/H/F/D/B/G/E/F/G/H/A/B/E/D/I/C/-1",
"B/F/C/A/I/H/E/D/G/E/D/G/F/C/B/I/H/A/H/A/I/D/G/E/B/F/C/G/I/F/C/B/D/A/E/H/D/E/H/I/A/G/F/C/B/A/C/B/E/H/F/G/I/D/I/B/E/G/D/C/H/A/F/C/H/A/B/F/I/D/G/E/F/G/D/H/E/A/C/B/I/-1",
"E/I/F/D/B/G/C/H/A/A/C/G/F/H/E/B/D/I/D/B/H/C/I/A/G/F/E/I/G/E/A/C/H/D/B/F/B/A/C/E/D/F/H/I/G/F/H/D/I/G/B/A/E/C/C/D/B/G/E/I/F/A/H/H/F/I/B/A/C/E/G/D/G/E/A/H/F/D/I/C/B/-1",
"I/E/B/H/C/A/G/F/D/H/F/G/D/I/B/A/E/C/C/D/A/G/F/E/B/I/H/B/G/D/C/A/I/E/H/F/F/H/E/B/D/G/I/C/A/A/C/I/E/H/F/D/B/G/D/B/F/I/G/C/H/A/E/E/A/H/F/B/D/C/G/I/G/I/C/A/E/H/F/D/B/-1",
"B/E/F/G/D/H/C/A/I/C/A/D/E/I/B/H/F/G/I/H/G/F/C/A/E/D/B/A/C/I/D/B/E/G/H/F/D/F/H/I/G/C/A/B/E/G/B/E/A/H/F/I/C/D/E/G/B/H/A/D/F/I/C/H/I/C/B/F/G/D/E/A/F/D/A/C/E/I/B/G/H/-1",
"B/G/H/I/E/A/D/C/F/D/A/F/G/C/B/H/E/I/I/C/E/F/H/D/B/G/A/H/I/C/B/F/G/A/D/E/G/D/A/E/I/H/F/B/C/E/F/B/D/A/C/I/H/G/F/H/D/A/G/E/C/I/B/C/E/I/H/B/F/G/A/D/A/B/G/C/D/I/E/F/H/-1",
"D/G/C/H/B/E/I/F/A/I/B/E/A/F/G/C/H/D/A/H/F/D/I/C/E/G/B/G/D/A/F/C/I/B/E/H/C/E/B/G/D/H/A/I/F/F/I/H/E/A/B/D/C/G/B/C/G/I/H/D/F/A/E/E/F/D/C/G/A/H/B/I/H/A/I/B/E/F/G/D/C/-1",
"A/G/D/F/B/H/E/C/I/B/C/E/I/G/A/F/H/D/F/H/I/E/D/C/A/G/B/C/D/G/B/I/E/H/A/F/I/F/A/D/H/G/C/B/E/E/B/H/A/C/F/I/D/G/G/E/F/C/A/B/D/I/H/H/I/C/G/E/D/B/F/A/D/A/B/H/F/I/G/E/C/-1",
"B/D/F/A/H/G/E/I/C/C/E/I/F/D/B/A/G/H/A/G/H/E/C/I/F/D/B/F/C/B/G/E/D/H/A/I/E/H/G/I/A/C/B/F/D/I/A/D/B/F/H/C/E/G/G/I/A/C/B/E/D/H/F/H/B/E/D/G/F/I/C/A/D/F/C/H/I/A/G/B/E/-1",
"D/E/B/C/F/A/G/I/H/G/A/F/H/I/E/C/D/B/C/H/I/B/D/G/E/A/F/H/B/C/F/A/D/I/G/E/A/G/E/I/H/C/B/F/D/I/F/D/G/E/B/H/C/A/E/C/H/A/G/F/D/B/I/B/D/A/E/C/I/F/H/G/F/I/G/D/B/H/A/E/C/-1",
"I/A/C/H/E/F/G/B/D/F/B/G/A/D/C/H/E/I/H/D/E/G/B/I/F/C/A/C/G/F/I/A/D/E/H/B/E/I/D/B/F/H/A/G/C/B/H/A/E/C/G/D/I/F/D/C/I/F/G/E/B/A/H/A/E/H/D/I/B/C/F/G/G/F/B/C/H/A/I/D/E/-1",
"B/G/D/F/H/A/C/I/E/E/A/I/B/C/G/F/D/H/F/C/H/D/I/E/B/A/G/C/E/F/H/G/D/I/B/A/I/H/G/A/B/F/E/C/D/A/D/B/I/E/C/G/H/F/G/I/E/C/D/H/A/F/B/D/F/C/E/A/B/H/G/I/H/B/A/G/F/I/D/E/C/-1",
"H/G/C/E/A/D/I/F/B/A/B/F/C/I/H/G/D/E/I/D/E/G/B/F/C/H/A/B/A/G/F/C/I/D/E/H/E/F/I/D/H/B/A/C/G/D/C/H/A/G/E/B/I/F/C/H/D/B/F/A/E/G/I/F/E/A/I/D/G/H/B/C/G/I/B/H/E/C/F/A/D/-1",
"H/E/A/D/G/F/C/B/I/C/G/I/E/B/H/A/F/D/B/D/F/C/I/A/E/G/H/G/F/C/B/H/D/I/A/E/I/H/E/F/A/G/B/D/C/A/B/D/I/E/C/G/H/F/F/A/G/H/C/E/D/I/B/D/C/B/A/F/I/H/E/G/E/I/H/G/D/B/F/C/A/-1",
"F/A/D/E/C/G/H/I/B/I/B/E/D/H/F/G/C/A/G/H/C/A/B/I/E/F/D/E/D/B/H/I/A/C/G/F/C/F/G/B/D/E/I/A/H/A/I/H/F/G/C/D/B/E/B/E/I/C/F/H/A/D/G/D/G/A/I/E/B/F/H/C/H/C/F/G/A/D/B/E/I/-1",
"G/A/D/E/F/C/I/H/B/E/F/C/B/I/H/G/A/D/I/B/H/G/A/D/F/C/E/A/D/E/H/G/B/C/F/I/F/C/G/I/E/A/D/B/H/B/H/I/C/D/F/E/G/A/D/I/B/F/H/G/A/E/C/C/G/A/D/B/E/H/I/F/H/E/F/A/C/I/B/D/G/-1",
"E/F/B/I/D/C/H/G/A/G/H/I/E/A/F/B/D/C/C/D/A/G/H/B/E/I/F/F/G/H/C/I/A/D/B/E/B/C/D/H/G/E/A/F/I/A/I/E/F/B/D/C/H/G/I/B/G/A/E/H/F/C/D/D/E/C/B/F/G/I/A/H/H/A/F/D/C/I/G/E/B/-1",
"F/D/B/G/A/H/I/C/E/G/C/I/E/B/D/F/H/A/A/E/H/C/I/F/D/G/B/E/B/C/D/F/G/A/I/H/I/A/F/H/C/B/E/D/G/D/H/G/A/E/I/B/F/C/C/G/A/I/D/E/H/B/F/B/I/E/F/H/C/G/A/D/H/F/D/B/G/A/C/E/I/-1",
"H/C/D/F/B/E/I/G/A/A/I/E/D/G/C/F/B/H/B/F/G/I/A/H/C/E/D/G/D/F/B/I/A/H/C/E/I/H/C/E/D/G/A/F/B/E/A/B/C/H/F/D/I/G/D/B/H/G/C/I/E/A/F/F/G/I/A/E/D/B/H/C/C/E/A/H/F/B/G/D/I/-1",
"F/C/G/A/D/E/H/B/I/H/B/A/G/I/F/E/C/D/E/I/D/B/H/C/A/G/F/I/D/H/F/A/G/C/E/B/B/A/C/D/E/H/F/I/G/G/E/F/C/B/I/D/H/A/C/G/E/I/F/D/B/A/H/D/H/B/E/G/A/I/F/C/A/F/I/H/C/B/G/D/E/-1",
"D/A/F/E/G/B/H/C/I/B/H/C/I/F/D/A/G/E/I/E/G/H/A/C/B/D/F/C/I/E/F/H/A/G/B/D/H/D/B/G/C/E/F/I/A/F/G/A/B/D/I/E/H/C/G/F/I/C/E/H/D/A/B/A/C/H/D/B/F/I/E/G/E/B/D/A/I/G/C/F/H/-1",
"B/A/C/I/D/F/H/E/G/F/G/I/E/A/H/C/D/B/H/D/E/C/G/B/A/F/I/A/I/B/G/H/E/D/C/F/G/E/F/D/I/C/B/A/H/C/H/D/B/F/A/G/I/E/D/B/A/H/E/I/F/G/C/I/C/G/F/B/D/E/H/A/E/F/H/A/C/G/I/B/D/-1",
"E/C/G/I/A/D/F/B/H/H/B/D/C/E/F/A/I/G/I/A/F/G/H/B/D/C/E/D/H/A/E/C/I/G/F/B/F/G/I/H/B/A/C/E/D/B/E/C/F/D/G/H/A/I/A/D/E/B/F/H/I/G/C/C/I/H/A/G/E/B/D/F/G/F/B/D/I/C/E/H/A/-1",
"I/F/H/E/G/D/C/B/A/B/A/G/I/F/C/H/E/D/D/C/E/H/A/B/F/G/I/A/B/I/G/E/H/D/F/C/F/E/D/B/C/A/I/H/G/H/G/C/F/D/I/B/A/E/G/H/B/C/I/E/A/D/F/C/D/F/A/H/G/E/I/B/E/I/A/D/B/F/G/C/H/-1",
"E/G/D/I/H/C/B/A/F/I/A/B/G/F/D/H/E/C/C/H/F/B/E/A/G/D/I/A/F/G/H/C/B/E/I/D/B/E/C/F/D/I/A/G/H/H/D/I/E/A/G/C/F/B/G/B/H/A/I/F/D/C/E/D/I/E/C/G/H/F/B/A/F/C/A/D/B/E/I/H/G/-1",
"D/C/F/E/G/I/B/A/H/A/H/I/B/C/F/E/D/G/G/E/B/H/A/D/I/C/F/I/B/A/D/E/G/F/H/C/C/F/H/I/B/A/G/E/D/E/D/G/C/F/H/A/I/B/F/I/D/G/H/E/C/B/A/H/A/C/F/I/B/D/G/E/B/G/E/A/D/C/H/F/I/-1",
"C/E/H/G/A/D/B/I/F/G/A/D/I/F/B/C/H/E/I/B/F/H/E/C/G/D/A/H/G/E/B/D/F/A/C/I/D/F/C/A/I/E/H/B/G/A/I/B/C/H/G/E/F/D/F/H/G/E/B/I/D/A/C/E/D/A/F/C/H/I/G/B/B/C/I/D/G/A/F/E/H/-1",
"C/G/D/E/A/I/F/H/B/H/F/B/D/G/C/I/A/E/A/E/I/H/B/F/D/C/G/G/A/F/I/H/E/B/D/C/B/C/H/F/D/G/E/I/A/D/I/E/A/C/B/H/G/F/I/B/A/C/E/H/G/F/D/F/D/G/B/I/A/C/E/H/E/H/C/G/F/D/A/B/I/-1",
"G/I/D/C/E/B/H/A/F/C/H/B/A/F/D/I/G/E/A/F/E/I/G/H/B/C/D/D/C/A/B/I/G/E/F/H/H/G/I/E/C/F/D/B/A/B/E/F/D/H/A/G/I/C/F/A/H/G/D/I/C/E/B/I/B/C/H/A/E/F/D/G/E/D/G/F/B/C/A/H/I/-1",
"I/A/E/C/B/H/G/D/F/C/F/H/G/D/I/E/A/B/B/D/G/E/A/F/C/I/H/G/I/B/F/H/D/A/C/E/D/C/F/A/E/B/H/G/I/E/H/A/I/C/G/F/B/D/A/E/D/H/I/C/B/F/G/H/G/I/B/F/A/D/E/C/F/B/C/D/G/E/I/H/A/-1",
"F/A/C/I/H/G/D/B/E/H/B/D/C/E/A/G/I/F/G/E/I/D/F/B/A/H/C/D/I/H/E/G/C/B/F/A/A/C/F/H/B/I/E/G/D/B/G/E/A/D/F/I/C/H/E/F/B/G/A/H/C/D/I/C/D/G/F/I/E/H/A/B/I/H/A/B/C/D/F/E/G/-1",
"H/E/B/C/D/A/G/I/F/D/F/G/I/B/E/H/C/A/C/I/A/H/F/G/E/B/D/G/D/I/B/E/H/F/A/C/E/A/C/D/G/F/B/H/I/B/H/F/A/I/C/D/E/G/I/G/D/E/C/B/A/F/H/A/C/E/F/H/D/I/G/B/F/B/H/G/A/I/C/D/E/-1",
"I/H/E/A/C/B/G/D/F/G/F/D/E/I/H/C/A/B/B/C/A/G/D/F/I/E/H/D/A/C/F/B/I/H/G/E/F/G/I/H/A/E/B/C/D/E/B/H/C/G/D/F/I/A/A/I/B/D/F/G/E/H/C/C/E/F/I/H/A/D/B/G/H/D/G/B/E/C/A/F/I/-1",
"D/I/F/H/G/A/E/B/C/B/A/E/F/C/D/H/G/I/C/G/H/E/I/B/F/D/A/G/H/A/D/B/I/C/F/E/E/C/D/A/F/H/B/I/G/I/F/B/G/E/C/A/H/D/F/B/I/C/D/E/G/A/H/H/E/G/I/A/F/D/C/B/A/D/C/B/H/G/I/E/F/-1",
"D/G/F/E/B/A/C/H/I/E/H/C/F/G/I/D/B/A/B/I/A/H/C/D/G/F/E/A/E/H/C/I/B/F/D/G/I/F/G/A/D/H/B/E/C/C/B/D/G/E/F/I/A/H/H/C/I/D/F/E/A/G/B/F/A/B/I/H/G/E/C/D/G/D/E/B/A/C/H/I/F/-1",
"A/I/C/G/H/E/B/D/F/B/G/D/A/F/C/I/H/E/E/H/F/I/D/B/C/G/A/G/C/B/F/E/H/A/I/D/D/A/I/C/B/G/E/F/H/F/E/H/D/A/I/G/B/C/C/B/A/H/I/D/F/E/G/H/F/E/B/G/A/D/C/I/I/D/G/E/C/F/H/A/B/-1",
"A/E/I/F/G/D/H/C/B/H/C/B/A/I/E/F/D/G/D/G/F/C/B/H/I/E/A/B/I/E/G/F/A/C/H/D/C/F/A/D/H/B/G/I/E/G/D/H/E/C/I/B/A/F/I/B/D/H/E/F/A/G/C/F/A/G/I/D/C/E/B/H/E/H/C/B/A/G/D/F/I/-1",
"B/H/A/I/F/G/C/D/E/F/E/C/H/D/B/I/G/A/G/D/I/C/E/A/B/F/H/D/I/B/G/H/C/A/E/F/E/C/F/D/A/I/H/B/G/A/G/H/F/B/E/D/I/C/H/A/D/B/G/F/E/C/I/C/F/E/A/I/D/G/H/B/I/B/G/E/C/H/F/A/D/-1",
"F/H/D/C/B/I/E/A/G/G/E/A/H/F/D/C/I/B/B/C/I/E/G/A/H/F/D/A/G/B/F/E/C/D/H/I/I/F/C/B/D/H/G/E/A/E/D/H/A/I/G/B/C/F/C/B/E/G/A/F/I/D/H/D/A/G/I/H/E/F/B/C/H/I/F/D/C/B/A/G/E/-1",
"C/D/F/A/E/G/B/I/H/A/B/E/I/H/D/G/C/F/H/G/I/F/B/C/E/A/D/E/C/A/H/I/F/D/B/G/G/H/B/D/A/E/C/F/I/F/I/D/G/C/B/H/E/A/B/F/G/C/D/I/A/H/E/I/E/H/B/G/A/F/D/C/D/A/C/E/F/H/I/G/B/-1",
"A/C/F/E/H/D/I/G/B/G/I/B/C/F/A/D/H/E/H/D/E/I/B/G/A/C/F/C/G/D/B/E/I/F/A/H/E/F/A/H/G/C/B/D/I/B/H/I/D/A/F/C/E/G/D/B/H/A/I/E/G/F/C/I/A/G/F/C/H/E/B/D/F/E/C/G/D/B/H/I/A/-1",
"H/A/I/B/F/C/E/D/G/D/C/E/G/H/A/B/I/F/F/B/G/I/D/E/H/A/C/I/H/B/C/G/F/A/E/D/G/F/A/D/E/H/C/B/I/C/E/D/A/B/I/F/G/H/E/I/F/H/A/D/G/C/B/A/G/C/F/I/B/D/H/E/B/D/H/E/C/G/I/F/A/-1",
"I/B/D/F/H/E/C/G/A/H/F/A/G/B/C/I/D/E/E/G/C/I/D/A/H/B/F/C/D/H/E/A/F/G/I/B/G/A/I/H/C/B/E/F/D/F/E/B/D/I/G/A/H/C/A/I/E/B/G/D/F/C/H/B/H/F/C/E/I/D/A/G/D/C/G/A/F/H/B/E/I/-1",
"D/E/I/C/H/F/G/B/A/B/A/H/G/I/D/E/C/F/F/C/G/A/E/B/I/D/H/A/H/B/E/F/I/C/G/D/C/D/E/H/A/G/B/F/I/I/G/F/B/D/C/A/H/E/E/B/A/D/C/H/F/I/G/G/I/D/F/B/A/H/E/C/H/F/C/I/G/E/D/A/B/-1",
"F/B/E/I/D/G/H/A/C/D/C/I/F/H/A/B/G/E/A/G/H/B/C/E/D/F/I/E/I/F/D/B/H/A/C/G/G/A/D/E/F/C/I/H/B/C/H/B/G/A/I/E/D/F/H/E/A/C/I/F/G/B/D/I/D/C/H/G/B/F/E/A/B/F/G/A/E/D/C/I/H/-1",
"A/C/F/D/G/E/H/B/I/E/B/I/C/H/A/G/F/D/H/D/G/I/B/F/C/E/A/G/H/A/B/D/I/E/C/F/C/F/B/E/A/G/I/D/H/D/I/E/F/C/H/B/A/G/I/E/C/H/F/D/A/G/B/B/G/D/A/I/C/F/H/E/F/A/H/G/E/B/D/I/C/-1",
"H/A/I/B/G/C/D/F/E/B/F/E/I/D/A/C/H/G/D/G/C/H/E/F/B/A/I/E/D/G/F/B/I/H/C/A/F/H/A/E/C/D/I/G/B/I/C/B/A/H/G/F/E/D/G/B/H/D/F/E/A/I/C/A/E/D/C/I/H/G/B/F/C/I/F/G/A/B/E/D/H/-1",
"G/H/D/F/I/C/B/A/E/C/B/I/D/E/A/G/F/H/F/E/A/G/H/B/C/I/D/B/F/G/H/C/I/E/D/A/A/I/E/B/G/D/F/H/C/H/D/C/A/F/E/I/G/B/D/C/H/I/B/F/A/E/G/E/G/F/C/A/H/D/B/I/I/A/B/E/D/G/H/C/F/-1",
"I/B/E/G/C/H/F/A/D/C/A/D/E/F/I/B/H/G/G/H/F/D/A/B/E/C/I/H/C/G/I/B/A/D/E/F/D/F/I/H/E/C/G/B/A/A/E/B/F/D/G/C/I/H/E/D/A/C/H/F/I/G/B/B/I/C/A/G/D/H/F/E/F/G/H/B/I/E/A/D/C/-1",
"G/E/D/A/I/C/B/H/F/B/I/H/D/F/E/A/G/C/C/F/A/G/B/H/I/D/E/D/H/G/C/E/A/F/I/B/E/C/B/F/G/I/D/A/H/F/A/I/H/D/B/C/E/G/I/B/F/E/H/D/G/C/A/A/G/E/I/C/F/H/B/D/H/D/C/B/A/G/E/F/I/-1",
"H/G/D/F/E/A/B/C/I/B/I/E/G/H/C/A/F/D/C/A/F/I/D/B/G/E/H/A/H/B/C/I/E/F/D/G/D/C/G/H/B/F/E/I/A/E/F/I/A/G/D/H/B/C/I/D/A/B/F/H/C/G/E/G/B/H/E/C/I/D/A/F/F/E/C/D/A/G/I/H/B/-1",
"E/B/F/H/A/C/D/G/I/D/A/C/B/I/G/E/H/F/H/G/I/E/D/F/A/B/C/C/H/D/F/G/E/I/A/B/B/E/A/D/C/I/G/F/H/F/I/G/A/H/B/C/D/E/I/F/E/G/B/A/H/C/D/A/C/H/I/F/D/B/E/G/G/D/B/C/E/H/F/I/A/-1",
"B/H/F/G/D/C/I/E/A/E/A/C/F/I/H/G/D/B/I/G/D/E/A/B/C/F/H/D/I/A/H/B/G/E/C/F/H/E/G/I/C/F/A/B/D/C/F/B/D/E/A/H/G/I/G/D/E/B/H/I/F/A/C/A/B/I/C/F/E/D/H/G/F/C/H/A/G/D/B/I/E/-1",
"D/I/E/C/B/H/A/G/F/B/G/A/F/D/E/H/I/C/F/H/C/G/A/I/E/B/D/C/B/D/E/H/F/G/A/I/I/F/G/B/C/A/D/H/E/E/A/H/I/G/D/C/F/B/G/E/F/H/I/C/B/D/A/A/C/B/D/F/G/I/E/H/H/D/I/A/E/B/F/C/G/-1",
"C/F/G/E/H/B/A/D/I/A/E/H/I/D/G/C/B/F/B/D/I/A/F/C/H/G/E/I/G/E/F/A/D/B/C/H/F/A/D/B/C/H/E/I/G/H/B/C/G/E/I/F/A/D/D/I/A/H/B/E/G/F/C/E/C/F/D/G/A/I/H/B/G/H/B/C/I/F/D/E/A/-1",
"G/I/E/F/B/D/H/A/C/B/D/C/H/A/I/G/F/E/H/A/F/G/E/C/I/D/B/A/F/B/I/C/E/D/G/H/C/G/H/B/D/F/E/I/A/I/E/D/A/G/H/B/C/F/D/C/G/E/F/B/A/H/I/F/B/I/D/H/A/C/E/G/E/H/A/C/I/G/F/B/D/-1",
"F/C/B/E/G/D/A/I/H/H/I/A/F/B/C/G/E/D/D/E/G/A/I/H/C/B/F/B/G/H/D/A/F/I/C/E/E/F/C/I/H/B/D/G/A/I/A/D/C/E/G/H/F/B/G/D/E/H/F/I/B/A/C/C/B/F/G/D/A/E/H/I/A/H/I/B/C/E/F/D/G/-1",
"G/H/A/I/B/D/F/C/E/F/E/D/G/A/C/H/B/I/C/I/B/F/E/H/A/G/D/B/F/H/E/C/G/I/D/A/D/G/E/A/H/I/C/F/B/A/C/I/D/F/B/E/H/G/I/B/C/H/D/A/G/E/F/H/A/F/B/G/E/D/I/C/E/D/G/C/I/F/B/A/H/-1",
"D/G/E/C/B/I/H/F/A/H/C/F/D/G/A/I/B/E/B/A/I/F/H/E/G/D/C/I/B/C/A/E/G/D/H/F/A/F/H/B/D/C/E/I/G/G/E/D/I/F/H/A/C/B/F/I/G/E/C/D/B/A/H/C/H/A/G/I/B/F/E/D/E/D/B/H/A/F/C/G/I/-1",
"H/A/G/C/I/E/F/D/B/D/B/C/F/A/H/I/G/E/I/E/F/D/B/G/A/C/H/A/D/I/H/G/B/C/E/F/F/C/E/A/D/I/B/H/G/G/H/B/E/C/F/D/I/A/B/I/H/G/F/D/E/A/C/E/F/A/I/H/C/G/B/D/C/G/D/B/E/A/H/F/I/-1",
"H/D/E/A/F/G/I/B/C/A/B/F/C/H/I/D/G/E/G/I/C/B/E/D/A/H/F/I/C/G/E/A/B/F/D/H/F/H/A/I/D/C/B/E/G/D/E/B/H/G/F/C/I/A/C/F/H/D/I/E/G/A/B/B/A/I/G/C/H/E/F/D/E/G/D/F/B/A/H/C/I/-1",
"F/G/D/A/H/C/B/I/E/I/B/C/G/E/F/D/A/H/E/A/H/I/B/D/C/F/G/C/I/E/H/G/B/F/D/A/H/D/G/F/I/A/E/B/C/B/F/A/C/D/E/H/G/I/D/H/F/E/A/G/I/C/B/A/E/B/D/C/I/G/H/F/G/C/I/B/F/H/A/E/D/-1",
"A/D/F/I/G/E/C/B/H/C/G/B/F/H/A/E/I/D/H/E/I/D/B/C/G/A/F/B/H/D/G/E/I/F/C/A/G/F/A/C/D/H/B/E/I/E/I/C/A/F/B/D/H/G/F/A/H/B/C/G/I/D/E/D/B/E/H/I/F/A/G/C/I/C/G/E/A/D/H/F/B/-1",
"B/F/E/I/C/G/D/H/A/I/A/G/F/H/D/B/C/E/H/C/D/A/E/B/F/I/G/F/E/H/G/B/C/A/D/I/A/D/B/H/I/E/G/F/C/G/I/C/D/A/F/E/B/H/E/B/A/C/D/H/I/G/F/C/G/I/B/F/A/H/E/D/D/H/F/E/G/I/C/A/B/-1",
"C/D/H/F/E/G/A/B/I/A/E/F/H/I/B/G/D/C/B/G/I/A/C/D/F/E/H/E/B/C/D/F/I/H/G/A/G/H/A/C/B/E/I/F/D/I/F/D/G/A/H/B/C/E/H/A/G/B/D/C/E/I/F/D/I/B/E/H/F/C/A/G/F/C/E/I/G/A/D/H/B/-1",
"A/F/I/G/C/D/H/E/B/C/B/H/F/I/E/D/A/G/G/D/E/H/B/A/I/C/F/H/E/C/D/G/I/F/B/A/B/I/A/C/H/F/E/G/D/D/G/F/A/E/B/C/H/I/F/H/G/I/A/C/B/D/E/E/A/D/B/F/H/G/I/C/I/C/B/E/D/G/A/F/H/-1",
"B/A/G/C/E/D/I/F/H/E/D/H/B/F/I/C/G/A/F/I/C/G/A/H/E/D/B/C/G/E/A/D/B/H/I/F/H/F/A/I/C/G/B/E/D/D/B/I/F/H/E/A/C/G/G/H/B/E/I/F/D/A/C/A/E/F/D/B/C/G/H/I/I/C/D/H/G/A/F/B/E/-1",
"G/E/A/B/D/C/I/H/F/F/B/H/I/E/A/D/G/C/D/I/C/H/F/G/B/E/A/H/G/D/E/B/F/A/C/I/I/C/E/A/G/D/H/F/B/A/F/B/C/H/I/E/D/G/C/A/G/D/I/H/F/B/E/E/H/F/G/A/B/C/I/D/B/D/I/F/C/E/G/A/H/-1",
"I/H/C/G/E/D/F/B/A/D/A/G/F/H/B/I/C/E/F/B/E/A/C/I/G/D/H/B/G/F/C/D/A/H/E/I/C/E/I/H/G/F/B/A/D/A/D/H/I/B/E/C/G/F/E/F/B/D/I/C/A/H/G/H/C/A/E/F/G/D/I/B/G/I/D/B/A/H/E/F/C/-1",
"B/C/E/H/G/A/D/F/I/A/D/H/B/F/I/E/C/G/I/F/G/D/E/C/B/H/A/F/A/I/C/B/G/H/D/E/D/G/B/F/H/E/I/A/C/H/E/C/A/I/D/G/B/F/E/B/F/G/C/H/A/I/D/G/H/D/I/A/F/C/E/B/C/I/A/E/D/B/F/G/H/-1",
"A/B/E/D/F/G/H/I/C/G/C/D/A/I/H/B/E/F/F/I/H/B/E/C/G/D/A/D/F/I/C/A/B/E/H/G/B/G/A/F/H/E/D/C/I/H/E/C/I/G/D/A/F/B/E/A/G/H/C/F/I/B/D/C/H/B/G/D/I/F/A/E/I/D/F/E/B/A/C/G/H/-1",
"D/A/H/E/G/F/I/B/C/F/B/I/H/C/D/G/A/E/C/E/G/A/I/B/F/H/D/H/D/B/I/A/E/C/F/G/I/C/F/D/H/G/A/E/B/A/G/E/B/F/C/D/I/H/B/F/C/G/E/I/H/D/A/G/H/D/F/B/A/E/C/I/E/I/A/C/D/H/B/G/F/-1",
"G/F/A/B/E/H/C/I/D/C/H/I/D/G/F/E/A/B/B/D/E/C/A/I/F/G/H/A/I/F/H/B/D/G/E/C/H/E/B/I/C/G/D/F/A/D/G/C/A/F/E/B/H/I/E/B/H/F/D/A/I/C/G/I/C/G/E/H/B/A/D/F/F/A/D/G/I/C/H/B/E/-1",
"C/E/A/D/B/G/F/H/I/F/B/H/E/I/A/D/G/C/I/D/G/F/C/H/B/E/A/D/F/C/B/E/I/G/A/H/A/G/I/C/H/F/E/B/D/B/H/E/A/G/D/C/I/F/H/I/D/G/F/B/A/C/E/E/A/B/H/D/C/I/F/G/G/C/F/I/A/E/H/D/B/-1",
"H/B/D/G/F/I/A/C/E/E/A/C/D/B/H/I/F/G/I/F/G/E/C/A/H/D/B/F/G/I/H/D/C/E/B/A/A/C/E/F/G/B/D/I/H/D/H/B/I/A/E/C/G/F/C/D/F/A/E/G/B/H/I/G/E/H/B/I/D/F/A/C/B/I/A/C/H/F/G/E/D/-1",
"C/H/B/A/F/I/E/G/D/A/I/G/E/D/C/H/F/B/E/D/F/B/H/G/A/I/C/G/C/A/I/E/F/D/B/H/D/F/H/C/A/B/I/E/G/B/E/I/D/G/H/C/A/F/I/A/C/F/B/D/G/H/E/F/G/D/H/I/E/B/C/A/H/B/E/G/C/A/F/D/I/-1",
"D/C/E/B/G/A/H/I/F/F/H/I/D/C/E/A/G/B/A/B/G/I/F/H/E/D/C/I/A/B/E/H/D/C/F/G/H/G/F/C/B/I/D/A/E/E/D/C/G/A/F/B/H/I/C/F/H/A/I/B/G/E/D/G/I/D/H/E/C/F/B/A/B/E/A/F/D/G/I/C/H/-1",
"I/E/C/B/D/F/G/A/H/D/H/G/C/E/A/F/I/B/A/B/F/G/H/I/D/C/E/C/G/D/H/F/B/I/E/A/H/A/E/D/I/G/B/F/C/F/I/B/E/A/C/H/D/G/B/F/H/I/C/E/A/G/D/G/C/A/F/B/D/E/H/I/E/D/I/A/G/H/C/B/F/-1",
"I/E/H/C/B/G/A/F/D/D/G/F/A/H/E/C/I/B/C/B/A/D/I/F/G/E/H/G/H/C/I/D/A/E/B/F/B/A/E/H/F/C/I/D/G/F/D/I/E/G/B/H/A/C/E/I/D/B/C/H/F/G/A/H/F/B/G/A/I/D/C/E/A/C/G/F/E/D/B/H/I/-1",
"H/D/C/I/F/G/A/B/E/F/I/B/A/C/E/H/G/D/A/E/G/B/D/H/I/C/F/E/F/I/D/H/C/G/A/B/B/A/D/F/G/I/E/H/C/C/G/H/E/A/B/F/D/I/D/C/F/H/I/A/B/E/G/G/B/A/C/E/F/D/I/H/I/H/E/G/B/D/C/F/A/-1",
"F/G/A/C/I/E/B/D/H/E/C/H/G/D/B/I/A/F/B/D/I/F/H/A/E/G/C/G/A/F/I/B/C/H/E/D/I/H/E/D/G/F/C/B/A/D/B/C/E/A/H/F/I/G/C/E/D/B/F/G/A/H/I/H/I/B/A/C/D/G/F/E/A/F/G/H/E/I/D/C/B/-1",
"I/E/F/C/B/H/D/A/G/G/D/A/F/E/I/H/C/B/C/H/B/D/G/A/I/F/E/E/I/H/G/A/B/C/D/F/A/F/G/I/C/D/E/B/H/D/B/C/H/F/E/G/I/A/H/C/E/B/I/F/A/G/D/B/G/D/A/H/C/F/E/I/F/A/I/E/D/G/B/H/C/-1",
"E/I/B/D/F/H/A/G/C/G/A/C/E/B/I/H/D/F/F/D/H/A/C/G/E/I/B/C/H/G/B/E/F/D/A/I/I/B/F/H/D/A/C/E/G/D/E/A/I/G/C/B/F/H/H/G/D/C/I/E/F/B/A/B/C/I/F/A/D/G/H/E/A/F/E/G/H/B/I/C/D/-1",
"G/E/H/D/I/C/B/F/A/I/F/D/A/B/H/E/C/G/B/C/A/F/G/E/I/D/H/E/A/C/G/F/D/H/I/B/D/H/B/I/C/A/G/E/F/F/I/G/E/H/B/C/A/D/C/D/F/H/E/G/A/B/I/A/G/E/B/D/I/F/H/C/H/B/I/C/A/F/D/G/E/-1",
"B/H/D/C/F/A/I/E/G/G/F/I/E/H/B/A/D/C/C/A/E/D/I/G/B/H/F/H/C/F/A/D/I/G/B/E/E/B/G/H/C/F/D/I/A/I/D/A/B/G/E/F/C/H/A/I/C/F/E/D/H/G/B/F/G/H/I/B/C/E/A/D/D/E/B/G/A/H/C/F/I/-1",
"H/B/E/C/I/A/G/D/F/F/G/I/D/B/E/H/A/C/D/C/A/H/F/G/B/E/I/G/A/C/I/E/D/F/H/B/B/F/D/G/C/H/A/I/E/I/E/H/B/A/F/C/G/D/C/D/B/A/H/I/E/F/G/A/I/F/E/G/B/D/C/H/E/H/G/F/D/C/I/B/A/-1",
"G/B/D/C/E/A/F/H/I/E/F/C/B/I/H/A/G/D/A/H/I/D/G/F/E/B/C/C/I/H/G/F/D/B/E/A/F/E/A/I/C/B/H/D/G/B/D/G/A/H/E/C/I/F/H/A/B/F/D/I/G/C/E/I/G/E/H/A/C/D/F/B/D/C/F/E/B/G/I/A/H/-1",
"E/A/B/D/C/F/G/H/I/G/H/C/A/B/I/D/E/F/I/D/F/G/H/E/B/A/C/F/E/A/C/D/G/I/B/H/H/G/D/I/E/B/F/C/A/B/C/I/F/A/H/E/G/D/A/B/H/E/F/D/C/I/G/D/I/E/H/G/C/A/F/B/C/F/G/B/I/A/H/D/E/-1",
"A/E/C/D/G/I/F/H/B/G/B/I/C/F/H/A/D/E/F/D/H/A/B/E/G/C/I/I/A/D/B/H/C/E/G/F/E/C/G/F/A/D/I/B/H/B/H/F/E/I/G/D/A/C/C/F/B/G/E/A/H/I/D/D/I/A/H/C/F/B/E/G/H/G/E/I/D/B/C/F/A/-1",
"B/I/A/F/D/C/H/G/E/E/C/G/H/A/B/I/D/F/D/F/H/G/E/I/A/C/B/G/B/F/C/I/H/E/A/D/I/A/E/B/F/D/C/H/G/H/D/C/E/G/A/B/F/I/A/E/B/D/H/F/G/I/C/F/G/I/A/C/E/D/B/H/C/H/D/I/B/G/F/E/A/-1",
"E/C/B/A/G/D/H/I/F/F/I/G/H/B/C/E/A/D/A/H/D/I/E/F/B/C/G/D/F/A/E/H/I/G/B/C/B/G/I/C/D/A/F/E/H/C/E/H/B/F/G/I/D/A/G/D/C/F/I/B/A/H/E/I/A/E/G/C/H/D/F/B/H/B/F/D/A/E/C/G/I/-1",
"A/C/H/B/D/G/E/I/F/B/E/I/A/F/C/H/G/D/F/G/D/E/H/I/A/B/C/C/D/F/G/B/E/I/H/A/I/H/G/D/A/F/B/C/E/E/B/A/I/C/H/D/F/G/D/F/C/H/I/A/G/E/B/H/A/E/F/G/B/C/D/I/G/I/B/C/E/D/F/A/H/-1",
"A/H/F/B/E/G/C/D/I/I/D/E/C/F/H/A/B/G/B/G/C/I/D/A/H/E/F/F/I/G/A/H/B/E/C/D/D/C/A/F/I/E/B/G/H/E/B/H/G/C/D/F/I/A/G/F/I/H/B/C/D/A/E/C/A/D/E/G/F/I/H/B/H/E/B/D/A/I/G/F/C/-1",
"E/D/G/B/H/F/I/A/C/C/I/F/A/G/E/B/D/H/A/H/B/D/C/I/G/F/E/F/E/A/C/D/B/H/I/G/G/C/I/H/E/A/D/B/F/D/B/H/F/I/G/C/E/A/B/A/D/G/F/C/E/H/I/I/F/C/E/B/H/A/G/D/H/G/E/I/A/D/F/C/B/-1",
"H/G/I/D/E/F/B/A/C/B/F/E/C/A/G/H/I/D/D/A/C/H/I/B/F/E/G/C/H/B/A/D/E/G/F/I/F/E/G/I/B/C/A/D/H/A/I/D/F/G/H/C/B/E/G/B/A/E/H/I/D/C/F/I/D/F/G/C/A/E/H/B/E/C/H/B/F/D/I/G/A/-1",
"C/H/I/F/A/B/D/E/G/D/E/F/H/G/I/C/B/A/G/B/A/C/E/D/H/I/F/H/F/E/B/D/A/G/C/I/I/G/D/E/C/H/A/F/B/A/C/B/G/I/F/E/D/H/F/D/G/I/H/E/B/A/C/B/A/H/D/F/C/I/G/E/E/I/C/A/B/G/F/H/D/-1",
"A/C/E/G/I/B/D/H/F/G/B/F/D/H/A/C/I/E/D/H/I/F/C/E/A/B/G/H/I/A/B/E/F/G/C/D/E/F/B/C/G/D/I/A/H/C/G/D/I/A/H/E/F/B/I/E/C/H/F/G/B/D/A/B/A/H/E/D/C/F/G/I/F/D/G/A/B/I/H/E/C/-1",
"E/C/H/F/A/D/I/G/B/I/A/G/H/B/E/D/C/F/D/F/B/I/C/G/A/H/E/G/D/C/B/I/F/E/A/H/A/E/I/D/H/C/B/F/G/B/H/F/G/E/A/C/I/D/H/B/D/A/F/I/G/E/C/C/G/A/E/D/H/F/B/I/F/I/E/C/G/B/H/D/A/-1",
"D/E/A/G/I/C/H/B/F/B/H/F/D/E/A/I/G/C/C/G/I/H/F/B/A/E/D/G/I/B/A/D/H/F/C/E/F/D/C/I/G/E/B/A/H/H/A/E/B/C/F/D/I/G/A/F/G/C/B/D/E/H/I/I/B/D/E/H/G/C/F/A/E/C/H/F/A/I/G/D/B/-1",
"G/D/E/I/B/H/C/F/A/I/C/A/F/E/G/D/B/H/F/B/H/D/C/A/E/G/I/B/E/I/H/F/C/A/D/G/D/H/G/A/I/E/F/C/B/A/F/C/G/D/B/I/H/E/E/I/B/C/G/F/H/A/D/H/G/F/E/A/D/B/I/C/C/A/D/B/H/I/G/E/F/-1",
"H/C/E/B/F/D/A/G/I/I/B/G/E/H/A/F/D/C/F/A/D/C/I/G/E/H/B/A/G/B/D/E/H/I/C/F/C/I/F/G/A/B/D/E/H/D/E/H/I/C/F/G/B/A/G/D/I/F/B/C/H/A/E/E/H/C/A/G/I/B/F/D/B/F/A/H/D/E/C/I/G/-1",
"E/G/F/H/B/C/D/A/I/D/A/B/F/G/I/E/C/H/H/C/I/E/A/D/F/B/G/F/E/C/A/D/H/G/I/B/B/H/G/C/I/E/A/F/D/I/D/A/G/F/B/H/E/C/G/B/D/I/E/A/C/H/F/C/I/E/D/H/F/B/G/A/A/F/H/B/C/G/I/D/E/-1",
"A/D/I/B/E/F/H/G/C/G/H/E/A/I/C/D/F/B/B/F/C/H/D/G/A/E/I/E/A/B/G/F/D/C/I/H/I/C/D/E/A/H/G/B/F/F/G/H/C/B/I/E/A/D/D/B/A/I/H/E/F/C/G/C/I/F/D/G/A/B/H/E/H/E/G/F/C/B/I/D/A/-1",
"C/D/H/B/F/E/A/I/G/I/B/E/A/C/G/D/H/F/A/F/G/I/D/H/E/B/C/B/G/F/C/I/A/H/D/E/H/C/D/E/G/B/F/A/I/E/A/I/F/H/D/C/G/B/D/I/A/G/E/F/B/C/H/G/E/B/H/A/C/I/F/D/F/H/C/D/B/I/G/E/A/-1",
"F/C/B/G/D/I/A/E/H/E/A/G/B/F/H/C/D/I/H/I/D/C/E/A/B/F/G/A/H/E/I/B/D/G/C/F/D/B/C/H/G/F/E/I/A/G/F/I/A/C/E/H/B/D/I/G/F/E/H/B/D/A/C/C/E/A/D/I/G/F/H/B/B/D/H/F/A/C/I/G/E/-1",
"G/C/B/H/I/A/E/D/F/H/F/E/B/D/C/I/A/G/D/A/I/G/E/F/C/H/B/C/I/G/D/H/E/B/F/A/B/D/A/C/F/I/G/E/H/E/H/F/A/B/G/D/I/C/F/E/H/I/C/B/A/G/D/A/B/D/E/G/H/F/C/I/I/G/C/F/A/D/H/B/E/-1",
"B/E/G/C/H/F/A/I/D/C/I/A/E/G/D/B/H/F/D/F/H/B/A/I/C/E/G/G/B/E/D/F/H/I/A/C/I/D/F/A/E/C/G/B/H/A/H/C/G/I/B/D/F/E/F/C/B/H/D/A/E/G/I/E/A/I/F/C/G/H/D/B/H/G/D/I/B/E/F/C/A/-1",
"H/G/E/C/A/D/I/F/B/F/C/D/I/E/B/G/A/H/I/B/A/G/F/H/D/C/E/B/A/H/F/G/C/E/D/I/D/I/G/A/H/E/C/B/F/C/E/F/D/B/I/A/H/G/G/D/C/H/I/F/B/E/A/A/F/B/E/C/G/H/I/D/E/H/I/B/D/A/F/G/C/-1",
"H/C/B/G/A/F/I/E/D/G/F/E/I/B/D/C/H/A/I/D/A/E/C/H/G/B/F/C/E/I/F/H/G/A/D/B/D/B/H/A/I/C/F/G/E/A/G/F/D/E/B/H/I/C/B/H/D/C/G/A/E/F/I/F/I/C/H/D/E/B/A/G/E/A/G/B/F/I/D/C/H/-1",
"I/F/B/A/D/C/E/H/G/G/E/C/F/I/H/A/D/B/D/H/A/G/E/B/F/C/I/B/I/D/E/H/G/C/A/F/E/C/F/D/B/A/G/I/H/A/G/H/I/C/F/B/E/D/C/B/E/H/F/I/D/G/A/H/D/G/B/A/E/I/F/C/F/A/I/C/G/D/H/B/E/-1",
];

let save_data = "";
let save_data_temp = "";
let save_data_string = "";
let symbol = "";
let timer_start = 0;
let question_number = 0;
let time_count = 0;
let time = 0;
let time_best = 0;
let x = 0;
let y = 0;
let input_mode = 0;
var input_address = null;
var table_array = [
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0]
]
var canvas = document.createElement("canvas");
var c = canvas.getContext("2d")
var imglogo = new Image();
var imgerase = new Image();
var imgmemo_off = new Image();
var imgmemo_on = new Image();
var imgload = new Image();
var imgsave = new Image();
var imgtime = new Image();
var imgquestion = new Image();
var imgquestion_0 = new Image();
var imgquestion_1 = new Image();
var imgquestion_2 = new Image();
var imgquestion_3 = new Image();
var imgquestion_4 = new Image();
var imgquestion_5 = new Image();
var imgquestion_6 = new Image();
var imgquestion_7 = new Image();
var imgquestion_8 = new Image();
var imgquestion_9 = new Image();
var imgquestion_colon = new Image();
var imgquestion_n = new Image();
var imgnext_question = new Image();
var imgprevious_question = new Image();
var imgattention_none = new Image();
var imgattention_check1 = new Image();
var imgattention_check2 = new Image();
var imgattention_check3 = new Image();
var imgattention_check4 = new Image();
var imgattention_check5 = new Image();
var imgattention_check6 = new Image();
var imgattention_hint1 = new Image();
var imgcheck = new Image();
var imghint = new Image();
var img0 = new Image();
var img1d = new Image();
var img2d = new Image();
var img3d = new Image();
var img4d = new Image();
var img5d = new Image();
var img6d = new Image();
var img7d = new Image();
var img8d = new Image();
var img9d = new Image();
var img1c = new Image();
var img2c = new Image();
var img3c = new Image();
var img4c = new Image();
var img5c = new Image();
var img6c = new Image();
var img7c = new Image();
var img8c = new Image();
var img9c = new Image();



var img_t = "";
if (localStorage.getItem("save_data") != null)
{
	save_data = localStorage.getItem("save_data");
}
if (localStorage.getItem("question_number3") != null)
{
	question_number = parseInt(localStorage.getItem("question_number3"));
}
if (question_number <= 0 || question_number > 200)
{
	question_number = 1;
}
if (question_number <= 80)
{
	symbol = "p";
}
else if (question_number <= 120)
{
	symbol = "q";
}
else if (question_number <= 160)
{
	symbol = "s";
}
else if (question_number <= 200)
{
	symbol = "u";
}

imglogo.src = "logo.png? raw=true";
imgerase.src = "erase.png? raw=true";
imgmemo_off.src = "memo_off.png? raw=true";
imgmemo_on.src = "memo_on.png? raw=true";
imgload.src = "load.png? raw=true";
imgsave.src = "save.png? raw=true";
imgtime.src = "time.png? raw=true";
imgquestion.src = "time.png? raw=true";
imgquestion_0.src = "question_0.png? raw=true";
imgquestion_1.src = "question_1.png? raw=true";
imgquestion_2.src = "question_2.png? raw=true";
imgquestion_3.src = "question_3.png? raw=true";
imgquestion_4.src = "question_4.png? raw=true";
imgquestion_5.src = "question_5.png? raw=true";
imgquestion_6.src = "question_6.png? raw=true";
imgquestion_7.src = "question_7.png? raw=true";
imgquestion_8.src = "question_8.png? raw=true";
imgquestion_9.src = "question_9.png? raw=true";
imgquestion_colon.src = "question_colon.png? raw=true";
imgquestion_n.src = "question_n.png? raw=true";
imgnext_question.src = "next_question.png? raw=true";
imgprevious_question.src = "previous_question.png? raw=true";
imgattention_none.src = "attention_none.png? raw=true";
imgattention_check1.src = "attention_check1.png? raw=true";
imgattention_check2.src = "attention_check2.png? raw=true";
imgattention_check3.src = "attention_check3.png? raw=true";
imgattention_check4.src = "attention_check4.png? raw=true";
imgattention_check5.src = "attention_check5.png? raw=true";
imgattention_check6.src = "attention_check6.png? raw=true";
imgattention_hint1.src = "attention_hint1.png? raw=true";
imgcheck.src = "check.png? raw=true";
imghint.src = "hint.png? raw=true";
img0.src = "0.png? raw=true";
img1d.src = symbol + "1.png? raw=true";
img2d.src = symbol + "2.png? raw=true";
img3d.src = symbol + "3.png? raw=true";
img4d.src = symbol + "4.png? raw=true";
img5d.src = symbol + "5.png? raw=true";
img6d.src = symbol + "6.png? raw=true";
img7d.src = symbol + "7.png? raw=true";
img8d.src = symbol + "8.png? raw=true";
img9d.src = symbol + "9.png? raw=true";
img1c.src = symbol + "1c.png? raw=true";
img2c.src = symbol + "2c.png? raw=true";
img3c.src = symbol + "3c.png? raw=true";
img4c.src = symbol + "4c.png? raw=true";
img5c.src = symbol + "5c.png? raw=true";
img6c.src = symbol + "6c.png? raw=true";
img7c.src = symbol + "7c.png? raw=true";
img8c.src = symbol + "8c.png? raw=true";
img9c.src = symbol + "9c.png? raw=true";




function table_number_select()
{
	image_sub();
	for (let x = 1; x <= 9; x ++)
	{
		for (let y = 1; y <= 9; y ++)
		{
			if (image_array[(x - 1)][(y - 1)].style.backgroundColor == "rgba(255, 0, 0, 0.05)")
			{
				image_array[(x - 1)][(y - 1)].style.backgroundColor = null;
			}
			number_array[(x - 1)][(y - 1)].style.backgroundColor = null;
		}
	}
	image_sub();
	if (input_address == event.target.id)
	{
		input_address = null;
		input_mode = 0;
	}
	else
	{
		for (let x = 1; x <= 9; x ++)
		{
			number_array[(x - 1)][parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
			number_array[parseInt(document.getElementById(event.target.id).id.substr(10, 2)) - 1][(x - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
		}
		switch (parseInt(document.getElementById(event.target.id).id.substr(10, 2)) - 1)
		{
			case 0:
			case 1:
			case 2:
				switch (parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1)
				{
					case 0:
					case 1:
					case 2:
						for (let x = 1; x <= 3; x ++)
						{
							for (let y = 1; y <= 3; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 3:
					case 4:
					case 5:
						for (let x = 1; x <= 3; x ++)
						{
							for (let y = 4; y <= 6; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 6:
					case 7:
					case 8:
						for (let x = 1; x <= 3; x ++)
						{
							for (let y = 7; y <= 9; y ++)
							{
								number_array[(x - 1)][(y -1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
				}
				break;
			case 3:
			case 4:
			case 5:
				switch (parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1)
				{
					case 0:
					case 1:
					case 2:
						for (let x = 4; x <= 6; x ++)
						{
							for (let y = 1; y <= 3; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 3:
					case 4:
					case 5:
						for (let x = 4; x <= 6; x ++)
						{
							for (let y = 4; y <= 6; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 6:
					case 7:
					case 8:
						for (let x = 4; x <= 6; x ++)
						{
							for (let y = 7; y <= 9; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
				}
				break;
			case 6:
			case 7:
			case 8:
				switch (parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1)
				{
					case 0:
					case 1:
					case 2:
						for (let x = 7; x <= 9; x ++)
						{
							for (let y = 1; y <= 3; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 3:
					case 4:
					case 5:
						for (let x = 7; x <= 9; x ++)
						{
							for (let y = 4; y <= 6; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 6:
					case 7:
					case 8:
						for (let x = 7; x <= 9; x ++)
						{
							for (let y = 7; y <= 9; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
				}
				break;
		}
		for (let x = 1; x <= 9; x ++)
		{
			for (let y = 1; y <= 9; y ++)
			{
				if (table_array[parseInt(document.getElementById(event.target.id).id.substr(10, 2)) - 1][parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1] == table_array[(x - 1)][(y - 1)] && table_array[(x - 1)][(y - 1)] != "abcdefghi")
				{
					number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(255, 0, 255, 0.1)";
				}
			}
		}
		number_array[parseInt(document.getElementById(event.target.id).id.substr(10, 2)) - 1][parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1].style.backgroundColor = "rgba(255, 0, 255, 0.1)";
		input_address = event.target.id;
		input_mode = 1;
	}
}

function table_number_input()
{
	if (input_mode == 1)
	{
		if (document.getElementById("table_test00_0B_image").name == "memo_on")
		{
			if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].length == 1)
			{
				table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
			}
	
			if (document.getElementById(event.target.id) == table_test00_01_image )
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("A") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("a", "A");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("A", "a");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_02_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("B") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("b", "B");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("B", "b");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_03_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("C") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("c", "C");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("C", "c");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_04_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("D") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("d", "D");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("D", "d");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_05_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("E") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("e", "E");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("E", "e");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_06_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("F") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("f", "F");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("F", "f");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_07_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("G") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("g", "G");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("G", "g");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_08_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("H") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("h", "H");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("H", "h");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_09_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("I") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("i", "I");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("I", "i");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_0A_image)
			{
				table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";		
			}
		}
		else
		{
			if (document.getElementById(event.target.id) == table_test00_01_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "A")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "A";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_02_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "B")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "B";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_03_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "C")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "C";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_04_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "D")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "D";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_05_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "E")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "E";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_06_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "F")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "F";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_07_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "G")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "G";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_08_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "H")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "H";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_09_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "I")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "I";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_0A_image)
			{
				table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghi";
			}
		}
	}
	if (document.getElementById(event.target.id) == table_test00_0B_image)
	{
		image_sub();
	}
	table_apply();

	for (let x = 1; x <= 9; x ++)
	{
		for (let y = 1; y <= 9; y ++)
		{
			if (image_array[(x - 1)][(y - 1)].style.backgroundColor == "rgba(255, 0, 0, 0.05)")
			{
				image_array[(x - 1)][(y - 1)].style.backgroundColor = null;
			}
			if (number_array[(x - 1)][(y - 1)].style.backgroundColor != "rgba(0, 255, 0, 0.1)")
			{
				number_array[(x - 1)][(y - 1)].style.backgroundColor = null;
			}
		}
	}
	number_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].style.backgroundColor = "rgba(255, 0, 255, 0.1)";
	for (let x = 1; x <= 9; x ++)
	{
		for (let y = 1; y <= 9; y ++)
		{
			if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == table_array[x - 1][y - 1] && table_array[(x - 1)][(y - 1)] != "abcdefghi")
			{
				number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(255, 0, 255, 0.1)";
			}
		}
	}
}

function table_apply()
{
	for (let x = 1; x <= 9; x ++)
	{
		for (let y = 1; y <= 9; y ++)
		{
			image_main(x, y);
		}
	}
}


function previous_question()
{
	if (question_number > 1)
	{
		question_number = question_number - 1;
	}
	else
	{
		question_number = 200;
	}
	localStorage.setItem("question_number3", question_number);
	window.location.reload();
}

function next_question()
{
	if (question_number < 200)
	{
		question_number = question_number + 1;
	}
	else
	{
		question_number = 1;
	}
	localStorage.setItem("question_number3", question_number);
	window.location.reload();
}

function hint()
{
	if (input_mode == 0)
	{
		image_sub();
	}
	else
	{
		table_array[parseInt(input_address.substr(10, 2)) - 1][parseInt(input_address.substr(13, 2)) - 1] = answer_data[question_number - 1].split("/")[(parseInt(input_address.substr(10, 2) - 1) * 9) + parseInt(input_address.substr(13, 2)) - 1];
		table_apply();
	for (let x = 1; x <= 9; x ++)
	{
		for (let y = 1; y <= 9; y ++)
		{
			if (image_array[(x - 1)][(y - 1)].style.backgroundColor == "rgba(255, 0, 0, 0.05)")
			{
				image_array[(x - 1)][(y - 1)].style.backgroundColor = null;
			}
			if (number_array[(x - 1)][(y - 1)].style.backgroundColor != "rgba(0, 255, 0, 0.1)")
			{
				number_array[(x - 1)][(y - 1)].style.backgroundColor = null;
			}
		}
	}
	number_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].style.backgroundColor = "rgba(255, 0, 255, 0.1)";
	for (let x = 1; x <= 9; x ++)
	{
		for (let y = 1; y <= 9; y ++)
		{
			if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == table_array[x - 1][y - 1] && table_array[(x - 1)][(y - 1)] != "abcdefghi")
			{
				number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(255, 0, 255, 0.1)";
			}
		}
	}	

	}
}

function check()
{
	time_count = 1;
	check_judgement = 0;
	for (let x = 1; x <= 9; x ++)
	{
		for (let y = 1; y <= 9; y ++)
		{
			if (table_array[(x - 1)][(y - 1)].length > 2)
			{
				check_judgement = 2;
			}
			else if (table_array[(x - 1)][(y - 1)] != answer_data[question_number - 1].split("/")[((x - 1) * 9) + (y - 1)])
			{
				if (check_judgement < 2)
				{
					check_judgement = 1;
				}
			}
		}
	}
	image_sub();		
	time_count = 0;
}

function onLoad()
{
	timer_start = window.setInterval(timer, 1000);
	time = 0;
	time_best = parseInt(answer_data[question_number - 1].split("/")[answer_data[question_number - 1].split("/").length - 1]);
	question_array = question_data[question_number - 1].split("/");
	for (let x = 1; x <= 9; x ++)
	{
		for (let y = 1; y <= 9; y ++)
		{
			table_array[(x - 1)][(y - 1)] = question_array[((x - 1) * 9) + (y - 1)];
		}
	}

	for (let x = 1; x <= 9; x ++)
	{
		for (let y = 1; y <= 9; y ++)
		{
			if (table_array[(x - 1)][(y - 1)] == "abcdefghi")
			{
				image_array[(x - 1)][(y - 1)].addEventListener("click", table_number_select);
			}
			else
			{
				image_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 255, 0.1)";
			}
			image_main(x, y);
		}
	}
	image_startup();
}

function load()
{
	save_data_temp = save_data.split("/");
	save_data_string = "";
	let x = 0;
	while (save_data_temp[x] != null)
	{
		if (save_data_temp[x] == question_number.toString().padStart(3, "0"))
		{
			for (let y = 1; y <= 81 + 1; y ++)
			{
				save_data_string = save_data_string + save_data_temp[x + y] + "/";
			}
			save_data_string = save_data_string + save_data_temp[x + 81];
			x = -2;
		}
		x = x + 1;
	}
	if (save_data_string == "")
	{
		image_sub();
	}
	else
	{
		save_array = save_data_string.split("/");
		for (let x = 1; x <= 9; x ++)
		{
			for (let y = 1; y <= 9; y ++)
			{
				table_array[(x - 1)][(y - 1)] = save_array[((x - 1) * 9) + (y - 1)];
			}
		}
		for (let x = 1; x <= 9; x ++)
		{
			for (let y = 1; y <= 9; y ++)
			{
				image_main(x, y);
				if (table_array[(x - 1)][(y - 1)] != "abcdefghi")
				{
					image_array[(x - 1)][(y - 1)].addEventListener("click", table_number_select);
				}
			}
		}
		time = parseInt(save_data_string.split("/")[answer_data[question_number - 1].split("/").length - 1]) - 1;
		timer();
		image_sub();
		for (let x = 1; x <= 9; x ++)
		{
			for (let y = 1; y <= 9; y ++)
			{
				if (image_array[(x - 1)][(y - 1)].style.backgroundColor == "rgba(255, 0, 0, 0.05)")
				{
					image_array[(x - 1)][(y - 1)].style.backgroundColor = null;
				}
				number_array[(x - 1)][(y - 1)].style.backgroundColor = null;
			}
		}
		input_mode = 0;
		input_address = null;
	}
}

function save()
{
	save_data_temp = save_data.split("/");
	save_data_string = "";
	let x = 0;
	while (save_data_temp[x] != null)
	{
		if (save_data_temp[x] == question_number.toString().padStart(3, "0"))
		{
			for (let y = 0; y <= 81; y ++)
			{
				save_data_string = save_data_string + save_data_temp[x + y] + "/";
			}
			save_data_string = save_data_string + save_data_temp[x + 81 + 1];
			x = -2;
		}
		x = x + 1;
	}
	if (save_data_string != "")
	{
		save_data = save_data.replace("/" + save_data_string, "");
	}
	save_data_string = question_number.toString().padStart(3, "0") + "/";
	for (let x = 1; x <= 9; x ++)
	{
		for (let y = 1; y <= 9; y ++)
		{
			save_data_string = save_data_string + table_array[(x - 1)][(y - 1)] + "/";
		}
	}
	save_data_string = save_data_string + time;
	save_data = save_data + "/" + save_data_string;
	localStorage.setItem("save_data", save_data);
	image_sub();
}

function timer()
{
	if (time_count == 0)
	{
		time = time + 1;

	c = document.getElementById("table_test00_0H_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);
	switch ((Math.floor(time / 60) % 60).toString().padStart(2, "0").substr(0, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}


	c = document.getElementById("table_test00_0I_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);
	switch ((Math.floor(time / 60) % 60).toString().padStart(2, "0").substr(1, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}


	c = document.getElementById("table_test00_0K_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);
	switch ((time % 60).toString().padStart(2, "0").substr(0, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}


	c = document.getElementById("table_test00_0L_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);
	switch ((time % 60).toString().padStart(2, "0").substr(1, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}

		c = null;

	}
}

function image_startup()
{

	for (let x = 1; x <= 9; x ++)
	{
		switch (x)
		{
			case 1:
				c = document.getElementById("table_test00_01_image").getContext("2d");
				c.clearRect(0, 0, img1d.width, img1d.height);
				c.drawImage(img1d, 0, 0, img1d.width, img1d.height);
				break;
			case 2:
				c = document.getElementById("table_test00_02_image").getContext("2d");
				c.clearRect(0, 0, img2c.width, img1c.height);
				c.drawImage(img2d, 0, 0, img2d.width, img2d.height);
				break;
			case 3:
				c = document.getElementById("table_test00_03_image").getContext("2d");
				c.clearRect(0, 0, img3c.width, img1c.height);
				c.drawImage(img3d, 0, 0, img3d.width, img3d.height);
				break;
			case 4:
				c = document.getElementById("table_test00_04_image").getContext("2d");
				c.clearRect(0, 0, img4c.width, img4c.height);
				c.drawImage(img4d, 0, 0, img4d.width, img4d.height);
				break;
			case 5:
				c = document.getElementById("table_test00_05_image").getContext("2d");
				c.clearRect(0, 0, img5c.width, img5c.height);
				c.drawImage(img5d, 0, 0, img5d.width, img5d.height);
				break;
			case 6:
				c = document.getElementById("table_test00_06_image").getContext("2d");
				c.clearRect(0, 0, img6c.width, img6c.height);
				c.drawImage(img6d, 0, 0, img6d.width, img6d.height);
				break;
			case 7:
				c = document.getElementById("table_test00_07_image").getContext("2d");
				c.clearRect(0, 0, img7c.width, img7c.height);
				c.drawImage(img7d, 0, 0, img7d.width, img7d.height);
				break;
			case 8:
				c = document.getElementById("table_test00_08_image").getContext("2d");
				c.clearRect(0, 0, img8c.width, img8c.height);
				c.drawImage(img8d, 0, 0, img8d.width, img8d.height);
				break;
			case 9:
				c = document.getElementById("table_test00_09_image").getContext("2d");
				c.clearRect(0, 0, img9c.width, img9c.height);
				c.drawImage(img9d, 0, 0, img9d.width, img9d.height);
				break;
		}
	}
	c = document.getElementById("table_test00_0A_image").getContext("2d");
	c.clearRect(0, 0, imgerase.width, imgerase.height);
	c.drawImage(imgerase, 0, 0, imgerase.width, imgerase.height);
	c = document.getElementById("table_test00_0B_image").getContext("2d");
	c.clearRect(0, 0, imgmemo_off.width, imgmemo_off.height);
	c.drawImage(imgmemo_off, 0, 0, imgmemo_off.width, imgmemo_off.height);
	c = document.getElementById("table_test00_0C_image").getContext("2d");
	c.clearRect(0, 0, imgquestion.width, imgquestion.height);
	c.drawImage(imgquestion, 0, 0, imgquestion.width, imgquestion.height);
	c = document.getElementById("table_test00_0D_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);
	switch (question_number.toString().padStart(3, "0").substr(0, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}


	c = document.getElementById("table_test00_0E_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);
	switch (question_number.toString().padStart(3, "0").substr(1, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}


	c = document.getElementById("table_test00_0F_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);
	switch (question_number.toString().padStart(3, "0").substr(2, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}


	c = document.getElementById("table_test00_0G_image").getContext("2d");
	c.clearRect(0, 0, imgtime.width, imgtime.height);
	c.drawImage(imgtime, 0, 0, imgtime.width, imgtime.height);
	c = document.getElementById("table_test00_0H_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);
	switch ((Math.floor(time / 60) % 60).toString().padStart(2, "0").substr(0, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}

	c = document.getElementById("table_test00_0I_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);

	switch ((Math.floor(time / 60) % 60).toString().padStart(2, "0").substr(1, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}


	c = document.getElementById("table_test00_0J_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_colon.width, imgquestion_colon.height);
	c.drawImage(imgquestion_colon, 0, 0, imgquestion_colon.width, imgquestion_colon.height);
	c = document.getElementById("table_test00_0K_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);

	switch ((time % 60).toString().padStart(2, "0").substr(1, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}


	c = document.getElementById("table_test00_0L_image").getContext("2d");
	c.clearRect(0, 0, imgquestion_0.width, imgquestion_0.height);

	switch ((time % 60).toString().padStart(2, "0").substr(1, 1))
	{
		case "0":
			c.drawImage(imgquestion_0, 0, 0, imgquestion_0.width, imgquestion_0.height);
			break;
		case "1":
			c.drawImage(imgquestion_1, 0, 0, imgquestion_1.width, imgquestion_1.height);
			break;
		case "2":
			c.drawImage(imgquestion_2, 0, 0, imgquestion_2.width, imgquestion_2.height);
			break;
		case "3":
			c.drawImage(imgquestion_3, 0, 0, imgquestion_3.width, imgquestion_3.height);
			break;
		case "4":
			c.drawImage(imgquestion_4, 0, 0, imgquestion_4.width, imgquestion_4.height);
			break;
		case "5":
			c.drawImage(imgquestion_5, 0, 0, imgquestion_5.width, imgquestion_5.height);
			break;
		case "6":
			c.drawImage(imgquestion_6, 0, 0, imgquestion_6.width, imgquestion_6.height);
			break;
		case "7":
			c.drawImage(imgquestion_7, 0, 0, imgquestion_7.width, imgquestion_7.height);
			break;
		case "8":
			c.drawImage(imgquestion_8, 0, 0, imgquestion_8.width, imgquestion_8.height);
			break;
		case "9":
			c.drawImage(imgquestion_9, 0, 0, imgquestion_9.width, imgquestion_9.height);
			break;
	}

	c = document.getElementById("table_test00_0M_image").getContext("2d");
	c.clearRect(0, 0, imgload.width, imgload.height);
	c.drawImage(imgload, 0, 0, imgload.width, imgload.height);
	c = document.getElementById("table_test00_0N_image").getContext("2d");
	c.clearRect(0, 0, imgsave.width, imgsave.height);
	c.drawImage(imgsave, 0, 0, imgsave.width, imgsave.height);
	c = document.getElementById("table_test00_0O_image").getContext("2d");
	c.clearRect(0, 0, imgprevious_question.width, imgprevious_question.height);
	c.drawImage(imgprevious_question, 0, 0, imgprevious_question.width, imgprevious_question.height);
	c = document.getElementById("table_test00_0P_image").getContext("2d");
	c.clearRect(0, 0, imgnext_question.width, imgnext_question.height);
	c.drawImage(imgnext_question, 0, 0, imgnext_question.width, imgnext_question.height);
	c = document.getElementById("table_test00_0Q_image").getContext("2d");
	c.clearRect(0, 0, imghint.width, imghint.height);
	c.drawImage(imghint, 0, 0, imghint.width, imghint.height);
	c = document.getElementById("table_test00_0R_image").getContext("2d");
	c.clearRect(0, 0, imgcheck.width, imgcheck.height);
	c.drawImage(imgcheck, 0, 0, imgcheck.width, imgcheck.height);
	c = document.getElementById("table_test00_0S_image").getContext("2d");
	c.clearRect(0, 0, imgattention_none.width, imgattention_none.height);
	c.drawImage(imgattention_none, 0, 0, imgattention_none.width, imgattention_none.height);
	c = document.getElementById("logo_image").getContext("2d");
	c.clearRect(0, 0, imglogo.width, imglogo.height);
	c.drawImage(imglogo, 0, 0, imglogo.width, imglogo.height);




	c = null;
}

function image_sub()
{
	c = document.getElementById("table_test00_0S_image").getContext("2d");
	c.clearRect(0, 0, imgattention_none.width, imgattention_none.height);
	c.drawImage(imgattention_none, 0, 0, imgattention_none.width, imgattention_none.height);
	switch (event.target.id)
	{
		case "table_test00_0B_image":
			c = document.getElementById("table_test00_0B_image").getContext("2d");
			c.clearRect(0, 0, imgmemo_off.width, imgmemo_off.height);
			if (document.getElementById(event.target.id).name == "memo_on")
			{
				document.getElementById(event.target.id).name = "memo_off";
				c.drawImage(imgmemo_off, 0, 0, imgmemo_off.width, imgmemo_off.height);
			}
			else
			{
				document.getElementById(event.target.id).name = "memo_on";
				c.drawImage(imgmemo_on, 0, 0, imgmemo_on.width, imgmemo_on.height);

			}
			break;
			case "table_test00_0M_image":
				if (save_data_string == "")
				{
					c = document.getElementById("table_test00_0S_image").getContext("2d");
					c.clearRect(0, 0, imgattention_check4.width, imgattention_check4.height);
					c.drawImage(imgattention_check4, 0, 0, imgattention_check4.width, imgattention_check4.height);
				}
				else
				{
					c = document.getElementById("table_test00_0S_image").getContext("2d");
					c.clearRect(0, 0, imgattention_check6.width, imgattention_check6.height);
					c.drawImage(imgattention_check6, 0, 0, imgattention_check6.width, imgattention_check6.height);
				}
			break;
		case "table_test00_0N_image":
			c = document.getElementById("table_test00_0S_image").getContext("2d");
			c.clearRect(0, 0, imgattention_check5.width, imgattention_check5.height);
			c.drawImage(imgattention_check5, 0, 0, imgattention_check5.width, imgattention_check5.height);
			break;

		case "table_test00_0Q_image":
			c = document.getElementById("table_test00_0S_image").getContext("2d");
			c.clearRect(0, 0, imgattention_hint1.width, imgattention_hint1.height);
			c.drawImage(imgattention_hint1, 0, 0, imgattention_hint1.width, imgattention_hint1.height);
			break;

		case "table_test00_0R_image":
			c = document.getElementById("table_test00_0S_image").getContext("2d");
			c.clearRect(0, 0, imgattention_none.width, imgattention_none.height);
			switch (check_judgement)
			{
				case 0:
					c.drawImage(imgattention_check1, 0, 0, imgattention_check1.width, imgattention_check1.height);
					clearInterval(timer_start);
				break;
				case 1:
					c.drawImage(imgattention_check2, 0, 0, imgattention_check2.width, imgattention_check2.height);
				break;
				default:
					c.drawImage(imgattention_check3, 0, 0, imgattention_check3.width, imgattention_check3.height);
				break;
			}
			break;
			
		default:
			break;
	}
	c = null;
}

function image_main(x, y)
{
	c = image_array[(x - 1)][(y - 1)].getContext("2d");
	c.clearRect(0, 0, img1c.width, img1c.height);
	for (let z = 1; z <= table_array[(x - 1)][(y - 1)].length; z ++)
	{	
		if (table_array[(x - 1)][(y - 1)].length == 9)
		{
			switch (table_array[(x - 1)][(y - 1)].substr((z - 1), 1))
			{
				case "A":
					c.drawImage(img1c, img1c.width * (0 / 3), img1c.height * (0 / 3), img1c.width * (1 / 3), img1c.height * (1 / 3));
					break;
				case "B":
					c.drawImage(img2c, img2c.width * (1 / 3), img2c.height * (0 / 3), img2c.width * (1 / 3), img2c.height * (1 / 3));
					break;
				case "C":
					c.drawImage(img3c, img3c.width * (2 / 3), img3c.height * (0 / 3), img3c.width * (1 / 3), img3c.height * (1 / 3));
					break;
				case "D":
					c.drawImage(img4c, img4c.width * (0 / 3), img4c.height * (1 / 3), img4c.width * (1 / 3), img4c.height * (1 / 3));
					break;
				case "E":
					c.drawImage(img5c, img5c.width * (1 / 3), img5c.height * (1 / 3), img5c.width * (1 / 3), img5c.height * (1 / 3));
					break;
				case "F":
					c.drawImage(img6c, img6c.width * (2 / 3), img6c.height * (1 / 3), img6c.width * (1 / 3), img6c.height * (1 / 3));
					break;
				case "G":
					c.drawImage(img7c, img7c.width * (0 / 3), img7c.height * (2 / 3), img7c.width * (1 / 3), img7c.height * (1 / 3));
					break;
				case "H":
					c.drawImage(img8c, img8c.width * (1 / 3), img8c.height * (2 / 3), img8c.width * (1 / 3), img8c.height * (1 / 3));
					break;
				case "I":
					c.drawImage(img9c, img9c.width * (2 / 3), img9c.height * (2 / 3), img9c.width * (1 / 3), img9c.height * (1 / 3));
					break;
			}
		}
		else
		{
			switch (table_array[(x - 1)][(y - 1)].substr((z - 1), 1))
			{
				case "A":
					c.drawImage(img1d, 0, 0, img1d.width, img1d.height);
					break;
				case "B":
					c.drawImage(img2d, 0, 0, img2d.width, img2d.height);
					break;
				case "C":
					c.drawImage(img3d, 0, 0, img3d.width, img3d.height);
					break;
				case "D":
					c.drawImage(img4d, 0, 0, img4d.width, img4d.height);
					break;
				case "E":
					c.drawImage(img5d, 0, 0, img5d.width, img5d.height);
					break;
				case "F":
					c.drawImage(img6d, 0, 0, img6d.width, img6d.height);
					break;
				case "G":
					c.drawImage(img7d, 0, 0, img7d.width, img7d.height);
					break;
				case "H":
					c.drawImage(img8d, 0, 0, img8d.width, img8d.height);
					break;
				case "I":
					c.drawImage(img9d, 0, 0, img9d.width, img9d.height);
					break;
			}
		}
	}
	c = null;
}

window.onload = onLoad;

document.getElementById("table_test00_0S_image").addEventListener("click", table_apply);

table_test00_01_image.addEventListener("click", table_number_input);
table_test00_02_image.addEventListener("click", table_number_input);
table_test00_03_image.addEventListener("click", table_number_input);
table_test00_04_image.addEventListener("click", table_number_input);
table_test00_05_image.addEventListener("click", table_number_input);
table_test00_06_image.addEventListener("click", table_number_input);
table_test00_07_image.addEventListener("click", table_number_input);
table_test00_08_image.addEventListener("click", table_number_input);
table_test00_09_image.addEventListener("click", table_number_input);
table_test00_0A_image.addEventListener("click", table_number_input);
table_test00_0B_image.addEventListener("click", table_number_input);
table_test00_0M_image.addEventListener("click", load);
table_test00_0N_image.addEventListener("click", save);
table_test00_0O_image.addEventListener("click", previous_question);
table_test00_0P_image.addEventListener("click", next_question);
table_test00_0Q_image.addEventListener("click", hint);
table_test00_0R_image.addEventListener("click", check);





