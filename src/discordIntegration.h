//#include <iostream>
#include <string>
#include <stdlib.h>
#include "minirpc.h"

void InitDiscord() {
    minirpc_start("1250711249004662815");

    MiniRPCPresence presence = {
        .state = "Playing...",
        .details = "Touhou 15 mod by\n Team Brest Elizabeth",
        .large_img_key = "mariphaine",
    };
    minirpc_update(&presence);
}



//
//// Replace with your actual Discord Application ID
//const int64_t ApplicationID = 1250872452804776087;
//
//discord::Core* core{};
//void UpdatePresence(const std::string& state, const std::string& details);
//bool is_discord_initialized = false;
//
//void InitializeDiscord() {
//    auto result = discord::Core::Create(ApplicationID, DiscordCreateFlags_Default, &core);
//    if (!core) {
//        printf("Fail Discord\n");
//        return;
//    }
//    is_discord_initialized = true;
//    UpdatePresence("Touhou 東方塩崇拝 ~ Praises of Buttered Heavens", "");
//}
//
//void UpdatePresence(const std::string& state, const std::string& details) {
//    if (!is_discord_initialized) {
//        printf("Discord not update \n");
//        return;
//    }
//    printf("Discord update \n");
//    discord::Activity activity{};
//    activity.SetState(state.c_str());
//    activity.SetDetails(details.c_str());
//
//    core->ActivityManager().UpdateActivity(activity, [](discord::Result result) {
//        if (result != discord::Result::Ok) {
//            printf("Fail Discord Update\n");
//        }
//        else if(result == discord::Result::Ok) {
//            printf("Success\n");
//        }
//        });
//}
//
//extern "C" void UpdateDiscordIntegration() {
//    printf("Discord update \n");
//    UpdatePresence("Touhou 東方塩崇拝 ~ Praises of Buttered Heavens", "");
//}