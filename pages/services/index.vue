<script setup lang="ts">
definePageMeta({
  layout: "inner",
});

const services = useServices()
const {data: servicesList, error} = await services.getServicesList();

</script>
<template>
  <div>
    <h2 class="">Услуги</h2>
    
    <div class="py-5" v-if="error">
      <h2 class="">Возникла ошибка обработки данных, мы уже работаем над её устранением.</h2>
    </div>

    <div class="row mt-5 row-gap-4" v-if="servicesList?.data?.length > 0">
      <div class="col-md-6 col-lg-4" v-for="(item, index) in servicesList?.data" :key="index">
        <services-item :service-item="item"/>
      </div>
    </div>
    
    <div class="py-5" v-if="servicesList?.data?.length <= 0">
      <h2 class="">Раздел находится в стадии наполениня...</h2>
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

