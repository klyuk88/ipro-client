<script setup>
import bannerBg from "@/assets/img/main-slider-2.jpg";
import {useMainPageStore} from '@/stores/mainPage.js'

const mainPageStore = useMainPageStore()
const config = useRuntimeConfig()


</script>
<template>
  <section class="position-relative">
    <swiper
      class="main-screen-slider"
      :slides-per-view="1"
      :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
      :navigation="{
        nextEl: '.main-screen-slider-nav .next-nav',
        prevEl: '.main-screen-slider-nav .preview-nav',
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      pagination
    >
      <swiper-slide class="">
        <div
          class="position-absolute w-100 h-100 top-0 start-0 bg-black opacity-75"
        ></div>
        <div
          class="main-screen-banner d-flex flex-column align-items-center justify-content-center bg-set"
          :style="{backgroundImage: `url(${mainPageStore.mainPageData !== null && mainPageStore.mainPageData.data.attributes.banner.data !== null ? config.public.apiURL + mainPageStore.mainPageData.data.attributes.banner.data.attributes.url : bannerBg})`}"
        >
          <div class="container">
            <div
              class="main-slider-content text-center z-3 position-relative text-white"
            >
              <h1 class="fw-bold text-uppercase main-title">
                <template v-if="mainPageStore.mainPageData !== null && mainPageStore.mainPageData.data.attributes.title !== null">
                  {{mainPageStore.mainPageData.data.attributes.title}}
                </template>
                <template v-else>
                  Срочное изготовление<br />изделий из <span class="bg-primary px-2">металла</span>
                </template>
                
              </h1>
              <div class="mt-4">
                <h2 class="fs-3 d-none d-lg-block">Собственное производство | Доставка | Изготовление за 24 часа</h2>
                <h2 class="fs-4 d-lg-none">
                  Собственное производство<br>Изготовление за 24 часа<br>Доставка
                  </h2>
              </div>
              
              <!-- <p class="w-md-75 w-lg-50 mx-auto mt-4">
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. Ее выйти своего, семантика осталось
                агентство снова курсивных пунктуация инициал
              </p> -->
              <nuxt-link
              to="/calculation"
                class="btn btn-primary rounded-5 mt-4 px-4 px-lg-5 py-3 text-uppercase fw-bolder"
              >
                Расчёт стоимости
              </nuxt-link>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- <div class="main-screen-slider-nav z-3 position-absolute d-none d-md-block">
      <ui-prev-nav-control class="position-absolute start-0 top-0" />
      <ui-next-nav-control class="position-absolute end-0 top-0" />
    </div> -->
  </section>
</template>

<style>
.main-screen-banner {
  height: 60vh;
}

.main-screen-slider-nav {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
}

.main-screen-slider .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: var(--accent-color);
}

.main-title {
  font-size: 35px;
}

@media screen and (max-width: 1500px) {
  .main-screen-slider-nav {
    width: 97vw;
  }
}
@media screen and (max-width: 996px) {
  .main-screen-banner {
    height: 500px;
  }
}

@media (min-width: 768px) {
  .main-title {
    font-size: 40px;
  }
}
@media (min-width: 996px) {
  .main-title {
    font-size: 45px;
  }
}
@media (min-width: 1700px) {
  .main-title {
    font-size: 65px;
  }
}
</style>