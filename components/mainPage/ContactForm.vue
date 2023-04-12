<script setup>
import sectionBg from "../../assets/img/form-section-image.jpg";
</script>

<template>
  <section
    class="contacts-form-section py-5 py-lg-6 bg-set"
    :style="{ backgroundImage: `url(${sectionBg})` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-4 col-lg-6 offset-lg-6">
          <form action="" class="p-4 p-md-5 bg-white">
            <h2 class="fs-4">Предложим лучшие условия работы на рынке</h2>
            <h3 class="fs-6 fw-normal mt-3 mb-3 text-secondary">
              Далеко-далеко за словесными горами, в стране гласных и согласных
              живут рыбные тексты.
            </h3>

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
            <div class="mb-3">
              <!-- <label for="" class="fs-7 text-secondary mb-2">Сообщение</label> -->
              <textarea class="form-control bg-light rounded-2" rows="3" placeholder="Сообщение"></textarea>
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

            <button type="submit" class="btn btn-primary rounded-5 px-4 py-3 mt-4 fs-7 fs-md-6">
              Получить персональные условия
            </button>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

</style>
