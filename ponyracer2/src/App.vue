<template>
  <Navbar />
  <main class="container" style="margin-top: 70px">

      <Alert v-if="errorMessage" variant="danger" dismissible @dismissed="errorMessage = null">{{errorMessage}}</Alert>
      <Suspense v-else  timeout="0">
        <RouterView ></RouterView>
        <template #fallback>Loading...</template>
      </Suspense>

  </main>
</template>

<script lang="ts">
import { defineComponent,onErrorCaptured, ref } from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  name: "App",
  components: {
    Navbar: Navbar,
  },
   setup() {
     const errorMessage = ref<string|null>(null);
     onErrorCaptured((e: unknown) => {
       errorMessage.value = e.message;
     });
     return {errorMessage}
   }
})


</script>
