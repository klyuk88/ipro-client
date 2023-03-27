<template>
  <section class="py-6 position-relative">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <h2>Наши партенры</h2>
        <nuxt-link
          to="#"
          class="text-decoration-none fs-6 text-secondary hover-accent-color"
        >
          Все партнеры
        </nuxt-link>
      </div>
      <p class="text-secondary w-75 mt-3">
        Далеко-далеко за, словесными горами в стране гласных и согласных живут
        рыбные тексты. Безопасную, вдали даже если встретил своего продолжил над
        последний образ?
      </p>

      <swiper
        class="partners-slider pb-5 mt-5 px-1"
        :slides-per-view="5"
        :modules="[SwiperNavigation, SwiperPagination]"
        :navigation="{
          nextEl: '.partners-slider-next-nav',
          prevEl: '.partners-slider-prev-nav',
        }"
        pagination
      >
        <swiper-slide
        v-for="(item, index) in 8" :key="index"
        >
        <div class="d-flex align-items-center gap-3 p-4 border border-1 partner-item">
          <img src="@/assets/img/partners_logo.png" class="partner-logo"/>
          <h3 class="fs-6">Сбер</h3>
        </div>
          
        </swiper-slide>
      </swiper>

      <ui-prev-nav-control
        class="partners-slider-prev-nav position-absolute top-50"
      />
      <ui-next-nav-control
        class="partners-slider-next-nav position-absolute top-50"
      />
    </div>
  </section>
</template>

<style>
.partners-slider .partner-logo {
  height: 40px;
  width: auto;
}

.partners-slider-prev-nav {
  left: 5vw;
  transform: translateY(50%);
}
.partners-slider-next-nav {
  right: 5vw;
  transform: translateY(50%);
}
.partner-item {
  margin-left: -1px;
}

.partners-slider .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: var(--accent-color);
}


@media (max-width: 1500px) {
  .partners-slider-prev-nav {
    left: 10px;
  }
  .partners-slider-next-nav {
    right: 10px;
  }
}
</style>