<script setup>
definePageMeta({
  layout: "inner",
});

import image from '../assets/img/news-image.jpg'

const visibleRef = ref(false);
const indexRef = ref(0);
const imgs = [
  image,
  image,
  image,
  image,
];
const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);
</script>
<template>
  <h2>Проекты</h2>
  <p class="text-secondary mt-3">
    Далеко-далеко за словесными горами в стране гласных и согласных, живут
    рыбные тексты. Выйти своего толку назад агентство! Залетают сбить жаренные
    запятой! Рот, великий! Свою раз предупреждал, всеми свой заголовок ты вопрос
    одна рот, образ маленький жизни путь большого текст агентство но если снова
    пунктуация ручеек грамматики вопроса!
  </p>
  <div class="row mt-4 g-0">
      <div class="col-md-3"
      v-for="(src, index) in imgs" :key="index"
      >
        <div class="ratio ratio-1x1">
          <img :src="src" alt="" class="object-fit-cover hover-opacity-75" @click="() => showImg(index)">
        </div>
      </div>
    </div>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgs"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>

</template>