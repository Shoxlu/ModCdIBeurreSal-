#pragma once
#include <Windows.h>
#include <cstdint>
#define noinline [[clang::noinline]]
#define forceinline [[clang::always_inline]]
#define _BYTE BYTE
#define PI 3.14159265359
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wuninitialized"


template <typename T>
static inline constexpr T garbage_value(void) {
	T garbage;
	return garbage;
}

template<typename T1, typename T2>
forceinline static constexpr T1 bitcast(const T2& value) {
	return __builtin_bit_cast(T1, value);
}

#define GARBAGE_VALUE(type) garbage_value<type>()
#define GARBAGE_ARG(type) GARBAGE_VALUE(type)

#pragma clang diagnostic pop


#define UNUSED_DWORD (GARBAGE_ARG(int))
#define UNUSED_FLOAT (GARBAGE_ARG(float))


struct zFloat3 {
	float x, y, z;
};
struct zFloat2 {
	float x, y;
};
struct zInt3 {
	int x, y, z;
};
struct zInt2 {
	int x, y;
};


struct zTimer
{
	int prev;
	int current;
	float current_f;
	char game_speed__disused;
	int control;
};


struct zBomb;

struct zVTableBomb
{
	int begin;
	int on_tick;
	int on_draw;
	int method_c;
	void(__thiscall* method_10)(zBomb*);
	int method_14;
	int store_snapshot;
	int restore_snapshot;
	int write_autosave_data;
	int read_autosave_data;
};

struct zBomb
{
	zVTableBomb* VtableBomb;//0x0
	int field_4;//0x4
	int field_8;//0x8
	int field_C;//0xC
	int field_10;//0x10
	zFloat3 bomb_pos;//0x14
	float bomb_angle;
	int field_24;
	zTimer timer;
	int field_3C;
	int field_40;
	int field_44;
	int field_48;
	int field_4C;
	int bombVm;
	int field_54;
	int bombVm2;
	int field_5C;
	int field_60;
	int field_64;
	int field_68;
	int field_6C;
	int field_70;
	int field_74;
	int field_78;
	int field_7C;
	int field_80;
	int field_84;
	int field_88;
	int field_8C;
	int field_90;
	int field_94;
	int field_98;
	int field_9C;
	int field_A0;
	int field_A4;
	int field_A8;
	int field_AC;
	int field_B0;
	int field_B4;
	int field_B8;
};

struct zAnmLoaded
{
	_BYTE gap0[264];
	struct zAnmRawEntry* field_108;
	int field_10C;
	int field_110;
	int field_114;
	int field_118;
	int* field_11C;
	_BYTE gap120[24];
	int field_0;
};

struct zPlayerHitbox_related
{
	int field_0;
	int hitbox_radius;
};



struct D3DCOLOR
{
	char b;
	char g;
	char r;
	char a;
};

struct D3DMATRIX
{
	float m00;
	float m01;
	float m02;
	float m03;
	float m10;
	float m11;
	float m12;
	float m13;
	float m20;
	float m21;
	float m22;
	float m23;
	float m30;
	float m31;
	float m32;
	float m33;
};




struct zInterpInt
{
	int initial;
	int goal;
	int bezier_1;
	int bezier_2;
	int current;
	zTimer time;
	int end_time;
	int method;
};


struct zInterpInt3
{
	zInt3 initial;
	zInt3 goal;
	zInt3 bezier_1;
	zInt3 bezier_2;
	zInt3 current;
	zTimer time;
	int end_time;
	int method;
};

struct zInterpFloat
{
	float initial;
	float goal;
	float bezier_1;
	float bezier_2;
	float current;
	zTimer time;
	int end_time;
	int method;
};

struct zInterpFloat2
{
	zFloat2 initial;
	zFloat2 goal;
	zFloat2 bezier_1;
	zFloat2 bezier_2;
	zFloat2 current;
	zTimer time;
	int end_time;
	int method;
};


struct zInterpFloat3
{
	zFloat3 initial;
	zFloat3 goal;
	zFloat3 bezier_1;
	zFloat3 bezier_2;
	zFloat3 current;
	zTimer time;
	int end_time;
	int method;
};

struct zAnmVmPrefix
{
	zTimer interrupt_return_time;
	int interrupt_return_offset;
	int flags_lo;
	int flags_hi;
	char __unknown_32;
	int layer;
	int anm_loaded_index;
	int sprite_id;
	int script_id;
	int instr_offset;
	zFloat3 pos;
	zFloat3 rotation;
	zFloat3 angular_velocity;
	zFloat2 scale;
	zFloat2 scale_2;
	zFloat2 scale_growth;
	zFloat2 uv_scale;
	zFloat2 sprite_size;
	zFloat2 uv_scroll_pos;
	zFloat2 anchor_offset;
	char __unknown_148;
	zInterpFloat3 pos_i;
	zInterpInt3 rgb1_i;
	zInterpInt alpha1_i;
	zInterpFloat3 rotate_i;
	zInterpFloat rotate_2d_i;
	zInterpFloat2 scale_i;
	zInterpFloat2 scale_2_i;
	zInterpFloat2 uv_scale_i;
	zInterpInt3 rgb2_i;
	zInterpInt alpha2_i;
	zInterpFloat u_vel_i;
	zInterpFloat v_vel_i;
	zFloat2 uv_quad_of_sprite[4];
	zFloat2 uv_scroll_vel;
	D3DMATRIX __scales_by_sprite_size_over_256__wtf;
	D3DMATRIX world_matrix_0__3D_scale_and_rotation;
	D3DMATRIX __matrix_460__modified_at_0x46f2ff;
	int pending_interrupt;
	int __time_of_last_sprite_set__unused_;
	zFloat2 __only_used_by_type_10_in_lolk;
	int int_vars[4];
	float float_vars[4];
	zFloat3 __script_vars_33_34_35__rotation_related;
	int __script_var_8;
	int __script_var_9;
	float rand_param_one;
	float rand_param_pi;
	int rand_param_int;
	zFloat3 __pos_2;
	zFloat3 last_rendered_quad_in_surface_space[4];
	char font_dims[2];
	char __unknown_1322;
	_BYTE gap52B[9];
	int flags_related_to_world_ui_lists__only_in_lolk;
	D3DCOLOR color_1;
	D3DCOLOR color_2;
	D3DCOLOR mixed_inherited_color;
};



struct zAnmId
{
	int id;
};

struct zAnmVm;

struct zAnmVmList
{
	zAnmVm* entry;
	zAnmVmList* next;
	zAnmVmList* prev;
	int __seldom_used;
};

struct zAnmVmSuffix
{
	zAnmId id;
	int fast_id;
	zTimer time_in_script;
	zTimer __timer_1c;
	zAnmVmList node_in_global_list;
	zAnmVmList node_as_child;
	zAnmVmList list_of_children;
	zAnmVmList __prolly_weird_list_seen_in_th16;
	int __prolly_next_in_layer;
	int __prolly__root_vm__or_maybe_not;
	int __prolly_parent_vm;
	float slowdown;
	int special_render_data;
	int special_render_data_size;
	int index_of_on_wait;
	int index_of_on_tick;
	int index_of_on_draw;
	int index_of_on_destroy;
	int index_of_on_interrupt;
	int __index_of_on_copy_1__pointdevice_related;
	int __index_of_on_copy_2__pointdevice_related;
	int index_of_sprite_mapping_func;
	zFloat3 entity_pos;
	int associated_game_entity;
	zFloat3 __prolly_rotation_related;
};

struct zAnmVm
{
	zAnmVmPrefix p;
	zAnmVmSuffix s;
};




struct zPlayerOption
{
	int active;
	char __unknown_4;
	_BYTE gap5[171];
	zAnmId __anm_id_b0;
	zAnmId __anm_id_b4;
	char __unknown_184;
	_BYTE gapB9[43];
};

struct zPlayerBullet
{
	char __unknown_0;
	_BYTE gap1[191];
};

struct zPlayerDamageSource
{
	char __unknown_0;
	_BYTE gap1[147];
};


struct zPlayerInner
{
	zFloat3 pos;
	zInt2 internal_pos;
	zTimer time_in_state;
	zTimer __timer_28;
	zTimer __timer_3c;
	zPlayerOption options[8];
	zPlayerBullet bullets[256];
	int last_created_damage_source_index;
	zPlayerDamageSource damage_sources[257];
	int state;
	zAnmId __anm_id_15c0c;
	zAnmId __anm_id_15c10;
	char __unknown_89108;
	_BYTE gap15C15[19];
	int __field_15c28__switches_option_pos__maybe_focus_state;
	char __unknown_89132;
	_BYTE gap15C2D[39];
	int __field_15c54__contains_power_level;
	int __array_15c58[4];
	zTimer iframes;
	int flags;
	char __unknown_89216;
	_BYTE gap15C81[51];
	int __field_15cb4__zeroed_out_by_you_grow_bigger;
	float speed_multiplier;
	char __unknown_89276;
	_BYTE gap15CBD[11];
	int number_of_options;
};

struct zBoundingBox3
{
	zFloat3 min_pos;
	zFloat3 max_pos;
};

struct zPlayer;

class zPlayer {
private:
	int __vectorcall create_damage_source_circle_(int, zFloat3* pos, float, float, float base_radius, float radius_increment, int duration, int damage);
	static int __vectorcall create_damage_source_rectangle_(int, int, zFloat3* pos, float, float, float height, float width, float, float, int32_t a4, int duration, int damage);
public:
	forceinline static int create_damage_source_rectangle(zFloat3* pos, float height, float width, float arg4, int duration, int damage) {
		return zPlayer::create_damage_source_rectangle_(UNUSED_DWORD, UNUSED_DWORD, pos, UNUSED_FLOAT, UNUSED_FLOAT, height, width, UNUSED_FLOAT, UNUSED_FLOAT, bitcast<int32_t>(arg4), duration, damage);
	}
	forceinline int create_damage_source_circle(zFloat3* pos, float base_radius, float radius_increment, int duration, int damage) {
		return this->create_damage_source_circle_(UNUSED_DWORD, pos, UNUSED_FLOAT, UNUSED_FLOAT, base_radius, radius_increment, duration, damage);
	}
	//void create_damage_source_circle(zFloat3* pos, int duration, int damage);
	//void create_damage_source_rectangle(float a1, float a2, zFloat3* a3, float a4, int duration, int __damage);

	char __unknown_0;
	int on_tick;
	int on_draw;
	struct zAnmLoaded* pl_anm;
	zAnmVm vm;
	zPlayerInner inner;
	zPlayerInner snapshot_inner;
	zBoundingBox3 __hurtbox;
	zFloat3 __hurtbox__halfsize;
	zFloat3 __item_attract_unfocused_box__halfsize;
	zFloat3 __item_attract_focused_box__halfsize;
	char __unknown_180204;
	_BYTE gap2BFED[27];
	struct zPlayerHitbox_related* pointer_to_some_hitbox_struct;
	_BYTE gap2C00C[8];
	zInterpFloat player_scale_i;
	float player_scale__requires_flag_0x10__from_ddc;
	char __unknown_180296;
	_BYTE gap2C049[11];
	zBoundingBox3 __item_collect_box;
	zBoundingBox3 __item_attract_focused_box;
	zBoundingBox3 __item_attract_unfocused_box;
	char __unknown_180380;
};

struct zLaserBaseClass;

struct zVTableLaser
{
	_BYTE gap0[4];
	int method_4;
	int method_8;
	int method_c;
	int on_tick;
	int on_draw;
	int method_18;
	int method_1c;
	void(__thiscall* cancel_as_bomb_rectangle)(zLaserBaseClass*, zFloat3* pos, zFloat2* width_height, float angle, BOOL spell_flag, int);
	void(__thiscall* cancel_as_bomb_circle)(zLaserBaseClass*, zFloat3* pos, float angle, BOOL spell_flag, int);
	int cancel;
	int method_2c;
	int method_30;
	int check_graze_or_kill;
	int method_38;
	int method_3c;
	int method_40;
	int method_44;
	int method_48;
	int method_4c;
	int method_50;
	int method_54;
	int method_58;
	int method_5c;
	int method_60;
	int method_64;
};

struct zBulletExState
{
	zTimer timer;
	float floats[8];
	int ints[5];
};
 
struct zLaserBaseClass
{
	zVTableLaser* vtable;
	zLaserBaseClass* next;
	zLaserBaseClass* prev;
	int __unknown_12;
	int field_10;
	int kind;
	zTimer __timer_18;
	zTimer __timer_2c;
	zTimer __timer_40;
	zFloat3 laser_offset;
	char __unknown_96;
	_BYTE gap61[11];
	float laser_st_angle;
	char __unknown_112;
	float laser_st_width;
	float laser_st_length;
	float __field_7c__sometimes_0_01_or_0f;
	int laser_id;
	zBulletExState ex_state[18];
	int et_ex_index;
	int __field_598__was_4;
	char __unknown_1436;
	zTimer __timer_5a0;
	zTimer __timer_5b4;
	int __countdown_5c8;
	char __unknown_1484;
	_BYTE gap5CD[7];
};


struct zLaserManager
{
	char __unknown_0;
	int on_tick;
	int on_draw;
	zLaserBaseClass dummy_laser_for_list_tail;
	int list_head;
	int list_length;
	int flags;
	zFloat3 __pos_for_clearing;
	char __unknown_1528;
	_BYTE gap5F9[11];
	int bullet_anm;
	char __unknown_1544;
};

struct zBullet;

struct zBulletNullList
{
	int __unused_null_ptr;
	zBulletNullList* next;
	zBulletNullList* prev;
	int __seldom_used;
};

struct zBulletList
{
	zBullet* entry;
	zBulletList* next;
	zBulletList* prev;
	int __seldom_used;
};


struct zBullet
{

	void cancel(int is_cancel);


	zBulletNullList freelist_node;
	zBulletList tick_list_node;
	int __unknown_32;
	int field_24;
	zAnmVm anmVm;
	int field_630;
	_BYTE gap634[1540];
	zFloat3 pos;
	int field_C44;
	int field_C48;
	int field_C4C;
	int field_C50;
	int field_C54;
	float field_C58;
	int field_C5C;
	_BYTE gapC60[42];
	unsigned __int16 __state;
	_BYTE gapC8C[2056];
};

class zBulletManager
{
private:
	//xmm2, stack, stack
	static void __vectorcall ClearRadiusBombStupid(int, int, zFloat3* pos, int is_cancel, float, float, float radius);
	//xmm3, stack, stack, stack
	static void __vectorcall sub_41E850_cancels_bullets(int, int, zFloat3* pos, zFloat2* width_height,int is_cancel, float, float, float, float angle);
public:
	static inline void ClearRadiusBomb(float radius, zFloat3* pos, int is_cancel) {
		ClearRadiusBombStupid(UNUSED_DWORD, UNUSED_DWORD, pos, is_cancel, UNUSED_FLOAT, UNUSED_FLOAT, radius);
	}

	static inline void ClearRectangleBomb(float angle, zFloat3* pos, zFloat2* width_height, int is_cancel) {
		sub_41E850_cancels_bullets(UNUSED_DWORD, UNUSED_DWORD, pos, width_height, is_cancel, UNUSED_FLOAT, UNUSED_FLOAT, UNUSED_FLOAT, angle);
	}
	char __unknown_0;
	int on_tick;
	int on_draw;
	zBullet* __ptr_c;
	int __unknown_16;
	int field_14;
	int field_18;
	int field_1C;
	int field_20;
	int field_24;
	int field_28;
	int field_2C;
	int field_30;
	int field_34;
	int field_38;
	int field_3C;
	int field_40;
	int field_44;
	int __field_48;
	int __field_4c;
	int __snapshot_field_48;
	int __snapshot_field_4c;
	zBulletNullList freelist_head;
	zBulletList tick_list_head;
	int __unknown_120;
	int field_7C;
	int field_80;
	int field_84;
	int field_88;
	int field_8C;
	int field_90;
	int field_94;
	zBullet bullets[2001];
	zBullet snapshot_bullets[2001];
	zAnmId anm_ids[2001];
	zAnmId snapshot_anm_ids[2001];
	int _unknown_cancel_counter;
	int __unknown_snapshot_cancel_counter;
	zBulletList* iter_current;
	zBulletList* iter_next;
	int bullet_anm;
};

struct zSpellcard
{
	char __unknown_0;
	_BYTE gap1[119];
	int flags;
	_BYTE gap7C[64];
};

struct zBombSanae: public zBomb {
	void bomb_sanae_clear_bullets();
};

//struct BombInner {
//	Float3 position; // 0x0
//	float __float_C; // 0xC
//	int state; // 0x10
//	Timer __timer_14; // 0x14
//	unknown_fields(0x14); // 0x28
//	AnmID __anm_id_3C; // 0x3C
//	AnmID __anm_id_40; // 0x40
//	AnmID __anm_id_44; // 0x44
//	int __int_48; // 0x48
//	int32_t __int_4C; // 0x4C
//	void* __buffer_ptr_50; // 0x50
//	// 0x54
//};
//
//// size: 0xBC
//struct Bomb {
//	// Inherited from ZUNTask
//	void* vftable; // 0x0
//	uint32_t __task_flags; // 0x4
//	UpdateFunc* on_tick; // 0x8
//	UpdateFunc* on_draw; // 0xC
//
//	// unique fields
//	unknown_fields(0x4); // 0x10
//	BombInner __inner_14; // 0x14
//	BombInner __inner_68; // 0x68
//	// 0xBC
//};
extern "C" HWND g_window;
extern "C" zBomb * BOMB_PTR;
extern "C" zPlayer * PLAYER_PTR;
extern "C" zBulletManager * BULLET_MANAGER_PTR;
extern "C" zSpellcard * SPELLCARD_PTR;
extern "C" zLaserManager * LASER_MANAGER_PTR;

void* __fastcall th_OpenFile(const char* fileName, int* p_size, int is_from_game_path);

float inline rad(float x) {
	return x * PI / 180;
}

void stub_function_so_coff2binhack_gives_me_signatures() {
	zBulletManager::ClearRadiusBomb(NULL, NULL, NULL);
	zBulletManager::ClearRectangleBomb(NULL, NULL, NULL, NULL);
	zBombSanae* bomb = (zBombSanae*)BOMB_PTR;
	bomb->bomb_sanae_clear_bullets();
	zBullet* bullet;
	bullet->cancel(1);
}

