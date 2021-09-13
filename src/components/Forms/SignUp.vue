<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3 row">
      <label for="name" class="col-sm-4 col-form-label text-sm-end">
        Name:
      </label>
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control"
          v-model="credentials.name"
          id="name"
          :class="$store.state.errors.error.name ? 'is-invalid' : ''"
          :disabled="loading"
        />
        <div v-if="$store.state.errors.error.name" class="invalid-feedback fw-bolder">
          {{ $store.state.errors.error.name.toString() }}
        </div>
      </div>
    </div>

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
        <div v-if="$store.state.errors.error.email" class="invalid-feedback fw-bolder">
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
          :disabled="loading"
          :class="$store.state.errors.error.password ? 'is-invalid' : ''"
        />
        <div v-if="$store.state.errors.error.password" class="invalid-feedback fw-bolder">
          {{ $store.state.errors.error.password.toString() }}
        </div>
      </div>
    </div>

    <div class="mb-3 row">
      <label
        for="inputPassword_confirm"
        class="col-sm-4 col-form-label text-sm-end"
      >
        Confirm password:
      </label>
      <div class="col-sm-8">
        <input
          type="password"
          class="form-control"
          v-model="credentials.password_confirmation"
          :disabled="loading"
          id="inputPassword_confirm"
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
          <span v-else>Sign up</span>
        </button>
      </div>
    </div>

    <router-link
      :to="{ name: 'index' }"
      class="text-decoration-none float-end"
    >
      Already, have an account?
    </router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        name: "",
        email: "",
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
        .post("api/register", this.credentials)
        .then(() =>
          this.$store
            .dispatch("auth/login", this.credentials)
            .then(() => this.$router.push({ name: "index" }))
        )
        .catch(() => (this.loading = !this.loading));
    },
  },
};
</script>