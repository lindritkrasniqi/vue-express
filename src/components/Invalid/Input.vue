<template>
  <transition name="fade" mode="out-in">
    <div v-if="value" class="invalid-feedback fw-bolder">
      {{ value.toString() }}
    </div>
  </transition>
</template>

<script>
export default {
  props: ["value"],
};
</script>