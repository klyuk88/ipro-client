<script setup>
import { ref, reactive } from "vue";
definePageMeta({
  layout: "inner",
});
const modalCalc = useModalCalc();

const file = ref(null);
const currentIndex = ref(1)

const width = ref(null)
const length = ref(null)


const form = reactive({
  metall: null,
  thickness: null,
  cutLength: null,
  cutCount: null,
  square: null,
  paint: null,
  delivery: null,
  terms: null,
});

function nextStep () {
  currentIndex.value += 1
}

function getFile() {
  currentIndex.value += 1
}

function restartCalc() {
  currentIndex.value = 0
  for (const key in form) {
    if (Object.hasOwnProperty.call(form, key)) {
      form[key] = null;
    }
  }
}

const square = computed(() => {
  return width.value * length.value || 0
})


watch(square, (newVal) => {
  if (newVal > 0) {
    form.square = square.value
  }
})

watch(form,
  (newVal) => {
      currentIndex.value += 1
  }
);

const progress = computed(() => {
  return currentIndex.value / 100 * 1000
})
</script>
<template>
  <h1>Расчёт стоимости</h1>
  <p class="text-secondary mt-2">
    Калькулятор стоимости работает только для услуги "Лазерная резка", в будущем
    мы добавим в расчёт и других услуг. Для расчета других услуг пожалуйста
    обратитесь к менеджеру по телефону
    <a href="tel:+74951234567">+7 (495) 123 45 67</a>
  </p>

  <!-- опросник  -->
  <div
    class="culcBody p-3 p-md-5 mt-5 d-flex flex-column align-items-center border rounded-3"
    
  >
    <p class="fs-7 text-secondary">Шаг {{currentIndex}} из 10</p>
    <div
      class="progress w-100 mt-3"
      role="progressbar"
    >
      <div class="progress-bar bg-info" :style="{width: `${progress}%`}">{{progress}}%</div>
    </div>
    <!-- вопрос 1  -->
    <div class="mt-6" v-if="currentIndex === 1">
      <div class="row align-items-center row-gap-3">
        <div class="col-lg-6">
          <h2 class="fs-4">Выбор материала</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-lg-6 d-flex flex-wrap gap-4">
          <label class="d-block" for="steel">
            <div class="" style="width: 120px">
              <img
                src="@/assets/img/steel.jpeg"
                alt=""
                class="d-block cursor-pointer w-100 object-fit-cover"
              />
            </div>

            <div class="d-flex gap-2 mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="material"
                id="steel"
                value="сталь"
                v-model="form.metall"
              />
              <span class="d-block">Сталь СТ3</span>
            </div>
          </label>
          <label class="d-block" for="steel2">
            <div class="" style="width: 120px">
              <img
                src="@/assets/img/nerzhaveyka.jpeg"
                alt=""
                class="d-block cursor-pointer w-100 object-fit-cover"
              />
            </div>

            <div class="d-flex gap-2 mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="material"
                id="steel2"
                value="нержавейка"
                v-model="form.metall"
              />
              <span class="d-block">Нержавейка</span>
            </div>
          </label>
          <label class="d-block" for="steel3">
            <div class="" style="width: 120px">
              <img
                src="@/assets/img/art-ocinkovka.jpg"
                alt=""
                class="d-block cursor-pointer w-100 object-fit-cover"
              />
            </div>

            <div class="d-flex gap-2 mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="material"
                id="steel3"
                value="оцинковка"
                v-model="form.metall"
              />
              <span class="d-block">Оцинковка</span>
            </div>
          </label>
        </div>
      </div>
    </div>

    <!-- вопрос 2  -->
    <div class="mt-6" v-if="currentIndex === 2">
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Толщина металла(мм)</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-md-6">
          <select
            class="form-select bg-light"
            v-model="form.thickness"
          >
            <option>0.5</option>
            <option>1</option>
            <option>1.5</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
      </div>
    </div>

    <!-- вопрос 3  -->
    <div class="mt-6 w-100" v-if="currentIndex === 3">
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Количество резов</h2>
          <small class="text-secondary mt-2 d-block">
            Выберите доступное значение или введите свое
          </small>
        </div>
        <div class="col-md-6 d-flex gap-4">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="cutCount"
              id="cutOne"
              value="1"
              v-model="form.cutCount"
            />
            <label class="form-check-label" for="cutOne"> 1 </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="cutCount"
              id="cutTwo"
              value="2"
              v-model="form.cutCount"
            />
            <label class="form-check-label" for="cutTwo"> 2 </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="cutCount"
              id="cutThree"
              value="3"
              v-model="form.cutCount"
            />
            <label class="form-check-label" for="cutThree"> 3 </label>
          </div>

          <input
            type="text"
            class="form-control bg-light"
            v-model.lazy="form.cutCount"
            placeholder="Другое"
          />
        </div>
      </div>
    </div>

    <!-- вопрос 4  -->
    <div class="mt-6" v-if="currentIndex === 4">
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Длина реза</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control bg-light"
            required
            placeholder="Длина реза (мм)"
            v-model.lazy="form.cutLength"
          />
        </div>
      </div>
    </div>

    <!-- вопрос 5  -->
    <div class="mt-6" v-if="currentIndex === 5">
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Обработка</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-lg-6 d-flex flex-wrap gap-4 align-items-start">
          <label class="d-block" for="paint">
            <div class="" style="width: 120px; height: 90px">
              <img
                src="@/assets/img/no-paint.jpeg"
                alt=""
                class="d-block cursor-pointer w-100 h-100 object-fit-contain"
              />
            </div>

            <div class="d-flex gap-2 mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="paint"
                id="paint"
                value="no-paint"
                v-model="form.paint"
              />
              <span class="d-block">Нет</span>
            </div>
          </label>
          <label class="d-block" for="paintRal">
            <div class="" style="width: 120px; height: 90px">
              <img
                src="@/assets/img/8017.png"
                alt=""
                class="d-block cursor-pointer w-100 h-100 object-fit-cover"
              />
            </div>

            <div class="d-flex gap-2 mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="paint"
                id="paintRal"
                value="paint-ral"
                v-model="form.paint"
              />
              <span class="d-block"
                >Порошковая<br />покраска<br />(RAL 0000)</span
              >
            </div>
          </label>
          <label class="d-block" for="customRal">
            <div class="" style="width: 120px; height: 90px">
              <img
                src="@/assets/img/rals.jpeg"
                alt=""
                class="d-block cursor-pointer w-100 h-100 object-fit-cover"
              />
            </div>

            <div class="d-flex gap-2 mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="paint"
                id="customRal"
                value="other-paint"
                v-model="form.paint"
              />
              <span class="d-block">Свой цвет RAL</span>
            </div>
          </label>
        </div>
      </div>
    </div>

    <!-- вопрос 6  -->
    <div class="mt-6" v-if="currentIndex === 6">
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Площадь изделия</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-md-6">
          <div class="mb-3 d-flex align-item-center gap-3">
            <input type="hidden" name="">
            <input
              type="text"
              class="form-control bg-light"
              required
              placeholder="Длина(мм)"
              v-model.lazy="length"
            />
            <input
              type="text"
              class="form-control bg-light"
              required
              placeholder="Ширина(мм)"
              v-model.lazy="width"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- вопрос 7  -->
    <div class="mt-6" v-if="currentIndex === 7">
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Дополнительно</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="formFile" class="form-label"
              >Прикрепите макет DWG</label
            >
            <input
              class="form-control"
              type="file"
              id="formFile"
              accept=".dwg"
              ref="file"
              @change="getFile()"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- вопрос 8  -->
    <div class="mt-6" v-if="currentIndex === 8">
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Способы доставки</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-md-6">
          <select
            class="form-select bg-light"
            aria-label="Default select example"
            required
            v-model="form.delivery"
          >
            <option value="0">Самовывоз</option>
            <option value="12000">Адрес Москва, МО</option>
            <option value="0">Транспортная компания</option>
          </select>
        </div>
      </div>
    </div>

    <!-- вопрос 9  -->
    <div class="mt-6" v-if="currentIndex === 9">
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4 fs-xl-2">Сроки</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-md-6 d-flex flex-column flex-xl-row align-items-lg-center justify-content-between gap-3 gap-lg-0">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="terms"
              id="today"
              value="today"
              v-model="form.terms"
            />
            <label class="form-check-label" for="today"
              >Сегодня <br />
              01.02.23</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="terms"
              id="tomorrow"
              value="tomorrow"
              v-model="form.terms"
            />
            <label class="form-check-label" for="tomorrow"
              >Завтра<br />02.02.23</label
            >
          </div>
          <div class="form-check form-check-inline">
            <span>Выбрать свою дату</span>
            <input
              type="date"
              name="customDate"
              id=""
              class="form-control bg-light mt-2"
              v-model="form.terms"
            />
          </div>
        </div>
      </div>
    </div>

<!-- результат  -->
    <div class="mt-6 w-100" v-if="currentIndex === 10">
      <div class="row row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4 fs-xl-2">
            Стоимость заказа
            <br class="d-xl-none">
            <span class="bg-primary text-white rounded-1 px-1"
              >25 000 руб.</span
            >
          </h2>
          <p class="text-secondary mt-3">
            Далеко-далеко за словесными горами в стране гласных и согласных
            живут рыбные тексты. Щеке, несколько его. Вершину, вопроса!
          </p>
        </div>
        <div class="col-md-6">
          <!-- <h4 class="mb-3">Задайте дополнительные вопросы менеджеру</h4> -->
          <div class="d-flex flex-column gap-lg-3 flex-lg-row">
            <div class="mb-3 w-lg-50">
              <input
                type="text"
                class="form-control bg-light rounded-2"
                placeholder="Имя*"
              />
            </div>
            <div class="mb-3 w-lg-50">
              <input
                type="tel"
                class="form-control bg-light rounded-2"
                placeholder="Телефон*"
              />
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
          <ui-button class="btn-primary px-4"> Отправить </ui-button>
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-center gap-4 mt-5 mt-xl-auto">
      <ui-button class="btn btn-outline-secondary px-4 py-2" v-if="currentIndex > 1 && currentIndex !== 10" @click="currentIndex -= 1">Назад</ui-button>
      <ui-button class="btn btn-outline-secondary px-4 py-2" v-if="currentIndex === 10" @click="restartCalc()">Новый расчёт</ui-button>
    </div>
  </div>
  <!-- конец опросника  -->

  <modals-calculate v-if="modalCalc" />

</template>


<style scoped>
.culcBody {
  height: auto;
}

@media (min-width: 1200px) {
  .culcBody {
    height: 500px;
  }
}
</style>