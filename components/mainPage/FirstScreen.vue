<template>
  <section class="position-relative">
    <swiper
      class="main-screen-slider"
      :slides-per-view="1"
      :modules="[SwiperNavigation, SwiperPagination]"
      :navigation="{
        nextEl: '.main-screen-slider-nav .next-nav',
        prevEl: '.main-screen-slider-nav .preview-nav',
      }"
      pagination
    >
      <swiper-slide>
        <nuxt-img src="/mock-img-1.jpg" class="banner" />
        <div class="container">
          <div
            class="main-slider-content position-absolute w-50 top-50 translate-middle-y"
          >
            <h2>Лучшая комания по металлобрабоктке</h2>
            <p class="mt-4">
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут рыбные тексты. Ее выйти своего, семантика осталось агентство
              снова курсивных пунктуация инициал единственное, однажды страна?
              То однажды букв рот запятой, буквоград свое!
            </p>
            <button class="btn btn-primary rounded-1 mt-4 px-4 py-2">
              Подробнее
            </button>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <nuxt-img src="/mock-img-1.jpg" class="banner opacity-75" />
        <div class="container">
          <div
            class="main-slider-content position-absolute w-50 top-50 translate-middle-y"
          >
            <h2>Лучшая комания по металлобрабоктке</h2>
            <p class="mt-4">
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут рыбные тексты. Ее выйти своего, семантика осталось агентство
              снова курсивных пунктуация инициал единственное, однажды страна?
              То однажды букв рот запятой, буквоград свое!
            </p>
            <button class="btn btn-primary rounded-0 mt-4 px-4 py-2">
              Подробнее
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="main-screen-slider-nav z-3 position-absolute">
      <ui-prev-nav-control class="position-absolute start-0 top-0"/>
      <ui-next-nav-control class="position-absolute end-0 top-0"/>
    </div>
  </section>
</template>

<style>
.main-screen-slider {
  width: 100%;
  overflow: hidden;
  height: 650px;
}
.main-screen-slider .banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
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
</style>