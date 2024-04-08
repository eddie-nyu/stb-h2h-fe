<script setup>
import { computed } from 'vue'
import CharacterPortrait from '@/components/CharacterPortrait.vue';

import { usePlayerStore } from '@/stores/player';

const playerStore = usePlayerStore();

const team1Selected = computed(() => playerStore.team1 != null);

function onTeam1Change(event) {
  playerStore.setTeam1(event.target.value);
}

function onTeam2Change(event) {
  playerStore.setTeam2(event.target.value);
}

function onPlayer1Change(event) {
  playerStore.setPlayer1(event.target.value);
}

function onPlayer2Change(event) {
  playerStore.setPlayer2(event.target.value);
}
</script>

<template>
  <main>
    <div class="section" style="position: relative;">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="select">
              <select v-model="team1" @change="onTeam1Change($event)">
                <option value="null"></option>
                <option v-for="t in playerStore.teams" :key="t.id" :value="t.id">{{ t.name }}</option>
              </select>
            </div>
          </div>
          <div class="level-item">
            <div v-if="playerStore.team1IsSet" class="select">
              <select v-model="selectedPlayer1" @change="onPlayer1Change($event)">
                <option value="null"></option>
                <option v-for="p in playerStore.team1Options" :key="p.id" :value="p.id">{{ p.name }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="select">
              <select v-model="team2" @change="onTeam2Change($event)">
                <option value="null"></option>
                <option v-for="t in playerStore.teams" :key="t.id" :value="t.id">{{ t.name }}</option>
              </select>
            </div>
          </div>
          <div class="level-item">
            <div v-if="playerStore.team2IsSet" class="select">
              <select v-model="selectedPlayer2" @change="onPlayer2Change($event)">
                <option value="null"></option>
                <option v-for="p in playerStore.team2Options" :key="p.id" :value="p.id">{{ p.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      <br>
      <img class="vs-logo" src="../assets/Street_Fighter_VS_logo.png" width="280" height="240">
      <div class="columns">
        <div class="column is-half" v-if="playerStore.selectedPlayer1 != null && playerStore.selectedPlayer2 != null">
          <CharacterPortrait :character-id="playerStore.selectedPlayer1Object.main"
            :player="playerStore.selectedPlayer1Object.name" :characters="[playerStore.selectedPlayer1Object.main]"
            :league-points="playerStore.player1LP" :master-rate="playerStore.player1MR"
            :win-rate="playerStore.player1WR" :mu-win-rate="playerStore.player1MUWR"
            :mu-character-id="playerStore.selectedPlayer2Object.main" :player-obj="playerStore.selectedPlayer1Object" />
        </div>
        <div class="column is-half" v-if="playerStore.selectedPlayer2 != null && playerStore.selectedPlayer1 != null">
          <CharacterPortrait flipped :character-id="playerStore.selectedPlayer2Object.main"
            :player="playerStore.selectedPlayer2Object.name" :characters="[playerStore.selectedPlayer2Object.main]"
            :league-points="playerStore.player2LP" :master-rate="playerStore.player2MR"
            :win-rate="playerStore.player2WR" :mu-win-rate="playerStore.player2MUWR"
            :mu-character-id="playerStore.selectedPlayer1Object.main" :player-obj="playerStore.selectedPlayer2Object" />
        </div>
      </div>
    </div>
  </main>
</template>
