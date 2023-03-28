<script setup>
definePageMeta({
  layout: "inner",
});
</script>
<template>
  <div>
    <h2 class="">Услуги</h2>
    <div class="row mt-5 row-gap-4">
      <div class="col-md-4" v-for="(item, index) in 8" :key="index">
        <services-item />
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-item .service-item-body {
  transform: translateY(100%);
  transition: transform 0.5s ease;
}
.service-item:hover .service-item-body {
  transition: transform 0.5s ease;
  transform: translateY(0);
}
</style>

