<template>
  <div
    class="position-fixed bottom-0 start-0 p-2 d-flex align-items-center justify-content-center justify-content-lg-start p-lg-4 z-3 culc-bottom-btn"
  >
    <nuxt-link to="/calculation" class="text-decoration-none">
      <ui-button
        class="btn-primary px-4 py-3 d-flex align-items-center gap-3 text-uppercase fw-medium"
        ><i class="fa-solid fa-calculator fs-3" style="color: #ffffff"></i>
        Онлайн калькулятор</ui-button
      >
    </nuxt-link>
  </div>
</template>

<style scoped>
/* .culc-bottom-btn {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .5s ease, transform .3s ease;
}

.culc-bottom-btn.active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity .5s ease, transform .3s ease;
} */
</style>