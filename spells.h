#pragma once
#include <vector>

constexpr auto n_spells = 10;
std::vector<const char*> spellnames;

void init_spells() {
	spellnames.assign(n_spells, "");
	spellnames[0] = "Test éàùé";
	spellnames[1] = "Test éàùé";
	spellnames[2] = "Test éàùé";
	spellnames[3] = "Test éàùé";
	spellnames[4] = "Test éàùé";
	spellnames[5] = "Test éàùé";
	spellnames[6] = "Test éàùé";
	spellnames[7] = "Test éàùé";
	spellnames[8] = "Test éàùé";
	spellnames[9] = "Test éàùé";
}