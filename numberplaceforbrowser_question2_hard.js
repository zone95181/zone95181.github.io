/*numberplaceforbrowser_question2_hard*/
/*20241120*/
const image_array = 
[
	[document.getElementById("table_test01_01_image"), document.getElementById("table_test01_02_image"), document.getElementById("table_test01_03_image"), document.getElementById("table_test01_04_image"), document.getElementById("table_test01_05_image"), document.getElementById("table_test01_06_image"), document.getElementById("table_test01_07_image"), document.getElementById("table_test01_08_image"), document.getElementById("table_test01_09_image"), document.getElementById("table_test01_10_image"), document.getElementById("table_test01_11_image"), document.getElementById("table_test01_12_image"), document.getElementById("table_test01_13_image"), document.getElementById("table_test01_14_image"), document.getElementById("table_test01_15_image"), document.getElementById("table_test01_16_image")],	[document.getElementById("table_test02_01_image"), document.getElementById("table_test02_02_image"), document.getElementById("table_test02_03_image"), document.getElementById("table_test02_04_image"), document.getElementById("table_test02_05_image"), document.getElementById("table_test02_06_image"), document.getElementById("table_test02_07_image"), document.getElementById("table_test02_08_image"), document.getElementById("table_test02_09_image"), document.getElementById("table_test02_10_image"), document.getElementById("table_test02_11_image"), document.getElementById("table_test02_12_image"), document.getElementById("table_test02_13_image"), document.getElementById("table_test02_14_image"), document.getElementById("table_test02_15_image"), document.getElementById("table_test02_16_image")],
	[document.getElementById("table_test03_01_image"), document.getElementById("table_test03_02_image"), document.getElementById("table_test03_03_image"), document.getElementById("table_test03_04_image"), document.getElementById("table_test03_05_image"), document.getElementById("table_test03_06_image"), document.getElementById("table_test03_07_image"), document.getElementById("table_test03_08_image"), document.getElementById("table_test03_09_image"), document.getElementById("table_test03_10_image"), document.getElementById("table_test03_11_image"), document.getElementById("table_test03_12_image"), document.getElementById("table_test03_13_image"), document.getElementById("table_test03_14_image"), document.getElementById("table_test03_15_image"), document.getElementById("table_test03_16_image")],
	[document.getElementById("table_test04_01_image"), document.getElementById("table_test04_02_image"), document.getElementById("table_test04_03_image"), document.getElementById("table_test04_04_image"), document.getElementById("table_test04_05_image"), document.getElementById("table_test04_06_image"), document.getElementById("table_test04_07_image"), document.getElementById("table_test04_08_image"), document.getElementById("table_test04_09_image"), document.getElementById("table_test04_10_image"), document.getElementById("table_test04_11_image"), document.getElementById("table_test04_12_image"), document.getElementById("table_test04_13_image"), document.getElementById("table_test04_14_image"), document.getElementById("table_test04_15_image"), document.getElementById("table_test04_16_image")],
	[document.getElementById("table_test05_01_image"), document.getElementById("table_test05_02_image"), document.getElementById("table_test05_03_image"), document.getElementById("table_test05_04_image"), document.getElementById("table_test05_05_image"), document.getElementById("table_test05_06_image"), document.getElementById("table_test05_07_image"), document.getElementById("table_test05_08_image"), document.getElementById("table_test05_09_image"), document.getElementById("table_test05_10_image"), document.getElementById("table_test05_11_image"), document.getElementById("table_test05_12_image"), document.getElementById("table_test05_13_image"), document.getElementById("table_test05_14_image"), document.getElementById("table_test05_15_image"), document.getElementById("table_test05_16_image")],
	[document.getElementById("table_test06_01_image"), document.getElementById("table_test06_02_image"), document.getElementById("table_test06_03_image"), document.getElementById("table_test06_04_image"), document.getElementById("table_test06_05_image"), document.getElementById("table_test06_06_image"), document.getElementById("table_test06_07_image"), document.getElementById("table_test06_08_image"), document.getElementById("table_test06_09_image"), document.getElementById("table_test06_10_image"), document.getElementById("table_test06_11_image"), document.getElementById("table_test06_12_image"), document.getElementById("table_test06_13_image"), document.getElementById("table_test06_14_image"), document.getElementById("table_test06_15_image"), document.getElementById("table_test06_16_image")],
	[document.getElementById("table_test07_01_image"), document.getElementById("table_test07_02_image"), document.getElementById("table_test07_03_image"), document.getElementById("table_test07_04_image"), document.getElementById("table_test07_05_image"), document.getElementById("table_test07_06_image"), document.getElementById("table_test07_07_image"), document.getElementById("table_test07_08_image"), document.getElementById("table_test07_09_image"), document.getElementById("table_test07_10_image"), document.getElementById("table_test07_11_image"), document.getElementById("table_test07_12_image"), document.getElementById("table_test07_13_image"), document.getElementById("table_test07_14_image"), document.getElementById("table_test07_15_image"), document.getElementById("table_test07_16_image")],
	[document.getElementById("table_test08_01_image"), document.getElementById("table_test08_02_image"), document.getElementById("table_test08_03_image"), document.getElementById("table_test08_04_image"), document.getElementById("table_test08_05_image"), document.getElementById("table_test08_06_image"), document.getElementById("table_test08_07_image"), document.getElementById("table_test08_08_image"), document.getElementById("table_test08_09_image"), document.getElementById("table_test08_10_image"), document.getElementById("table_test08_11_image"), document.getElementById("table_test08_12_image"), document.getElementById("table_test08_13_image"), document.getElementById("table_test08_14_image"), document.getElementById("table_test08_15_image"), document.getElementById("table_test08_16_image")],
	[document.getElementById("table_test09_01_image"), document.getElementById("table_test09_02_image"), document.getElementById("table_test09_03_image"), document.getElementById("table_test09_04_image"), document.getElementById("table_test09_05_image"), document.getElementById("table_test09_06_image"), document.getElementById("table_test09_07_image"), document.getElementById("table_test09_08_image"), document.getElementById("table_test09_09_image"), document.getElementById("table_test09_10_image"), document.getElementById("table_test09_11_image"), document.getElementById("table_test09_12_image"), document.getElementById("table_test09_13_image"), document.getElementById("table_test09_14_image"), document.getElementById("table_test09_15_image"), document.getElementById("table_test09_16_image")],
	[document.getElementById("table_test10_01_image"), document.getElementById("table_test10_02_image"), document.getElementById("table_test10_03_image"), document.getElementById("table_test10_04_image"), document.getElementById("table_test10_05_image"), document.getElementById("table_test10_06_image"), document.getElementById("table_test10_07_image"), document.getElementById("table_test10_08_image"), document.getElementById("table_test10_09_image"), document.getElementById("table_test10_10_image"), document.getElementById("table_test10_11_image"), document.getElementById("table_test10_12_image"), document.getElementById("table_test10_13_image"), document.getElementById("table_test10_14_image"), document.getElementById("table_test10_15_image"), document.getElementById("table_test10_16_image")],
	[document.getElementById("table_test11_01_image"), document.getElementById("table_test11_02_image"), document.getElementById("table_test11_03_image"), document.getElementById("table_test11_04_image"), document.getElementById("table_test11_05_image"), document.getElementById("table_test11_06_image"), document.getElementById("table_test11_07_image"), document.getElementById("table_test11_08_image"), document.getElementById("table_test11_09_image"), document.getElementById("table_test11_10_image"), document.getElementById("table_test11_11_image"), document.getElementById("table_test11_12_image"), document.getElementById("table_test11_13_image"), document.getElementById("table_test11_14_image"), document.getElementById("table_test11_15_image"), document.getElementById("table_test11_16_image")],
	[document.getElementById("table_test12_01_image"), document.getElementById("table_test12_02_image"), document.getElementById("table_test12_03_image"), document.getElementById("table_test12_04_image"), document.getElementById("table_test12_05_image"), document.getElementById("table_test12_06_image"), document.getElementById("table_test12_07_image"), document.getElementById("table_test12_08_image"), document.getElementById("table_test12_09_image"), document.getElementById("table_test12_10_image"), document.getElementById("table_test12_11_image"), document.getElementById("table_test12_12_image"), document.getElementById("table_test12_13_image"), document.getElementById("table_test12_14_image"), document.getElementById("table_test12_15_image"), document.getElementById("table_test12_16_image")],
	[document.getElementById("table_test13_01_image"), document.getElementById("table_test13_02_image"), document.getElementById("table_test13_03_image"), document.getElementById("table_test13_04_image"), document.getElementById("table_test13_05_image"), document.getElementById("table_test13_06_image"), document.getElementById("table_test13_07_image"), document.getElementById("table_test13_08_image"), document.getElementById("table_test13_09_image"), document.getElementById("table_test13_10_image"), document.getElementById("table_test13_11_image"), document.getElementById("table_test13_12_image"), document.getElementById("table_test13_13_image"), document.getElementById("table_test13_14_image"), document.getElementById("table_test13_15_image"), document.getElementById("table_test13_16_image")],
	[document.getElementById("table_test14_01_image"), document.getElementById("table_test14_02_image"), document.getElementById("table_test14_03_image"), document.getElementById("table_test14_04_image"), document.getElementById("table_test14_05_image"), document.getElementById("table_test14_06_image"), document.getElementById("table_test14_07_image"), document.getElementById("table_test14_08_image"), document.getElementById("table_test14_09_image"), document.getElementById("table_test14_10_image"), document.getElementById("table_test14_11_image"), document.getElementById("table_test14_12_image"), document.getElementById("table_test14_13_image"), document.getElementById("table_test14_14_image"), document.getElementById("table_test14_15_image"), document.getElementById("table_test14_16_image")],
	[document.getElementById("table_test15_01_image"), document.getElementById("table_test15_02_image"), document.getElementById("table_test15_03_image"), document.getElementById("table_test15_04_image"), document.getElementById("table_test15_05_image"), document.getElementById("table_test15_06_image"), document.getElementById("table_test15_07_image"), document.getElementById("table_test15_08_image"), document.getElementById("table_test15_09_image"), document.getElementById("table_test15_10_image"), document.getElementById("table_test15_11_image"), document.getElementById("table_test15_12_image"), document.getElementById("table_test15_13_image"), document.getElementById("table_test15_14_image"), document.getElementById("table_test15_15_image"), document.getElementById("table_test15_16_image")],
	[document.getElementById("table_test16_01_image"), document.getElementById("table_test16_02_image"), document.getElementById("table_test16_03_image"), document.getElementById("table_test16_04_image"), document.getElementById("table_test16_05_image"), document.getElementById("table_test16_06_image"), document.getElementById("table_test16_07_image"), document.getElementById("table_test16_08_image"), document.getElementById("table_test16_09_image"), document.getElementById("table_test16_10_image"), document.getElementById("table_test16_11_image"), document.getElementById("table_test16_12_image"), document.getElementById("table_test16_13_image"), document.getElementById("table_test16_14_image"), document.getElementById("table_test16_15_image"), document.getElementById("table_test16_16_image")]
];

const number_array = 
[	[document.getElementById("table_test01_01"), document.getElementById("table_test01_02"), document.getElementById("table_test01_03"), document.getElementById("table_test01_04"), document.getElementById("table_test01_05"), document.getElementById("table_test01_06"), document.getElementById("table_test01_07"), document.getElementById("table_test01_08"), document.getElementById("table_test01_09"), document.getElementById("table_test01_10"), document.getElementById("table_test01_11"), document.getElementById("table_test01_12"), document.getElementById("table_test01_13"), document.getElementById("table_test01_14"), document.getElementById("table_test01_15"), document.getElementById("table_test01_16")],	[document.getElementById("table_test02_01"), document.getElementById("table_test02_02"), document.getElementById("table_test02_03"), document.getElementById("table_test02_04"), document.getElementById("table_test02_05"), document.getElementById("table_test02_06"), document.getElementById("table_test02_07"), document.getElementById("table_test02_08"), document.getElementById("table_test02_09"), document.getElementById("table_test02_10"), document.getElementById("table_test02_11"), document.getElementById("table_test02_12"), document.getElementById("table_test02_13"), document.getElementById("table_test02_14"), document.getElementById("table_test02_15"), document.getElementById("table_test02_16")],
	[document.getElementById("table_test03_01"), document.getElementById("table_test03_02"), document.getElementById("table_test03_03"), document.getElementById("table_test03_04"), document.getElementById("table_test03_05"), document.getElementById("table_test03_06"), document.getElementById("table_test03_07"), document.getElementById("table_test03_08"), document.getElementById("table_test03_09"), document.getElementById("table_test03_10"), document.getElementById("table_test03_11"), document.getElementById("table_test03_12"), document.getElementById("table_test03_13"), document.getElementById("table_test03_14"), document.getElementById("table_test03_15"), document.getElementById("table_test03_16")],
	[document.getElementById("table_test04_01"), document.getElementById("table_test04_02"), document.getElementById("table_test04_03"), document.getElementById("table_test04_04"), document.getElementById("table_test04_05"), document.getElementById("table_test04_06"), document.getElementById("table_test04_07"), document.getElementById("table_test04_08"), document.getElementById("table_test04_09"), document.getElementById("table_test04_10"), document.getElementById("table_test04_11"), document.getElementById("table_test04_12"), document.getElementById("table_test04_13"), document.getElementById("table_test04_14"), document.getElementById("table_test04_15"), document.getElementById("table_test04_16")],
	[document.getElementById("table_test05_01"), document.getElementById("table_test05_02"), document.getElementById("table_test05_03"), document.getElementById("table_test05_04"), document.getElementById("table_test05_05"), document.getElementById("table_test05_06"), document.getElementById("table_test05_07"), document.getElementById("table_test05_08"), document.getElementById("table_test05_09"), document.getElementById("table_test05_10"), document.getElementById("table_test05_11"), document.getElementById("table_test05_12"), document.getElementById("table_test05_13"), document.getElementById("table_test05_14"), document.getElementById("table_test05_15"), document.getElementById("table_test05_16")],
	[document.getElementById("table_test06_01"), document.getElementById("table_test06_02"), document.getElementById("table_test06_03"), document.getElementById("table_test06_04"), document.getElementById("table_test06_05"), document.getElementById("table_test06_06"), document.getElementById("table_test06_07"), document.getElementById("table_test06_08"), document.getElementById("table_test06_09"), document.getElementById("table_test06_10"), document.getElementById("table_test06_11"), document.getElementById("table_test06_12"), document.getElementById("table_test06_13"), document.getElementById("table_test06_14"), document.getElementById("table_test06_15"), document.getElementById("table_test06_16")],
	[document.getElementById("table_test07_01"), document.getElementById("table_test07_02"), document.getElementById("table_test07_03"), document.getElementById("table_test07_04"), document.getElementById("table_test07_05"), document.getElementById("table_test07_06"), document.getElementById("table_test07_07"), document.getElementById("table_test07_08"), document.getElementById("table_test07_09"), document.getElementById("table_test07_10"), document.getElementById("table_test07_11"), document.getElementById("table_test07_12"), document.getElementById("table_test07_13"), document.getElementById("table_test07_14"), document.getElementById("table_test07_15"), document.getElementById("table_test07_16")],
	[document.getElementById("table_test08_01"), document.getElementById("table_test08_02"), document.getElementById("table_test08_03"), document.getElementById("table_test08_04"), document.getElementById("table_test08_05"), document.getElementById("table_test08_06"), document.getElementById("table_test08_07"), document.getElementById("table_test08_08"), document.getElementById("table_test08_09"), document.getElementById("table_test08_10"), document.getElementById("table_test08_11"), document.getElementById("table_test08_12"), document.getElementById("table_test08_13"), document.getElementById("table_test08_14"), document.getElementById("table_test08_15"), document.getElementById("table_test08_16")],
	[document.getElementById("table_test09_01"), document.getElementById("table_test09_02"), document.getElementById("table_test09_03"), document.getElementById("table_test09_04"), document.getElementById("table_test09_05"), document.getElementById("table_test09_06"), document.getElementById("table_test09_07"), document.getElementById("table_test09_08"), document.getElementById("table_test09_09"), document.getElementById("table_test09_10"), document.getElementById("table_test09_11"), document.getElementById("table_test09_12"), document.getElementById("table_test09_13"), document.getElementById("table_test09_14"), document.getElementById("table_test09_15"), document.getElementById("table_test09_16")],
	[document.getElementById("table_test10_01"), document.getElementById("table_test10_02"), document.getElementById("table_test10_03"), document.getElementById("table_test10_04"), document.getElementById("table_test10_05"), document.getElementById("table_test10_06"), document.getElementById("table_test10_07"), document.getElementById("table_test10_08"), document.getElementById("table_test10_09"), document.getElementById("table_test10_10"), document.getElementById("table_test10_11"), document.getElementById("table_test10_12"), document.getElementById("table_test10_13"), document.getElementById("table_test10_14"), document.getElementById("table_test10_15"), document.getElementById("table_test10_16")],
	[document.getElementById("table_test11_01"), document.getElementById("table_test11_02"), document.getElementById("table_test11_03"), document.getElementById("table_test11_04"), document.getElementById("table_test11_05"), document.getElementById("table_test11_06"), document.getElementById("table_test11_07"), document.getElementById("table_test11_08"), document.getElementById("table_test11_09"), document.getElementById("table_test11_10"), document.getElementById("table_test11_11"), document.getElementById("table_test11_12"), document.getElementById("table_test11_13"), document.getElementById("table_test11_14"), document.getElementById("table_test11_15"), document.getElementById("table_test11_16")],
	[document.getElementById("table_test12_01"), document.getElementById("table_test12_02"), document.getElementById("table_test12_03"), document.getElementById("table_test12_04"), document.getElementById("table_test12_05"), document.getElementById("table_test12_06"), document.getElementById("table_test12_07"), document.getElementById("table_test12_08"), document.getElementById("table_test12_09"), document.getElementById("table_test12_10"), document.getElementById("table_test12_11"), document.getElementById("table_test12_12"), document.getElementById("table_test12_13"), document.getElementById("table_test12_14"), document.getElementById("table_test12_15"), document.getElementById("table_test12_16")],
	[document.getElementById("table_test13_01"), document.getElementById("table_test13_02"), document.getElementById("table_test13_03"), document.getElementById("table_test13_04"), document.getElementById("table_test13_05"), document.getElementById("table_test13_06"), document.getElementById("table_test13_07"), document.getElementById("table_test13_08"), document.getElementById("table_test13_09"), document.getElementById("table_test13_10"), document.getElementById("table_test13_11"), document.getElementById("table_test13_12"), document.getElementById("table_test13_13"), document.getElementById("table_test13_14"), document.getElementById("table_test13_15"), document.getElementById("table_test13_16")],
	[document.getElementById("table_test14_01"), document.getElementById("table_test14_02"), document.getElementById("table_test14_03"), document.getElementById("table_test14_04"), document.getElementById("table_test14_05"), document.getElementById("table_test14_06"), document.getElementById("table_test14_07"), document.getElementById("table_test14_08"), document.getElementById("table_test14_09"), document.getElementById("table_test14_10"), document.getElementById("table_test14_11"), document.getElementById("table_test14_12"), document.getElementById("table_test14_13"), document.getElementById("table_test14_14"), document.getElementById("table_test14_15"), document.getElementById("table_test14_16")],
	[document.getElementById("table_test15_01"), document.getElementById("table_test15_02"), document.getElementById("table_test15_03"), document.getElementById("table_test15_04"), document.getElementById("table_test15_05"), document.getElementById("table_test15_06"), document.getElementById("table_test15_07"), document.getElementById("table_test15_08"), document.getElementById("table_test15_09"), document.getElementById("table_test15_10"), document.getElementById("table_test15_11"), document.getElementById("table_test15_12"), document.getElementById("table_test15_13"), document.getElementById("table_test15_14"), document.getElementById("table_test15_15"), document.getElementById("table_test15_16")],
	[document.getElementById("table_test16_01"), document.getElementById("table_test16_02"), document.getElementById("table_test16_03"), document.getElementById("table_test16_04"), document.getElementById("table_test16_05"), document.getElementById("table_test16_06"), document.getElementById("table_test16_07"), document.getElementById("table_test16_08"), document.getElementById("table_test16_09"), document.getElementById("table_test16_10"), document.getElementById("table_test16_11"), document.getElementById("table_test16_12"), document.getElementById("table_test16_13"), document.getElementById("table_test16_14"), document.getElementById("table_test16_15"), document.getElementById("table_test16_16")]
];

const question_data = 
[
"L/A/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/G/F/N/abcdefghijklmnop/E/B/P/K/C/abcdefghijklmnop/abcdefghijklmnop/I/P/abcdefghijklmnop/M/E/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/F/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/G/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/B/abcdefghijklmnop/A/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/D/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/G/N/abcdefghijklmnop/E/H/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/G/C/abcdefghijklmnop/L/abcdefghijklmnop/E/J/O/abcdefghijklmnop/D/abcdefghijklmnop/M/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/P/A/L/abcdefghijklmnop/B/abcdefghijklmnop/O/abcdefghijklmnop/J/O/abcdefghijklmnop/P/M/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/A/P/I/N/abcdefghijklmnop/abcdefghijklmnop/G/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/D/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/O/G/abcdefghijklmnop/C/I/abcdefghijklmnop/abcdefghijklmnop/F/E/O/M/abcdefghijklmnop/J/C/K/abcdefghijklmnop/P/abcdefghijklmnop/D/H/abcdefghijklmnop/abcdefghijklmnop/O/J/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/H/abcdefghijklmnop/abcdefghijklmnop/F/B/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/M/I/A/abcdefghijklmnop/N/abcdefghijklmnop/H/abcdefghijklmnop/C/abcdefghijklmnop/D/abcdefghijklmnop/I/abcdefghijklmnop/A/P/abcdefghijklmnop/E/abcdefghijklmnop/M/abcdefghijklmnop/D/abcdefghijklmnop/L/H/abcdefghijklmnop/B/-1",
"D/abcdefghijklmnop/B/M/J/abcdefghijklmnop/F/C/N/H/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/P/K/F/abcdefghijklmnop/abcdefghijklmnop/D/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/E/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/N/B/J/P/A/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/K/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/F/abcdefghijklmnop/N/H/abcdefghijklmnop/abcdefghijklmnop/J/B/abcdefghijklmnop/D/abcdefghijklmnop/C/L/abcdefghijklmnop/abcdefghijklmnop/H/B/K/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/E/M/abcdefghijklmnop/C/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/A/abcdefghijklmnop/H/D/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/K/abcdefghijklmnop/L/E/P/A/abcdefghijklmnop/M/G/B/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/N/L/abcdefghijklmnop/F/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/A/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/J/I/O/B/abcdefghijklmnop/H/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/J/J/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/P/E/abcdefghijklmnop/G/G/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/A/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/I/E/D/H/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/C/N/abcdefghijklmnop/abcdefghijklmnop/K/H/-1",
"E/J/abcdefghijklmnop/K/I/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/L/B/A/D/abcdefghijklmnop/B/D/abcdefghijklmnop/P/abcdefghijklmnop/C/abcdefghijklmnop/O/abcdefghijklmnop/G/abcdefghijklmnop/N/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/H/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/M/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/O/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/P/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/F/abcdefghijklmnop/M/abcdefghijklmnop/D/H/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/C/abcdefghijklmnop/abcdefghijklmnop/F/O/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/J/abcdefghijklmnop/H/A/A/N/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/K/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/K/M/H/abcdefghijklmnop/N/L/A/P/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/E/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/O/I/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/I/J/abcdefghijklmnop/F/L/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/F/abcdefghijklmnop/P/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/G/I/abcdefghijklmnop/J/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/G/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/D/abcdefghijklmnop/abcdefghijklmnop/I/E/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/F/J/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/N/P/abcdefghijklmnop/N/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/K/D/abcdefghijklmnop/A/abcdefghijklmnop/-1",
"I/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/C/J/abcdefghijklmnop/abcdefghijklmnop/L/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/O/I/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/K/E/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/N/G/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/I/O/abcdefghijklmnop/abcdefghijklmnop/C/B/abcdefghijklmnop/E/L/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/G/M/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/G/O/abcdefghijklmnop/L/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/G/abcdefghijklmnop/P/K/B/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/M/abcdefghijklmnop/B/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/C/D/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/E/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/P/A/N/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/F/C/G/A/abcdefghijklmnop/abcdefghijklmnop/J/H/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/A/P/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/B/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/G/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/N/I/E/J/B/K/L/I/abcdefghijklmnop/abcdefghijklmnop/E/H/M/abcdefghijklmnop/abcdefghijklmnop/C/F/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/N/P/J/abcdefghijklmnop/I/K/O/M/E/D/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/-1",
"abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/I/abcdefghijklmnop/L/K/N/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/D/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/L/P/C/abcdefghijklmnop/O/F/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/H/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/K/I/abcdefghijklmnop/abcdefghijklmnop/N/C/L/K/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/I/H/G/abcdefghijklmnop/M/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/L/K/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/P/abcdefghijklmnop/D/abcdefghijklmnop/J/G/I/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/M/A/abcdefghijklmnop/J/abcdefghijklmnop/K/E/B/abcdefghijklmnop/N/abcdefghijklmnop/E/G/L/N/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/F/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/O/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/B/N/abcdefghijklmnop/G/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/G/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/H/K/abcdefghijklmnop/abcdefghijklmnop/B/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/D/abcdefghijklmnop/O/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/A/abcdefghijklmnop/abcdefghijklmnop/P/D/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/J/G/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/G/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/K/D/A/L/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/-1",
"abcdefghijklmnop/N/L/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/D/O/P/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/B/C/H/I/P/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/N/P/abcdefghijklmnop/F/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/M/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/L/abcdefghijklmnop/J/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/N/M/abcdefghijklmnop/abcdefghijklmnop/F/P/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/J/L/B/I/G/E/H/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/O/G/B/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/E/abcdefghijklmnop/J/abcdefghijklmnop/G/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/I/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/H/J/abcdefghijklmnop/M/O/D/abcdefghijklmnop/C/abcdefghijklmnop/C/abcdefghijklmnop/D/H/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/B/abcdefghijklmnop/abcdefghijklmnop/N/F/I/abcdefghijklmnop/abcdefghijklmnop/P/O/C/D/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/G/H/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/A/C/J/abcdefghijklmnop/N/abcdefghijklmnop/L/N/A/abcdefghijklmnop/abcdefghijklmnop/D/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/O/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/B/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/L/N/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/A/abcdefghijklmnop/E/-1",
"abcdefghijklmnop/abcdefghijklmnop/H/K/abcdefghijklmnop/D/O/E/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/J/abcdefghijklmnop/G/C/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/D/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/N/abcdefghijklmnop/E/J/abcdefghijklmnop/I/abcdefghijklmnop/D/abcdefghijklmnop/O/O/abcdefghijklmnop/L/D/A/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/J/C/abcdefghijklmnop/F/F/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/J/abcdefghijklmnop/G/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/J/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/N/abcdefghijklmnop/D/abcdefghijklmnop/K/D/abcdefghijklmnop/A/G/O/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/E/D/N/E/B/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/O/N/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/P/J/C/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/K/E/O/L/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/P/M/E/abcdefghijklmnop/C/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/N/J/K/E/H/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/N/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/D/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/P/G/M/L/abcdefghijklmnop/N/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/M/B/A/abcdefghijklmnop/D/K/abcdefghijklmnop/O/abcdefghijklmnop/I/abcdefghijklmnop/C/F/abcdefghijklmnop/G/N/-1",
"G/abcdefghijklmnop/D/abcdefghijklmnop/C/K/abcdefghijklmnop/abcdefghijklmnop/M/B/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/K/N/G/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/F/C/abcdefghijklmnop/M/F/abcdefghijklmnop/P/abcdefghijklmnop/D/abcdefghijklmnop/A/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/J/B/H/D/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/I/C/K/I/D/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/O/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/P/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/A/P/abcdefghijklmnop/E/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/C/abcdefghijklmnop/abcdefghijklmnop/B/K/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/E/H/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/G/O/N/abcdefghijklmnop/abcdefghijklmnop/M/A/J/D/abcdefghijklmnop/B/abcdefghijklmnop/E/F/H/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/I/K/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/I/A/abcdefghijklmnop/M/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/C/B/H/abcdefghijklmnop/F/O/abcdefghijklmnop/F/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/F/G/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/H/K/abcdefghijklmnop/D/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/J/E/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/L/abcdefghijklmnop/K/D/O/G/abcdefghijklmnop/abcdefghijklmnop/J/-1",
"abcdefghijklmnop/N/abcdefghijklmnop/M/G/H/abcdefghijklmnop/J/abcdefghijklmnop/C/abcdefghijklmnop/K/abcdefghijklmnop/B/abcdefghijklmnop/P/D/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/E/N/abcdefghijklmnop/G/H/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/M/H/C/abcdefghijklmnop/J/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/I/P/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/I/J/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/L/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/O/abcdefghijklmnop/L/abcdefghijklmnop/G/F/P/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/L/abcdefghijklmnop/abcdefghijklmnop/G/N/J/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/P/I/abcdefghijklmnop/N/abcdefghijklmnop/K/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/D/abcdefghijklmnop/C/abcdefghijklmnop/D/E/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/N/abcdefghijklmnop/L/F/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/B/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/G/M/K/abcdefghijklmnop/P/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/K/H/abcdefghijklmnop/abcdefghijklmnop/L/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/I/abcdefghijklmnop/L/H/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/K/abcdefghijklmnop/I/C/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/M/H/L/abcdefghijklmnop/abcdefghijklmnop/C/P/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/M/C/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/O/J/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/A/I/N/E/abcdefghijklmnop/L/B/abcdefghijklmnop/abcdefghijklmnop/G/H/abcdefghijklmnop/O/K/abcdefghijklmnop/abcdefghijklmnop/-1",
"I/D/F/abcdefghijklmnop/K/J/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/L/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/K/H/N/abcdefghijklmnop/E/N/abcdefghijklmnop/abcdefghijklmnop/B/H/abcdefghijklmnop/D/G/abcdefghijklmnop/F/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/H/abcdefghijklmnop/P/abcdefghijklmnop/N/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/M/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/A/P/abcdefghijklmnop/G/K/abcdefghijklmnop/E/N/D/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/A/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/M/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/L/O/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/C/P/abcdefghijklmnop/abcdefghijklmnop/I/J/A/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/N/abcdefghijklmnop/M/P/abcdefghijklmnop/K/abcdefghijklmnop/G/C/J/I/F/abcdefghijklmnop/N/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/A/abcdefghijklmnop/O/abcdefghijklmnop/A/C/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/N/E/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/N/P/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/B/abcdefghijklmnop/E/abcdefghijklmnop/J/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/C/abcdefghijklmnop/K/abcdefghijklmnop/J/M/abcdefghijklmnop/H/O/abcdefghijklmnop/C/A/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/P/B/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/E/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/L/F/H/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/-1",
"abcdefghijklmnop/K/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/D/L/B/abcdefghijklmnop/M/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/P/H/A/L/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/P/J/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/K/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/K/abcdefghijklmnop/abcdefghijklmnop/P/N/E/L/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/P/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/M/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/J/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/L/P/abcdefghijklmnop/abcdefghijklmnop/C/G/abcdefghijklmnop/M/H/E/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/P/I/C/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/J/abcdefghijklmnop/J/F/abcdefghijklmnop/abcdefghijklmnop/D/L/O/abcdefghijklmnop/A/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/A/B/I/abcdefghijklmnop/J/K/L/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/K/F/abcdefghijklmnop/abcdefghijklmnop/L/M/abcdefghijklmnop/abcdefghijklmnop/O/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/N/F/B/D/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/I/A/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/G/N/abcdefghijklmnop/M/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/A/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/E/P/C/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/L/C/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/N/abcdefghijklmnop/A/P/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/D/A/abcdefghijklmnop/abcdefghijklmnop/M/E/B/H/N/C/abcdefghijklmnop/abcdefghijklmnop/-1",
"F/abcdefghijklmnop/L/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/M/I/C/abcdefghijklmnop/abcdefghijklmnop/K/C/M/abcdefghijklmnop/abcdefghijklmnop/N/O/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/D/J/abcdefghijklmnop/G/F/B/O/abcdefghijklmnop/J/abcdefghijklmnop/G/P/F/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/D/N/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/O/G/A/abcdefghijklmnop/L/abcdefghijklmnop/H/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/A/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/C/I/abcdefghijklmnop/N/P/F/B/J/abcdefghijklmnop/abcdefghijklmnop/E/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/J/O/abcdefghijklmnop/N/K/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/M/E/P/abcdefghijklmnop/D/abcdefghijklmnop/I/K/abcdefghijklmnop/A/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/M/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/C/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/P/abcdefghijklmnop/B/E/abcdefghijklmnop/D/abcdefghijklmnop/N/P/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/G/B/abcdefghijklmnop/H/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/P/J/H/L/abcdefghijklmnop/B/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/O/C/abcdefghijklmnop/F/E/abcdefghijklmnop/I/abcdefghijklmnop/N/G/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/E/H/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/B/F/abcdefghijklmnop/P/F/N/K/J/A/abcdefghijklmnop/H/abcdefghijklmnop/O/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/-1",
"abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/I/E/L/C/G/abcdefghijklmnop/F/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/C/B/I/K/abcdefghijklmnop/D/H/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/H/A/J/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/C/F/C/B/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/M/J/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/O/E/C/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/I/K/F/G/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/M/I/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/K/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/J/C/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/L/A/N/C/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/H/J/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/A/H/P/F/abcdefghijklmnop/abcdefghijklmnop/O/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/N/abcdefghijklmnop/A/M/abcdefghijklmnop/D/abcdefghijklmnop/C/abcdefghijklmnop/L/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/L/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/P/L/A/D/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/M/G/abcdefghijklmnop/abcdefghijklmnop/H/N/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/O/I/abcdefghijklmnop/J/K/L/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/M/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/K/abcdefghijklmnop/D/abcdefghijklmnop/C/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/-1",
"M/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/G/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/H/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/N/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/H/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/F/A/abcdefghijklmnop/abcdefghijklmnop/B/C/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/K/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/O/abcdefghijklmnop/N/K/E/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/P/abcdefghijklmnop/L/M/abcdefghijklmnop/F/D/H/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/M/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/M/C/abcdefghijklmnop/abcdefghijklmnop/B/F/abcdefghijklmnop/E/abcdefghijklmnop/N/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/K/B/E/G/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/M/L/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/A/P/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/G/H/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/E/J/L/abcdefghijklmnop/M/I/F/C/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/E/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/J/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/F/L/abcdefghijklmnop/E/O/C/D/H/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/A/J/abcdefghijklmnop/abcdefghijklmnop/M/H/P/N/L/abcdefghijklmnop/abcdefghijklmnop/A/D/E/abcdefghijklmnop/O/K/-1",
"abcdefghijklmnop/A/K/abcdefghijklmnop/D/E/H/abcdefghijklmnop/N/L/I/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/P/O/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/F/abcdefghijklmnop/M/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/B/H/abcdefghijklmnop/P/O/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/A/E/G/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/O/abcdefghijklmnop/J/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/F/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/M/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/L/abcdefghijklmnop/C/P/N/abcdefghijklmnop/K/O/abcdefghijklmnop/I/J/abcdefghijklmnop/H/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/I/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/J/A/abcdefghijklmnop/E/D/H/C/abcdefghijklmnop/F/E/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/B/C/I/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/J/I/H/M/P/F/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/P/J/abcdefghijklmnop/abcdefghijklmnop/G/B/E/H/abcdefghijklmnop/abcdefghijklmnop/I/M/F/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/K/E/G/O/abcdefghijklmnop/E/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/F/J/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/I/abcdefghijklmnop/H/abcdefghijklmnop/N/O/M/abcdefghijklmnop/P/K/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/H/M/B/N/abcdefghijklmnop/M/abcdefghijklmnop/O/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/H/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/-1",
"abcdefghijklmnop/C/abcdefghijklmnop/H/A/abcdefghijklmnop/abcdefghijklmnop/J/G/abcdefghijklmnop/abcdefghijklmnop/D/E/L/K/abcdefghijklmnop/abcdefghijklmnop/I/J/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/L/abcdefghijklmnop/G/H/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/N/abcdefghijklmnop/L/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/P/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/I/abcdefghijklmnop/N/F/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/O/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/C/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/N/G/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/P/F/J/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/M/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/D/abcdefghijklmnop/B/C/J/A/C/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/I/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/P/F/I/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/K/G/D/M/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/A/B/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/F/H/abcdefghijklmnop/D/A/F/abcdefghijklmnop/E/I/M/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/H/N/O/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/M/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/H/abcdefghijklmnop/abcdefghijklmnop/A/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/N/abcdefghijklmnop/A/P/K/M/abcdefghijklmnop/E/H/B/abcdefghijklmnop/abcdefghijklmnop/-1",
"I/abcdefghijklmnop/A/D/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/H/G/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/I/H/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/C/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/K/M/B/J/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/A/abcdefghijklmnop/abcdefghijklmnop/K/I/H/abcdefghijklmnop/L/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/A/E/C/abcdefghijklmnop/G/abcdefghijklmnop/P/L/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/N/abcdefghijklmnop/A/H/E/abcdefghijklmnop/I/C/A/K/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/N/O/F/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/K/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/L/abcdefghijklmnop/abcdefghijklmnop/P/A/abcdefghijklmnop/C/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/B/abcdefghijklmnop/K/E/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/L/I/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/I/N/abcdefghijklmnop/L/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/A/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/K/E/abcdefghijklmnop/N/abcdefghijklmnop/O/abcdefghijklmnop/G/abcdefghijklmnop/O/D/abcdefghijklmnop/M/abcdefghijklmnop/A/I/P/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/J/K/B/abcdefghijklmnop/F/G/abcdefghijklmnop/D/P/abcdefghijklmnop/abcdefghijklmnop/A/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/H/I/N/L/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/A/abcdefghijklmnop/D/B/-1",
"E/M/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/D/A/H/C/abcdefghijklmnop/O/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/O/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/H/K/N/F/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/C/L/K/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/F/N/abcdefghijklmnop/E/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/P/D/abcdefghijklmnop/F/abcdefghijklmnop/B/abcdefghijklmnop/K/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/N/C/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/H/M/J/abcdefghijklmnop/abcdefghijklmnop/F/D/P/K/abcdefghijklmnop/abcdefghijklmnop/K/J/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/M/abcdefghijklmnop/A/H/abcdefghijklmnop/F/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/O/F/abcdefghijklmnop/K/B/abcdefghijklmnop/N/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/K/I/F/abcdefghijklmnop/abcdefghijklmnop/C/B/H/abcdefghijklmnop/G/abcdefghijklmnop/G/abcdefghijklmnop/J/B/M/D/C/abcdefghijklmnop/abcdefghijklmnop/H/O/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/G/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/P/abcdefghijklmnop/M/I/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/H/A/abcdefghijklmnop/abcdefghijklmnop/C/E/O/H/B/A/I/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/N/abcdefghijklmnop/I/O/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/F/N/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/-1",
"abcdefghijklmnop/M/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/H/D/abcdefghijklmnop/K/E/G/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/L/P/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/H/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/D/O/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/N/H/L/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/A/abcdefghijklmnop/F/abcdefghijklmnop/M/abcdefghijklmnop/L/E/B/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/I/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/E/O/abcdefghijklmnop/A/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/I/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/A/O/abcdefghijklmnop/P/E/abcdefghijklmnop/G/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/J/K/abcdefghijklmnop/D/abcdefghijklmnop/H/abcdefghijklmnop/K/abcdefghijklmnop/J/abcdefghijklmnop/M/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/A/I/abcdefghijklmnop/abcdefghijklmnop/J/G/A/abcdefghijklmnop/D/abcdefghijklmnop/H/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/I/H/abcdefghijklmnop/D/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/G/L/C/abcdefghijklmnop/E/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/N/A/F/I/abcdefghijklmnop/K/abcdefghijklmnop/O/abcdefghijklmnop/L/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/N/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/M/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/E/abcdefghijklmnop/D/O/abcdefghijklmnop/-1",
"B/abcdefghijklmnop/N/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/I/G/E/P/L/abcdefghijklmnop/H/C/M/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/E/J/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/B/L/M/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/I/abcdefghijklmnop/B/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/A/N/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/C/E/P/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/A/F/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/P/B/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/L/E/O/H/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/A/G/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/J/B/K/abcdefghijklmnop/abcdefghijklmnop/I/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/L/N/abcdefghijklmnop/D/A/abcdefghijklmnop/N/abcdefghijklmnop/J/M/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/H/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/F/K/O/abcdefghijklmnop/abcdefghijklmnop/C/B/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/F/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/K/abcdefghijklmnop/D/abcdefghijklmnop/O/C/abcdefghijklmnop/K/E/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/F/P/J/D/K/abcdefghijklmnop/E/abcdefghijklmnop/C/abcdefghijklmnop/C/D/H/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/E/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/G/J/abcdefghijklmnop/abcdefghijklmnop/N/O/K/H/A/abcdefghijklmnop/-1",
"C/abcdefghijklmnop/D/A/abcdefghijklmnop/abcdefghijklmnop/B/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/N/H/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/C/abcdefghijklmnop/E/abcdefghijklmnop/I/G/D/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/P/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/H/abcdefghijklmnop/M/I/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/F/C/E/abcdefghijklmnop/N/D/B/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/K/A/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/F/M/P/abcdefghijklmnop/B/H/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/E/C/abcdefghijklmnop/N/abcdefghijklmnop/K/I/abcdefghijklmnop/abcdefghijklmnop/K/O/abcdefghijklmnop/N/abcdefghijklmnop/E/G/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/O/C/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/B/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/A/O/F/M/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/M/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/M/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/B/A/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/J/D/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/N/I/H/abcdefghijklmnop/B/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/D/L/abcdefghijklmnop/K/abcdefghijklmnop/O/A/K/abcdefghijklmnop/C/abcdefghijklmnop/A/L/D/I/N/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/E/abcdefghijklmnop/-1",
"C/abcdefghijklmnop/B/G/abcdefghijklmnop/E/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/J/abcdefghijklmnop/K/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/H/L/abcdefghijklmnop/G/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/D/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/N/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/O/abcdefghijklmnop/D/L/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/B/L/G/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/P/abcdefghijklmnop/C/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/L/G/B/abcdefghijklmnop/E/N/H/abcdefghijklmnop/I/L/F/P/D/abcdefghijklmnop/C/J/M/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/J/L/abcdefghijklmnop/K/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/O/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/E/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/H/P/abcdefghijklmnop/abcdefghijklmnop/A/B/abcdefghijklmnop/C/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/E/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/O/G/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/H/abcdefghijklmnop/abcdefghijklmnop/P/J/abcdefghijklmnop/E/abcdefghijklmnop/I/abcdefghijklmnop/C/L/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/A/K/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/J/F/abcdefghijklmnop/D/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/H/M/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/P/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/-1",
"D/L/B/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/C/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/P/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/B/L/K/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/N/G/abcdefghijklmnop/H/G/E/abcdefghijklmnop/H/abcdefghijklmnop/I/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/K/N/abcdefghijklmnop/H/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/O/abcdefghijklmnop/L/abcdefghijklmnop/D/L/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/G/E/abcdefghijklmnop/abcdefghijklmnop/O/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/A/abcdefghijklmnop/F/I/P/abcdefghijklmnop/F/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/M/J/abcdefghijklmnop/G/D/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/E/M/L/P/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/G/C/K/H/P/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/M/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/O/B/G/abcdefghijklmnop/C/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/E/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/E/abcdefghijklmnop/J/I/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/G/N/abcdefghijklmnop/J/G/O/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/P/I/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/B/D/abcdefghijklmnop/abcdefghijklmnop/A/J/abcdefghijklmnop/H/abcdefghijklmnop/O/abcdefghijklmnop/H/D/abcdefghijklmnop/abcdefghijklmnop/L/O/abcdefghijklmnop/abcdefghijklmnop/E/M/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/I/A/-1",
"abcdefghijklmnop/H/A/B/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/O/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/C/I/N/abcdefghijklmnop/B/M/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/N/abcdefghijklmnop/C/A/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/K/P/M/C/abcdefghijklmnop/D/B/abcdefghijklmnop/abcdefghijklmnop/I/E/abcdefghijklmnop/C/O/I/G/abcdefghijklmnop/M/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/N/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/O/K/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/M/abcdefghijklmnop/F/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/E/C/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/I/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/C/O/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/N/abcdefghijklmnop/P/M/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/K/abcdefghijklmnop/L/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/E/B/N/abcdefghijklmnop/J/O/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/O/I/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/H/E/J/abcdefghijklmnop/abcdefghijklmnop/K/M/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/H/G/abcdefghijklmnop/F/abcdefghijklmnop/A/M/abcdefghijklmnop/I/B/abcdefghijklmnop/D/F/E/J/abcdefghijklmnop/abcdefghijklmnop/K/C/abcdefghijklmnop/abcdefghijklmnop/L/P/O/abcdefghijklmnop/abcdefghijklmnop/J/A/G/abcdefghijklmnop/M/abcdefghijklmnop/C/abcdefghijklmnop/N/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/O/abcdefghijklmnop/abcdefghijklmnop/-1",
"abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/K/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/E/abcdefghijklmnop/O/F/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/H/abcdefghijklmnop/P/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/G/E/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/G/L/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/A/B/F/I/abcdefghijklmnop/H/J/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/H/O/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/C/abcdefghijklmnop/L/J/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/E/abcdefghijklmnop/A/G/D/abcdefghijklmnop/abcdefghijklmnop/F/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/L/O/abcdefghijklmnop/abcdefghijklmnop/M/N/E/abcdefghijklmnop/K/B/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/J/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/P/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/C/N/M/L/O/abcdefghijklmnop/abcdefghijklmnop/J/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/K/D/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/A/abcdefghijklmnop/O/I/abcdefghijklmnop/F/abcdefghijklmnop/H/N/I/A/abcdefghijklmnop/abcdefghijklmnop/H/B/abcdefghijklmnop/N/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/C/G/abcdefghijklmnop/abcdefghijklmnop/O/E/abcdefghijklmnop/F/M/B/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/H/J/I/abcdefghijklmnop/D/E/-1",
"K/abcdefghijklmnop/A/abcdefghijklmnop/L/B/G/F/I/E/N/abcdefghijklmnop/M/C/H/abcdefghijklmnop/G/B/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/K/M/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/K/abcdefghijklmnop/abcdefghijklmnop/N/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/N/abcdefghijklmnop/C/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/F/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/H/M/abcdefghijklmnop/abcdefghijklmnop/H/C/D/abcdefghijklmnop/abcdefghijklmnop/L/E/P/O/F/B/abcdefghijklmnop/A/I/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/B/P/abcdefghijklmnop/N/abcdefghijklmnop/E/abcdefghijklmnop/I/A/abcdefghijklmnop/B/M/H/J/K/abcdefghijklmnop/F/abcdefghijklmnop/C/C/E/abcdefghijklmnop/abcdefghijklmnop/A/I/F/N/L/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/K/L/N/J/abcdefghijklmnop/B/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/H/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/M/J/abcdefghijklmnop/K/N/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/I/abcdefghijklmnop/K/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/M/F/O/H/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/M/abcdefghijklmnop/N/E/abcdefghijklmnop/abcdefghijklmnop/L/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/A/abcdefghijklmnop/G/L/H/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/K/O/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/C/H/-1",
"I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/O/H/abcdefghijklmnop/C/J/G/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/P/M/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/H/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/E/abcdefghijklmnop/N/P/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/E/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/B/O/J/abcdefghijklmnop/O/C/abcdefghijklmnop/M/B/E/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/K/E/abcdefghijklmnop/J/B/H/abcdefghijklmnop/O/abcdefghijklmnop/M/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/G/N/K/C/D/B/J/abcdefghijklmnop/L/H/I/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/D/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/F/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/C/abcdefghijklmnop/B/J/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/L/abcdefghijklmnop/H/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/O/H/abcdefghijklmnop/K/G/abcdefghijklmnop/M/abcdefghijklmnop/B/E/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/I/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/O/F/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/D/abcdefghijklmnop/H/C/M/B/abcdefghijklmnop/O/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/A/abcdefghijklmnop/C/E/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/A/K/abcdefghijklmnop/J/abcdefghijklmnop/N/F/L/-1",
"abcdefghijklmnop/I/abcdefghijklmnop/A/K/D/F/abcdefghijklmnop/L/J/M/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/J/E/G/abcdefghijklmnop/abcdefghijklmnop/M/P/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/L/abcdefghijklmnop/abcdefghijklmnop/C/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/N/abcdefghijklmnop/B/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/O/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/L/abcdefghijklmnop/B/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/N/L/abcdefghijklmnop/D/N/P/H/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/B/abcdefghijklmnop/G/abcdefghijklmnop/C/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/A/E/A/P/E/J/N/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/D/abcdefghijklmnop/M/abcdefghijklmnop/I/abcdefghijklmnop/P/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/O/B/F/abcdefghijklmnop/N/C/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/A/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/M/N/abcdefghijklmnop/A/abcdefghijklmnop/I/K/B/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/J/O/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/O/abcdefghijklmnop/F/abcdefghijklmnop/N/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/M/G/E/abcdefghijklmnop/abcdefghijklmnop/M/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/K/L/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/E/G/P/abcdefghijklmnop/H/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/I/abcdefghijklmnop/G/J/abcdefghijklmnop/A/L/D/-1",
"abcdefghijklmnop/abcdefghijklmnop/E/H/I/A/K/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/L/B/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/A/D/abcdefghijklmnop/F/P/abcdefghijklmnop/J/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/I/B/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/G/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/O/M/abcdefghijklmnop/abcdefghijklmnop/F/C/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/O/I/abcdefghijklmnop/G/L/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/I/abcdefghijklmnop/N/abcdefghijklmnop/J/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/J/abcdefghijklmnop/N/abcdefghijklmnop/F/abcdefghijklmnop/A/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/N/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/J/B/P/abcdefghijklmnop/C/O/abcdefghijklmnop/abcdefghijklmnop/F/K/abcdefghijklmnop/E/abcdefghijklmnop/I/abcdefghijklmnop/L/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/E/L/B/C/P/abcdefghijklmnop/abcdefghijklmnop/J/H/abcdefghijklmnop/E/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/D/I/G/K/abcdefghijklmnop/I/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/D/H/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/P/B/G/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/L/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/N/abcdefghijklmnop/O/H/M/abcdefghijklmnop/E/-1",
"L/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/B/abcdefghijklmnop/abcdefghijklmnop/A/P/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/E/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/A/J/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/L/abcdefghijklmnop/I/P/O/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/B/P/C/abcdefghijklmnop/K/M/abcdefghijklmnop/abcdefghijklmnop/N/F/abcdefghijklmnop/F/B/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/C/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/L/abcdefghijklmnop/H/C/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/D/B/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/F/G/abcdefghijklmnop/D/abcdefghijklmnop/C/abcdefghijklmnop/A/J/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/B/G/abcdefghijklmnop/J/O/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/A/J/I/abcdefghijklmnop/abcdefghijklmnop/B/K/H/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/O/P/K/L/C/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/C/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/F/H/J/abcdefghijklmnop/G/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/D/E/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/H/C/abcdefghijklmnop/K/L/P/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/E/-1",
"L/K/M/abcdefghijklmnop/abcdefghijklmnop/A/H/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/N/B/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/I/H/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/O/M/P/abcdefghijklmnop/C/B/abcdefghijklmnop/I/J/B/I/abcdefghijklmnop/M/abcdefghijklmnop/O/D/abcdefghijklmnop/L/F/E/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/I/abcdefghijklmnop/D/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/O/abcdefghijklmnop/E/abcdefghijklmnop/N/H/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/G/B/F/abcdefghijklmnop/H/M/A/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/M/J/D/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/C/abcdefghijklmnop/I/F/A/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/H/abcdefghijklmnop/D/J/P/O/abcdefghijklmnop/L/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/K/abcdefghijklmnop/F/abcdefghijklmnop/G/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/K/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/E/A/F/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/I/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/D/M/M/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/N/abcdefghijklmnop/O/abcdefghijklmnop/A/abcdefghijklmnop/D/abcdefghijklmnop/K/C/F/-1",
"A/abcdefghijklmnop/abcdefghijklmnop/F/B/abcdefghijklmnop/abcdefghijklmnop/N/O/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/E/C/G/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/N/F/E/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/D/L/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/N/K/P/I/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/J/L/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/I/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/B/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/G/H/abcdefghijklmnop/D/K/abcdefghijklmnop/abcdefghijklmnop/C/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/P/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/N/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/I/P/E/abcdefghijklmnop/H/abcdefghijklmnop/H/A/abcdefghijklmnop/L/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/J/abcdefghijklmnop/H/G/abcdefghijklmnop/N/abcdefghijklmnop/M/I/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/J/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/B/E/K/abcdefghijklmnop/C/abcdefghijklmnop/B/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/A/abcdefghijklmnop/O/M/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/I/M/G/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/C/K/J/abcdefghijklmnop/D/abcdefghijklmnop/-1",
"M/abcdefghijklmnop/abcdefghijklmnop/C/I/G/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/H/K/F/D/P/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/D/abcdefghijklmnop/J/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/K/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/M/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/J/K/F/D/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/C/I/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/N/E/abcdefghijklmnop/D/A/abcdefghijklmnop/abcdefghijklmnop/I/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/L/C/A/B/J/abcdefghijklmnop/H/abcdefghijklmnop/D/H/L/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/A/abcdefghijklmnop/M/G/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/E/abcdefghijklmnop/L/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/F/abcdefghijklmnop/I/C/A/abcdefghijklmnop/N/K/abcdefghijklmnop/D/C/abcdefghijklmnop/G/A/abcdefghijklmnop/abcdefghijklmnop/E/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/L/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/O/K/abcdefghijklmnop/abcdefghijklmnop/P/B/L/B/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/I/H/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/O/K/M/abcdefghijklmnop/J/I/abcdefghijklmnop/C/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/L/E/abcdefghijklmnop/P/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/K/B/C/abcdefghijklmnop/I/G/I/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/H/P/abcdefghijklmnop/K/-1",
"abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/N/E/abcdefghijklmnop/abcdefghijklmnop/H/B/abcdefghijklmnop/J/abcdefghijklmnop/P/D/I/abcdefghijklmnop/N/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/L/abcdefghijklmnop/C/A/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/M/B/abcdefghijklmnop/P/abcdefghijklmnop/D/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/L/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/K/M/abcdefghijklmnop/F/abcdefghijklmnop/C/P/abcdefghijklmnop/I/A/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/J/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/P/G/O/B/I/D/O/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/I/K/abcdefghijklmnop/B/J/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/H/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/O/abcdefghijklmnop/J/F/M/K/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/B/abcdefghijklmnop/H/abcdefghijklmnop/L/I/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/F/abcdefghijklmnop/I/abcdefghijklmnop/G/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/B/J/abcdefghijklmnop/abcdefghijklmnop/A/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/F/O/abcdefghijklmnop/P/abcdefghijklmnop/K/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/O/G/D/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/L/abcdefghijklmnop/B/abcdefghijklmnop/F/A/I/J/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/-1",
"O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/H/J/C/M/abcdefghijklmnop/A/F/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/L/E/abcdefghijklmnop/D/K/M/abcdefghijklmnop/C/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/N/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/E/M/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/L/C/N/A/F/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/K/abcdefghijklmnop/B/N/G/C/abcdefghijklmnop/F/A/K/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/L/H/P/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/G/abcdefghijklmnop/D/B/A/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/C/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/C/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/N/B/L/C/L/F/M/abcdefghijklmnop/abcdefghijklmnop/K/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/P/abcdefghijklmnop/D/I/abcdefghijklmnop/K/N/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/F/abcdefghijklmnop/J/C/L/K/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/N/F/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/N/I/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/L/abcdefghijklmnop/A/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/F/G/abcdefghijklmnop/H/H/K/I/P/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/O/F/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/A/-1",
"O/abcdefghijklmnop/C/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/G/abcdefghijklmnop/abcdefghijklmnop/E/A/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/I/abcdefghijklmnop/H/abcdefghijklmnop/C/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/P/N/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/J/abcdefghijklmnop/I/abcdefghijklmnop/F/abcdefghijklmnop/H/abcdefghijklmnop/N/abcdefghijklmnop/E/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/N/J/B/H/O/A/E/abcdefghijklmnop/F/G/I/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/I/abcdefghijklmnop/B/N/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/A/O/abcdefghijklmnop/I/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/E/P/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/K/C/abcdefghijklmnop/E/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/N/L/P/abcdefghijklmnop/E/C/M/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/P/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/K/N/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/C/abcdefghijklmnop/H/G/L/abcdefghijklmnop/G/abcdefghijklmnop/O/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/F/C/abcdefghijklmnop/abcdefghijklmnop/B/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/K/abcdefghijklmnop/E/I/abcdefghijklmnop/I/D/L/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/M/H/J/G/abcdefghijklmnop/C/A/K/abcdefghijklmnop/-1",
"G/M/E/abcdefghijklmnop/K/I/F/J/N/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/P/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/G/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/L/abcdefghijklmnop/I/L/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/B/I/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/F/O/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/M/N/P/G/abcdefghijklmnop/abcdefghijklmnop/J/K/I/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/I/F/A/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/G/abcdefghijklmnop/M/H/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/C/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/B/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/P/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/M/abcdefghijklmnop/A/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/C/A/abcdefghijklmnop/L/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/F/G/J/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/G/abcdefghijklmnop/L/abcdefghijklmnop/M/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/O/abcdefghijklmnop/M/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/J/P/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/F/N/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/A/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/M/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/I/abcdefghijklmnop/B/C/H/A/abcdefghijklmnop/F/abcdefghijklmnop/O/C/abcdefghijklmnop/B/H/abcdefghijklmnop/abcdefghijklmnop/E/L/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/M/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/K/abcdefghijklmnop/-1",
"L/C/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/G/abcdefghijklmnop/I/abcdefghijklmnop/N/abcdefghijklmnop/A/H/abcdefghijklmnop/P/P/F/abcdefghijklmnop/abcdefghijklmnop/O/A/L/abcdefghijklmnop/G/abcdefghijklmnop/M/J/N/abcdefghijklmnop/I/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/N/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/B/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/I/D/abcdefghijklmnop/N/G/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/K/L/abcdefghijklmnop/abcdefghijklmnop/I/F/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/C/H/abcdefghijklmnop/A/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/K/abcdefghijklmnop/J/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/N/I/abcdefghijklmnop/B/P/abcdefghijklmnop/O/C/abcdefghijklmnop/E/P/L/O/J/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/N/I/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/O/M/abcdefghijklmnop/abcdefghijklmnop/J/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/A/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/H/abcdefghijklmnop/A/B/G/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/O/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/J/L/abcdefghijklmnop/abcdefghijklmnop/P/E/D/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/K/I/P/abcdefghijklmnop/A/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/C/N/O/L/E/I/abcdefghijklmnop/K/abcdefghijklmnop/M/B/abcdefghijklmnop/-1",
"B/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/P/P/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/D/J/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/M/D/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/G/E/abcdefghijklmnop/K/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/O/abcdefghijklmnop/abcdefghijklmnop/A/G/F/abcdefghijklmnop/H/J/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/L/P/M/abcdefghijklmnop/G/L/I/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/H/D/abcdefghijklmnop/abcdefghijklmnop/E/C/abcdefghijklmnop/J/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/H/C/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/O/J/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/A/abcdefghijklmnop/O/E/abcdefghijklmnop/J/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/G/B/abcdefghijklmnop/J/I/M/N/abcdefghijklmnop/H/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/E/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/N/N/M/abcdefghijklmnop/abcdefghijklmnop/F/D/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/J/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/F/E/abcdefghijklmnop/I/abcdefghijklmnop/J/abcdefghijklmnop/N/K/O/abcdefghijklmnop/B/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/G/abcdefghijklmnop/D/-1",
"E/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/F/O/abcdefghijklmnop/G/M/abcdefghijklmnop/abcdefghijklmnop/G/P/O/F/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/C/D/abcdefghijklmnop/abcdefghijklmnop/B/E/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/D/L/abcdefghijklmnop/O/abcdefghijklmnop/B/abcdefghijklmnop/D/E/G/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/P/F/J/abcdefghijklmnop/A/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/A/O/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/P/I/abcdefghijklmnop/N/K/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/A/O/abcdefghijklmnop/L/C/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/F/G/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/K/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/J/N/L/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/F/M/D/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/J/abcdefghijklmnop/abcdefghijklmnop/K/O/C/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/A/E/abcdefghijklmnop/abcdefghijklmnop/F/G/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/N/G/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/H/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/A/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/I/G/abcdefghijklmnop/L/N/C/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/P/D/J/abcdefghijklmnop/E/F/abcdefghijklmnop/H/abcdefghijklmnop/L/B/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/I/abcdefghijklmnop/D/M/abcdefghijklmnop/G/I/N/P/E/A/H/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/-1",
"J/I/D/N/abcdefghijklmnop/A/abcdefghijklmnop/O/abcdefghijklmnop/H/F/G/abcdefghijklmnop/E/C/abcdefghijklmnop/H/P/G/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/M/A/C/abcdefghijklmnop/E/M/P/abcdefghijklmnop/H/N/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/O/G/abcdefghijklmnop/A/abcdefghijklmnop/B/E/abcdefghijklmnop/J/abcdefghijklmnop/K/M/abcdefghijklmnop/abcdefghijklmnop/I/H/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/K/abcdefghijklmnop/H/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/O/P/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/A/F/abcdefghijklmnop/K/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/J/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/O/A/M/abcdefghijklmnop/abcdefghijklmnop/I/P/H/A/B/abcdefghijklmnop/D/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/B/D/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/K/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/N/K/N/abcdefghijklmnop/C/I/L/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/A/D/H/M/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/G/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/O/G/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/C/abcdefghijklmnop/L/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/H/E/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/B/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/G/P/D/abcdefghijklmnop/O/A/abcdefghijklmnop/P/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/M/abcdefghijklmnop/O/E/H/abcdefghijklmnop/L/abcdefghijklmnop/-1",
"I/abcdefghijklmnop/M/C/N/D/G/abcdefghijklmnop/K/J/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/B/E/K/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/P/L/D/abcdefghijklmnop/J/N/J/P/D/M/C/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/I/C/M/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/J/E/E/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/A/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/A/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/K/J/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/C/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/N/abcdefghijklmnop/G/abcdefghijklmnop/A/abcdefghijklmnop/J/abcdefghijklmnop/K/abcdefghijklmnop/H/O/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/P/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/D/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/E/K/abcdefghijklmnop/abcdefghijklmnop/F/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/E/abcdefghijklmnop/C/O/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/M/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/L/H/N/I/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/P/abcdefghijklmnop/A/L/abcdefghijklmnop/abcdefghijklmnop/G/E/N/H/abcdefghijklmnop/D/F/I/abcdefghijklmnop/-1",
"I/abcdefghijklmnop/E/B/abcdefghijklmnop/D/H/G/L/K/F/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/H/N/A/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/M/A/N/I/abcdefghijklmnop/P/L/E/abcdefghijklmnop/G/L/abcdefghijklmnop/abcdefghijklmnop/G/J/abcdefghijklmnop/E/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/B/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/K/L/abcdefghijklmnop/abcdefghijklmnop/P/J/C/abcdefghijklmnop/O/A/B/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/E/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/O/C/E/E/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/H/C/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/L/K/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/B/J/E/F/P/A/L/abcdefghijklmnop/abcdefghijklmnop/E/I/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/H/N/C/abcdefghijklmnop/abcdefghijklmnop/A/G/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/I/abcdefghijklmnop/J/H/N/E/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/J/A/C/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/B/P/E/abcdefghijklmnop/G/abcdefghijklmnop/H/A/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/L/abcdefghijklmnop/G/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/F/J/N/abcdefghijklmnop/abcdefghijklmnop/D/O/-1",
"F/abcdefghijklmnop/abcdefghijklmnop/M/A/I/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/N/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/I/E/A/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/O/P/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/L/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/F/E/H/abcdefghijklmnop/N/abcdefghijklmnop/O/G/abcdefghijklmnop/B/F/J/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/N/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/K/E/abcdefghijklmnop/L/abcdefghijklmnop/N/I/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/G/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/M/abcdefghijklmnop/D/P/abcdefghijklmnop/E/abcdefghijklmnop/I/B/A/D/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/H/O/P/abcdefghijklmnop/G/abcdefghijklmnop/J/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/O/abcdefghijklmnop/D/abcdefghijklmnop/O/F/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/B/M/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/N/abcdefghijklmnop/abcdefghijklmnop/L/C/abcdefghijklmnop/J/F/G/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/A/K/J/G/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/H/B/E/N/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/I/abcdefghijklmnop/F/H/N/L/abcdefghijklmnop/E/O/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/K/abcdefghijklmnop/J/abcdefghijklmnop/D/C/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/M/P/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/K/abcdefghijklmnop/L/-1",
"N/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/G/H/abcdefghijklmnop/B/E/I/L/abcdefghijklmnop/I/J/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/B/E/O/abcdefghijklmnop/abcdefghijklmnop/F/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/F/abcdefghijklmnop/H/P/G/abcdefghijklmnop/E/L/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/J/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/F/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/N/abcdefghijklmnop/abcdefghijklmnop/A/D/I/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/A/abcdefghijklmnop/N/I/abcdefghijklmnop/E/D/F/C/P/J/H/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/M/J/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/I/C/abcdefghijklmnop/A/abcdefghijklmnop/N/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/P/F/L/abcdefghijklmnop/abcdefghijklmnop/E/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/L/H/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/O/abcdefghijklmnop/abcdefghijklmnop/K/N/J/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/E/B/M/C/I/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/L/abcdefghijklmnop/H/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/G/H/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/J/J/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/H/E/I/abcdefghijklmnop/F/abcdefghijklmnop/-1",
"D/J/abcdefghijklmnop/B/abcdefghijklmnop/C/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/M/H/N/abcdefghijklmnop/A/P/C/E/P/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/B/abcdefghijklmnop/O/D/A/L/M/abcdefghijklmnop/abcdefghijklmnop/N/I/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/C/O/B/D/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/I/F/abcdefghijklmnop/abcdefghijklmnop/N/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/D/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/E/N/abcdefghijklmnop/D/abcdefghijklmnop/M/P/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/F/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/J/A/L/abcdefghijklmnop/M/A/abcdefghijklmnop/P/I/abcdefghijklmnop/H/abcdefghijklmnop/L/abcdefghijklmnop/C/abcdefghijklmnop/E/K/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/E/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/K/J/abcdefghijklmnop/abcdefghijklmnop/C/N/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/K/H/abcdefghijklmnop/O/I/I/abcdefghijklmnop/N/O/abcdefghijklmnop/M/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/E/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/E/L/H/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/C/abcdefghijklmnop/L/abcdefghijklmnop/E/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/H/L/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/G/B/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/N/abcdefghijklmnop/-1",
"I/L/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/M/B/abcdefghijklmnop/C/abcdefghijklmnop/N/P/P/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/H/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/K/P/I/abcdefghijklmnop/G/A/F/G/abcdefghijklmnop/N/H/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/C/K/J/abcdefghijklmnop/I/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/A/abcdefghijklmnop/O/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/M/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/H/E/G/D/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/K/M/B/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/I/L/C/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/P/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/A/abcdefghijklmnop/B/F/K/abcdefghijklmnop/E/O/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/F/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/O/abcdefghijklmnop/G/abcdefghijklmnop/D/abcdefghijklmnop/L/B/C/abcdefghijklmnop/E/N/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/L/C/abcdefghijklmnop/abcdefghijklmnop/M/D/P/abcdefghijklmnop/K/D/abcdefghijklmnop/abcdefghijklmnop/C/N/K/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/E/abcdefghijklmnop/I/abcdefghijklmnop/L/H/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/C/E/K/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/G/F/abcdefghijklmnop/-1",
"N/abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/D/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/B/J/O/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/L/abcdefghijklmnop/F/N/M/H/E/I/abcdefghijklmnop/C/M/E/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/A/N/F/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/C/G/A/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/M/abcdefghijklmnop/P/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/J/J/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/E/H/O/C/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/K/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/F/O/abcdefghijklmnop/A/I/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/B/E/M/abcdefghijklmnop/G/A/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/I/G/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/N/H/abcdefghijklmnop/C/L/abcdefghijklmnop/N/B/K/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/A/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/M/P/I/P/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/F/C/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/G/A/E/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/J/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/D/M/B/I/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/-1",
"abcdefghijklmnop/O/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/K/I/M/F/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/H/M/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/A/D/abcdefghijklmnop/abcdefghijklmnop/E/M/abcdefghijklmnop/L/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/N/I/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/B/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/C/G/D/abcdefghijklmnop/B/abcdefghijklmnop/J/abcdefghijklmnop/L/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/A/abcdefghijklmnop/N/N/G/O/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/G/I/A/abcdefghijklmnop/abcdefghijklmnop/C/B/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/B/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/D/I/K/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/C/A/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/D/H/abcdefghijklmnop/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/P/O/P/C/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/E/I/H/H/abcdefghijklmnop/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/I/E/abcdefghijklmnop/B/abcdefghijklmnop/P/F/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/H/abcdefghijklmnop/C/I/abcdefghijklmnop/B/P/abcdefghijklmnop/L/A/F/M/A/abcdefghijklmnop/O/L/abcdefghijklmnop/P/J/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/E/B/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/D/abcdefghijklmnop/abcdefghijklmnop/G/M/K/abcdefghijklmnop/O/L/P/abcdefghijklmnop/G/J/C/abcdefghijklmnop/A/H/M/abcdefghijklmnop/abcdefghijklmnop/F/abcdefghijklmnop/I/-1",
"abcdefghijklmnop/F/abcdefghijklmnop/abcdefghijklmnop/B/abcdefghijklmnop/abcdefghijklmnop/E/A/D/abcdefghijklmnop/J/abcdefghijklmnop/M/G/P/B/L/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/A/I/G/abcdefghijklmnop/I/A/O/abcdefghijklmnop/P/abcdefghijklmnop/F/B/C/H/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/D/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/O/L/I/G/abcdefghijklmnop/B/abcdefghijklmnop/C/A/abcdefghijklmnop/D/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/I/abcdefghijklmnop/D/J/F/H/abcdefghijklmnop/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/H/B/F/abcdefghijklmnop/I/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/C/abcdefghijklmnop/F/abcdefghijklmnop/P/N/A/B/abcdefghijklmnop/abcdefghijklmnop/D/abcdefghijklmnop/L/I/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/L/abcdefghijklmnop/J/M/B/abcdefghijklmnop/abcdefghijklmnop/G/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/H/E/H/abcdefghijklmnop/N/O/K/L/F/abcdefghijklmnop/J/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/P/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/J/F/K/F/abcdefghijklmnop/abcdefghijklmnop/E/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/B/K/P/abcdefghijklmnop/L/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/N/E/abcdefghijklmnop/L/H/A/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/A/G/abcdefghijklmnop/B/E/abcdefghijklmnop/C/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/K/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/K/H/abcdefghijklmnop/G/P/abcdefghijklmnop/abcdefghijklmnop/N/abcdefghijklmnop/abcdefghijklmnop/B/J/abcdefghijklmnop/E/abcdefghijklmnop/N/A/O/abcdefghijklmnop/abcdefghijklmnop/abcdefghijklmnop/M/abcdefghijklmnop/abcdefghijklmnop/C/abcdefghijklmnop/G/-1",
];

const answer_data = 
[
"L/A/I/D/H/K/J/C/O/G/F/N/M/E/B/P/K/C/B/O/I/P/N/M/E/D/L/J/H/F/A/G/J/N/H/E/A/F/B/G/K/M/P/I/D/L/C/O/G/M/F/P/O/L/D/E/H/B/C/A/K/I/J/N/P/O/J/C/B/D/A/K/I/H/M/F/G/N/L/E/H/E/G/L/M/I/O/J/C/K/N/D/B/P/F/A/B/F/A/N/G/C/H/L/P/E/J/O/I/D/K/M/D/K/M/I/N/E/F/P/A/L/G/B/C/O/H/J/O/J/P/M/C/G/K/F/D/A/H/E/N/B/I/L/C/L/E/H/D/A/P/I/N/O/B/G/F/J/M/K/A/D/K/B/J/N/L/H/F/P/I/M/O/G/E/C/I/G/N/F/E/O/M/B/J/C/K/L/P/A/D/H/M/B/O/J/L/H/C/D/G/I/A/P/E/K/N/F/E/H/D/K/F/B/G/N/L/J/O/C/A/M/P/I/F/P/L/G/K/M/I/A/B/N/E/H/J/C/O/D/N/I/C/A/P/J/E/O/M/F/D/K/L/H/G/B/-1",
"D/G/B/M/J/A/F/C/N/H/O/K/E/L/I/P/C/L/J/I/M/B/P/K/F/G/E/D/N/H/O/A/F/H/E/O/L/D/I/N/B/J/P/A/C/G/M/K/A/N/P/K/O/E/H/G/L/M/I/C/D/J/F/B/M/I/O/A/F/L/N/H/G/E/J/B/K/D/P/C/L/D/F/H/B/K/G/J/C/N/A/P/O/I/E/M/N/C/G/B/P/O/E/D/K/F/M/I/H/A/J/L/E/J/K/P/C/I/A/M/H/D/L/O/B/N/G/F/H/O/D/J/K/C/L/E/P/A/F/M/G/B/N/I/I/P/N/L/H/F/B/O/J/C/G/E/M/K/A/D/K/M/A/F/N/G/J/I/O/B/D/H/L/P/C/E/B/E/C/G/A/M/D/P/I/K/N/L/F/O/H/J/J/K/L/C/I/N/M/A/D/O/H/F/P/E/B/G/G/F/H/N/E/P/C/B/A/L/K/J/I/M/D/O/O/A/I/E/D/H/K/F/M/P/B/G/J/C/L/N/P/B/M/D/G/J/O/L/E/I/C/N/A/F/K/H/-1",
"E/J/M/K/I/N/G/F/C/O/H/L/B/A/D/P/B/D/A/P/M/C/E/O/K/G/F/N/H/J/I/L/C/L/H/F/J/A/B/D/P/M/E/I/O/K/G/N/G/O/I/N/L/K/H/P/B/J/A/D/F/C/M/E/D/H/L/I/P/G/K/J/O/F/M/A/N/E/C/B/K/F/O/M/E/B/I/L/G/P/N/C/J/D/H/A/A/N/J/C/F/M/D/H/L/E/K/B/P/G/O/I/P/B/E/G/C/O/N/A/H/D/I/J/L/F/K/M/H/G/N/L/A/P/C/M/J/I/O/E/K/B/F/D/O/I/K/J/G/F/L/N/A/B/D/H/M/P/E/C/M/C/B/D/K/I/J/E/F/L/G/P/A/O/N/H/F/E/P/A/H/D/O/B/N/K/C/M/G/I/L/J/I/A/D/O/N/L/P/G/M/C/J/F/E/H/B/K/L/K/G/B/D/H/A/I/E/N/P/O/C/M/J/F/J/M/C/H/B/E/F/K/D/A/L/G/I/N/P/O/N/P/F/E/O/J/M/C/I/H/B/K/D/L/A/G/-1",
"I/E/A/K/F/N/C/J/G/O/L/H/B/D/M/P/H/G/L/F/P/D/O/I/C/A/B/M/N/K/E/J/J/D/B/N/G/A/H/M/E/F/P/K/L/O/C/I/O/M/P/C/B/K/E/L/J/I/D/N/F/H/A/G/M/B/F/H/A/I/G/O/D/L/K/J/C/P/N/E/C/A/E/D/H/J/N/F/I/G/O/P/K/B/L/M/G/N/J/L/K/M/P/B/F/H/C/E/O/I/D/A/P/K/O/I/L/C/D/E/M/N/A/B/G/F/J/H/E/L/I/M/O/P/A/N/K/D/H/C/J/G/F/B/F/C/G/A/M/L/J/H/P/B/I/O/D/E/K/N/K/P/D/B/C/E/F/G/N/J/M/A/I/L/H/O/N/J/H/O/I/B/K/D/L/E/G/F/M/A/P/C/D/O/C/E/N/G/B/P/A/K/J/L/H/M/I/F/A/F/M/G/D/O/L/C/H/P/N/I/E/J/B/K/L/I/K/J/E/H/M/A/B/C/F/G/P/N/O/D/B/H/N/P/J/F/I/K/O/M/E/D/A/C/G/L/-1",
"G/C/O/M/A/N/K/L/H/J/B/F/E/D/I/P/L/K/N/E/C/P/I/F/A/O/D/M/G/J/H/B/D/J/B/I/E/H/G/M/L/P/C/N/O/F/K/A/A/F/H/P/J/B/D/O/E/K/I/G/M/N/C/L/K/B/C/J/D/I/H/G/N/M/F/L/P/O/A/E/M/O/A/F/L/K/N/E/B/H/P/C/D/I/J/G/I/H/P/D/O/M/A/C/J/G/K/E/B/L/N/F/E/G/L/N/B/J/F/P/O/I/A/D/C/H/M/K/F/E/M/L/I/C/O/A/K/D/J/B/N/P/G/H/B/D/I/K/M/G/P/N/F/E/H/A/L/C/O/J/C/N/G/H/K/F/J/B/P/L/M/O/A/E/D/I/O/P/J/A/H/E/L/D/C/N/G/I/K/B/F/M/P/L/F/B/N/A/M/H/G/C/O/J/I/K/E/D/N/A/K/C/P/D/B/I/M/F/E/H/J/G/L/O/H/M/D/O/G/L/E/J/I/B/N/K/F/A/P/C/J/I/E/G/F/O/C/K/D/A/L/P/H/M/B/N/-1",
"M/N/L/E/K/G/H/I/B/J/A/C/F/D/O/P/O/D/K/J/E/F/B/C/H/I/P/L/M/G/A/N/P/G/F/C/L/D/M/A/O/N/K/E/I/B/J/H/B/H/I/A/N/J/P/O/G/M/F/D/K/E/L/C/J/E/G/D/B/H/L/K/F/C/O/A/N/M/P/I/F/P/N/O/A/M/C/J/L/B/I/G/E/H/D/K/L/C/M/K/I/E/F/D/P/H/J/N/A/O/G/B/A/I/H/B/P/N/O/G/E/K/D/M/C/L/F/J/E/K/J/F/G/L/A/B/C/D/N/I/O/P/H/M/G/L/B/N/F/I/E/H/J/P/M/O/D/K/C/A/C/O/D/H/J/P/K/M/A/G/E/B/L/I/N/F/I/M/A/P/O/C/D/N/K/F/L/H/B/J/E/G/K/B/E/G/H/O/I/F/D/A/C/J/P/N/M/L/N/A/P/M/D/B/G/E/I/L/H/F/J/C/K/O/H/J/O/L/C/A/N/P/M/E/B/K/G/F/I/D/D/F/C/I/M/K/J/L/N/O/G/P/H/A/B/E/-1",
"B/F/H/K/J/D/O/E/G/A/C/L/I/N/M/P/E/J/N/G/C/H/I/M/P/F/O/D/K/A/B/L/P/A/M/C/L/F/N/K/E/J/B/I/G/D/H/O/O/I/L/D/A/B/G/P/K/H/M/N/J/C/E/F/F/M/I/L/N/C/E/A/D/B/K/J/P/H/O/G/N/H/P/O/I/M/L/D/A/E/G/F/C/B/K/J/C/G/B/E/K/P/F/J/M/L/H/O/N/I/D/A/K/D/J/A/G/O/B/H/I/C/N/P/L/M/F/E/D/N/E/B/F/L/P/I/C/O/J/M/H/G/A/K/I/L/G/H/O/N/K/B/F/D/A/E/M/P/J/C/A/C/F/M/H/J/D/G/N/P/I/K/E/O/L/B/J/K/O/P/M/E/A/C/H/G/L/B/D/F/N/I/G/P/D/F/B/A/C/N/J/K/E/H/O/L/I/M/L/O/C/N/E/I/J/F/B/M/D/G/A/K/P/H/H/E/K/I/P/G/M/L/O/N/F/A/B/J/C/D/M/B/A/J/D/K/H/O/L/I/P/C/F/E/G/N/-1",
"G/E/D/I/C/K/F/J/M/B/A/L/H/O/N/P/B/O/K/N/G/M/H/I/F/C/P/D/E/J/A/L/A/L/H/J/B/P/N/E/I/O/K/G/D/F/C/M/M/F/C/P/O/D/L/A/E/H/N/J/I/G/B/K/F/M/G/O/A/L/J/B/H/D/C/N/P/K/E/I/C/K/I/D/E/N/M/F/B/A/O/P/J/L/G/H/L/N/B/H/I/G/C/P/K/E/J/M/F/D/O/A/P/J/E/A/K/O/D/H/G/F/L/I/C/N/M/B/K/D/L/G/P/B/O/M/A/J/H/F/N/C/I/E/H/C/P/F/L/I/K/G/O/N/B/E/M/A/J/D/N/B/J/E/F/H/A/C/D/M/I/K/O/P/L/G/I/A/O/M/D/J/E/N/L/P/G/C/B/H/K/F/O/H/F/K/M/C/B/D/J/G/E/A/L/I/P/N/J/I/A/B/N/F/G/O/P/L/M/H/K/E/D/C/D/G/N/L/J/E/P/K/C/I/F/B/A/M/H/O/E/P/M/C/H/A/I/L/N/K/D/O/G/B/F/J/-1",
"E/N/A/M/G/H/F/J/O/C/I/K/D/B/L/P/D/K/B/C/L/E/N/M/G/H/A/P/J/I/O/F/I/P/G/O/B/K/A/D/J/E/L/F/M/H/C/N/J/F/L/H/C/O/I/P/N/M/D/B/A/G/K/E/O/A/K/P/M/G/H/B/I/J/F/N/E/C/D/L/H/C/I/N/A/D/K/O/E/L/M/G/F/P/J/B/F/B/D/J/I/C/L/E/H/P/K/O/N/M/G/A/L/E/M/G/N/J/P/F/B/D/C/A/I/O/H/K/B/G/P/I/E/N/O/K/F/A/J/L/H/D/M/C/M/D/E/A/P/I/C/G/K/O/N/H/L/F/B/J/N/H/J/L/F/B/D/A/C/I/G/M/K/E/P/O/C/O/F/K/H/M/J/L/D/B/P/E/G/N/A/I/P/L/H/F/O/A/G/N/M/K/B/I/C/J/E/D/K/J/O/B/D/F/M/H/L/N/E/C/P/A/I/G/G/M/C/D/K/P/E/I/A/F/O/J/B/L/N/H/A/I/N/E/J/L/B/C/P/G/H/D/O/K/F/M/-1",
"I/D/F/L/K/J/O/M/H/E/N/A/G/C/B/P/O/P/G/M/L/C/I/F/B/D/J/K/H/N/A/E/N/C/A/B/H/E/D/G/P/F/I/L/O/K/J/M/J/E/K/H/A/P/B/N/O/G/M/C/I/F/L/D/M/J/H/F/O/B/N/K/L/I/C/E/A/P/D/G/K/L/E/N/D/G/C/A/M/P/B/O/J/H/F/I/A/G/I/P/F/M/E/J/N/H/K/D/L/O/C/B/D/B/O/C/P/H/L/I/J/A/G/F/M/E/N/K/B/H/L/O/N/A/M/P/D/K/E/G/C/J/I/F/G/N/M/K/I/L/F/H/C/B/P/J/D/A/E/O/P/A/C/D/J/O/G/E/F/M/H/I/B/L/K/N/E/F/J/I/B/D/K/C/A/O/L/N/P/M/G/H/H/O/B/A/E/K/J/L/G/N/D/P/F/I/M/C/F/K/D/J/M/I/H/O/E/C/A/B/N/G/P/L/L/I/N/G/C/F/P/B/K/J/O/M/E/D/H/A/C/M/P/E/G/N/A/D/I/L/F/H/K/B/O/J/-1",
"J/K/O/N/H/E/D/L/B/G/M/C/A/I/F/P/H/A/L/M/O/C/N/P/J/F/D/I/B/E/G/K/I/G/B/D/F/K/J/A/P/N/E/L/H/O/C/M/P/F/E/C/B/G/I/M/H/K/O/A/L/D/J/N/A/M/K/H/C/J/G/F/E/D/N/O/I/L/P/B/B/C/G/I/M/H/E/K/F/P/L/J/D/N/A/O/D/O/N/L/A/B/P/I/C/H/K/M/G/F/E/J/E/J/F/P/N/D/L/O/I/A/G/B/K/H/M/C/M/P/C/O/G/N/H/D/A/B/I/F/J/K/L/E/G/N/J/E/K/F/B/C/L/M/H/D/O/P/I/A/K/L/I/A/P/M/O/E/G/C/J/N/F/B/D/H/F/D/H/B/L/I/A/J/K/O/P/E/C/M/N/G/N/E/M/K/I/L/F/B/O/J/C/G/P/A/H/D/O/H/A/G/E/P/C/N/D/I/F/K/M/J/B/L/C/B/D/F/J/O/M/H/N/L/A/P/E/G/K/I/L/I/P/J/D/A/K/G/M/E/B/H/N/C/O/F/-1",
"F/G/L/A/D/E/H/K/J/B/N/M/I/C/O/P/K/C/M/I/L/N/O/B/P/A/E/D/J/H/G/F/B/O/H/J/A/G/P/F/L/C/K/I/N/M/E/D/N/P/D/E/I/M/C/J/F/H/O/G/L/K/A/B/J/K/E/B/C/O/G/A/N/L/I/H/F/D/P/M/O/M/A/H/E/K/L/N/G/P/D/F/B/J/C/I/D/N/P/F/B/J/M/I/E/K/C/A/O/L/H/G/I/L/C/G/H/D/F/P/B/M/J/O/E/N/K/A/C/B/J/L/O/H/A/G/M/E/P/N/D/F/I/K/H/A/G/P/K/B/E/D/I/F/L/C/M/O/N/J/M/I/K/O/F/C/N/L/A/D/H/J/P/G/B/E/E/D/F/N/P/I/J/M/O/G/B/K/H/A/L/C/A/E/O/D/N/F/B/C/K/I/M/L/G/P/J/H/L/H/B/M/G/P/K/O/C/J/F/E/A/I/D/N/G/J/I/C/M/L/D/E/H/N/A/P/K/B/F/O/P/F/N/K/J/A/I/H/D/O/G/B/C/E/M/L/-1",
"K/D/H/N/I/E/L/C/G/O/F/A/B/M/J/P/E/O/A/J/N/F/P/M/C/B/I/K/L/D/H/G/G/I/M/P/B/H/A/J/N/L/E/D/O/F/K/C/F/C/B/L/G/O/K/D/P/M/J/H/E/N/A/I/P/B/O/E/C/L/D/N/A/I/K/F/G/H/M/J/J/M/I/H/O/P/E/G/D/N/L/B/K/C/F/A/D/K/F/G/M/A/H/B/J/C/P/E/I/L/O/N/L/A/N/C/K/I/J/F/O/H/G/M/D/E/P/B/M/L/G/D/F/C/B/P/H/J/N/O/A/I/E/K/A/H/P/F/E/K/O/I/B/G/C/L/N/J/D/M/B/J/K/I/H/N/G/A/M/E/D/P/C/O/L/F/N/E/C/O/J/D/M/L/K/F/A/I/P/B/G/H/C/P/L/A/D/B/N/H/F/K/O/J/M/G/I/E/H/N/D/M/A/J/I/E/L/P/B/G/F/K/C/O/I/F/J/K/L/G/C/O/E/A/M/N/H/P/B/D/O/G/E/B/P/M/F/K/I/D/H/C/J/A/N/L/-1",
"M/K/E/H/N/D/L/I/G/A/O/C/B/J/F/P/B/J/D/C/G/A/O/H/M/P/L/F/K/E/N/I/N/L/P/I/J/F/K/M/D/E/B/H/C/O/A/G/F/A/O/G/B/C/E/P/I/N/K/J/D/H/L/M/A/P/K/B/L/H/M/C/F/D/I/G/O/N/E/J/I/O/G/N/K/E/D/J/A/H/P/B/L/M/C/F/D/H/F/E/O/N/P/A/J/C/M/L/G/I/K/B/L/M/C/J/I/B/F/G/E/K/N/O/A/P/D/H/O/I/M/D/C/J/G/N/P/L/F/A/H/K/B/E/G/C/B/F/A/K/H/O/N/J/E/I/M/L/P/D/K/N/A/P/D/L/B/E/O/G/H/M/I/F/J/C/H/E/J/L/P/M/I/F/C/B/D/K/N/A/G/O/C/B/H/O/F/G/A/K/L/I/J/E/P/D/M/N/E/D/N/A/M/I/J/B/K/O/C/P/F/G/H/L/P/F/L/K/E/O/C/D/H/M/G/N/J/B/I/A/J/G/I/M/H/P/N/L/B/F/A/D/E/C/O/K/-1",
"J/A/K/F/D/E/H/G/N/L/I/O/C/B/M/P/O/L/D/N/I/F/C/M/B/K/P/A/H/E/J/G/C/M/B/H/N/P/O/K/D/E/G/J/F/I/L/A/E/G/I/P/L/A/B/J/F/C/H/M/N/K/D/O/K/J/C/D/P/I/A/F/H/O/L/G/M/N/E/B/M/F/E/A/H/L/D/C/P/N/B/K/O/G/I/J/N/H/O/G/B/M/J/E/I/F/D/C/P/L/A/K/I/P/L/B/K/G/N/O/J/A/M/E/D/H/C/F/F/E/N/O/M/K/L/D/A/B/C/I/G/J/P/H/D/B/G/K/E/J/I/H/M/P/F/L/A/C/O/N/A/C/P/J/O/N/G/B/E/H/K/D/I/M/F/L/H/I/M/L/F/C/P/A/G/J/O/N/B/D/K/E/G/O/H/E/C/B/M/L/K/I/A/F/J/P/N/D/L/D/A/I/G/H/E/N/O/M/J/P/K/F/B/C/P/K/J/C/A/D/F/I/L/G/N/B/E/O/H/M/B/N/F/M/J/O/K/P/C/D/E/H/L/A/G/I/-1",
"O/C/B/H/A/M/F/J/G/I/N/D/E/L/K/P/F/I/J/K/P/D/H/O/M/C/E/L/A/G/N/B/A/N/L/G/K/E/C/I/P/J/B/O/F/D/M/H/E/P/M/D/B/L/N/G/H/K/F/A/O/J/I/C/H/F/C/J/G/N/O/L/D/E/M/B/K/A/P/I/P/E/K/M/C/B/I/D/N/F/A/G/J/H/O/L/B/L/A/I/M/J/K/E/O/H/C/P/D/N/F/G/N/G/D/O/H/A/P/F/J/L/I/K/C/E/B/M/K/H/I/E/F/P/G/N/L/O/D/M/B/C/J/A/C/B/N/A/L/H/D/K/I/G/J/F/M/P/E/O/J/O/P/F/I/C/B/M/E/A/H/N/L/K/G/D/M/D/G/L/J/O/E/A/B/P/K/C/I/F/H/N/D/A/F/P/E/I/M/H/C/B/G/J/N/O/L/K/L/K/H/N/O/F/J/B/A/D/P/I/G/M/C/E/G/M/E/B/D/K/L/C/F/N/O/H/P/I/A/J/I/J/O/C/N/G/A/P/K/M/L/E/H/B/D/F/-1",
"I/C/A/D/B/F/L/J/H/G/N/E/O/K/M/P/N/K/P/G/I/H/E/D/L/O/M/F/B/J/C/A/E/L/O/H/C/A/K/M/B/J/I/P/D/G/F/N/B/F/J/M/P/N/O/G/A/D/C/K/I/H/E/L/F/M/B/N/J/I/H/A/E/C/O/G/K/P/L/D/D/P/L/O/K/B/M/C/F/N/J/A/H/E/G/I/C/A/K/J/L/P/G/E/D/B/H/I/M/N/O/F/H/I/G/E/O/D/N/F/M/P/K/L/J/A/B/C/L/H/E/P/A/M/C/O/N/F/B/D/G/I/J/K/J/N/I/A/D/G/F/B/O/K/E/C/L/M/P/H/O/D/F/K/H/J/P/L/I/A/G/M/C/B/N/E/M/G/C/B/E/K/I/N/J/L/P/H/F/D/A/O/A/J/M/L/F/C/B/H/K/E/D/N/P/O/I/G/G/O/D/C/M/E/A/I/P/H/L/B/N/F/K/J/K/B/N/F/G/O/D/P/C/I/A/J/E/L/H/M/P/E/H/I/N/L/J/K/G/M/F/O/A/C/D/B/-1",
"E/M/F/G/I/J/L/D/A/H/C/K/O/B/N/P/C/H/I/N/M/G/P/O/D/B/F/L/J/A/E/K/D/B/A/O/H/K/N/F/E/P/J/I/G/M/C/L/K/J/L/P/A/B/C/E/O/G/M/N/I/D/F/H/B/L/M/F/N/D/E/K/H/C/P/G/A/I/O/J/H/E/P/D/J/F/O/B/M/K/I/A/N/L/G/C/N/C/G/A/L/I/H/M/J/O/B/F/D/P/K/E/O/K/J/I/C/A/G/P/L/N/D/E/H/F/B/M/I/A/H/C/F/E/J/L/K/D/G/B/M/N/P/O/F/O/K/B/G/N/A/H/P/M/L/J/C/E/I/D/L/D/N/M/P/O/K/I/F/E/A/C/B/H/J/G/P/G/E/J/B/M/D/C/N/I/H/O/L/K/A/F/G/N/D/L/K/C/F/J/B/A/E/H/P/O/M/I/M/F/B/K/D/L/I/N/G/J/O/P/E/C/H/A/J/P/C/E/O/H/B/A/I/L/K/M/F/G/D/N/A/I/O/H/E/P/M/G/C/F/N/D/K/J/L/B/-1",
"N/M/B/C/A/I/H/D/L/K/E/G/F/O/J/P/J/E/L/P/F/B/N/K/H/I/C/O/A/G/M/D/O/G/A/H/L/J/E/M/D/F/B/P/I/C/K/N/D/K/I/F/C/G/P/O/M/A/J/N/H/L/B/E/K/C/O/D/H/A/I/F/G/M/N/L/E/B/P/J/E/A/M/J/B/P/D/N/F/O/H/K/C/I/L/G/L/B/N/G/K/E/O/C/A/J/P/I/D/H/F/M/P/F/H/I/M/L/G/J/E/B/D/C/N/K/A/O/C/P/E/M/G/F/A/I/B/L/O/J/K/N/D/H/H/D/K/N/J/C/M/B/P/E/G/F/O/A/I/L/I/J/G/A/O/D/L/H/N/C/K/M/B/P/E/F/B/O/F/L/P/N/K/E/I/H/A/D/J/M/G/C/G/L/C/O/E/H/F/P/K/D/I/B/M/J/N/A/F/I/D/K/N/O/J/L/C/G/M/A/P/E/H/B/M/N/J/E/D/K/B/A/O/P/L/H/G/F/C/I/A/H/P/B/I/M/C/G/J/N/F/E/L/D/O/K/-1",
"B/M/N/J/D/O/F/A/K/C/H/L/I/G/E/P/L/O/H/C/M/N/P/I/G/A/F/E/J/D/B/K/I/G/A/K/J/E/B/L/M/D/P/N/C/F/O/H/E/D/F/P/G/K/C/H/I/O/B/J/L/N/M/A/N/F/M/G/A/L/J/K/D/B/I/C/E/P/H/O/O/H/C/A/F/G/N/M/L/E/K/P/B/I/D/J/P/I/L/E/O/H/D/B/J/N/A/G/F/C/K/M/J/B/K/D/C/I/E/P/O/F/M/H/A/L/N/G/D/A/O/N/H/J/M/C/E/P/L/F/G/K/I/B/H/J/P/I/N/F/K/O/A/G/C/B/D/M/L/E/C/K/E/B/P/D/L/G/N/M/O/I/H/A/J/F/M/L/G/F/B/A/I/E/H/K/J/D/P/O/C/N/K/E/J/O/L/P/A/D/C/H/G/M/N/B/F/I/A/N/B/L/I/M/H/F/P/J/D/K/O/E/G/C/G/C/D/H/K/B/O/N/F/I/E/A/M/J/P/L/F/P/I/M/E/C/G/J/B/L/N/O/K/H/A/D/-1",
"C/M/D/A/E/I/B/J/L/K/G/F/O/H/N/P/N/H/F/P/K/A/M/O/B/C/J/E/L/I/G/D/L/J/I/G/D/F/P/C/H/N/A/O/E/K/B/M/O/K/B/E/L/G/H/N/M/I/P/D/J/A/F/C/E/F/N/D/B/C/K/L/J/O/H/I/A/P/M/G/H/L/J/I/G/M/O/P/K/A/N/B/D/E/C/F/M/P/G/B/H/J/A/D/F/E/C/L/N/O/K/I/A/C/K/O/F/N/I/E/G/M/D/P/H/B/L/J/P/E/M/J/I/O/C/H/D/L/F/N/B/G/A/K/G/A/O/F/M/D/N/K/C/J/B/H/I/L/P/E/B/I/L/C/J/E/F/G/O/P/K/A/M/D/H/N/D/N/H/K/P/B/L/A/I/G/E/M/F/C/J/O/F/O/P/M/N/K/E/B/A/H/I/C/G/J/D/L/J/D/A/L/O/P/G/F/E/B/M/K/C/N/I/H/I/B/E/N/C/H/J/M/P/D/L/G/K/F/O/A/K/G/C/H/A/L/D/I/N/F/O/J/P/M/E/B/-1",
"C/M/B/G/H/E/I/L/O/F/D/N/J/A/K/P/I/A/D/E/F/J/K/M/H/G/P/L/O/C/B/N/F/P/N/J/A/B/C/O/I/K/M/E/H/L/D/G/L/K/O/H/D/P/N/G/A/C/B/J/E/F/I/M/H/B/G/N/K/F/M/E/P/O/C/D/L/J/A/I/J/O/A/M/B/L/G/N/K/H/E/I/D/P/F/C/D/C/K/P/I/O/J/A/F/L/G/B/M/E/N/H/E/I/L/F/P/D/H/C/J/M/N/A/G/B/O/K/G/F/E/A/C/N/D/J/L/I/K/P/B/H/M/O/B/J/I/K/L/H/F/P/N/E/O/M/A/G/C/D/M/H/P/D/O/A/B/I/C/J/F/G/N/K/E/L/N/L/C/O/G/M/E/K/B/D/A/H/F/I/P/J/O/E/M/I/N/C/L/F/G/B/J/K/P/D/H/A/K/G/H/B/M/I/A/D/E/P/L/O/C/N/J/F/A/D/J/C/E/G/P/H/M/N/I/F/K/O/L/B/P/N/F/L/J/K/O/B/D/A/H/C/I/M/G/E/-1",
"D/L/B/N/F/G/E/H/J/K/O/I/C/M/A/P/K/F/C/M/N/P/A/J/D/G/L/H/O/I/E/B/I/P/O/A/B/L/K/D/C/F/M/E/N/G/J/H/G/E/J/H/C/I/M/O/B/N/A/P/D/F/K/L/J/K/N/C/H/A/F/M/I/E/B/O/G/L/P/D/L/A/H/D/K/J/I/N/M/P/F/G/E/C/B/O/M/O/E/B/G/D/P/L/H/J/K/C/A/N/F/I/P/I/F/G/O/C/B/E/A/L/N/D/K/H/M/J/B/G/D/I/J/F/H/A/N/O/E/M/L/P/C/K/O/N/A/J/I/E/G/C/K/H/P/L/F/B/D/M/F/M/L/K/P/N/O/B/G/D/C/J/I/A/H/E/C/H/P/E/D/M/L/K/F/B/I/A/J/O/N/G/A/B/M/L/E/H/J/I/O/C/D/F/P/K/G/N/E/J/G/O/A/K/N/F/P/I/H/B/M/D/L/C/N/C/I/P/M/B/D/G/L/A/J/K/H/E/O/F/H/D/K/F/L/O/C/P/E/M/G/N/B/J/I/A/-1",
"F/H/A/B/G/E/J/I/N/K/O/L/D/M/C/P/K/C/I/N/H/B/M/D/P/A/J/E/O/G/L/F/P/L/M/D/N/O/C/A/F/I/B/G/J/E/K/H/O/G/E/J/L/F/K/P/M/C/H/D/B/A/N/I/E/A/C/O/I/G/H/M/K/L/D/P/F/J/B/N/I/J/B/H/D/L/F/N/G/E/C/M/A/P/O/K/D/K/N/G/J/P/B/O/H/F/I/A/C/L/E/M/M/F/L/P/A/K/E/C/O/B/N/J/I/H/G/D/H/E/J/L/F/D/N/K/C/O/M/I/P/B/A/G/N/O/P/M/E/A/G/B/J/H/K/F/L/D/I/C/G/I/K/A/C/M/L/H/D/P/E/B/N/F/J/O/B/D/F/C/O/I/P/J/A/G/L/N/M/K/H/E/J/B/D/K/M/C/O/E/L/N/P/H/G/I/F/A/A/M/H/I/B/N/D/F/E/J/G/O/K/C/P/L/L/P/O/E/K/J/A/G/I/M/F/C/H/N/D/B/C/N/G/F/P/H/I/L/B/D/A/K/E/O/M/J/-1",
"L/G/A/C/K/I/N/B/J/D/E/H/O/F/M/P/N/O/K/B/L/A/H/F/P/C/M/I/J/G/E/D/P/M/J/E/O/C/D/G/L/N/K/F/H/I/A/B/F/I/D/H/J/M/P/E/B/A/G/O/K/N/L/C/E/N/M/A/D/H/O/I/K/F/J/B/P/C/G/L/J/H/L/I/N/K/C/M/E/P/A/G/D/O/B/F/G/P/C/F/B/J/A/L/O/H/D/M/N/E/I/K/B/K/O/D/G/E/F/P/C/I/N/L/A/H/J/M/M/F/H/O/C/N/B/J/I/G/L/D/E/K/P/A/A/L/I/K/E/D/M/O/H/B/F/P/C/J/N/G/D/E/B/P/F/G/I/K/A/J/C/N/M/L/O/H/C/J/N/G/A/P/L/H/M/E/O/K/B/D/F/I/K/D/E/M/P/L/J/A/G/O/I/C/F/B/H/N/I/A/F/J/H/B/K/N/D/L/P/E/G/M/C/O/H/C/G/N/I/O/E/D/F/M/B/A/L/P/K/J/O/B/P/L/M/F/G/C/N/K/H/J/I/A/D/E/-1",
"K/D/A/O/L/B/G/F/I/E/N/J/M/C/H/P/G/B/F/N/C/E/K/M/H/D/L/P/O/J/A/I/J/H/C/L/P/O/I/A/F/B/G/M/K/E/D/N/E/M/P/I/D/H/N/J/C/A/K/O/G/L/F/B/A/K/I/B/G/F/J/O/P/N/C/L/H/M/E/D/H/C/D/M/N/L/E/P/O/F/B/G/A/I/K/J/O/J/L/F/K/M/C/H/E/I/A/D/N/B/P/G/N/G/E/P/I/A/D/B/M/H/J/K/L/F/O/C/C/E/M/H/A/I/F/N/L/P/D/B/J/O/G/K/L/N/J/D/B/G/P/E/A/K/O/I/C/H/M/F/B/P/O/G/M/J/H/K/N/C/F/E/I/D/L/A/I/F/K/A/O/C/L/D/J/G/M/H/P/N/B/E/D/A/G/E/H/P/O/L/B/J/I/C/F/K/N/M/F/O/H/C/J/K/B/G/D/M/P/N/E/A/I/L/M/I/N/K/E/D/A/C/G/L/H/F/B/P/J/O/P/L/B/J/F/N/M/I/K/O/E/A/D/G/C/H/-1",
"I/K/B/E/L/O/H/F/C/J/G/D/A/M/N/P/M/A/F/D/K/J/N/G/P/O/H/B/I/L/C/E/L/N/P/G/A/D/C/I/K/E/M/F/H/J/B/O/J/H/O/C/P/M/B/E/L/I/A/N/D/F/K/G/F/L/D/K/E/P/J/B/H/C/O/I/M/G/A/N/O/E/M/A/G/N/K/C/D/B/J/P/L/H/I/F/H/I/G/N/D/L/O/A/M/F/E/K/P/B/J/C/C/B/J/P/F/I/M/H/G/L/N/A/O/D/E/K/P/O/L/B/H/F/D/J/E/M/K/C/N/A/G/I/E/J/C/F/I/G/P/N/B/A/D/L/K/O/H/M/K/G/A/M/O/B/E/L/F/N/I/H/J/C/P/D/N/D/H/I/C/K/A/M/J/G/P/O/F/E/L/B/A/F/K/L/N/E/G/D/I/H/C/M/B/P/O/J/G/P/N/J/B/A/F/K/O/D/L/E/C/I/M/H/B/M/I/H/J/C/L/O/N/P/F/G/E/K/D/A/D/C/E/O/M/H/I/P/A/K/B/J/G/N/F/L/-1",
"N/I/B/A/K/D/F/C/L/J/M/H/G/E/O/P/J/E/G/O/B/M/P/N/F/K/D/A/L/I/H/C/D/L/H/P/I/G/E/A/N/C/B/O/F/M/K/J/F/C/M/K/L/J/H/O/G/E/P/I/D/B/N/A/M/F/O/H/D/L/J/B/E/A/I/G/C/K/P/N/L/K/D/N/P/H/A/E/J/O/C/M/B/F/G/I/C/G/I/B/O/F/M/K/D/N/L/P/J/H/A/E/A/P/E/J/N/C/I/G/H/F/K/B/O/D/M/L/E/D/K/M/A/I/N/P/C/G/J/L/H/O/B/F/O/N/C/I/M/B/D/F/P/H/A/K/E/L/J/G/H/J/F/G/E/O/C/L/B/M/N/D/A/P/I/K/B/A/P/L/H/K/G/J/O/I/E/F/N/C/D/M/I/O/L/F/J/N/K/D/A/P/H/C/M/G/E/B/G/M/J/D/C/A/B/I/K/L/O/E/P/N/F/H/K/B/A/E/G/P/L/H/M/D/F/N/I/J/C/O/P/H/N/C/F/E/O/M/I/B/G/J/K/A/L/D/-1",
"D/O/E/H/I/A/K/J/F/C/M/G/L/B/N/P/I/L/G/B/H/M/C/P/O/K/N/E/F/A/D/J/F/P/M/J/N/O/D/E/L/A/I/B/C/H/G/K/C/N/K/A/B/F/G/L/H/J/D/P/E/O/M/I/H/F/C/K/A/P/B/N/J/E/O/I/D/G/L/M/L/G/D/E/M/H/F/K/A/B/P/C/J/I/O/N/N/J/A/I/D/C/L/O/G/M/H/K/P/E/B/F/P/B/O/M/E/I/J/G/N/D/F/L/A/K/C/H/E/I/L/N/G/D/A/F/M/O/K/J/B/P/H/C/O/M/J/F/K/B/E/C/I/P/L/H/G/N/A/D/A/K/H/G/O/N/P/I/B/F/C/D/M/J/E/L/B/C/P/D/L/J/H/M/E/G/A/N/I/F/K/O/M/H/F/P/J/K/O/B/C/L/E/A/N/D/I/G/K/E/I/L/F/G/N/A/D/H/J/M/O/C/P/B/G/D/N/O/C/E/M/H/P/I/B/F/K/L/J/A/J/A/B/C/P/L/I/D/K/N/G/O/H/M/F/E/-1",
"L/G/K/D/F/O/N/I/H/J/E/B/C/M/A/P/C/M/P/N/L/G/E/H/F/A/O/D/I/B/K/J/B/A/J/F/M/K/D/C/L/N/I/P/O/E/H/G/H/E/I/O/J/A/B/P/C/G/K/M/D/L/N/F/I/F/B/E/N/P/H/D/A/L/J/G/K/C/O/M/O/J/D/A/K/M/C/E/I/B/H/N/F/G/P/L/G/H/C/M/O/L/A/J/E/F/P/K/N/D/B/I/K/L/N/P/B/I/F/G/O/D/M/C/E/A/J/H/E/I/H/B/G/N/J/O/M/P/L/F/A/K/C/D/M/O/A/J/I/C/P/B/K/H/D/E/G/F/L/N/D/N/F/G/A/H/L/K/J/C/B/I/M/P/E/O/P/K/L/C/E/D/M/F/N/O/G/A/H/J/I/B/J/B/E/I/H/F/O/M/G/K/A/L/P/N/D/C/N/C/M/L/P/B/I/A/D/E/F/H/J/O/G/K/F/P/O/K/D/E/G/N/B/I/C/J/L/H/M/A/A/D/G/H/C/J/K/L/P/M/N/O/B/I/F/E/-1",
"L/K/M/F/C/A/H/I/D/G/J/B/O/N/E/P/G/P/O/N/B/E/J/K/A/I/H/C/F/L/M/D/D/A/H/E/F/G/L/N/O/M/P/K/C/B/J/I/J/B/I/C/M/P/O/D/N/L/F/E/H/G/K/A/F/G/B/K/P/L/A/H/J/N/E/M/I/D/O/C/I/C/D/A/K/J/M/B/L/P/O/G/E/F/N/H/N/J/L/O/E/D/I/G/B/F/C/H/M/A/P/K/E/H/P/M/N/O/F/C/K/D/A/I/B/J/G/L/H/M/J/D/O/B/N/P/C/K/I/F/A/E/L/G/B/E/A/I/H/M/D/J/P/O/G/L/K/C/F/N/C/N/G/L/A/K/E/F/M/H/D/J/P/I/B/O/K/O/F/P/G/I/C/L/E/B/N/A/D/M/H/J/O/I/C/J/D/F/G/M/H/E/K/N/L/P/A/B/P/D/N/B/L/C/K/A/F/J/M/O/G/H/I/E/A/F/K/G/J/H/B/E/I/C/L/P/N/O/D/M/M/L/E/H/I/N/P/O/G/A/B/D/J/K/C/F/-1",
"A/G/E/F/B/K/L/N/O/I/D/M/H/J/C/P/K/N/O/J/E/C/G/D/H/L/P/B/A/I/F/M/M/B/C/H/I/J/A/P/N/F/E/G/L/O/K/D/L/D/P/I/H/O/M/F/K/C/A/J/G/B/N/E/G/C/N/K/P/I/F/L/E/M/B/H/D/A/J/O/H/E/J/L/D/N/K/C/P/O/I/A/B/M/G/F/B/O/M/A/J/G/H/E/D/K/L/F/C/P/I/N/D/I/F/P/O/M/B/A/G/J/N/C/E/L/H/K/I/M/K/G/N/H/C/B/A/P/O/E/F/D/L/J/C/J/L/N/K/D/O/G/M/B/F/I/P/E/A/H/F/H/A/E/L/P/I/M/J/D/K/N/O/C/B/G/O/P/D/B/A/F/E/J/C/H/G/L/N/K/M/I/N/L/G/D/C/E/J/H/I/A/M/O/K/F/P/B/E/K/H/C/F/B/P/I/L/G/J/D/M/N/O/A/J/A/B/O/M/L/D/K/F/N/H/P/I/G/E/C/P/F/I/M/G/A/N/O/B/E/C/K/J/H/D/L/-1",
"M/J/N/C/I/G/L/B/E/O/A/H/K/F/D/P/F/K/B/H/O/E/D/P/J/G/I/M/N/C/A/L/D/O/G/L/A/F/H/K/B/N/P/C/I/J/E/M/E/A/P/I/N/M/C/J/K/F/D/L/O/G/B/H/B/D/A/N/C/I/M/E/F/H/L/O/P/K/G/J/K/G/C/F/B/J/P/H/N/E/M/D/A/L/O/I/P/E/I/O/K/N/G/L/C/A/B/J/F/H/M/D/H/L/M/J/F/O/A/D/I/K/G/P/E/B/N/C/J/F/H/P/E/A/B/M/G/L/C/I/D/N/K/O/G/M/E/D/L/P/K/O/H/B/N/F/J/I/C/A/O/N/K/B/D/C/I/G/A/P/J/E/L/M/H/F/C/I/L/A/J/H/N/F/D/M/O/K/G/E/P/B/L/B/J/G/P/K/E/C/O/I/H/A/M/D/F/N/N/H/O/K/M/D/J/I/P/C/F/G/B/A/L/E/A/P/D/E/H/L/F/N/M/J/K/B/C/O/I/G/I/C/F/M/G/B/O/A/L/D/E/N/H/P/J/K/-1",
"A/O/K/L/D/G/N/E/M/C/H/B/I/J/F/P/D/I/P/N/O/H/F/K/E/G/J/L/B/C/A/M/F/G/H/C/I/J/M/B/O/P/A/D/E/L/N/K/E/M/B/J/C/L/P/A/N/K/I/F/D/O/H/G/B/N/J/G/H/D/L/O/I/E/K/M/A/F/P/C/P/H/I/A/G/M/B/C/D/L/F/O/J/K/E/N/L/K/C/M/J/N/E/F/A/H/P/G/O/B/I/D/O/D/F/E/A/I/K/P/B/J/N/C/G/H/M/L/H/C/E/D/B/K/J/G/P/N/L/I/M/A/O/F/J/F/M/K/E/P/O/N/C/D/B/A/H/G/L/I/N/P/L/O/F/A/I/H/G/M/E/K/C/D/B/J/G/B/A/I/M/C/D/L/H/F/O/J/P/N/K/E/M/A/G/P/L/B/H/J/K/I/D/N/F/E/C/O/K/J/O/H/N/E/C/M/F/B/G/P/L/I/D/A/I/E/N/F/P/O/G/D/L/A/C/H/K/M/J/B/C/L/D/B/K/F/A/I/J/O/M/E/N/P/G/H/-1",
"O/N/G/I/L/K/E/H/J/C/M/B/A/F/D/P/B/F/J/H/A/I/O/N/L/E/P/D/K/M/G/C/D/A/E/C/F/P/G/M/I/H/O/K/L/B/N/J/M/P/L/K/B/J/C/D/G/A/F/N/I/O/H/E/J/I/P/D/E/M/B/K/H/G/L/C/N/A/F/O/L/H/C/F/N/O/J/G/M/I/E/A/B/D/P/K/E/B/N/G/C/D/F/A/K/P/J/O/H/L/M/I/K/M/A/O/I/L/H/P/D/N/B/F/J/C/E/G/P/D/B/A/O/H/N/L/E/M/C/J/G/I/K/F/G/E/H/J/M/C/D/I/F/K/A/P/O/N/B/L/C/L/F/M/J/G/K/B/N/O/I/H/E/P/A/D/I/O/K/N/P/E/A/F/B/D/G/L/C/H/J/M/A/G/D/B/H/F/P/J/C/L/K/I/M/E/O/N/F/C/M/E/D/N/I/O/A/J/H/G/P/K/L/B/N/J/O/L/K/A/M/C/P/B/D/E/F/G/I/H/H/K/I/P/G/B/L/E/O/F/N/M/D/J/C/A/-1",
"O/F/C/K/M/L/I/D/G/H/N/E/A/J/B/P/L/M/A/I/F/H/J/C/P/D/K/B/N/G/O/E/D/E/G/P/N/B/O/A/M/C/J/L/I/K/F/H/H/B/N/J/E/G/K/P/A/O/F/I/M/L/C/D/N/J/B/H/O/A/E/K/F/G/I/D/L/P/M/C/K/L/M/C/G/I/P/B/N/A/O/H/D/F/E/J/E/P/D/F/H/C/N/J/L/K/B/M/G/I/A/O/A/I/O/G/D/M/L/F/E/P/C/J/B/N/H/K/C/A/E/D/J/O/M/G/K/I/H/N/P/B/L/F/B/H/F/N/L/P/D/E/C/M/A/G/K/O/J/I/J/K/I/L/A/F/C/H/O/B/D/P/E/M/N/G/G/O/P/M/K/N/B/I/J/E/L/F/H/C/D/A/P/N/K/E/I/D/A/O/B/F/M/C/J/H/G/L/M/G/J/O/C/K/H/L/I/N/E/A/F/D/P/B/F/C/H/A/B/J/G/N/D/L/P/K/O/E/I/M/I/D/L/B/P/E/F/M/H/J/G/O/C/A/K/N/-1",
"G/M/E/H/K/I/F/J/N/L/A/O/C/B/D/P/N/A/D/C/B/G/H/O/E/M/P/J/K/I/F/L/B/I/L/J/A/D/C/P/H/F/G/K/M/O/E/N/K/P/O/F/L/N/E/M/B/I/D/C/A/H/J/G/F/O/A/D/E/H/M/N/P/G/L/B/J/K/I/C/L/C/J/K/I/F/A/B/O/D/N/E/G/P/M/H/M/H/G/P/O/C/J/L/K/A/F/I/N/E/B/D/I/N/B/E/D/P/K/G/J/C/H/M/L/A/O/F/H/K/C/A/M/L/N/E/I/B/O/D/P/F/G/J/P/J/F/N/H/O/G/K/L/E/M/A/I/D/C/B/O/B/M/G/F/A/D/I/C/H/J/P/E/N/L/K/D/E/I/L/J/B/P/C/F/N/K/G/H/M/A/O/E/G/H/B/N/K/I/D/A/J/C/F/O/L/P/M/J/L/P/M/G/E/O/F/D/K/I/N/B/C/H/A/A/F/K/O/C/M/B/H/G/P/E/L/D/J/N/I/C/D/N/I/P/J/L/A/M/O/B/H/F/G/K/E/-1",
"L/C/O/D/F/B/G/J/I/K/N/E/A/H/M/P/P/F/K/E/O/A/L/H/G/B/M/J/N/D/I/C/I/M/H/G/D/E/C/N/L/F/P/A/J/O/K/B/N/J/B/A/K/M/P/I/O/C/D/H/E/L/F/G/A/G/M/F/B/J/H/D/C/O/K/I/P/N/E/L/E/I/D/C/N/G/A/M/P/L/B/F/O/K/J/H/B/K/L/H/P/I/F/O/J/G/E/N/C/A/D/M/J/O/P/N/E/L/K/C/H/D/A/M/I/B/G/F/K/H/J/L/M/C/E/G/F/N/I/D/B/P/A/O/C/A/E/P/L/O/J/K/M/H/G/B/F/I/N/D/F/B/N/I/H/P/D/A/K/E/C/O/M/G/L/J/M/D/G/O/I/F/N/B/A/J/L/P/H/E/C/K/H/L/A/B/G/D/M/E/N/P/F/C/K/J/O/I/O/N/I/K/A/H/B/F/D/M/J/L/G/C/P/E/D/E/C/M/J/K/I/P/B/A/O/G/L/F/H/N/G/P/F/J/C/N/O/L/E/I/H/K/D/M/B/A/-1",
"B/E/G/N/A/O/K/D/M/I/F/C/J/H/L/P/P/A/H/C/L/N/E/I/G/O/D/J/F/K/M/B/L/K/J/O/M/B/C/F/N/H/P/A/D/E/G/I/M/D/I/F/H/P/J/G/E/B/K/L/A/C/N/O/O/N/B/A/G/F/D/H/J/K/C/E/I/L/P/M/F/G/L/I/N/A/M/B/O/P/H/D/K/J/E/C/E/J/K/M/C/I/L/P/F/A/N/B/G/D/O/H/C/H/D/P/E/K/O/J/L/M/I/G/N/B/F/A/I/O/E/L/J/C/H/K/D/F/M/N/B/P/A/G/G/B/F/J/I/M/N/L/H/E/A/P/C/O/D/K/K/C/A/D/B/G/P/E/I/J/L/O/M/F/H/N/N/M/P/H/F/D/A/O/C/G/B/K/L/I/J/E/A/L/C/E/P/J/I/N/B/D/G/H/O/M/K/F/D/I/O/G/K/E/F/C/P/N/J/M/H/A/B/L/H/P/M/B/D/L/G/A/K/C/O/F/E/N/I/J/J/F/N/K/O/H/B/M/A/L/E/I/P/G/C/D/-1",
"E/C/L/H/B/J/A/D/K/N/F/O/I/G/M/P/I/G/P/O/F/N/L/M/J/C/D/A/H/B/E/K/K/F/A/J/I/C/P/H/G/B/E/M/D/L/N/O/M/B/N/D/E/G/K/O/H/L/I/P/F/J/C/A/H/M/F/L/D/B/C/A/O/K/G/J/N/P/I/E/N/K/D/G/M/P/H/I/C/F/B/E/A/O/J/L/C/J/O/P/L/F/G/E/I/M/A/N/K/D/H/B/A/I/B/E/O/K/J/N/L/H/P/D/G/C/F/M/D/L/I/N/H/M/F/G/A/E/J/B/P/K/O/C/P/O/H/C/A/E/D/K/F/G/L/I/J/M/B/N/G/E/K/B/N/O/I/J/M/P/C/H/L/A/D/F/F/A/J/M/P/L/B/C/D/O/N/K/E/I/G/H/L/N/C/A/J/D/E/B/P/I/O/F/M/H/K/G/B/H/G/I/C/A/M/F/N/J/K/L/O/E/P/D/J/P/E/F/K/H/O/L/B/D/M/G/C/N/A/I/O/D/M/K/G/I/N/P/E/A/H/C/B/F/L/J/-1",
"J/I/D/N/M/A/L/O/B/H/F/G/K/E/C/P/H/P/G/L/D/F/B/K/E/C/I/O/J/N/M/A/C/K/E/M/P/I/H/N/D/L/J/A/F/B/O/G/O/A/F/B/E/C/J/G/K/M/N/P/I/H/D/L/M/C/L/G/F/K/O/H/P/I/B/J/D/A/E/N/I/O/P/E/N/B/M/A/F/D/K/H/G/L/J/C/K/J/N/F/G/D/E/C/O/A/M/L/B/I/P/H/A/B/H/D/J/L/I/P/G/E/C/N/O/M/K/F/B/D/A/J/C/O/N/F/L/K/H/M/P/G/I/E/E/L/O/H/I/J/G/M/A/P/D/B/C/F/N/K/N/G/C/I/L/P/K/B/J/O/E/F/A/D/H/M/F/M/K/P/A/H/D/E/I/N/G/C/L/J/B/O/G/H/M/K/O/N/A/D/C/B/L/I/E/P/F/J/D/F/I/O/H/E/P/L/N/J/A/K/M/C/G/B/L/E/B/C/K/M/F/J/H/G/P/D/N/O/A/I/P/N/J/A/B/G/C/I/M/F/O/E/H/K/L/D/-1",
"I/F/M/C/N/D/G/E/K/J/L/B/A/H/O/P/L/H/A/G/K/B/J/P/N/D/O/F/M/C/E/I/B/E/K/O/A/I/H/F/C/G/M/P/L/D/N/J/N/J/P/D/M/C/L/O/H/A/I/E/G/K/B/F/K/A/H/B/G/F/D/N/J/C/E/L/O/I/P/M/P/I/C/M/O/L/B/K/A/H/N/D/F/G/J/E/E/G/L/F/J/H/M/I/B/P/K/O/C/A/D/N/O/N/D/J/C/P/E/A/M/I/F/G/B/L/H/K/A/M/B/E/I/G/C/H/D/K/J/N/P/O/F/L/C/L/F/P/D/M/N/B/G/O/A/I/J/E/K/H/H/O/N/K/F/A/P/J/L/E/C/M/I/B/G/D/J/D/G/I/E/K/O/L/F/B/P/H/N/M/A/C/D/K/I/H/B/J/F/M/P/L/G/A/E/N/C/O/F/B/O/N/P/E/A/C/I/M/D/K/H/J/L/G/G/C/E/L/H/N/I/D/O/F/B/J/K/P/M/A/M/P/J/A/L/O/K/G/E/N/H/C/D/F/I/B/-1",
"I/O/E/B/N/D/H/G/L/K/F/M/C/A/J/P/H/N/A/C/P/B/K/L/G/J/D/E/O/F/M/I/F/J/K/D/C/O/M/A/N/I/H/P/L/E/B/G/L/P/M/G/J/I/E/F/O/C/A/B/K/N/H/D/M/B/H/F/G/A/O/E/C/N/K/L/I/D/P/J/C/K/O/A/B/L/J/P/M/E/I/D/F/H/G/N/G/L/P/J/K/N/D/I/F/H/B/A/M/O/C/E/E/I/D/N/F/H/C/M/P/O/G/J/A/L/K/B/B/E/J/H/M/C/F/O/K/D/N/I/G/P/L/A/D/M/G/I/L/K/N/H/A/P/O/C/B/J/E/F/P/A/L/K/D/E/I/B/J/G/M/F/N/C/O/H/N/C/F/O/A/G/P/J/B/L/E/H/D/K/I/M/J/H/N/E/O/F/B/D/I/M/L/K/P/G/A/C/O/F/I/L/H/J/A/C/D/B/P/G/E/M/N/K/K/D/B/P/E/M/G/N/H/A/C/O/J/I/F/L/A/G/C/M/I/P/L/K/E/F/J/N/H/B/D/O/-1",
"F/E/N/M/A/I/H/O/G/K/C/D/L/B/J/P/I/A/K/C/G/L/J/B/H/O/P/F/D/N/M/E/H/B/L/D/M/N/F/P/J/I/E/A/G/C/O/K/G/J/O/P/C/K/D/E/N/M/L/B/H/A/I/F/E/H/I/N/D/O/G/A/B/F/J/C/K/L/P/M/K/D/C/A/B/P/I/F/M/L/H/G/J/O/E/N/B/P/M/J/K/E/C/L/A/N/I/O/F/D/H/G/L/G/F/O/N/J/M/H/D/P/K/E/C/I/B/A/D/C/E/I/F/B/A/M/K/H/O/P/N/G/L/J/M/K/G/B/P/H/E/N/C/J/A/L/O/F/D/I/O/F/J/L/I/D/K/G/E/B/M/N/P/H/A/C/A/N/P/H/L/C/O/J/F/G/D/I/E/M/K/B/P/M/A/K/J/G/L/C/I/D/F/H/B/E/N/O/J/O/D/G/E/A/N/K/L/C/B/M/I/P/F/H/N/L/H/E/O/F/B/I/P/A/G/K/M/J/C/D/C/I/B/F/H/M/P/D/O/E/N/J/A/K/G/L/-1",
"N/A/D/M/O/K/C/J/G/H/F/B/E/I/L/P/I/J/L/P/H/D/A/B/E/K/C/M/N/G/O/F/B/E/O/G/I/F/L/N/J/D/A/P/C/K/H/M/K/F/C/H/P/G/M/E/L/I/O/N/B/D/J/A/C/M/J/O/K/H/I/A/D/L/G/F/P/B/N/E/G/L/E/F/C/P/J/M/B/O/N/K/H/A/D/I/D/H/P/K/G/N/B/O/A/M/E/I/J/F/C/L/A/B/N/I/L/E/D/F/C/P/J/H/K/O/M/G/L/G/M/J/E/O/K/D/I/C/B/A/F/N/P/H/O/D/H/B/A/M/N/I/P/F/L/J/G/E/K/C/F/P/A/C/B/L/H/G/N/E/K/D/M/J/I/O/E/I/K/N/J/C/F/P/H/G/M/O/A/L/B/D/H/K/F/L/N/J/O/C/M/A/I/G/D/P/E/B/M/C/I/A/D/B/E/K/F/J/P/L/O/H/G/N/P/O/B/E/F/I/G/H/K/N/D/C/L/M/A/J/J/N/G/D/M/A/P/L/O/B/H/E/I/C/F/K/-1",
"D/J/G/B/K/C/O/E/F/L/M/H/N/I/A/P/C/E/P/K/G/N/J/B/I/O/D/A/L/M/H/F/N/I/F/L/A/H/M/P/J/E/K/G/C/O/B/D/H/O/A/M/L/I/F/D/C/N/P/B/G/E/K/J/B/N/C/H/E/L/A/O/K/I/J/D/F/P/G/M/J/G/L/E/N/F/D/K/M/P/A/O/I/H/C/B/K/D/I/F/M/P/G/C/B/H/N/E/J/A/L/O/M/A/O/P/I/B/H/J/L/G/C/F/E/K/D/N/P/L/E/G/F/O/B/I/N/A/H/M/K/D/J/C/F/B/K/J/H/E/C/N/O/D/I/L/M/G/P/A/A/M/D/C/P/J/L/G/E/F/B/K/H/N/O/I/I/H/N/O/D/M/K/A/P/C/G/J/B/F/E/L/O/K/J/A/C/D/E/L/H/M/F/N/P/B/I/G/G/P/M/N/B/K/I/H/A/J/O/C/D/L/F/E/E/C/B/I/O/G/N/F/D/K/L/P/A/J/M/H/L/F/H/D/J/A/P/M/G/B/E/I/O/C/N/K/-1",
"I/L/E/K/F/G/D/J/H/M/B/A/C/O/N/P/P/C/J/O/E/B/A/K/G/F/N/I/L/D/M/H/B/M/H/D/O/C/L/N/J/E/K/P/I/F/G/A/F/G/A/N/H/M/P/I/L/C/D/O/K/J/E/B/N/B/L/H/I/O/E/M/D/P/F/G/A/C/K/J/E/I/K/M/C/J/B/P/A/H/O/L/G/N/D/F/A/J/O/F/L/D/K/G/M/N/C/B/P/I/H/E/G/D/C/P/A/N/F/H/I/J/E/K/M/B/O/L/O/K/D/J/M/E/H/F/N/I/L/C/B/A/P/G/M/A/G/B/K/L/N/C/O/D/P/H/F/E/J/I/C/P/F/E/G/I/O/D/B/A/M/J/H/K/L/N/H/N/I/L/P/A/J/B/F/K/G/E/O/M/C/D/K/F/P/I/J/H/M/O/E/G/A/D/N/L/B/C/J/E/N/G/B/F/I/L/C/O/H/M/D/P/A/K/D/O/B/C/N/K/G/A/P/L/J/F/E/H/I/M/L/H/M/A/D/P/C/E/K/B/I/N/J/G/F/O/-1",
"N/A/F/D/I/H/E/M/J/C/B/O/K/L/G/P/H/K/G/I/F/D/N/C/L/A/E/P/M/B/J/O/B/O/P/J/G/A/L/K/F/N/M/H/E/I/D/C/M/E/L/C/O/B/J/P/I/D/K/G/A/N/F/H/O/H/I/F/C/G/A/L/K/J/D/B/P/E/M/N/A/D/E/M/N/P/H/O/G/L/F/I/B/C/K/J/J/P/N/B/K/M/F/E/H/O/C/A/I/G/L/D/G/C/K/L/B/I/D/J/P/M/N/E/F/O/H/A/I/F/O/N/D/J/P/H/C/K/L/M/G/A/E/B/E/M/D/G/A/L/C/B/O/H/P/J/N/F/I/K/C/L/H/A/E/F/K/N/B/I/G/D/J/P/O/M/K/B/J/P/M/O/I/G/E/F/A/N/H/D/C/L/L/N/B/K/J/E/O/F/A/G/H/C/D/M/P/I/P/I/M/H/L/K/B/A/D/E/O/F/C/J/N/G/D/G/A/E/H/C/M/I/N/P/J/L/O/K/B/F/F/J/C/O/P/N/G/D/M/B/I/K/L/H/A/E/-1",
"B/O/J/C/D/N/K/I/M/F/G/E/A/L/H/P/G/P/F/N/H/M/J/O/K/C/L/A/D/I/B/E/M/E/L/D/A/P/G/C/B/N/I/H/K/J/O/F/I/H/K/A/E/F/B/L/O/P/J/D/M/N/C/G/D/I/B/M/J/C/L/H/F/K/P/G/O/A/E/N/N/G/O/J/I/D/A/M/E/L/B/C/H/P/F/K/K/F/E/H/N/O/P/G/I/A/D/M/C/B/J/L/L/A/C/P/K/B/E/F/N/J/H/O/I/D/G/M/E/D/I/K/P/H/M/J/G/O/N/F/L/C/A/B/A/B/M/F/L/K/N/D/H/E/C/I/J/G/P/O/P/C/G/L/F/A/O/B/D/M/K/J/N/E/I/H/H/J/N/O/C/G/I/E/L/B/A/P/F/K/M/D/J/K/D/G/M/E/H/N/C/I/F/B/P/O/L/A/F/M/A/I/O/L/D/P/J/G/E/K/B/H/N/C/C/N/H/E/B/I/F/A/P/D/O/L/G/M/K/J/O/L/P/B/G/J/C/K/A/H/M/N/E/F/D/I/-1",
"N/F/H/C/B/I/L/E/A/D/K/J/O/M/G/P/B/L/O/J/D/F/G/C/E/N/P/M/K/H/A/I/G/M/I/A/O/J/P/K/F/B/C/H/E/D/N/L/E/D/P/K/A/H/M/N/O/L/I/G/F/B/J/C/A/E/D/N/M/O/K/I/L/C/G/P/J/F/B/H/L/K/B/I/E/D/J/F/H/M/O/A/G/P/C/N/M/O/J/P/L/G/C/H/B/F/N/I/D/K/E/A/C/G/F/H/P/N/A/B/K/J/D/E/L/I/M/O/K/P/L/D/J/M/B/O/I/G/F/C/A/N/H/E/H/B/N/O/K/L/F/P/J/A/E/D/C/G/I/M/I/A/C/M/H/E/D/G/P/O/L/N/B/J/F/K/F/J/G/E/I/C/N/A/M/H/B/K/P/O/L/D/D/C/K/B/G/P/I/M/N/E/J/L/H/A/O/F/P/N/A/G/F/B/E/D/C/I/H/O/M/L/K/J/O/I/M/L/C/K/H/J/G/P/A/F/N/E/D/B/J/H/E/F/N/A/O/L/D/K/M/B/I/C/P/G/-1",
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
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
var canvas = document.createElement("canvas");
var c = canvas.getContext("2d");
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
var img10d = new Image();
var img11d = new Image();
var img12d = new Image();
var img13d = new Image();
var img14d = new Image();
var img15d = new Image();
var img16d = new Image();
var img1c = new Image();
var img2c = new Image();
var img3c = new Image();
var img4c = new Image();
var img5c = new Image();
var img6c = new Image();
var img7c = new Image();
var img8c = new Image();
var img9c = new Image();
var img10c = new Image();
var img11c = new Image();
var img12c = new Image();
var img13c = new Image();
var img14c = new Image();
var img15c = new Image();
var img16c = new Image();



var img_t = "";
if (localStorage.getItem("save_data") != null)
{
	save_data = localStorage.getItem("save_data");
}
if (localStorage.getItem("question_number4hard") != null)
{
	question_number = parseInt(localStorage.getItem("question_number4hard"));
}
if (question_number <= 0 || question_number > 50)
{
	question_number = 1;
}
if (question_number <= 20)
{
	symbol = "p";
}
else if (question_number <= 30)
{
	symbol = "q";
}
else if (question_number <= 40)
{
	symbol = "s";
}
else if (question_number <= 50)
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
img10d.src = symbol + "10.png? raw=true";
img11d.src = symbol + "11.png? raw=true";
img12d.src = symbol + "12.png? raw=true";
img13d.src = symbol + "13.png? raw=true";
img14d.src = symbol + "14.png? raw=true";
img15d.src = symbol + "15.png? raw=true";
img16d.src = symbol + "16.png? raw=true";
img1c.src = symbol + "1c.png? raw=true";
img2c.src = symbol + "2c.png? raw=true";
img3c.src = symbol + "3c.png? raw=true";
img4c.src = symbol + "4c.png? raw=true";
img5c.src = symbol + "5c.png? raw=true";
img6c.src = symbol + "6c.png? raw=true";
img7c.src = symbol + "7c.png? raw=true";
img8c.src = symbol + "8c.png? raw=true";
img9c.src = symbol + "9c.png? raw=true";
img10c.src = symbol + "10c.png? raw=true";
img11c.src = symbol + "11c.png? raw=true";
img12c.src = symbol + "12c.png? raw=true";
img13c.src = symbol + "13c.png? raw=true";
img14c.src = symbol + "14c.png? raw=true";
img15c.src = symbol + "15c.png? raw=true";
img16c.src = symbol + "16c.png? raw=true";





function table_number_select()
{
	for (let x = 1; x <= 16; x ++)
	{
		for (let y = 1; y <= 16; y ++)
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
		for (let x = 1; x <= 16; x ++)
		{
			number_array[(x - 1)][parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
			number_array[parseInt(document.getElementById(event.target.id).id.substr(10, 2)) - 1][(x - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
		}
		switch (parseInt(document.getElementById(event.target.id).id.substr(10, 2)) - 1)
		{
			case 0:
			case 1:
			case 2:
			case 3:
				switch (parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1)
				{
					case 0:
					case 1:
					case 2:
					case 3:
						for (let x = 1; x <= 4; x ++)
						{
							for (let y = 1; y <= 4; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 4:
					case 5:
					case 6:
					case 7:
						for (let x = 1; x <= 4; x ++)
						{
							for (let y = 5; y <= 8; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 8:
					case 9:
					case 10:
					case 11:
						for (let x = 1; x <= 4; x ++)
						{
							for (let y = 9; y <= 12; y ++)
							{
								number_array[(x - 1)][(y -1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 12:
					case 13:
					case 14:
					case 15:
						for (let x = 1; x <= 4; x ++)
						{
							for (let y = 13; y <= 16; y ++)
							{
								number_array[(x - 1)][(y -1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
				}
				break;
			case 4:
			case 5:
			case 6:
			case 7:
				switch (parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1)
				{
					case 0:
					case 1:
					case 2:
					case 3:
						for (let x = 5; x <= 8; x ++)
						{
							for (let y = 1; y <= 4; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 4:
					case 5:
					case 6:
					case 7:
						for (let x = 5; x <= 8; x ++)
						{
							for (let y = 5; y <= 8; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 8:
					case 9:
					case 10:
					case 11:
						for (let x = 5; x <= 8; x ++)
						{
							for (let y = 9; y <= 12; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 12:
					case 13:
					case 14:
					case 15:
						for (let x = 5; x <= 8; x ++)
						{
							for (let y = 13; y <= 16; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
				}
				break;
			case 8:
			case 9:
			case 10:
			case 11:
				switch (parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1)
				{
					case 0:
					case 1:
					case 2:
					case 3:
						for (let x = 9; x <= 12; x ++)
						{
							for (let y = 1; y <= 4; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 4:
					case 5:
					case 6:
					case 7:
						for (let x = 9; x <= 12; x ++)
						{
							for (let y = 5; y <= 8; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 8:
					case 9:
					case 10:
					case 11:
						for (let x = 9; x <= 12; x ++)
						{
							for (let y = 9; y <= 12; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 12:
					case 13:
					case 14:
					case 15:
						for (let x = 9; x <= 12; x ++)
						{
							for (let y = 13; y <= 16; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;

				}
				break;
			case 12:
			case 13:
			case 14:
			case 15:
				switch (parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1)
				{
					case 0:
					case 1:
					case 2:
					case 3:
						for (let x = 13; x <= 16; x ++)
						{
							for (let y = 1; y <= 4; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 4:
					case 5:
					case 6:
					case 7:
						for (let x = 13; x <= 16; x ++)
						{
							for (let y = 5; y <= 8; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 8:
					case 9:
					case 10:
					case 11:
						for (let x = 13; x <= 16; x ++)
						{
							for (let y = 9; y <= 12; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
					case 12:
					case 13:
					case 14:
					case 15:
						for (let x = 13; x <= 16; x ++)
						{
							for (let y = 13; y <= 16; y ++)
							{
								number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
							}
						}
						break;
				}
				break;
		}
		for (let x = 1; x <= 16; x ++)
		{
			for (let y = 1; y <= 16; y ++)
			{
				if (table_array[parseInt(document.getElementById(event.target.id).id.substr(10, 2)) - 1][parseInt(document.getElementById(event.target.id).id.substr(13, 2)) - 1] == table_array[(x - 1)][(y - 1)] && table_array[(x - 1)][(y - 1)] != "abcdefghijklmnop")
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
				table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
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
			else if (document.getElementById(event.target.id) == table_test00_10_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("J") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("j", "J");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("J", "j");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_11_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("K") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("k", "K");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("K", "k");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_12_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("L") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("l", "L");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("L", "l");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_13_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("M") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("m", "M");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("M", "m");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_14_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("N") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("n", "N");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("N", "n");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_15_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("O") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("o", "O");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("O", "o");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_16_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].indexOf("P") == -1)
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("p", "P");
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1].replace("P", "p");
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_0A_image)
			{
				table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";		
			}
		}
		else
		{
			if (document.getElementById(event.target.id) == table_test00_01_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "A")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
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
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
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
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
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
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
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
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
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
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
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
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
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
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
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
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "I";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_10_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "J")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "J";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_11_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "K")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "K";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_12_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "L")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "L";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_13_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "M")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "M";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_14_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "N")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "N";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_15_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "O")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "O";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_16_image)
			{
				if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == "P")
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
				}
				else
				{
					table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "P";
				}
			}
			else if (document.getElementById(event.target.id) == table_test00_0A_image)
			{
				table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] = "abcdefghijklmnop";
			}
		}
	}
	if (document.getElementById(event.target.id) == table_test00_0B_image)
	{
		image_sub();
	}
	table_apply();

	for (let x = 1; x <= 16; x ++)
	{
		for (let y = 1; y <= 16; y ++)
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
	for (let x = 1; x <= 16; x ++)
	{
		for (let y = 1; y <= 16; y ++)
		{
			if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == table_array[x - 1][y - 1] && table_array[(x - 1)][(y - 1)] != "abcdefghijklmnop")
			{
				number_array[(x - 1)][(y - 1)].style.backgroundColor = "rgba(255, 0, 255, 0.1)";
			}
		}
	}	



}

function table_apply()
{
	for (let x = 1; x <= 16; x ++)
	{
		for (let y = 1; y <= 16; y ++)
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
		question_number = 50;
	}
	localStorage.setItem("question_number4hard", question_number);
	window.location.reload();
}

function next_question()
{
	if (question_number < 50)
	{
		question_number = question_number + 1;
	}
	else
	{
		question_number = 1;
	}
	localStorage.setItem("question_number4hard", question_number);
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
		table_array[parseInt(input_address.substr(10, 2)) - 1][parseInt(input_address.substr(13, 2)) - 1] = answer_data[question_number - 1].split("/")[(parseInt(input_address.substr(10, 2) - 1) * 16) + parseInt(input_address.substr(13, 2)) - 1];
		table_apply();
	for (let x = 1; x <= 16; x ++)
	{
		for (let y = 1; y <= 16; y ++)
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
	for (let x = 1; x <= 16; x ++)
	{
		for (let y = 1; y <= 16; y ++)
		{
			if (table_array[parseInt(document.getElementById(input_address).id.substr(10, 2)) - 1][parseInt(document.getElementById(input_address).id.substr(13, 2)) - 1] == table_array[x - 1][y - 1] && table_array[(x - 1)][(y - 1)] != "abcdefghijklmnop")
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
	for (let x = 1; x <= 16; x ++)
	{
		for (let y = 1; y <= 16; y ++)
		{
			if (table_array[(x - 1)][(y - 1)].length > 2)
			{
				check_judgement = 2;
			}
			else if (table_array[(x - 1)][(y - 1)] != answer_data[question_number - 1].split("/")[((x - 1) * 16) + (y - 1)])
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
	for (let x = 1; x <= 16; x ++)
	{
		for (let y = 1; y <= 16; y ++)
		{
			table_array[(x - 1)][(y - 1)] = question_array[((x - 1) * 16) + (y - 1)];
		}
	}

	for (let x = 1; x <= 16; x ++)
	{
		for (let y = 1; y <= 16; y ++)
		{
			if (table_array[(x - 1)][(y - 1)] == "abcdefghijklmnop")
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
			for (let y = 1; y <= 256 + 1; y ++)
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
		for (let x = 1; x <= 16; x ++)
		{
			for (let y = 1; y <= 16; y ++)
			{
				table_array[(x - 1)][(y - 1)] = save_array[((x - 1) * 16) + (y - 1)];
			}
		}
		for (let x = 1; x <= 16; x ++)
		{
			for (let y = 1; y <= 16; y ++)
			{
				image_main(x, y);
				if (table_array[(x - 1)][(y - 1)] != "abcdefghijklmnop")
				{
					image_array[(x - 1)][(y - 1)].addEventListener("click", table_number_select);
				}
			}
		}
		time = parseInt(save_data_string.split("/")[answer_data[question_number - 1].split("/").length - 1]) - 1;
		timer();
		image_sub();
		for (let x = 1; x <= 16; x ++)
		{
			for (let y = 1; y <= 16; y ++)
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
			for (let y = 0; y <= 256; y ++)
			{
				save_data_string = save_data_string + save_data_temp[x + y] + "/";
			}
			save_data_string = save_data_string + save_data_temp[x + 256 + 1];
			x = -2;
		}
		x = x + 1;
	}
	if (save_data_string != "")
	{
		save_data = save_data.replace("/" + save_data_string, "");
	}
	save_data_string = question_number.toString().padStart(3, "0") + "/";
	for (let x = 1; x <= 16; x ++)
	{
		for (let y = 1; y <= 16; y ++)
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

	for (let x = 1; x <= 16; x ++)
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
			case 10:
				c = document.getElementById("table_test00_10_image").getContext("2d");
				c.clearRect(0, 0, img10c.width, img10c.height);
				c.drawImage(img10d, 0, 0, img10d.width, img10d.height);
				break;
			case 11:
				c = document.getElementById("table_test00_11_image").getContext("2d");
				c.clearRect(0, 0, img11c.width, img11c.height);
				c.drawImage(img11d, 0, 0, img11d.width, img11d.height);
				break;
			case 12:
				c = document.getElementById("table_test00_12_image").getContext("2d");
				c.clearRect(0, 0, img12c.width, img12c.height);
				c.drawImage(img12d, 0, 0, img12d.width, img12d.height);
				break;
			case 13:
				c = document.getElementById("table_test00_13_image").getContext("2d");
				c.clearRect(0, 0, img13c.width, img13c.height);
				c.drawImage(img13d, 0, 0, img1d.width, img13d.height);
				break;
			case 14:
				c = document.getElementById("table_test00_14_image").getContext("2d");
				c.clearRect(0, 0, img14c.width, img14c.height);
				c.drawImage(img14d, 0, 0, img14d.width, img14d.height);
				break;
			case 15:
				c = document.getElementById("table_test00_15_image").getContext("2d");
				c.clearRect(0, 0, img15c.width, img15c.height);
				c.drawImage(img15d, 0, 0, img15d.width, img15d.height);
				break;
			case 16:
				c = document.getElementById("table_test00_16_image").getContext("2d");
				c.clearRect(0, 0, img16c.width, img16c.height);
				c.drawImage(img16d, 0, 0, img16d.width, img16d.height);
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
			c = document.getElementById("table_test00_0S_image").getContext("2d");
			c.clearRect(0, 0, imgattention_none.width, imgattention_none.height);
			c.drawImage(imgattention_none, 0, 0, imgattention_none.width, imgattention_none.height);
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
		if (table_array[(x - 1)][(y - 1)].length == 16)
		{
			switch (table_array[(x - 1)][(y - 1)].substr((z - 1), 1))
			{
				case "A":
					c.drawImage(img1c, img1c.width * (0 / 4), img1c.height * (0 / 4), img1c.width * (1 / 4), img1c.height * (1 / 4));
					break;
				case "B":
					c.drawImage(img2c, img2c.width * (1 / 4), img2c.height * (0 / 4), img2c.width * (1 / 4), img2c.height * (1 / 4));
					break;
				case "C":
					c.drawImage(img3c, img3c.width * (2 / 4), img3c.height * (0 / 4), img3c.width * (1 / 4), img3c.height * (1 / 4));
					break;
				case "D":
					c.drawImage(img4c, img4c.width * (3 / 4), img4c.height * (0 / 4), img4c.width * (1 / 4), img4c.height * (1 / 4));
					break;
				case "E":
					c.drawImage(img5c, img5c.width * (0 / 4), img5c.height * (1 / 4), img5c.width * (1 / 4), img5c.height * (1 / 4));
					break;
				case "F":
					c.drawImage(img6c, img6c.width * (1 / 4), img6c.height * (1 / 4), img6c.width * (1 / 4), img6c.height * (1 / 4));
					break;
				case "G":
					c.drawImage(img7c, img7c.width * (2 / 4), img7c.height * (1 / 4), img7c.width * (1 / 4), img7c.height * (1 / 4));
					break;
				case "H":
					c.drawImage(img8c, img8c.width * (3 / 4), img8c.height * (1 / 4), img8c.width * (1 / 4), img8c.height * (1 / 4));
					break;
				case "I":
					c.drawImage(img9c, img9c.width * (0 / 4), img9c.height * (2 / 4), img9c.width * (1 / 4), img9c.height * (1 / 4));
					break;
				case "J":
					c.drawImage(img10c, img10c.width * (1 / 4), img10c.height * (2 / 4), img10c.width * (1 / 4), img10c.height * (1 / 4));
					break;
				case "K":
					c.drawImage(img11c, img11c.width * (2 / 4), img11c.height * (2 / 4), img11c.width * (1 / 4), img11c.height * (1 / 4));
					break;
				case "L":
					c.drawImage(img12c, img12c.width * (3 / 4), img12c.height * (2 / 4), img12c.width * (1 / 4), img12c.height * (1 / 4));
					break;
				case "M":
					c.drawImage(img13c, img13c.width * (0 / 4), img13c.height * (3 / 4), img13c.width * (1 / 4), img13c.height * (1 / 4));
					break;
				case "N":
					c.drawImage(img14c, img14c.width * (1 / 4), img14c.height * (3 / 4), img14c.width * (1 / 4), img14c.height * (1 / 4));
					break;
				case "O":
					c.drawImage(img15c, img15c.width * (2 / 4), img15c.height * (3 / 4), img15c.width * (1 / 4), img15c.height * (1 / 4));
					break;
				case "P":
					c.drawImage(img16c, img16c.width * (3 / 4), img16c.height * (3 / 4), img16c.width * (1 / 4), img16c.height * (1 / 4));
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
				case "J":
					c.drawImage(img10d, 0, 0, img10d.width, img10d.height);
					break;
				case "K":
					c.drawImage(img11d, 0, 0, img11d.width, img11d.height);
					break;
				case "L":
					c.drawImage(img12d, 0, 0, img12d.width, img12d.height);
					break;
				case "M":
					c.drawImage(img13d, 0, 0, img13d.width, img13d.height);
					break;
				case "N":
					c.drawImage(img14d, 0, 0, img14d.width, img14d.height);
					break;
				case "O":
					c.drawImage(img15d, 0, 0, img15d.width, img15d.height);
					break;
				case "P":
					c.drawImage(img16d, 0, 0, img16d.width, img16d.height);
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
table_test00_10_image.addEventListener("click", table_number_input);
table_test00_11_image.addEventListener("click", table_number_input);
table_test00_12_image.addEventListener("click", table_number_input);
table_test00_13_image.addEventListener("click", table_number_input);
table_test00_14_image.addEventListener("click", table_number_input);
table_test00_15_image.addEventListener("click", table_number_input);
table_test00_16_image.addEventListener("click", table_number_input);
table_test00_0A_image.addEventListener("click", table_number_input);
table_test00_0B_image.addEventListener("click", table_number_input);
table_test00_0M_image.addEventListener("click", load);
table_test00_0N_image.addEventListener("click", save);
table_test00_0O_image.addEventListener("click", previous_question);
table_test00_0P_image.addEventListener("click", next_question);
table_test00_0Q_image.addEventListener("click", hint);
table_test00_0R_image.addEventListener("click", check);


