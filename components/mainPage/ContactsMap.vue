<template>
    <section class="contacts-map position-relative">
      <div class="position-absolute start-0 top-0 w-100 h-100"></div>
      <div class="contacts-map-info position-absolute bg-primary w-75 p-4 mt-5 start-50 translate-middle-x text-white row">
        <div class="col-md-4">
          <h5 class="fs-6 fw-semibold">Адрес офиса</h5>
          <p class="mt-2">г. Москва, Дмитрия Ульянова Улица, 44 стр.1</p>
        </div>
        <div class="col-md-3 offset-md-1">
          <h5 class="fs-6 fw-semibold">Телефон</h5>
          <a href="tel:+" class="text-white text-decoration-none fs-6 mt-2 d-inline-block">+7 495 123 45 67</a>
        </div>

        <div class="col-md-3 offset-md-1">
          <h5 class="fs-6 fw-semibold">E-mail</h5>
          <a href="mailto:" class="text-white text-decoration-none fs-6 mt-2 d-inline-block">ipro@ipro.com</a>
        </div>

      </div>


      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A27d397a0e93ca68d1ce4a483bd8b0c658c0724e5a13cbf5c5dd471986e470784&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
    </section>
</template>

<style scoped>
/* .contacts-map-info {
  
} */
</style>