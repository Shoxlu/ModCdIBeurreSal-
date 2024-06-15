#include "th15.h"

float (*modes[32])(float);

float rad(float x) {
	return x * PI / 180;
}
void test() {
	return;
}

std::function<float(float)> flip(float (*f)(float)) {
	auto y = [f](float x) -> float {
		return 1 - f(1 - x);
		};

	return y;
}

std::function<float(float)> split(float (*f)(float), float (*g)(float)) {
	auto y = [f, g](float x) -> float {
		return x < 0.5 ? 0.5 * f(2 * x) : 0.5 * (1 + g(2 * x - 1));
		};
	return y;
}

float easeIn2(float x) {
	return x * x;
}

float easeOut2(float x) {
	return flip(easeIn2)(x);
}

float easeInOut2(float x) {
	return split(easeIn2, easeOut2)(x);
}

float linear(float x) {
	return x;
}

void init_modes() {
	modes[0] = linear;
	modes[1] = easeIn2;
	modes[2] = nullptr;
	modes[3] = nullptr;
	modes[4] = easeOut2;
	modes[5] = nullptr;
	modes[6] = nullptr;
	modes[7] = nullptr;
	modes[8] = nullptr;
	modes[9] = easeInOut2;
	modes[10] = nullptr;
	modes[12] = nullptr;
	modes[13] = nullptr;
	modes[14] = nullptr;
	modes[15] = nullptr;
	modes[16] = nullptr;
	modes[17] = nullptr;
	modes[18] = nullptr;
	modes[19] = nullptr;
	modes[20] = nullptr;
	modes[21] = nullptr;
	modes[22] = nullptr;
	modes[23] = nullptr;
	modes[24] = nullptr;
	modes[25] = nullptr;
	modes[26] = nullptr;
	modes[27] = nullptr;
	modes[28] = nullptr;
	modes[29] = nullptr;
	modes[30] = nullptr;
	modes[31] = nullptr;
}

float interpolate(int mode, int duration, float start, float end, int beginning_time, int actual_time) {

	auto easing = modes[mode];
	if (!easing) {
		printf("Mode hasn't been implemented yet: %d \n", mode);
		return 0.0;
	}
	float x = (actual_time - beginning_time) / (float)duration;
	float y = start + (end - start) * easing(x);
	return y;
}


void stub_function_so_coff2binhack_gives_me_signatures() {
	zBulletManager::ClearRadiusBomb(NULL, NULL, NULL);
	zBulletManager::ClearRectangleBomb(NULL, NULL, NULL, NULL);
	zBombSanae* bomb = (zBombSanae*)BOMB_PTR;
	bomb->bomb_sanae_clear_bullets();
	zBullet* bullet;
	bullet->cancel(1);
	zSpellcard* spell;
	spell->sub_420400(0, 0, 0, 0, 0, 0);
}

