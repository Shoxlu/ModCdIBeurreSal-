#pragma once

struct MiniRPCPresence {
	char state[128];
	char details[128];
	char large_img_key[32];
	char large_img_text[128];
	char small_img_key[32];
	char small_img_text[128];
};

void minirpc_start(const char* app_id);
void minirpc_update(MiniRPCPresence* presence);
void minirpc_stop();
