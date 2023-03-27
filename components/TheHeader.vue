<script setup>
const showSearch = ref(false)

</script>
<template>
  <the-search :activeSearch="showSearch" @closeSearch="showSearch = false"/>
  <div class="">
    <div class="container">
      <div
        class="header-content d-flex align-items-center justify-content-between pt-3"
      >
        <div class="d-flex align-items-center gap-2">
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:" class="text-decoration-none text-secondary"
            >i-pro@ipro.com</a
          >
        </div>

        <div class="header-socails">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/img/vk-logo-of-social-network.png" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/img/telegram.png" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/img/whatsapp.png" alt="" />
          </a>
        </div>

        <div class="d-flex align-items-center gap-5">
          <a
            href="http://"
            class="d-flex align-items-center gap-2 text-decoration-none"
          >
            <i class="fa-solid fa-phone text-dark"></i>
            <span class="text-dark">8 800 123 45 67</span>
          </a>
          <!-- header search -->
          <div class="header-search d-flex align-items-center gap-2 cursor-pointer"
          @click="showSearch = true"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Поиск</span>
          </div>
          <!-- header search -->
        </div>
      </div>
    </div>
  </div>
  <header class="position-sticky top-0 z-3 bg-white py-3">
    <div class="container">
      <div
        class="header-menu-block d-flex align-items-center justify-content-between"
      >
        <div class="header-logo d-flex align-items-center gap-2">
          <nuxt-link to="/" class="text-decoration-none text-dark logo">
            <img src="@/assets/img/logo.jpg" />
          </nuxt-link>
          <div class="logo-line"></div>
          <span class="description lh-sm">
            Компания <br />по металлообработке
          </span>
        </div>

        <nav>
          <ul class="list-unstyled d-flex align-items-center gap-4 menu-list">
            <li>
              <nuxt-link
                to="/"
                class="text-decoration-none text-dark text-uppercase hover-opacity-50 fw-semibold"
                >Главная</nuxt-link
              >
            </li>
            <li class="menu-item-with-submenu position-relative">
              <nuxt-link
                to="#"
                class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50"
                >О компании</nuxt-link
              >
              <div class="submenu position-absolute">
                <ul class="list-unstyled shadow-lg border border-bottom-0">
                  <li
                    class="bg-white border-bottom cursor-pointer"
                  >
                    <nuxt-link
                      to="#"
                      class="text-dark text-decoration-none text-nowrap px-5 py-3 d-block hover-bg-light"
                    >
                      Производство
                    </nuxt-link>
                  </li>

                  <li
                    class="bg-white border-bottom cursor-pointer"
                  >
                    <nuxt-link
                      to="#"
                      class="text-dark text-decoration-none text-nowrap px-5 py-3 d-block hover-bg-light"
                    >
                      Партнёры
                    </nuxt-link>
                  </li>
                  <li
                    class="bg-white border-bottom cursor-pointer"
                  >
                    <nuxt-link
                      to="#"
                      class="text-dark text-decoration-none text-nowrap px-5 py-3 d-block hover-bg-light"
                    >
                      Новости
                    </nuxt-link>
                  </li>
                  <li
                    class="bg-white border-bottom cursor-pointer"
                  >
                    <nuxt-link
                      to="#"
                      class="text-dark text-decoration-none text-nowrap px-5 py-3 d-block hover-bg-light"
                    >
                      Политика конфиденциальности
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item-with-submenu position-relative">
              <nuxt-link
                to="#"
                class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50"
                >Услуги</nuxt-link
              >
              <div class="submenu position-absolute">
                <ul class="list-unstyled shadow-lg border border-bottom-0">
                  <li
                    class="bg-white border-bottom cursor-pointer"
                    v-for="(item, index) in 5"
                    :key="index"
                  >
                    <nuxt-link
                      to="#"
                      class="text-dark text-decoration-none text-nowrap px-5 py-3 d-block hover-bg-light"
                    >
                      Лазерная резка
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <nuxt-link
                to="#"
                class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50"
                >Статьи</nuxt-link
              >
            </li>

            <li>
              <nuxt-link
                to="#"
                class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50"
                >Проекты</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="text-decoration-none text-dark text-uppercase hover-opacity-50 fw-semibold"
                >Контакты</nuxt-link
              >
            </li>
          </ul>
        </nav>

        <button class="btn btn-outline-primary rounded-1">
          Расчёт стоимости
        </button>
      </div>
    </div>
  </header>
</template>

<style>
.header-socails a {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 5px;
}

.header-socails a img {
  width: 12px;
}

.header-socails {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-logo .description {
  font-size: 12px;
  opacity: 50%;
}

.header-logo .logo-line {
  display: block;
  height: 50px;
  width: 1px;
  background: #000;
}

.header-menu-block .menu-list a {
  font-family: "Montserrat";
}
.header-logo img {
  width: 100px;
}

.menu-item-with-submenu .submenu {
  transform: translateX(-20%);
  transition: opacity .3s ease;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  padding: 0;
}

.menu-item-with-submenu:hover .submenu {
  transition: opacity .3s ease;
  opacity: 1;
  max-height: 500px;
  padding-top: 15px;
}
</style>