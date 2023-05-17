<script setup lang="ts">
const articles = useArticles()
const {error, data: articlesList} = await articles.getArticles(4)

</script>

<template>
  <section class="news py-5 py-lg-6">
    <div class="container">
      <h2>Новости</h2>
      <p class="mt-3 w-md-75 text-secondary">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Снова которое буквенных он наш коварных грамматики толку, запятой имени последний речью, решила всеми своего обеспечивает заглавных пор даже на берегу!</p>

      <div class="row gy-4 mt-5">

        <div class="col-md-6 col-lg-3"
        v-for="(item, index) in articlesList?.data" :key="index"
        >
        <news-item class="shadow" :newsItem="item"/>

        </div>
      </div>
      <nuxt-link to="/news" class="text-decoration-none"><button class="btn btn-outline-primary mt-5 mx-auto d-block rounded-5">Читать все новости</button></nuxt-link>
      
    </div>
  </section>
</template>