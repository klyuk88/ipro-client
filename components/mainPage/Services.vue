<template>
  <section class="services py-6 bg-light">
    <div class="container">
      <h2>Популярные услуги</h2>
      <p class="mt-4 text-secondary w-75">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Своего семантика скатился предупреждал однажды рыбными всеми диких запятых пустился великий знаках гор имени злых последний если проектах.</p>
      <div class="row mt-5 row-gap-4">

        <div class="col-md-4"
        v-for="(item, index) in 6" :key="index"
        >
          <nuxt-link to="#" class="text-decoration-none py-3">
            <div class="service-item w-100 position-relative d-flex flex-column justify-content-end overflow-hidden">
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark z-1 opacity-50"></div>
              <nuxt-img src="https://www.lada.kz/uploads/posts/2022-10/1666970976_lazernaya-rezka-metalla.jpg" class="object-fit-cover position-absolute top-0 start-0 w-100 h-100 service-item-image" />
              <h3 class="fs-5 text-dark position-relative p-4 text-white z-2">Лазерная резка металла</h3>
            </div>
          </nuxt-link>
        </div>
      </div>
      <nuxt-link to="#" class="text-decoration-none">
        <button class="btn btn-outline-primary rounded-1 mx-auto d-block mt-5">Смотреть все услуги</button>
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped>
.service-item {
  aspect-ratio: 4/3;
}
.service-item-image {
transition: transform .3s ease;
}
.service-item:hover .service-item-image {
  transform: scale(1.1);
  transition: transform .3s ease;
}

</style>