/*numberplaceforbrowser_question_hard*/
/*20241125*/
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
"abcdefghi/E/abcdefghi/C/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/D/H/C/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/-1",
"abcdefghi/I/G/F/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/F/C/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/E/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/-1",
"E/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/F/I/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/G/H/I/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/H/abcdefghi/B/A/abcdefghi/abcdefghi/D/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/I/A/G/H/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/-1",
"abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/F/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/abcdefghi/E/B/F/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/C/G/F/E/abcdefghi/A/abcdefghi/B/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/F/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/G/I/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/G/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/A/abcdefghi/-1",
"abcdefghi/F/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/E/G/E/abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/I/C/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/C/D/abcdefghi/abcdefghi/-1",
"abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/H/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/G/abcdefghi/F/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/-1",
"D/abcdefghi/C/abcdefghi/G/H/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/I/E/abcdefghi/abcdefghi/abcdefghi/D/I/abcdefghi/C/A/-1",
"C/B/abcdefghi/abcdefghi/A/F/D/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/I/-1",
"B/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/E/A/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/-1",
"B/abcdefghi/abcdefghi/abcdefghi/G/I/abcdefghi/A/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/H/F/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/I/A/E/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/-1",
"abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/D/I/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/A/A/abcdefghi/C/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/abcdefghi/G/abcdefghi/F/I/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/D/abcdefghi/E/abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/E/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/F/H/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/G/-1",
"E/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/B/abcdefghi/D/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/C/abcdefghi/H/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/C/B/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/H/-1",
"A/abcdefghi/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/E/G/B/I/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/A/-1",
"abcdefghi/E/abcdefghi/G/A/C/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/I/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/E/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/I/B/A/abcdefghi/D/abcdefghi/F/abcdefghi/-1",
"F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/G/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/E/abcdefghi/C/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/G/H/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/B/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/-1",
"I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/G/B/abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/G/abcdefghi/abcdefghi/-1",
"B/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/-1",
"abcdefghi/B/A/D/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/C/F/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/D/G/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/H/G/E/-1",
"G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/D/A/abcdefghi/F/abcdefghi/abcdefghi/E/G/abcdefghi/B/H/abcdefghi/abcdefghi/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/A/C/abcdefghi/E/-1",
"abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/G/abcdefghi/F/C/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/F/abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/H/abcdefghi/C/E/B/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/F/C/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/A/E/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/-1",
"D/B/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/F/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/F/abcdefghi/D/H/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/H/abcdefghi/abcdefghi/E/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/C/-1",
"B/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/I/D/abcdefghi/F/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/E/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/D/B/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/F/abcdefghi/E/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/F/I/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/D/C/F/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/B/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/H/D/F/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/G/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/C/I/F/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/E/G/D/-1",
"abcdefghi/B/G/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/H/F/G/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/E/G/E/I/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/-1",
"D/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/abcdefghi/A/C/abcdefghi/E/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/C/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/B/abcdefghi/D/H/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/G/abcdefghi/B/D/abcdefghi/A/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/F/abcdefghi/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/C/H/abcdefghi/abcdefghi/B/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/D/A/H/abcdefghi/abcdefghi/-1",
"G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/C/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/E/B/abcdefghi/H/abcdefghi/F/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/-1",
"abcdefghi/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/B/abcdefghi/D/C/abcdefghi/I/B/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/-1",
"abcdefghi/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/A/A/I/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/G/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/H/-1",
"A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/E/E/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/A/F/C/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/B/abcdefghi/-1",
"E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/I/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/H/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/D/H/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/B/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/I/B/D/abcdefghi/abcdefghi/H/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/B/-1",
"abcdefghi/C/D/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/F/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/-1",
"abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/D/F/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/H/A/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/B/E/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/H/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/C/G/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"F/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/I/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/E/D/abcdefghi/I/abcdefghi/D/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/E/abcdefghi/F/E/A/abcdefghi/abcdefghi/D/G/abcdefghi/-1",
"G/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/I/B/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/C/abcdefghi/G/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/E/abcdefghi/F/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/I/F/D/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/E/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/E/abcdefghi/abcdefghi/H/C/E/abcdefghi/I/abcdefghi/abcdefghi/G/-1",
"A/abcdefghi/F/abcdefghi/H/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/F/abcdefghi/H/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/G/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
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
"I/abcdefghi/abcdefghi/C/A/D/abcdefghi/abcdefghi/F/C/E/abcdefghi/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/A/D/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/D/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/E/I/abcdefghi/F/abcdefghi/H/abcdefghi/G/D/H/C/G/D/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/H/E/abcdefghi/abcdefghi/F/B/abcdefghi/C/-1",
"abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/B/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/E/A/abcdefghi/H/abcdefghi/abcdefghi/C/F/abcdefghi/H/abcdefghi/B/abcdefghi/G/abcdefghi/abcdefghi/A/I/B/C/abcdefghi/F/H/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/D/I/E/F/D/G/I/E/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/-1",
"I/abcdefghi/abcdefghi/D/F/abcdefghi/G/B/H/abcdefghi/abcdefghi/D/abcdefghi/H/A/abcdefghi/F/abcdefghi/E/H/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/G/H/E/abcdefghi/D/abcdefghi/abcdefghi/F/abcdefghi/C/abcdefghi/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/B/H/G/abcdefghi/E/abcdefghi/A/D/H/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/E/G/C/abcdefghi/abcdefghi/B/abcdefghi/G/abcdefghi/I/abcdefghi/H/A/abcdefghi/-1",
"abcdefghi/D/E/F/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/D/I/F/I/F/abcdefghi/D/abcdefghi/A/E/abcdefghi/C/abcdefghi/G/D/C/I/abcdefghi/abcdefghi/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/I/A/abcdefghi/I/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/A/abcdefghi/H/A/G/I/D/B/abcdefghi/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/-1",
"F/E/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/E/G/I/abcdefghi/B/C/abcdefghi/I/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/H/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/G/A/I/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/F/A/G/A/D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/D/abcdefghi/I/E/abcdefghi/E/I/C/abcdefghi/abcdefghi/A/abcdefghi/F/abcdefghi/-1",
"D/abcdefghi/abcdefghi/G/H/abcdefghi/F/C/E/F/C/G/abcdefghi/I/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/H/C/D/F/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/B/abcdefghi/C/D/A/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/F/C/abcdefghi/F/abcdefghi/abcdefghi/C/H/abcdefghi/A/abcdefghi/B/G/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/B/F/C/abcdefghi/A/G/abcdefghi/abcdefghi/abcdefghi/C/A/abcdefghi/I/abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/E/A/B/abcdefghi/F/abcdefghi/C/F/abcdefghi/G/I/abcdefghi/abcdefghi/B/abcdefghi/B/A/I/abcdefghi/F/H/E/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/H/E/abcdefghi/B/H/D/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/I/abcdefghi/abcdefghi/B/C/D/abcdefghi/abcdefghi/-1",
"abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/G/abcdefghi/abcdefghi/D/A/I/abcdefghi/H/abcdefghi/abcdefghi/A/C/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/G/abcdefghi/abcdefghi/D/B/D/abcdefghi/abcdefghi/B/H/C/abcdefghi/F/G/F/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/B/H/abcdefghi/abcdefghi/F/abcdefghi/H/abcdefghi/abcdefghi/D/G/C/B/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/F/H/abcdefghi/A/-1",
"abcdefghi/abcdefghi/E/abcdefghi/H/G/abcdefghi/A/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/G/abcdefghi/G/D/A/C/B/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/F/G/E/abcdefghi/abcdefghi/abcdefghi/D/F/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/C/H/B/abcdefghi/abcdefghi/F/A/A/E/B/G/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/D/-1",
"G/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/A/G/H/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/A/abcdefghi/D/G/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/H/F/B/abcdefghi/D/G/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/G/abcdefghi/abcdefghi/D/B/A/abcdefghi/abcdefghi/F/abcdefghi/I/F/G/C/abcdefghi/D/H/B/abcdefghi/-1",
"abcdefghi/G/F/abcdefghi/A/H/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/F/I/abcdefghi/B/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/G/H/abcdefghi/A/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/D/G/C/G/A/abcdefghi/I/F/B/abcdefghi/H/abcdefghi/abcdefghi/B/H/E/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/-1",
"I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/F/G/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/D/D/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/A/abcdefghi/D/A/I/H/abcdefghi/F/abcdefghi/abcdefghi/H/F/abcdefghi/B/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/B/E/abcdefghi/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/G/abcdefghi/D/abcdefghi/I/A/I/abcdefghi/abcdefghi/F/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/G/A/abcdefghi/-1",
"D/abcdefghi/abcdefghi/A/G/abcdefghi/I/E/F/G/I/abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/C/F/B/abcdefghi/abcdefghi/abcdefghi/C/A/abcdefghi/G/B/abcdefghi/G/I/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/C/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/G/C/A/H/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/A/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/H/D/abcdefghi/F/I/-1",
"abcdefghi/B/abcdefghi/H/F/abcdefghi/A/abcdefghi/I/C/E/A/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/E/D/abcdefghi/abcdefghi/H/abcdefghi/G/C/I/abcdefghi/abcdefghi/F/I/G/E/A/D/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/F/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/F/C/E/I/abcdefghi/D/A/D/G/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/H/-1",
"E/abcdefghi/I/A/B/C/abcdefghi/abcdefghi/G/abcdefghi/H/G/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/G/F/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/C/E/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/H/E/C/I/C/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/D/A/F/I/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/H/-1",
"B/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/D/abcdefghi/A/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/C/H/B/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/G/F/abcdefghi/F/E/abcdefghi/D/A/B/abcdefghi/H/C/H/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/E/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/A/B/abcdefghi/abcdefghi/C/A/B/abcdefghi/I/abcdefghi/D/abcdefghi/-1",
"G/abcdefghi/B/A/abcdefghi/abcdefghi/F/H/C/D/abcdefghi/F/abcdefghi/E/C/abcdefghi/B/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/F/H/H/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/B/abcdefghi/E/D/abcdefghi/H/abcdefghi/I/A/abcdefghi/I/G/abcdefghi/abcdefghi/F/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/abcdefghi/A/C/I/-1",
"abcdefghi/C/D/E/G/abcdefghi/F/abcdefghi/abcdefghi/I/B/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/E/D/B/abcdefghi/abcdefghi/C/A/E/G/abcdefghi/abcdefghi/C/F/G/abcdefghi/abcdefghi/B/abcdefghi/A/E/abcdefghi/E/H/I/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/G/abcdefghi/A/abcdefghi/abcdefghi/C/I/abcdefghi/E/abcdefghi/C/abcdefghi/I/D/abcdefghi/F/A/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/G/-1",
"abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/G/G/D/E/A/abcdefghi/F/H/C/abcdefghi/abcdefghi/I/abcdefghi/G/D/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/A/F/abcdefghi/D/A/B/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/B/abcdefghi/H/abcdefghi/abcdefghi/A/G/B/abcdefghi/H/abcdefghi/abcdefghi/E/E/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/A/G/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/G/A/I/E/G/A/abcdefghi/B/I/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/B/abcdefghi/abcdefghi/C/D/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/H/F/H/B/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/G/D/abcdefghi/I/abcdefghi/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/D/abcdefghi/F/D/I/H/abcdefghi/abcdefghi/B/G/abcdefghi/-1",
"E/I/F/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/G/A/E/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/F/I/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/E/H/G/I/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/I/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/A/I/abcdefghi/F/D/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/H/C/abcdefghi/abcdefghi/F/-1",
"abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/G/abcdefghi/I/H/F/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/B/abcdefghi/F/abcdefghi/H/F/C/H/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/A/C/H/E/F/B/abcdefghi/E/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/abcdefghi/A/I/D/abcdefghi/H/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/E/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/D/abcdefghi/-1",
"B/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/G/G/H/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/I/E/D/abcdefghi/I/G/abcdefghi/abcdefghi/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/H/I/B/D/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/D/abcdefghi/G/C/abcdefghi/E/C/G/abcdefghi/H/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/C/abcdefghi/A/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/abcdefghi/H/D/B/I/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/C/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/I/A/F/abcdefghi/abcdefghi/E/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/D/C/abcdefghi/abcdefghi/abcdefghi/E/C/H/D/abcdefghi/A/I/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/H/C/H/abcdefghi/I/B/D/abcdefghi/abcdefghi/F/-1",
"abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/G/abcdefghi/B/D/abcdefghi/abcdefghi/A/I/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/D/abcdefghi/B/A/abcdefghi/C/F/abcdefghi/abcdefghi/I/D/H/abcdefghi/H/I/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/H/I/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/C/abcdefghi/E/H/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/A/G/abcdefghi/B/abcdefghi/C/-1",
"I/C/abcdefghi/D/H/abcdefghi/F/abcdefghi/abcdefghi/D/G/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/I/abcdefghi/E/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/C/abcdefghi/B/abcdefghi/H/E/I/B/E/H/F/abcdefghi/I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/C/abcdefghi/G/D/F/I/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/G/A/B/abcdefghi/-1",
"abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/E/D/A/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/C/B/D/H/abcdefghi/I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/B/abcdefghi/abcdefghi/abcdefghi/E/I/C/abcdefghi/abcdefghi/H/D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/D/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/abcdefghi/H/A/E/D/abcdefghi/H/abcdefghi/C/D/A/abcdefghi/B/I/-1",
"H/D/B/abcdefghi/E/I/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/H/F/C/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/E/I/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/H/C/E/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/I/A/E/abcdefghi/G/F/D/abcdefghi/D/H/abcdefghi/A/abcdefghi/F/abcdefghi/abcdefghi/I/-1",
"abcdefghi/A/D/abcdefghi/F/E/H/B/abcdefghi/abcdefghi/G/abcdefghi/B/abcdefghi/H/abcdefghi/F/C/abcdefghi/B/H/C/abcdefghi/abcdefghi/E/D/abcdefghi/D/H/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/G/abcdefghi/A/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/E/abcdefghi/I/C/G/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/A/F/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/G/abcdefghi/-1",
"A/C/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/A/abcdefghi/E/H/abcdefghi/I/E/abcdefghi/D/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/F/C/D/H/E/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/B/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/B/E/abcdefghi/I/A/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/H/abcdefghi/B/D/I/abcdefghi/abcdefghi/abcdefghi/F/A/D/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/-1",
"C/abcdefghi/B/abcdefghi/G/F/abcdefghi/D/abcdefghi/abcdefghi/H/F/abcdefghi/A/abcdefghi/abcdefghi/C/I/I/G/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/F/I/abcdefghi/abcdefghi/A/G/abcdefghi/E/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/C/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/C/E/B/abcdefghi/C/abcdefghi/F/E/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/G/D/I/abcdefghi/-1",
"abcdefghi/abcdefghi/B/G/abcdefghi/D/abcdefghi/A/E/A/abcdefghi/D/E/I/abcdefghi/abcdefghi/G/B/G/E/C/B/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/I/E/H/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/B/G/abcdefghi/abcdefghi/F/H/C/abcdefghi/H/A/abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/B/I/abcdefghi/A/-1",
"D/abcdefghi/C/F/abcdefghi/abcdefghi/I/abcdefghi/A/A/abcdefghi/abcdefghi/abcdefghi/D/G/C/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/C/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/G/H/abcdefghi/F/abcdefghi/C/E/abcdefghi/A/abcdefghi/D/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/H/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/D/F/I/abcdefghi/B/H/abcdefghi/F/abcdefghi/E/A/C/-1",
"D/C/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/F/E/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/F/I/C/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/C/E/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/G/A/abcdefghi/C/abcdefghi/H/abcdefghi/A/D/abcdefghi/B/abcdefghi/F/abcdefghi/F/C/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/A/E/abcdefghi/abcdefghi/I/abcdefghi/H/C/abcdefghi/-1",
"I/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/C/D/F/E/abcdefghi/B/A/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/H/B/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/A/E/abcdefghi/B/abcdefghi/I/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/A/abcdefghi/D/A/abcdefghi/H/abcdefghi/abcdefghi/F/C/G/abcdefghi/C/abcdefghi/A/B/abcdefghi/abcdefghi/H/E/-1",
"F/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/F/abcdefghi/abcdefghi/H/D/I/abcdefghi/abcdefghi/A/B/D/G/abcdefghi/C/H/E/I/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/D/abcdefghi/G/B/abcdefghi/D/A/abcdefghi/H/I/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/D/abcdefghi/A/abcdefghi/H/F/B/abcdefghi/abcdefghi/-1",
"B/D/abcdefghi/F/E/G/abcdefghi/abcdefghi/C/H/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/A/D/C/B/abcdefghi/F/I/E/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/D/I/C/abcdefghi/I/abcdefghi/F/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/C/A/I/G/abcdefghi/abcdefghi/E/C/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/-1",
"abcdefghi/G/H/F/abcdefghi/abcdefghi/I/abcdefghi/C/F/B/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/B/G/abcdefghi/I/A/abcdefghi/I/abcdefghi/H/G/abcdefghi/F/abcdefghi/B/F/G/D/I/abcdefghi/H/E/abcdefghi/G/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/I/B/abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/D/A/C/H/abcdefghi/-1",
"abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/F/E/abcdefghi/B/A/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/H/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/A/F/D/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/G/D/H/A/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/H/A/D/abcdefghi/D/abcdefghi/G/F/I/abcdefghi/abcdefghi/B/E/abcdefghi/B/abcdefghi/abcdefghi/A/G/I/F/-1",
"E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/A/G/H/D/A/abcdefghi/G/I/H/abcdefghi/abcdefghi/F/I/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/D/abcdefghi/G/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/D/abcdefghi/D/I/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/A/F/E/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/F/abcdefghi/abcdefghi/A/G/-1",
"abcdefghi/abcdefghi/abcdefghi/B/D/C/abcdefghi/A/H/abcdefghi/A/F/abcdefghi/H/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/D/G/C/I/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/A/abcdefghi/H/abcdefghi/F/abcdefghi/B/abcdefghi/I/F/B/abcdefghi/A/E/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/H/E/C/A/-1",
"abcdefghi/G/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/B/abcdefghi/abcdefghi/A/H/abcdefghi/H/abcdefghi/abcdefghi/D/I/abcdefghi/E/abcdefghi/B/abcdefghi/C/E/abcdefghi/F/I/abcdefghi/abcdefghi/G/abcdefghi/F/D/C/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/G/B/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/I/A/D/abcdefghi/I/C/G/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/A/H/-1",
"B/abcdefghi/D/abcdefghi/abcdefghi/G/I/abcdefghi/E/A/I/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/F/abcdefghi/F/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/B/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/B/abcdefghi/I/F/abcdefghi/abcdefghi/A/H/A/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/abcdefghi/abcdefghi/A/abcdefghi/H/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/H/D/D/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/G/-1",
"abcdefghi/B/E/abcdefghi/abcdefghi/C/I/H/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/G/I/C/abcdefghi/F/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/G/F/A/E/abcdefghi/C/A/abcdefghi/H/abcdefghi/I/abcdefghi/G/B/abcdefghi/G/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/I/A/H/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/C/G/abcdefghi/abcdefghi/abcdefghi/-1",
"I/A/abcdefghi/E/abcdefghi/abcdefghi/G/B/abcdefghi/B/G/H/abcdefghi/abcdefghi/C/E/abcdefghi/I/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/B/I/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/C/D/E/B/F/abcdefghi/F/D/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/G/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/F/C/H/D/I/abcdefghi/-1",
"G/C/H/abcdefghi/abcdefghi/D/abcdefghi/A/F/abcdefghi/abcdefghi/I/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/H/E/I/H/E/B/abcdefghi/abcdefghi/I/abcdefghi/D/G/I/D/C/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/E/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/E/abcdefghi/abcdefghi/abcdefghi/I/D/F/B/abcdefghi/abcdefghi/-1",
"G/A/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/H/C/abcdefghi/I/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/I/G/A/abcdefghi/E/abcdefghi/G/abcdefghi/C/abcdefghi/F/F/abcdefghi/abcdefghi/E/H/A/abcdefghi/abcdefghi/B/abcdefghi/I/G/D/F/abcdefghi/abcdefghi/H/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/F/G/abcdefghi/B/H/A/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/G/abcdefghi/D/abcdefghi/abcdefghi/I/D/abcdefghi/E/abcdefghi/B/abcdefghi/G/abcdefghi/D/E/A/abcdefghi/C/G/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/F/D/abcdefghi/I/F/abcdefghi/abcdefghi/G/abcdefghi/D/A/B/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/E/B/C/G/abcdefghi/abcdefghi/A/D/-1",
"F/I/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/A/abcdefghi/F/G/H/I/D/H/G/I/abcdefghi/A/E/B/abcdefghi/F/abcdefghi/F/B/abcdefghi/abcdefghi/C/G/D/abcdefghi/D/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/E/abcdefghi/G/abcdefghi/I/abcdefghi/D/F/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/C/abcdefghi/A/B/G/-1",
"G/A/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/H/G/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/B/A/abcdefghi/G/abcdefghi/I/B/G/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/E/abcdefghi/A/F/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/I/C/E/F/abcdefghi/G/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/C/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/D/-1",
"abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/B/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/G/I/abcdefghi/C/H/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/G/E/C/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/C/H/D/E/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/B/B/abcdefghi/A/E/abcdefghi/I/C/F/abcdefghi/C/abcdefghi/abcdefghi/A/G/abcdefghi/H/abcdefghi/abcdefghi/-1",
"H/G/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/G/abcdefghi/abcdefghi/H/B/F/abcdefghi/abcdefghi/abcdefghi/H/E/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/F/I/A/abcdefghi/D/abcdefghi/abcdefghi/I/D/abcdefghi/H/abcdefghi/C/abcdefghi/E/A/B/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/A/abcdefghi/I/abcdefghi/C/F/H/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/B/A/abcdefghi/D/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/-1",
"I/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/B/D/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/abcdefghi/G/A/abcdefghi/I/C/G/I/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/F/abcdefghi/H/abcdefghi/C/D/abcdefghi/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/G/A/C/I/abcdefghi/D/abcdefghi/B/abcdefghi/H/abcdefghi/F/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/B/abcdefghi/C/A/abcdefghi/I/abcdefghi/abcdefghi/-1",
"A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/G/abcdefghi/E/abcdefghi/H/G/F/abcdefghi/A/abcdefghi/G/abcdefghi/F/A/H/C/abcdefghi/E/abcdefghi/B/I/abcdefghi/G/E/abcdefghi/C/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/A/E/abcdefghi/I/abcdefghi/C/abcdefghi/abcdefghi/G/B/F/B/H/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/abcdefghi/I/abcdefghi/H/E/-1",
"B/H/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/E/abcdefghi/H/B/F/abcdefghi/F/E/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/I/G/D/H/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/F/G/A/abcdefghi/G/D/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/C/I/abcdefghi/C/B/abcdefghi/abcdefghi/E/D/abcdefghi/H/-1",
"I/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/I/E/G/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/B/abcdefghi/abcdefghi/I/F/A/abcdefghi/B/abcdefghi/G/B/A/G/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/G/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/I/E/abcdefghi/A/abcdefghi/C/D/C/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/B/F/-1",
"abcdefghi/H/abcdefghi/A/I/abcdefghi/C/E/abcdefghi/abcdefghi/C/F/H/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/I/D/E/abcdefghi/F/B/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/F/D/abcdefghi/E/A/B/abcdefghi/B/E/abcdefghi/abcdefghi/A/I/abcdefghi/D/D/F/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/B/G/abcdefghi/abcdefghi/H/abcdefghi/G/B/abcdefghi/abcdefghi/E/-1",
"B/abcdefghi/abcdefghi/A/abcdefghi/H/D/F/I/abcdefghi/E/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/D/abcdefghi/A/I/C/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/G/abcdefghi/G/B/abcdefghi/D/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/I/F/B/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/F/abcdefghi/abcdefghi/C/G/abcdefghi/A/abcdefghi/I/B/E/I/F/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/-1",
"abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/I/abcdefghi/abcdefghi/F/A/E/I/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/abcdefghi/F/G/H/abcdefghi/abcdefghi/F/I/abcdefghi/G/E/abcdefghi/abcdefghi/D/abcdefghi/G/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/H/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/G/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/D/A/I/abcdefghi/G/E/A/abcdefghi/abcdefghi/abcdefghi/F/-1",
"abcdefghi/H/abcdefghi/G/abcdefghi/F/abcdefghi/C/D/abcdefghi/D/F/E/B/abcdefghi/abcdefghi/H/G/G/abcdefghi/B/abcdefghi/C/H/E/abcdefghi/F/E/F/C/abcdefghi/A/D/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/B/H/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/B/abcdefghi/I/A/G/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/F/E/H/abcdefghi/abcdefghi/-1",
"abcdefghi/D/H/C/B/A/abcdefghi/abcdefghi/E/A/I/abcdefghi/abcdefghi/D/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/D/abcdefghi/G/E/B/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/G/C/I/E/B/D/I/abcdefghi/abcdefghi/B/A/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/B/A/C/I/F/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/-1",
"abcdefghi/I/G/F/abcdefghi/B/abcdefghi/C/E/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/A/abcdefghi/I/H/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/A/abcdefghi/C/E/abcdefghi/F/abcdefghi/H/C/I/D/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/F/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/B/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/C/G/abcdefghi/B/abcdefghi/-1",
"C/abcdefghi/F/D/B/abcdefghi/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/F/abcdefghi/F/G/abcdefghi/abcdefghi/E/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/F/G/abcdefghi/abcdefghi/B/abcdefghi/I/G/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/F/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/I/I/abcdefghi/E/abcdefghi/D/abcdefghi/abcdefghi/A/C/D/abcdefghi/G/F/abcdefghi/I/H/abcdefghi/B/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/F/F/C/G/abcdefghi/abcdefghi/A/E/abcdefghi/B/abcdefghi/D/abcdefghi/C/E/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/abcdefghi/H/abcdefghi/abcdefghi/A/I/E/abcdefghi/F/C/abcdefghi/abcdefghi/B/abcdefghi/D/abcdefghi/H/E/abcdefghi/abcdefghi/C/F/I/H/B/abcdefghi/abcdefghi/abcdefghi/E/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/H/E/abcdefghi/A/C/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"B/F/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/F/abcdefghi/abcdefghi/C/G/A/abcdefghi/E/abcdefghi/G/abcdefghi/D/B/abcdefghi/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/G/H/E/H/abcdefghi/I/abcdefghi/C/abcdefghi/F/abcdefghi/B/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/D/F/abcdefghi/D/abcdefghi/abcdefghi/B/E/I/abcdefghi/abcdefghi/A/B/G/I/abcdefghi/abcdefghi/abcdefghi/H/-1",
"abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/F/D/abcdefghi/abcdefghi/E/I/B/abcdefghi/C/E/B/A/abcdefghi/H/abcdefghi/I/D/F/abcdefghi/H/abcdefghi/B/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/G/abcdefghi/abcdefghi/H/C/abcdefghi/C/A/E/H/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/B/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/E/I/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/C/F/abcdefghi/-1",
"abcdefghi/abcdefghi/E/G/B/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/D/abcdefghi/B/I/F/B/abcdefghi/abcdefghi/E/A/G/abcdefghi/E/abcdefghi/I/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/I/G/abcdefghi/D/abcdefghi/G/C/abcdefghi/B/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/A/E/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/B/I/F/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/H/abcdefghi/abcdefghi/G/B/E/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/F/abcdefghi/abcdefghi/E/D/abcdefghi/abcdefghi/I/B/abcdefghi/A/abcdefghi/abcdefghi/I/F/abcdefghi/E/C/I/abcdefghi/D/A/E/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/H/F/B/abcdefghi/C/A/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/H/C/G/F/I/abcdefghi/B/A/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/G/F/C/E/I/abcdefghi/D/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/abcdefghi/B/I/E/I/E/abcdefghi/abcdefghi/abcdefghi/H/F/G/abcdefghi/H/abcdefghi/abcdefghi/E/C/A/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/C/G/H/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/H/G/abcdefghi/abcdefghi/I/D/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/A/-1",
"I/F/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/G/abcdefghi/E/D/C/F/abcdefghi/abcdefghi/C/H/abcdefghi/A/abcdefghi/abcdefghi/B/abcdefghi/E/B/C/H/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/G/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/E/A/abcdefghi/E/A/abcdefghi/H/F/abcdefghi/I/abcdefghi/H/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/D/A/abcdefghi/F/-1",
"G/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/A/C/B/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/F/G/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/G/D/abcdefghi/B/E/F/abcdefghi/E/abcdefghi/B/abcdefghi/A/C/abcdefghi/D/abcdefghi/H/D/abcdefghi/G/abcdefghi/abcdefghi/C/B/I/A/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/E/I/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/-1",
"D/abcdefghi/F/abcdefghi/A/abcdefghi/E/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/A/B/C/abcdefghi/H/E/abcdefghi/F/abcdefghi/G/E/A/H/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/B/abcdefghi/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/F/abcdefghi/I/E/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/B/H/abcdefghi/B/H/abcdefghi/G/C/A/F/abcdefghi/D/E/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/-1",
"I/D/C/abcdefghi/abcdefghi/abcdefghi/H/E/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/A/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/I/H/D/A/abcdefghi/abcdefghi/B/H/C/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/I/B/A/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/I/G/abcdefghi/D/I/E/F/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/C/abcdefghi/H/abcdefghi/-1",
"G/abcdefghi/A/abcdefghi/I/B/abcdefghi/D/abcdefghi/abcdefghi/B/F/E/C/D/abcdefghi/I/abcdefghi/abcdefghi/D/E/F/abcdefghi/A/B/abcdefghi/H/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/B/G/abcdefghi/A/B/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/A/E/-1",
"A/abcdefghi/C/E/abcdefghi/H/abcdefghi/G/F/H/F/abcdefghi/abcdefghi/abcdefghi/G/D/abcdefghi/I/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/B/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/A/D/C/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/H/C/abcdefghi/C/A/abcdefghi/H/E/abcdefghi/F/I/D/F/abcdefghi/I/D/abcdefghi/C/abcdefghi/abcdefghi/G/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/H/abcdefghi/abcdefghi/H/E/A/abcdefghi/abcdefghi/abcdefghi/G/C/D/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/E/C/abcdefghi/abcdefghi/G/E/abcdefghi/B/H/I/abcdefghi/I/abcdefghi/abcdefghi/H/C/abcdefghi/G/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/B/A/A/C/I/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/D/H/A/E/abcdefghi/abcdefghi/abcdefghi/-1",
"I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/E/abcdefghi/D/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/D/abcdefghi/C/abcdefghi/A/I/H/B/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/G/B/D/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/abcdefghi/D/abcdefghi/G/abcdefghi/F/A/abcdefghi/E/abcdefghi/E/F/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/D/E/H/abcdefghi/G/abcdefghi/-1",
"D/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/I/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/I/G/B/A/abcdefghi/I/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/F/A/abcdefghi/abcdefghi/H/C/I/abcdefghi/E/A/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/H/G/abcdefghi/H/E/F/D/abcdefghi/A/abcdefghi/I/F/A/abcdefghi/H/B/abcdefghi/E/abcdefghi/-1",
"abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/A/D/G/C/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/E/abcdefghi/I/C/B/abcdefghi/abcdefghi/I/B/abcdefghi/H/D/G/abcdefghi/E/abcdefghi/abcdefghi/E/A/I/abcdefghi/H/abcdefghi/B/H/C/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/B/abcdefghi/abcdefghi/F/D/C/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/G/abcdefghi/A/D/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/C/-1",
"abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/C/D/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/B/F/abcdefghi/C/A/abcdefghi/abcdefghi/G/H/G/abcdefghi/D/H/abcdefghi/I/B/abcdefghi/F/abcdefghi/B/F/abcdefghi/E/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/G/F/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/H/A/abcdefghi/E/I/abcdefghi/C/-1",
"F/abcdefghi/H/B/abcdefghi/D/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/H/G/abcdefghi/B/C/E/E/B/G/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/H/A/F/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/B/F/B/abcdefghi/C/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/A/D/H/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/G/A/H/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/F/abcdefghi/I/I/G/C/abcdefghi/F/A/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/I/G/abcdefghi/B/A/abcdefghi/H/C/abcdefghi/G/I/abcdefghi/E/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/B/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/H/B/D/H/C/abcdefghi/abcdefghi/G/E/abcdefghi/-1",
"E/B/abcdefghi/abcdefghi/G/A/abcdefghi/D/I/abcdefghi/I/D/B/abcdefghi/abcdefghi/A/C/G/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/F/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/A/B/H/C/abcdefghi/A/I/abcdefghi/E/abcdefghi/I/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/I/B/F/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/-1",
"D/H/abcdefghi/E/abcdefghi/B/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/H/E/D/abcdefghi/D/abcdefghi/abcdefghi/E/I/abcdefghi/H/abcdefghi/F/G/abcdefghi/abcdefghi/C/H/E/abcdefghi/abcdefghi/abcdefghi/E/C/B/abcdefghi/F/D/abcdefghi/G/G/F/abcdefghi/abcdefghi/I/abcdefghi/B/D/abcdefghi/E/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/-1",
"G/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/C/F/I/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/G/A/H/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/F/abcdefghi/B/abcdefghi/A/abcdefghi/I/H/abcdefghi/H/I/abcdefghi/abcdefghi/F/abcdefghi/G/A/abcdefghi/abcdefghi/D/G/C/abcdefghi/H/abcdefghi/E/A/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/B/C/abcdefghi/abcdefghi/I/G/F/abcdefghi/-1",
"abcdefghi/abcdefghi/A/abcdefghi/E/B/abcdefghi/D/abcdefghi/D/I/abcdefghi/abcdefghi/F/abcdefghi/G/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/E/H/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/G/H/abcdefghi/D/G/abcdefghi/C/E/B/H/I/abcdefghi/abcdefghi/E/H/I/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/I/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/G/abcdefghi/D/abcdefghi/F/C/G/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/-1",
"H/abcdefghi/E/B/abcdefghi/A/D/abcdefghi/G/D/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/C/F/D/abcdefghi/abcdefghi/A/abcdefghi/A/abcdefghi/abcdefghi/D/F/I/abcdefghi/abcdefghi/C/I/E/F/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/D/H/abcdefghi/F/C/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/C/A/abcdefghi/E/abcdefghi/H/-1",
"B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/C/abcdefghi/D/abcdefghi/abcdefghi/E/H/B/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/E/B/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/I/F/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/B/A/abcdefghi/C/I/G/abcdefghi/C/A/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/C/abcdefghi/D/H/abcdefghi/I/H/abcdefghi/E/F/abcdefghi/G/abcdefghi/-1",
"E/abcdefghi/abcdefghi/D/H/A/F/I/abcdefghi/B/abcdefghi/F/C/abcdefghi/abcdefghi/D/A/G/D/A/I/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/A/F/G/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/C/E/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/H/E/abcdefghi/G/abcdefghi/abcdefghi/B/E/H/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/F/B/abcdefghi/C/E/A/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/H/C/D/B/I/G/abcdefghi/abcdefghi/B/F/abcdefghi/A/C/abcdefghi/C/F/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/B/E/B/E/abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/E/abcdefghi/abcdefghi/H/abcdefghi/A/-1",
"abcdefghi/A/abcdefghi/H/G/I/abcdefghi/abcdefghi/B/abcdefghi/F/B/abcdefghi/C/abcdefghi/H/abcdefghi/A/abcdefghi/G/C/B/abcdefghi/abcdefghi/D/I/E/C/abcdefghi/abcdefghi/I/B/abcdefghi/A/abcdefghi/G/G/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/C/D/F/I/abcdefghi/C/D/G/abcdefghi/B/abcdefghi/D/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/H/F/abcdefghi/abcdefghi/-1",
"abcdefghi/H/abcdefghi/B/I/abcdefghi/G/abcdefghi/D/abcdefghi/abcdefghi/F/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/abcdefghi/D/abcdefghi/I/F/abcdefghi/F/abcdefghi/abcdefghi/D/abcdefghi/G/abcdefghi/abcdefghi/C/C/E/H/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/B/abcdefghi/D/abcdefghi/C/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/A/F/E/H/abcdefghi/abcdefghi/G/abcdefghi/F/C/G/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/F/E/abcdefghi/-1",
"A/abcdefghi/B/F/abcdefghi/D/abcdefghi/abcdefghi/E/H/C/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/H/abcdefghi/G/abcdefghi/D/H/I/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/D/E/H/abcdefghi/E/A/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/D/C/abcdefghi/abcdefghi/E/B/I/G/abcdefghi/F/B/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/-1",
"B/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/E/I/abcdefghi/abcdefghi/B/I/abcdefghi/C/abcdefghi/B/abcdefghi/H/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/H/E/F/I/A/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/H/E/abcdefghi/I/F/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/F/H/abcdefghi/abcdefghi/D/abcdefghi/G/F/B/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/D/A/C/abcdefghi/-1",
"D/H/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/A/A/F/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/C/abcdefghi/A/abcdefghi/D/E/B/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/C/abcdefghi/A/G/H/abcdefghi/abcdefghi/I/E/B/abcdefghi/C/abcdefghi/abcdefghi/I/C/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/E/H/abcdefghi/I/E/abcdefghi/H/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/D/abcdefghi/F/abcdefghi/B/-1",
"D/B/A/abcdefghi/C/abcdefghi/I/abcdefghi/E/I/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/I/H/A/B/B/I/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/C/E/abcdefghi/I/abcdefghi/D/H/abcdefghi/abcdefghi/A/abcdefghi/C/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/E/B/H/-1",
"A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/D/B/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/H/F/A/D/F/E/H/B/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/C/F/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/D/H/A/abcdefghi/C/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/I/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/C/E/abcdefghi/D/B/I/abcdefghi/-1",
"A/G/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/E/I/A/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/E/A/C/abcdefghi/A/abcdefghi/H/abcdefghi/G/I/B/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/E/C/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/F/E/abcdefghi/abcdefghi/I/B/abcdefghi/H/abcdefghi/abcdefghi/B/C/I/F/D/abcdefghi/B/E/abcdefghi/F/abcdefghi/H/abcdefghi/G/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/F/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/D/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/F/C/I/G/F/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/G/B/abcdefghi/I/abcdefghi/abcdefghi/E/C/A/abcdefghi/H/abcdefghi/B/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/C/D/F/F/I/D/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/-1",
"abcdefghi/I/G/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/C/abcdefghi/E/I/F/G/B/D/abcdefghi/B/abcdefghi/D/C/E/abcdefghi/abcdefghi/F/I/abcdefghi/C/abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/D/abcdefghi/H/E/G/A/G/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/F/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/H/B/abcdefghi/H/D/I/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/-1",
"G/H/A/abcdefghi/D/F/I/B/abcdefghi/abcdefghi/C/I/E/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/abcdefghi/D/I/G/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/B/E/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/A/B/abcdefghi/H/abcdefghi/G/abcdefghi/C/I/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/D/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/F/I/-1",
"B/A/abcdefghi/G/abcdefghi/abcdefghi/D/I/C/abcdefghi/I/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/I/B/abcdefghi/abcdefghi/H/A/H/F/G/E/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/E/abcdefghi/E/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/E/D/abcdefghi/abcdefghi/G/D/abcdefghi/A/abcdefghi/C/H/abcdefghi/abcdefghi/E/C/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/H/-1",
"I/H/D/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/H/F/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/E/abcdefghi/I/abcdefghi/E/I/F/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/H/abcdefghi/abcdefghi/I/G/abcdefghi/abcdefghi/C/abcdefghi/A/abcdefghi/I/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/A/E/I/F/abcdefghi/I/E/abcdefghi/G/D/abcdefghi/H/-1",
"abcdefghi/abcdefghi/C/F/A/abcdefghi/E/abcdefghi/G/D/A/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/C/A/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/B/abcdefghi/B/abcdefghi/E/abcdefghi/G/D/I/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/C/D/A/F/H/abcdefghi/A/abcdefghi/I/abcdefghi/C/E/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/B/C/abcdefghi/G/abcdefghi/abcdefghi/A/-1",
"abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/I/abcdefghi/B/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/abcdefghi/F/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/I/D/abcdefghi/G/abcdefghi/H/abcdefghi/A/C/E/F/D/F/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/A/F/C/I/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/B/D/abcdefghi/abcdefghi/F/I/abcdefghi/C/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/G/abcdefghi/-1",
"abcdefghi/B/E/abcdefghi/G/abcdefghi/H/A/abcdefghi/D/F/A/B/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/I/A/D/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/C/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/G/abcdefghi/abcdefghi/F/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/E/G/C/A/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/H/-1",
"I/H/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/A/H/I/abcdefghi/C/abcdefghi/D/abcdefghi/C/abcdefghi/I/F/B/H/abcdefghi/abcdefghi/F/abcdefghi/C/A/H/I/abcdefghi/B/abcdefghi/G/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/A/H/B/abcdefghi/abcdefghi/abcdefghi/D/I/-1",
"A/G/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/B/abcdefghi/I/E/C/abcdefghi/D/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/I/abcdefghi/F/abcdefghi/B/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/A/I/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/C/A/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/G/abcdefghi/E/B/abcdefghi/abcdefghi/C/B/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/I/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/-1",
"E/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/E/abcdefghi/G/B/D/abcdefghi/C/abcdefghi/A/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/H/I/abcdefghi/A/D/C/G/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/D/abcdefghi/B/abcdefghi/E/abcdefghi/B/C/abcdefghi/A/abcdefghi/abcdefghi/I/A/E/D/G/abcdefghi/abcdefghi/abcdefghi/F/C/abcdefghi/H/E/abcdefghi/A/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/-1",
"abcdefghi/C/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/E/B/I/C/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/H/I/abcdefghi/B/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/H/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/A/F/abcdefghi/abcdefghi/H/I/E/F/abcdefghi/C/abcdefghi/abcdefghi/I/A/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/A/D/A/E/abcdefghi/G/I/C/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/abcdefghi/-1",
"E/A/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/I/C/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/I/B/abcdefghi/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/D/C/I/B/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/F/F/I/abcdefghi/E/abcdefghi/G/abcdefghi/D/H/D/abcdefghi/A/C/abcdefghi/F/abcdefghi/G/I/abcdefghi/E/abcdefghi/I/A/D/abcdefghi/C/abcdefghi/-1",
"abcdefghi/I/abcdefghi/B/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/B/F/E/D/abcdefghi/I/abcdefghi/D/abcdefghi/E/I/abcdefghi/H/abcdefghi/C/abcdefghi/G/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/B/abcdefghi/E/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/B/G/abcdefghi/H/D/I/E/abcdefghi/G/abcdefghi/B/D/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/I/G/F/-1",
"abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/F/C/B/I/abcdefghi/B/A/abcdefghi/F/G/abcdefghi/E/F/abcdefghi/G/abcdefghi/abcdefghi/C/A/I/abcdefghi/E/D/abcdefghi/B/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/C/H/abcdefghi/D/abcdefghi/E/F/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/F/A/abcdefghi/abcdefghi/H/E/abcdefghi/I/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/D/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/-1",
"A/abcdefghi/H/C/B/G/abcdefghi/E/I/B/abcdefghi/D/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/G/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/A/E/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/C/E/abcdefghi/B/G/F/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/H/I/A/H/A/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/G/-1",
"E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/I/C/abcdefghi/abcdefghi/G/E/D/abcdefghi/abcdefghi/abcdefghi/G/B/H/abcdefghi/C/abcdefghi/I/H/abcdefghi/D/abcdefghi/F/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/D/abcdefghi/abcdefghi/C/I/A/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/G/abcdefghi/H/abcdefghi/I/F/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/H/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/I/abcdefghi/E/B/A/H/abcdefghi/-1",
"abcdefghi/abcdefghi/E/abcdefghi/C/F/abcdefghi/D/A/I/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/F/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/B/abcdefghi/abcdefghi/E/H/A/C/A/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/A/F/abcdefghi/abcdefghi/G/F/abcdefghi/A/H/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/abcdefghi/abcdefghi/H/B/H/abcdefghi/C/abcdefghi/abcdefghi/G/A/F/D/-1",
"I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/D/G/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/A/abcdefghi/D/B/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/C/abcdefghi/F/H/B/abcdefghi/D/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/F/B/H/I/abcdefghi/abcdefghi/A/F/C/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/C/B/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/H/C/I/abcdefghi/-1",
"abcdefghi/F/H/C/abcdefghi/abcdefghi/A/E/abcdefghi/abcdefghi/E/abcdefghi/F/D/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/A/D/abcdefghi/C/abcdefghi/abcdefghi/C/D/B/abcdefghi/abcdefghi/I/E/B/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/I/H/C/abcdefghi/A/I/E/abcdefghi/C/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/A/G/C/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/-1",
"G/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/F/F/D/I/A/abcdefghi/abcdefghi/E/abcdefghi/G/C/E/H/G/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/E/A/H/G/C/I/abcdefghi/A/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/I/F/abcdefghi/abcdefghi/B/D/abcdefghi/H/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/-1",
"F/I/abcdefghi/G/abcdefghi/C/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/H/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/abcdefghi/abcdefghi/abcdefghi/I/F/H/abcdefghi/C/H/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/C/abcdefghi/abcdefghi/G/B/D/I/abcdefghi/G/B/H/I/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/F/abcdefghi/B/A/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/F/G/C/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/B/abcdefghi/C/F/G/D/F/A/abcdefghi/C/abcdefghi/E/B/B/I/abcdefghi/G/F/abcdefghi/C/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/B/abcdefghi/D/abcdefghi/G/C/B/A/abcdefghi/F/abcdefghi/-1",
"abcdefghi/H/G/B/E/C/abcdefghi/abcdefghi/abcdefghi/A/F/abcdefghi/abcdefghi/D/abcdefghi/E/B/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/F/C/E/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/A/F/B/H/abcdefghi/F/abcdefghi/abcdefghi/D/abcdefghi/E/I/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/I/G/A/abcdefghi/C/abcdefghi/A/E/G/F/abcdefghi/abcdefghi/abcdefghi/-1",
"I/E/H/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/I/G/abcdefghi/abcdefghi/abcdefghi/C/C/F/abcdefghi/H/abcdefghi/D/B/abcdefghi/I/abcdefghi/abcdefghi/C/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/E/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/E/G/abcdefghi/H/I/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/B/abcdefghi/B/E/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/C/abcdefghi/G/I/B/H/abcdefghi/abcdefghi/-1",
"G/B/abcdefghi/F/abcdefghi/A/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/F/A/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/A/abcdefghi/abcdefghi/I/B/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/C/G/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/A/D/abcdefghi/H/F/abcdefghi/F/abcdefghi/D/G/I/H/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/F/D/abcdefghi/I/-1",
"B/abcdefghi/C/abcdefghi/A/abcdefghi/D/abcdefghi/abcdefghi/F/E/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/G/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/D/abcdefghi/C/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/B/abcdefghi/F/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/C/F/E/abcdefghi/D/abcdefghi/B/I/G/abcdefghi/abcdefghi/abcdefghi/I/C/F/A/D/-1",
"F/A/E/abcdefghi/D/C/G/H/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/D/A/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/F/C/abcdefghi/G/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/A/I/abcdefghi/abcdefghi/A/E/G/D/abcdefghi/abcdefghi/C/abcdefghi/C/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/abcdefghi/I/G/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/H/abcdefghi/F/B/F/I/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/-1",
"abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/B/D/abcdefghi/B/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/A/abcdefghi/G/A/I/abcdefghi/E/C/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/G/E/E/D/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/H/I/A/B/abcdefghi/abcdefghi/I/B/D/abcdefghi/G/F/abcdefghi/abcdefghi/F/B/abcdefghi/I/C/abcdefghi/H/abcdefghi/-1",
"abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/A/abcdefghi/A/I/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/D/F/abcdefghi/abcdefghi/A/I/C/abcdefghi/abcdefghi/C/D/F/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/abcdefghi/B/D/abcdefghi/abcdefghi/I/abcdefghi/F/F/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/D/abcdefghi/abcdefghi/G/H/abcdefghi/H/D/abcdefghi/B/C/F/E/abcdefghi/-1",
"abcdefghi/A/abcdefghi/F/abcdefghi/B/abcdefghi/H/D/E/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/G/abcdefghi/abcdefghi/D/abcdefghi/H/A/abcdefghi/C/abcdefghi/abcdefghi/C/H/D/abcdefghi/I/F/abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/A/I/abcdefghi/abcdefghi/G/abcdefghi/A/I/D/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/abcdefghi/E/abcdefghi/B/D/G/A/abcdefghi/F/abcdefghi/G/abcdefghi/C/A/abcdefghi/D/abcdefghi/-1",
"abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/G/abcdefghi/A/E/F/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/C/F/D/C/abcdefghi/abcdefghi/I/abcdefghi/H/D/abcdefghi/F/abcdefghi/abcdefghi/G/F/A/abcdefghi/I/H/B/abcdefghi/I/H/D/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/B/C/A/abcdefghi/C/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/B/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/-1",
"abcdefghi/C/abcdefghi/H/E/D/A/abcdefghi/abcdefghi/abcdefghi/I/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/B/F/abcdefghi/A/G/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/B/D/abcdefghi/I/abcdefghi/A/C/abcdefghi/abcdefghi/C/B/abcdefghi/E/D/abcdefghi/G/G/abcdefghi/abcdefghi/C/F/abcdefghi/I/abcdefghi/H/abcdefghi/D/I/F/B/C/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/A/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/-1",
"abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/E/F/abcdefghi/F/C/B/I/E/abcdefghi/D/abcdefghi/D/abcdefghi/H/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/E/abcdefghi/D/B/F/abcdefghi/I/G/abcdefghi/A/abcdefghi/A/abcdefghi/E/B/D/F/abcdefghi/abcdefghi/abcdefghi/G/D/I/abcdefghi/B/abcdefghi/abcdefghi/C/F/C/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/G/abcdefghi/-1",
"abcdefghi/abcdefghi/C/abcdefghi/B/H/abcdefghi/I/F/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/G/B/H/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/G/D/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/A/F/G/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/D/G/abcdefghi/abcdefghi/abcdefghi/E/B/I/abcdefghi/A/D/A/H/F/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"G/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/C/F/E/H/abcdefghi/B/D/F/abcdefghi/abcdefghi/G/F/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/G/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/C/abcdefghi/H/abcdefghi/F/D/C/D/abcdefghi/F/B/A/G/abcdefghi/abcdefghi/D/E/abcdefghi/H/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/B/D/G/abcdefghi/-1",
"B/H/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/E/D/abcdefghi/abcdefghi/E/F/abcdefghi/G/abcdefghi/H/A/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/E/F/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/D/C/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/B/A/abcdefghi/abcdefghi/D/G/abcdefghi/H/I/G/E/abcdefghi/C/abcdefghi/B/abcdefghi/-1",
"C/H/abcdefghi/E/abcdefghi/abcdefghi/B/G/D/G/abcdefghi/abcdefghi/abcdefghi/I/C/F/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/B/D/H/C/I/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/I/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/F/E/E/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/H/C/abcdefghi/abcdefghi/E/abcdefghi/F/abcdefghi/A/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/A/E/H/I/abcdefghi/abcdefghi/-1",
"abcdefghi/H/F/D/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/E/G/abcdefghi/abcdefghi/F/B/abcdefghi/C/B/abcdefghi/D/A/G/abcdefghi/F/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/C/E/abcdefghi/abcdefghi/abcdefghi/H/G/A/C/abcdefghi/I/abcdefghi/D/I/C/abcdefghi/F/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/G/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/E/-1",
"H/abcdefghi/G/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/I/F/D/G/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/G/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/B/H/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/I/D/I/E/B/abcdefghi/C/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/I/H/abcdefghi/E/abcdefghi/A/F/H/abcdefghi/E/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/E/A/abcdefghi/G/D/abcdefghi/abcdefghi/H/I/abcdefghi/D/abcdefghi/E/abcdefghi/C/D/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/A/I/C/abcdefghi/abcdefghi/F/abcdefghi/A/B/G/abcdefghi/abcdefghi/G/abcdefghi/D/B/E/C/abcdefghi/F/abcdefghi/F/E/abcdefghi/abcdefghi/C/D/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/I/C/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/H/I/G/abcdefghi/C/abcdefghi/-1",
"abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/G/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/F/E/H/abcdefghi/abcdefghi/E/B/abcdefghi/I/D/abcdefghi/abcdefghi/F/abcdefghi/C/E/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/B/abcdefghi/G/F/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/D/C/A/B/D/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/H/E/abcdefghi/A/abcdefghi/abcdefghi/H/C/F/abcdefghi/abcdefghi/H/G/B/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/-1",
"C/D/abcdefghi/abcdefghi/G/A/abcdefghi/H/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/A/F/D/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/G/A/D/abcdefghi/H/B/abcdefghi/A/C/I/abcdefghi/H/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/E/abcdefghi/A/abcdefghi/I/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/H/abcdefghi/I/D/abcdefghi/A/G/abcdefghi/F/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/G/-1",
"G/F/abcdefghi/abcdefghi/abcdefghi/B/E/H/abcdefghi/abcdefghi/I/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/D/G/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/D/abcdefghi/abcdefghi/C/G/F/G/A/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/I/abcdefghi/abcdefghi/G/H/A/F/I/abcdefghi/E/abcdefghi/abcdefghi/D/F/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/A/abcdefghi/B/abcdefghi/-1",
"abcdefghi/D/C/H/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/I/abcdefghi/B/H/B/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/F/G/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/A/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/B/abcdefghi/E/G/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/B/F/D/D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/G/-1",
"I/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/E/F/H/abcdefghi/F/D/E/abcdefghi/abcdefghi/B/A/B/E/abcdefghi/abcdefghi/abcdefghi/A/G/abcdefghi/H/E/C/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/I/C/F/abcdefghi/abcdefghi/C/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/I/abcdefghi/F/E/B/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/A/F/abcdefghi/abcdefghi/C/E/-1",
"abcdefghi/abcdefghi/abcdefghi/F/B/G/I/abcdefghi/D/B/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/F/A/abcdefghi/H/G/abcdefghi/abcdefghi/A/I/abcdefghi/B/abcdefghi/E/F/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/A/F/I/G/abcdefghi/C/A/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/H/D/B/E/abcdefghi/abcdefghi/C/abcdefghi/A/abcdefghi/abcdefghi/C/H/D/abcdefghi/abcdefghi/F/F/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/-1",
"D/abcdefghi/abcdefghi/H/G/abcdefghi/I/abcdefghi/abcdefghi/A/C/F/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/I/abcdefghi/abcdefghi/C/E/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/I/H/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/G/abcdefghi/H/A/C/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/D/G/abcdefghi/A/abcdefghi/A/E/I/F/abcdefghi/abcdefghi/D/C/-1",
"F/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/G/F/C/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/abcdefghi/E/A/abcdefghi/F/abcdefghi/I/E/C/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/C/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/H/F/G/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/E/G/B/E/A/D/abcdefghi/C/F/abcdefghi/H/-1",
"G/abcdefghi/abcdefghi/H/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/C/E/B/abcdefghi/A/abcdefghi/G/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/C/abcdefghi/G/abcdefghi/I/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/C/abcdefghi/E/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/E/abcdefghi/H/A/F/abcdefghi/E/G/abcdefghi/abcdefghi/B/D/abcdefghi/G/abcdefghi/I/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/I/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/E/-1",
"abcdefghi/I/G/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/B/C/abcdefghi/E/abcdefghi/H/F/I/abcdefghi/E/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/G/abcdefghi/B/abcdefghi/I/E/A/abcdefghi/abcdefghi/D/H/E/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/H/D/abcdefghi/abcdefghi/H/B/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/G/F/I/abcdefghi/H/E/abcdefghi/abcdefghi/-1",
"D/B/G/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/D/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/H/G/abcdefghi/abcdefghi/D/abcdefghi/B/H/C/E/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/I/abcdefghi/B/D/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/H/I/E/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/B/C/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/C/H/-1",
"B/abcdefghi/I/A/abcdefghi/H/abcdefghi/E/abcdefghi/G/A/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/A/B/F/abcdefghi/abcdefghi/I/G/C/H/abcdefghi/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/I/F/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/B/G/E/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/H/D/abcdefghi/abcdefghi/G/H/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/I/-1",
"abcdefghi/I/F/G/abcdefghi/abcdefghi/D/E/abcdefghi/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/F/abcdefghi/E/abcdefghi/I/D/F/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/C/D/abcdefghi/G/D/abcdefghi/abcdefghi/F/abcdefghi/B/abcdefghi/abcdefghi/A/H/abcdefghi/B/abcdefghi/D/abcdefghi/F/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/A/B/H/I/abcdefghi/E/abcdefghi/H/G/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/E/-1",
"abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/H/B/G/F/abcdefghi/E/abcdefghi/B/D/abcdefghi/A/B/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/H/D/C/I/D/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/F/abcdefghi/D/G/abcdefghi/abcdefghi/A/abcdefghi/F/C/I/abcdefghi/abcdefghi/G/abcdefghi/D/G/abcdefghi/B/F/abcdefghi/C/abcdefghi/abcdefghi/C/abcdefghi/H/G/abcdefghi/E/abcdefghi/abcdefghi/F/-1",
"abcdefghi/G/I/abcdefghi/B/abcdefghi/abcdefghi/H/A/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/A/B/abcdefghi/abcdefghi/D/abcdefghi/C/F/H/abcdefghi/abcdefghi/D/E/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/E/G/abcdefghi/G/abcdefghi/F/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/F/I/F/I/D/A/abcdefghi/C/G/B/abcdefghi/B/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/-1",
"abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/I/H/A/B/F/abcdefghi/abcdefghi/C/E/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/B/I/abcdefghi/B/E/abcdefghi/F/D/A/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/E/E/F/C/abcdefghi/D/abcdefghi/I/H/abcdefghi/abcdefghi/I/abcdefghi/E/C/abcdefghi/B/abcdefghi/A/-1",
"B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/C/abcdefghi/E/D/E/F/C/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/F/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/A/abcdefghi/D/H/F/A/D/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/B/abcdefghi/F/B/abcdefghi/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/C/abcdefghi/abcdefghi/abcdefghi/E/I/C/G/A/abcdefghi/E/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/-1",
"E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/G/I/G/H/abcdefghi/F/C/abcdefghi/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/D/E/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/E/abcdefghi/abcdefghi/A/abcdefghi/F/H/abcdefghi/A/I/abcdefghi/abcdefghi/C/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/B/D/F/abcdefghi/A/E/abcdefghi/I/H/F/B/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/-1",
"abcdefghi/D/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/C/abcdefghi/G/A/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/H/G/F/B/abcdefghi/H/E/F/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/F/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/F/abcdefghi/H/C/D/G/G/A/D/C/abcdefghi/abcdefghi/I/abcdefghi/H/-1",
"abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/G/H/C/F/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/I/H/abcdefghi/E/F/abcdefghi/F/I/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/E/C/B/abcdefghi/abcdefghi/C/A/abcdefghi/E/F/abcdefghi/abcdefghi/D/abcdefghi/E/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/C/abcdefghi/I/E/-1",
"C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/I/H/abcdefghi/F/abcdefghi/C/D/B/E/B/abcdefghi/I/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/D/I/A/F/I/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/G/E/D/F/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/A/-1",
"B/E/abcdefghi/abcdefghi/abcdefghi/D/I/H/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/F/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/G/I/abcdefghi/B/abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/B/A/I/C/abcdefghi/F/I/abcdefghi/abcdefghi/E/G/A/B/C/abcdefghi/abcdefghi/B/abcdefghi/H/abcdefghi/F/E/E/B/D/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/-1",
"abcdefghi/B/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/D/F/abcdefghi/H/E/C/G/abcdefghi/G/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/B/H/abcdefghi/C/E/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/I/G/B/E/A/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/G/H/abcdefghi/F/abcdefghi/A/G/abcdefghi/E/F/abcdefghi/abcdefghi/H/abcdefghi/C/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/E/I/-1",
"E/H/G/abcdefghi/abcdefghi/F/D/I/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/G/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/A/D/I/C/abcdefghi/abcdefghi/I/H/abcdefghi/F/E/abcdefghi/abcdefghi/F/E/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/C/F/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/G/abcdefghi/D/-1",
"abcdefghi/abcdefghi/I/abcdefghi/H/B/D/abcdefghi/C/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/F/abcdefghi/C/F/abcdefghi/E/abcdefghi/abcdefghi/A/B/abcdefghi/F/G/abcdefghi/H/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/G/C/abcdefghi/A/F/abcdefghi/A/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/E/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/B/B/abcdefghi/abcdefghi/D/E/F/C/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/A/-1",
"abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/B/H/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/E/I/F/C/H/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/B/F/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/C/A/A/G/D/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/C/abcdefghi/abcdefghi/A/C/I/B/abcdefghi/E/abcdefghi/C/H/F/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/-1",
"B/abcdefghi/D/G/C/abcdefghi/A/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/I/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/B/D/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/G/F/A/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/D/G/A/I/D/abcdefghi/abcdefghi/abcdefghi/E/B/A/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/E/A/B/D/G/abcdefghi/abcdefghi/I/-1",
"abcdefghi/F/I/abcdefghi/A/abcdefghi/abcdefghi/E/abcdefghi/D/abcdefghi/E/H/C/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/A/abcdefghi/F/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/F/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/I/D/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/H/B/abcdefghi/D/I/E/D/abcdefghi/F/abcdefghi/abcdefghi/B/H/abcdefghi/I/H/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/G/-1",
"D/B/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/abcdefghi/E/abcdefghi/E/C/abcdefghi/F/abcdefghi/B/G/A/B/abcdefghi/H/G/abcdefghi/abcdefghi/E/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/abcdefghi/H/E/abcdefghi/I/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/G/F/C/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/D/B/H/A/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/C/F/abcdefghi/abcdefghi/-1",
"abcdefghi/H/abcdefghi/D/abcdefghi/I/abcdefghi/B/abcdefghi/G/E/abcdefghi/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/G/H/abcdefghi/F/I/abcdefghi/D/C/abcdefghi/I/E/abcdefghi/A/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/B/abcdefghi/I/abcdefghi/D/E/C/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/H/H/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/D/B/-1",
"C/abcdefghi/abcdefghi/E/abcdefghi/G/I/F/B/abcdefghi/A/abcdefghi/abcdefghi/D/abcdefghi/G/abcdefghi/abcdefghi/F/E/G/I/abcdefghi/abcdefghi/A/abcdefghi/C/A/F/H/abcdefghi/G/abcdefghi/abcdefghi/C/abcdefghi/E/abcdefghi/C/abcdefghi/F/D/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/C/A/abcdefghi/B/F/abcdefghi/E/abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/C/abcdefghi/A/H/abcdefghi/F/-1",
"H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/A/abcdefghi/E/H/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/C/E/D/abcdefghi/abcdefghi/abcdefghi/F/I/D/abcdefghi/A/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/C/H/F/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/C/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/G/B/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/D/I/D/abcdefghi/I/abcdefghi/G/A/H/F/abcdefghi/-1",
"A/abcdefghi/E/abcdefghi/H/G/D/B/abcdefghi/abcdefghi/I/C/abcdefghi/abcdefghi/D/H/abcdefghi/G/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/B/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/C/H/abcdefghi/E/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/abcdefghi/E/G/abcdefghi/F/A/H/C/abcdefghi/abcdefghi/B/I/H/E/abcdefghi/D/H/abcdefghi/G/D/A/abcdefghi/C/abcdefghi/abcdefghi/-1",
"G/H/abcdefghi/A/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/C/abcdefghi/H/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/C/B/G/H/abcdefghi/F/abcdefghi/I/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/G/H/C/abcdefghi/F/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/G/abcdefghi/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/B/C/abcdefghi/G/B/F/abcdefghi/D/I/E/H/-1",
"abcdefghi/H/abcdefghi/abcdefghi/B/G/F/abcdefghi/C/C/abcdefghi/B/D/abcdefghi/I/abcdefghi/G/H/A/G/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/D/B/abcdefghi/abcdefghi/F/E/C/abcdefghi/abcdefghi/A/abcdefghi/I/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/H/abcdefghi/F/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/H/B/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/H/D/A/B/F/abcdefghi/-1",
"abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/H/abcdefghi/I/B/C/A/abcdefghi/abcdefghi/abcdefghi/C/G/abcdefghi/abcdefghi/H/D/abcdefghi/E/A/abcdefghi/I/F/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/B/G/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/A/F/B/abcdefghi/abcdefghi/abcdefghi/I/H/E/C/D/E/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/H/D/abcdefghi/abcdefghi/F/abcdefghi/B/-1",
"C/abcdefghi/abcdefghi/abcdefghi/G/D/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/I/abcdefghi/F/abcdefghi/D/G/F/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/D/G/abcdefghi/abcdefghi/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/D/E/I/B/abcdefghi/abcdefghi/H/E/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/D/G/I/abcdefghi/D/H/abcdefghi/abcdefghi/A/abcdefghi/E/B/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/B/G/C/I/-1",
"abcdefghi/D/F/B/abcdefghi/abcdefghi/abcdefghi/I/C/H/G/I/abcdefghi/C/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/D/H/E/abcdefghi/abcdefghi/abcdefghi/E/I/F/abcdefghi/A/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/G/A/B/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/F/D/abcdefghi/B/F/H/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/C/E/D/abcdefghi/F/abcdefghi/C/F/H/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/E/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/A/D/F/A/abcdefghi/abcdefghi/abcdefghi/G/C/H/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/E/abcdefghi/I/G/abcdefghi/D/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/D/H/abcdefghi/I/E/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/D/A/C/abcdefghi/H/abcdefghi/F/F/abcdefghi/H/E/G/abcdefghi/C/B/abcdefghi/-1",
"abcdefghi/G/abcdefghi/A/D/abcdefghi/E/F/B/D/C/F/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/B/A/abcdefghi/F/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/A/abcdefghi/I/A/abcdefghi/abcdefghi/abcdefghi/C/E/G/E/abcdefghi/C/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/abcdefghi/D/F/C/abcdefghi/G/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/A/D/abcdefghi/abcdefghi/H/-1",
"I/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/G/abcdefghi/E/abcdefghi/D/H/B/F/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/I/A/abcdefghi/F/E/H/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/F/D/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/D/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/C/D/B/H/I/E/G/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/C/B/-1",
"abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/F/C/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/H/B/I/C/abcdefghi/F/D/abcdefghi/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/A/H/E/H/abcdefghi/abcdefghi/abcdefghi/I/G/abcdefghi/abcdefghi/F/B/A/I/C/G/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/F/B/abcdefghi/G/A/abcdefghi/G/I/abcdefghi/A/D/abcdefghi/C/F/-1",
"abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/H/I/abcdefghi/abcdefghi/abcdefghi/E/A/C/D/G/A/abcdefghi/E/abcdefghi/F/abcdefghi/B/A/abcdefghi/F/abcdefghi/C/H/abcdefghi/E/abcdefghi/abcdefghi/I/H/abcdefghi/B/E/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/E/I/G/abcdefghi/abcdefghi/B/H/B/abcdefghi/abcdefghi/C/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/B/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/B/abcdefghi/A/-1",
"abcdefghi/C/abcdefghi/H/D/B/abcdefghi/E/abcdefghi/abcdefghi/G/I/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/C/abcdefghi/abcdefghi/A/B/abcdefghi/E/abcdefghi/I/D/G/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/A/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/A/F/abcdefghi/H/abcdefghi/H/G/D/C/F/B/A/E/A/abcdefghi/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/B/I/F/A/abcdefghi/E/abcdefghi/D/H/abcdefghi/G/abcdefghi/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/F/abcdefghi/D/H/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/H/B/C/abcdefghi/H/abcdefghi/abcdefghi/C/A/abcdefghi/F/E/B/abcdefghi/abcdefghi/E/D/H/A/abcdefghi/abcdefghi/D/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/C/abcdefghi/B/-1",
"H/G/I/D/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/E/abcdefghi/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/B/F/I/abcdefghi/abcdefghi/C/D/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/G/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/I/A/abcdefghi/I/abcdefghi/abcdefghi/E/H/abcdefghi/C/D/A/F/abcdefghi/abcdefghi/I/abcdefghi/H/G/abcdefghi/D/E/abcdefghi/A/C/abcdefghi/B/abcdefghi/abcdefghi/-1",
"A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/abcdefghi/H/C/abcdefghi/abcdefghi/F/I/E/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/E/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/A/abcdefghi/D/abcdefghi/I/E/B/F/F/B/E/abcdefghi/abcdefghi/abcdefghi/I/C/D/B/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/abcdefghi/I/E/A/G/abcdefghi/I/E/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/abcdefghi/-1",
"abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/H/E/B/abcdefghi/C/abcdefghi/I/abcdefghi/G/I/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/B/G/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/F/C/abcdefghi/A/abcdefghi/abcdefghi/H/D/G/E/abcdefghi/abcdefghi/G/abcdefghi/H/I/C/abcdefghi/abcdefghi/E/G/C/A/I/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/B/E/abcdefghi/G/C/-1",
"abcdefghi/abcdefghi/H/I/F/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/H/G/E/F/C/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/E/D/H/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/A/abcdefghi/abcdefghi/H/F/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/D/abcdefghi/H/B/E/F/E/D/I/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/F/abcdefghi/abcdefghi/E/abcdefghi/G/D/abcdefghi/-1",
"F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/C/abcdefghi/G/D/abcdefghi/A/abcdefghi/abcdefghi/D/H/B/abcdefghi/I/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/F/H/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/D/C/B/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/G/C/abcdefghi/B/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/A/D/G/abcdefghi/abcdefghi/abcdefghi/C/H/B/abcdefghi/E/abcdefghi/D/I/abcdefghi/F/G/-1",
"abcdefghi/abcdefghi/H/abcdefghi/D/abcdefghi/I/G/A/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/E/abcdefghi/F/I/B/F/abcdefghi/G/A/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/D/A/abcdefghi/abcdefghi/F/G/C/A/abcdefghi/H/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/abcdefghi/I/B/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/F/abcdefghi/F/E/C/A/abcdefghi/I/abcdefghi/H/abcdefghi/-1",
"abcdefghi/E/H/abcdefghi/abcdefghi/D/F/A/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/D/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/I/abcdefghi/A/E/abcdefghi/B/D/abcdefghi/abcdefghi/B/abcdefghi/G/D/A/I/abcdefghi/F/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/A/C/abcdefghi/abcdefghi/A/G/F/B/D/abcdefghi/I/abcdefghi/H/D/B/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/-1",
"E/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/G/abcdefghi/D/A/G/B/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/B/E/C/I/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/D/abcdefghi/abcdefghi/B/abcdefghi/A/C/abcdefghi/F/abcdefghi/A/G/abcdefghi/E/D/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/G/abcdefghi/abcdefghi/B/C/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/I/A/H/abcdefghi/F/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/I/E/abcdefghi/-1",
"abcdefghi/A/C/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/B/G/D/A/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/I/D/G/D/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/H/B/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/G/F/abcdefghi/abcdefghi/B/C/H/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/F/C/H/E/abcdefghi/G/abcdefghi/-1",
"D/abcdefghi/C/abcdefghi/abcdefghi/H/G/abcdefghi/F/abcdefghi/G/abcdefghi/C/abcdefghi/F/H/I/D/I/F/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/B/abcdefghi/D/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/A/E/abcdefghi/B/abcdefghi/C/F/C/A/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/abcdefghi/B/abcdefghi/E/A/abcdefghi/abcdefghi/E/abcdefghi/D/abcdefghi/C/H/G/-1",
"abcdefghi/abcdefghi/A/D/abcdefghi/H/abcdefghi/G/abcdefghi/G/C/abcdefghi/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/A/I/F/D/abcdefghi/F/H/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/G/abcdefghi/G/C/abcdefghi/abcdefghi/B/H/abcdefghi/D/E/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/F/abcdefghi/E/C/C/B/abcdefghi/E/abcdefghi/abcdefghi/F/A/I/-1",
"abcdefghi/G/C/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/G/abcdefghi/E/H/abcdefghi/abcdefghi/F/abcdefghi/A/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/A/H/G/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/G/D/F/H/F/abcdefghi/D/abcdefghi/I/abcdefghi/abcdefghi/C/E/abcdefghi/abcdefghi/G/E/D/F/H/I/A/abcdefghi/E/A/H/abcdefghi/B/abcdefghi/abcdefghi/D/-1",
"C/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/E/I/F/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/D/C/F/E/G/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/G/abcdefghi/abcdefghi/G/D/I/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/B/B/E/C/F/abcdefghi/D/H/abcdefghi/abcdefghi/A/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/abcdefghi/I/D/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/B/I/abcdefghi/-1",
"F/abcdefghi/I/D/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/F/D/C/A/abcdefghi/abcdefghi/D/abcdefghi/E/B/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/A/F/H/F/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/D/E/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/D/abcdefghi/F/A/G/abcdefghi/B/C/abcdefghi/B/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/-1",
"F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/G/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/B/A/abcdefghi/F/abcdefghi/G/D/abcdefghi/H/abcdefghi/G/C/abcdefghi/abcdefghi/H/abcdefghi/F/E/abcdefghi/I/abcdefghi/D/E/abcdefghi/G/H/abcdefghi/abcdefghi/B/E/A/abcdefghi/abcdefghi/I/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/E/abcdefghi/abcdefghi/E/abcdefghi/D/G/abcdefghi/abcdefghi/H/I/C/abcdefghi/abcdefghi/A/C/F/abcdefghi/abcdefghi/abcdefghi/G/-1",
"abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/A/abcdefghi/H/H/A/F/abcdefghi/abcdefghi/E/abcdefghi/D/C/abcdefghi/abcdefghi/E/D/H/abcdefghi/I/B/abcdefghi/abcdefghi/H/D/G/F/B/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/F/H/I/abcdefghi/D/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/E/F/D/-1",
"abcdefghi/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/H/C/F/I/abcdefghi/D/G/abcdefghi/D/abcdefghi/abcdefghi/B/C/H/E/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/E/abcdefghi/I/abcdefghi/H/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/D/A/B/G/C/abcdefghi/I/abcdefghi/abcdefghi/F/G/abcdefghi/A/B/G/abcdefghi/C/abcdefghi/abcdefghi/I/D/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/E/C/-1",
"C/D/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/I/G/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/D/B/abcdefghi/E/I/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/B/abcdefghi/E/I/abcdefghi/abcdefghi/A/F/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/A/H/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/H/abcdefghi/abcdefghi/F/A/G/abcdefghi/H/abcdefghi/abcdefghi/B/E/abcdefghi/E/H/A/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/G/E/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/A/B/abcdefghi/E/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/abcdefghi/F/B/abcdefghi/A/abcdefghi/G/G/A/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/B/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/C/E/abcdefghi/F/I/F/abcdefghi/H/abcdefghi/E/abcdefghi/D/A/abcdefghi/E/abcdefghi/D/F/I/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/F/E/-1",
"abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/E/D/abcdefghi/F/I/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/C/abcdefghi/A/abcdefghi/I/E/abcdefghi/B/E/abcdefghi/abcdefghi/G/H/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/A/B/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/C/abcdefghi/I/H/B/D/G/abcdefghi/A/abcdefghi/D/F/abcdefghi/abcdefghi/abcdefghi/A/G/abcdefghi/I/abcdefghi/B/G/abcdefghi/abcdefghi/I/C/abcdefghi/H/-1",
"A/G/abcdefghi/abcdefghi/D/E/abcdefghi/abcdefghi/H/abcdefghi/C/F/G/A/abcdefghi/abcdefghi/abcdefghi/D/E/abcdefghi/D/C/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/H/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/E/D/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/E/abcdefghi/C/abcdefghi/H/abcdefghi/abcdefghi/H/G/D/abcdefghi/A/E/abcdefghi/C/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/G/-1",
"abcdefghi/abcdefghi/I/E/H/abcdefghi/abcdefghi/D/C/abcdefghi/C/E/I/F/B/abcdefghi/abcdefghi/abcdefghi/F/A/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/C/I/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/F/H/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/G/abcdefghi/abcdefghi/H/abcdefghi/D/abcdefghi/A/B/abcdefghi/abcdefghi/A/C/B/E/G/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/I/-1",
"C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/C/abcdefghi/G/abcdefghi/D/F/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/C/G/abcdefghi/C/E/abcdefghi/abcdefghi/D/abcdefghi/A/H/H/abcdefghi/F/C/A/abcdefghi/E/abcdefghi/D/abcdefghi/B/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/E/H/B/C/abcdefghi/A/D/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/C/-1",
"abcdefghi/abcdefghi/D/I/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/B/G/abcdefghi/C/F/abcdefghi/abcdefghi/F/abcdefghi/D/A/E/G/abcdefghi/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/C/abcdefghi/A/I/H/abcdefghi/G/E/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/A/E/G/abcdefghi/G/abcdefghi/C/abcdefghi/E/abcdefghi/D/B/A/I/E/D/abcdefghi/abcdefghi/abcdefghi/F/C/-1",
"D/A/abcdefghi/abcdefghi/I/C/abcdefghi/abcdefghi/F/H/abcdefghi/I/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/F/abcdefghi/C/B/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/abcdefghi/H/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/F/A/D/abcdefghi/C/D/abcdefghi/I/E/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/F/D/G/E/H/abcdefghi/C/I/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/E/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/-1",
"G/abcdefghi/A/abcdefghi/E/F/C/D/abcdefghi/H/E/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/A/G/I/E/abcdefghi/B/F/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/H/G/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/A/B/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/I/E/abcdefghi/D/I/abcdefghi/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/H/abcdefghi/G/E/abcdefghi/abcdefghi/A/-1",
"abcdefghi/A/abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/I/abcdefghi/B/F/abcdefghi/H/E/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/D/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/D/H/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/F/abcdefghi/A/abcdefghi/E/abcdefghi/A/E/abcdefghi/G/abcdefghi/H/B/F/abcdefghi/abcdefghi/H/B/A/C/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/F/abcdefghi/A/abcdefghi/C/abcdefghi/A/abcdefghi/G/abcdefghi/I/abcdefghi/B/-1",
"H/I/E/D/abcdefghi/B/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/A/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/F/H/abcdefghi/E/I/E/B/I/C/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/A/D/A/abcdefghi/G/I/B/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/F/E/D/abcdefghi/B/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/abcdefghi/-1",
"D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/abcdefghi/A/E/abcdefghi/abcdefghi/I/H/G/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/H/I/D/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/G/A/abcdefghi/abcdefghi/abcdefghi/C/F/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/I/abcdefghi/B/abcdefghi/G/abcdefghi/F/abcdefghi/abcdefghi/G/A/F/C/D/H/I/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/-1",
"F/I/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/E/H/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/A/abcdefghi/F/C/abcdefghi/H/H/F/abcdefghi/abcdefghi/D/C/abcdefghi/B/abcdefghi/A/D/I/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/C/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/A/D/F/G/abcdefghi/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/C/A/-1",
"abcdefghi/abcdefghi/E/G/abcdefghi/I/C/B/abcdefghi/A/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/E/abcdefghi/F/abcdefghi/H/I/abcdefghi/C/D/I/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/H/H/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/F/C/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/I/E/B/A/F/-1",
"abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/H/abcdefghi/abcdefghi/E/abcdefghi/A/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/E/abcdefghi/D/B/H/abcdefghi/E/abcdefghi/A/F/abcdefghi/C/abcdefghi/F/A/C/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/H/A/E/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/C/abcdefghi/A/abcdefghi/H/G/abcdefghi/I/B/abcdefghi/F/-1",
"abcdefghi/I/abcdefghi/H/abcdefghi/G/F/D/abcdefghi/A/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/I/G/abcdefghi/abcdefghi/H/abcdefghi/D/F/E/B/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/H/F/D/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/C/G/B/D/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/A/H/abcdefghi/-1",
"A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/I/abcdefghi/G/E/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/H/F/E/abcdefghi/abcdefghi/abcdefghi/D/B/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/F/D/B/H/abcdefghi/A/H/abcdefghi/A/abcdefghi/abcdefghi/E/I/B/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/B/D/I/abcdefghi/C/abcdefghi/H/F/I/abcdefghi/G/abcdefghi/-1",
"abcdefghi/D/H/C/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/G/C/F/C/I/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/B/H/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/F/A/abcdefghi/B/C/I/abcdefghi/B/E/A/F/abcdefghi/abcdefghi/I/G/C/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/A/abcdefghi/F/A/abcdefghi/abcdefghi/G/abcdefghi/B/abcdefghi/-1",
"G/abcdefghi/abcdefghi/abcdefghi/B/C/I/D/E/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/B/abcdefghi/I/E/abcdefghi/abcdefghi/G/C/A/abcdefghi/C/B/abcdefghi/abcdefghi/D/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/I/C/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/C/G/abcdefghi/abcdefghi/F/E/abcdefghi/G/abcdefghi/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/D/G/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/B/A/G/-1",
"abcdefghi/B/abcdefghi/F/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/G/abcdefghi/H/B/abcdefghi/I/abcdefghi/F/I/D/F/abcdefghi/G/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/H/abcdefghi/C/I/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/D/B/abcdefghi/H/abcdefghi/abcdefghi/G/D/abcdefghi/E/A/H/B/F/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/C/E/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/B/C/-1",
"abcdefghi/A/H/abcdefghi/F/I/C/E/abcdefghi/F/E/abcdefghi/C/abcdefghi/H/D/abcdefghi/B/abcdefghi/abcdefghi/B/abcdefghi/E/D/H/abcdefghi/I/A/abcdefghi/F/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/H/H/G/abcdefghi/D/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/B/I/abcdefghi/C/abcdefghi/abcdefghi/A/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/F/-1",
"F/abcdefghi/E/abcdefghi/I/B/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/D/H/F/abcdefghi/I/A/abcdefghi/C/F/abcdefghi/B/abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/E/I/G/B/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/G/D/abcdefghi/E/abcdefghi/A/B/abcdefghi/E/I/abcdefghi/abcdefghi/D/F/abcdefghi/A/abcdefghi/C/H/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/I/G/-1",
"B/abcdefghi/E/H/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/B/F/G/F/abcdefghi/abcdefghi/C/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/C/I/E/E/C/abcdefghi/abcdefghi/abcdefghi/I/F/G/abcdefghi/abcdefghi/I/G/C/A/E/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/A/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/B/D/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/-1",
"F/H/E/abcdefghi/D/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/F/I/abcdefghi/B/G/A/C/F/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/B/D/abcdefghi/abcdefghi/C/I/G/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/I/G/H/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/D/abcdefghi/D/G/F/abcdefghi/E/B/abcdefghi/I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/G/-1",
"abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/G/abcdefghi/H/H/abcdefghi/E/F/I/A/abcdefghi/D/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/D/E/F/I/C/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/E/G/A/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/F/F/H/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/G/E/abcdefghi/F/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/D/-1",
"abcdefghi/C/G/E/I/abcdefghi/abcdefghi/B/abcdefghi/F/B/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/F/abcdefghi/abcdefghi/H/abcdefghi/F/I/D/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/H/F/abcdefghi/D/E/I/abcdefghi/E/D/F/abcdefghi/H/abcdefghi/I/B/A/F/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/A/G/F/-1",
"H/abcdefghi/abcdefghi/E/F/A/B/abcdefghi/abcdefghi/abcdefghi/D/E/abcdefghi/B/C/F/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/C/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/G/E/abcdefghi/C/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/C/I/abcdefghi/D/abcdefghi/abcdefghi/H/I/abcdefghi/abcdefghi/E/abcdefghi/B/F/G/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/abcdefghi/C/B/abcdefghi/F/abcdefghi/abcdefghi/G/abcdefghi/I/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/E/abcdefghi/abcdefghi/G/C/D/abcdefghi/B/abcdefghi/abcdefghi/A/B/abcdefghi/abcdefghi/abcdefghi/E/C/F/abcdefghi/abcdefghi/G/F/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/G/H/abcdefghi/F/D/abcdefghi/abcdefghi/A/H/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/C/G/E/abcdefghi/F/A/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/C/abcdefghi/B/G/abcdefghi/H/abcdefghi/abcdefghi/F/B/E/I/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/C/abcdefghi/D/C/abcdefghi/B/abcdefghi/E/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/H/D/abcdefghi/abcdefghi/abcdefghi/A/D/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/C/abcdefghi/I/F/G/B/C/abcdefghi/abcdefghi/G/I/abcdefghi/D/abcdefghi/abcdefghi/E/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/D/B/abcdefghi/E/H/C/abcdefghi/abcdefghi/H/B/C/abcdefghi/abcdefghi/D/abcdefghi/F/-1",
"G/abcdefghi/abcdefghi/I/D/abcdefghi/H/abcdefghi/E/H/B/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/B/abcdefghi/E/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/G/F/D/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/G/E/B/abcdefghi/E/C/B/H/A/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/C/B/E/A/D/abcdefghi/-1",
"G/abcdefghi/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/D/E/abcdefghi/abcdefghi/B/G/I/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/G/H/I/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/C/E/I/D/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/D/E/F/abcdefghi/A/abcdefghi/H/abcdefghi/G/C/abcdefghi/abcdefghi/D/G/abcdefghi/E/abcdefghi/H/B/abcdefghi/-1",
"abcdefghi/D/F/H/abcdefghi/B/E/abcdefghi/I/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/A/abcdefghi/G/abcdefghi/E/C/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/C/abcdefghi/abcdefghi/H/H/F/abcdefghi/B/abcdefghi/A/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/F/B/D/abcdefghi/abcdefghi/abcdefghi/E/F/C/abcdefghi/G/E/C/I/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/F/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/-1",
"abcdefghi/B/A/abcdefghi/C/E/D/abcdefghi/G/H/abcdefghi/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/D/abcdefghi/G/abcdefghi/F/H/A/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/I/E/D/G/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/abcdefghi/D/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/C/C/abcdefghi/B/I/abcdefghi/abcdefghi/H/abcdefghi/F/G/F/I/C/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/D/I/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/abcdefghi/G/A/D/I/H/abcdefghi/abcdefghi/B/abcdefghi/D/E/G/F/C/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/G/D/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/B/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/I/H/D/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/B/E/A/B/F/C/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/C/-1",
"abcdefghi/E/A/abcdefghi/C/abcdefghi/abcdefghi/I/D/I/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/A/H/B/I/D/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/F/I/C/D/abcdefghi/abcdefghi/F/C/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/B/abcdefghi/abcdefghi/F/I/H/A/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/D/G/abcdefghi/abcdefghi/A/F/E/abcdefghi/abcdefghi/G/B/D/abcdefghi/-1",
"abcdefghi/F/abcdefghi/C/I/B/G/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/F/abcdefghi/H/abcdefghi/G/abcdefghi/C/H/F/abcdefghi/A/abcdefghi/I/B/H/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/G/A/I/abcdefghi/G/abcdefghi/abcdefghi/E/C/H/abcdefghi/B/H/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/F/D/H/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/D/E/-1",
"E/abcdefghi/abcdefghi/H/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/F/A/E/G/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/E/B/A/abcdefghi/I/abcdefghi/E/abcdefghi/D/abcdefghi/H/abcdefghi/H/G/D/F/A/E/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/abcdefghi/C/A/abcdefghi/H/abcdefghi/abcdefghi/E/F/D/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/G/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/abcdefghi/B/abcdefghi/-1",
"abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/C/abcdefghi/A/D/abcdefghi/abcdefghi/abcdefghi/E/H/abcdefghi/I/abcdefghi/B/G/D/abcdefghi/abcdefghi/E/G/abcdefghi/D/abcdefghi/H/abcdefghi/I/B/I/abcdefghi/E/C/F/abcdefghi/abcdefghi/A/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/E/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/B/abcdefghi/G/H/G/abcdefghi/abcdefghi/abcdefghi/E/C/A/D/A/F/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/-1",
"H/B/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/F/abcdefghi/abcdefghi/C/C/abcdefghi/G/abcdefghi/B/abcdefghi/I/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/I/E/abcdefghi/abcdefghi/F/A/abcdefghi/B/abcdefghi/E/I/abcdefghi/G/D/abcdefghi/abcdefghi/E/I/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/G/abcdefghi/B/abcdefghi/H/A/D/abcdefghi/abcdefghi/D/B/G/I/abcdefghi/abcdefghi/H/abcdefghi/-1",
"A/E/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/C/G/H/abcdefghi/B/E/abcdefghi/F/abcdefghi/abcdefghi/C/abcdefghi/E/F/G/H/abcdefghi/H/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/E/C/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/E/B/abcdefghi/G/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/I/D/abcdefghi/abcdefghi/F/I/abcdefghi/H/abcdefghi/C/B/E/-1",
"D/abcdefghi/abcdefghi/H/E/abcdefghi/C/abcdefghi/abcdefghi/F/I/abcdefghi/B/D/C/abcdefghi/E/abcdefghi/abcdefghi/A/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/A/I/G/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/D/abcdefghi/abcdefghi/B/I/E/G/F/abcdefghi/abcdefghi/abcdefghi/E/H/B/G/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/I/F/abcdefghi/abcdefghi/D/H/abcdefghi/-1",
"B/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/H/F/A/abcdefghi/abcdefghi/D/abcdefghi/H/C/E/abcdefghi/E/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/D/I/A/G/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/D/abcdefghi/F/A/abcdefghi/abcdefghi/C/A/abcdefghi/F/abcdefghi/D/abcdefghi/I/C/A/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/abcdefghi/G/I/A/abcdefghi/H/abcdefghi/abcdefghi/G/F/abcdefghi/abcdefghi/C/-1",
"abcdefghi/F/E/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/I/F/D/C/abcdefghi/I/abcdefghi/H/D/B/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/A/F/H/D/A/D/F/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/I/abcdefghi/abcdefghi/C/B/abcdefghi/A/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/F/E/abcdefghi/G/abcdefghi/C/abcdefghi/B/H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/F/abcdefghi/A/B/abcdefghi/-1",
"A/abcdefghi/I/E/D/abcdefghi/H/F/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/D/C/D/abcdefghi/B/F/H/abcdefghi/abcdefghi/A/abcdefghi/E/H/C/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/F/H/abcdefghi/abcdefghi/B/abcdefghi/C/abcdefghi/C/abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/E/abcdefghi/B/abcdefghi/I/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/D/abcdefghi/E/abcdefghi/abcdefghi/A/C/G/abcdefghi/H/abcdefghi/-1",
"abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/F/A/I/abcdefghi/G/abcdefghi/abcdefghi/E/I/abcdefghi/abcdefghi/H/C/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/C/abcdefghi/abcdefghi/H/abcdefghi/A/D/abcdefghi/A/abcdefghi/abcdefghi/D/C/F/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/A/F/abcdefghi/B/C/abcdefghi/A/abcdefghi/I/G/abcdefghi/B/H/abcdefghi/abcdefghi/F/D/B/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/A/-1",
"G/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/I/E/abcdefghi/D/B/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/C/A/G/abcdefghi/H/abcdefghi/abcdefghi/C/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/D/D/abcdefghi/F/H/abcdefghi/G/A/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/D/B/F/abcdefghi/abcdefghi/C/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/F/E/abcdefghi/F/H/G/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/A/abcdefghi/G/B/-1",
"A/E/D/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/abcdefghi/E/abcdefghi/abcdefghi/B/E/H/C/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/A/D/D/abcdefghi/H/abcdefghi/abcdefghi/B/abcdefghi/E/C/abcdefghi/C/abcdefghi/H/F/abcdefghi/B/abcdefghi/G/abcdefghi/abcdefghi/F/B/abcdefghi/H/abcdefghi/C/abcdefghi/H/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/abcdefghi/F/G/abcdefghi/A/H/abcdefghi/-1",
"abcdefghi/G/abcdefghi/A/B/F/I/abcdefghi/D/abcdefghi/abcdefghi/B/G/D/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/F/I/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/H/H/A/abcdefghi/abcdefghi/abcdefghi/B/F/C/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/C/I/abcdefghi/abcdefghi/A/B/H/I/abcdefghi/E/A/C/abcdefghi/abcdefghi/D/C/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/-1",
"abcdefghi/abcdefghi/B/abcdefghi/E/F/C/I/H/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/A/F/abcdefghi/H/G/I/C/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/abcdefghi/G/H/A/D/A/D/abcdefghi/abcdefghi/B/E/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/A/E/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/D/B/D/I/G/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/-1",
"F/D/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/G/I/abcdefghi/D/abcdefghi/abcdefghi/E/F/C/abcdefghi/C/B/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/B/E/G/abcdefghi/E/abcdefghi/A/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/F/C/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/E/abcdefghi/H/A/E/A/F/H/D/I/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/-1",
"F/I/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/E/C/I/abcdefghi/B/abcdefghi/A/abcdefghi/D/abcdefghi/H/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/B/I/A/H/C/D/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/B/E/I/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/H/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/A/I/G/H/abcdefghi/F/H/G/abcdefghi/D/abcdefghi/A/abcdefghi/E/abcdefghi/G/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"D/abcdefghi/C/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/A/H/abcdefghi/D/abcdefghi/E/abcdefghi/F/abcdefghi/F/B/I/G/abcdefghi/abcdefghi/A/D/G/abcdefghi/E/F/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/F/D/C/abcdefghi/abcdefghi/F/D/A/B/abcdefghi/I/E/abcdefghi/H/G/abcdefghi/abcdefghi/A/D/abcdefghi/B/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/F/abcdefghi/A/B/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"H/abcdefghi/A/B/abcdefghi/E/C/F/abcdefghi/F/C/E/I/abcdefghi/abcdefghi/B/D/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/B/H/C/F/abcdefghi/F/H/E/abcdefghi/D/A/abcdefghi/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/abcdefghi/H/abcdefghi/abcdefghi/G/C/abcdefghi/A/abcdefghi/A/abcdefghi/B/abcdefghi/E/abcdefghi/abcdefghi/G/C/-1",
"I/abcdefghi/abcdefghi/abcdefghi/B/A/D/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/E/abcdefghi/C/H/A/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/C/E/I/abcdefghi/F/abcdefghi/G/abcdefghi/D/abcdefghi/B/A/H/H/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/B/C/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/I/C/H/abcdefghi/E/F/abcdefghi/abcdefghi/abcdefghi/D/D/abcdefghi/I/G/abcdefghi/abcdefghi/A/F/abcdefghi/-1",
"E/abcdefghi/C/abcdefghi/abcdefghi/A/H/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/A/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/A/I/abcdefghi/E/D/G/abcdefghi/D/abcdefghi/B/abcdefghi/C/abcdefghi/abcdefghi/A/H/C/abcdefghi/D/E/abcdefghi/B/F/abcdefghi/abcdefghi/A/H/E/G/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/B/abcdefghi/abcdefghi/A/D/C/abcdefghi/H/E/-1",
"I/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/E/abcdefghi/H/G/B/abcdefghi/F/abcdefghi/D/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/G/F/C/H/B/abcdefghi/I/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/H/abcdefghi/B/E/A/F/abcdefghi/abcdefghi/abcdefghi/F/G/D/abcdefghi/abcdefghi/B/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/F/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/E/abcdefghi/abcdefghi/I/abcdefghi/I/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/G/-1",
"abcdefghi/I/C/B/F/abcdefghi/E/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/I/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/F/abcdefghi/abcdefghi/H/I/G/abcdefghi/D/B/C/abcdefghi/abcdefghi/D/abcdefghi/I/C/abcdefghi/abcdefghi/A/H/abcdefghi/G/A/H/abcdefghi/abcdefghi/D/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/F/D/G/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/G/abcdefghi/abcdefghi/C/D/B/abcdefghi/abcdefghi/A/-1",
"F/E/abcdefghi/abcdefghi/abcdefghi/A/C/B/abcdefghi/H/abcdefghi/I/G/abcdefghi/abcdefghi/A/abcdefghi/E/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/F/E/C/D/abcdefghi/B/abcdefghi/D/A/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/C/G/abcdefghi/I/abcdefghi/B/A/F/abcdefghi/abcdefghi/B/H/abcdefghi/E/G/E/abcdefghi/H/F/abcdefghi/abcdefghi/B/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/F/abcdefghi/-1",
"abcdefghi/C/H/abcdefghi/A/abcdefghi/D/abcdefghi/I/abcdefghi/abcdefghi/I/G/abcdefghi/H/B/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/I/abcdefghi/G/A/F/abcdefghi/B/abcdefghi/D/E/A/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/D/abcdefghi/H/D/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/E/E/F/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/C/F/H/H/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/D/abcdefghi/-1",
"abcdefghi/G/D/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/H/E/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/A/abcdefghi/C/abcdefghi/D/G/abcdefghi/E/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/I/G/F/abcdefghi/abcdefghi/B/abcdefghi/H/G/E/abcdefghi/abcdefghi/I/abcdefghi/G/F/E/C/abcdefghi/abcdefghi/abcdefghi/D/I/abcdefghi/G/abcdefghi/abcdefghi/H/F/abcdefghi/H/abcdefghi/C/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/C/abcdefghi/A/-1",
"abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/F/G/F/C/I/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/G/A/abcdefghi/B/I/abcdefghi/H/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/B/abcdefghi/I/D/A/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/H/G/abcdefghi/F/D/abcdefghi/A/abcdefghi/abcdefghi/I/abcdefghi/G/abcdefghi/A/C/E/abcdefghi/F/E/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/D/abcdefghi/H/I/-1",
"G/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/F/E/abcdefghi/abcdefghi/D/H/C/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/A/E/abcdefghi/F/G/H/D/E/abcdefghi/abcdefghi/A/abcdefghi/H/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/G/abcdefghi/I/abcdefghi/F/abcdefghi/D/G/abcdefghi/F/abcdefghi/H/A/B/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/B/E/C/abcdefghi/D/abcdefghi/abcdefghi/F/H/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/A/-1",
"abcdefghi/abcdefghi/G/I/E/H/abcdefghi/abcdefghi/C/F/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/G/D/abcdefghi/H/H/abcdefghi/B/abcdefghi/abcdefghi/D/abcdefghi/G/F/G/D/I/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/B/F/abcdefghi/abcdefghi/G/I/A/abcdefghi/abcdefghi/I/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/F/abcdefghi/D/G/abcdefghi/F/C/B/abcdefghi/E/abcdefghi/-1",
"C/G/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/B/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/H/A/E/H/abcdefghi/abcdefghi/G/B/I/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/A/E/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/E/H/D/abcdefghi/F/G/H/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/D/H/B/E/abcdefghi/A/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/C/B/H/abcdefghi/I/G/-1",
"I/A/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/E/H/F/E/abcdefghi/abcdefghi/C/F/abcdefghi/G/I/abcdefghi/F/abcdefghi/A/D/H/abcdefghi/B/E/I/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/I/E/C/A/abcdefghi/F/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/A/abcdefghi/C/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/I/F/B/abcdefghi/H/F/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/-1",
"I/A/abcdefghi/abcdefghi/H/G/D/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/I/abcdefghi/G/abcdefghi/E/I/abcdefghi/D/H/F/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/D/B/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/C/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/C/abcdefghi/I/abcdefghi/E/D/abcdefghi/abcdefghi/H/D/abcdefghi/G/C/F/A/abcdefghi/F/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/-1",
"abcdefghi/abcdefghi/abcdefghi/A/D/C/H/abcdefghi/abcdefghi/B/D/E/F/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/F/C/abcdefghi/G/abcdefghi/abcdefghi/C/H/abcdefghi/D/abcdefghi/E/A/H/G/F/abcdefghi/abcdefghi/abcdefghi/D/I/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/E/abcdefghi/C/F/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/I/F/I/G/C/abcdefghi/B/abcdefghi/D/abcdefghi/-1",
"G/A/H/F/D/abcdefghi/C/abcdefghi/B/C/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/H/C/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/B/abcdefghi/G/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/H/abcdefghi/C/I/G/A/abcdefghi/D/abcdefghi/G/C/abcdefghi/F/D/H/B/abcdefghi/abcdefghi/B/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/G/abcdefghi/E/abcdefghi/abcdefghi/G/I/abcdefghi/abcdefghi/A/-1",
"E/abcdefghi/D/abcdefghi/abcdefghi/B/C/G/abcdefghi/abcdefghi/C/abcdefghi/G/abcdefghi/D/abcdefghi/B/E/abcdefghi/abcdefghi/abcdefghi/H/E/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/A/H/E/I/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/F/A/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/H/E/G/abcdefghi/B/F/E/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/A/E/abcdefghi/F/A/E/I/F/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/-1",
"abcdefghi/D/A/abcdefghi/abcdefghi/C/abcdefghi/F/I/abcdefghi/B/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/A/G/E/abcdefghi/F/G/abcdefghi/abcdefghi/A/abcdefghi/C/B/H/abcdefghi/abcdefghi/H/E/C/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/D/B/abcdefghi/F/I/abcdefghi/abcdefghi/H/F/I/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/C/C/abcdefghi/G/A/abcdefghi/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/E/I/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/E/abcdefghi/B/abcdefghi/I/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/D/H/E/abcdefghi/B/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/abcdefghi/G/abcdefghi/H/C/abcdefghi/abcdefghi/H/E/abcdefghi/F/C/G/A/C/B/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/abcdefghi/I/C/abcdefghi/H/E/abcdefghi/E/abcdefghi/abcdefghi/A/D/H/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/B/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/E/-1",
"abcdefghi/C/G/D/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/abcdefghi/C/F/A/I/abcdefghi/abcdefghi/B/C/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/I/A/abcdefghi/abcdefghi/F/G/abcdefghi/D/F/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/F/abcdefghi/abcdefghi/abcdefghi/G/I/B/F/abcdefghi/abcdefghi/abcdefghi/B/E/abcdefghi/G/D/H/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/A/B/abcdefghi/abcdefghi/D/E/A/abcdefghi/I/abcdefghi/abcdefghi/H/-1",
"abcdefghi/abcdefghi/H/abcdefghi/F/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/I/abcdefghi/H/D/abcdefghi/F/abcdefghi/F/D/C/abcdefghi/abcdefghi/abcdefghi/A/G/abcdefghi/abcdefghi/A/D/H/F/E/C/abcdefghi/abcdefghi/E/B/abcdefghi/abcdefghi/I/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/abcdefghi/A/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/G/abcdefghi/F/B/C/A/abcdefghi/abcdefghi/B/A/E/abcdefghi/abcdefghi/G/abcdefghi/D/C/-1",
"abcdefghi/C/I/abcdefghi/abcdefghi/G/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/H/D/abcdefghi/B/abcdefghi/G/A/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/D/E/abcdefghi/abcdefghi/F/A/abcdefghi/I/D/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/I/abcdefghi/B/abcdefghi/C/A/abcdefghi/D/abcdefghi/abcdefghi/C/abcdefghi/E/A/G/D/abcdefghi/E/H/abcdefghi/G/D/abcdefghi/C/A/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/F/abcdefghi/E/-1",
"D/abcdefghi/abcdefghi/F/abcdefghi/A/C/B/I/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/A/abcdefghi/G/I/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/D/F/abcdefghi/abcdefghi/H/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/abcdefghi/C/A/abcdefghi/B/I/abcdefghi/B/A/abcdefghi/E/D/abcdefghi/abcdefghi/abcdefghi/F/I/D/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/H/F/G/I/C/abcdefghi/E/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/H/D/-1",
"abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/B/H/abcdefghi/A/abcdefghi/D/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/abcdefghi/G/C/B/abcdefghi/A/abcdefghi/D/abcdefghi/E/H/abcdefghi/I/G/abcdefghi/F/abcdefghi/D/F/abcdefghi/abcdefghi/D/B/E/I/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/C/abcdefghi/B/abcdefghi/F/abcdefghi/abcdefghi/A/I/abcdefghi/B/abcdefghi/abcdefghi/A/G/abcdefghi/abcdefghi/B/H/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/H/D/abcdefghi/abcdefghi/G/-1",
"abcdefghi/E/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/F/abcdefghi/G/F/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/C/abcdefghi/G/E/D/I/abcdefghi/E/A/D/abcdefghi/abcdefghi/B/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/D/E/abcdefghi/abcdefghi/I/abcdefghi/A/G/E/F/abcdefghi/E/B/abcdefghi/H/abcdefghi/I/D/abcdefghi/A/F/abcdefghi/G/E/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/-1",
"abcdefghi/abcdefghi/F/G/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/A/H/abcdefghi/D/G/abcdefghi/C/D/B/abcdefghi/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/E/C/H/G/D/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/F/C/A/D/abcdefghi/abcdefghi/I/abcdefghi/H/B/abcdefghi/B/abcdefghi/I/abcdefghi/H/D/E/abcdefghi/A/F/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/G/abcdefghi/-1",
"abcdefghi/I/A/H/D/G/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/H/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/B/D/abcdefghi/abcdefghi/I/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/I/C/abcdefghi/E/I/abcdefghi/C/B/abcdefghi/H/G/abcdefghi/abcdefghi/C/abcdefghi/H/abcdefghi/D/B/abcdefghi/A/abcdefghi/abcdefghi/B/abcdefghi/H/abcdefghi/abcdefghi/I/D/abcdefghi/F/G/abcdefghi/abcdefghi/B/C/abcdefghi/I/G/abcdefghi/C/A/D/H/abcdefghi/F/-1",
"abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/abcdefghi/I/abcdefghi/H/F/E/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/G/I/abcdefghi/abcdefghi/E/D/F/A/abcdefghi/I/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/D/B/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/H/abcdefghi/abcdefghi/B/A/F/C/A/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/H/I/abcdefghi/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/I/C/H/B/F/-1",
"abcdefghi/G/I/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/A/abcdefghi/C/abcdefghi/G/E/abcdefghi/E/abcdefghi/abcdefghi/F/abcdefghi/B/I/A/G/abcdefghi/B/abcdefghi/C/abcdefghi/D/H/abcdefghi/I/C/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/A/B/C/H/F/abcdefghi/I/G/D/abcdefghi/C/abcdefghi/D/I/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/H/E/abcdefghi/abcdefghi/C/H/A/abcdefghi/abcdefghi/F/-1",
"abcdefghi/abcdefghi/C/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/H/F/E/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/A/C/abcdefghi/I/G/abcdefghi/D/F/abcdefghi/abcdefghi/abcdefghi/B/D/E/abcdefghi/abcdefghi/B/H/abcdefghi/I/abcdefghi/C/abcdefghi/H/abcdefghi/I/G/F/D/abcdefghi/B/D/G/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/H/B/C/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/E/F/-1",
"A/abcdefghi/D/abcdefghi/H/G/E/abcdefghi/B/abcdefghi/F/G/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/H/abcdefghi/I/abcdefghi/B/A/C/abcdefghi/D/abcdefghi/G/D/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/F/H/abcdefghi/F/abcdefghi/B/abcdefghi/C/I/abcdefghi/abcdefghi/G/abcdefghi/H/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/D/D/abcdefghi/abcdefghi/I/E/F/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/B/H/A/F/E/-1",
"abcdefghi/G/C/abcdefghi/H/E/I/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/H/B/H/abcdefghi/I/A/C/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/F/abcdefghi/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/I/G/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/E/A/C/F/B/abcdefghi/I/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/D/G/H/I/abcdefghi/abcdefghi/abcdefghi/C/E/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/-1",
"A/E/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/G/F/A/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/I/H/abcdefghi/E/F/A/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/C/abcdefghi/B/abcdefghi/abcdefghi/G/abcdefghi/E/I/H/D/abcdefghi/abcdefghi/abcdefghi/H/F/C/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/I/abcdefghi/G/F/E/H/D/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/C/E/G/E/D/B/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/-1",
"abcdefghi/abcdefghi/E/H/abcdefghi/abcdefghi/G/A/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/C/D/abcdefghi/abcdefghi/abcdefghi/A/B/F/abcdefghi/abcdefghi/I/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/F/G/abcdefghi/abcdefghi/G/D/C/H/B/abcdefghi/abcdefghi/C/B/A/G/abcdefghi/F/H/E/abcdefghi/B/E/F/A/H/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/G/D/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/-1",
"E/F/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/abcdefghi/B/abcdefghi/abcdefghi/F/C/A/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/F/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/D/F/abcdefghi/I/F/G/H/C/abcdefghi/B/E/B/A/E/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/E/abcdefghi/C/B/abcdefghi/G/H/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/F/abcdefghi/B/C/abcdefghi/A/abcdefghi/C/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/-1",
"abcdefghi/abcdefghi/abcdefghi/F/C/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/D/abcdefghi/abcdefghi/F/abcdefghi/I/abcdefghi/B/H/G/abcdefghi/I/A/C/abcdefghi/D/G/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/H/A/abcdefghi/abcdefghi/G/B/abcdefghi/abcdefghi/abcdefghi/E/C/B/A/abcdefghi/abcdefghi/I/G/abcdefghi/A/abcdefghi/D/I/H/abcdefghi/C/B/abcdefghi/B/abcdefghi/G/C/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/I/F/-1",
"abcdefghi/E/A/abcdefghi/abcdefghi/D/abcdefghi/I/F/D/abcdefghi/F/B/I/abcdefghi/abcdefghi/abcdefghi/H/B/abcdefghi/H/abcdefghi/F/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/B/abcdefghi/A/abcdefghi/I/abcdefghi/B/abcdefghi/H/abcdefghi/H/B/E/abcdefghi/A/abcdefghi/C/abcdefghi/abcdefghi/C/abcdefghi/I/F/H/G/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/F/G/E/abcdefghi/G/abcdefghi/B/I/abcdefghi/abcdefghi/D/-1",
"G/D/abcdefghi/I/H/C/A/F/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/abcdefghi/F/C/I/G/abcdefghi/abcdefghi/H/abcdefghi/D/abcdefghi/F/abcdefghi/D/abcdefghi/E/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/H/I/abcdefghi/A/abcdefghi/F/abcdefghi/C/abcdefghi/E/A/I/F/abcdefghi/G/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/D/I/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/A/abcdefghi/abcdefghi/I/H/abcdefghi/-1",
"I/abcdefghi/D/abcdefghi/C/abcdefghi/abcdefghi/F/abcdefghi/A/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/I/C/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/H/G/A/B/B/abcdefghi/E/abcdefghi/F/D/C/abcdefghi/abcdefghi/H/C/abcdefghi/abcdefghi/B/E/abcdefghi/abcdefghi/F/F/D/A/abcdefghi/I/abcdefghi/abcdefghi/H/abcdefghi/E/F/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/C/F/abcdefghi/I/H/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/G/A/abcdefghi/abcdefghi/abcdefghi/I/-1",
"H/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/A/B/G/G/F/abcdefghi/abcdefghi/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/abcdefghi/I/abcdefghi/abcdefghi/E/C/abcdefghi/abcdefghi/H/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/I/D/C/A/E/abcdefghi/A/D/abcdefghi/E/abcdefghi/abcdefghi/G/I/E/abcdefghi/abcdefghi/H/A/abcdefghi/I/abcdefghi/F/C/B/I/abcdefghi/F/E/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/I/B/abcdefghi/D/-1",
"abcdefghi/F/H/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/C/B/D/A/B/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/H/E/F/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/C/H/I/H/G/C/abcdefghi/F/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/I/abcdefghi/G/abcdefghi/E/F/H/F/E/abcdefghi/B/I/abcdefghi/A/abcdefghi/abcdefghi/C/abcdefghi/A/D/E/abcdefghi/abcdefghi/I/abcdefghi/-1",
"G/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/F/abcdefghi/abcdefghi/B/abcdefghi/I/abcdefghi/A/B/abcdefghi/abcdefghi/abcdefghi/H/E/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/abcdefghi/E/G/B/abcdefghi/D/H/abcdefghi/H/A/abcdefghi/abcdefghi/C/E/B/G/H/abcdefghi/F/B/D/abcdefghi/C/A/abcdefghi/A/abcdefghi/abcdefghi/G/abcdefghi/F/abcdefghi/abcdefghi/D/I/C/abcdefghi/A/abcdefghi/abcdefghi/G/F/B/-1",
"abcdefghi/B/abcdefghi/I/C/abcdefghi/A/G/D/abcdefghi/A/C/abcdefghi/G/abcdefghi/E/H/abcdefghi/E/abcdefghi/I/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/H/abcdefghi/abcdefghi/abcdefghi/C/B/abcdefghi/E/B/abcdefghi/abcdefghi/abcdefghi/H/I/A/abcdefghi/H/G/B/I/C/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/abcdefghi/B/I/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/F/I/D/G/abcdefghi/I/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/E/abcdefghi/-1",
"abcdefghi/abcdefghi/abcdefghi/G/C/abcdefghi/A/abcdefghi/abcdefghi/C/G/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/F/abcdefghi/E/A/abcdefghi/abcdefghi/abcdefghi/abcdefghi/D/C/abcdefghi/abcdefghi/D/E/I/abcdefghi/H/F/B/abcdefghi/A/abcdefghi/abcdefghi/F/abcdefghi/D/I/G/H/F/I/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/F/abcdefghi/E/C/D/abcdefghi/B/abcdefghi/H/B/abcdefghi/G/F/A/H/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/E/abcdefghi/abcdefghi/abcdefghi/-1",
"B/abcdefghi/F/abcdefghi/E/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/D/abcdefghi/F/H/C/I/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/abcdefghi/D/A/E/I/F/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/B/D/abcdefghi/A/F/H/E/F/abcdefghi/G/C/abcdefghi/abcdefghi/abcdefghi/abcdefghi/A/abcdefghi/B/abcdefghi/H/D/abcdefghi/A/abcdefghi/abcdefghi/A/I/abcdefghi/F/C/abcdefghi/H/B/abcdefghi/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/abcdefghi/E/abcdefghi/C/-1",
"abcdefghi/D/C/abcdefghi/B/H/abcdefghi/abcdefghi/abcdefghi/B/E/F/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/C/abcdefghi/H/abcdefghi/E/F/abcdefghi/abcdefghi/B/G/E/abcdefghi/I/abcdefghi/D/B/abcdefghi/abcdefghi/F/H/abcdefghi/B/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/E/abcdefghi/C/abcdefghi/H/abcdefghi/G/abcdefghi/A/abcdefghi/abcdefghi/abcdefghi/E/abcdefghi/I/abcdefghi/G/C/abcdefghi/C/I/abcdefghi/abcdefghi/abcdefghi/abcdefghi/B/E/A/A/B/abcdefghi/G/abcdefghi/E/F/abcdefghi/abcdefghi/-1",
"G/abcdefghi/abcdefghi/abcdefghi/H/abcdefghi/D/A/F/abcdefghi/C/abcdefghi/abcdefghi/I/abcdefghi/H/G/abcdefghi/abcdefghi/H/abcdefghi/D/abcdefghi/abcdefghi/B/C/I/abcdefghi/abcdefghi/A/E/abcdefghi/abcdefghi/abcdefghi/D/abcdefghi/abcdefghi/I/abcdefghi/G/C/D/abcdefghi/abcdefghi/A/B/abcdefghi/E/I/A/abcdefghi/abcdefghi/abcdefghi/G/abcdefghi/abcdefghi/G/abcdefghi/D/E/A/H/C/H/abcdefghi/C/abcdefghi/G/abcdefghi/F/abcdefghi/D/E/A/abcdefghi/abcdefghi/abcdefghi/C/abcdefghi/abcdefghi/abcdefghi/-1",
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
"D/E/H/C/B/A/I/F/G/I/B/F/G/D/E/C/H/A/G/C/A/F/H/I/B/D/E/C/H/I/A/E/F/G/B/D/F/G/E/D/I/B/A/C/H/B/A/D/H/C/G/F/E/I/E/I/C/B/G/H/D/A/F/A/D/G/E/F/C/H/I/B/H/F/B/I/A/D/E/G/C/-1",
"C/I/G/F/D/A/B/H/E/D/H/B/E/G/I/A/F/C/F/A/E/H/C/B/D/I/G/A/F/D/C/I/G/E/B/H/I/E/C/B/A/H/G/D/F/B/G/H/D/F/E/I/C/A/H/D/I/A/E/F/C/G/B/G/B/A/I/H/C/F/E/D/E/C/F/G/B/D/H/A/I/-1",
"E/F/C/I/B/D/H/G/A/H/G/B/F/E/A/D/C/I/A/I/D/C/G/H/E/B/F/I/A/H/E/F/C/B/D/G/F/C/G/A/D/B/I/E/H/B/D/E/G/H/I/A/F/C/C/E/A/D/I/F/G/H/B/G/H/I/B/C/E/F/A/D/D/B/F/H/A/G/C/I/E/-1",
"I/F/H/G/B/A/E/C/D/G/D/A/H/C/E/F/B/I/E/B/C/D/F/I/A/G/H/C/H/G/E/D/B/I/A/F/B/E/I/A/H/F/G/D/C/D/A/F/I/G/C/H/E/B/H/I/D/B/E/G/C/F/A/F/G/B/C/A/H/D/I/E/A/C/E/F/I/D/B/H/G/-1",
"F/D/A/G/E/B/H/C/I/I/B/H/C/F/A/E/G/D/E/G/C/D/I/H/F/B/A/H/I/G/B/D/C/A/E/F/B/E/F/I/A/G/D/H/C/C/A/D/F/H/E/B/I/G/G/H/B/A/C/D/I/F/E/D/F/E/H/G/I/C/A/B/A/C/I/E/B/F/G/D/H/-1",
"H/C/G/F/E/D/A/I/B/A/I/B/H/G/C/E/F/D/F/D/E/I/A/B/G/H/C/I/E/H/D/B/G/F/C/A/C/B/A/E/F/H/D/G/I/D/G/F/C/I/A/H/B/E/B/A/I/G/D/F/C/E/H/E/F/C/A/H/I/B/D/G/G/H/D/B/C/E/I/A/F/-1",
"A/F/B/H/G/D/C/I/E/G/E/H/A/C/I/B/D/F/D/I/C/E/F/B/H/G/A/H/C/D/I/A/E/F/B/G/F/B/A/G/D/H/E/C/I/E/G/I/C/B/F/A/H/D/B/H/F/D/I/A/G/E/C/C/D/E/F/H/G/I/A/B/I/A/G/B/E/C/D/F/H/-1",
"E/B/A/G/D/F/I/H/C/H/I/C/E/B/A/D/F/G/F/G/D/C/H/I/E/A/B/B/H/I/A/G/C/F/E/D/D/F/G/I/E/B/H/C/A/C/A/E/D/F/H/G/B/I/I/E/H/B/A/D/C/G/F/A/C/F/H/I/G/B/D/E/G/D/B/F/C/E/A/I/H/-1",
"D/A/C/E/G/H/I/F/B/B/E/G/I/A/F/C/H/D/I/H/F/C/B/D/A/G/E/F/C/E/B/I/A/H/D/G/G/I/D/F/H/E/B/A/C/A/B/H/D/C/G/E/I/F/C/D/I/A/F/B/G/E/H/H/F/A/G/E/C/D/B/I/E/G/B/H/D/I/F/C/A/-1",
"C/B/E/G/A/F/D/I/H/A/H/D/B/I/E/C/G/F/G/F/I/D/C/H/B/E/A/F/G/C/H/E/I/A/B/D/B/I/A/F/D/G/H/C/E/E/D/H/C/B/A/I/F/G/I/E/F/A/H/B/G/D/C/H/C/G/I/F/D/E/A/B/D/A/B/E/G/C/F/H/I/-1",
"B/H/A/C/F/I/G/E/D/I/D/E/G/A/H/C/F/B/C/G/F/B/E/D/A/H/I/H/C/B/D/I/G/F/A/E/E/A/D/F/C/B/I/G/H/F/I/G/A/H/E/D/B/C/A/F/H/I/B/C/E/D/G/G/E/C/H/D/A/B/I/F/D/B/I/E/G/F/H/C/A/-1",
"B/F/C/H/G/I/E/A/D/I/D/E/B/F/A/H/C/G/H/A/G/E/D/C/I/F/B/A/C/I/D/E/G/B/H/F/F/H/D/C/A/B/G/E/I/G/E/B/I/H/F/A/D/C/C/G/F/A/I/H/D/B/E/D/B/H/G/C/E/F/I/A/E/I/A/F/B/D/C/G/H/-1",
"F/E/H/A/C/B/D/I/G/B/I/D/G/H/E/C/A/F/C/G/A/F/I/D/E/B/H/D/H/I/B/E/G/F/C/A/A/F/C/H/D/I/B/G/E/E/B/G/C/A/F/I/H/D/G/C/B/E/F/A/H/D/I/H/D/F/I/G/C/A/E/B/I/A/E/D/B/H/G/F/C/-1",
"B/G/D/I/A/E/C/H/F/C/H/F/G/B/D/E/I/A/A/E/I/F/H/C/B/G/D/F/I/C/E/D/B/H/A/G/H/B/A/C/G/I/D/F/E/E/D/G/A/F/H/I/B/C/D/F/B/H/C/G/A/E/I/I/A/H/D/E/F/G/C/B/G/C/E/B/I/A/F/D/H/-1",
"B/G/A/I/C/F/H/D/E/C/I/D/E/B/H/F/G/A/F/H/E/G/D/A/C/B/I/A/F/B/C/E/I/G/H/D/E/D/I/B/H/G/A/C/F/H/C/G/A/F/D/E/I/B/D/A/F/H/G/B/I/E/C/G/B/C/F/I/E/D/A/H/I/E/H/D/A/C/B/F/G/-1",
"E/H/F/D/B/A/G/I/C/I/G/C/E/F/H/B/A/D/D/B/A/G/C/I/H/E/F/B/D/H/I/A/F/C/G/E/A/F/E/B/G/C/D/H/I/C/I/G/H/D/E/F/B/A/H/C/I/F/E/B/A/D/G/F/E/D/A/H/G/I/C/B/G/A/B/C/I/D/E/F/H/-1",
"A/I/F/B/C/D/H/E/G/C/D/H/F/G/E/B/A/I/B/E/G/A/I/H/C/D/F/H/B/I/C/E/G/A/F/D/F/G/E/D/A/B/I/C/H/D/C/A/H/F/I/E/G/B/I/F/B/E/D/A/G/H/C/G/A/D/I/H/C/F/B/E/E/H/C/G/B/F/D/I/A/-1",
"B/E/D/G/A/C/I/H/F/H/G/I/E/F/B/D/C/A/A/F/C/D/H/I/E/G/B/F/A/G/H/D/E/C/B/I/C/B/H/I/G/A/F/D/E/I/D/E/B/C/F/G/A/H/E/H/F/C/B/G/A/I/D/D/C/A/F/I/H/B/E/G/G/I/B/A/E/D/H/F/C/-1",
"F/G/A/B/I/E/D/C/H/I/C/D/H/F/G/A/E/B/E/H/B/A/D/C/F/I/G/H/D/C/G/A/B/E/F/I/A/E/I/C/H/F/G/B/D/B/F/G/D/E/I/H/A/C/C/B/F/E/G/H/I/D/A/G/A/E/I/C/D/B/H/F/D/I/H/F/B/A/C/G/E/-1",
"I/B/A/C/E/F/H/G/D/H/F/C/G/D/B/E/I/A/E/G/D/I/A/H/F/B/C/A/D/E/H/C/I/B/F/G/B/H/F/D/G/E/A/C/I/C/I/G/B/F/A/D/H/E/D/A/H/F/I/G/C/E/B/G/C/B/E/H/D/I/A/F/F/E/I/A/B/C/G/D/H/-1",
"B/A/F/H/C/G/E/D/I/E/D/I/A/B/F/C/G/H/H/C/G/E/I/D/F/A/B/I/F/E/D/H/B/G/C/A/C/G/D/I/F/A/H/B/E/A/B/H/C/G/E/I/F/D/G/I/C/B/A/H/D/E/F/F/E/A/G/D/I/B/H/C/D/H/B/F/E/C/A/I/G/-1",
"G/B/A/D/I/C/F/E/H/D/E/F/H/B/A/C/G/I/I/C/H/G/F/E/B/D/A/C/D/E/F/G/H/I/A/B/B/H/I/A/E/D/G/C/F/F/A/G/I/C/B/D/H/E/H/G/B/C/A/I/E/F/D/E/F/D/B/H/G/A/I/C/A/I/C/E/D/F/H/B/G/-1",
"A/H/E/F/I/B/C/D/G/I/C/D/G/E/A/B/H/F/B/F/G/C/H/D/E/A/I/G/E/H/B/F/C/A/I/D/D/A/I/H/G/E/F/C/B/F/B/C/A/D/I/G/E/H/E/G/A/D/B/H/I/F/C/H/I/F/E/C/G/D/B/A/C/D/B/I/A/F/H/G/E/-1",
"G/H/F/E/I/D/B/A/C/B/D/A/C/F/G/E/H/I/C/E/I/A/B/H/G/D/F/A/F/C/I/G/E/H/B/D/I/B/H/D/A/C/F/E/G/E/G/D/B/H/F/I/C/A/F/A/E/H/C/I/D/G/B/D/C/G/F/E/B/A/I/H/H/I/B/G/D/A/C/F/E/-1",
"H/A/B/I/E/G/D/F/C/F/C/D/B/A/H/G/E/I/E/G/I/C/D/F/H/A/B/A/E/C/F/G/B/I/D/H/D/I/G/E/H/C/A/B/F/B/H/F/D/I/A/E/C/G/I/B/E/H/F/D/C/G/A/G/F/H/A/C/E/B/I/D/C/D/A/G/B/I/F/H/E/-1",
"G/D/F/H/B/A/C/I/E/E/A/H/C/I/F/D/B/G/I/C/B/D/G/E/F/H/A/D/H/A/B/E/I/G/F/C/F/G/E/A/C/H/B/D/I/C/B/I/G/F/D/E/A/H/A/E/G/F/H/B/I/C/D/B/I/D/E/A/C/H/G/F/H/F/C/I/D/G/A/E/B/-1",
"D/B/G/F/H/I/E/C/A/H/C/A/E/B/G/I/F/D/I/E/F/A/C/D/B/G/H/F/H/D/G/I/E/A/B/C/A/I/B/H/F/C/D/E/G/E/G/C/D/A/B/H/I/F/G/D/H/B/E/F/C/A/I/B/A/I/C/G/H/F/D/E/C/F/E/I/D/A/G/H/B/-1",
"B/H/C/D/I/F/A/E/G/I/G/E/B/C/A/D/H/F/A/F/D/H/E/G/I/C/B/E/A/G/F/D/B/C/I/H/C/I/B/G/H/E/F/D/A/F/D/H/I/A/C/G/B/E/G/E/F/C/B/I/H/A/D/H/C/A/E/F/D/B/G/I/D/B/I/A/G/H/E/F/C/-1",
"B/E/C/A/F/G/H/I/D/H/F/I/D/E/C/B/A/G/D/G/A/B/H/I/F/E/C/I/A/H/C/D/E/G/B/F/C/B/F/I/G/A/E/D/H/G/D/E/H/B/F/I/C/A/F/C/G/E/A/B/D/H/I/A/H/B/F/I/D/C/G/E/E/I/D/G/C/H/A/F/B/-1",
"C/F/G/B/D/E/I/A/H/H/A/I/C/G/F/B/E/D/B/E/D/A/H/I/G/C/F/I/G/F/D/E/C/A/H/B/D/H/B/G/I/A/C/F/E/E/C/A/F/B/H/D/G/I/G/I/C/H/F/D/E/B/A/F/B/E/I/A/G/H/D/C/A/D/H/E/C/B/F/I/G/-1",
"I/E/G/F/H/A/B/C/D/D/C/F/B/I/E/A/G/H/H/A/B/C/G/D/F/I/E/E/I/A/D/F/H/G/B/C/B/H/D/G/C/I/E/F/A/G/F/C/A/E/B/D/H/I/A/G/E/I/B/C/H/D/F/C/B/H/E/D/F/I/A/G/F/D/I/H/A/G/C/E/B/-1",
"B/G/F/H/A/C/I/D/E/A/H/D/I/E/G/B/C/F/E/I/C/F/B/D/H/A/G/C/D/E/G/I/B/A/F/H/G/B/H/E/F/A/D/I/C/I/F/A/C/D/H/G/E/B/F/E/G/D/H/I/C/B/A/D/C/B/A/G/E/F/H/I/H/A/I/B/C/F/E/G/D/-1",
"E/B/G/D/A/H/C/I/F/A/I/C/F/G/B/E/H/D/F/D/H/I/E/C/G/B/A/B/H/A/C/I/D/F/E/G/D/G/F/E/B/A/I/C/H/I/C/E/H/F/G/D/A/B/H/A/D/G/C/E/B/F/I/C/F/B/A/D/I/H/G/E/G/E/I/B/H/F/A/D/C/-1",
"D/B/E/I/C/F/G/H/A/H/F/G/A/D/B/I/C/E/C/I/A/H/G/E/F/B/D/I/H/D/F/A/C/B/E/G/G/E/B/D/I/H/A/F/C/F/A/C/E/B/G/D/I/H/E/C/I/G/F/A/H/D/B/A/D/H/B/E/I/C/G/F/B/G/F/C/H/D/E/A/I/-1",
"C/H/G/F/B/D/I/A/E/I/D/A/G/E/H/C/F/B/F/B/E/C/A/I/G/H/D/H/F/B/A/G/E/D/C/I/G/C/D/B/I/F/A/E/H/E/A/I/D/H/C/F/B/G/A/G/H/I/C/B/E/D/F/D/E/C/H/F/G/B/I/A/B/I/F/E/D/A/H/G/C/-1",
"G/E/D/A/H/F/I/B/C/F/A/C/I/G/B/E/H/D/H/B/I/D/E/C/G/A/F/I/F/E/C/B/D/A/G/H/A/G/B/H/F/E/C/D/I/D/C/H/G/I/A/F/E/B/B/H/G/F/A/I/D/C/E/E/D/F/B/C/G/H/I/A/C/I/A/E/D/H/B/F/G/-1",
"H/F/A/D/I/E/G/C/B/I/E/B/G/F/C/D/H/A/G/C/D/H/A/B/I/F/E/F/H/G/E/C/A/B/I/D/C/A/I/B/D/H/E/G/F/D/B/E/F/G/I/H/A/C/B/G/F/A/H/D/C/E/I/E/I/H/C/B/F/A/D/G/A/D/C/I/E/G/F/B/H/-1",
"E/H/B/C/F/D/A/G/I/G/C/A/B/E/I/H/D/F/I/F/D/H/G/A/C/E/B/F/D/G/I/B/C/E/H/A/A/I/C/D/H/E/B/F/G/H/B/E/F/A/G/D/I/C/C/A/I/E/D/F/G/B/H/D/G/H/A/I/B/F/C/E/B/E/F/G/C/H/I/A/D/-1",
"B/E/F/H/I/A/C/G/D/C/H/G/D/F/E/B/A/I/I/D/A/B/C/G/H/F/E/G/I/C/A/E/B/D/H/F/D/F/E/C/H/I/A/B/G/A/B/H/G/D/F/I/E/C/E/C/D/F/B/H/G/I/A/H/G/I/E/A/D/F/C/B/F/A/B/I/G/C/E/D/H/-1",
"A/H/C/B/F/I/D/G/E/E/G/D/H/C/A/I/F/B/I/B/F/E/D/G/A/H/C/B/E/H/A/G/C/F/D/I/D/F/A/I/B/E/G/C/H/G/C/I/D/H/F/B/E/A/F/A/B/C/E/D/H/I/G/H/D/E/G/I/B/C/A/F/C/I/G/F/A/H/E/B/D/-1",
"E/H/F/D/B/G/A/C/I/B/D/A/I/C/E/F/H/G/I/G/C/F/H/A/D/E/B/H/C/G/B/A/I/E/F/D/D/F/I/H/E/C/B/G/A/A/E/B/G/D/F/H/I/C/F/A/E/C/I/B/G/D/H/G/I/H/A/F/D/C/B/E/C/B/D/E/G/H/I/A/F/-1",
"F/G/A/I/B/D/C/E/H/I/E/B/G/H/C/D/F/A/H/D/C/F/E/A/I/B/G/C/A/H/D/F/I/B/G/E/G/B/I/C/A/E/H/D/F/D/F/E/H/G/B/A/C/I/B/I/F/A/C/G/E/H/D/E/H/D/B/I/F/G/A/C/A/C/G/E/D/H/F/I/B/-1",
"G/C/D/A/H/E/B/I/F/F/H/I/B/D/C/G/E/A/B/A/E/G/I/F/H/D/C/D/E/G/C/F/A/I/H/B/I/F/A/H/B/D/E/C/G/C/B/H/E/G/I/F/A/D/A/G/B/I/C/H/D/F/E/E/I/F/D/A/G/C/B/H/H/D/C/F/E/B/A/G/I/-1",
"B/G/I/H/A/C/E/F/D/F/H/A/D/B/E/G/I/C/E/C/D/I/G/F/B/H/A/H/A/C/E/D/I/F/B/G/D/F/G/B/H/A/C/E/I/I/B/E/F/C/G/D/A/H/A/D/F/C/E/H/I/G/B/G/I/B/A/F/D/H/C/E/C/E/H/G/I/B/A/D/F/-1",
"I/G/F/H/B/A/C/E/D/D/A/E/C/G/F/I/B/H/H/C/B/D/I/E/A/G/F/C/H/G/B/A/I/D/F/E/F/E/D/G/C/H/B/A/I/A/B/I/F/E/D/H/C/G/G/I/H/A/F/C/E/D/B/B/D/C/E/H/G/F/I/A/E/F/A/I/D/B/G/H/C/-1",
"F/D/B/H/A/E/G/I/C/C/H/I/B/G/D/A/E/F/E/G/A/I/C/F/B/H/D/G/E/F/D/H/B/I/C/A/A/B/H/C/F/I/E/D/G/I/C/D/G/E/A/F/B/H/B/A/G/E/D/H/C/F/I/D/I/C/F/B/G/H/A/E/H/F/E/A/I/C/D/G/B/-1",
"G/F/C/E/A/H/D/I/B/B/D/H/G/C/I/E/F/A/A/E/I/D/B/F/C/H/G/I/A/E/H/F/B/G/C/D/C/B/G/I/D/E/H/A/F/D/H/F/A/G/C/I/B/E/H/G/D/B/I/A/F/E/C/E/C/A/F/H/G/B/D/I/F/I/B/C/E/D/A/G/H/-1",
"F/A/E/B/D/I/H/G/C/H/G/I/E/C/F/A/D/B/B/D/C/G/H/A/F/E/I/I/B/A/F/E/G/C/H/D/G/C/D/I/A/H/B/F/E/E/H/F/C/B/D/I/A/G/C/F/H/D/I/E/G/B/A/A/E/B/H/G/C/D/I/F/D/I/G/A/F/B/E/C/H/-1",
"I/E/F/C/H/B/A/G/D/H/G/A/I/E/D/C/B/F/B/C/D/A/G/F/E/H/I/E/F/H/B/I/G/D/A/C/D/A/B/H/F/C/G/I/E/C/I/G/D/A/E/H/F/B/G/B/E/F/D/H/I/C/A/F/D/I/G/C/A/B/E/H/A/H/C/E/B/I/F/D/G/-1",
"A/E/F/D/H/B/C/G/I/B/G/C/F/E/I/A/H/D/D/H/I/A/G/C/B/F/E/H/B/D/E/A/F/I/C/G/C/I/A/G/B/H/D/E/F/E/F/G/C/I/D/H/A/B/F/D/H/B/C/G/E/I/A/G/C/E/I/D/A/F/B/H/I/A/B/H/F/E/G/D/C/-1",
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
"I/G/H/C/A/D/E/B/F/C/E/F/H/I/B/G/D/A/A/D/B/E/F/G/I/C/H/B/F/D/A/G/C/H/E/I/E/I/A/F/B/H/C/G/D/H/C/G/D/E/I/A/F/B/F/B/I/G/C/A/D/H/E/D/A/C/B/H/E/F/I/G/G/H/E/I/D/F/B/A/C/-1",
"H/F/E/D/C/B/A/G/I/A/B/G/H/F/I/D/C/E/C/I/D/G/E/A/F/H/B/I/C/F/A/H/E/B/D/G/G/D/A/I/B/C/E/F/H/E/H/B/F/D/G/C/I/A/B/A/H/C/G/D/I/E/F/D/G/I/E/A/F/H/B/C/F/E/C/B/I/H/G/A/D/-1",
"I/A/C/D/F/E/G/B/H/G/B/D/I/H/A/E/F/C/E/H/F/G/C/B/A/D/I/A/G/H/E/B/D/I/C/F/F/C/B/H/G/I/D/E/A/D/I/E/F/A/C/B/H/G/C/E/I/A/D/H/F/G/B/H/F/A/B/E/G/C/I/D/B/D/G/C/I/F/H/A/E/-1",
"C/D/E/F/G/I/A/H/B/G/B/A/H/C/E/D/I/F/I/F/H/D/B/A/E/G/C/B/G/D/C/I/H/F/E/A/E/H/F/G/A/D/B/C/I/A/C/I/B/E/F/H/D/G/D/I/B/E/F/C/G/A/H/H/A/G/I/D/B/C/F/E/F/E/C/A/H/G/I/B/D/-1",
"F/E/I/A/H/G/B/D/C/D/H/A/B/C/E/G/I/F/B/C/G/I/F/D/A/H/E/G/A/D/F/B/H/E/C/I/C/F/E/G/A/I/H/B/D/I/B/H/D/E/C/F/A/G/A/D/F/E/I/B/C/G/H/H/G/B/C/D/F/I/E/A/E/I/C/H/G/A/D/F/B/-1",
"D/I/B/G/H/A/F/C/E/F/C/G/B/I/E/D/H/A/E/A/H/C/D/F/B/G/I/H/E/I/F/A/D/C/B/G/C/D/A/I/G/B/H/E/F/G/B/F/H/E/C/A/I/D/A/H/E/D/B/G/I/F/C/I/F/D/E/C/H/G/A/B/B/G/C/A/F/I/E/D/H/-1",
"I/H/B/F/C/E/A/G/D/G/D/C/A/H/I/F/E/B/F/E/A/B/D/G/C/I/H/H/G/D/E/A/B/I/F/C/C/F/E/G/I/D/H/B/A/B/A/I/C/F/H/E/D/G/D/C/F/I/G/A/B/H/E/A/B/H/D/E/F/G/C/I/E/I/G/H/B/C/D/A/F/-1",
"I/F/D/H/C/B/G/A/E/G/B/E/D/A/I/F/H/C/H/A/C/G/F/E/B/I/D/C/I/H/F/G/A/E/D/B/D/E/A/B/H/C/I/F/G/F/G/B/E/I/D/A/C/H/A/C/G/I/B/H/D/E/F/E/H/F/A/D/G/C/B/I/B/D/I/C/E/F/H/G/A/-1",
"F/C/E/D/H/G/B/A/I/B/A/H/E/F/I/D/C/G/I/G/D/A/C/B/F/H/E/H/B/A/F/G/E/I/D/C/D/F/G/C/I/A/E/B/H/E/I/C/H/B/D/G/F/A/A/E/B/G/D/H/C/I/F/G/D/F/I/A/C/H/E/B/C/H/I/B/E/F/A/G/D/-1",
"G/A/F/H/C/E/I/D/B/B/I/C/F/D/A/G/H/E/E/D/H/G/B/I/C/A/F/D/G/I/A/F/C/B/E/H/F/B/E/D/G/H/A/I/C/C/H/A/E/I/B/F/G/D/A/E/B/I/H/F/D/C/G/H/C/D/B/A/G/E/F/I/I/F/G/C/E/D/H/B/A/-1",
"B/G/F/D/A/H/E/C/I/A/I/E/F/B/C/G/D/H/D/H/C/G/I/E/B/A/F/I/D/B/C/G/F/H/E/A/E/C/G/H/D/A/I/F/B/H/F/A/B/E/I/D/G/C/G/A/D/I/F/B/C/H/E/F/B/H/E/C/D/A/I/G/C/E/I/A/H/G/F/B/D/-1",
"I/A/C/D/E/H/B/F/G/F/G/H/A/I/B/E/C/D/D/E/B/G/C/F/H/I/A/G/D/A/I/H/C/F/B/E/H/F/I/B/D/E/A/G/C/C/B/E/F/A/G/I/D/H/B/C/F/H/G/A/D/E/I/A/I/G/E/F/D/C/H/B/E/H/D/C/B/I/G/A/F/-1",
"D/H/C/A/G/B/I/E/F/G/I/A/F/D/E/H/B/C/F/B/E/H/I/C/A/D/G/B/A/G/I/C/F/D/H/E/C/E/H/D/A/G/F/I/B/I/F/D/E/B/H/G/C/A/H/C/F/G/E/I/B/A/D/E/D/I/B/F/A/C/G/H/A/G/B/C/H/D/E/F/I/-1",
"G/B/D/H/F/E/A/C/I/C/E/A/I/D/B/F/H/G/H/F/I/G/C/A/B/E/D/E/D/H/B/G/C/I/A/F/F/I/G/E/A/D/H/B/C/A/C/B/F/I/H/D/G/E/I/A/E/D/H/G/C/F/B/B/H/F/C/E/I/G/D/A/D/G/C/A/B/F/E/I/H/-1",
"E/D/I/A/B/C/H/F/G/F/H/G/E/I/D/C/A/B/A/B/C/H/G/F/I/D/E/H/I/D/C/E/G/A/B/F/G/A/B/D/F/H/E/C/I/C/F/E/B/A/I/G/H/D/B/E/H/G/D/A/F/I/C/D/C/F/I/H/E/B/G/A/I/G/A/F/C/B/D/E/H/-1",
"B/A/F/I/G/C/H/E/D/H/D/G/A/E/F/I/C/B/E/I/C/H/B/D/G/F/A/A/B/D/E/I/H/C/G/F/G/F/E/C/D/A/B/I/H/C/H/I/G/F/B/D/A/E/I/E/B/D/A/G/F/H/C/D/G/H/F/C/E/A/B/I/F/C/A/B/H/I/E/D/G/-1",
"G/E/B/A/I/D/F/H/C/D/A/F/H/E/C/I/B/G/I/C/H/F/G/B/E/A/D/A/G/C/I/B/E/D/F/H/H/D/I/G/F/A/C/E/B/B/F/E/D/C/H/G/I/A/C/I/G/B/A/F/H/D/E/E/H/A/C/D/I/B/G/F/F/B/D/E/H/G/A/C/I/-1",
"H/C/D/E/G/A/F/B/I/I/B/E/F/D/H/A/G/C/G/A/F/B/C/I/H/E/D/B/D/I/C/A/E/G/H/F/C/F/G/D/H/B/I/A/E/A/E/H/I/F/G/D/C/B/D/G/B/A/E/F/C/I/H/E/H/C/G/I/D/B/F/A/F/I/A/H/B/C/E/D/G/-1",
"C/F/A/E/H/I/B/D/G/G/D/E/A/B/F/H/C/I/B/I/H/G/D/C/E/A/F/H/G/C/I/E/A/F/B/D/A/B/F/H/G/D/I/E/C/D/E/I/C/F/B/G/H/A/I/A/G/B/C/H/D/F/E/E/H/D/F/A/G/C/I/B/F/C/B/D/I/E/A/G/H/-1",
"C/F/B/E/H/D/G/A/I/E/G/A/C/B/I/H/F/D/I/H/D/F/G/A/C/E/B/A/I/C/D/F/H/E/B/G/D/E/G/I/C/B/A/H/F/H/B/F/A/E/G/D/I/C/B/A/E/G/D/F/I/C/H/G/C/H/B/I/E/F/D/A/F/D/I/H/A/C/B/G/E/-1",
"E/I/F/B/C/G/A/H/D/B/H/G/A/E/D/F/C/I/A/C/D/H/F/I/B/E/G/D/A/C/F/G/B/H/I/E/H/G/I/E/D/A/C/F/B/F/B/E/C/I/H/G/D/A/C/E/A/I/B/F/D/G/H/G/F/H/D/A/E/I/B/C/I/D/B/G/H/C/E/A/F/-1",
"D/B/E/H/I/F/C/G/A/I/H/F/G/A/C/B/E/D/C/A/G/D/B/E/F/I/H/F/C/H/B/E/D/I/A/G/G/D/I/A/C/H/E/F/B/B/E/A/I/F/G/D/H/C/A/I/D/E/H/B/G/C/F/H/G/C/F/D/I/A/B/E/E/F/B/C/G/A/H/D/I/-1",
"B/E/C/F/A/I/H/D/G/G/H/I/B/D/E/F/C/A/A/F/D/C/G/H/E/I/B/F/A/B/G/H/C/I/E/D/D/I/G/A/E/F/B/H/C/E/C/H/I/B/D/G/A/F/H/B/A/D/I/G/C/F/E/C/G/E/H/F/A/D/B/I/I/D/F/E/C/B/A/G/H/-1",
"G/C/F/B/A/E/I/H/D/B/I/H/D/G/F/A/C/E/A/D/E/C/H/I/B/F/G/D/G/C/H/I/A/F/E/B/E/F/B/G/D/C/H/A/I/H/A/I/F/E/B/G/D/C/F/B/G/E/C/H/D/I/A/I/E/D/A/F/G/C/B/H/C/H/A/I/B/D/E/G/F/-1",
"H/D/B/I/E/A/F/C/G/C/G/F/B/D/H/E/A/I/I/A/E/G/C/F/D/H/B/A/E/C/F/B/G/I/D/H/B/H/I/D/A/C/G/F/E/G/F/D/E/H/I/C/B/A/D/B/A/C/I/E/H/G/F/E/C/G/H/F/B/A/I/D/F/I/H/A/G/D/B/E/C/-1",
"I/C/E/D/H/B/F/A/G/D/G/F/C/A/E/B/I/H/H/A/B/G/I/F/E/D/C/A/D/I/E/C/H/G/F/B/G/F/C/A/B/D/H/E/I/B/E/H/F/G/I/D/C/A/E/B/A/H/F/C/I/G/D/F/I/G/B/D/A/C/H/E/C/H/D/I/E/G/A/B/F/-1",
"C/F/H/D/I/G/B/A/E/D/A/B/E/H/F/I/G/C/E/I/G/A/C/B/D/H/F/I/E/C/H/A/D/G/F/B/B/G/A/F/E/I/C/D/H/H/D/F/G/B/C/E/I/A/A/B/D/I/F/E/H/C/G/F/C/I/B/G/H/A/E/D/G/H/E/C/D/A/F/B/I/-1",
"H/D/B/C/E/I/G/A/F/C/A/I/G/F/H/D/E/B/E/G/F/B/A/D/C/I/H/F/C/G/D/I/B/A/H/E/I/E/H/F/G/A/B/C/D/A/B/D/H/C/E/I/F/G/G/F/E/I/D/C/H/B/A/B/I/A/E/H/G/F/D/C/D/H/C/A/B/F/E/G/I/-1",
"C/A/D/I/F/E/H/B/G/E/G/I/B/D/H/A/F/C/F/B/H/C/G/A/E/D/I/D/H/C/F/E/G/B/I/A/G/I/A/H/B/D/F/C/E/B/F/E/A/I/C/G/H/D/I/E/F/G/C/B/D/A/H/H/C/G/D/A/F/I/E/B/A/D/B/E/H/I/C/G/F/-1",
"A/C/F/H/I/E/B/G/D/D/G/B/C/A/F/E/H/I/I/E/H/D/B/G/C/A/F/B/I/A/F/C/D/H/E/G/G/D/E/I/H/B/F/C/A/H/F/C/G/E/A/D/I/B/E/B/I/A/F/C/G/D/H/C/H/G/B/D/I/A/F/E/F/A/D/E/G/H/I/B/C/-1",
"C/E/B/I/G/F/A/D/H/D/H/F/E/A/B/G/C/I/I/G/A/C/D/H/B/F/E/H/B/C/D/F/I/E/G/A/G/F/E/A/B/C/I/H/D/A/I/D/G/H/E/F/B/C/F/D/G/H/I/A/C/E/B/B/C/I/F/E/D/H/A/G/E/A/H/B/C/G/D/I/F/-1",
"F/I/B/G/H/D/C/A/E/A/H/D/E/I/C/F/G/B/G/E/C/B/F/A/D/I/H/C/F/A/I/E/H/B/D/G/I/D/H/C/B/G/A/E/F/E/B/G/D/A/F/H/C/I/H/A/I/F/D/E/G/B/C/B/C/F/A/G/I/E/H/D/D/G/E/H/C/B/I/F/A/-1",
"D/G/C/F/H/B/I/E/A/A/E/B/I/D/G/C/H/F/F/H/I/E/C/A/G/B/D/B/D/G/H/I/F/A/C/E/C/A/F/D/G/E/H/I/B/H/I/E/A/B/C/F/D/G/E/F/D/C/A/I/B/G/H/G/C/A/B/E/H/D/F/I/I/B/H/G/F/D/E/A/C/-1",
"D/C/F/E/A/I/G/H/B/H/B/I/G/C/F/E/A/D/G/A/E/D/B/H/C/F/I/C/G/A/I/H/D/F/B/E/F/D/B/C/E/A/I/G/H/E/I/H/B/F/G/A/D/C/I/H/G/A/D/C/B/E/F/B/F/C/H/G/E/D/I/A/A/E/D/F/I/B/H/C/G/-1",
"I/D/F/B/E/H/C/G/A/E/B/C/I/A/G/D/F/H/G/H/A/C/D/F/E/I/B/A/G/D/E/C/I/H/B/F/C/F/H/D/G/B/A/E/I/B/E/I/F/H/A/G/D/C/H/I/E/G/F/C/B/A/D/D/A/B/H/I/E/F/C/G/F/C/G/A/B/D/I/H/E/-1",
"F/C/D/E/G/H/I/B/A/B/A/G/C/F/I/E/H/D/I/H/E/A/B/D/G/F/C/H/E/I/F/D/A/C/G/B/A/D/B/I/C/G/F/E/H/C/G/F/H/E/B/A/D/I/G/B/C/D/A/E/H/I/F/E/F/H/B/I/C/D/A/G/D/I/A/G/H/F/B/C/E/-1",
"B/D/A/F/E/G/H/I/C/H/I/C/D/A/B/F/E/G/E/F/G/H/I/C/B/D/A/D/C/B/A/F/I/E/G/H/A/E/H/B/G/D/I/C/F/I/G/F/C/H/E/A/B/D/F/B/E/G/D/H/C/A/I/G/A/I/E/C/F/D/H/B/C/H/D/I/B/A/G/F/E/-1",
"E/G/H/F/A/D/I/B/C/F/B/D/I/C/H/A/G/E/C/I/A/B/G/E/F/D/H/H/D/E/A/F/B/G/C/I/A/C/I/E/H/G/D/F/B/B/F/G/D/I/C/H/E/A/G/A/C/H/B/F/E/I/D/D/H/F/C/E/I/B/A/G/I/E/B/G/D/A/C/H/F/-1",
"H/E/C/A/G/F/B/D/I/D/G/I/C/H/B/A/F/E/F/B/A/E/I/D/C/G/H/C/H/D/I/A/E/F/B/G/G/A/F/D/B/H/I/E/C/B/I/E/F/C/G/D/H/A/I/F/G/B/E/C/H/A/D/A/D/H/G/F/I/E/C/B/E/C/B/H/D/A/G/I/F/-1",
"E/G/H/F/B/A/I/D/C/B/I/F/E/D/C/A/G/H/D/A/C/G/I/H/B/E/F/I/E/D/B/H/F/G/C/A/C/B/A/D/E/G/H/F/I/F/H/G/A/C/I/E/B/D/G/D/I/C/A/B/F/H/E/A/F/E/H/G/D/C/I/B/H/C/B/I/F/E/D/A/G/-1",
"I/E/G/B/D/C/F/A/H/D/A/F/I/H/G/C/B/E/B/H/C/F/A/E/I/D/G/C/I/E/H/G/B/A/F/D/A/G/H/C/F/D/B/E/I/F/B/D/A/E/I/G/H/C/E/D/A/G/C/F/H/I/B/H/C/B/E/I/A/D/G/F/G/F/I/D/B/H/E/C/A/-1",
"E/G/B/H/A/C/F/I/D/D/I/F/B/G/E/A/H/C/H/A/C/D/I/F/E/G/B/B/C/E/A/F/I/H/D/G/G/F/D/C/E/H/I/B/A/I/H/A/G/B/D/C/E/F/F/B/G/E/H/A/D/C/I/A/D/H/I/C/G/B/F/E/C/E/I/F/D/B/G/A/H/-1",
"B/C/D/F/H/G/I/A/E/A/I/H/E/C/D/G/B/F/E/F/G/B/A/I/C/D/H/I/D/E/H/B/A/F/G/C/C/G/B/D/I/F/H/E/A/H/A/F/C/G/E/D/I/B/G/E/C/A/D/H/B/F/I/F/B/I/G/E/C/A/H/D/D/H/A/I/F/B/E/C/G/-1",
"D/B/E/G/A/C/I/H/F/F/H/A/I/B/D/E/C/G/G/I/C/E/F/H/B/D/A/I/D/H/B/G/F/A/E/C/C/A/F/H/E/I/D/G/B/E/G/B/C/D/A/F/I/H/B/C/I/A/H/E/G/F/D/H/F/G/D/I/B/C/A/E/A/E/D/F/C/G/H/B/I/-1",
"I/A/C/E/H/D/G/B/F/B/G/H/A/F/C/E/D/I/E/F/D/B/I/G/A/H/C/D/H/F/G/B/I/C/E/A/C/B/E/H/A/F/I/G/D/G/I/A/C/D/E/B/F/H/F/D/B/I/E/A/H/C/G/H/C/I/D/G/B/F/A/E/A/E/G/F/C/H/D/I/B/-1",
"G/C/H/B/I/D/E/A/F/E/A/I/F/G/H/D/B/C/B/F/D/E/A/C/G/I/H/F/G/A/D/C/B/H/E/I/H/E/B/A/F/I/C/D/G/I/D/C/H/E/G/A/F/B/A/I/G/C/B/E/F/H/D/D/B/F/G/H/A/I/C/E/C/H/E/I/D/F/B/G/A/-1",
"G/A/B/F/I/D/E/C/H/C/E/I/H/B/G/D/F/A/D/F/H/C/A/E/B/I/G/A/H/E/B/G/I/C/D/F/F/C/D/E/H/A/I/G/B/B/I/G/D/F/C/A/H/E/H/B/A/I/D/F/G/E/C/I/G/C/A/E/H/F/B/D/E/D/F/G/C/B/H/A/I/-1",
"G/B/F/D/C/I/H/E/A/E/A/H/B/F/G/I/D/C/C/I/D/H/E/A/B/F/G/B/D/E/A/I/C/G/H/F/A/H/G/E/B/F/D/C/I/F/C/I/G/H/D/A/B/E/D/F/C/I/A/B/E/G/H/H/G/A/F/D/E/C/I/B/I/E/B/C/G/H/F/A/D/-1",
"F/I/D/A/E/H/C/G/B/G/B/H/C/D/I/F/E/A/C/E/A/B/F/G/H/I/D/H/G/I/D/A/E/B/C/F/A/F/B/I/H/C/G/D/E/D/C/E/G/B/F/I/A/H/E/A/G/H/I/B/D/F/C/B/D/C/F/G/A/E/H/I/I/H/F/E/C/D/A/B/G/-1",
"G/A/E/B/C/F/D/I/H/C/D/B/H/G/I/A/F/E/F/H/I/A/E/D/B/C/G/H/F/D/C/B/A/E/G/I/I/B/G/D/H/E/C/A/F/E/C/A/F/I/G/H/D/B/D/I/C/E/F/B/G/H/A/A/E/F/G/D/H/I/B/C/B/G/H/I/A/C/F/E/D/-1",
"H/A/D/I/F/E/B/G/C/E/C/F/B/A/G/D/H/I/G/I/B/C/H/D/E/A/F/I/D/H/G/E/C/F/B/A/A/B/C/H/I/F/G/E/D/F/G/E/D/B/A/I/C/H/D/E/G/F/C/H/A/I/B/B/H/A/E/D/I/C/F/G/C/F/I/A/G/B/H/D/E/-1",
"H/G/F/C/B/I/D/E/A/C/E/I/G/A/D/H/B/F/B/D/A/H/E/F/G/C/I/E/C/G/F/I/A/B/D/H/F/I/D/B/H/G/C/A/E/A/B/H/D/C/E/I/F/G/G/A/E/I/D/C/F/H/B/I/H/C/E/F/B/A/G/D/D/F/B/A/G/H/E/I/C/-1",
"I/H/A/E/F/C/G/B/D/C/G/D/H/I/B/F/E/A/B/F/E/D/G/A/H/I/C/G/I/C/A/B/E/D/H/F/F/A/H/I/C/D/B/G/E/D/E/B/F/H/G/A/C/I/A/D/I/B/E/H/C/F/G/H/C/F/G/D/I/E/A/B/E/B/G/C/A/F/I/D/H/-1",
"A/C/G/I/D/E/H/B/F/H/F/D/C/B/A/E/I/G/I/E/B/H/G/F/D/A/C/G/D/F/A/H/C/B/E/I/B/I/A/G/E/D/C/F/H/C/H/E/F/I/B/G/D/A/E/A/I/D/C/H/F/G/B/F/B/H/E/A/G/I/C/D/D/G/C/B/F/I/A/H/E/-1",
"B/H/G/A/F/I/C/D/E/D/A/I/E/C/H/B/F/G/F/E/C/G/D/B/I/H/A/E/G/D/C/H/A/F/I/B/A/B/F/I/G/D/H/E/C/C/I/H/B/E/F/G/A/D/G/D/A/H/I/C/E/B/F/H/F/E/D/B/G/A/C/I/I/C/B/F/A/E/D/G/H/-1",
"I/F/D/E/B/H/C/G/A/C/B/H/A/G/F/D/E/I/E/G/A/C/I/D/F/H/B/H/D/I/F/A/E/B/C/G/B/A/G/H/C/I/E/F/D/F/E/C/B/D/G/I/A/H/G/H/F/I/E/B/A/D/C/D/C/B/G/F/A/H/I/E/A/I/E/D/H/C/G/B/F/-1",
"G/H/B/A/I/D/C/E/F/E/C/F/H/B/G/A/D/I/A/I/D/E/C/F/B/G/H/H/G/I/F/D/C/E/A/B/C/B/E/G/H/A/I/F/D/D/F/A/B/E/I/G/H/C/B/E/G/C/F/H/D/I/A/F/D/C/I/A/E/H/B/G/I/A/H/D/G/B/F/C/E/-1",
"B/C/G/A/E/H/D/F/I/I/E/H/F/D/B/G/C/A/D/F/A/I/C/G/B/E/H/F/H/I/C/B/E/A/G/D/G/B/E/D/A/F/I/H/C/C/A/D/H/G/I/F/B/E/A/G/B/E/I/C/H/D/F/H/D/C/G/F/A/E/I/B/E/I/F/B/H/D/C/A/G/-1",
"E/C/B/G/H/D/A/F/I/G/H/F/A/E/I/D/B/C/A/I/D/C/B/F/G/H/E/B/F/I/H/G/E/C/A/D/D/G/A/B/F/C/E/I/H/C/E/H/D/I/A/F/G/B/H/A/C/F/D/B/I/E/G/F/B/E/I/C/G/H/D/A/I/D/G/E/A/H/B/C/F/-1",
"A/H/E/G/I/F/B/C/D/C/D/F/E/B/A/I/H/G/G/I/B/D/C/H/E/A/F/E/F/C/I/A/D/G/B/H/D/A/G/H/E/B/F/I/C/I/B/H/F/G/C/D/E/A/H/E/I/A/D/G/C/F/B/F/C/D/B/H/I/A/G/E/B/G/A/C/F/E/H/D/I/-1",
"F/D/H/C/B/A/G/I/E/A/I/E/H/D/G/B/C/F/C/B/G/E/I/F/H/D/A/G/E/B/F/H/D/C/A/I/H/F/A/G/C/I/E/B/D/I/C/D/B/A/E/F/G/H/D/G/F/A/E/C/I/H/B/B/A/C/I/F/H/D/E/G/E/H/I/D/G/B/A/F/C/-1",
"H/I/G/F/D/B/A/C/E/C/B/F/E/G/A/D/H/I/E/A/D/I/H/C/B/F/G/D/G/I/B/A/F/C/E/H/F/E/H/C/I/D/G/A/B/A/C/B/G/E/H/I/D/F/G/D/C/H/B/E/F/I/A/B/H/A/D/F/I/E/G/C/I/F/E/A/C/G/H/B/D/-1",
"C/E/F/D/B/H/A/I/G/G/I/A/C/F/E/B/D/H/H/D/B/I/G/A/C/F/E/F/G/D/B/E/C/I/H/A/E/H/C/A/I/F/G/B/D/B/A/I/G/H/D/E/C/F/A/F/H/E/C/B/D/G/I/I/B/E/H/D/G/F/A/C/D/C/G/F/A/I/H/E/B/-1",
"A/H/E/B/D/G/I/C/F/F/C/G/I/H/A/E/D/B/B/D/I/C/E/F/G/A/H/C/F/B/G/I/H/D/E/A/I/E/A/F/C/D/H/B/G/D/G/H/E/A/B/C/F/I/H/B/F/D/G/E/A/I/C/G/I/D/A/B/C/F/H/E/E/A/C/H/F/I/B/G/D/-1",
"B/F/G/D/A/C/H/E/I/D/I/H/B/F/E/A/C/G/A/C/E/I/G/H/D/B/F/G/E/A/H/B/F/I/D/C/C/B/F/A/D/I/G/H/E/H/D/I/E/C/G/F/A/B/I/H/C/F/E/A/B/G/D/F/G/D/C/H/B/E/I/A/E/A/B/G/I/D/C/F/H/-1",
"H/I/C/D/F/B/G/E/A/F/D/G/A/E/I/B/H/C/E/B/A/C/H/G/I/D/F/G/H/D/B/C/E/F/A/I/B/F/I/G/A/D/H/C/E/C/A/E/H/I/F/D/G/B/I/G/F/E/D/C/A/B/H/A/C/B/F/G/H/E/I/D/D/E/H/I/B/A/C/F/G/-1",
"D/A/E/G/B/H/C/I/F/H/G/C/I/A/F/D/E/B/I/F/B/C/D/E/A/G/H/E/D/I/F/C/A/B/H/G/B/H/A/E/I/G/F/D/C/G/C/F/B/H/D/I/A/E/C/I/H/A/E/B/G/F/D/A/E/G/D/F/C/H/B/I/F/B/D/H/G/I/E/C/A/-1",
"A/D/I/F/B/C/H/E/G/G/B/E/I/H/A/D/F/C/H/F/C/G/E/D/B/A/I/B/H/A/C/G/I/F/D/E/C/I/F/D/A/E/G/B/H/D/E/G/H/F/B/I/C/A/F/C/H/E/D/G/A/I/B/E/A/D/B/I/H/C/G/F/I/G/B/A/C/F/E/H/D/-1",
"B/G/F/C/E/I/A/D/H/C/D/H/A/F/G/B/I/E/I/E/A/B/D/H/F/G/C/H/B/D/E/C/A/G/F/I/E/A/G/F/I/D/H/C/B/F/I/C/G/H/B/E/A/D/A/F/E/I/B/C/D/H/G/G/H/I/D/A/E/C/B/F/D/C/B/H/G/F/I/E/A/-1",
"I/F/E/B/G/H/D/A/C/A/G/B/E/D/C/F/H/I/C/H/D/A/F/I/B/G/E/B/C/H/I/A/E/G/F/D/G/I/F/D/C/B/H/E/A/D/E/A/G/H/F/C/I/B/H/D/C/F/E/A/I/B/G/F/A/I/C/B/G/E/D/H/E/B/G/H/I/D/A/C/F/-1",
"G/H/D/E/C/A/B/I/F/F/A/C/B/I/D/G/E/H/B/E/I/F/G/H/D/A/C/C/I/G/D/H/B/E/F/A/E/F/B/I/A/C/H/D/G/H/D/A/G/F/E/C/B/I/A/B/H/C/D/I/F/G/E/I/G/E/H/B/F/A/C/D/D/C/F/A/E/G/I/H/B/-1",
"D/G/F/I/A/B/E/C/H/H/I/E/C/F/G/A/D/B/A/B/C/D/H/E/G/F/I/G/E/A/H/D/I/C/B/F/I/F/H/B/E/C/D/G/A/C/D/B/A/G/F/H/I/E/F/A/G/E/I/D/B/H/C/B/H/I/G/C/A/F/E/D/E/C/D/F/B/H/I/A/G/-1",
"I/D/C/B/A/F/H/E/G/F/E/H/I/C/G/D/B/A/A/G/B/D/H/E/C/I/F/E/F/I/H/D/A/G/C/B/H/C/D/G/E/B/A/F/I/B/A/G/C/F/I/E/D/H/C/H/F/A/B/D/I/G/E/D/I/E/F/G/H/B/A/C/G/B/A/E/I/C/F/H/D/-1",
"G/C/A/H/I/B/E/D/F/H/B/F/E/C/D/G/I/A/I/D/E/F/G/A/B/C/H/B/F/H/D/A/G/I/E/C/A/I/G/B/E/C/H/F/D/C/E/D/I/F/H/A/B/G/E/A/B/C/H/F/D/G/I/F/G/I/A/D/E/C/H/B/D/H/C/G/B/I/F/A/E/-1",
"A/I/C/E/D/H/B/G/F/H/F/E/B/C/G/D/A/I/D/G/B/F/I/A/C/H/E/G/D/A/C/H/E/I/F/B/I/C/F/A/B/D/G/E/H/B/E/H/I/G/F/A/D/C/E/B/D/G/F/I/H/C/A/C/A/G/H/E/B/F/I/D/F/H/I/D/A/C/E/B/G/-1",
"I/F/C/E/G/D/H/A/B/H/E/A/I/F/B/G/C/D/D/G/B/A/C/H/I/F/E/C/D/F/G/E/A/B/H/I/B/I/E/D/H/C/A/G/F/G/A/H/B/I/F/E/D/C/E/H/G/C/D/I/F/B/A/A/C/I/F/B/G/D/E/H/F/B/D/H/A/E/C/I/G/-1",
"I/C/A/B/H/D/E/F/G/E/G/D/F/C/I/B/H/A/B/F/H/A/G/E/D/I/C/D/A/I/H/B/G/C/E/F/C/H/E/I/F/A/G/B/D/F/B/G/E/D/C/I/A/H/H/D/B/G/I/F/A/C/E/G/E/F/C/A/B/H/D/I/A/I/C/D/E/H/F/G/B/-1",
"D/I/C/A/G/H/E/F/B/F/E/G/B/I/C/H/D/A/A/H/B/F/D/E/C/I/G/B/A/F/I/C/G/D/H/E/E/G/D/H/B/F/A/C/I/H/C/I/D/E/A/B/G/F/C/D/E/G/A/I/F/B/H/G/B/H/E/F/D/I/A/C/I/F/A/C/H/B/G/E/D/-1",
"E/F/I/B/C/H/A/D/G/C/B/G/D/F/A/I/E/H/D/A/H/E/G/I/C/B/F/A/I/B/C/H/D/G/F/E/G/D/E/A/I/F/H/C/B/H/C/F/G/E/B/D/I/A/B/G/A/F/D/C/E/H/I/I/E/C/H/B/G/F/A/D/F/H/D/I/A/E/B/G/C/-1",
"H/E/G/B/I/F/C/D/A/A/D/C/E/H/G/F/I/B/B/F/I/C/A/D/E/G/H/G/A/D/H/C/I/B/E/F/C/B/F/G/E/A/D/H/I/I/H/E/F/D/B/A/C/G/F/I/A/D/G/C/H/B/E/E/C/B/I/F/H/G/A/D/D/G/H/A/B/E/I/F/C/-1",
"F/C/H/B/E/D/A/G/I/A/I/D/H/G/F/B/C/E/E/B/G/A/I/C/D/F/H/H/A/F/D/B/G/E/I/C/I/D/E/C/H/A/G/B/F/B/G/C/E/F/I/H/A/D/G/F/B/I/D/E/C/H/A/D/H/A/F/C/B/I/E/G/C/E/I/G/A/H/F/D/B/-1",
"E/B/A/D/C/H/F/G/I/I/G/C/B/F/A/D/H/E/F/H/D/I/G/E/B/A/C/H/C/B/G/I/D/E/F/A/G/A/F/E/H/C/I/D/B/D/I/E/A/B/F/H/C/G/A/F/I/H/E/G/C/B/D/C/E/G/F/D/B/A/I/H/B/D/H/C/A/I/G/E/F/-1",
"E/B/F/C/G/A/H/D/I/H/I/D/B/E/F/A/C/G/C/A/G/I/H/D/E/F/B/G/E/A/F/D/C/B/I/H/F/D/I/E/B/H/C/G/A/B/H/C/G/A/I/D/E/F/I/C/B/A/F/E/G/H/D/D/G/E/H/I/B/F/A/C/A/F/H/D/C/G/I/B/E/-1",
"D/H/F/E/G/B/A/C/I/C/I/E/A/H/D/G/F/B/A/B/G/I/F/C/H/E/D/B/D/A/G/E/I/F/H/C/F/G/I/D/C/H/E/B/A/H/E/C/B/A/F/D/I/G/G/F/H/C/I/A/B/D/E/E/C/D/H/B/G/I/A/F/I/A/B/F/D/E/C/G/H/-1",
"G/A/H/I/D/E/B/C/F/I/D/F/A/B/C/E/H/G/E/C/B/F/H/G/A/D/I/C/G/A/H/I/D/F/E/B/D/F/E/B/G/A/C/I/H/B/H/I/C/E/F/D/G/A/F/I/D/G/C/B/H/A/E/A/E/G/D/F/H/I/B/C/H/B/C/E/A/I/G/F/D/-1",
"H/C/A/G/E/B/F/D/I/D/I/E/H/F/C/G/A/B/B/F/G/A/D/I/E/H/C/A/B/F/I/C/G/H/E/D/G/D/C/E/B/H/I/F/A/E/H/I/D/A/F/B/C/G/F/E/D/B/I/A/C/G/H/I/A/H/C/G/E/D/B/F/C/G/B/F/H/D/A/I/E/-1",
"H/F/E/B/I/A/D/C/G/D/G/A/E/H/C/F/I/B/B/I/C/F/D/G/H/A/E/A/H/B/D/F/I/G/E/C/I/E/F/G/C/H/B/D/A/C/D/G/A/E/B/I/H/F/E/A/D/H/G/F/C/B/I/F/C/H/I/B/E/A/G/D/G/B/I/C/A/D/E/F/H/-1",
"B/H/A/C/G/D/E/I/F/C/F/D/I/A/E/H/B/G/E/G/I/H/F/B/C/A/D/I/E/B/F/C/G/D/H/A/A/C/G/D/H/I/F/E/B/H/D/F/E/B/A/G/C/I/G/B/C/A/D/H/I/F/E/F/A/E/G/I/C/B/D/H/D/I/H/B/E/F/A/G/C/-1",
"E/G/C/D/H/A/F/I/B/B/H/F/C/I/E/D/A/G/D/A/I/F/B/G/E/H/C/H/D/B/I/G/C/A/F/E/A/F/G/E/D/B/I/C/H/I/C/E/H/A/F/B/G/D/F/E/H/A/C/D/G/B/I/C/B/D/G/F/I/H/E/A/G/I/A/B/E/H/C/D/F/-1",
"D/F/B/G/C/E/A/I/H/C/H/I/B/A/D/G/E/F/G/A/E/I/F/H/C/D/B/I/G/D/H/B/F/E/A/C/E/C/F/A/D/G/B/H/I/H/B/A/C/E/I/D/F/G/A/I/G/D/H/C/F/B/E/B/E/H/F/G/A/I/C/D/F/D/C/E/I/B/H/G/A/-1",
"E/A/D/H/G/I/C/F/B/I/F/B/E/C/D/H/G/A/H/G/C/B/F/A/D/I/E/C/D/F/I/B/E/A/H/G/G/B/H/D/A/C/I/E/F/A/E/I/G/H/F/B/C/D/F/I/A/C/D/G/E/B/H/D/H/E/F/I/B/G/A/C/B/C/G/A/E/H/F/D/I/-1",
"A/H/E/B/I/F/G/C/D/D/I/F/C/G/E/B/H/A/G/C/B/H/D/A/I/F/E/F/A/I/D/H/G/E/B/C/C/E/H/A/F/B/D/G/I/B/G/D/E/C/I/H/A/F/I/B/A/F/E/H/C/D/G/E/F/C/G/B/D/A/I/H/H/D/G/I/A/C/F/E/B/-1",
"A/G/B/F/H/D/I/C/E/H/C/E/G/I/A/F/D/B/D/I/F/B/C/E/H/A/G/F/D/H/I/E/C/B/G/A/I/B/C/A/G/F/D/E/H/G/E/A/H/D/B/C/F/I/E/H/I/C/F/G/A/B/D/C/A/D/E/B/I/G/H/F/B/F/G/D/A/H/E/I/C/-1",
"B/F/H/C/D/G/E/A/I/A/D/G/H/E/I/C/F/B/I/E/C/F/B/A/H/D/G/C/B/D/G/H/E/F/I/A/F/A/I/D/C/B/G/H/E/G/H/E/A/I/F/D/B/C/E/C/A/I/F/H/B/G/D/D/G/F/B/A/C/I/E/H/H/I/B/E/G/D/A/C/F/-1",
"D/H/B/E/C/I/G/F/A/A/F/E/H/B/G/C/I/D/G/C/I/A/F/D/E/B/H/B/E/D/F/H/C/I/A/G/H/G/A/I/E/B/D/C/F/F/I/C/D/G/A/B/H/E/C/D/F/B/A/E/H/G/I/E/B/H/G/I/F/A/D/C/I/A/G/C/D/H/F/E/B/-1",
"D/B/A/H/C/G/I/F/E/I/H/F/B/A/E/G/C/D/E/G/C/F/D/I/H/A/B/B/I/H/D/E/F/A/G/C/G/C/E/A/I/B/D/H/F/F/A/D/C/G/H/B/E/I/A/F/B/E/H/D/C/I/G/H/E/G/I/B/C/F/D/A/C/D/I/G/F/A/E/B/H/-1",
"A/C/H/F/G/I/D/B/E/I/G/B/D/C/E/H/F/A/D/F/E/H/B/A/G/C/I/E/D/A/B/I/C/F/H/G/F/B/I/G/D/H/A/E/C/C/H/G/A/E/F/I/D/B/B/E/D/I/H/G/C/A/F/H/I/F/C/A/B/E/G/D/G/A/C/E/F/D/B/I/H/-1",
"A/G/C/H/E/B/D/F/I/F/D/E/I/A/C/B/H/G/I/B/H/G/F/D/C/E/A/C/F/A/D/H/E/G/I/B/G/H/B/A/I/F/E/C/D/E/I/D/C/B/G/H/A/F/D/C/F/E/G/A/I/B/H/H/A/G/B/C/I/F/D/E/B/E/I/F/D/H/A/G/C/-1",
"H/A/B/E/F/I/D/C/G/D/F/G/B/A/C/H/I/E/C/E/I/H/D/G/F/B/A/B/D/E/A/I/H/G/F/C/I/G/F/D/C/E/A/H/B/A/H/C/G/B/F/I/E/D/E/C/A/F/H/D/B/G/I/G/B/H/I/E/A/C/D/F/F/I/D/C/G/B/E/A/H/-1",
"F/I/G/H/D/B/A/E/C/C/A/E/I/F/G/B/D/H/B/H/D/C/E/A/G/F/I/D/C/A/F/G/E/I/H/B/I/B/F/D/C/H/E/G/A/G/E/H/B/A/I/D/C/F/E/F/B/A/H/D/C/I/G/A/G/C/E/I/F/H/B/D/H/D/I/G/B/C/F/A/E/-1",
"G/H/A/C/D/F/I/B/E/F/C/I/E/B/A/D/H/G/B/E/D/I/G/H/A/C/F/H/I/C/G/A/D/F/E/B/E/F/G/B/C/I/H/D/A/D/A/B/F/H/E/G/I/C/I/B/E/H/F/G/C/A/D/C/D/F/A/I/B/E/G/H/A/G/H/D/E/C/B/F/I/-1",
"B/A/H/G/F/E/D/I/C/G/I/C/D/H/A/E/F/B/F/D/E/I/B/C/G/H/A/H/F/G/E/D/B/A/C/I/A/C/I/H/G/F/B/E/D/E/B/D/C/A/I/H/G/F/I/H/F/B/E/D/C/A/G/D/G/A/F/C/H/I/B/E/C/E/B/A/I/G/F/D/H/-1",
"I/H/D/A/C/B/E/F/G/G/C/E/I/H/F/B/A/D/A/F/B/G/D/E/H/I/C/E/I/F/H/G/D/C/B/A/D/G/C/B/F/A/I/H/E/B/A/H/C/E/I/G/D/F/C/E/A/D/I/H/F/G/B/H/D/G/F/B/C/A/E/I/F/B/I/E/A/G/D/C/H/-1",
"I/H/C/F/A/B/E/D/G/D/A/F/G/C/E/B/H/I/E/B/G/H/D/I/A/F/C/A/C/D/I/F/H/G/B/E/B/F/E/A/G/D/I/C/H/G/I/H/E/B/C/D/A/F/H/G/A/D/I/F/C/E/B/C/E/I/B/H/A/F/G/D/F/D/B/C/E/G/H/I/A/-1",
"G/A/H/C/E/D/I/F/B/C/I/F/B/A/H/E/D/G/E/B/D/G/I/F/H/A/C/H/E/A/F/B/C/G/I/D/I/G/B/H/D/A/C/E/F/D/F/C/I/G/E/B/H/A/F/C/I/A/H/G/D/B/E/B/D/G/E/F/I/A/C/H/A/H/E/D/C/B/F/G/I/-1",
"I/B/E/C/G/F/H/A/D/D/F/A/B/E/H/G/C/I/H/C/G/I/A/D/B/F/E/F/G/B/D/C/E/I/H/A/A/I/D/H/F/B/E/G/C/E/H/C/G/I/A/D/B/F/G/E/H/F/D/C/A/I/B/B/D/F/A/H/I/C/E/G/C/A/I/E/B/G/F/D/H/-1",
"I/H/C/F/B/E/D/A/G/F/G/B/D/A/H/I/E/C/A/D/E/C/G/I/F/B/H/D/E/F/G/C/A/H/I/B/B/C/G/I/H/D/E/F/A/H/I/A/E/F/B/C/G/D/G/F/I/A/D/C/B/H/E/E/B/D/H/I/G/A/C/F/C/A/H/B/E/F/G/D/I/-1",
"A/G/C/B/F/D/I/E/H/B/H/I/E/C/G/D/A/F/F/D/E/H/A/I/G/C/B/I/A/F/G/B/H/C/D/E/C/E/D/A/I/F/B/H/G/H/B/G/D/E/C/A/F/I/D/F/H/I/G/A/E/B/C/G/C/B/F/D/E/H/I/A/E/I/A/C/H/B/F/G/D/-1",
"E/F/D/G/I/B/H/C/A/H/I/A/C/E/F/G/B/D/G/C/B/A/D/H/F/E/I/B/H/I/F/A/D/C/G/E/A/G/C/I/H/E/D/F/B/D/E/F/B/C/G/A/I/H/I/A/E/D/G/C/B/H/F/C/B/H/E/F/A/I/D/G/F/D/G/H/B/I/E/A/C/-1",
"D/C/F/H/G/E/I/B/A/E/B/I/C/A/F/D/G/H/G/A/H/I/D/B/E/C/F/I/G/E/A/H/D/B/F/C/B/D/A/F/C/G/H/I/E/F/H/C/B/E/I/A/D/G/C/I/B/E/F/H/G/A/D/A/E/D/G/I/C/F/H/B/H/F/G/D/B/A/C/E/I/-1",
"E/A/I/B/D/H/C/F/G/G/F/B/A/I/C/H/E/D/C/D/H/F/G/E/I/B/A/I/H/E/G/F/B/D/A/C/A/G/F/D/C/I/B/H/E/B/C/D/H/E/A/G/I/F/F/I/C/E/B/G/A/D/H/D/B/A/C/H/F/E/G/I/H/E/G/I/A/D/F/C/B/-1",
"F/I/H/B/C/A/E/D/G/C/G/B/F/E/D/A/I/H/D/A/E/I/G/H/F/C/B/G/D/C/H/I/F/B/E/A/H/B/A/E/D/C/G/F/I/E/F/I/A/B/G/C/H/D/I/E/F/G/H/B/D/A/C/A/C/G/D/F/I/H/B/E/B/H/D/C/A/E/I/G/F/-1",
"D/A/H/E/I/G/F/C/B/I/C/B/A/H/F/G/D/E/F/E/G/D/B/C/A/I/H/E/D/F/B/G/I/H/A/C/B/G/C/H/A/D/I/E/F/A/H/I/F/C/E/B/G/D/G/F/A/C/D/H/E/B/I/C/I/E/G/F/B/D/H/A/H/B/D/I/E/A/C/F/G/-1",
"A/F/H/C/B/G/D/E/I/B/E/D/I/H/F/A/G/C/C/G/I/E/A/D/B/H/F/I/C/F/A/E/H/G/B/D/D/H/A/G/I/B/F/C/E/E/B/G/F/D/C/I/A/H/F/I/E/H/G/A/C/D/B/G/D/C/B/F/E/H/I/A/H/A/B/D/C/I/E/F/G/-1",
"E/H/F/C/D/I/G/B/A/B/I/C/F/A/G/E/D/H/A/D/G/B/H/E/C/F/I/H/C/D/G/F/A/B/I/E/F/G/E/I/B/D/H/A/C/I/A/B/E/C/H/F/G/D/G/E/H/A/I/F/D/C/B/D/B/A/H/G/C/I/E/F/C/F/I/D/E/B/A/H/G/-1",
"B/G/E/H/C/F/I/D/A/I/H/A/G/B/D/E/C/F/C/D/F/E/A/I/B/G/H/F/I/B/D/G/E/H/A/C/A/C/G/B/F/H/D/E/I/D/E/H/C/I/A/F/B/G/G/F/D/A/H/B/C/I/E/E/A/I/F/D/C/G/H/B/H/B/C/I/E/G/A/F/D/-1",
"I/B/A/F/E/C/H/G/D/D/G/E/H/I/B/A/F/C/H/F/C/A/G/D/B/E/I/A/I/G/D/C/E/F/H/B/B/D/H/G/F/A/I/C/E/C/E/F/B/H/I/G/D/A/F/C/D/I/A/G/E/B/H/E/H/I/C/B/F/D/A/G/G/A/B/E/D/H/C/I/F/-1",
"D/F/H/C/I/B/A/E/G/C/E/A/F/D/G/I/B/H/I/G/B/E/H/A/D/F/C/F/A/C/D/B/H/G/I/E/B/H/I/G/E/C/F/A/D/E/D/G/A/F/I/H/C/B/A/I/E/H/C/D/B/G/F/H/B/F/I/G/E/C/D/A/G/C/D/B/A/F/E/H/I/-1",
"G/H/A/I/F/E/C/B/D/E/C/B/H/G/D/A/I/F/F/D/I/A/B/C/E/H/G/C/E/H/G/D/I/F/A/B/B/F/D/E/A/H/G/C/I/I/A/G/B/C/F/H/D/E/A/I/F/C/E/B/D/G/H/H/G/E/D/I/A/B/F/C/D/B/C/F/H/G/I/E/A/-1",
"F/I/D/G/B/C/E/H/A/C/A/E/F/H/I/G/B/D/B/H/G/D/A/E/F/C/I/I/F/B/H/C/G/A/D/E/D/E/A/B/I/F/H/G/C/H/G/C/A/E/D/I/F/B/A/C/F/E/G/B/D/I/H/G/B/H/I/D/A/C/E/F/E/D/I/C/F/H/B/A/G/-1",
"F/G/C/E/H/I/B/A/D/A/B/D/F/C/G/I/H/E/I/E/H/B/A/D/F/G/C/H/C/B/D/E/F/G/I/A/E/A/I/H/G/B/D/C/F/G/D/F/A/I/C/H/E/B/B/I/A/G/F/E/C/D/H/C/F/E/I/D/H/A/B/G/D/H/G/C/B/A/E/F/I/-1",
"D/H/G/B/E/C/F/I/A/A/F/I/G/D/H/E/B/C/B/C/E/I/F/A/H/G/D/I/A/B/F/C/E/D/H/G/E/D/C/H/I/G/A/F/B/H/G/F/A/B/D/C/E/I/G/E/H/D/A/B/I/C/F/F/B/D/C/H/I/G/A/E/C/I/A/E/G/F/B/D/H/-1",
"I/E/H/F/B/C/A/D/G/B/D/A/I/G/E/F/H/C/C/F/G/H/A/D/B/E/I/E/G/C/A/F/H/I/B/D/D/H/I/B/E/G/C/A/F/F/A/B/D/C/I/E/G/H/H/I/F/E/D/A/G/C/B/G/B/E/C/H/F/D/I/A/A/C/D/G/I/B/H/F/E/-1",
"G/B/I/F/H/A/C/D/E/H/D/E/B/C/I/G/A/F/C/F/A/D/G/E/I/B/H/D/G/F/H/A/C/E/I/B/B/E/H/I/F/D/A/C/G/I/A/C/E/B/G/F/H/D/E/I/G/A/D/B/H/F/C/F/C/D/G/I/H/B/E/A/A/H/B/C/E/F/D/G/I/-1",
"B/G/C/I/A/E/D/H/F/F/E/A/H/D/B/C/I/G/D/I/H/G/C/F/A/E/B/E/A/B/D/F/H/I/G/C/H/F/G/C/B/I/E/D/A/C/D/I/A/E/G/B/F/H/I/B/D/F/H/A/G/C/E/A/C/F/E/G/D/H/B/I/G/H/E/B/I/C/F/A/D/-1",
"F/A/E/I/D/C/G/H/B/C/B/G/H/E/F/I/D/A/I/H/D/A/B/G/F/C/E/G/E/F/C/H/B/D/A/I/H/I/A/E/G/D/B/F/C/D/C/B/F/A/I/E/G/H/A/D/H/B/F/E/C/I/G/E/G/C/D/I/A/H/B/F/B/F/I/G/C/H/A/E/D/-1",
"I/G/A/C/E/F/B/D/H/B/E/D/H/G/A/F/C/I/F/H/C/I/B/D/A/E/G/A/I/H/E/C/G/D/B/F/C/B/F/D/A/I/H/G/E/E/D/G/F/H/B/C/I/A/D/C/E/G/F/H/I/A/B/H/A/I/B/D/E/G/F/C/G/F/B/A/I/C/E/H/D/-1",
"E/C/H/F/G/D/B/I/A/B/A/I/C/E/H/G/F/D/D/F/G/B/A/I/C/H/E/C/D/F/H/I/A/E/B/G/A/I/E/G/F/B/H/D/C/H/G/B/D/C/E/I/A/F/F/E/A/I/H/G/D/C/B/I/B/C/E/D/F/A/G/H/G/H/D/A/B/C/F/E/I/-1",
"C/A/I/F/G/B/E/H/D/E/D/H/C/A/I/F/B/G/G/F/B/D/E/H/A/I/C/B/E/C/H/D/G/I/F/A/I/G/A/B/F/C/D/E/H/D/H/F/A/I/E/C/G/B/A/I/D/G/H/F/B/C/E/H/C/E/I/B/D/G/A/F/F/B/G/E/C/A/H/D/I/-1",
"D/H/F/B/C/I/G/A/E/G/C/A/E/F/D/B/I/H/B/E/I/H/G/A/C/F/D/C/A/B/I/E/H/D/G/F/E/D/G/F/A/C/I/H/B/F/I/H/D/B/G/E/C/A/I/G/D/A/H/E/F/B/C/A/F/C/G/D/B/H/E/I/H/B/E/C/I/F/A/D/G/-1",
"B/C/G/H/E/D/A/I/F/D/I/E/A/C/F/H/G/B/F/H/A/G/I/B/C/D/E/H/F/B/D/G/I/E/A/C/I/A/C/B/H/E/D/F/G/G/E/D/C/F/A/I/B/H/E/D/I/F/B/C/G/H/A/C/B/H/I/A/G/F/E/D/A/G/F/E/D/H/B/C/I/-1",
"G/B/I/D/A/H/C/E/F/A/F/C/B/I/E/H/D/G/D/E/H/C/G/F/B/A/I/I/H/F/G/C/A/D/B/E/E/D/B/F/H/I/G/C/A/C/A/G/E/B/D/F/I/H/H/G/D/I/E/B/A/F/C/F/C/E/A/D/G/I/H/B/B/I/A/H/F/C/E/G/D/-1",
"E/G/C/A/B/H/D/I/F/B/H/I/D/F/E/A/C/G/F/D/A/I/C/G/B/H/E/H/B/E/C/G/D/F/A/I/C/I/D/E/A/F/G/B/H/A/F/G/B/H/I/C/E/D/G/C/F/H/E/B/I/D/A/D/A/H/F/I/C/E/G/B/I/E/B/G/D/A/H/F/C/-1",
"G/I/D/A/H/E/B/C/F/E/H/C/B/D/F/A/I/G/F/A/B/I/C/G/H/D/E/H/G/F/D/E/I/C/B/A/I/B/A/C/G/H/E/F/D/C/D/E/F/B/A/G/H/I/D/E/G/H/I/C/F/A/B/B/F/H/G/A/D/I/E/C/A/C/I/E/F/B/D/G/H/-1",
"B/H/A/I/E/D/F/C/G/F/G/C/B/A/H/I/E/D/I/D/E/F/C/G/B/H/A/G/A/H/D/B/I/E/F/C/E/B/F/C/H/A/G/D/I/D/C/I/G/F/E/H/A/B/A/F/D/H/G/B/C/I/E/C/E/B/A/I/F/D/G/H/H/I/G/E/D/C/A/B/F/-1",
"C/H/I/E/F/A/B/G/D/G/D/B/H/I/C/F/E/A/A/E/F/G/B/D/H/C/I/F/B/G/D/H/E/A/I/C/H/C/D/B/A/I/G/F/E/E/I/A/F/C/G/D/B/H/I/G/H/C/D/B/E/A/F/D/A/E/I/G/F/C/H/B/B/F/C/A/E/H/I/D/G/-1",
"I/H/F/D/C/B/E/G/A/A/E/G/I/H/F/B/D/C/B/C/D/A/G/E/F/H/I/F/G/A/B/I/D/C/E/H/E/B/H/G/A/C/D/I/F/D/I/C/E/F/H/G/A/B/H/D/E/F/B/I/A/C/G/C/A/B/H/E/G/I/F/D/G/F/I/C/D/A/H/B/E/-1",
"H/A/G/F/C/E/B/I/D/I/F/D/G/B/H/A/E/C/E/C/B/A/D/I/H/F/G/G/E/F/D/I/A/C/B/H/C/B/I/H/F/G/D/A/E/A/D/H/C/E/B/F/G/I/D/I/E/B/A/C/G/H/F/B/G/C/I/H/F/E/D/A/F/H/A/E/G/D/I/C/B/-1",
"F/B/C/E/A/I/G/D/H/A/H/I/G/D/F/E/B/C/D/E/G/B/C/H/F/A/I/C/I/D/F/H/A/B/G/E/H/G/A/D/B/E/C/I/F/B/F/E/I/G/C/D/H/A/G/A/H/C/F/B/I/E/D/I/C/B/A/E/D/H/F/G/E/D/F/H/I/G/A/C/B/-1",
"A/I/F/C/B/H/G/E/D/G/C/D/A/F/E/H/B/I/E/B/H/I/D/G/A/F/C/C/E/A/H/I/B/D/G/F/B/D/G/F/C/A/E/I/H/F/H/I/E/G/D/C/A/B/D/F/C/G/A/I/B/H/E/I/A/E/B/H/C/F/D/G/H/G/B/D/E/F/I/C/A/-1",
"C/D/E/B/G/A/I/H/F/I/G/H/E/C/F/B/D/A/B/A/F/D/I/H/G/C/E/E/F/G/A/D/I/H/B/C/A/C/I/G/H/B/F/E/D/D/H/B/F/E/C/A/G/I/G/B/C/I/F/E/D/A/H/H/I/D/C/A/G/E/F/B/F/E/A/H/B/D/C/I/G/-1",
"G/F/C/D/A/B/E/H/I/A/I/B/F/H/E/G/D/C/E/H/D/G/I/C/A/F/B/B/E/H/A/D/F/I/C/G/F/G/A/H/C/I/B/E/D/D/C/I/B/E/G/H/A/F/I/A/E/C/B/D/F/G/H/C/B/G/E/F/H/D/I/A/H/D/F/I/G/A/C/B/E/-1",
"I/D/C/H/B/F/A/G/E/F/A/E/G/C/I/D/B/H/B/G/H/D/E/A/I/C/F/G/B/D/C/I/H/F/E/A/C/E/F/A/G/D/H/I/B/H/I/A/B/F/E/G/D/C/E/H/G/F/D/B/C/A/I/A/C/I/E/H/G/B/F/D/D/F/B/I/A/C/E/H/G/-1",
"I/D/A/G/B/H/C/E/F/H/G/F/D/E/C/I/B/A/B/E/C/F/I/A/G/D/H/E/C/D/I/A/F/H/G/B/A/B/G/E/H/D/F/I/C/F/I/H/C/G/B/E/A/D/G/A/B/H/C/E/D/F/I/C/F/E/B/D/I/A/H/G/D/H/I/A/F/G/B/C/E/-1",
"C/A/E/F/B/G/I/H/D/B/D/I/H/C/E/F/A/G/H/G/F/D/A/I/E/B/C/E/F/A/I/D/B/C/G/H/D/B/H/E/G/C/A/F/I/G/I/C/A/F/H/D/E/B/I/H/D/B/E/F/G/C/A/A/E/G/C/H/D/B/I/F/F/C/B/G/I/A/H/D/E/-1",
"D/E/B/H/G/A/I/C/F/A/C/F/B/D/I/E/H/G/I/H/G/C/E/F/B/A/D/C/F/D/G/I/H/A/E/B/H/G/A/D/B/E/C/F/I/E/B/I/F/A/C/D/G/H/G/D/H/A/C/B/F/I/E/F/I/C/E/H/D/G/B/A/B/A/E/I/F/G/H/D/C/-1",
"F/B/D/C/E/G/H/A/I/H/A/E/I/D/B/G/F/C/C/G/I/H/F/A/D/B/E/A/H/F/G/I/E/C/D/B/D/I/B/F/C/H/E/G/A/E/C/G/B/A/D/I/H/F/G/F/H/E/B/I/A/C/D/I/D/C/A/H/F/B/E/G/B/E/A/D/G/C/F/I/H/-1",
"G/D/I/H/C/F/B/E/A/F/C/E/B/D/A/H/G/I/B/H/A/G/E/I/F/D/C/C/E/G/D/I/H/A/F/B/H/B/F/C/A/E/D/I/G/I/A/D/F/B/G/E/C/H/A/F/H/E/G/C/I/B/D/E/G/B/I/H/D/C/A/F/D/I/C/A/F/B/G/H/E/-1",
"H/I/G/A/C/F/D/E/B/A/B/C/D/E/G/H/F/I/F/E/D/H/B/I/G/A/C/G/F/B/C/I/E/A/D/H/D/H/E/G/A/B/C/I/F/I/C/A/F/H/D/B/G/E/B/A/I/E/G/C/F/H/D/E/D/H/B/F/A/I/C/G/C/G/F/I/D/H/E/B/A/-1",
"D/B/G/A/C/H/F/I/E/F/H/I/D/E/G/C/B/A/A/C/E/I/B/F/H/G/D/I/D/A/B/H/C/E/F/G/H/E/F/G/I/A/B/D/C/B/G/C/F/D/E/A/H/I/E/F/H/C/G/I/D/A/B/C/I/B/H/A/D/G/E/F/G/A/D/E/F/B/I/C/H/-1",
"B/C/I/A/F/H/G/E/D/G/A/D/E/I/B/C/F/H/E/F/H/C/D/G/I/A/B/F/B/A/I/G/C/H/D/E/D/G/C/H/A/E/B/I/F/I/H/E/D/B/F/A/G/C/C/D/B/G/E/I/F/H/A/A/I/F/B/H/D/E/C/G/H/E/G/F/C/A/D/B/I/-1",
"B/I/F/G/A/H/D/E/C/H/G/D/E/C/B/I/A/F/C/E/A/I/D/F/H/G/B/E/F/B/H/I/A/C/D/G/G/D/I/C/F/E/B/H/A/A/H/C/B/G/D/E/F/I/F/C/G/D/E/I/A/B/H/I/B/E/A/H/G/F/C/D/D/A/H/F/B/C/G/I/E/-1",
"E/C/D/A/G/I/F/H/B/G/F/I/E/H/B/D/C/A/B/H/A/D/C/F/I/E/G/F/A/B/I/E/G/H/D/C/I/D/G/H/A/C/B/F/E/H/E/C/F/B/D/G/A/I/A/B/F/C/I/H/E/G/D/D/G/E/B/F/A/C/I/H/C/I/H/G/D/E/A/B/F/-1",
"C/G/I/F/B/E/D/H/A/D/F/H/I/C/A/B/E/G/E/A/B/H/G/D/I/C/F/H/B/A/D/E/G/F/I/C/I/D/C/B/A/F/E/G/H/G/E/F/C/I/H/A/D/B/A/C/G/E/D/B/H/F/I/F/I/D/A/H/C/G/B/E/B/H/E/G/F/I/C/A/D/-1",
"H/A/B/F/E/C/G/I/D/D/G/I/H/A/B/F/E/C/C/E/F/D/I/G/H/A/B/F/C/G/A/H/E/D/B/I/I/B/E/C/F/D/A/G/H/A/H/D/G/B/I/E/C/F/B/D/A/I/G/H/C/F/E/E/F/C/B/D/A/I/H/G/G/I/H/E/C/F/B/D/A/-1",
"B/H/G/I/D/A/C/F/E/D/E/F/C/H/G/B/I/A/C/A/I/F/E/B/H/G/D/G/I/C/B/A/E/D/H/F/A/D/E/G/F/H/I/C/B/H/F/B/D/C/I/A/E/G/I/G/A/H/B/F/E/D/C/F/B/D/E/I/C/G/A/H/E/C/H/A/G/D/F/B/I/-1",
"E/D/F/H/A/I/C/B/G/I/G/H/B/F/C/A/E/D/B/C/A/G/D/E/F/H/I/C/A/G/F/B/H/I/D/E/D/B/I/C/E/G/H/A/F/F/H/E/A/I/D/G/C/B/H/I/C/E/G/B/D/F/A/A/E/D/I/H/F/B/G/C/G/F/B/D/C/A/E/I/H/-1",
"H/D/E/B/C/G/F/I/A/A/F/I/D/H/E/G/B/C/C/B/G/A/I/F/E/H/D/D/E/A/I/B/C/H/G/F/B/G/H/E/F/A/D/C/I/I/C/F/H/G/D/A/E/B/F/H/C/G/D/I/B/A/E/E/I/B/F/A/H/C/D/G/G/A/D/C/E/B/I/F/H/-1",
"I/E/D/F/A/B/C/H/G/H/C/F/G/E/D/I/B/A/G/A/B/C/I/H/D/E/F/E/F/I/B/C/G/A/D/H/A/D/G/H/F/I/E/C/B/B/H/C/A/D/E/F/G/I/D/B/E/I/G/A/H/F/C/C/I/H/E/B/F/G/A/D/F/G/A/D/H/C/B/I/E/-1",
"C/F/G/B/D/A/E/I/H/A/I/H/G/F/E/C/D/B/E/B/D/I/H/C/A/F/G/B/D/F/A/C/I/H/G/E/G/E/C/H/B/D/I/A/F/I/H/A/E/G/F/D/B/C/D/A/B/C/E/G/F/H/I/H/C/I/F/A/B/G/E/D/F/G/E/D/I/H/B/C/A/-1",
"B/E/C/F/G/D/I/H/A/D/A/H/I/E/C/B/G/F/G/I/F/H/B/A/C/E/D/A/D/E/C/H/I/F/B/G/I/C/B/A/F/G/E/D/H/F/H/G/E/D/B/A/I/C/H/F/I/D/C/E/G/A/B/C/G/A/B/I/H/D/F/E/E/B/D/G/A/F/H/C/I/-1",
"E/B/A/I/C/G/F/D/H/I/D/F/A/H/E/C/G/B/G/H/C/F/B/D/I/A/E/F/A/B/H/D/C/E/I/G/H/C/E/G/I/F/D/B/A/D/I/G/B/E/A/H/C/F/B/E/I/C/G/H/A/F/D/A/G/D/E/F/I/B/H/C/C/F/H/D/A/B/G/E/I/-1",
"E/H/G/B/A/F/D/I/C/F/I/D/C/G/H/B/A/E/B/A/C/E/I/D/H/F/G/G/B/H/F/C/E/A/D/I/C/D/A/I/H/G/F/E/B/I/F/E/D/B/A/C/G/H/H/G/B/A/D/I/E/C/F/D/C/F/G/E/B/I/H/A/A/E/I/H/F/C/G/B/D/-1",
"A/E/I/F/H/B/D/G/C/G/H/B/A/C/D/I/F/E/C/F/D/E/I/G/A/B/H/F/G/C/H/D/A/B/E/I/D/B/E/I/G/C/H/A/F/I/A/H/B/F/E/G/C/D/E/D/G/C/A/H/F/I/B/B/I/A/D/E/F/C/H/G/H/C/F/G/B/I/E/D/A/-1",
"D/E/G/A/F/C/B/H/I/H/A/B/G/D/I/C/F/E/I/F/C/H/B/E/D/A/G/E/C/H/I/A/G/F/D/B/F/B/I/D/E/H/G/C/A/A/G/D/B/C/F/E/I/H/B/I/E/F/H/D/A/G/C/G/D/A/C/I/B/H/E/F/C/H/F/E/G/A/I/B/D/-1",
"B/F/D/G/C/I/A/E/H/E/A/G/F/H/D/I/B/C/H/C/I/E/A/B/G/F/D/A/I/B/D/G/C/F/H/E/D/G/F/A/E/H/C/I/B/C/H/E/I/B/F/D/G/A/I/D/C/H/F/E/B/A/G/G/B/H/C/I/A/E/D/F/F/E/A/B/D/G/H/C/I/-1",
"H/F/I/B/A/G/C/E/D/D/G/E/H/C/F/I/B/A/B/A/C/I/D/E/H/G/F/C/B/A/E/F/D/G/I/H/G/I/D/C/B/H/F/A/E/F/E/H/A/G/I/D/C/B/A/C/F/G/H/B/E/D/I/E/D/G/F/I/A/B/H/C/I/H/B/D/E/C/A/F/G/-1",
"D/B/A/C/E/G/I/H/F/F/H/G/B/I/A/D/C/E/I/E/C/D/F/H/B/G/A/B/F/H/G/A/I/E/D/C/C/G/D/F/B/E/A/I/H/E/A/I/H/C/D/G/F/B/H/I/E/A/G/F/C/B/D/G/C/F/E/D/B/H/A/I/A/D/B/I/H/C/F/E/G/-1",
"C/H/F/D/A/I/G/B/E/G/E/I/F/C/B/D/H/A/D/B/A/E/G/H/C/F/I/B/D/C/G/I/E/H/A/F/I/A/H/C/F/D/B/E/G/F/G/E/H/B/A/I/C/D/E/C/B/A/D/G/F/I/H/H/I/D/B/E/F/A/G/C/A/F/G/I/H/C/E/D/B/-1",
"C/H/D/E/A/G/I/F/B/B/A/I/F/D/C/G/H/E/F/E/G/I/H/B/A/D/C/A/F/H/B/G/I/E/C/D/E/G/C/H/F/D/B/I/A/D/I/B/A/C/E/F/G/H/H/C/A/G/B/F/D/E/I/I/B/F/D/E/H/C/A/G/G/D/E/C/I/A/H/B/F/-1",
"H/F/D/G/A/I/C/E/B/A/B/E/H/C/F/I/G/D/G/I/C/E/D/B/A/H/F/I/D/B/A/E/G/F/C/H/E/C/H/F/B/D/G/I/A/F/G/A/I/H/C/D/B/E/C/H/F/D/I/E/B/A/G/B/A/G/C/F/H/E/D/I/D/E/I/B/G/A/H/F/C/-1",
"A/F/E/I/H/G/D/B/C/B/I/C/A/F/D/H/E/G/G/H/D/C/B/E/I/F/A/E/B/I/H/D/A/G/C/F/D/G/A/F/C/I/B/H/E/F/C/H/G/E/B/A/D/I/I/D/B/E/G/C/F/A/H/C/A/F/B/I/H/E/G/D/H/E/G/D/A/F/C/I/B/-1",
"G/H/D/A/F/I/E/C/B/B/A/C/G/H/E/D/F/I/I/E/F/D/C/B/G/H/A/F/B/I/C/D/A/H/G/E/H/C/G/I/E/F/B/A/D/A/D/E/B/G/H/C/I/F/E/I/A/H/B/C/F/D/G/D/F/H/E/I/G/A/B/C/C/G/B/F/A/D/I/E/H/-1",
"D/H/I/A/B/G/F/E/C/C/F/B/D/E/I/A/G/H/A/G/E/C/F/H/I/D/B/H/B/F/E/C/D/G/A/I/I/C/A/G/H/F/D/B/E/G/E/D/I/A/B/H/C/F/B/A/G/F/I/E/C/H/D/F/D/H/B/G/C/E/I/A/E/I/C/H/D/A/B/F/G/-1",
"F/A/D/E/G/I/C/B/H/H/E/I/B/C/A/D/F/G/C/G/B/F/H/D/I/E/A/A/I/F/H/E/G/B/D/C/D/H/C/A/F/B/G/I/E/G/B/E/I/D/C/H/A/F/B/F/A/G/I/H/E/C/D/E/D/G/C/B/F/A/H/I/I/C/H/D/A/E/F/G/B/-1",
"C/E/I/F/G/D/A/H/B/H/A/B/E/C/I/D/F/G/D/G/F/B/A/H/E/I/C/I/F/D/G/B/C/H/E/A/A/C/G/H/D/E/I/B/F/B/H/E/I/F/A/C/G/D/G/I/C/D/H/F/B/A/E/E/B/A/C/I/G/F/D/H/F/D/H/A/E/B/G/C/I/-1",
"E/D/F/B/A/H/G/I/C/H/G/I/D/C/E/F/B/A/B/C/A/G/F/I/D/H/E/G/H/D/E/I/F/C/A/B/F/I/C/A/D/B/H/E/G/A/B/E/H/G/C/I/D/F/D/E/B/F/H/G/A/C/I/I/A/G/C/E/D/B/F/H/C/F/H/I/B/A/E/G/D/-1",
"B/E/G/D/H/C/I/F/A/D/F/A/I/B/E/G/C/H/H/C/I/G/A/F/D/E/B/A/H/E/B/I/G/F/D/C/I/D/F/C/E/A/B/H/G/C/G/B/F/D/H/A/I/E/G/I/C/H/F/B/E/A/D/E/B/D/A/C/I/H/G/F/F/A/H/E/G/D/C/B/I/-1",
"I/G/H/A/D/C/E/F/B/D/C/F/E/B/G/H/A/I/B/A/E/F/H/I/D/G/C/G/B/D/C/E/H/F/I/A/H/I/A/D/F/B/C/E/G/E/F/C/I/G/A/B/H/D/A/H/B/G/C/E/I/D/F/C/D/G/H/I/F/A/B/E/F/E/I/B/A/D/G/C/H/-1",
"I/D/C/F/A/B/G/H/E/G/A/E/C/D/H/B/F/I/B/H/F/E/I/G/A/D/C/C/I/A/G/F/E/H/B/D/E/G/B/H/C/D/I/A/F/D/F/H/I/B/A/C/E/G/A/B/G/D/E/C/F/I/H/F/C/D/B/H/I/E/G/A/H/E/I/A/G/F/D/C/B/-1",
"B/I/D/F/H/A/C/E/G/A/F/C/G/D/E/H/I/B/G/E/H/B/I/C/A/F/D/D/A/G/C/E/H/F/B/I/I/C/B/D/G/F/E/A/H/E/H/F/A/B/I/G/D/C/F/B/A/I/C/G/D/H/E/C/D/E/H/F/B/I/G/A/H/G/I/E/A/D/B/C/F/-1",
"E/C/B/F/A/I/D/H/G/F/H/I/B/D/G/E/A/C/D/G/A/H/E/C/F/I/B/A/B/F/D/C/H/G/E/I/G/I/H/A/B/E/C/F/D/C/D/E/I/G/F/A/B/H/B/E/G/C/H/A/I/D/F/I/A/D/G/F/B/H/C/E/H/F/C/E/I/D/B/G/A/-1",
"F/C/A/H/D/B/G/E/I/D/G/I/C/F/E/H/B/A/B/E/H/A/I/G/D/F/C/G/D/F/I/A/H/E/C/B/H/A/B/F/E/C/I/D/G/E/I/C/G/B/D/A/H/F/C/B/D/E/G/A/F/I/H/I/H/G/D/C/F/B/A/E/A/F/E/B/H/I/C/G/D/-1",
"C/B/I/F/A/G/E/H/D/H/F/G/C/E/D/B/A/I/E/D/A/I/H/B/F/C/G/F/C/D/H/B/E/G/I/A/A/G/E/D/F/I/H/B/C/I/H/B/G/C/A/D/F/E/B/I/C/E/D/H/A/G/F/D/A/F/B/G/C/I/E/H/G/E/H/A/I/F/C/D/B/-1",
"H/G/I/D/B/F/E/A/C/F/C/B/I/A/E/D/H/G/E/D/A/G/H/C/I/B/F/I/B/F/C/D/A/G/E/H/C/A/E/H/G/I/F/D/B/G/H/D/E/F/B/C/I/A/B/I/G/F/E/H/A/C/D/A/F/C/B/I/D/H/G/E/D/E/H/A/C/G/B/F/I/-1",
"A/G/B/C/H/D/F/I/E/E/I/D/A/B/F/G/H/C/C/H/F/I/E/G/B/D/A/D/C/I/E/F/B/H/A/G/G/A/H/D/C/I/E/B/F/F/B/E/H/G/A/I/C/D/B/F/A/G/D/H/C/E/I/H/D/C/F/I/E/A/G/B/I/E/G/B/A/C/D/F/H/-1",
"C/D/B/F/I/G/E/H/A/A/H/E/B/D/C/G/I/F/G/I/F/E/H/A/C/B/D/B/G/H/I/C/D/F/A/E/F/C/I/A/E/B/H/D/G/E/A/D/G/F/H/I/C/B/D/E/G/C/A/I/B/F/H/H/B/C/D/G/F/A/E/I/I/F/A/H/B/E/D/G/C/-1",
"B/E/H/I/F/C/D/A/G/A/I/D/H/G/E/F/C/B/C/G/F/B/A/D/H/I/E/D/H/G/E/C/B/I/F/A/I/A/E/G/H/F/C/B/D/F/B/C/A/D/I/E/G/H/G/C/A/D/I/H/B/E/F/E/D/I/F/B/G/A/H/C/H/F/B/C/E/A/G/D/I/-1",
"F/D/B/I/E/G/C/H/A/H/E/I/F/C/A/G/D/B/A/G/C/D/H/B/E/I/F/D/I/A/E/G/F/H/B/C/E/F/G/H/B/C/I/A/D/C/B/H/A/I/D/F/G/E/G/C/F/B/A/H/D/E/I/I/A/D/G/F/E/B/C/H/B/H/E/C/D/I/A/F/G/-1",
"E/C/H/B/D/F/I/G/A/G/D/A/I/H/C/E/B/F/I/B/F/E/G/A/C/D/H/C/A/B/H/I/D/F/E/G/H/I/E/G/F/B/D/A/C/D/F/G/C/A/E/H/I/B/A/G/D/F/E/H/B/C/I/B/H/I/D/C/G/A/F/E/F/E/C/A/B/I/G/H/D/-1",
"C/E/H/G/I/D/F/A/B/F/A/I/C/B/H/G/D/E/G/D/B/A/E/F/H/C/I/I/C/A/E/F/B/D/H/G/B/H/G/D/A/I/E/F/C/E/F/D/H/C/G/B/I/A/H/I/E/F/G/A/C/B/D/A/G/F/B/D/C/I/E/H/D/B/C/I/H/E/A/G/F/-1",
"E/B/C/A/F/I/D/H/G/H/D/A/G/B/E/F/C/I/G/F/I/C/H/D/A/B/E/C/I/F/B/G/H/E/A/D/D/E/B/I/A/C/G/F/H/A/G/H/E/D/F/B/I/C/I/H/G/F/E/B/C/D/A/B/C/E/D/I/A/H/G/F/F/A/D/H/C/G/I/E/B/-1",
"I/A/C/H/D/G/E/B/F/F/E/H/I/C/B/G/D/A/B/G/D/A/E/F/I/H/C/A/F/E/B/G/H/C/I/D/G/D/I/E/F/C/H/A/B/C/H/B/D/I/A/F/E/G/E/I/G/F/A/D/B/C/H/H/C/A/G/B/I/D/F/E/D/B/F/C/H/E/A/G/I/-1",
"D/A/C/E/I/H/G/B/F/E/G/B/C/A/F/H/I/D/I/F/H/B/G/D/A/C/E/C/B/I/D/F/G/E/A/H/A/E/F/H/B/C/D/G/I/H/D/G/A/E/I/B/F/C/F/C/A/G/H/E/I/D/B/G/H/D/I/C/B/F/E/A/B/I/E/F/D/A/C/H/G/-1",
"F/I/A/D/B/H/C/G/E/G/C/E/I/F/A/B/D/H/B/H/D/G/C/E/A/I/F/D/E/F/H/G/C/I/B/A/H/A/B/F/I/D/E/C/G/I/G/C/A/E/B/H/F/D/E/F/G/C/A/I/D/H/B/A/D/I/B/H/F/G/E/C/C/B/H/E/D/G/F/A/I/-1",
"D/G/C/F/H/E/I/A/B/A/I/B/D/G/C/E/H/F/H/F/E/A/B/I/C/D/G/G/B/H/C/F/D/A/E/I/E/D/F/I/A/H/G/B/C/C/A/I/B/E/G/D/F/H/F/H/D/G/I/A/B/C/E/B/C/G/E/D/F/H/I/A/I/E/A/H/C/B/F/G/D/-1",
"C/F/E/G/A/B/I/H/D/D/G/H/E/I/F/A/B/C/I/A/B/H/D/C/F/E/G/F/H/A/C/B/I/G/D/E/G/D/I/A/E/H/C/F/B/B/E/C/F/G/D/H/A/I/A/B/G/I/F/E/D/C/H/H/I/D/B/C/A/E/G/F/E/C/F/D/H/G/B/I/A/-1",
"F/H/I/D/C/A/G/E/B/G/E/B/H/I/F/D/C/A/A/C/D/G/E/B/F/I/H/D/G/E/I/B/H/C/A/F/H/F/A/E/G/C/B/D/I/B/I/C/A/F/D/E/H/G/C/A/F/B/D/I/H/G/E/E/D/H/F/A/G/I/B/C/I/B/G/C/H/E/A/F/D/-1",
"F/D/H/E/B/A/C/G/I/C/E/G/I/H/D/F/B/A/B/A/I/F/C/G/D/E/H/D/G/C/B/I/H/A/F/E/A/I/F/D/E/C/G/H/B/H/B/E/A/G/F/I/C/D/G/C/B/H/D/I/E/A/F/E/F/D/G/A/B/H/I/C/I/H/A/C/F/E/B/D/G/-1",
"D/B/I/C/G/F/A/E/H/H/A/F/I/B/E/G/D/C/G/C/E/D/H/A/I/B/F/I/H/D/G/F/B/C/A/E/F/E/A/H/I/C/D/G/B/C/G/B/A/E/D/F/H/I/E/D/H/F/A/I/B/C/G/B/F/C/E/D/G/H/I/A/A/I/G/B/C/H/E/F/D/-1",
"I/B/A/E/D/G/F/C/H/E/H/C/F/I/A/D/G/B/D/F/G/B/C/H/E/A/I/G/D/B/A/F/C/H/I/E/A/I/E/H/G/B/C/F/D/H/C/F/I/E/D/A/B/G/C/E/I/D/B/F/G/H/A/B/G/H/C/A/E/I/D/F/F/A/D/G/H/I/B/E/C/-1",
"C/D/A/G/F/B/E/H/I/G/F/I/H/E/A/B/C/D/B/H/E/I/C/D/A/F/G/H/B/D/E/I/G/C/A/F/A/I/C/B/D/F/G/E/H/E/G/F/C/A/H/D/I/B/I/C/B/F/G/E/H/D/A/F/A/G/D/H/C/I/B/E/D/E/H/A/B/I/F/G/C/-1",
"F/G/E/C/I/A/H/B/D/A/B/H/E/D/G/F/I/C/C/D/I/F/B/H/A/E/G/G/A/F/I/E/D/C/H/B/E/H/C/B/G/F/D/A/I/D/I/B/A/H/C/E/G/F/I/F/G/H/C/E/B/D/A/B/E/A/D/F/I/G/C/H/H/C/D/G/A/B/I/F/E/-1",
"F/A/I/G/H/E/D/C/B/E/D/B/F/I/C/H/G/A/H/G/C/D/A/B/I/E/F/B/E/F/C/G/H/A/I/D/I/C/D/A/B/F/E/H/G/G/H/A/I/E/D/B/F/C/C/I/H/B/D/G/F/A/E/D/F/E/H/C/A/G/B/I/A/B/G/E/F/I/C/D/H/-1",
"A/G/I/B/D/E/C/F/H/H/C/F/G/A/I/B/E/D/E/B/D/C/F/H/G/I/A/B/E/H/F/C/G/A/D/I/I/D/C/A/H/B/F/G/E/G/F/A/I/E/D/H/C/B/D/A/B/E/G/C/I/H/F/F/H/G/D/I/A/E/B/C/C/I/E/H/B/F/D/A/G/-1",
"B/G/I/E/H/A/F/D/C/D/C/E/I/F/B/A/H/G/F/A/H/D/G/C/I/B/E/C/I/G/A/D/F/B/E/H/A/D/B/G/E/H/C/I/F/H/E/F/B/C/I/D/G/A/G/F/C/H/I/D/E/A/B/I/H/A/C/B/E/G/F/D/E/B/D/F/A/G/H/C/I/-1",
"C/A/G/D/E/H/I/F/B/E/H/I/F/B/C/D/G/A/D/F/B/A/G/I/C/H/E/I/D/A/E/H/F/B/C/G/B/C/E/G/I/D/F/A/H/H/G/F/C/A/B/E/I/D/G/B/C/I/D/A/H/E/F/F/E/H/B/C/G/A/D/I/A/I/D/H/F/E/G/B/C/-1",
"B/F/D/I/C/H/G/A/E/G/E/C/A/F/D/B/I/H/H/A/I/E/B/G/D/C/F/C/B/F/H/D/A/E/G/I/E/D/G/B/I/F/C/H/A/I/H/A/G/E/C/F/B/D/D/C/B/F/H/I/A/E/G/F/G/H/C/A/E/I/D/B/A/I/E/D/G/B/H/F/C/-1",
"D/A/B/E/I/C/G/H/F/H/G/I/F/D/A/C/B/E/F/E/C/B/H/G/I/A/D/B/F/H/G/A/D/E/C/I/G/I/E/C/B/F/A/D/H/C/D/A/I/E/H/F/G/B/A/B/F/D/G/E/H/I/C/I/C/G/H/F/B/D/E/A/E/H/D/A/C/I/B/F/G/-1",
"G/B/A/I/E/F/C/D/H/H/E/I/C/D/B/F/A/G/C/D/F/H/A/G/I/E/B/B/F/C/D/I/A/G/H/E/A/H/G/E/B/C/D/F/I/E/I/D/G/F/H/A/B/C/F/G/B/A/H/I/E/C/D/I/A/E/B/C/D/H/G/F/D/C/H/F/G/E/B/I/A/-1",
"H/A/G/B/F/C/E/D/I/D/B/F/I/H/E/A/C/G/I/C/E/D/A/G/F/B/H/F/D/H/C/E/B/G/I/A/B/G/C/F/I/A/H/E/D/A/E/I/G/D/H/B/F/C/E/H/B/A/C/I/D/G/F/G/I/D/H/B/F/C/A/E/C/F/A/E/G/D/I/H/B/-1",
"H/I/E/D/C/B/A/F/G/F/G/A/H/E/I/D/B/C/C/D/B/F/A/G/H/I/E/D/A/C/G/F/H/B/E/I/E/B/I/C/D/A/G/H/F/G/H/F/B/I/E/C/A/D/A/E/G/I/B/D/F/C/H/I/C/H/A/G/F/E/D/B/B/F/D/E/H/C/I/G/A/-1",
"D/I/H/G/C/A/F/E/B/F/A/E/B/D/I/H/G/C/G/B/C/F/E/H/I/D/A/E/H/B/C/I/G/A/F/D/A/C/F/D/H/B/E/I/G/I/G/D/E/A/F/C/B/H/C/D/I/H/B/E/G/A/F/B/E/G/A/F/C/D/H/I/H/F/A/I/G/D/B/C/E/-1",
"F/I/H/C/B/D/G/A/E/C/A/G/E/H/I/B/D/F/D/E/B/A/G/F/C/I/H/H/F/E/G/D/C/A/B/I/A/D/I/F/E/B/H/G/C/G/B/C/I/A/H/F/E/D/I/H/D/B/C/A/E/F/G/E/C/A/D/F/G/I/H/B/B/G/F/H/I/E/D/C/A/-1",
"F/D/E/G/H/I/C/B/A/A/H/B/C/D/F/E/G/I/G/C/I/B/E/A/F/H/D/B/E/G/F/A/H/I/D/C/D/I/C/E/G/B/A/F/H/H/A/F/I/C/D/G/E/B/I/F/D/A/B/G/H/C/E/E/B/A/H/F/C/D/I/G/C/G/H/D/I/E/B/A/F/-1",
"H/C/F/B/E/G/A/D/I/D/A/B/I/F/C/G/H/E/I/E/G/A/D/H/C/F/B/C/G/I/F/H/B/E/A/D/B/H/D/E/I/A/F/G/C/E/F/A/C/G/D/I/B/H/F/B/C/H/A/E/D/I/G/G/I/E/D/B/F/H/C/A/A/D/H/G/C/I/B/E/F/-1",
"E/I/B/H/C/G/F/D/A/A/C/D/E/F/I/H/B/G/G/F/H/B/D/A/E/C/I/I/G/A/C/H/B/D/F/E/B/D/E/A/G/F/C/I/H/C/H/F/D/I/E/G/A/B/D/E/I/F/A/H/B/G/C/H/A/C/G/B/D/I/E/F/F/B/G/I/E/C/A/H/D/-1",
"A/H/F/D/E/G/C/I/B/G/E/C/I/B/A/D/H/F/D/B/I/C/H/F/E/A/G/E/D/B/A/I/H/G/F/C/C/I/G/F/D/B/H/E/A/H/F/A/G/C/E/I/B/D/I/A/E/B/G/D/F/C/H/F/G/H/E/A/C/B/D/I/B/C/D/H/F/I/A/G/E/-1",
"G/D/H/C/I/B/A/F/E/A/E/B/H/D/F/I/G/C/F/C/I/G/E/A/H/D/B/E/I/C/D/B/H/G/A/F/B/A/F/I/G/C/E/H/D/D/H/G/F/A/E/B/C/I/H/B/E/A/F/D/C/I/G/C/G/D/B/H/I/F/E/A/I/F/A/E/C/G/D/B/H/-1",
"G/A/H/F/B/C/I/D/E/D/E/C/G/I/A/H/F/B/B/F/I/E/D/H/G/C/A/F/C/B/H/E/D/A/G/I/A/G/E/B/F/I/C/H/D/H/I/D/A/C/G/E/B/F/E/B/G/C/A/F/D/I/H/I/H/A/D/G/B/F/E/C/C/D/F/I/H/E/B/A/G/-1",
"C/B/H/F/I/A/G/E/D/E/G/A/H/B/D/I/C/F/I/D/F/E/G/C/A/H/B/G/I/B/C/E/F/D/A/H/H/A/C/I/D/G/B/F/E/F/E/D/B/A/H/C/I/G/D/C/E/A/H/B/F/G/I/B/F/I/G/C/E/H/D/A/A/H/G/D/F/I/E/B/C/-1",
"D/A/H/B/F/I/C/E/G/F/E/I/C/G/H/D/A/B/G/C/B/A/E/D/H/F/I/A/I/F/H/B/E/G/C/D/B/D/E/G/C/A/F/I/H/H/G/C/D/I/F/E/B/A/E/H/D/F/A/B/I/G/C/C/F/A/I/H/G/B/D/E/I/B/G/E/D/C/A/H/F/-1",
"F/D/E/H/I/B/G/C/A/G/C/B/E/A/D/H/F/I/I/A/H/C/F/G/B/E/D/B/F/C/D/H/A/I/G/E/A/E/I/G/B/C/D/H/F/H/G/D/F/E/I/A/B/C/E/I/G/B/D/F/C/A/H/C/H/A/I/G/E/F/D/B/D/B/F/A/C/H/E/I/G/-1",
"B/A/E/H/I/F/G/D/C/D/H/C/E/G/A/I/B/F/G/F/I/B/C/D/E/A/H/A/D/B/F/H/G/C/I/E/E/C/H/D/B/I/F/G/A/F/I/G/C/A/E/D/H/B/H/G/F/A/D/C/B/E/I/I/E/A/G/F/B/H/C/D/C/B/D/I/E/H/A/F/G/-1",
"F/H/E/B/D/I/G/C/A/A/C/D/G/H/E/B/F/I/I/B/G/A/C/F/D/H/E/G/I/H/E/F/A/C/B/D/B/D/C/I/G/H/E/A/F/E/F/A/D/B/C/I/G/H/H/E/I/C/A/G/F/D/B/D/G/F/H/E/B/A/I/C/C/A/B/F/I/D/H/E/G/-1",
"I/D/F/B/E/C/G/A/H/H/G/E/F/I/A/B/D/C/B/A/C/H/G/D/E/F/I/C/B/I/A/F/H/D/E/G/A/E/G/D/B/I/C/H/F/F/H/D/G/C/E/I/B/A/D/C/B/I/A/F/H/G/E/E/F/H/C/D/G/A/I/B/G/I/A/E/H/B/F/C/D/-1",
"D/C/G/E/I/F/H/B/A/F/B/H/A/G/D/I/C/E/E/I/A/C/H/B/G/F/D/I/D/E/B/C/A/F/H/G/H/G/F/I/D/E/B/A/C/B/A/C/H/F/G/D/E/I/G/E/D/F/A/H/C/I/B/A/F/I/G/B/C/E/D/H/C/H/B/D/E/I/A/G/F/-1",
"H/C/G/E/F/A/B/I/D/I/D/E/H/B/C/F/G/A/B/F/A/D/I/G/E/H/C/D/I/H/B/E/F/C/A/G/E/A/C/G/H/D/I/F/B/F/G/B/A/C/I/H/D/E/A/H/I/C/G/E/D/B/F/G/E/F/I/D/B/A/C/H/C/B/D/F/A/H/G/E/I/-1",
"I/C/D/F/B/H/A/G/E/E/F/G/C/D/A/B/H/I/A/B/H/I/G/E/C/F/D/H/G/F/B/C/D/I/E/A/C/A/B/E/I/G/H/D/F/D/I/E/A/H/F/G/C/B/B/D/C/G/E/I/F/A/H/F/E/I/H/A/C/D/B/G/G/H/A/D/F/B/E/I/C/-1",
"H/F/I/D/E/A/B/G/C/G/D/C/H/B/F/E/I/A/E/B/A/G/I/C/F/H/D/F/I/G/A/D/H/C/B/E/D/A/H/E/C/B/I/F/G/B/C/E/F/G/I/A/D/H/C/E/F/I/H/D/G/A/B/A/G/D/B/F/E/H/C/I/I/H/B/C/A/G/D/E/F/-1",
"G/F/C/I/D/B/H/A/E/H/B/I/E/C/A/F/G/D/A/D/E/G/F/H/C/I/B/B/E/H/A/G/F/D/C/I/C/A/D/B/E/I/G/H/F/I/G/F/D/H/C/B/E/A/D/H/A/F/I/G/E/B/C/E/C/B/H/A/D/I/F/G/F/I/G/C/B/E/A/D/H/-1",
"G/A/F/C/D/H/I/E/B/I/B/H/A/F/E/C/G/D/E/C/D/B/G/I/F/H/A/D/F/B/H/A/C/E/I/G/H/I/E/F/B/G/D/A/C/A/G/C/E/I/D/B/F/H/B/H/I/G/C/F/A/D/E/F/E/A/D/H/B/G/C/I/C/D/G/I/E/A/H/B/F/-1",
"C/D/F/H/A/B/E/G/I/B/H/E/I/F/G/D/C/A/I/G/A/E/C/D/B/H/F/A/E/B/F/I/C/G/D/H/H/F/D/B/G/A/I/E/C/G/I/C/D/H/E/A/F/B/D/B/H/A/E/F/C/I/G/E/C/I/G/B/H/F/A/D/F/A/G/C/D/I/H/B/E/-1",
"F/B/A/H/C/E/D/I/G/H/D/G/A/F/I/C/B/E/E/I/C/D/B/G/A/F/H/A/G/F/B/D/C/E/H/I/I/E/D/G/H/A/F/C/B/B/C/H/E/I/F/G/D/A/D/H/E/F/G/B/I/A/C/C/A/B/I/E/D/H/G/F/G/F/I/C/A/H/B/E/D/-1",
"A/G/D/I/E/F/B/C/H/F/B/E/C/H/G/A/D/I/H/I/C/B/A/D/E/G/F/C/F/I/H/D/A/G/B/E/G/D/H/E/B/I/C/F/A/B/E/A/G/F/C/I/H/D/I/C/F/D/G/E/H/A/B/E/A/B/F/C/H/D/I/G/D/H/G/A/I/B/F/E/C/-1",
"H/E/A/G/C/B/F/I/D/I/D/C/H/F/A/E/G/B/G/B/F/E/D/I/C/A/H/B/I/D/A/G/E/H/C/F/E/A/H/F/I/C/D/B/G/F/C/G/D/B/H/A/E/I/D/G/B/C/E/F/I/H/A/C/H/I/B/A/D/G/F/E/A/F/E/I/H/G/B/D/C/-1",
"H/F/D/C/I/B/G/E/A/E/A/B/D/H/G/F/I/C/C/G/I/A/E/F/B/H/D/G/D/C/H/F/E/A/B/I/B/H/E/I/A/C/D/F/G/A/I/F/G/B/D/E/C/H/D/B/H/E/C/A/I/G/F/I/E/G/F/D/H/C/A/B/F/C/A/B/G/I/H/D/E/-1",
"E/G/D/H/B/I/C/F/A/C/I/B/F/A/E/G/H/D/H/A/F/G/C/D/I/E/B/A/F/I/B/E/C/D/G/H/B/H/G/D/F/A/E/I/C/D/C/E/I/H/G/B/A/F/I/B/C/A/G/H/F/D/E/F/D/H/E/I/B/A/C/G/G/E/A/C/D/F/H/B/I/-1",
"G/D/F/C/E/H/A/I/B/I/B/C/G/A/D/E/H/F/E/H/A/I/F/B/G/D/C/F/E/G/B/D/A/H/C/I/B/I/H/E/C/F/D/G/A/C/A/D/H/I/G/F/B/E/D/C/E/A/H/I/B/F/G/H/G/I/F/B/E/C/A/D/A/F/B/D/G/C/I/E/H/-1",
"H/B/F/C/D/I/G/E/A/I/E/D/A/G/F/H/B/C/C/A/G/H/B/E/I/F/D/G/H/A/F/C/D/B/I/E/D/C/I/E/H/B/F/A/G/B/F/E/I/A/G/D/C/H/E/I/H/D/F/A/C/G/B/F/G/C/B/E/H/A/D/I/A/D/B/G/I/C/E/H/F/-1",
"A/E/F/D/C/I/H/G/B/B/I/H/E/F/G/D/C/A/D/C/G/H/A/B/E/I/F/I/A/C/B/E/F/G/H/D/H/G/B/I/D/A/F/E/C/F/D/E/C/G/H/B/A/I/E/B/D/G/I/C/A/F/H/C/H/A/F/B/E/I/D/G/G/F/I/A/H/D/C/B/E/-1",
"D/B/G/H/E/A/C/F/I/F/I/H/B/D/C/A/E/G/C/A/E/G/I/F/B/D/H/B/E/F/D/G/H/I/C/A/I/G/A/C/F/E/H/B/D/H/D/C/A/B/I/E/G/F/A/F/D/E/H/B/G/I/C/G/H/B/I/C/D/F/A/E/E/C/I/F/A/G/D/H/B/-1",
"B/D/C/G/E/I/A/H/F/A/I/F/D/B/H/C/E/G/E/G/H/F/C/A/I/B/D/F/B/D/I/A/G/H/C/E/G/E/I/H/D/C/F/A/B/H/C/A/B/F/E/D/G/I/C/A/G/E/I/D/B/F/H/D/F/E/C/H/B/G/I/A/I/H/B/A/G/F/E/D/C/-1",
"D/F/E/A/C/H/G/I/B/B/A/G/E/I/F/D/C/H/I/C/H/D/B/G/E/A/F/E/B/C/I/G/A/F/H/D/A/D/F/B/H/E/I/G/C/G/H/I/F/D/C/B/E/A/H/I/B/G/A/D/C/F/E/F/G/A/C/E/B/H/D/I/C/E/D/H/F/I/A/B/G/-1",
"A/G/I/E/D/C/H/F/B/H/F/B/G/A/I/E/C/D/C/D/E/B/F/H/G/I/A/D/E/H/C/B/A/F/G/I/G/I/F/H/E/D/B/A/C/B/C/A/I/G/F/D/E/H/F/H/C/D/I/E/A/B/G/I/A/G/F/H/B/C/D/E/E/B/D/A/C/G/I/H/F/-1",
"E/G/H/D/A/F/I/B/C/C/F/A/I/B/G/D/H/E/I/B/D/H/C/E/A/F/G/B/E/C/F/I/H/G/A/D/H/A/G/E/D/C/F/I/B/D/I/F/B/G/A/C/E/H/G/H/E/A/F/D/B/C/I/A/C/I/G/E/B/H/D/F/F/D/B/C/H/I/E/G/A/-1",
"G/F/A/C/D/H/B/I/E/H/D/B/I/F/E/C/A/G/E/I/C/A/G/B/H/D/F/C/B/H/E/A/I/G/F/D/D/E/F/H/C/G/A/B/I/A/G/I/D/B/F/E/H/C/B/A/D/G/I/C/F/E/H/F/H/G/B/E/D/I/C/A/I/C/E/F/H/A/D/G/B/-1",
"A/E/D/G/I/F/C/B/H/C/H/G/D/B/A/I/F/E/F/I/B/E/H/C/D/G/A/B/F/I/C/E/G/H/A/D/D/G/H/I/A/B/F/E/C/E/C/A/H/F/D/B/I/G/G/A/F/B/D/H/E/C/I/H/B/E/A/C/I/G/D/F/I/D/C/F/G/E/A/H/B/-1",
"C/G/E/A/B/F/I/H/D/I/F/B/G/D/H/E/A/C/A/D/H/C/I/E/G/F/B/F/I/G/E/A/C/B/D/H/H/A/D/I/G/B/F/C/E/E/B/C/F/H/D/A/I/G/G/E/F/H/C/I/D/B/A/B/H/I/D/E/A/C/G/F/D/C/A/B/F/G/H/E/I/-1",
"G/A/B/D/E/F/C/I/H/I/F/C/A/G/H/D/B/E/E/H/D/I/C/B/A/F/G/H/G/I/C/D/A/B/E/F/B/C/E/F/I/G/H/A/D/A/D/F/H/B/E/I/G/C/F/B/A/E/H/D/G/C/I/C/E/H/G/A/I/F/D/B/D/I/G/B/F/C/E/H/A/-1",
"F/D/E/I/G/C/A/B/H/G/I/A/D/H/B/E/F/C/H/C/B/E/A/F/G/I/D/A/H/I/C/F/D/B/E/G/B/E/G/A/I/H/D/C/F/D/F/C/B/E/G/H/A/I/C/G/D/F/B/E/I/H/A/E/A/F/H/D/I/C/G/B/I/B/H/G/C/A/F/D/E/-1",
"F/I/C/D/A/B/G/H/E/H/G/E/C/I/F/B/D/A/A/D/B/H/G/E/C/F/I/G/B/I/A/H/C/D/E/F/D/H/F/B/E/I/A/C/G/C/E/A/F/D/G/H/I/B/B/C/D/E/F/A/I/G/H/I/F/H/G/B/D/E/A/C/E/A/G/I/C/H/F/B/D/-1",
"D/G/C/A/E/F/B/H/I/I/A/H/B/D/C/E/G/F/E/F/B/I/G/H/C/A/D/G/D/E/F/C/I/A/B/H/B/I/A/E/H/G/F/D/C/H/C/F/D/A/B/G/I/E/F/H/G/C/I/A/D/E/B/C/E/I/G/B/D/H/F/A/A/B/D/H/F/E/I/C/G/-1",
"H/G/A/B/D/E/C/F/I/F/C/E/I/H/G/B/D/A/I/B/D/F/C/A/G/E/H/B/A/G/C/F/H/E/I/D/D/E/I/G/A/B/H/C/F/C/F/H/E/I/D/A/B/G/G/D/C/A/B/I/F/H/E/E/H/F/D/G/C/I/A/B/A/I/B/H/E/F/D/G/C/-1",
"I/C/E/H/B/A/D/G/F/G/D/B/I/E/F/C/H/A/A/F/H/D/G/C/E/I/B/F/I/G/C/D/E/B/A/H/H/A/D/B/I/G/F/C/E/E/B/C/F/A/H/I/D/G/B/G/F/A/C/D/H/E/I/C/H/A/E/F/I/G/B/D/D/E/I/G/H/B/A/F/C/-1",
"E/D/C/B/G/A/H/F/I/F/B/G/H/E/I/A/D/C/I/A/H/C/F/D/B/E/G/G/E/F/D/A/H/I/C/B/H/C/A/I/B/E/D/G/F/D/I/B/F/C/G/E/A/H/C/G/D/E/H/B/F/I/A/A/H/E/G/I/F/C/B/D/B/F/I/A/D/C/G/H/E/-1",
"I/D/F/A/H/C/G/B/E/C/H/G/B/E/F/I/D/A/A/E/B/I/D/G/F/C/H/B/F/I/E/C/A/H/G/D/G/C/D/H/I/B/E/A/F/H/A/E/F/G/D/C/I/B/E/B/H/G/A/I/D/F/C/F/G/C/D/B/E/A/H/I/D/I/A/C/F/H/B/E/G/-1",
"A/I/C/B/F/H/E/G/D/D/E/F/A/I/G/C/H/B/H/B/G/D/E/C/A/F/I/F/H/I/G/A/D/B/C/E/B/D/E/I/C/F/G/A/H/C/G/A/H/B/E/D/I/F/I/C/B/E/H/A/F/D/G/E/A/D/F/G/I/H/B/C/G/F/H/C/D/B/I/E/A/-1",
"F/E/G/H/D/A/C/B/I/H/C/I/G/F/B/A/D/E/B/A/D/E/I/C/F/G/H/I/G/A/B/H/F/E/C/D/C/B/E/D/A/I/G/H/F/D/H/F/C/G/E/I/A/B/A/F/C/I/B/H/D/E/G/E/D/H/F/C/G/B/I/A/G/I/B/A/E/D/H/F/C/-1",
"G/C/H/B/A/F/D/E/I/A/D/I/G/E/H/B/C/F/B/E/F/D/C/I/H/G/A/F/G/B/H/D/E/A/I/C/C/A/E/I/F/B/G/H/D/I/H/D/A/G/C/F/B/E/E/F/G/C/H/D/I/A/B/D/I/A/E/B/G/C/F/H/H/B/C/F/I/A/E/D/G/-1",
"E/G/D/H/B/I/F/A/C/F/C/H/E/G/A/B/D/I/B/A/I/C/F/D/G/H/E/C/H/E/A/D/B/I/G/F/A/F/B/I/H/G/E/C/D/I/D/G/F/E/C/A/B/H/D/I/A/G/C/E/H/F/B/H/E/C/B/A/F/D/I/G/G/B/F/D/I/H/C/E/A/-1",
"D/B/H/E/C/A/I/F/G/F/C/I/D/G/H/B/E/A/G/A/E/B/I/F/H/D/C/A/E/F/C/H/G/D/I/B/C/I/D/A/B/E/F/G/H/H/G/B/F/D/I/A/C/E/I/D/G/H/A/C/E/B/F/E/H/C/I/F/B/G/A/D/B/F/A/G/E/D/C/H/I/-1",
"G/H/B/I/A/D/C/F/E/F/E/D/H/C/G/A/B/I/C/I/A/E/B/F/G/H/D/E/B/F/A/I/H/D/G/C/H/A/C/D/G/B/I/E/F/I/D/G/C/F/E/H/A/B/D/C/E/F/H/A/B/I/G/A/G/I/B/E/C/F/D/H/B/F/H/G/D/I/E/C/A/-1",
"A/B/G/I/E/H/F/D/C/F/C/D/G/B/A/I/H/E/E/I/H/D/F/C/G/B/A/C/E/F/B/A/G/D/I/H/H/A/B/E/I/D/C/G/F/G/D/I/C/H/F/E/A/B/B/F/E/H/G/I/A/C/D/I/H/C/A/D/E/B/F/G/D/G/A/F/C/B/H/E/I/-1",
"C/G/I/H/D/A/E/F/B/B/F/D/E/C/I/G/H/A/E/H/A/F/G/B/I/C/D/I/B/H/D/A/E/C/G/F/A/C/G/B/I/F/D/E/H/D/E/F/G/H/C/B/A/I/G/I/C/A/F/D/H/B/E/H/A/B/I/E/G/F/D/C/F/D/E/C/B/H/A/I/G/-1",
"I/A/F/H/G/E/D/C/B/C/G/B/A/I/D/E/H/F/E/H/D/C/F/B/G/I/A/F/C/A/D/H/G/B/E/I/D/E/H/I/B/F/C/A/G/G/B/I/E/C/A/H/F/D/B/I/E/F/D/H/A/G/C/A/D/C/G/E/I/F/B/H/H/F/G/B/A/C/I/D/E/-1",
"I/A/F/C/H/G/D/B/E/H/D/B/F/A/E/C/I/G/G/C/E/I/B/D/H/F/A/C/I/G/A/F/H/B/E/D/B/E/H/G/D/I/A/C/F/D/F/A/E/C/B/I/G/H/A/G/C/H/I/F/E/D/B/E/H/D/B/G/C/F/A/I/F/B/I/D/E/A/G/H/C/-1",
"G/F/I/A/D/C/H/B/E/B/D/E/F/H/G/I/A/C/C/A/H/B/E/I/G/F/D/D/E/A/I/B/F/C/H/G/I/B/C/H/G/D/F/E/A/H/G/F/E/C/A/D/I/B/A/H/D/G/I/E/B/C/F/E/C/B/D/F/H/A/G/I/F/I/G/C/A/B/E/D/H/-1",
"G/A/H/F/D/E/C/I/B/C/I/E/G/B/A/D/H/F/B/D/F/I/H/C/G/A/E/D/F/A/H/E/B/I/G/C/I/C/G/D/A/F/B/E/H/E/H/B/C/I/G/A/F/D/A/G/C/E/F/D/H/B/I/F/B/I/A/C/H/E/D/G/H/E/D/B/G/I/F/C/A/-1",
"E/A/D/I/F/B/C/G/H/I/C/H/G/A/D/F/B/E/F/G/B/H/E/C/D/A/I/B/F/G/A/H/E/I/C/D/H/D/E/C/I/G/B/F/A/C/I/A/D/B/F/H/E/G/G/B/F/E/D/I/A/H/C/D/H/C/B/G/A/E/I/F/A/E/I/F/C/H/G/D/B/-1",
"E/D/A/G/B/C/H/F/I/G/B/F/H/I/E/D/C/A/I/H/C/F/D/A/G/E/B/F/G/E/I/A/D/C/B/H/B/I/H/E/C/G/A/D/F/A/C/D/B/H/F/I/G/E/H/F/I/D/G/B/E/A/C/C/E/G/A/F/H/B/I/D/D/A/B/C/E/I/F/H/G/-1",
"H/E/C/B/F/I/G/A/D/A/G/D/H/E/C/B/F/I/B/F/I/D/A/G/E/H/C/I/D/H/E/B/F/C/G/A/C/B/E/G/H/A/I/D/F/F/A/G/I/C/D/H/E/B/E/I/B/A/D/H/F/C/G/G/C/A/F/I/E/D/B/H/D/H/F/C/G/B/A/I/E/-1",
"E/C/G/D/A/F/B/H/I/D/B/H/I/E/G/C/F/A/I/F/A/B/C/H/D/E/G/C/E/B/G/I/A/H/D/F/G/I/D/F/H/B/E/A/C/A/H/F/E/D/C/G/I/B/F/A/C/H/B/E/I/G/D/H/G/I/C/F/D/A/B/E/B/D/E/A/G/I/F/C/H/-1",
"A/B/H/G/F/D/C/I/E/E/C/G/I/A/H/D/B/F/I/F/D/C/E/B/H/A/G/G/I/A/D/H/F/E/C/B/F/E/B/A/C/I/G/H/D/H/D/C/B/G/E/I/F/A/C/H/F/E/D/A/B/G/I/D/G/I/F/B/C/A/E/H/B/A/E/H/I/G/F/D/C/-1",
"D/C/I/E/A/G/B/H/F/F/E/H/D/C/B/I/G/A/B/A/G/I/H/F/D/E/C/C/F/A/H/I/D/E/B/G/G/D/B/A/F/E/H/C/I/H/I/E/B/G/C/A/F/D/I/B/C/F/E/A/G/D/H/E/H/F/G/D/I/C/A/B/A/G/D/C/B/H/F/I/E/-1",
"D/H/E/F/G/A/C/B/I/F/B/C/I/E/D/H/A/G/G/I/A/C/B/H/E/D/F/A/C/H/G/D/B/I/F/E/E/D/F/H/I/C/A/G/B/I/G/B/A/F/E/D/C/H/H/F/I/D/C/G/B/E/A/B/A/D/E/H/F/G/I/C/C/E/G/B/A/I/F/H/D/-1",
"I/E/F/C/D/G/B/H/A/A/B/D/H/E/F/G/I/C/H/G/C/B/I/A/E/D/F/E/H/B/I/G/C/F/A/D/F/C/A/D/B/E/I/G/H/G/D/I/A/F/H/C/E/B/C/F/H/G/A/I/D/B/E/D/A/G/E/C/B/H/F/I/B/I/E/F/H/D/A/C/G/-1",
"D/E/A/I/G/H/B/C/F/C/G/F/D/E/B/A/H/I/B/I/H/F/C/A/G/E/D/I/C/E/A/D/F/H/B/G/G/H/D/B/I/E/F/A/C/A/F/B/G/H/C/I/D/E/H/D/I/C/A/G/E/F/B/E/B/C/H/F/I/D/G/A/F/A/G/E/B/D/C/I/H/-1",
"H/A/F/G/D/E/C/I/B/E/I/B/C/A/H/F/D/G/G/C/D/B/F/I/A/E/H/D/F/A/I/C/B/G/H/E/C/H/G/D/E/F/B/A/I/I/B/E/H/G/A/D/F/C/A/D/C/E/I/G/H/B/F/B/G/I/F/H/D/E/C/A/F/E/H/A/B/C/I/G/D/-1",
"E/I/A/H/D/G/C/F/B/C/F/H/E/B/A/I/G/D/B/D/G/F/I/C/E/A/H/H/B/D/A/G/E/F/I/C/F/E/I/D/C/B/A/H/G/G/A/C/I/H/F/D/B/E/A/C/E/B/F/H/G/D/I/D/H/F/G/E/I/B/C/A/I/G/B/C/A/D/H/E/F/-1",
"B/A/D/C/F/G/E/I/H/H/F/E/B/A/I/C/D/G/G/I/C/H/E/D/F/A/B/I/C/A/G/H/F/B/E/D/F/D/B/E/C/A/G/H/I/E/G/H/I/D/B/A/F/C/A/B/F/D/G/H/I/C/E/C/H/I/F/B/E/D/G/A/D/E/G/A/I/C/H/B/F/-1",
"A/G/I/B/E/H/C/F/D/B/D/F/A/I/C/H/G/E/C/E/H/D/F/G/B/I/A/G/A/B/F/C/E/D/H/I/I/C/D/H/A/B/F/E/G/F/H/E/G/D/I/A/B/C/H/F/A/I/G/D/E/C/B/D/I/C/E/B/F/G/A/H/E/B/G/C/H/A/I/D/F/-1",
"F/I/C/H/E/A/D/B/G/G/A/B/C/D/I/H/F/E/E/H/D/B/G/F/A/C/I/I/G/A/D/F/C/E/H/B/D/E/F/A/B/H/G/I/C/C/B/H/E/I/G/F/D/A/B/D/G/F/C/E/I/A/H/A/F/E/I/H/B/C/G/D/H/C/I/G/A/D/B/E/F/-1",
"A/C/D/F/H/G/E/I/B/B/F/G/E/I/D/C/A/H/H/I/E/B/A/C/G/D/F/G/D/H/A/F/E/B/C/I/C/E/I/G/D/B/F/H/A/F/A/B/H/C/I/D/E/G/E/H/F/C/G/A/I/B/D/D/B/A/I/E/F/H/G/C/I/G/C/D/B/H/A/F/E/-1",
"B/G/C/D/H/E/I/A/F/D/E/A/G/F/I/C/H/B/H/F/I/A/C/B/G/D/E/C/I/F/B/D/H/E/G/A/A/B/E/I/G/F/D/C/H/G/H/D/E/A/C/F/B/I/I/A/B/C/E/D/H/F/G/F/D/G/H/I/A/B/E/C/E/C/H/F/B/G/A/I/D/-1",
"A/E/F/B/I/C/G/H/D/B/H/D/G/F/A/E/C/I/C/G/I/H/D/E/F/A/B/D/I/A/E/C/F/B/G/H/G/B/E/I/H/D/A/F/C/H/F/C/A/G/B/I/D/E/I/C/G/F/E/H/D/B/A/F/A/H/D/B/I/C/E/G/E/D/B/C/A/G/H/I/F/-1",
"F/C/E/H/D/I/G/A/B/H/A/B/F/E/G/I/D/C/D/G/I/C/A/B/F/H/E/I/D/H/E/B/A/C/F/G/E/F/G/D/C/H/B/I/A/C/B/A/G/I/F/H/E/D/B/E/F/A/H/C/D/G/I/A/H/C/I/G/D/E/B/F/G/I/D/B/F/E/A/C/H/-1",
"E/F/H/A/C/G/D/I/B/I/D/B/H/E/F/C/A/G/G/C/A/B/I/D/E/F/H/C/H/G/E/A/B/I/D/F/D/I/F/G/H/C/A/B/E/B/A/E/F/D/I/H/G/C/F/E/D/C/B/A/G/H/I/H/G/I/D/F/E/B/C/A/A/B/C/I/G/H/F/E/D/-1",
"I/D/A/F/C/H/B/E/G/G/E/C/D/B/A/F/H/I/F/B/H/G/E/I/A/C/D/D/G/F/H/I/C/E/A/B/H/A/I/E/G/B/D/F/C/E/C/B/A/D/F/I/G/H/A/F/D/I/H/G/C/B/E/B/I/G/C/F/E/H/D/A/C/H/E/B/A/D/G/I/F/-1",
"G/E/A/H/C/D/B/I/F/D/C/F/B/I/A/G/E/H/B/I/H/G/F/E/A/D/C/I/G/D/C/E/H/F/A/B/F/A/C/I/G/B/D/H/E/H/B/E/D/A/F/C/G/I/C/D/I/F/H/G/E/B/A/A/H/B/E/D/C/I/F/G/E/F/G/A/B/I/H/C/D/-1",
"G/D/E/I/H/C/A/F/B/B/A/H/F/E/D/G/C/I/F/C/I/G/B/A/H/E/D/H/F/C/D/I/E/B/G/A/E/B/D/C/A/G/F/I/H/I/G/A/H/F/B/C/D/E/A/I/F/E/G/H/D/B/C/C/H/G/B/D/I/E/A/F/D/E/B/A/C/F/I/H/G/-1",
"I/G/D/B/C/A/E/F/H/A/H/B/E/G/F/D/I/C/C/E/F/I/D/H/G/A/B/B/I/E/H/F/D/C/G/A/H/C/G/A/B/E/I/D/F/F/D/A/C/I/G/B/H/E/E/F/I/D/H/B/A/C/G/G/A/C/F/E/I/H/B/D/D/B/H/G/A/C/F/E/I/-1",
"H/I/E/C/D/F/A/B/G/G/F/B/I/H/A/E/D/C/D/C/A/E/B/G/F/I/H/I/E/C/A/G/H/D/F/B/F/G/H/B/I/D/C/A/E/B/A/D/F/E/C/H/G/I/E/D/G/H/A/B/I/C/F/C/B/I/D/F/E/G/H/A/A/H/F/G/C/I/B/E/D/-1",
"A/F/H/E/B/D/I/G/C/G/I/E/F/H/C/B/D/A/B/C/D/I/A/G/H/E/F/E/A/F/G/D/B/C/H/I/H/G/C/A/F/I/D/B/E/I/D/B/H/C/E/F/A/G/D/B/I/C/G/A/E/F/H/F/E/G/B/I/H/A/C/D/C/H/A/D/E/F/G/I/B/-1",
"G/D/E/C/I/A/B/H/F/C/F/H/D/B/G/I/E/A/B/A/I/F/H/E/D/G/C/E/B/G/H/A/D/F/C/I/F/I/C/E/G/B/A/D/H/D/H/A/I/F/C/E/B/G/H/G/F/B/D/I/C/A/E/A/E/B/G/C/F/H/I/D/I/C/D/A/E/H/G/F/B/-1",
"H/B/F/I/C/E/A/G/D/D/A/C/F/G/B/E/H/I/E/G/I/A/H/D/F/B/C/I/F/D/H/E/A/G/C/B/C/E/B/D/F/G/H/I/A/A/H/G/B/I/C/D/F/E/F/D/E/G/B/I/C/A/H/B/C/H/E/A/F/I/D/G/G/I/A/C/D/H/B/E/F/-1",
"D/B/F/G/C/I/A/H/E/C/G/H/A/E/D/I/B/F/I/E/A/B/H/F/G/D/C/G/C/D/E/I/A/H/F/B/E/A/B/H/F/C/D/I/G/H/F/I/D/G/B/C/E/A/F/I/E/C/D/G/B/A/H/B/D/G/F/A/H/E/C/I/A/H/C/I/B/E/F/G/D/-1",
"B/G/F/I/E/C/D/A/H/E/A/D/G/F/H/C/I/B/C/H/I/B/A/D/G/E/F/H/D/A/E/I/F/B/C/G/I/C/B/D/G/A/F/H/E/F/E/G/C/H/B/I/D/A/G/B/C/H/D/E/A/F/I/A/I/E/F/C/G/H/B/D/D/F/H/A/B/I/E/G/C/-1",
"G/D/C/A/B/H/E/F/I/B/E/F/I/G/D/A/H/C/I/H/A/E/F/C/D/B/G/E/A/I/C/D/B/H/G/F/H/G/B/F/A/I/C/D/E/F/C/D/H/E/G/I/A/B/D/F/E/B/I/A/G/C/H/C/I/G/D/H/F/B/E/A/A/B/H/G/C/E/F/I/D/-1",
"G/E/I/C/H/B/D/A/F/D/C/B/F/I/A/H/G/E/A/H/F/D/E/G/B/C/I/C/G/A/E/B/F/I/D/H/F/I/H/G/C/D/E/B/A/B/D/E/I/A/H/C/F/G/I/F/G/B/D/E/A/H/C/H/B/C/A/G/I/F/E/D/E/A/D/H/F/C/G/I/B/-1",
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
if (localStorage.getItem("question_number3hard") != null)
{
	question_number = parseInt(localStorage.getItem("question_number3hard"));
}
if (question_number <= 0 || question_number > 500)
{
	question_number = 1;
}
if (question_number <= 200)
{
	symbol = "p";
}
else if (question_number <= 300)
{
	symbol = "q";
}
else if (question_number <= 400)
{
	symbol = "s";
}
else if (question_number <= 500)
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
imgquestion.src = "question.png? raw=true";
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
		question_number = 500;
	}
	localStorage.setItem("question_number3hard", question_number);
	window.location.reload();
}

function next_question()
{
	if (question_number < 500)
	{
		question_number = question_number + 1;
	}
	else
	{
		question_number = 1;
	}
	localStorage.setItem("question_number3hard", question_number);
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





