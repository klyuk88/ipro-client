<script setup lang="ts">
definePageMeta({
  layout: "inner",
});

const route = useRoute()
const articles = useArticles()

const {error, data: singlePost } = await articles.getSingleArticle(`${route.params.slug}`)

</script>
<template>
  <h2>{{singlePost?.data[0].attributes.title}}</h2>
  <div v-html="singlePost?.data[0].attributes.content" class="mt-5"></div>
</template>