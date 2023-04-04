<script setup>
definePageMeta({
  layout: "inner",
});
</script>
<template>
  <div>
    <h2 class="">Статьи</h2>
        <div class="row row-gap-4 mt-5">
          <div class="col-md-6 col-xl-3" v-for="(item, index) in 6" :key="index">
            <news-item class="shadow"/>
          </div>
        </div>

        <button class="btn btn-outline-primary d-block mx-auto mt-4">
          Показать ещё
        </button>
  </div>
</template>

<style>
</style>

