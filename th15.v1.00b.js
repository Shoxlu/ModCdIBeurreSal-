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
            code: "0f57d26a006a00e8[0x41E750]0f57db6a006a006a00e8[0x41E850]8b0d<0x4e9a68>e8([codecave:pobh.text0]+0x30)6a01e8[0x41E250]c30f1f0057568b792c3b792875035e5fc383ff3c7d17f20f2ac7f20f5905(<codecave:pobh_comdat_pool>+0x18)f20f5ac05e5fe9([codecave:pobh.text0]+0x1f0)81ff540100007226b86801000029f8f20f2ac0f20f5905(<codecave:pobh_comdat_pool>+0x8)f20f5e05(<codecave:pobh_comdat_pool>+0x10)f20f5ac05e5fe9([codecave:pobh.text0]+0x1f0)83c114f30f1005<codecave:pobh_comdat_pool>89cee8([codecave:pobh.text0]+0x1f0)89f131d2e8([codecave:pobh.text0]+0x5e0)83ff50729389f1ba01000000e8([codecave:pobh.text0]+0x5e0)83ff64728289f1ba02000000e8([codecave:pobh.text0]+0x5e0)83ff780f826dffffff89f1ba03000000e8([codecave:pobh.text0]+0x5e0)81ff8c0000000f8255ffffff89f1ba040000005e5fe9([codecave:pobh.text0]+0x5e0)666666662e0f1f840000000000c36666666666662e0f1f8400000000005756508b4c2410c704240000000089e26a00e8[0x402DB0]89c668000003006a01ff74240850ff15(<codecave:pobh_imports>+0x14)89c756ff15(<codecave:pobh_imports>+0x44)83c40489f883c4045e5fc3905553575683ec148b742428a1<0x4e9ba0>8b48148b15<0x4e9a70>8b7a78f20f1006f20f1180ec0500008b56088990f405000085c974438b5c242cf7d783e701eb0689e985ed74328b69088379100174f18b01897c240cf30f10442430f30f11442408895c2404893424c744241001000000ff502083ec14ebc883c4145e5f5b5dc38b0d<0x4e9a68>81792c690100007f05e8([codecave:pobh.text0]+0x30)31c0c3660f1f8400000000005589e553575683e4f081ecc00000000f29442450a1<0x4e9a68>8944243ca1<0x4e9a70>8b78788b35<0x4e9a6c>8b4e6c898ed0f0410185c90f84210100008b41048986d4f041018b0985c90f841c010000f7d783e7018d9ed4f041010f28442450f30f5ae0f20f102d(<codecave:pobh_comdat_pool>+0x20)f20f1035(<codecave:pobh_comdat_pool>+0x28)f20f103d(<codecave:pobh_comdat_pool>+0x30)0f1f4400000fb7918a0c00004a6683fa010f87ae000000837924000f85a4000000f30f1081380c00008b54243cf30f5c4214f30f10913c0c0000f30f5c5218f30f59d2f30f59c0f30f1089580c0000f30f5ac90f28d9f20f59ddf20f58dcf20f5adbf30f58c2f30f59db0f2ed87256f20f59cef20f58ccf20f58cff20f5ac9f30f59c90f2ec1723d893c24f20f11642420e8[0x41E250]83ec04f20f103d(<codecave:pobh_comdat_pool>+0x30)f20f1035(<codecave:pobh_comdat_pool>+0x28)f20f102d(<codecave:pobh_comdat_pool>+0x20)f20f106424208b036666662e0f1f8400000000008986d0f0410185c0741b8b500489138b0889d085c90f8525ffffffeb0e81c6d4f0410189f3c703000000000f284424500fc6c0000f2944245031ff0f57c9f20f102d(<codecave:pobh_comdat_pool>+0x50)eb270f1f840000000000f20f108c2488000000f20f102d(<codecave:pobh_comdat_pool>+0x50)f20f58cd4783ff320f84380200000f28c1f20f1015(<codecave:pobh_comdat_pool>+0x38)f20f59c2f20f5ac0f30f5ac0f20f101d(<codecave:pobh_comdat_pool>+0x40)f20f59c3f20f1025(<codecave:pobh_comdat_pool>+0x48)f20f5ec4f20f5ac0f20f118c2488000000f20f58cdf20f59caf20f5ac9f30f5ac9f20f59cbf20f5eccf20f5ac90f57d2f30f5ad0f20f115424700f57c0f30f5ac1f20f114424688b74243cf30f1046140f29442420f20f111424e8[th_cos]dd9c24a8000000f30f1046180f284c24200f14c80f294c2420f20f10442470f20f110424e8[th_sin]dd9c24a0000000f20f108424a8000000660f168424a0000000660f5ac00f594424500f584424200f29442470f30f1046140f29442420f20f10442468f20f110424e8[th_cos]dd9c2498000000f30f1046180f284c24200f14c80f294c2420f20f10442468f20f110424e8[th_sin]dd9c2490000000f20f10842498000000660f16842490000000660f5ac00f594424500f584424200f285424700f28ca0f58c80f590d(<codecave:pobh_comdat_pool>+0x60)0f134c2444c744244c000000000f5cc20f57c9f30f5ac80fc6c055f30f5ac0f20f114c2408f20f110424e8[th_atan2]d95c2440f30f10442440f30f11442420f20f1005(<codecave:pobh_comdat_pool>+0x70)f20f118424b4000000a1<0x4e9ba0>8b48148b15<0x4e9a70>8b5a78f20f10442444f20f1180ec0500008b54244c8990f405000085c90f8405fefffff7d383e301eb1866666666662e0f1f84000000000089f185f60f84e6fdffff8b71088379100174ed8b01895c240cf30f10442420f30f114424088d9424b4000000895424048d542444891424c744241001000000ff502083ec14ebb98d65f45e5f5b5dc3905589e553575683e4f883ec6889d6f30f2acaf30f590d(<codecave:pobh_comdat_pool>+0x80)f30f114c241889cff30f1005(<codecave:pobh_comdat_pool>+0x84)f30f58c1f30f5ac0f20f11442420f20f110424e8[th_cos]dd5c2458f30f10442418f30f5805(<codecave:pobh_comdat_pool>+0x88)f30f5ac0f20f11442418f20f110424e8[th_cos]dd5c2450f20f10442420f20f110424e8[th_sin]dd5c2448f20f10442418f20f110424e8[th_sin]dd5c2440f20f10442450660f16442440660f280d(<codecave:pobh_comdat_pool>+0x90)660f59c1f20f10542458660f16542448660f59d1660f58d0660f5ac2f20f100f0f58c80f134c2434f30f104708f30f1144243cc74424300040e443c744242c0000a0410f57c0f20f2ac6f20f5905(<codecave:pobh_comdat_pool>+0xa0)f20f5805(<codecave:pobh_comdat_pool>+0xa8)f20f5ad8a1<0x4e9a70>8b4078f7d083e001894424088d44242c894424048d7c2434893c24f30f115c2420e8[0x41E850]83ec0ca1<0x4e9ba0>8b48148b15<0x4e9a70>8b5a78f20f10442434f20f1180ec0500008b54243c8990f405000085c9744bf7d383e301eb0e0f1f84000000000089f185f674368b71088379100174f18b01895c240cf30f10442420f30f114424088d54242c89542404893c24c744241001000000ff502083ec14ebc48d65f45e5f5b5dc36666662e0f1f840000000000575683ec0c8b35<0x4e9a68>8b7e2c81ff69010000750dc746500000000083c40c5e5fc33b7e2874f583ff3b7f7cf20f2ac7f20f5905(<codecave:pobh_comdat_pool>+0x18)f20f5ac0f30f100d(<codecave:pobh_comdat_pool>+0xb4)b902000000bac8000000e8([codecave:pobh.text0]+0x9c0)83ff770f8fb200000083ff500f843901000083ff6475b2f20f1046140f5805(<codecave:pobh_comdat_pool>+0xf0)0f130424f30f10461cf30f1144240889e0f30f1015(<codecave:pobh_comdat_pool>+0xb0)f30f101d(<codecave:pobh_comdat_pool>+0xd0)6a6468f000000068e4cb9640e96a01000083ff3c0f85b0000000f30f1005<codecave:pobh_comdat_pool>f30f100d(<codecave:pobh_comdat_pool>+0xb4)b918010000ba4b000000e8([codecave:pobh.text0]+0x9c0)f20f1046140f5805(<codecave:pobh_comdat_pool>+0xc0)0f130424f30f10461cf30f1144240889e0f30f1015(<codecave:pobh_comdat_pool>+0xb0)f30f101d(<codecave:pobh_comdat_pool>+0xd0)6a646818010000680a2b5d40e90401000083ff780f84c200000081ff8c0000000f85f9fefffff20f1046140f5805(<codecave:pobh_comdat_pool>+0x110)0f130424f30f10461cf30f1144240889e0f30f1015(<codecave:pobh_comdat_pool>+0xb0)f30f101d(<codecave:pobh_comdat_pool>+0xd0)6a6468c8000000684302bf40e9b100000081ff540100000f82e6feffffb86801000029f8f20f2ac0f20f5905(<codecave:pobh_comdat_pool>+0x8)f20f5e05(<codecave:pobh_comdat_pool>+0x10)f20f5ac0f30f100d(<codecave:pobh_comdat_pool>+0xb0)b905000000e9abfefffff20f1046140f5805(<codecave:pobh_comdat_pool>+0x100)0f130424f30f10461cf30f1144240889e0f30f1015(<codecave:pobh_comdat_pool>+0xb0)f30f101d(<codecave:pobh_comdat_pool>+0xd0)6a64680401000068b5b08240eb39f20f1046140f5805(<codecave:pobh_comdat_pool>+0xe0)0f130424f30f10461cf30f1144240889e0f30f1015(<codecave:pobh_comdat_pool>+0xb0)f30f101d(<codecave:pobh_comdat_pool>+0xd0)6a6468dc0000006813e7aa4050e8[0x4571d0]83c40c5e5fc3905589e553575683e4f081eca00000008954242cf30f114c242889cf8b1d<0x4e9a68>0fc6c0000f29842480000000660f57c9be32000000662e0f1f840000000000660f28c1f20f1015(<codecave:pobh_comdat_pool>+0x38)f20f59c2f20f5ac0f20f580d(<codecave:pobh_comdat_pool>+0x50)f20f114c2438f20f104c2438f30f5ac0f20f59caf20f5ac9f20f1015(<codecave:pobh_comdat_pool>+0x40)f20f59c2f20f101d(<codecave:pobh_comdat_pool>+0x48)f20f5ec3f30f5ac9f20f5ac0f20f59caf20f5ecbf20f5ac90f57d2f30f5ad0f20f11542440f30f1043140f294424100f57c0f30f5ac1f20f11442430f20f111424e8[th_cos]dd5c2468f30f1043180f284c24100f14c80f294c2410f20f10442440f20f110424e8[th_sin]dd5c2460f20f10442468660f16442460660f5ac00f598424800000000f584424100f29442440f30f1043140f29442410f20f10442430f20f110424e8[th_cos]dd5c2458f30f1043180f284c24100f14c80f294c2410f20f10442430f20f110424e8[th_sin]dd5c2450f20f10442458660f16442450660f5ac00f598424800000000f584424100f285424400f28ca0f58c80f590d(<codecave:pobh_comdat_pool>+0x60)0f134c2474c744247c000000000f5cc20f57c9f30f5ac80fc6c055f30f5ac0f20f114c2408f20f110424e8[th_atan2]8b44242c8944240c897c2408d95c24048d442474890424f30f105424280f28dae8[0x4571d0]83ec10f20f104c24384e0f854ffeffff8d65f45e5f5b5dc30f1f800000000053575650c704240000000089e2b9<option:pobh_const_0>6a00e8[0x402DB0]89c768000003006a01ff74240850ff15(<codecave:pobh_imports>+0x14)89c657ff15(<codecave:pobh_imports>+0x44)83c40485f674568b3d(<codecave:pobh_imports>+0xc)566a006880000000ff35<0x519bb0>ffd7566a016880000000ff35<0x519bb0>ffd78b1d(<codecave:pobh_imports>+0x8)6a04ff35<0x519bb0>ffd3566a00688000000050ffd76a04ff35<0x519bb0>ffd3566a01688000000050ffd731c083c4045e5f5bc3",
        },
        pobh_comdat_pool: {
            access: "r",
            code: "00007043000000000000000000006e4000000000000034400000000000001040000000000000e03f000000000000e0bf00000000000024c0cdcccccccccc1c40ea2e4454fb2109400000000000806640000000000000f03f00000000000000000000003f0000003f00000000000000000000f0410000f04100000000000000007cd920c0db0fc93f3a4671bf000000000000000000005e400000000000005e4055f29c762f1be43f35cd174361a50b400000a04100002041000000000000000086118d42fb57b74100000000000000000040e443000000000000000000000000b75e2e42f6ff6fc2000000000000000058676d35015494420000000000000000c75e2ec2010070c2000000000000000084118dc21258b7410000000000000000",
        },
        pobh_patch_init: {
            access: "rx",
            code: "555357565068<option:kernel32_dll_str>e8[th_GetModuleHandleA]68<option:LoadLibraryA_str>50e8[th_GetProcAddress]89042431edbb<codecave:pobh_dlls>8b35<codecave:pobh_dlls>660f1f44000056e8[th_GetModuleHandleA]89c785c0750b56ff54240489c785c0743c8b730439f5741f6690ff34ad<codecave:pobh_import_names>57e8[th_GetProcAddress]85c0742b8904ad<codecave:pobh_imports>4539ee75e38b730883c30885f675b983c4045e5f5b5de92c000000505668<option:dll_load_failed_str>eb0d50ff34ad<codecave:pobh_import_names>68<option:import_failed_str>e8[th_GetLastError]894424086a1068<option:pobh_name_str>e8[log_mboxf]cce8([codecave:pobh.text0]+0x100)c3",
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
    },
    binhacks: {
        hook_window_creation_ends: {
            addr: "0x473135",
            code: "E9 [codecave:pobh.text0+0xbc0]",
        },
        hook_sanae_bomb: {
            addr: "0x4184EF",
            code: "E8 [codecave:pobh.text0+0x7a0]",
        },
        Marisa_bomb_dont_follow_player: {
            addr: "0x41509E",
            code: "<nop:14>",
        },
        Marisa_bomb_delete_tilt: {
            addr: "0x415059",
            code: "EB 31",
        },
        Marisa_bomb_delay_begin: {
            addr: "0x415059",
            code: "8B46 2C 83F8 60 <nop:2> 7F 29 E9 55020000",
        },
        Marisa_bomb_reduce_duration: {
            addr: "0x41500E",
            code: "3D 0A010000",
        },
        Marisa_bomb_reduce_screen_shake_duration: {
            addr: "0x414E8C",
            code: "C747 20 C9000000",
        },
        Marisa_bomb_keep_normal_speed: {
            addr: "0x415094",
            code: "C781 D0620100 0000803F",
        },
        Marisa_bomb_allow_shooting: {
            addr: "0x414F56",
            code: "<nop:7>",
        },
        Marisa_bomb_increase_dmg: {
            addr: "0x415219",
            code: "6A 14",
        },
        Sanae_bomb_jmp_over_damage_func: {
            addr: "0x4184F4",
            code: "EB 3D",
        },
        Sanae_bomb_prevent_ending: {
            addr: "0x4186A3",
            code: "<nop:7>",
        },
        Sanae_bomb_jump_to_end_before_returning: {
            addr: "0x4186A2",
            code: "EB 17",
            active: "false",
        },
        Sanae_method_10_call_replace: {
            addr: "0x4186BF",
            code: "<nop:3>",
        },
        Sanae_bomb_hook_on_tick: {
            addr: "0x4186D2",
            code: "E8 [codecave:pobh.text0+0x1d0] 5D C3",
        },
        Sanae_reduce_duration: {
            addr: "0x418685",
            code: "817B 2C 54010000",
        },
        Global_var_chapter_retry_counter: {
            addr: "0x42EC06",
            code: "A1 <0x4E75B8>C9C2 0400<int3:22>",
        },
        Escaping_BossShow: {
            addr: "0x438780",
            code: "E9 [codecave:Changing_loaded_slot_in_memory_for_Sanae] <int3:4>",
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