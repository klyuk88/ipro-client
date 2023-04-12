<script setup>
definePageMeta({
  layout: "inner",
});
</script>
<template>
    <div>
    <h2 class="">Отзывы</h2>
    <div class="row mt-5">
      <div class="col-lg-9">
        <div class="inner-page-content">
            <ul class="list-unstyled border">
              <li
              class="border-bottom p-5"
              v-for="(item, index) in 5" :key="index"
              >
                <reviews-item/>
              </li>
            </ul>
            <ui-button class="btn-outline-primary d-block mx-auto mt-4 ">Показать еще</ui-button>
        </div>
      </div>
      <div class="col-lg-3 order-lg-first mt-5 mt-lg-0">
        <page-sidebar />
      </div>
    </div>
  </div>
</template>