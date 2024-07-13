<script setup>
import { computed } from 'vue';

const characterLibrary = [{
    character_id: 1,
    character_name: "Ryu",
    character_alpha: "RYU",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character1_over.png",
    looks_right: true
},
{
    character_id: 2,
    character_name: "Luke",
    character_alpha: "LUKE",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character2_over.png",
    looks_right: true
},
{
    character_id: 3,
    character_name: "Kimberly",
    character_alpha: "KIMBERLY",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character6_over.png",
    looks_right: true
},
{
    character_id: 4,
    character_name: "Chun-Li",
    character_alpha: "CHUN-LI",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character4_over.png",
    looks_right: true
},
{
    character_id: 5,
    character_name: "Manon",
    character_alpha: "MANON",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character13_over.png",
    looks_right: true
},
{
    character_id: 6,
    character_name: "Zangief",
    character_alpha: "ZANGIEF",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character16_over.png",
    looks_right: true
},
{
    character_id: 7,
    character_name: "JP",
    character_alpha: "JP",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character15_over.png",
    looks_right: true
},
{
    character_id: 8,
    character_name: "Dhalsim",
    character_alpha: "DHALSIM",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character10_over.png",
    looks_right: true
},
{
    character_id: 9,
    character_name: "Cammy",
    character_alpha: "CAMMY",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character18_over.png",
    looks_right: true
},
{
    character_id: 10,
    character_name: "Ken",
    character_alpha: "KEN",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character8_over.png",
    looks_right: true
},
{
    character_id: 11,
    character_name: "Dee Jay",
    character_alpha: "DEE JAY",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character12_over.png",
    looks_right: true
},
{
    character_id: 12,
    character_name: "Lily",
    character_alpha: "LILY",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character17_over.png",
    looks_right: true
},
{
    character_id: 13,
    character_name: "A.K.I.",
    character_alpha: "A.K.I.",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character20_over.png",
    looks_right: true
},
{
    character_id: 14,
    character_name: "Rashid",
    character_alpha: "RASHID",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character19_over.png",
    looks_right: true
},
{
    character_id: 15,
    character_name: "Blanka",
    character_alpha: "BLANKA",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character9_over.png",
    looks_right: true
},
{
    character_id: 16,
    character_name: "Juri",
    character_alpha: "JURI",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character7_over.png",
    looks_right: true
},
{
    character_id: 17,
    character_name: "Marisa",
    character_alpha: "MARISA",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character14_over.png",
    looks_right: true
},
{
    character_id: 18,
    character_name: "Guile",
    character_alpha: "GUILE",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character5_over.png",
    looks_right: true
},
{
    character_id: 19,
    character_name: "Ed",
    character_alpha: "ED",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character21_over.png",
    looks_right: true
},
{
    character_id: 20,
    character_name: "Edmond Honda",
    character_alpha: "E. HONDA",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character11_over.png",
    looks_right: true
},
{
    character_id: 21,
    character_name: "Jamie",
    character_alpha: "JAMIE",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character3_over.png",
    looks_right: false
},
{
    character_id: 22,
    character_name: "Akuma",
    character_alpha: "AKUMA",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character22_over.png",
    looks_right: false
},
{
    character_id: 26,
    character_name: "M. Bison",
    character_alpha: "M. BISON",
    img_url: "https://www.streetfighter.com/6/assets/images/character/select_character23_over.png",
    looks_right: false
},
{
    character_id: 254,
    character_name: "Random",
    character_alpha: "RANDOM",
    img_url: "",
    looks_right: true
}]

const props = defineProps({
    characterId: {
        type: Number,
        required: true
    },
    flipped: {
        type: Boolean,
        default: false
    },
    player: {
        type: String,
        required: true
    },
    characters: {
        type: Array,
        required: true
    },
    leaguePoints: {
        type: String,
        required: true
    },
    masterRate: {
        type: String,
        default: "N/A"
    },
    winRate: {
        type: String,
        required: true
    },
    muWinRate: {
        type: String,
        required: true
    },
    muCharacterId: {
        type: String,
        required: true
    },
    playerObj: {
        type: Object
    }
});

const selectedCharacter = computed(() => {
    return characterLibrary.find(c => c.character_id == props.characterId);
});

const selectedOpp = computed(() => {
    return characterLibrary.find(c => c.character_id == props.muCharacterId);
});

const characterSpread = computed(() => {
    const spread = characterLibrary.filter(c => props.characters.includes(c.character_id));
    console.log(spread);
    return spread.map((c) => c.character_name).join(', ');
});

</script>

<template>
    <div class="card">
        <br>
        <div class="card-image">
            <figure class="image character-crop">
                <img :class="flipped ? 'flipped' : ''" :src="selectedCharacter.img_url" alt="Placeholder image" />
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content text-center">
                    <p class="title">{{ player }}</p>
                    <br>
                    <p class="subtitle is-4"><strong>Character(s): {{ characterSpread }}</strong></p>
                </div>
            </div>

            <div class="content">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>Win Rate</strong></p>
                            <p class="title">{{ winRate }}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>WR vs {{ selectedOpp.character_name }}</strong></p>
                            <p class="title">{{ muWinRate }}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>League Points</strong></p>
                            <p class="title">{{ leaguePoints }}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>Master Rate</strong></p>
                            <p class="title">{{ masterRate }}</p>
                        </div>
                    </div>
                </nav>
                <br />
                <nav class="columns" v-if="playerObj != null && playerObj.stbStats != null">
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STB Set Wins</strong></p>
                            <p class="title">{{ playerObj.stbStats.setWins }}</p>
                        </div>
                    </div>
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STB Set Losses</strong></p>
                            <p class="title">{{ playerObj.stbStats.setLosses }}</p>
                        </div>
                    </div>
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STB Game Wins</strong></p>
                            <p class="title">{{ playerObj.stbStats.gameWins }}</p>
                        </div>
                    </div>
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STB Game Losses</strong></p>
                            <p class="title">{{ playerObj.stbStats.gameLosses }}</p>
                        </div>
                    </div>
                </nav>
                <!-- <nav class="columns" v-if="playerObj != null && playerObj.stbStats != null">
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STL Set Wins</strong></p>
                            <p class="title">{{ playerObj.stbStats.setWins }}</p>
                        </div>
                    </div>
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STL Set Losses</strong></p>
                            <p class="title">{{ playerObj.stbStats.setLosses }}</p>
                        </div>
                    </div>
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STL Game Wins</strong></p>
                            <p class="title">{{ playerObj.stbStats.gameWins }}</p>
                        </div>
                    </div>
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STL Game Losses</strong></p>
                            <p class="title">{{ playerObj.stbStats.gameLosses }}</p>
                        </div>
                    </div>
                </nav> -->
                <!-- <nav class="columns" v-else>
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STL Set Wins</strong></p>
                            <p class="title">TBD</p>
                        </div>
                    </div>
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STL Set Losses</strong></p>
                            <p class="title">TBD</p>
                        </div>
                    </div>
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STL Game Wins</strong></p>
                            <p class="title">TBD</p>
                        </div>
                    </div>
                    <div class="column is-one-quarter has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>STL Game Losses</strong></p>
                            <p class="title">TBD</p>
                        </div>
                    </div>
                </nav> -->
                <br />
                <!-- <nav v-if="playerObj != null && playerObj.stbStats != null" class="columns">
                    <div class="column is-one-third has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>Perfects</strong></p>
                            <p class="title">{{ playerObj.stbStats.perfects }}</p>
                        </div>
                    </div>
                    <div class="column is-one-third has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>Charge Wins</strong></p>
                            <p class="title">{{ playerObj.stbStats.chargeWins }}</p>
                        </div>
                    </div>
                    <div class="column is-one-third has-text-centered">
                        <div>
                            <p class="heading is-size-4"><strong>Charge Denials</strong></p>
                            <p class="title">{{ playerObj.stbStats.chargeDenials }}</p>
                        </div>
                    </div>
                </nav> -->
                <br v-if="playerObj != null && playerObj.stbStats != null" />
                <time datetime="2016-1-1">Last Updated 2:13 AM - 14 Jun 2024</time>
            </div>
        </div>
    </div>
</template>