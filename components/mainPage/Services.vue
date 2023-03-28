<template>
  <section class="services py-6 bg-light">
    <div class="container">
      <h2>Популярные услуги</h2>
      <p class="mt-4 text-secondary w-75">
        Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты. Своего семантика скатился предупреждал однажды рыбными
        всеми диких запятых пустился великий знаках гор имени злых последний
        если проектах.
      </p>
      <div class="row mt-5 row-gap-4">
        <div class="col-md-4" v-for="(item, index) in 6" :key="index">
          <services-item />
        </div>
      </div>
      <nuxt-link to="#" class="text-decoration-none">
        <button class="btn btn-outline-primary rounded-1 mx-auto d-block mt-5">
          Смотреть все услуги
        </button>
      </nuxt-link>
    </div>
  </section>
</template>

