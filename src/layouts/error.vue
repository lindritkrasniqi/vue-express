<template>
  <div
    class="container d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="col text-center">
      <div class="lead">An error occured!</div>
      <br />
      <router-link :to="{ name: 'index' }" class="text-decoration-none">
        Go to home
      </router-link>
    </div>
  </div>
</template>