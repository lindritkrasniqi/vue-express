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
      <label for="inputPassword" class="col-sm-4 col-form-label text-sm-end">
        Password:
      </label>
      <div class="col-sm-8">
        <input
          type="password"
          class="form-control"
          v-model="credentials.password"
          id="inputPassword"
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
      <label class="col-sm-4"></label>
      <div class="col-sm-8">
        <router-link
          :to="{ name: 'accounts-signup' }"
          class="btn btn-primary me-3"
        >
          Sign up
        </router-link>

        <button type="submit" class="btn btn-outline-primary">
          <div v-if="loading" class="spinner-border mx-3 spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>Login</span>
        </button>
      </div>
    </div>

    <router-link
      :to="{ name: 'accounts-forgot' }"
      class="text-decoration-none float-end"
    >
      Forgot your password?
    </router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: "",
        password: "",
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

      this.$store
        .dispatch("auth/login", this.credentials)
        .then(() => this.$router.push({ name: "index" }))
        .catch(() => (this.loading = !this.loading));
    },
  },
};
</script>