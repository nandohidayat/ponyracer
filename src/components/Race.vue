<template>
  <h2>{{raceModel.name}}</h2>
  <!-- <p>{{startInstantComputed}}</p> -->
  <ul>
    <li v-for="pony in raceModel.ponies" >
      <Pony :ponyModel="pony" ></Pony>
    </li>
  </ul>
</template>
<script lang='ts'>
import { defineComponent, PropType, computed } from 'vue';
import {RaceModel} from '@/models/RaceModel';
import Pony from '@/components/Pony.vue';
import fromNow from '@/utils/FromNow';

export default defineComponent({
  name:'Race',
  components: {
    Pony
  },
  props: {
    raceModel: {
      type: Object as PropType<RaceModel>,
      required: true
    }
  },
  setup(props) {
    // const startInstantComputed = computed(()=> fromNow(props.raceModel.startInstant));
    // return {startInstantComputed};
  }
})
</script>
