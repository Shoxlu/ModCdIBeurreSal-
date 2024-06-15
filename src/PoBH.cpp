#include "PoBH.h"


#define DEBUG

#define SATANAE_BOMB_DURATION 340

extern "C" void coff2binhack_init() {
	//Sleep(5000);
	test();
	init_modes();
}


HICON load_icon(const char* filename) {
#ifdef DEBUG
	printf("beginning of the func load_icon at: %x\n", (size_t)load_icon);
#endif
	int size = 0;
	void* ico = th_OpenFile(filename, &size, FALSE);
	HICON ret = CreateIconFromResource((PBYTE)ico, size, TRUE, 0x30000);
	free(ico);
#ifdef DEBUG
	printf("End of the func load_icon \n");
#endif
	return ret;
}

static void damage_line_sanae(zFloat3* pos, int count, int duration) {
	float x = 120 * cos(count * rad(-144) + rad(90)) + 120 * cos(count * rad(-144) + rad(-54));
	float y = 120 * sin(count * rad(-144) + rad(90)) + 120 * sin(count * rad(-144) + rad(-54));
	zFloat3 new_pos = { pos->x + x, pos->y + y, pos->z };
	zPlayer::create_damage_source_rectangle(&new_pos, 20.0, 456.5, 11 * PI / 10+ count*(PI / 5), duration, 100);
}

void clear_lasers_rectangle(zFloat3* pos, zFloat2* w_h, float angle) {
	zLaserBaseClass* laser_list; // edx
	char flags; // di
	int flag_spell; // edi
	zLaserBaseClass* laser_list_prev; // esi
	laser_list = LASER_MANAGER_PTR->dummy_laser_for_list_tail.prev;
	flags = ~(unsigned __int8)SPELLCARD_PTR->flags;
	LASER_MANAGER_PTR->__pos_for_clearing = *pos;
	flag_spell = flags & 1;
	if (laser_list)
	{
		do
		{
			laser_list_prev = laser_list->prev;
			if (laser_list->field_10 != 1)
				laser_list->vtable->cancel_as_bomb_rectangle(laser_list, pos, w_h, angle, flag_spell, 1);
			laser_list = laser_list_prev;
		} while (laser_list_prev);
	}
}

static void clear_line_sanae(zFloat3* pos, int count) {
	float x = 120 * cos(count * rad(-144) + rad(90)) + 120 * cos(count * rad(-144) + rad(-54));
	float y = 120 * sin(count * rad(-144) + rad(90)) + 120 * sin(count * rad(-144) + rad(-54));
	zFloat3 new_pos = { pos->x + x, pos->y + y, pos->z };
	zFloat2 w_h = { 20.0, 456.5 };
	float angle = 11 * PI / 10 + count * (PI / 5);
	zBulletManager::ClearRectangleBomb(angle, &new_pos, &w_h, (SPELLCARD_PTR->flags & 1) == 0);
	clear_lasers_rectangle(&new_pos, &w_h, angle);
	//zPlayer::create_damage_source_rectangle(&new_pos, 20.0, 456.5, 11 * PI / 10 + count * (PI / 5), 10, 100);
}


static void clear_lasers_circle_sanae(zFloat3* pos, float radius, float side) {
	float perimeter = radius * 2 * PI;
	float width = side;
	int n_sides = 50;
	float height = side;//perimeter/ n_sides;

	zFloat3* pos_bomb = pos;
	for (int i = 0; i < n_sides; i++) {
		float angle_circle = rad(360.0 / n_sides * static_cast<double>(i));
		float angle_circle_next = rad(360.0 / n_sides * (static_cast<double>(i) + 1));
		zFloat3 pos_begin = { pos_bomb->x + radius * cosf(angle_circle),
			 pos_bomb->y + radius * sinf(angle_circle),
			0.0 };
		zFloat3 pos_end = { pos_bomb->x + radius * cosf(angle_circle_next),
			pos_bomb->y + radius * sinf(angle_circle_next),
			0.0 };
		zFloat3 pos_middle = { (pos_begin.x + pos_end.x) / 2,  (pos_begin.y + pos_end.y) / 2, 0.0 };
		zFloat3 pos_final = { pos_middle.x, pos_middle.y, 0.0 };
		float angle = atan2(pos_end.y - pos_begin.y, pos_end.x - pos_begin.x);
		zFloat2 w_h = { width, height };
		clear_lasers_rectangle(&pos_final, &w_h, angle);
	}
}

static void clear_bullets_circle_sanae(zFloat3* center_pos, float radius, int is_cancel, float width) {
	struct zBulletManager* bullet_manager = BULLET_MANAGER_PTR;
	float radius_circle = radius;
	zBulletList* first_bullet = BULLET_MANAGER_PTR->tick_list_head.next;
	zBulletList* next_bullet;
	zBullet* bullet;
	int state;
	zBulletList* next_bullet_to_iterate; 
	zBulletList* next_next_to_iterate;
	zBullet** current_bullet_to_iterate;
	BULLET_MANAGER_PTR->iter_current = first_bullet;
	if (first_bullet)
		next_bullet = first_bullet->next;
	else
		next_bullet = nullptr;
	bullet_manager->iter_next = next_bullet;
	if (first_bullet)
		bullet = first_bullet->entry;
	else
		bullet = nullptr;
	
	while (bullet) 
	{
		state = bullet->__state;
		if ((state == 2 || state == 1) && !bullet->field_24)
		{
			//printf("hitbox pos x %f\n", bullet->pos.x);
			float x_diff = bullet->pos.x - center_pos->x;
			float y_diff = bullet->pos.y - center_pos->y;
			float dist_squared = x_diff * x_diff + y_diff * y_diff;
			float actual_clear_radius = (bullet->field_C58 * 0.5 + radius_circle);
			float actual_clear_inner_radius = (-bullet->field_C58 * 0.5 + radius_circle)-width;
			if (actual_clear_radius* actual_clear_radius >= dist_squared && actual_clear_inner_radius * actual_clear_inner_radius <= dist_squared)
			{
				bullet->cancel(is_cancel);
			}
		}
		next_bullet_to_iterate = bullet_manager->iter_next;
		bullet_manager->iter_current = next_bullet_to_iterate;
		if (next_bullet_to_iterate)
			next_next_to_iterate = next_bullet_to_iterate->next;
		else
			next_next_to_iterate = nullptr;
		bullet_manager->iter_next = next_next_to_iterate;
		current_bullet_to_iterate = &bullet_manager->iter_current->entry;
		if (current_bullet_to_iterate)
			bullet = *current_bullet_to_iterate;
		else
			bullet = nullptr;
	}
	return ;
}

static void clear_circle_sanae(float radius)
{
	zFloat3* pos_bomb = &BOMB_PTR->bomb_pos;

	clear_bullets_circle_sanae(pos_bomb, radius, (SPELLCARD_PTR->flags & 1) == 0, 10);

	clear_lasers_circle_sanae(pos_bomb, radius, 30);
}


static void damage_circle_sanae(float radius, int duration, float side, int damage)
{
	float perimeter = radius * 2 * PI;
	float width = side;
	int n_sides = 50;
	float height = side;//perimeter/ n_sides;
	
	zFloat3* pos_bomb = &BOMB_PTR->bomb_pos;
	for (int i = 0; i < n_sides; i++) {
		float angle_circle = rad(360.0 / n_sides * static_cast<double>(i));
		float angle_circle_next = rad(360.0 / n_sides * (static_cast<double>(i) + 1));
		zFloat3 pos_begin = { pos_bomb->x + radius * cosf(angle_circle),
			 pos_bomb->y + radius * sinf(angle_circle),
			0.0 };
		zFloat3 pos_end = { pos_bomb->x + radius * cosf(angle_circle_next),
			pos_bomb->y + radius * sinf(angle_circle_next),
			0.0 };
		zFloat3 pos_middle = { (pos_begin.x + pos_end.x) / 2,  (pos_begin.y + pos_end.y) / 2, 0.0 };
		zFloat3 pos_final = { pos_middle.x, pos_middle.y, 0.0 };
		float angle = atan2(pos_end.y - pos_begin.y, pos_end.x - pos_begin.x);
		zPlayer::create_damage_source_rectangle(&pos_final, width, height, angle, duration, damage);
	}
	
}

extern "C" int hook_sanae_bomb_end() {
#ifdef DEBUG
	printf("begin of the func hook_sanae_bomb_end %x\n", (size_t)hook_sanae_bomb_end);
#endif
	zBombSanae* bomb_ptr = (zBombSanae*)BOMB_PTR;
	int time = bomb_ptr->timer.current;
	if (time <= SATANAE_BOMB_DURATION+21) {
		bomb_ptr->bomb_sanae_clear_bullets();
	}
	return 0;
}

void __thiscall zBombSanae::bomb_sanae_clear_bullets()
{
	zFloat3* bomb_pos; // ebx
	zBomb* bomb_ptr = this;
	int time = bomb_ptr->timer.current;
	bomb_pos = &bomb_ptr->bomb_pos;
	if (time == bomb_ptr->timer.prev)
		goto end;
	if (time < 60) {
		float radius = interpolate(9, 60, 0, 240, 0, time);
		clear_circle_sanae(radius);
	}
	if (time >= SATANAE_BOMB_DURATION) {
		float radius = interpolate(9, 20, 240, 0, SATANAE_BOMB_DURATION, time);
		clear_circle_sanae(radius);//from 240 to 0 in 20 frames
		goto end;
	}
	if (time >= 60) {
		clear_circle_sanae(240);
	}
	
	if (time >= 60)
	{
		clear_line_sanae(bomb_pos, 0);
	}
	if (time >= 80) {
		clear_line_sanae(bomb_pos, 1);
	}
	if (time >= 100) {
		clear_line_sanae(bomb_pos, 2);
	}
	if (time >= 120) {
		clear_line_sanae(bomb_pos, 3);
	}
	if (time >= 140) {
		clear_line_sanae(bomb_pos, 4);
	}
end:
	return;
	//zBulletManager::ClearRectangleBomb(0.0, &bomb_ptr->bomb_pos, &w_h,(SPELLCARD_PTR->flags & 1) == 0);
	
}

extern "C" void bomb_sanae() {
	zBomb* bomb_ptr = (zBomb*)BOMB_PTR;
	zPlayer* player_ptr = PLAYER_PTR;
	int time = bomb_ptr->timer.current;
	zFloat3* bomb_pos = &bomb_ptr->bomb_pos;
#ifdef DEBUG
	printf("beginning of the func bomb_sanae at: %x\n", (size_t)bomb_sanae);
	printf("Bomb ptr %x, Bomb anmscripttime %d, Bomb prev time %d, Bomb pos %x\n", (size_t)BOMB_PTR, bomb_ptr->timer.current, bomb_ptr->timer.prev, &bomb_ptr->bomb_pos);
#endif
	if (time == SATANAE_BOMB_DURATION+21) {
		bomb_ptr->bombVm = 0;
		goto end;
	}
	if (time == bomb_ptr->timer.prev)
		goto end;
	if (time < 60) {
		float radius = interpolate(9, 60, 0, 240, 0, time);
		damage_circle_sanae(radius, 2, 10, 200);
	}
	else if (time == 60) {
		damage_circle_sanae(240, SATANAE_BOMB_DURATION - 60, 10, 75);
	}
	else if (time >= SATANAE_BOMB_DURATION){
		float radius = interpolate(9, 20, 240, 0, SATANAE_BOMB_DURATION, time);
		damage_circle_sanae(radius, 5, 20,200);
	}

	if (time == 60) {
		damage_line_sanae(bomb_pos, 0, SATANAE_BOMB_DURATION -60);
	}
	else if (time == 80) {
		damage_line_sanae(bomb_pos, 1, SATANAE_BOMB_DURATION - 80);
	}
	else if (time == 100) {
		damage_line_sanae(bomb_pos, 2, SATANAE_BOMB_DURATION - 100);
	}
	else if (time == 120) {
		damage_line_sanae(bomb_pos, 3, SATANAE_BOMB_DURATION - 120);
	}
	else if (time == 140) {
		damage_line_sanae(bomb_pos, 4, SATANAE_BOMB_DURATION - 140);
	}

end:
#ifdef DEBUG
	printf("end of the func bomb_sanae\n");
#endif
	return;
}

extern "C" zAnmVm * get_current_text_vm_spell() {
	zAnmVm* anmVm = ANM_MANAGER_PTR->get_vm_with_id(SPELLCARD_PTR->field_14);
	if (!anmVm)
		SPELLCARD_PTR->field_14 = 0;
	return anmVm;
}

extern "C" int check_for_hijack_name() {
	int id = SPELLCARD_PTR->spell_id;
	if (id >= 78 and id < 100) {
		return 1;
	}
	return 0;
}


const char* find_spell_name(std::string extension) {
	const char* new_name = NULL;
	int true_id = (SPELLCARD_PTR->spell_id);
	json_t* spells = jsondata_game_get("spells.js");
	int base_id = SPELLCARD_PTR->spell_id - GLOBALS.inner.DIFFICULTY;
	std::vector<std::string> ids = { std::to_string(base_id)+extension, 
		std::to_string(base_id + 1) + extension,
		std::to_string(base_id + 2) + extension,
		std::to_string(base_id + 3) + extension };
	for (auto& i : ids) {
		if ((new_name = json_object_get_string(spells, i.c_str())))
		{
			return new_name;
		}
	}
	return "";
}

extern "C" const char* spellcard_draw_name() {
	
	const char* new_name = NULL;
	if (GLOBALS.inner.CHARACTER == 1 or GLOBALS.inner.CHARACTER == 3) {
		new_name = find_spell_name("S");
	}
	else {
		new_name = find_spell_name("G");
	}
	printf("%s", new_name);
	return new_name;
}

extern "C" void hook_hdlg() {
	HICON icon = load_icon("th15/icone.png");
	if (icon) {

		//Change both icons to the same icon handle.
		SendMessage(hDlg, WM_SETICON, ICON_SMALL, (LPARAM)icon);
		SendMessage(hDlg, WM_SETICON, ICON_SMALL2, (LPARAM)icon);
		SendMessage(hDlg, WM_SETICON, ICON_BIG, (LPARAM)icon);

		//This will ensure that the application icon gets changed too.
		SendMessage(GetWindow(hDlg, GW_OWNER), WM_SETICON, ICON_SMALL, (LPARAM)icon);
		SendMessage(GetWindow(hDlg, GW_OWNER), WM_SETICON, ICON_SMALL2, (LPARAM)icon);
		SendMessage(GetWindow(hDlg, GW_OWNER), WM_SETICON, ICON_BIG, (LPARAM)icon);

	}
}


extern "C" int hook_entry() {
#ifdef DEBUG
	AllocConsole();
	freopen("CONIN$", "r", stdin);
	freopen("CONOUT$", "w", stdout);
	freopen("CONOUT$", "w", stderr);
	printf("beginning of the func hook_entry at: %x\n", (size_t)hook_entry);
	//printf("location of the func bomb_sanae at: %x\n", (size_t)bomb_sanae);
	//printf("location of the func bomb_sanae_clear_bullets at: %x\n", zBombSanae::bomb_sanae_clear_bullets);

#endif // DEBUG

	InitDiscord();

	HICON icon = load_icon("th15/icone.png");
	if (icon) {

		//Change both icons to the same icon handle.
		SendMessage(g_window, WM_SETICON, ICON_SMALL, (LPARAM)icon);
		SendMessage(g_window, WM_SETICON, ICON_SMALL2, (LPARAM)icon);
		SendMessage(g_window, WM_SETICON, ICON_BIG, (LPARAM)icon);

		//This will ensure that the application icon gets changed too.
		SendMessage(GetWindow(g_window, GW_OWNER), WM_SETICON, ICON_SMALL, (LPARAM)icon);
		SendMessage(GetWindow(g_window, GW_OWNER), WM_SETICON, ICON_SMALL2, (LPARAM)icon);
		SendMessage(GetWindow(g_window, GW_OWNER), WM_SETICON, ICON_BIG, (LPARAM)icon);
		
	}

#ifdef DEBUG
	printf("End of the func hook_entry \n");
#endif

    return 0;
}