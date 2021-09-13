<template>
  <div class="col-12 col-md-6">
    <div class="card shadow rounded-lg">
      <div class="card-header fw-bold text-center">Login</div>
      <div class="card-body">
        <Logo />
        
        <FormsLogin />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import FormsLogin from "@/components/Forms/Login";

export default {
  components: {
    Logo,
    FormsLogin,
  },

  setup() {
    document.title = `Login to ${process.env.VUE_APP_TITLE}`;
  },
};
</script>