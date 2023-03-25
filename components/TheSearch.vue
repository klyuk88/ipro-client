<script setup>
import { onMounted } from 'vue'
const props = defineProps(['activeSearch'])
const emits = defineEmits(['closeSearch'])

</script>
<template>
<div class="search-overlay position-fixed top-0 start-0 w-100 bg-black" style="z-index: 4"
v-if="props.activeSearch"
@click.self="$emit('closeSearch')"
:class="{'active': props.activeSearch}"
></div>
<div class="search-block position-fixed top-0 start-0 w-100 bg-white py-4 shadow-lg"
:class="{'active': props.activeSearch}"
ref="searchBlock"
style="z-index: 5"
>
   <div class="container">
    <div class="d-flex align-items-center justify-content-center"> 
      <input type="text" class="form-control w-75 rounded-0" placeholder="Поиск по сайту" />
    <button class="btn btn-primary rounded-0"><i class="fa-solid fa-magnifying-glass"></i> Найти</button>

    <div class="ms-4 cursor-pointer" @click="$emit('closeSearch')">
       <i class="fa-solid fa-chevron-up text-secondary"></i>
    </div>
   
    </div>
    
  </div>
</div>
 
</template>

<style scoped>
.search-block {
  z-index: 5;
  transform: translateY(-150%);
  transition: transform .3s ease;
}

.search-block.active {
  transform: translateY(0);
  transition: transform .3s ease;
}

.search-overlay {
  transition: opacity .3s ease;
  height: 0;
  opacity: 0;
  overflow: hidden;
}

.search-overlay.active {
  transition: opacity .3s ease;
  height: 100%;
  opacity: .5;
}

</style>