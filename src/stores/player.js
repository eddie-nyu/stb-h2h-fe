import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

import BigJenks from './data/Immortal_stats.json';
import CandyManFight from './data/Biggamal_stats.json';
import Carpricious from './data/BreezyMan_stats.json';
import GMG_NARCOS from './data/Challenger_stats.json';
import GraciaBorealis from './data/JimmyDR_stats.json';
import Isabella from './data/MoshpitMessiah_stats.json';
import Jaw from './data/Ninun_stats.json';
import JustLemillion from './data/NYCMax_stats.json';
import StrongestWoman from './data/Squid_stats.json';
import XX from './data/Teach_stats.json';

const playerList = [BigJenks, CandyManFight, Carpricious, GMG_NARCOS, GraciaBorealis, Isabella, Jaw, JustLemillion, StrongestWoman, XX];

console.log(playerList);

// const dataFiles = require.context('./data', true, /\.json$/i);
// dataFiles.keys().forEach(fileName => {
//   const fileContent = JSON.parse(dataFiles[fileName]);
//   playerList.push(fileContent);
// })


// const playerList = [
//   {
//     name: '',
//     mainId: 1,
//     characterIds: [1],
//     // ranked if possible
//     winRate: '',
//     winRatesByCharacter: [
//       {
//         characterId: 1,
//         winrates: [
//           {
//             characterId: 2,
//             winRate: ''
//           }
//         ]
//       }
//     ],
//     characterLeagueInfo: [
//       {
//         characterId: 1,
//         name: '',
//         leaguePoints: '',
//         masterRate: '',
//       }
//     ],
//     team: {
//       id: 1,
//       name: ''
//     },
//     division: {
//       id: 1,
//       name: 'Captain'
//     }
//   }
// ]

export const usePlayerStore = defineStore('player', () => {
  const players = reactive(playerList);

  const teams = reactive([
    // {
    //   id: 1,
    //   name: 'Team GranTodakai'
    // },
    // {
    //   id: 2,
    //   name: 'Team Marv_'
    // },
    // {
    //   id: 3,
    //   name: 'Team CuhzLightYear'
    // },
    // {
    //   id: 4,
    //   name: 'Team DoctaAfrikan'
    // },
    {
      id: 100,
      name: 'Team Galaxy Bran'
    },
    {
      id: 101,
      name: 'Team Erebus'
    },
    {
      id: 102,
      name: 'Team JimmyDR'
    },
    {
      id: 103,
      name: 'Team BreezyMan'
    }
  ]);

  const team1 = ref(null);
  const team2 = ref(null);

  const setTeam1 = function (teamOrNull) {
    team1.value = teamOrNull;
  }

  const setTeam2 = function (teamOrNull) {
    team2.value = teamOrNull;
  }

  const selectedTeam1 = computed(() => {
    if (team1.value == null) return null;
    return teams.find(t => t.id == team1.value);
  });

  const selectedTeam2 = computed(() => {
    if (team2.value == null) return null;
    return teams.find(t => t.id == team2.value);
  });

  const team1IsSet = computed(() => team1.value != null);
  const team2IsSet = computed(() => team2.value != null);

  const team1Options = computed(() => {
    if (team1.value == null) return [];
    return playerList.filter(p => {
      return p.team == team1.value;
    }).sort((a, b) => b.division - a.division);
  });

  const team2Options = computed(() => {
    if (team2.value == null) return [];
    return playerList.filter(p => {
      return p.team == team2.value;
    }).sort((a, b) => b.division - a.division);
  });

  const selectedPlayer1 = ref(null);

  const selectedPlayer2 = ref(null);

  const setPlayer1 = function (playerOrNull) {
    selectedPlayer1.value = playerOrNull;
  }

  const setPlayer2 = function (playerOrNull) {
    selectedPlayer2.value = playerOrNull;
  }

  const selectedPlayer1Object = computed(() => {
    if (selectedPlayer1.value == null) return null;
    return playerList.find(p => p.id == selectedPlayer1.value);
  });

  const selectedPlayer2Object = computed(() => {
    if (selectedPlayer2.value == null) return null;
    return playerList.find(p => p.id == selectedPlayer2.value);
  });

  const player1LP = computed(() => {
    if (selectedPlayer1Object.value == null) return 'N/A';
    const main = selectedPlayer1Object.value.main;
    const characterData = selectedPlayer1Object.value.characterLeagueInfo.find(c => c.characterId == main);
    return characterData.leaguePoints;
  });

  const player2LP = computed(() => {
    if (selectedPlayer2Object.value == null) return 'N/A';
    const main = selectedPlayer2Object.value.main;
    const characterData = selectedPlayer2Object.value.characterLeagueInfo.find(c => c.characterId == main);
    return characterData.leaguePoints;
  });

  const player1MR = computed(() => {
    if (selectedPlayer1Object.value == null || selectedPlayer1Object.value == 0) return 'N/A';
    const main = selectedPlayer1Object.value.main;
    const characterData = selectedPlayer1Object.value.characterLeagueInfo.find(c => c.characterId == main);
    return characterData.masterRate;
  });

  const player2MR = computed(() => {
    if (selectedPlayer2Object.value == null || selectedPlayer2Object.value == 0) return 'N/A';
    const main = selectedPlayer2Object.value.main;
    const characterData = selectedPlayer2Object.value.characterLeagueInfo.find(c => c.characterId == main);
    return characterData.masterRate;
  });

  // winRatesByCharacter

  const player1WR = computed(() => {
    if (selectedPlayer1Object.value == null) return 'N/A';
    const main = selectedPlayer1Object.value.main;
    const characterData = selectedPlayer1Object.value.winRatesByCharacter.find(c => c.characterId == main);
    return characterData.winRate;
  });

  const player2WR = computed(() => {
    if (selectedPlayer2Object.value == null) return 'N/A';
    const main = selectedPlayer2Object.value.main;
    const characterData = selectedPlayer2Object.value.winRatesByCharacter.find(c => c.characterId == main);
    return characterData.winRate;
  });

  const player1MUWR = computed(() => {
    if (selectedPlayer1Object.value == null || selectedPlayer2Object.value == null) return 'N/A';
    const main = selectedPlayer1Object.value.main;
    const characterData = selectedPlayer1Object.value.winRatesByCharacter.find(c => c.characterId == main);

    const oppMain = selectedPlayer2Object.value.main;
    return characterData.winRates[0].find(wr => wr.characterId == oppMain).winRate;
  });

  const player2MUWR = computed(() => {
    if (selectedPlayer1Object.value == null || selectedPlayer2Object.value == null) return 'N/A';
    const main = selectedPlayer2Object.value.main;
    const characterData = selectedPlayer2Object.value.winRatesByCharacter.find(c => c.characterId == main);

    const oppMain = selectedPlayer1Object.value.main;
    return characterData.winRates[0].find(wr => wr.characterId == oppMain).winRate;
  });

  return { players, teams, team1, team2, setTeam1, setTeam2, team1IsSet, team2IsSet, team1Options, team2Options, selectedTeam1, selectedTeam2, selectedPlayer1, selectedPlayer2, setPlayer1, setPlayer2, selectedPlayer1Object, selectedPlayer2Object, player1LP, player2LP, player1MR, player2MR, player1WR, player2WR, player1MUWR, player2MUWR }
})
