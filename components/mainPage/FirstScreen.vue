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
      <swiper-slide>
        <img
          src="@/assets/img/main-slider-1.jpg"
          class="banner position-absolute w-100 h-100 object-fit-cover top-0 start-0"
        />
        <div
          class="position-absolute w-100 h-100 top-0 start-0 bg-black opacity-50"
        ></div>
        <div class="container">
          <div
            class="main-slider-content position-absolute top-50 translate-middle-y ps-5 text-white"
          >
            <h2>Лучшая комания по металлобрабоктке</h2>
            <p class="mt-4 w-50">
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
        <img
          src="@/assets/img/main-slider-2.jpg"
          class="banner position-absolute w-100 h-100 object-fit-cover top-0 start-0"
        />
        <div
          class="position-absolute w-100 h-100 top-0 start-0 bg-black opacity-50"
        ></div>
        <div class="container">
          <div
            class="main-slider-content position-absolute top-50 translate-middle-y ps-5 text-white"
          >
            <h2>Лучшая комания по металлобрабоктке</h2>
            <p class="mt-4 w-50">
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
    </swiper>

    <div class="main-screen-slider-nav z-3 position-absolute">
      <ui-prev-nav-control class="position-absolute start-0 top-0" />
      <ui-next-nav-control class="position-absolute end-0 top-0" />
    </div>
  </section>
</template>

<style>
.main-screen-slider {
  width: 100%;
  overflow: hidden;
  height: 60vh;
}
/* .main-screen-slider .banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
} */
.main-screen-slider-nav {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
}

.main-screen-slider .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: var(--accent-color);
}

@media screen and (max-width: 1500px) {
  .main-screen-slider-nav {
    width: 97vw;
  }
}
</style>