<template>
  <transition name="fade" mode="out-in">
    <component :is="$route.meta.layout || 'default'">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
  </transition>
</template>

<style>
body {
  background-color: rgb(236, 236, 236);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
