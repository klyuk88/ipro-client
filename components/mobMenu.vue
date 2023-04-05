<script setup>
const mobMenu = useMobileMenu()
</script>
<template>
  <div
    class="position-fixed w-100 start-0 top-0 bg-white vh-100 mobile-menu"
    :class="{active: mobMenu}"
  >
    <img
      src="@/assets/img/close.png"
      alt=""
      class="position-absolute close-menu-btn"
      @click="mobMenu = false"
    />
    <div class="pt-5">
      <img src="@/assets/img/logo.jpg" alt="" class="mx-auto d-block" style="width: 100px"/>
      <div class="p-3 d-flex">
        <input type="text" class="form-control bg-light" placeholder="Поиск">
        <button class="btn btn-primary rounded-0"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
      </div>
      <ul class="list-unstyled w-100 border border-bottom-0 mt-4">
        <li>
          <nuxt-link
            to="/"
            class="text-decoration-none p-3 border-bottom d-block"
          >
            Главная
          </nuxt-link>
        </li>
        <li class="border-bottom pt-3 pb-3 position-relative">
          <nuxt-link to="/about" class="text-decoration-none ms-3 d-block">
            О компании
            <!-- <ul class="list-unstyled mt-3 mob-submenu">
            <li class="w-100 border-top">
              <nuxt-link
                to="#"
                class="text-decoration-none ms-3 pt-3 pb-3 d-block"
              >
                Производство
              </nuxt-link>
            </li>
            <li class="w-100 border-top">
              <nuxt-link
                to="#"
                class="text-decoration-none ms-3 pt-3 pb-3 d-block"
              >
                Производство
              </nuxt-link>
            </li>
            <li class="w-100 border-top">
              <nuxt-link
                to="#"
                class="text-decoration-none ms-3 pt-3 pb-3 d-block"
              >
                Производство
              </nuxt-link>
            </li>
          </ul> -->
          </nuxt-link>
          <!-- <img
            src="@/assets/img/chevron-down-menu.png"
            alt=""
            class="submenu-arrow position-absolute"
          /> -->
        </li>

        <li class="border-bottom pt-3 pb-3">
          <nuxt-link to="/services" class="text-decoration-none ms-3">
            Услуги
          </nuxt-link>
        </li>

        <li class="border-bottom pt-3 pb-3">
          <nuxt-link to="/posts" class="text-decoration-none ms-3">
            Статьи
          </nuxt-link>
        </li>

        <li class="border-bottom pt-3 pb-3">
          <nuxt-link to="/projects" class="text-decoration-none ms-3">
            Проекты
          </nuxt-link>
        </li>
        <li class="border-bottom pt-3 pb-3">
          <nuxt-link to="/contacts" class="text-decoration-none ms-3">
            Контакты
          </nuxt-link>
        </li>
        <li class="border-bottom pt-3 pb-3">
          <nuxt-link to="/calculation" class="text-decoration-none ms-3">
            Расчёт стоимости
          </nuxt-link>
        </li>
      </ul>
      <div class="bg-light pt-3" style="padding-bottom: 70px">
        <ul class="ps-3">
          <li class="d-flex gap-3 align-items-center mb-3">
            <i class="fa-solid fa-location-dot"></i>
            <p>Москва, ул Дмитровская, 10</p>
          </li>
          <li class="d-flex gap-3 align-items-center mb-3">
            <i class="fa-solid fa-phone"></i>
           <a href="tel:+7(495)123-45-76">+7 (495) 123 45 76</a>
          </li>
          <li class="d-flex gap-3 align-items-center mb-3">
            <i class="fa-solid fa-envelope"></i>
           <a href="mailto:">info@mail.com</a>
          </li>
        </ul>
          <div class="header-socails ps-3">
          <a href="http://" target="_blank" rel="noopener noreferrer" class="bg-dark">
            <img src="@/assets/img/vk-logo-of-social-network.png" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="bg-dark">
            <img src="@/assets/img/telegram.png" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="bg-dark">
            <img src="@/assets/img/whatsapp.png" alt="" />
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.mobile-menu {
  z-index: 99;
  overflow-y: auto;
  transition: transform .3s ease;
  left: -150%;
  transform: translateX(-150%);
}
.close-menu-btn {
  width: 25px;
  opacity: 0.5;
  top: 20px;
  right: 20px;
}

.mob-submenu li:last-child a {
  padding-bottom: 0 !important;
}

.submenu-arrow {
  width: 20px;
  opacity: 0.5;
  right: 15px;
  top: 15px;
}

.mobile-menu.active {
  left: 0;
  transform: translateX(0);
  transition: transform .3s ease;
}

</style>