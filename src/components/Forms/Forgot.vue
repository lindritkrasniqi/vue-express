<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3 row">
      <label for="email" class="col-sm-4 col-form-label text-sm-end">
        Email:
      </label>
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control"
          v-model="credentials.email"
          id="email"
          :class="$store.state.errors.error.email ? 'is-invalid' : ''"
          :disabled="loading"
        />
        <div
          v-if="$store.state.errors.error.email"
          class="invalid-feedback fw-bolder"
        >
          {{ $store.state.errors.error.email.toString() }}
        </div>
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-4"></label>
      <div class="col-sm-8">
        <button type="submit" class="btn btn-outline-primary">
          <div
            v-if="loading"
            class="spinner-border mx-3 spinner-border-sm"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>Send</span>
        </button>
      </div>
    </div>

    <router-link
      :to="{ name: 'accounts-login' }"
      class="text-decoration-none float-end"
    >
      I think, I remember my password!
    </router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: "",
      },
      loading: false,
    };
  },

  beforeUnmount() {
    this.$store.commit("errors/error", {});
  },

  methods: {
    onSubmit() {
      this.loading = !this.loading;

      this.axios
        .post("api/forgot", this.credentials)
        .then(() => this.$router.push({ name: "index" }))
        .catch(() => (this.loading = !this.loading));
    },
  },
};
</script>