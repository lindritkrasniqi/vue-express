<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3 row">
      <label for="password" class="col-sm-4 col-form-label text-sm-end">
        Password:
      </label>
      <div class="col-sm-8">
        <input
          type="password"
          class="form-control"
          v-model="credentials.password"
          id="password"
          :class="$store.state.errors.error.password ? 'is-invalid' : ''"
          :disabled="loading"
        />
        <div
          v-if="$store.state.errors.error.password"
          class="invalid-feedback fw-bolder"
        >
          {{ $store.state.errors.error.password.toString() }}
        </div>
      </div>
    </div>

    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-4 col-form-label text-sm-end">
        Confirm password:
      </label>
      <div class="col-sm-8">
        <input
          type="password"
          class="form-control"
          v-model="credentials.password_confirmation"
          id="inputPassword"
          :disabled="loading"
        />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-4"></label>
      <div class="col-sm-8">
        <button type="submit" class="btn btn-outline-primary">
          <div v-if="loading" class="spinner-border mx-3 spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>Save</span>
        </button>
      </div>
    </div>

    <router-link :to="{ name: 'index' }" class="text-decoration-none float-end">
      Back to home?
    </router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        password: "",
        password_confirmation: "",
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
        .post("api/reset", this.credentials)
        .then(() => this.$router.push({ name: "index" }))
        .catch(() => (this.loading = !this.loading));
    },
  },
};
</script>