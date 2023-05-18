<script setup lang="ts">

definePageMeta({
  layout: "inner",
});
const projectsPage = useProjectsPage()
const config = useRuntimeConfig()

const {error, data: projectsPageData }: {error: Ref<any>, data: Ref<any>} = await projectsPage.getProjectsGallery()

const visibleRef = ref(false);
const indexRef = ref(0);

const imgs = [];
for (const item of projectsPageData?.value.data.attributes.gallery.data) {
  imgs.push(config.public.apiURL + item.attributes.url)
}


const showImg = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);




</script>
<template>
  <h2>{{projectsPageData?.data.attributes.title}}</h2>
  <p class="text-secondary mt-3">
    {{projectsPageData?.data.attributes.description}}
  </p>
  <div class="row mt-4 g-0"
  v-if="projectsPageData?.data.attributes.gallery.data?.length > 0"
  >
      <div class="col-md-4 col-lg-3"
      v-for="(item, index) in projectsPageData?.data.attributes.gallery.data" :key="index"
      >
        <div class="ratio ratio-1x1">
          <img :src="$config.public.apiURL + item.attributes.url" alt="" class="object-fit-cover hover-opacity-75" @click="() => showImg(index)">
        </div>
      </div>
  </div>

  <h4 v-else class="mt-5">Раздел находится в стадии наполнения...</h4>
  <ui-button class="btn-outline-primary mx-auto d-block mt-4 px-4 py-2">Загрузить еще</ui-button>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgs"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>

</template>