<template>
  <div class="div_flex" :class="alertClasses" >
    <slot name="alertMsg"></slot>
    <button v-if="dismissible" @click="dismiss()" type="button" class="btn-close" aria-label="Close"></button>
  </div>
</template>
<script lang='ts'>
import { defineComponent, PropType,ref, computed } from 'vue';

export default defineComponent({
  name:'Alert',
  props: {
    alertMsg: {
      type: String,
    },
    variant: {
      type: String,
    },
    dismissible: {
      type: Boolean,
    }
  },
  emits: {
    dismissed: () => true
  },
  setup(props,{emit}) {
    const dismiss = () => {
      emit('dismissed');
    }
    const variantClass = 'alert-'+props.variant;
    const alertClasses= computed(() =>  `alert alert-${props.variant} ${props.dismissible ? 'alert-dismissible' : ''}` as const);
    return {dismiss, alertClasses};
  }
})
</script>

<style>
.div_flex {
  display: flex;
  justify-content: space-between;
}
</style>
