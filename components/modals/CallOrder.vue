<script setup>
const callOrderShow = useCallOrderModal()
</script>
<template>
  <div class="modal bg-dark d-block" style="--bs-bg-opacity: 0.75" @click.self="callOrderShow = false">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-0">
        <div class="modal-header border-0">
          <h5 class="modal-title fs-3">Заказать звонок</h5>
          <button type="button" class="btn-close" @click="callOrderShow = false"></button>
        </div>
        <div class="modal-body">
          <form action="#">
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
          <button class="btn btn-primary rounded-1 px-4 py-2 mx-auto d-block">Заказать звонок</button>
        </div>

      </div>
    </div>
  </div>
</template>