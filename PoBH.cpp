// clang++ -m32 -O2 -c sample2.cpp -o sample2.obj

#include <Windows.h>
#include <stdio.h>

__attribute__((constructor)) void static_ctor() {
    //MessageBoxA(NULL, "This is being called from a static constructor!", "coff2binhack sample", 0);
}

__attribute__((destructor)) void static_dtor() {
   // MessageBoxA(NULL, "This is being called from a static destructor!", "coff2binhack sample", 0);
}

extern "C" void coff2binhack_init() {
   // MessageBoxA(NULL, "This is being called from the coff2binhack initializer!", "coff2binhack sample", 0);
}

__fastcall void* OpenFile(const char* fileName, int* p_size, int is_from_game_path);

extern "C" HWND g_window;

HICON load_icon(const char* filename) {
	int size = 0;
	void* ico = OpenFile(filename, &size, FALSE);
	/*if (ico) {
		MessageBoxA(NULL, "Ico loaded", "coff2binhack sample", 0);
	}*/
	HICON ret = CreateIconFromResource((PBYTE)ico, size, TRUE, 0x30000);
	/*if (ret) {
		MessageBoxA(NULL, "CreateIcon nice", "coff2binhack sample", 0);
	}*/
	free(ico);
	return ret;
}


extern "C" int hook_entry() {
	AllocConsole();
	freopen("CONIN$", "r", stdin);
	freopen("CONOUT$", "w", stdout);
	freopen("CONOUT$", "w", stderr);
	HICON icon = load_icon("th15/icone.png");
	if (icon) {
		//MessageBoxA(NULL, "This works ! (ig)", "coff2binhack sample", 0);
		//Change both icons to the same icon handle.
		SendMessage(g_window, WM_SETICON, ICON_SMALL, (LPARAM)icon);
		SendMessage(g_window, WM_SETICON, ICON_BIG, (LPARAM)icon);

		//This will ensure that the application icon gets changed too.
		SendMessage(GetWindow(g_window, GW_OWNER), WM_SETICON, ICON_SMALL, (LPARAM)icon);
		SendMessage(GetWindow(g_window, GW_OWNER), WM_SETICON, ICON_BIG, (LPARAM)icon);
		
	}
	/*MessageBoxA(NULL, "End of the hook", "coff2binhack sample", 0);*/
    return 0;
}