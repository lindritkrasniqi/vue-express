<template>
  <div class="col-12 col-md-6">
    <div class="card shadow rounded-lg">
      <div class="card-header fw-bold text-center">Reset your password</div>
      <div class="card-body">
        <Logo />
        
        <FormsReset />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import FormsReset from "@/components/Forms/Reset";

export default {
  components: {
    Logo,
    FormsReset,
  },

  setup() {
    document.title = `Reset your password - ${process.env.VUE_APP_TITLE}`;
  },
};
</script>