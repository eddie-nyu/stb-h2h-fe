import { reactive } from 'vue'
import { defineStore } from 'pinia'

const playerList = [
  {
    name: '',
    mainId: 1,
    characterIds: [1],
    // ranked if possible
    winRate: '',
    winRatesByCharacter: [
      {
        characterId: 1,
        winrates: [
          {
            characterId: 2,
            winRate: ''
          }
        ]
      }
    ],
    characterLeagueInfo: [
      {
        characterId: 1,
        name: '',
        leaguePoints: '',
        masterRate: '',
      }
    ],
    team: {
      id: 1,
      name: ''
    },
    division: {
      id: 1,
      name: 'Captain'
    }
  }
]

export const usePlayerStore = defineStore('player', () => {
  const players = reactive(playerList);

  return { players }
})
