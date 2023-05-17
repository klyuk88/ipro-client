<script setup lang="ts">
const props = defineProps(['newsItem'])
if(!props.newsItem) {
  console.error("No prop passed to news item");
  
}
</script>
<template>
  <div class="rounded-2 overflow-hidden">
    <nuxt-link :to="'/posts/' + props.newsItem?.attributes.slug" class="ratio ratio-4x3 hover-opacity-75 d-block">
      <img :src="$config.public.apiURL + props.newsItem?.attributes.thumbnail.data?.attributes.url" 
      v-if="props.newsItem?.attributes.thumbnail.data"
      />
    </nuxt-link>
    
    <div class="p-4 bg-white">
      <p class="fs-8 text-secondary">{{new Date(props.newsItem?.attributes.date).toLocaleDateString()}}</p>
      <nuxt-link to="#" class="text-decoration-none text-dark">
        <h3 class="fs-6 mt-2">{{props.newsItem?.attributes.title}}</h3></nuxt-link
      >
    </div>
  </div>
</template>