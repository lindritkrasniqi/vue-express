<template>
  <div class="col-12 col-md-6">
    <div class="card shadow rounded-lg">
      <div class="card-header fw-bold text-center">Sign up</div>
      <div class="card-body">
        <Logo />
        
        <FormsSignUp />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import FormsSignUp from "@/components/Forms/SignUp";

export default {
  components: {
    Logo,
    FormsSignUp,
  },

  setup() {
    document.title = `Forgot your password - ${process.env.VUE_APP_TITLE}`;
  },
};
</script>