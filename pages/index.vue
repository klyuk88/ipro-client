<script setup>
import {useMainPageStore} from '@/stores/mainPage.js'

const mainPageStore = useMainPageStore()

await mainPageStore.getMainPageData()

</script>
<template>
  <main-page-first-screen />
  <main-page-about />
  <main-page-services />
  <main-page-we-work />
  <main-page-reviews />
  <main-page-partners />
  <main-page-news class="bg-light"/>

  <main-page-contact-form />
  <main-page-contacts-map />
</template>