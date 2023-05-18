<script setup>
const callOrderShow = useCallOrderModal()
const contacts = useContacts()
const {error, data: contactsPage} = await contacts.getContactsPage()


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
            <a :href="`mailto:${contactsPage?.data.attributes.email}`" class="text-white text-decoration-none" v-if="contactsPage?.data.attributes.email">{{contactsPage?.data.attributes.email}}</a>
          </div>
          <div class="mb-3">
            <i class="fa-solid fa-phone text-white me-2"></i>
            <a href="tel:" class="text-white text-decoration-none" v-if="contactsPage?.data.attributes.phone">{{contactsPage?.data.attributes.phone}}</a>
          </div>
          <div class="mb-3">
            <i class="fa-solid fa-location-dot text-white me-2"></i>
            <span class="text-white" v-if="contactsPage?.data.attributes.adress">{{contactsPage?.data.attributes.adress}}</span>
          </div>

          <div class="mb-3 d-flex align-items-center gap-2"
          v-if="contactsPage?.data.attributes.socials"
          >
            <nuxt-link :to="item.link"
            v-for="(item, index) in contactsPage?.data.attributes.socials" :key="item.id"
            >
              <img :src="$config.public.apiURL + item.icon.data.attributes.url" style="width: 30px"/>
            </nuxt-link>
          </div>
  
          <div class="mb-3">
           <button class="btn rounded-5 btn-light" @click="callOrderShow = true">Заказать звонок</button>
          </div>
          
        </div>
      </div>
      
      <div class="d-flex align-items-end justify-content-between">
        <img :src="$config.public.apiURL + contactsPage?.data.attributes.lightLogo.data.attributes.url" class="footer-logo mt-5" v-if="contactsPage?.data.attributes.lightLogo.data"/>
        <p class="text-secondary fs-7 mt-3">
          
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