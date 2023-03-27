<template>
  <section class="py-6 reviews position-relative">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <h2>Отзывы о нашей работе</h2>
        <nuxt-link to="#" class="text-decoration-none fs-6 text-secondary hover-accent-color">
          Смотреть все отзывы
        </nuxt-link>
      </div>
      
      <div class="reviews-slider-block mt-5">
      <swiper
        class="reviews-slider"
        :slides-per-view="1"
        :modules="[SwiperNavigation, SwiperPagination]"
        :navigation="{
          nextEl: '.reviews-slider-next-nav',
          prevEl: '.reviews-slider-prev-nav'
        }"
        pagination
      >
        <swiper-slide class="review-slider-item pb-5"
        v-for="(item, index) in 3" :key="index"
        >
          <div class="review-item-header">
            <div class="logo-block d-flex align-items-center gap-3">
              <img src="@/assets/img/gazprom-logo.jpeg" class="review-slider-item-logoicon"/>
              <div>
                <p class="fs-7 text-secondary">02.02.2023</p>
                <h4 class="fs-4 mt-2">ООО "Газпром"</h4>
              </div>
            </div>
          </div>
          <div class="review-item-content mt-4 d-flex align-items-start gap-4">
            <i class="fa-sharp fa-solid fa-quote-left fs-2 text-primary"></i>
            <p class="fs-6 text-secondary w-75">
              Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Рыбными безорфографичный, безопасную языкового возвращайся толку использовало, ее, обеспечивает страну которое живет дал путь имени злых текст до наш строчка залетают составитель предупредила заглавных? Ipsum вскоре, первую переулка ты, журчит lorem наш осталось заголовок вопрос, запятой семь продолжил маленькая текстами!
            </p>

          </div>
        </swiper-slide>
    

      </swiper>
        <ui-prev-nav-control class="reviews-slider-prev-nav position-absolute top-50"/>
        <ui-next-nav-control class="reviews-slider-next-nav position-absolute top-50"/>
      </div>
  
    </div>
  </section>
</template>



<style>
.review-slider-item-logoicon {
  width: 50px;
}

.reviews-slider-prev-nav {
  left: 5vw;
}
.reviews-slider-next-nav {
  right: 5vw;
}

.reviews-slider .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: var(--accent-color);
}
@media (max-width: 1500px) {
  .reviews-slider-prev-nav {
    left: 10px;
  }
  .reviews-slider-next-nav {
    right: 10px;
  }
}

</style>