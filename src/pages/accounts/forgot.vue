<template>
  <div class="col-12 col-md-6">
    <div class="card shadow rounded-lg">
      <div class="card-header fw-bold text-center">Forgot password</div>
      <div class="card-body">
        <Logo />
        
        <FormsForgot />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import FormsForgot from "@/components/Forms/Forgot";

export default {
  components: {
    Logo,
    FormsForgot,
  },

  setup() {
    document.title = `Forgot your password - ${process.env.VUE_APP_TITLE}`;
  },
};
</script>