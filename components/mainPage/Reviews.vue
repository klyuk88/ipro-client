<script setup lang="ts">
const reviews = useReviews()

const {data: reviewsList, error} = await reviews.getReviews()


</script>

<template>
  <section class="py-5 py-lg-6 reviews position-relative bg-light"
  v-if="reviewsList?.data.length > 0"
  >
    <div class="container">
      <!-- <pre>
        {{reviewsList.data}}
        {{error}}
      </pre> -->
      <div class="d-flex align-items-center justify-content-between">
        <h2>Отзывы о нашей работе</h2>
        <nuxt-link to="/reviews" class="text-decoration-none fs-6 text-secondary hover-accent-color">
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
        <swiper-slide class="pb-5"
        v-for="(item, index) in reviewsList?.data" :key="index"
        >
        <reviews-item :reviewItem="item"/>
         
        </swiper-slide>
    

      </swiper>
        <ui-prev-nav-control class="reviews-slider-prev-nav position-absolute top-50 d-none d-md-block"/>
        <ui-next-nav-control class="reviews-slider-next-nav position-absolute top-50 d-none d-md-block"/>
      </div>
  
    </div>
  </section>
</template>



<style>

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