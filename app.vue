<script setup>
const callOrderShow = useCallOrderModal();
const writeDirectorShow = useWriteDirectorModal();
</script>
<template>
  <modals-call-order v-if="callOrderShow" />
  <modals-write-director v-if="writeDirectorShow" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
