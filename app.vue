<script setup>
import { onMounted } from 'vue'

const route = useRoute()
const callOrderShow = useCallOrderModal();
const writeDirectorShow = useWriteDirectorModal();
// const showBtn = ref(true)

// onMounted(() => {
//   if (route.path === '/') {
//        document.addEventListener('scroll', (event) => {
//     if (window.pageYOffset > 500) {
//       showBtn.value = true
//     } else {
//       showBtn.value = false
//     }
//   })
//   } else {
//     showBtn.value = tru
//   }

// })

</script>
<template>
  <modals-call-order v-if="callOrderShow" />
  <modals-write-director v-if="writeDirectorShow" />
  <NuxtLayout>
    <NuxtLoadingIndicator :color="'#1d2963'" />
    <NuxtPage />
    <CulcBottomCta v-if="$route.path !== '/calculation'"/>
  </NuxtLayout>
</template>

