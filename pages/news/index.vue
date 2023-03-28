<script setup>
definePageMeta({
  layout: "inner",
});
</script>
<template>
  <div>
    <h2 class="">Новости</h2>
    <div class="row mt-5">
      <div class="col-md-3">
        <page-sidebar />
      </div>
      <div class="col-md-9">
        <div class="row row-gap-4">
          <div class="col-md-4" v-for="(item, index) in 6" :key="index">
            <news-item class="shadow"/>
          </div>
        </div>

        <button class="btn btn-outline-primary d-block mx-auto mt-4">
          Показать ещё
        </button>
      </div>
    </div>
  </div>
</template>

<style>
</style>

