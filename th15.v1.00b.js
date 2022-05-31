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