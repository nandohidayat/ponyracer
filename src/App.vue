<template>
  <Navbar></Navbar>
  <main class="container" style="margin-top: 70px">
    <h1>Ponyracer</h1>
    <Races/>
  </main>
</template>

<script lang="ts">
import Races from '@/views/Races.vue';
import Navbar from '@/components/Navbar.vue';

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Navbar: Navbar,
    Races: Races
  }
});
</script>
