<script setup>
import CharacterPortrait from '@/components/CharacterPortrait.vue';
</script>

<template>
  <main>
    <div class="section" style="position: relative;">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="dropdown">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu5">
                  <span>Fighter #1</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu5" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <p>The dropdown is <strong>left-aligned</strong> by default.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="dropdown is-right">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu6">
                  <span>Fighter #2</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu6" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <p>
                      Add the <code>is-right</code> modifier for a
                      <strong>right-aligned</strong> dropdown.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>
      <img class="vs-logo" src="../assets/Street_Fighter_VS_logo.png" width="280" height="240">
      <div class="columns">
        <div class="column is-half">
          <CharacterPortrait :character-id="7" player="Dotmp3" :characters="[7]" league-points="14,376"
            win-rate="58.33%" mu-win-rate="N/A" mu-character-id="13" />
        </div>
        <div class="column is-half">
          <CharacterPortrait flipped :character-id="13" player="Kasual" :characters="[13]" league-points="19,023"
            win-rate="55.40%" mu-win-rate="46.67%" mu-character-id="7" />
        </div>
      </div>
    </div>
  </main>
</template>
