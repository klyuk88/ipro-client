<script setup>
definePageMeta({
  layout: "inner",
});
</script>
<template>
  <div>
    <h2 class="mt-4">Производство</h2>
    <div class="row mt-5">
      <div class="col-md-3">
        <page-sidebar />
      </div>
      <div class="col-md-9">
        <div class="inner-page-content">
          <h3 class="">Наше производство</h3>
          <br />
          <p>
            Далеко-далеко за словесными горами в стране гласных, и согласных
            живут рыбные тексты. Взобравшись скатился, мир ручеек свою маленькая
            подзаголовок всеми домах ты! Они языкового образ речью страну рот
            предупреждал безорфографичный раз то?
          </p>
        </div>
        <swiper
          class="production-slider mt-5"
          :modules="[SwiperNavigation, SwiperPagination]"
          :slides-per-view="1"
          navigation
          pagination
        >
          <swiper-slide>
            <div class="ratio ratio-16x9">
              <img
                src="@/assets/img/christopher-burns-8KfCR12oeUM-unsplash.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="ratio ratio-16x9">
              <img src="@/assets/img/form-section-image.jpg" alt="" class="object-fit-cover" />
            </div>
          </swiper-slide>
        </swiper>

      </div>
    </div>
  </div>
</template>

<style>
.production-slider .swiper-button-next, .production-slider .swiper-button-prev{
  color: #fff;
}
.production-slider .swiper-button-next:after, .production-slider .swiper-button-prev:after{
  font-size: 30px;
}

.production-slider .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #fff;
}

</style>

