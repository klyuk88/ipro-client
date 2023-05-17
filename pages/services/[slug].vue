<script setup>
// import { useServicesStore } from "@/stores/services.js";

const services = useServices();
const route = useRoute()
const {error, data: singleService} = await services.getSingleService(route.params.slug);

</script>
<template>
  <div class="border-top">
    <div class="container pt-5"><bread-crumbs /></div>
    <pre>
      {{singleService?.data[0].attributes.content}}
      {{error}}
    </pre>
    
    <div class="single-service-header position-relative">
      <img
        v-if="singleService?.data[0].attributes.cover.data?.attributes.url"
        :src="$config.public.apiURL + singleService?.data[0].attributes.cover.data?.attributes.url"
        alt=""
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-1"
      />
      <div
        class="position-absolute w-100 h-100 top-0 start-0 bg-dark opacity-75 z-2"
      ></div>
      <div class="container text-white position-absolute start-50 z-3 top-50 translate-middle ">
        <h1 class="text-uppercase fw-bold">{{singleService?.data[0].attributes.title}}</h1>
        <p class="mt-3 w-lg-50">{{singleService?.data[0].attributes.shortDescription}}</p>
        <ui-button class="btn-primary px-5 py-3 mt-5 text-uppercase fw-medium">Оставить заявку</ui-button>
      </div>

    </div>


      <div class="py-5 py-lg-6"
      v-if="singleService?.data[0].attributes.content"
      >
          <div class="container">
            <h2>Описание</h2>
            <div class="mt-4" v-html="singleService?.data[0].attributes.content"></div>
          </div>
      </div>

      <main-page-reviews class="bg-light"/>
      <main-page-partners/>
      <cta-section/>
      
  </div>
</template>

<style scoped>
.single-service-header {
  height: 650px;
}
@media screen and (max-width: 576px) {
  .single-service-header {
  height: 500px;
}
}
</style>