<script setup>
const modalCalc = useModalCalc()
</script>
<template>
    <div class="modal bg-dark d-block" style="--bs-bg-opacity: 0.75" @click.self="modalCalc = false">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-0">
        <div class="modal-header border-0">
          <button type="button" class="btn-close" @click="modalCalc = false"></button>
        </div>
        <div class="modal-body">
          <h5 class="fs-3 text-center">Стоимость работ от 2000 руб.</h5>
          <p class="text-center mt-2 text-secondary">Получите точный расчёт со скидкой.</p>
          <form action="#" class="mt-3">
            <div class="mb-3">
              <input
                type="text"
                class="form-control bg-light"
                id=""
                placeholder="Имя"
              />
            </div>
            <div class="mb-3">
              <input
                type="tel"
                class="form-control bg-light"
                id=""
                placeholder="Телефон"
              />
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
          </form>
          <button class="btn btn-primary rounded-1 px-4 py-2 mx-auto d-block">Получить точный расчёт</button>
        </div>

      </div>
    </div>
  </div>
</template>