<template>
  <div v-if="$store.state.auth.loggedIn">
    <div class="card shadow rounded-lg">
      <div class="card-header">Dashboard</div>
      <div class="card-body">
        <div class="lead">
          Welcome, <em>{{ $store.state.auth.user.name }}</em
          >!
        </div>
      </div>
    </div>
  </div>

  <div v-else class="col-12 col-md-8">
    <div class="card shadow rounded-lg py-5">
      <div class="card-body">
        <div class="row align-items-center">
          <Logo class="col-xl-6" />
          <FormsLogin class="col-xl-6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import FormsLogin from "@/components/Forms/Login";

export default {
  name: "index",

  components: {
    Logo,
    FormsLogin,
  },

  beforeCreate() {
    document.title = `Welcome to ${process.env.VUE_APP_TITLE}`;
  },
};
</script>