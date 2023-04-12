<script setup>
const layer = ref(true)
const writeDirectorShow = useWriteDirectorModal()
</script>
<template>
  <section class="contacts-map position-relative" @mouseleave="layer=true">
    <div class="position-absolute start-0 top-0 w-100 h-100 d-none d-md-block" @click="layer=false" v-if="layer"></div>
    <div
      class="container contacts-map-info position-md-absolute bg-info p-4 mt-md-5 start-50 translate-md-middle-x text-white"
    >
      <div class="row gy-4 align-items-center">
        <div class="col-md-6 col-lg-3">
          <h5 class="fs-6 fw-semibold">Адрес</h5>
          <p class="mt-2 w-75">Москва, ул. Дмитрия Ульянова, д. 44, стр.1</p>
        </div>
        <div class="col-md-6 col-lg-3">
          <h5 class="fs-6 fw-semibold">Телефон</h5>
          <a
            href="tel:+"
            class="text-white text-decoration-none fs-6 mt-2 d-inline-block"
            >+7 495 123 45 67</a
          >
        </div>

        <div class="col-md-6 col-lg-3">
          <h5 class="fs-6 fw-semibold">E-mail</h5>
          <a
            href="mailto:"
            class="text-white text-decoration-none fs-6 mt-2 d-inline-block"
            >ipro@ipro.com</a
          >
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="d-flex align-items-center gap-4">
            <img
              src="@/assets/img/director.jpeg"
              class="rounded-5"
              style="width: 60px; height: 60px"
            />
            <div>
              <h5 class="fs-6 fw-semibold">Связаться с руководителем</h5>
              <button class="btn btn-light mt-3 px-4 rounded-5" @click="writeDirectorShow = true">Написать</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  <client-only>
       <iframe
       id="map"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A27d397a0e93ca68d1ce4a483bd8b0c658c0724e5a13cbf5c5dd471986e470784&amp;source=constructor"
      width="100%"
      height="600"
      frameborder="0"
    ></iframe>
  </client-only>
 
  </section>
</template>

<style scoped>
@media screen and (max-width: 576px) {
  #map {
    height: 400px;
}
}

</style>