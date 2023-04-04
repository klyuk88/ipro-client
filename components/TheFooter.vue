<script setup>
const callOrderShow = useCallOrderModal()
</script>
<template>
  <footer class="py-5 bg-dark">
    <div class="container">
      <div class="row gy-4">
        <div class="col-6 col-lg-3">
          <ul class="list-unstyled">
            <li class="">
              <nuxt-link to="#" class="text-white text-white text-decoration-none fw-semibold fs-5">О компании</nuxt-link>
              <ul class="list-unstyled pt-2">
                <li class="mt-2">
                  <nuxt-link to="#" class="text-secondary text-decoration-none hover-color-white">
                    Новости
                  </nuxt-link>
                </li>
                <li class="mt-2">
                  <nuxt-link to="#" class="text-secondary text-decoration-none hover-color-white">
                    Производство
                  </nuxt-link>
                </li>
                <li class="mt-2">
                  <nuxt-link to="#" class="text-secondary text-decoration-none hover-color-white">
                    Политиика конфиденциальности
                  </nuxt-link>
                </li>
                <li class="mt-2">
                  <nuxt-link to="#" class="text-secondary text-decoration-none hover-color-white">
                    Партнёры
                  </nuxt-link>
                </li>
                <li class="mt-2">
                  <nuxt-link to="#" class="text-secondary text-decoration-none hover-color-white">
                    Проекты
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <ul class="list-unstyled">
            <li class="">
              <nuxt-link to="#" class="text-white text-white text-decoration-none fw-semibold fs-5">Услуги</nuxt-link>
              <ul class="list-unstyled pt-2">
                <li class="mt-2"
                v-for="(item, index) in 9" :key="index"
                >
                  <nuxt-link to="#" class="text-secondary text-decoration-none hover-color-white">
                    Фрезеровка металла
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
           <ul class="list-unstyled">
            <li class="">
              <nuxt-link to="#" class="text-white text-white text-decoration-none fw-semibold fs-5">Помощь</nuxt-link>
              <ul class="list-unstyled pt-2">
                <li class="mt-2">
                  <nuxt-link to="#" class="text-secondary text-decoration-none hover-color-white">
                    Доставка и оплата
                  </nuxt-link>
                </li>
                <li class="mt-2">
                  <nuxt-link to="#" class="text-secondary text-decoration-none hover-color-white">
                    Контакты
                  </nuxt-link>
                </li>
                <li class="mt-2">
                  <nuxt-link to="#" class="text-secondary text-decoration-none hover-color-white">
                    Расчёт стоимости
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <div class="mb-3">
            <i class="fa-regular fa-envelope text-white me-2"></i>
            <a href="mailto:" class="text-white text-decoration-none">ipro@ipro.com</a>
          </div>
          <div class="mb-3">
            <i class="fa-solid fa-phone text-white me-2"></i>
            <a href="tel:" class="text-white text-decoration-none">+7 495 123 45 67</a>
          </div>
          <div class="mb-3">
            <i class="fa-solid fa-location-dot text-white me-2"></i>
            <span class="text-white">Москва, ул. Дмитрия Ульянова, д. 44, стр.1 </span>
          </div>

          <div class="mb-3 d-flex align-items-center gap-2">
            <nuxt-link to="#">
              <img src="@/assets/img/social_1.png" style="width: 30px"/>
            </nuxt-link>
            <nuxt-link to="#">
              <img src="@/assets/img/social_2.png" style="width: 30px"/>
            </nuxt-link>
            <nuxt-link to="#">
              <img src="@/assets/img/social_3.png" style="width: 30px"/>
            </nuxt-link>
          </div>
  
          <div class="mb-3">
           <button class="btn rounded-1 btn-light" @click="callOrderShow = true">Заказать звонок</button>
          </div>
          
        </div>
      </div>
      
      <div class="d-flex align-items-end justify-content-between">
        <img src="@/assets/img/logo-white.png" class="footer-logo mt-5"/>
        <p class="text-secondary fs-7 mt-3">
          © 2023. Все права защищены.
        </p>

        
      </div>
    </div>
  </footer>
</template>

<style>
.footer-logo {
  width: 80px;
  height: auto;
}
</style>