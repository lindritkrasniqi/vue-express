<template>
  <component :is="$route.meta.layout || 'default'">
    <router-view />
  </component>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: rgb(236, 236, 236);
}
</style>
