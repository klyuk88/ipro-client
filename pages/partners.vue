<script setup>
definePageMeta({
  layout: "inner",
});
</script>
<template>
  <div>
    <h2 class="">Партнёры</h2>
    <div class="row mt-5">
      <div class="col-lg-9">
        <div class="inner-page-content">
          <h3 class="">Наши партнеры</h3>
          <br />
          <p>
            Далеко-далеко за словесными горами в стране гласных, и согласных
            живут рыбные тексты. Взобравшись скатился, мир ручеек свою маленькая
            подзаголовок всеми домах ты! Они языкового образ речью страну рот
            предупреждал безорфографичный раз то?
          </p>
        </div>

        <ul class="mt-5 list-unstyled border border-bottom-0">
          <li
            class="border-bottom p-4 d-flex flex-column flex-lg-row align-items-center gap-4"
            v-for="(item, index) in 4"
            :key="index"
          >
            <img
              src="@/assets/img/partners_logo.png"
              alt=""
              style="width: 120px"
            />
            <div class="">
              <h4 class="fs-4">Сбер</h4>
              <p class="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur fuga, labore id nam iste fugit placeat dolore
                voluptatibus ratione dolor asperiores, dolores dignissimos quae
                inventore, minus ipsum molestias nobis dolorum!
              </p>
            </div>
          </li>
        </ul>

        <button class="btn btn-outline-primary d-block mx-auto mt-4">
          Показать ещё
        </button>
      </div>
      <div class="col-lg-3 order-lg-first mt-5 mt-lg-0">
        <page-sidebar />
      </div>
    </div>
  </div>
</template>

<style>
</style>

