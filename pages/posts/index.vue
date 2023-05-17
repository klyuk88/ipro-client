<script setup lang="ts">
definePageMeta({
  layout: "inner",
});
const articles = useArticles()
const {error, data: articlesList} = await articles.getArticles()

</script>
<template>
  <div>
    <h2 class="">Статьи</h2>
        <div class="row row-gap-4 mt-5"
        v-if="articlesList?.data.length > 0"
        >
          <div class="col-md-6 col-xl-3" v-for="(item, index) in articlesList?.data" :key="index">
            <news-item class="shadow" :newsItem="item"/>
          </div>
        </div>

        <h4 v-else class="mt-5">
          Раздел находится в стадии наполнения...
        </h4>

        <ui-button class="btn-outline-primary d-block mx-auto mt-4"
        >
          Показать ещё
        </ui-button>
  </div>
</template>

<style>
</style>

