<template>
  <div
    class="container d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="col text-center">
      <div class="lead">{{ error.status }} | {{ error.message }}</div>
      <br />
      <router-link :to="{ name: 'index' }" class="text-decoration-none">
        Go to home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: false,
      default: () => ({ message: "Not Found", status: 404 }),
    },
  },

  beforeCreate() {
    document.title = this.error.message;
  },
};
</script>