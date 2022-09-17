<template>
  <div>
    <h2>Races</h2>
    <ul><li v-for="race in races" :key="race.id">{{race.name}}</li></ul>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import RaceModel from '@/models/RaceModel';

export default defineComponent ({
  name:'Races',
  setup() {
    const races = ref<Array<RaceModel>>([{name:'Papeete'},{name:'Nuku Hiva'},{name:'Punaauia'}]);
  }
})

</script>
