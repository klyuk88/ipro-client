<script setup>
definePageMeta({
  layout: "inner",
});

const partners = usePartners()
const {error, data: partnersList} = await partners.getPartners()


</script>
<template>
  <div
  v-if="partnersList?.data.length > 0"
  >
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
            v-for="(item, index) in partnersList?.data"
            :key="index"
          >
            <img
              :src="$config.public.apiURL + item?.attributes.logo.data?.attributes.url"
              alt=""
              style="width: 120px"
              v-if="item?.attributes.logo.data"
            />
            <div class="">
              <h4 class="fs-4">{{item?.attributes.title}}</h4>
              <p class="mt-2">
                {{item?.attributes.description}}
              </p>
            </div>
          </li>
        </ul>

        <ui-button class="btn-outline-primary d-block mx-auto mt-4">
          Показать ещё
        </ui-button>
      </div>
      <div class="col-lg-3 order-lg-first mt-5 mt-lg-0">
        <page-sidebar />
      </div>
    </div>
  </div>
</template>

<style>
</style>

