<script setup lang="ts">
definePageMeta({
  layout: "inner",
});

const reviews = useReviews()

const {data: reviewsList, error} = await reviews.getReviews()


</script>
<template>
    <div>
    <h2 class="">Отзывы</h2>
    <div class="row mt-5">
      <div class="col-lg-9">
        <div class="inner-page-content">
            <ul class="list-unstyled border"
            v-if="reviewsList?.data.length > 0"
            >
              <li
              class="border-bottom p-5"
              v-for="(item, index) in reviewsList?.data" :key="index"
              >
                <reviews-item :reviewItem="item"/>
              </li>
            </ul>
            
            <h4 v-else>Раздел находится в стадии наполнения...</h4>


            <ui-button class="btn-outline-primary d-block mx-auto mt-4"
            v-if="reviewsList?.data.length > 5"
            >Показать еще</ui-button>
        </div>

      </div>
      <div class="col-lg-3 order-lg-first mt-5 mt-lg-0">
        <page-sidebar />
      </div>
    </div>
  </div>
</template>