<template>
  <div class="container mx-auto sm:px-4 mt-2 mb-4">
    <div class="flex justify-between items-center my-6 text-3xl text-blue-800">
      <h2 class="">Calcolo fattibilità - P&P manuale</h2>
      <img v-for="photo in imageUrl" :src="photo" alt="" width="300" height="200" />
    </div>
    <div class="w-full ">
      <div class="flex justify-between mb-6">
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Partnumber quantity
          </label>
        </div>
        <div class="flex-1">
          <input type="range" class="form-range mx-4" min="1" max="150" step="1" id="rangePartNumber"
            v-model="partnumberQta" />
        </div>
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            <h4>{{ partnumberQta }}</h4>
          </label>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Hours
          </label>
        </div>
        <div class="flex-1">
          <input type="range" class="form-range mx-4" min="1" max="8" step="1" id="rangeHours" v-model="hoursQta" />
        </div>
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            <h4>{{ hoursQta }}</h4>
          </label>
        </div>
      </div>
      <div class="flex justify-between mb-6">
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Quantita componenti
          </label>
        </div>
        <div class="flex-1">
          <input type="range" class="form-range mx-4" min="1" max="600" step="1" id="rangeComponents"
            v-model="componentsQta" />
        </div>
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            <h4>{{ componentsQta }}</h4>
          </label>
        </div>
      </div>
      <div class="flex justify-between mb-6">
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Numero di schede
          </label>
        </div>
        <div class="flex-1">
          <input type="range" class="form-range mx-4" min="1" max="50" step="1" id="rangeBoard" v-model="boardQta" />
        </div>
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            <h4>{{ boardQta }}</h4>
          </label>
        </div>
      </div>
    </div>
    <hr class="my-4" />
    <div class="relative md:flex-grow md:flex-1">
      <h1 v-if="cMhC" class="bg-green-500 py-2 text-center rounded-1">OK</h1>
      <h1 v-else class="bg-red-600 py-2 text-center rounded-1">NO</h1>
      <hr />
      <div>
        <div class="flex justify-between">
          <p>Schede ora:</p>
          <p>{{ bH }}</p>
        </div>
        <div class="flex justify-between">
          <p>Schede da serigrafare:</p>
          <p>{{ sF }}</p>
        </div>
        <hr />
        <div class="flex justify-between my-4">
          <p>Controllo codice:</p>
          <p :class="[cC ? 'bg-green-500' : 'bg-red-600']"
            class="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded rounded-1 ms-2">
            {{ cC }}
          </p>
        </div>
        <div class="flex justify-between my-4">
          <p>Controllo componenti:</p>
          <p :class="[cCq ? 'bg-green-500' : 'bg-red-600']"
            class="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded rounded-1 ms-2 ">
            {{ cCq }}
          </p>
        </div>
        <div class="flex justify-between my-4">
          <p>Controllo qtà schede:</p>
          <p :class="[cB ? 'bg-green-500' : 'bg-red-600']"
            class="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded rounded-1 ms-2 ">
            {{ cB }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const maxComponents = ref(450);
const maxPartnumber = ref(120);
const maxBoards = ref(40);
const maxHoursBoard = ref(3);
const maxBoardsComponents = ref(2500);
const compH = ref(150);

const boardQta = ref(1);
const partnumberQta = ref(1);
const componentsQta = ref(1);
const hoursQta = ref(1);

// a computed ref
const bH = computed(() => {
  return (compH.value / componentsQta.value).toFixed(1);
});
const sF = computed(() => {
  return ((compH.value / componentsQta.value) * hoursQta.value).toFixed(1);
});
const cB = computed(() => {
  if (boardQta.value <= maxBoards.value) {
    return true;
  }
  return false;
});
const cC = computed(() => {
  if (partnumberQta.value <= maxPartnumber.value) {
    return true;
  }
  return false;
});
const cCq = computed(() => {
  if (componentsQta.value <= maxComponents.value) {
    return true;
  }
  return false;
});

const cMhC = computed(() => {
  if (
    componentsQta.value / compH.value >= maxHoursBoard.value ||
    boardQta.value * componentsQta.value >= maxBoardsComponents.value ||
    partnumberQta.value >= maxPartnumber.value ||
    boardQta.value >= maxBoards.value
  ) {
    return false;
  }
  return true;
});
</script>
