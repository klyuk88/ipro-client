<template>
  <section class="news bg-light py-6">
    <div class="container">
      <h2>Новости</h2>
      <p class="mt-3 w-75 text-secondary">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Снова которое буквенных он наш коварных грамматики толку, запятой имени последний речью, решила всеми своего обеспечивает заглавных пор даже на берегу!</p>

      <div class="row mt-5">

        <div class="col-md-3"
        v-for="(item, index) in 4" :key="index"
        >
          <nuxt-link to="#" class="ratio ratio-4x3 hover-opacity-75">
            <nuxt-img src="/mock-img-sq.jpg"/>
          </nuxt-link>
          <div class="p-4 bg-white">
            <p class="fs-8 text-secondary">02.02.2023</p>
            <nuxt-link to="#" class="text-decoration-none text-dark"> <h3 class="fs-6 mt-2">Расширение литейного производства</h3></nuxt-link>
          </div>
        </div>
      </div>
      <nuxt-link to="#" class="text-decoration-none"><button class="btn btn-outline-primary mt-5 mx-auto d-block">Читать все новости</button></nuxt-link>
      
    </div>
  </section>
</template>