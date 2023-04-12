<script setup>
const callOrderShow = useCallOrderModal()
const props = defineProps({
  title: {
    type: String,
    default: "Заказать звонок"
  }
})
</script>
<template>
  <div class="modal bg-dark d-block" style="--bs-bg-opacity: 0.75" @click.self="callOrderShow = false">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content pb-4 pt-2 px-3">
        <div class="modal-header border-0">
           <h5 class="modal-title fs-3">{{props.title}}</h5>
          <button type="button" class="btn-close" @click="callOrderShow = false"></button>
        </div>
        
        <div class="modal-body">
          <!-- <h5 class="modal-title fs-3">Заказать звонок</h5> -->
          <p class="text-secondary">Менеджер перезвонит в течении 10 минут.</p>
          <form action="#" class="mt-3">
            <div class="mb-3">
              <input
                type="text"
                class="form-control bg-light rounded-2"
                id=""
                placeholder="Имя"
              />
            </div>
            <div class="mb-3">
              <input
                type="tel"
                class="form-control bg-light rounded-2"
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
          <ui-button class="btn-primary px-4 py-2 mx-auto d-block">Заказать звонок</ui-button>
        </div>

      </div>
    </div>
  </div>
</template>