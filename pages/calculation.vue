<script setup>
import { ref, reactive } from "vue";
definePageMeta({
  layout: "inner",
});

const file = ref(null);
const currentIndex = ref(1);
const culcSum = ref(null);

const width = ref(null);
const length = ref(null);

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

const square = computed(() => {
  return width.value * length.value || 0;
});

watch(square, (newVal) => {
  if (newVal > 0) {
    form.square = square.value;
  }
});
</script>
<template>
  <h1>Расчёт стоимости</h1>
  <p class="text-secondary mt-2">
    Калькулятор стоимости работает только для услуги "Лазерная резка", в будущем
    мы добавим в расчёт и других услуг. Для расчета других услуг пожалуйста
    обратитесь к менеджеру по телефону
    <a href="tel:+74951234567">+7 (495) 123 45 67</a>
  </p>


  <div class="border border-bottom-0 mt-5">
    <div class="border-bottom p-4 p-lg-5">
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

    <div class="border-bottom p-4 p-lg-5 position-relative">
      <!-- фон с номером  -->
      <div
        class="position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-start ps-5 question-bg"
        style="background-color: rgba(0, 0, 0, 0.8)"
        v-if="form.metall === null"
      >
        <div
          class="d-flex align-items-center justify-content-center question-number"
        >
          <span class="text-white fs-3 fw-medium">2</span>
        </div>
      </div>
      <!-- фон с номером  -->

      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Толщина металла(мм)</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-wrap gap-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="thickness"
                value="0.5"
                id="thickness-05"
                v-model="form.thickness"
              />
              <label class="form-check-label" for="thickness-05"> 0.5мм </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="thickness"
                value="1"
                id="thickness-1"
                v-model="form.thickness"
              />
              <label class="form-check-label" for="thickness-1"> 1мм </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="thickness"
                value="1.5"
                id="thickness-15"
                v-model="form.thickness"
              />
              <label class="form-check-label" for="thickness-15"> 1.5мм </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="thickness"
                value="2"
                id="thickness-2"
                v-model="form.thickness"
              />
              <label class="form-check-label" for="thickness-2"> 2мм </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="thickness"
                value="3"
                id="thickness-3"
                v-model="form.thickness"
              />
              <label class="form-check-label" for="thickness-3"> 3мм </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="thickness"
                value="4"
                id="thickness-4"
                v-model="form.thickness"
              />
              <label class="form-check-label" for="thickness-4"> 4мм </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="thickness"
                value="5"
                id="thickness-5"
                v-model="form.thickness"
              />
              <label class="form-check-label" for="thickness-5"> 5мм </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="thickness"
                value="6"
                id="thickness-6"
                v-model="form.thickness"
              />
              <label class="form-check-label" for="thickness-6"> 6мм </label>
            </div>
          </div>
          <!-- <select class="form-select bg-light" v-model="form.thickness">
            <option>0.5</option>
            <option>1</option>
            <option>1.5</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select> -->
        </div>
      </div>
    </div>

    <!-- вопрос 3  -->
    <div class="border-bottom p-4 p-lg-5 position-relative">
      <!-- фон с номером  -->
      <div
        class="position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-start ps-5"
        style="background-color: rgba(0, 0, 0, 0.8)"
        v-if="form.thickness === null"
      >
        <div
          class="d-flex align-items-center justify-content-center question-number"
        >
          <span class="text-white fs-3 fw-medium">3</span>
        </div>
      </div>
      <!-- фон с номером  -->
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Количество врезов</h2>
          <small class="text-secondary mt-2 d-block">
            Выберите доступное значение или введите свое
          </small>
        </div>
        <div class="col-md-6 d-flex gap-4 align-items-center">
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
            class="form-control bg-light rounded-1"
            v-model.lazy="form.cutCount"
            placeholder="Другое"
          />
        </div>
      </div>
    </div>

    <!-- вопрос 4  -->
    <div class="border-bottom p-4 p-lg-5 position-relative">
      <!-- фон с номером  -->
      <div
        class="position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-start ps-5"
        style="background-color: rgba(0, 0, 0, 0.8)"
        v-if="form.cutCount === null"
      >
        <div
          class="d-flex align-items-center justify-content-center question-number"
        >
          <span class="text-white fs-3 fw-medium">4</span>
        </div>
      </div>
      <!-- фон с номером  -->
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
            class="form-control bg-light rounded-1"
            required
            placeholder="Длина реза (мм)"
            v-model="form.cutLength"
          />
        </div>
      </div>
    </div>

    <!-- вопрос 5  -->
    <div class="border-bottom p-4 p-lg-5 position-relative">
      <!-- фон с номером  -->
      <div
        class="position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-start ps-5"
        style="background-color: rgba(0, 0, 0, 0.8)"
        v-if="form.cutLength === null"
      >
        <div
          class="d-flex align-items-center justify-content-center question-number"
        >
          <span class="text-white fs-3 fw-medium">5</span>
        </div>
      </div>
      <!-- фон с номером  -->
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Обработка</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-lg-6 d-flex flex-wrap gap-4 align-items-start">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="painting"
              value="Нет"
              id="paint-non"
              v-model="form.paint"
            />
            <label class="form-check-label" for="paint-non"> Нет </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="painting"
              value="9003"
              id="paint-9003"
              v-model="form.paint"
            />
            <label class="form-check-label" for="paint-9003"> RAL 9003 </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="painting"
              value="9005"
              id="paint-9005"
              v-model="form.paint"
            />
            <label class="form-check-label" for="paint-9005"> RAL 9005 </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="painting"
              value="7037"
              id="paint-7037"
              v-model="form.paint"
            />
            <label class="form-check-label" for="paint-7037"> RAL 7037 </label>
          </div>

          <div class="">
            <input
              class="form-control bg-light rounded-1"
              type="text"
              placeholder="Свой цвет"
              v-model="form.paint"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- вопрос 6  -->
    <div class="border-bottom p-4 p-lg-5 position-relative">
      <!-- фон с номером  -->
      <div
        class="position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-start ps-5"
        style="background-color: rgba(0, 0, 0, 0.8)"
        v-if="form.paint === null"
      >
        <div
          class="d-flex align-items-center justify-content-center question-number"
        >
          <span class="text-white fs-3 fw-medium">6</span>
        </div>
      </div>
      <!-- фон с номером  -->
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
            <input type="hidden" name="" />
            <input
              type="text"
              class="form-control bg-light rounded-1"
              required
              placeholder="Длина(мм)"
              v-model.lazy="length"
            />
            <input
              type="text"
              class="form-control bg-light rounded-1"
              required
              placeholder="Ширина(мм)"
              v-model.lazy="width"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- вопрос 7  -->
    <div class="border-bottom p-4 p-lg-5 position-relative">
      <!-- фон с номером  -->
      <div
        class="position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-start ps-5"
        style="background-color: rgba(0, 0, 0, 0.8)"
        v-if="form.square === null"
      >
        <div
          class="d-flex align-items-center justify-content-center question-number"
        >
          <span class="text-white fs-3 fw-medium">7</span>
        </div>
      </div>
      <!-- фон с номером  -->
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
    <div class="border-bottom p-4 p-lg-5 position-relative">
      <!-- фон с номером  -->
      <div
        class="position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-start ps-5"
        style="background-color: rgba(0, 0, 0, 0.8)"
        v-if="form.square === null"
      >
        <div
          class="d-flex align-items-center justify-content-center question-number"
        >
          <span class="text-white fs-3 fw-medium">8</span>
        </div>
      </div>
      <!-- фон с номером  -->
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Способы доставки</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div class="col-md-6 d-flex flex-wrap gap-4">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="delivery"
              value="Самовывоз"
              id="delivery-1"
              v-model="form.delivery"
            />
            <label class="form-check-label" for="delivery-1"> Самовывоз </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="delivery"
              value="Адрес"
              id="delivery-2"
              v-model="form.delivery"
            />
            <label class="form-check-label" for="delivery-2">
              Адрес Москва, МО
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="delivery"
              value="Транспортная компания"
              id="delivery-3"
              v-model="form.delivery"
            />
            <label class="form-check-label" for="delivery-3">
              Транспортная компания
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- вопрос 9  -->
    <div class="border-bottom p-4 p-lg-5 position-relative">
      <!-- фон с номером  -->
      <div
        class="position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-start ps-5"
        style="background-color: rgba(0, 0, 0, 0.8)"
        v-if="form.delivery === null"
      >
        <div
          class="d-flex align-items-center justify-content-center question-number"
        >
          <span class="text-white fs-3 fw-medium">9</span>
        </div>
      </div>
      <!-- фон с номером  -->
      <div class="row align-items-center row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-4">Сроки</h2>
          <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          >
        </div>
        <div
          class="col-md-6 d-flex flex-column flex-xl-row align-items-lg-center justify-content-between gap-3 gap-lg-0"
        >
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

    <div class="border-bottom p-5 position-relative">
      <!-- фон с номером  -->
      <div
        class="position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-start ps-5"
        style="background-color: rgba(0, 0, 0, 0.8)"
        v-if="form.terms === null"
      >
        <div
          class="d-flex align-items-center justify-content-center question-number"
        >
          <span class="text-white fs-3 fw-medium">10</span>
        </div>
      </div>
      <!-- фон с номером  -->
      <div class="row row-gap-3">
        <div class="col-md-6">
          <h2 class="fs-3">
            Стоимость заказа
            <br class="d-xl-none" />
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
          <div class="d-flex align-items-center gap-3">
            <ui-button class="btn-outline-secondary">Сначала</ui-button>
          <ui-button class="btn-primary px-4"> Заказать </ui-button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.culcBody {
  height: auto;
}

.inputs-block {
  height: 150px;
}

.question-card {
  height: 250px;
}

.question-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid var(--accent-color);
}

@media (min-width: 1200px) {
  .culcBody {
    height: 500px;
  }
}
</style>