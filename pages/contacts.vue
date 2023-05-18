<script setup lang="ts">
import { ref } from 'vue'
const writeDirectorShow = useWriteDirectorModal();
const layer = ref(true)

const contacts = useContacts()
const {error, data: contactsPage} = await contacts.getContactsPage()


</script>
<template>
  <section class="border-top">
    <div class="container pt-5">
      <bread-crumbs />
      <h2>{{contactsPage.data.attributes.title ?? 'Контакты'}}</h2>
    </div>
  </section>

  <section class="mt-4 position-relative" @mouseleave="layer = true">
    <div
      class="position-absolute start-0 top-0 w-100 h-100"
      @click="layer = false"
      v-if="layer"
    ></div>
    <client-only>
      <iframe
      id="contacts-map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A27d397a0e93ca68d1ce4a483bd8b0c658c0724e5a13cbf5c5dd471986e470784&amp;source=constructor"
        width="100%"
        height="500"
        frameborder="0"
      ></iframe>
    </client-only>
    <div
      class="container bg-light shadow-lg px-4 px-lg-5 py-3 contacts-info"
    >
      <div class="row align-items-center row-gap-4">
        <div class="col-md-6 col-lg-3 d-flex align-items-center gap-3" v-if="contactsPage?.data.attributes.adress">
          <i
            class="fa-sharp fa-solid fa-location-dot text-secondary opacity-50 fs-1"
          ></i>
          <div >
            <h5 class="fs-7 text-secondary fw-medium">Адрес</h5>
            <p class="mt-2 w-75">{{contactsPage?.data.attributes.adress}}</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex align-items-center gap-3" v-if="contactsPage?.data.attributes.phone">
          <i
            class="fa-sharp fa-solid fa-phone text-secondary opacity-50 fs-1"
          ></i>
          <div>
            <h5 class="fs-7 text-secondary fw-medium">Телефон</h5>
            <a
              href="tel:+"
              class="text-decoration-none fs-6 mt-2 d-inline-block text-dark"
              >{{contactsPage?.data.attributes.phone}}</a
            >
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-center gap-3" v-if="contactsPage?.data.attributes.email">
          <i
            class="fa-sharp fa-regular fa-envelope text-secondary opacity-50 fs-1"
          ></i>
          <div>
            <h5 class="fs-7 text-secondary fw-medium">E-mail</h5>
            <a
              href="mailto:"
              class="text-decoration-none fs-6 mt-2 d-inline-block text-dark"
              >{{contactsPage?.data.attributes.email}}"</a
            >
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-center gap-3"  v-if="contactsPage?.data.attributes.workingHours">
          <i
            class="fa-sharp fa-regular fa-clock text-secondary opacity-50 fs-1"
          ></i>
          <div>
            <h5 class="fs-7 text-secondary fw-medium">Время работы</h5>
            <p class="">
              {{contactsPage?.data.attributes.workingHours}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pt-4 pb-5">
    <div class="container">
      <h3>Обратная связь</h3>
      <div class="mt-4">
        <form>
          <div class="row">
            <div class="col-md-6">

              <div class="mb-3">
                <!-- <label for="" class="fs-7 text-secondary mb-2"
                  >Имя <span class="text-danger">*</span></label
                > -->
                <input type="text" class="form-control bg-light rounded-2" required placeholder="Имя*"/>
              </div>

               <div class="mb-3">
              <!-- <label for="" class="fs-7 text-secondary mb-2"
                >E-mail <span class="text-danger">*</span></label
              > -->
              <input type="email" class="form-control bg-light rounded-2" required placeholder="E-mail*"/>
            </div>

            <div class="mb-3">
              <!-- <label for="" class="fs-7 text-secondary mb-2"
                >Телефон <span class="text-danger">*</span></label
              > -->
              <input type="tel" class="form-control bg-light rounded-2" required placeholder="Телефон*"/>
            </div>


            </div>
            <div class="col-md-6">

              <div class="mb-3">
              <!-- <label for="" class="fs-7 text-secondary mb-2">Сообщение</label> -->
              <textarea class="form-control bg-light rounded-2" placeholder="Сообщение" style="height: 140px"></textarea>
            </div>
            </div>
          </div>
          <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="agreeCheck"
                />
                <label class="form-check-label fs-7" for="agreeCheck">
                  Я согласен(а) с обработкой
                  <nuxt-link to="#">Персональных данных</nuxt-link>
                </label>
              </div>
            </div>
          <button class="btn btn-primary rounded-5 px-5 py-3 text-uppercase mt-3 fw-bolder"> Отправить</button>
        </form>
      </div>
    </div>
  </section>
  <cta-section/>
</template>

<style scoped>
.single-service-header {
  height: 650px;
}
.contacts-info {
  transform: translateY(-50%);
}

@media screen and (max-width: 576px) {
  .contacts-info {
  transform: translateY(0);
}
}
</style>