<template>
<!-- position-absolute top-0 start-0 w-100 z-3 -->
  <header class="">
    <div class="container">

      <div
        class="header-content d-flex align-items-center justify-content-between py-3"
      >
        <div class="d-flex align-items-center gap-2">
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:" class="text-black text-decoration-none opacity-50"
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

          <div class="header-search d-flex align-items-center gap-2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Поиск</span>
          </div>
        </div>
      </div>

      <div class="header-menu-block d-flex align-items-center justify-content-between pb-3">

        <div class="header-logo d-flex align-items-center gap-2">
          <nuxt-link to="/" class="text-decoration-none text-dark logo">
            Ай-Про
          </nuxt-link>
          <div class="logo-line"></div>
          <span class="description lh-sm">
            Компания <br>по металлообработке
          </span>
        </div>

        <nav>
          <ul class="list-unstyled d-flex align-items-center gap-4 menu-list">
            <li>
              <nuxt-link to="/" class="text-decoration-none text-dark text-uppercase hover-opacity-50 fw-semibold">Главная</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50">О компании</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50">Услуги</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50">Статьи</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50">Статьи</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="fw-semibold text-decoration-none text-dark text-uppercase hover-opacity-50">Проекты</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="text-decoration-none text-dark text-uppercase hover-opacity-50 fw-semibold">Контакты</nuxt-link>
            </li>
          </ul>
        </nav>

        <button class="btn btn-outline-primary rounded-1">Расчёт стоимости</button>

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
  height: 30px;
  width: 1px;
  background: #000;
}

.header-menu-block .menu-list a {
  font-family: 'Montserrat';
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: var(--accent-color);
}
</style>