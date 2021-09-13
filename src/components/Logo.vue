<template>
  <div class="col text-center my-4">
    <router-link :to="{ name: 'index' }">
      <img :src="require('@/assets/logo.png')" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>
