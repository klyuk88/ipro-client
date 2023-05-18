<script setup>
const props = defineProps(['serviceItem'])

if(!props.serviceItem) {
  console.error("Service item props is emplty");
}

</script>
<template>
  
    <div
      class="service-item shadow w-100 position-relative d-flex flex-column justify-content-end overflow-hidden rounded-2"
      style="aspect-ratio: 1/1"
    >
      <div
        class="position-absolute top-0 start-0 w-100 h-100 bg-dark z-1 opacity-50 list"
      ></div>

      <img
        v-if="props.serviceItem?.attributes.thumbnail.data"
        :src="$config.public.apiURL + props.serviceItem?.attributes.thumbnail.data.attributes?.url"
        class="object-fit-cover service-item-image position-absolute w-100 h-100 top-0 start-0"
      />
     
      <img
        v-else
        src="@/assets/img/service-image.jpeg"
        class="object-fit-cover service-item-image position-absolute w-100 h-100 top-0 start-0"
      />

      <h3 class="fs-5 position-relative p-4 text-white z-2">
        {{props.serviceItem?.attributes.title}}
      </h3>

      <div
        class="p-4 position-absolute bottom-0 start-0 w-100 bg-white z-3 d-flex align-items-start justify-content-end flex-column service-item-body"
      >
        <nuxt-link to="/services/slug" class="text-decoration-none text-dark">
          <h4 class="fs-5">{{props.serviceItem?.attributes.title}}</h4>
        </nuxt-link>

        <p class="mt-3 text-secondary" v-if="props.serviceItem?.attributes.shortDescription !== null">
          {{props.serviceItem?.attributes.shortDescription}}
        </p>
        <div class="d-flex flex-column flex-xl-row align-items-xl-center gap-3 w-100 w-xl-auto mt-3">
          <!-- <button class="btn btn-primary px-4 py-2 rounded-5">
            Расчёт стоимости
          </button> -->
          <nuxt-link :to="`/services/${props.serviceItem?.attributes.slug}`" class="d-block btn btn-outline-primary rounded-5 px-4 text-decoration-none m-0">
            Подробнее
            <!-- <button class="btn btn-outline-secondary px-4 py-2 mt-xl-3 rounded-1 w-100 w-xl-auto">
              
            </button> -->
          </nuxt-link>
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