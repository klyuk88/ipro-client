<script setup lang="ts">
const props = defineProps(['reviewItem'])

</script>
<template>
  <div class="review-slider-item">
    <pre>
      {{props.reviewItem}}
    </pre>
           <div class="review-item-header">
            <div class="logo-block d-flex align-items-center gap-3">
              <img :src="$config.public.apiURL + reviewItem?.attributes.logo.data?.attributes.url" class="review-slider-item-logoicon" style="width: 50px"
              v-if="reviewItem?.attributes.logo.data"
              />
              <div>
                <p class="fs-7 text-secondary">{{new Date(reviewItem?.attributes.date).toLocaleDateString()}}</p>
                <h4 class="fs-4 mt-2">{{reviewItem?.attributes.company}}</h4>
              </div>
            </div>
          </div>
          <div class="review-item-content mt-4 d-flex align-items-start gap-4">
            <i class="fa-sharp fa-solid fa-quote-left fs-2 text-dark"></i>
            <p class="fs-6 text-secondary w-75">
              {{reviewItem?.attributes.content}}
            </p>

          </div>
        </div>
</template>