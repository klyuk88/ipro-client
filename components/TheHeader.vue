<script setup>
const showSearch = ref(false)
const mobileMenu = useMobileMenu()
const callOrderModal = useCallOrderModal()

const contacts = useContacts()
const {error, data: contactsPage} = await contacts.getContactsPage()

</script>
<template>
<modals-call-order v-if="callOrderModal"/>
  <the-search :activeSearch="showSearch" @closeSearch="showSearch = false"/>
  <div class="">
    <div class="container">
      <div
        class="header-content d-flex align-items-center justify-content-between pt-3 d-none d-xl-flex"
      >
        <div class="d-flex align-items-center gap-2"
        v-if="contactsPage?.data.attributes.email"
        >
          <i class="fa-solid fa-envelope"></i>
          <a :href="`mailto:${contactsPage?.data.attributes.email}`" class="text-decoration-none text-secondary"
            >{{contactsPage?.data.attributes.email}}</a
          >
        </div>

        <div class="header-socails"
        v-if="contactsPage?.data.attributes.adress"
        >
          <p class="text-secondary"><i class="fa-solid fa-location-dot text-secondary me-2"></i> {{contactsPage?.data.attributes.adress}}</p>
        </div>

        <div class="d-flex align-items-center gap-5">
          <a
            :href="`tel:${contactsPage?.data.attributes.phone}`"
            class="d-flex align-items-center gap-2 text-decoration-none"
            v-if="contactsPage?.data.attributes.phone"
          >
            <i class="fa-solid fa-phone text-dark"></i>
            <span class="text-dark">{{contactsPage?.data.attributes.phone}}</span>
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
          <nuxt-link to="/" class="text-decoration-none text-dark logo"
          v-if="contactsPage?.data.attributes.logo.data"
          >
            <img :src="$config.public.apiURL + contactsPage?.data.attributes.logo.data?.attributes.url" />
          </nuxt-link>
          <div class="logo-line"></div>
          <span class="description lh-sm" v-if="contactsPage?.data.attributes.logoDescription" v-html="contactsPage?.data.attributes.logoDescription">
          </span>
        </div>

        <nav class="d-none d-xl-flex">
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
                to="/about"
                class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50"
                >О компании</nuxt-link
              >
              <div class="submenu position-absolute">
                <ul class="list-unstyled shadow-lg border border-bottom-0">
                  <li
                    class="bg-white border-bottom cursor-pointer"
                  >
                    <nuxt-link
                      to="/production"
                      class="text-dark text-decoration-none text-nowrap px-5 py-3 d-block hover-bg-light"
                    >
                      Производство
                    </nuxt-link>
                  </li>

                  <li
                    class="bg-white border-bottom cursor-pointer"
                  >
                    <nuxt-link
                      to="/partners"
                      class="text-dark text-decoration-none text-nowrap px-5 py-3 d-block hover-bg-light"
                    >
                      Партнёры
                    </nuxt-link>
                  </li>
                  <li
                    class="bg-white border-bottom cursor-pointer"
                  >
                    <nuxt-link
                      to=""
                      class="text-dark text-decoration-none text-nowrap px-5 py-3 d-block hover-bg-light"
                    >
                      Отзывы
                    </nuxt-link>
                  </li>
                  <li
                    class="bg-white border-bottom cursor-pointer"
                  >
                    <nuxt-link
                      to="/privacy-policy"
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
                to="/services"
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
                to="/posts"
                class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50"
                >Статьи</nuxt-link
              >
            </li>

            <li>
              <nuxt-link
                to="/projects"
                class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50"
                >Проекты</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/contacts"
                class="text-decoration-none text-dark text-uppercase hover-opacity-50 fw-semibold"
                >Контакты</nuxt-link
              >
            </li>
          </ul>
        </nav>

        <ui-button class="btn-outline-primary d-none d-xl-block" @click="callOrderModal = true">
          Оставить заявку
        </ui-button>

        <div class="d-xl-none" style="width: 40px">
          <img src="@/assets/img/mob-menu.png" alt="" class="w-100" @click="mobileMenu=true">
        </div>
      </div>
    </div>
  </header>

  <mob-menu/>

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