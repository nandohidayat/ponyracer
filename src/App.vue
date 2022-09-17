<template>
  <Navbar/>
  <div>
    <h1>PonyRacer</h1>
    <h2>Hello {{user.name}}!</h2>
    <Races></Races>
  </div>

</template>

<script lang="ts">
import Races from '@/templates/Races.vue';
import Navbar from '@/components/Navbar.vue';

import { defineComponent,ref } from "vue";

export default defineComponent({
  name: 'App',
  components: {
    Races: Races,
    Navbar: Navbar,
  },
  setup() {
    const user = ref({name:'Rahiti'});
    return {user};
  }

})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
