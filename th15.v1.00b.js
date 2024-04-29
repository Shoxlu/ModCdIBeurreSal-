{
    options: {
        pobh_const_0: {
            type: "s",
            val: "th15/icone.png",
        },
        user32_dll_str: {
            type: "s",
            val: "user32.dll",
        },
        MessageBoxA_str: {
            type: "s",
            val: "MessageBoxA",
        },
        MessageBoxW_str: {
            type: "s",
            val: "MessageBoxW",
        },
        GetWindow_str: {
            type: "s",
            val: "GetWindow",
        },
        SendMessageA_str: {
            type: "s",
            val: "SendMessageA",
        },
        LoadImageA_str: {
            type: "s",
            val: "LoadImageA",
        },
        CreateIconFromResource_str: {
            type: "s",
            val: "CreateIconFromResource",
        },
        kernel32_dll_str: {
            type: "s",
            val: "kernel32.dll",
        },
        AllocConsole_str: {
            type: "s",
            val: "AllocConsole",
        },
        GetModuleHandleA_str: {
            type: "s",
            val: "GetModuleHandleA",
        },
        GetLastError_str: {
            type: "s",
            val: "GetLastError",
        },
        ucrtbase_dll_str: {
            type: "s",
            val: "ucrtbase.dll",
        },
        __stdio_common_vfprintf_str: {
            type: "s",
            val: "__stdio_common_vfprintf",
        },
        freopen_str: {
            type: "s",
            val: "freopen",
        },
        __acrt_iob_func_str: {
            type: "s",
            val: "__acrt_iob_func",
        },
        __stdio_common_vfscanf_str: {
            type: "s",
            val: "__stdio_common_vfscanf",
        },
        strtol_str: {
            type: "s",
            val: "strtol",
        },
        fgets_str: {
            type: "s",
            val: "fgets",
        },
        _invalid_parameter_noinfo_noreturn_str: {
            type: "s",
            val: "_invalid_parameter_noinfo_noreturn",
        },
        _invoke_watson_str: {
            type: "s",
            val: "_invoke_watson",
        },
        free_str: {
            type: "s",
            val: "free",
        },
        malloc_str: {
            type: "s",
            val: "malloc",
        },
        _wcsicmp_str: {
            type: "s",
            val: "_wcsicmp",
        },
        strncmp_str: {
            type: "s",
            val: "strncmp",
        },
        puts_str: {
            type: "s",
            val: "puts",
        },
        pobh_name_str: {
            type: "s",
            val: "pobh",
        },
        LoadLibraryA_str: {
            type: "s",
            val: "LoadLibraryA",
        },
        dll_load_failed_str: {
            type: "s",
            val: "Failed to load DLL %s (code: 0x%p)",
        },
        import_failed_str: {
            type: "s",
            val: "Failed to load import %s (code: 0x%p)",
        },
    },
    codecaves: {
        Changing_loaded_slot_in_memory_for_Sanae: {
            access: "re",
            code: "8B0D <0x4E7404> 83E1 FD 83F9 01 B9 03000000 83D1 00 890D <0x4E4498> 8B4CC2 50 A1 <0x4E9A80> E9 [0x438789] ",
        },
        NewCodeSnakesColor: {
            access: "re",
            code: "C706 0000FFFF 0C 5F C0E1 05 80FA 08 0F8D [0x4095C6] 8ACA 2AC1 8846 01 E9 [0x4095C6] ",
        },
        ChangeBossMusic: {
            access: "re",
            code: "A1 <0x4E9BD8> 813D <0x4E9BD8> 48444E000F85 [0x438F98] 803D <0x4E7404> 00 74 0E 803D <0x4E7404> 02 74 05 E9 [0x438F98] C705 <0x520328> 5F39302E E9 [0x438F98] 90 ",
        },
        change_ecl_ins_jump_table_location: {
            access: "re",
            code: "99 92 42 00 A5 92 42 00 50 93 42 00 0E 9A 42 00  FF 96 42 00 7D 98 42 00 8A 92 42 00 6B 9B 42 00  B2 97 42 00 C2 98 42 00 17 9C 42 00 12 9D 42 00  F7 9A 42 00 BC 93 42 00 5C 93 42 00 97 95 42 00  E1 93 42 00 0B DB 42 00 F4 99 42 00 C9 95 42 00  67 9E 42 00 A2 9F 42 00 C1 A3 42 00 9B A4 42 00   92 AA 42 00 87 AB 42 00 8F B2 42 00 A1 B1 42 00    C9 B1 42 00 22 9F 42 00 50 AD 42 00 C5 AD 42 00     F6 AE 42 00 BA 92 42 00 6C A2 42 00 43 9D 42 00    F1 B1 42 00 02 B2 42 00 4C A1 42 00 34 A7 42 00   8F A7 42 00 56 A9 42 00 94 A9 42 00 84 B6 42 00    C8 B6 42 00 C8 B7 42 00 02 B8 42 00 13 B2 42 00    66 B2 42 00 42 B8 42 00 5A B8 42 00 7A B8 42 00   AD B8 42 00 D0 B8 42 00 E4 B8 42 00 2D B9 42 00    29 CA 42 00 35 C7 42 00 92 B9 42 00 2C C8 42 00    45 C8 42 00 77 C8 42 00 A5 C8 42 00 CC C8 42 00    E0 C7 42 00 1B C9 42 00 5A CA 42 00 94 D4 42 00  9B C8 42 00 75 B2 42 00 A1 B5 42 00 BA D4 42 00   00 D5 42 00 7C D5 42 00 E0 D5 42 00 20 D6 42 00    93 D6 42 00 E4 B9 42 00 65 BA 42 00 DA D6 42 00     AC B9 42 00 6B CA 42 00 79 CA 42 00 97 CA 42 00    F4 D6 42 00 FE D6 42 00 5F D7 42 00 CD D7 42 00   CA D9 42 00 EF D9 42 00 C6 B9 42 00 03 93 42 00    18 93 42 00 BF 95 42 00 03 DA 42 00 FE C7 42 00    0E D9 42 00 F9 C8 42 00 45 D7 42 00 79 DB 42 00    0C 94 42 00 BC B8 42 00 7A B7 42 00 9C B7 42 00    B2 B7 42 00 C8 93 42 00 83 CA 42 00 3B CA 42 00  EF B6 42 00 45 B7 42 00 DA B9 42 00 FA BA 42 00   60 BC 42 00 49 BD 42 00 83 BD 42 00 B9 BE 42 00    F7 BE 42 00 35 BF 42 00 A3 C3 42 00 D0 C3 42 00    0A C4 42 00 18 C8 42 00 C0 BB 42 00 89 D3 42 00    FE D3 42 00 6A C0 42 00 CE C0 42 00 51 C1 42 00     14 C2 42 00 6F C2 42 00 E9 C2 42 00 75 D7 42 00    71 BF 42 00 E5 BF 42 00 B8 BD 42 00 1E BE 42 00     4C BE 42 00 46 D8 42 00 FA D8 42 00 DD 92 42 00      EB B5 42 00 35 B6 42 00 50 B6 42 00 30 D4 42 00     62 D4 42 00 6B B6 42 00 2D 93 42 00 10 B6 42 00     2D C6 42 00 07 C6 42 00 69 C6 42 00 CB C6 42 00     B9 CA 42 00 90 CC 42 00 F6 D1 42 00 4D D2 42 00      9E D2 42 00 CB D2 42 00 F8 D2 42 00 25 D3 42 00    AC D1 42 00 0F D0 42 00 BB D3 42 00 89 CE 42 00    55 D3 42 00 D4 DA 42 00 23 DA 42 00 5B DA 42 00    57 DB 42 00 68 DB 42 00 A7 DB 42 00 A7 DB 42 00  A7 DB 42 00 A7 DB 42 00  <codecave:change_bossmusic_ecl_ins> A7 DB 42 00",
        },
        change_ecl_ins_jump_table_location2: {
            access: "re",
            code: "00 00 01 02    00 00 03 04 05 06 06 06 06 07 08 09 0A 0B 0C 0D     0E 00 0F 10 11 0D 0D 0D 0D 0D 0D 0D 0D 0D 12 0D      0D 13 AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      14 15 14 15 16 17 16 17 18 19 18 19 1A 1A 1B 1C      1D 1D 1E 1E 1F 20 1F 20 21 22 22 23 16 17 16 17       24 25 26 26 15 15 26 26 27 28 27 28 29 2A 29 2A    AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA     AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA 2B 2C 2D 2E 2F 30 31 32 33 34 35 36     37 38 39 3A 3B 3C 3D 3E 3F 40 41 42 43 44 45 46    41 47 48 49 4A 4B 4C 4D 4E 41 41 41 4F 50 51 52     53 54 55 56 57 58 59 5A 5B 5C 5D 5E 5F 60 61 62    63 64 65 66 67 68 69 6A 6B 6C 6D 6E AA AA AA AA    AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA     AA AA AA AA AA AA AA AA 6F 70 71 72 73 74 75 76     77 78 78 78 78 79 7A 7B 7C 7D 7E 7F 80 81 82 83     84 85 86 87 88 89 8A 8B 8C 8D 8E 8F 90 91 92 93      94 95 AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA 96 97 98 99      9A 9B 9C 9D 9E 9F A0 A1 A2 A3 A4 AA AA AA AA AA     AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      A5 A6 A7 AA AA AA AA AA AA AA AA AA AA AA AA AA    AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA     AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA      AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA    AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA  AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA  AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA AA  AA AA AA AA AA AA AA AA AA A8 A9 AA AA AA AA AE AA",
        },
        change_bossmusic_ecl_ins: {
            access: "re",
            code: "8B46 14 A3 <0x520329> E9 [0x42DBA7]",
        },
        "pobh.text0": {
            access: "rx",
            code: "5589e55dc366662e0f1f8400000000005589e55dc366662e0f1f8400000000005589e55dc366662e0f1f8400000000005589e583ec1c8b4508c745fc000000008b4d088d55fc31c0c7042400000000e8[0x402DB0]83ec048945f88b45fc8b4df8890c2489442404c744240801000000c744240c00000300ff15(<codecave:pobh_imports>+0x14)83ec108945f48b45f8890424ff15(<codecave:pobh_imports>+0x44)8b45f483c41c5dc3660f1f8400000000005589e583ec1c8d05<option:pobh_const_0>890424e8([codecave:pobh.text0]+0x30)8945fc837dfc000f84de0000008b45fc8b0d<0x519bb0>31d2890c24c744240480000000c7442408000000008944240cff15(<codecave:pobh_imports>+0xc)83ec108b45fc8b0d<0x519bb0>890c24c744240480000000c7442408010000008944240cff15(<codecave:pobh_imports>+0xc)83ec108b45fc8945f4a1<0x519bb0>890424c744240404000000ff15(<codecave:pobh_imports>+0x8)83ec0889c18b45f431d2890c24c744240480000000c7442408000000008944240cff15(<codecave:pobh_imports>+0xc)83ec108b45fc8945f8a1<0x519bb0>890424c744240404000000ff15(<codecave:pobh_imports>+0x8)83ec0889c18b45f8890c24c744240480000000c7442408010000008944240cff15(<codecave:pobh_imports>+0xc)83ec1031c083c41c5dc3",
        },
        "pobh.CRT$XCU4": {
            access: "r",
            code: "<codecave:pobh.text0>",
        },
        "pobh.CRT$XTX5": {
            access: "r",
            code: "(<codecave:pobh.text0>+0x10)",
        },
        pobh_patch_init: {
            access: "rx",
            code: "555357565068<option:kernel32_dll_str>e8[th_GetModuleHandleA]68<option:LoadLibraryA_str>50e8[th_GetProcAddress]89042431edbb<codecave:pobh_dlls>8b35<codecave:pobh_dlls>660f1f44000056e8[th_GetModuleHandleA]89c785c0750b56ff54240489c785c0743c8b730439f5741f6690ff34ad<codecave:pobh_import_names>57e8[th_GetProcAddress]85c0742b8904ad<codecave:pobh_imports>4539ee75e38b730883c30885f675b983c4045e5f5b5de92c000000505668<option:dll_load_failed_str>eb0d50ff34ad<codecave:pobh_import_names>68<option:import_failed_str>e8[th_GetLastError]894424086a1068<option:pobh_name_str>e8[log_mboxf]cc5331db0f1f8400000000000f1f440000ff149d<codecave:pobh.CRT$XCU4>4381fb0100000075f05be8([codecave:pobh.text0]+0x20)c3",
            "export": true,
        },
        pobh_dlls: {
            access: "r",
            code: "<option:user32_dll_str>06000000<option:kernel32_dll_str>09000000<option:ucrtbase_dll_str>1600000000000000",
        },
        pobh_import_names: {
            access: "r",
            code: "<option:MessageBoxA_str><option:MessageBoxW_str><option:GetWindow_str><option:SendMessageA_str><option:LoadImageA_str><option:CreateIconFromResource_str><option:AllocConsole_str><option:GetModuleHandleA_str><option:GetLastError_str><option:__stdio_common_vfprintf_str><option:freopen_str><option:__acrt_iob_func_str><option:__stdio_common_vfscanf_str><option:strtol_str><option:fgets_str><option:_invalid_parameter_noinfo_noreturn_str><option:_invoke_watson_str><option:free_str><option:malloc_str><option:_wcsicmp_str><option:strncmp_str><option:puts_str>",
        },
        pobh_imports: {
            access: "rw",
            size: 88,
        },
        pobh_patch_exit: {
            access: "rx",
            code: "5331db0f1f8400000000000f1f440000ff149d<codecave:pobh.CRT$XTX5>4381fb0100000075f05bc3",
            "export": true,
        },
    },
    binhacks: {
        hook_jmp: {
            addr: "0x473135",
            code: "E9 [codecave:pobh.text0+0xa0]",
        },
        Marisa_bomb_dont_follow_player: {
            addr: "0x41509E",
            code: "<nop:14>",
        },
        Marisa_bomb_delete_tilt: {
            addr: "0x415059",
            code: "EB 31",
        },
        Marisa_bomb_keep_normal_speed: {
            addr: "0x415094",
            code: "C781 D0620100 0000803F",
        },
        Marisa_bomb_allow_shooting: {
            addr: "0x414F56",
            code: "<nop:7>",
        },
        Global_var_chapter_retry_counter: {
            addr: 4385798,
            code: "\t    A1 <0x4E75B8> \t    C9 \t    C2 0400 \t    <int3:22> \t    ",
        },
        Escaping_BossShow: {
            addr: 4425600,
            code: "\t    E9 [codecave:Changing_loaded_slot_in_memory_for_Sanae] \t    <int3:4> \t    ",
        },
        EscapingSnakesColor: {
            addr: 4232620,
            code: "\t    <nop:4> \t    E9 [codecave:NewCodeSnakesColor] \t    <int3:17> \t    ",
        },
        Escaping_MusicBoss_msg: {
            addr: 4427667,
            code: "E9 [codecave:ChangeBossMusic]",
        },
        FuncSet4_better: {
            addr: 4397485,
            code: "C7 05 C0 F0 4D 00 05 00 00 00 F3 0F 10 0D C0 F0 4D 00 F3 0F 10 81 9C 0C 00 00 F3 0F 10 C1 F3 0F 11 81 9C 0C 00 00\t    <nop:30>",
        },
        FuncSet4_F0_fix: {
            addr: 4397306,
            code: "F3:0F10AB 9C020000",
        },
        change_jump_table_reference: {
            addr: 4362876,
            code: "0F B6 80 <codecave:change_ecl_ins_jump_table_location2> FF 24 85 <codecave:change_ecl_ins_jump_table_location>",
        },
        add_a_case_ecl_switch: {
            addr: 4362865,
            code: "3D <707>",
        },
    },
}