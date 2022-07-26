{
  "binhacks": {
    "Global_var_chapter_retry_counter": {
      "addr": 0x42EC06,
      "code": "\
A1 <0x4E75B8> \
C9 \
C2 0400 \
<int3:22> \
"
    },
    "Escaping_BossShow": {
      "addr": 0x438780,
      "code": "\
E9 [codecave:Changing_loaded_slot_in_memory_for_Sanae] \
<int3:4> \
"
    },
    "EscapingSnakesColor": {
      "addr": 0x4095AC,
      "code": "\
<nop:4> \
E9 [codecave:NewCodeSnakesColor] \
<int3:17> \
"
    },
	"Escaping_MusicBoss_msg": {
      "addr": 0x438F93,
      "code": "E9 [codecave:ChangeBossMusic]"
    },
	"FuncSet4_better": {
      "addr": 0x004319AD,
      "code": "C7 05 C0 F0 4D 00 05 00 00 00 F3 0F 10 0D C0 F0 4D 00 F3 0F 10 81 9C 0C 00 00 F3 0F 10 C1 F3 0F 11 81 9C 0C 00 00\
<nop:30>"
    },
	"FuncSet4_F0_fix": {
      "addr": 0x004318FA,
      "code": "F3:0F10AB 9C020000"
	}
  },
  "codecaves": {
    "Changing_loaded_slot_in_memory_for_Sanae": {
      "access": "re",
      "code": "\
8B0D <0x4E7404> \
83E1 FD \
83F9 01 \
B9 03000000 \
83D1 00 \
890D <0x4E4498> \
8B4CC2 50 \
A1 <0x4E9A80> \
E9 [0x438789] \
"
    },
    "NewCodeSnakesColor": {
      "access": "re",
      "code": "\
C706 0000FFFF \
0C 5F \
C0E1 05 \
80FA 08 \
0F8D [0x4095C6] \
8ACA \
2AC1 \
8846 01 \
E9 [0x4095C6] \
"
    },
    "ChangeBossMusic": {
	  "access": "re",
      "code": "\
A1 <0x4E9BD8> \
813D <0x4E9BD8> 48444E00\
0F85 [0x438F98] \
803D <0x4E7404> 00 \
74 0E \
803D <0x4E7404> 02 \
74 05 \
E9 [0x438F98] \
C705 <0x520328> 5F39302E \
E9 [0x438F98] \
90 \
"
    }
  }
}
// "codecaves": {
    // "Changing_loaded_slot_in_memory_for_Sanae": {
      // "access": "re",
      // "code": "803D 04744E00 02\
74 16\
803D 04744E00 00\
74 0D\
C705 98444E00 03000000\
EB 0B\
90\
C705 98444E00 04000000\
8B4CC2 50\
A1 809A4E00\
E9 [0x438789]",
    // },