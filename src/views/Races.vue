<template>
  <Alert v-if="err" variant="danger" :dismissible="true" @dismissed="err = false" >
    <template #alertMsg>
      <div>Erreur lors de la récupération des données</div>
    </template>
  </Alert>
  <Race v-for="race in races" :key="race.id" :raceModel="race" />
</template>

<script lang='ts'>
import { defineComponent, ref,onMounted } from 'vue';
import {RaceModel} from '@/models/RaceModel';
import Race from '@/components/Race.vue';
import {useRaceService} from '@/composables/RacesService';
export default defineComponent({
  name:'Races',
  components: {
    Race
  },
  setup() {
    const raceService = useRaceService();
    const races = ref<Array<RaceModel>>([]);
    const err = ref(false);
    onMounted(async ()=> {
      try {
        races.value = await raceService.list();
      } catch (error) {
        err.value = true;
      }
    });
    return {races, err};
  }
})
</script>
