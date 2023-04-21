<template>
  <div>
    <the-header></the-header>
    <section class="border-top py-5">
      <div class="container">
        <bread-crumbs />
        <slot/>
      </div>
    </section>
     <cta-section v-if="$route.path !== '/calculation'" /> 
    <the-footer></the-footer>
  </div>

</template>