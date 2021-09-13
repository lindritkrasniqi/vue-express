<template>
  <div class="col text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="lead">Please wait...</div>
  </div>
</template>

<script>
export default {
  setup() {
    document.title = `Please wait... - ${process.env.VUE_APP_TITLE}`;
  },

  created() {
    this.$store
      .dispatch("auth/logout")
      .then(() => this.$router.push({ name: "index" }));
  },
};
</script>