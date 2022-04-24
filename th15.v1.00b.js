{
	"binhacks": {
	"Global_var_chapter_retry_counter": {
		"addr": "0x42ef0a",
		"expected": "A1 F8734E00",
		"code": "A1 B8754E00",
		},
	"Escaping_BossShow":{
		"addr": "0x438780",
		"code": "E9 75530800 90 90 90 90",
		},
	"Changing_loaded_slot_in_memory_for_Sanae": {
		"addr": "0x4BDAEE",
		"code": "C705 98444E00 03000000\
// EB 14\
// 803D 04744E00 02\
// 75 19\
// 90\
// C705 98444E00 04000000\
// 8B4CC2 50\
// A1 809A4E00\
// E9 6DACF7FF\
// 803D 04744E00 00\
// 75 C9\
// EB DD\
//",
		},
	"EscapingSnakesColor": {
		"addr": "0x004095B0",
		"code": "E9 5A490B00 <nop>"
		},
	"NewCodeSnakesColor": {
		"addr": "0x4BDF0F",
		"code": "C706 000070FF\
83FA 08\
0F8D A8B6F4FF\
8ACA\
0C FF\
90\
C0E1 05\
2AC1\
8846 01\
E9 96B6F4FF\
90\
",
		},
    }
}