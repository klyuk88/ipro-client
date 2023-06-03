<script setup lang="ts">
import { ref, reactive } from "vue";
definePageMeta({
  layout: "inner",
});


const file = ref(null);
const currentIndex = ref(1);
const culcSum = ref(null);

const calculateData = {
  //материалы
  materials: [
    {
      title: "steel",
      k: 1,
      price: new Map([
        [0.5, 1000],
        [1, 1200],
        [1.5, 1300],
        [2, 1400],
        [3, 1500],
        [4, 1600],
        [5, 1700],
        [6, 1800],
      ]),
    },
    {
      title: "galvanized",
      k: 1.5,
      price: new Map([
        [0.5, 2000],
        [1, 2200],
        [1.5, 2300],
        [2, 2400],
        [3, 2500],
        [4, 2600],
        [5, 2700],
        [6, 2800],
      ]),
    },
    {
      title: "stainless",
      k: 2,
      price: new Map([
        [0.5, 3000],
        [1, 3200],
        [1.5, 3300],
        [2, 3400],
        [3, 3500],
        [4, 3600],
        [5, 3700],
        [6, 3800],
      ]),
    },
  ],
  //стоимость каждого вреза
  singleCutPrice: 10,
  cutPrice: new Map([
    [0.5, 50],
    [1, 60],
    [1.5, 70],
    [2, 80],
    [3, 90],
    [4, 100],
    [5, 110],
    [6, 150],
  ]),
  paintPrice: new Map([
    ["no", 1],
    ["ral", 250],
  ]),
  delivery: new Map([
    ["pickup", 0],
    ["adress", 12000],
    ["company", 0],
  ]),
  terms: new Map([
    ["today", 3.5],
    ["tomorrow", 2],
  ]),
};
const width = ref(0);
const length = ref(0);

//форма
const form = reactive<CalcForm>({
  //металл
  metal: {
    title: '',
    k: 1,
    price: new Map([[0.5, 0]])
  },
  //толщина металла
  thickness: 0.5,
  //кол-во врезов
  engravingCount: 1,
  //длина реза
  cutLength: 1,
  //обработка
  paint: {
    val: '',
    price: null
  },
  //кастомный рал
  customPaint: {
    val: '',
    price: 250,
  },
  //площадь
  square: 0,
  //доставка
  delivery: {
    val: '',
    price: 0
  },
  //сроки
  terms: {
    value: '',
    k: null
  },
  customTerms: {
    value: '',
    k: 1,
  },
});

const square = computed(() => {
  return width.value * length.value || 0;
});

watch(square, (newVal) => {
  if (newVal > 0) {
    form.square = square.value;
  }
});

watch (form, (newVal) => {

})

const formWatch = computed(() => {
  if (form.terms.value !== '' || form.customTerms.value !== '') {
    console.log(123)
    return form.metal.price.get(form.thickness)! * 1 + (form.metal.k * calculateData.cutPrice.get(form.thickness)! *
        form.cutLength + (form.engravingCount * 10) + (form.square * form.paint.price ?? form.customPaint.price) +
        form.delivery.price) * form.terms.k ?? form.customTerms.k;
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
                :value="calculateData.materials[0]"
                v-model="form.metal"
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
                :value="calculateData.materials[1]"
                v-model="form.metal"
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
                :value="calculateData.materials[2]"
                v-model="form.metal"
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
        v-if="!form.metal"
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
                :value="0.5"
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
                :value="1"
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
                :value="1.5"
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
                :value="2"
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
                :value="3"
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
                :value="4"
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
                :value="5"
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
                :value="6"
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
        v-if="!form.thickness"
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
              name="engravingCount"
              id="cutOne"
              :value="1"
              v-model="form.engravingCount"
            />
            <label class="form-check-label" for="cutOne"> 1 </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="engravingCount"
              id="cutTwo"
              :value="2"
              v-model="form.engravingCount"
            />
            <label class="form-check-label" for="cutTwo"> 2 </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="engravingCount"
              id="cutThree"
              :value="3"
              v-model="form.engravingCount"
            />
            <label class="form-check-label" for="cutThree"> 3 </label>
          </div>

          <input
            type="text"
            class="form-control bg-light rounded-1"
            v-model.lazy.number="form.engravingCount"
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
        v-if="!form.engravingCount"
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
            v-model.number="form.cutLength"
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
        v-if="!form.cutLength"
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
              :value="{ val: 'Нет', price: calculateData.paintPrice.get('no') }"
              id="paint-non"
              @change="form.customPaint.val = null"
              v-model="form.paint"
            />
            <label class="form-check-label" for="paint-non"> Нет </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="painting"
              :value="{
                val: '9003',
                price: calculateData.paintPrice.get('ral'),
              }"
              id="paint-9003"
              @change="form.customPaint.val = null"
              v-model="form.paint"
            />
            <label class="form-check-label" for="paint-9003"> RAL 9003 </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="painting"
              :value="{
                val: '9005',
                price: calculateData.paintPrice.get('ral'),
              }"
              id="paint-9005"
              @change="form.customPaint.val = null"
              v-model="form.paint"
            />
            <label class="form-check-label" for="paint-9005"> RAL 9005 </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="painting"
              :value="{
                val: '7037',
                price: calculateData.paintPrice.get('ral'),
              }"
              id="paint-7037"
              @change="form.customPaint.val = null"
              v-model="form.paint"
            />
            <label class="form-check-label" for="paint-7037"> RAL 7037 </label>
          </div>

          <div class="">
            <input
              class="form-control bg-light rounded-1"
              type="text"
              placeholder="Свой цвет"
              @input="form.paint.val = null"
              v-model="form.customPaint.val"
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
        v-if="!form.paint && !form.customPaint.val"
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
        v-if="form.square === 0"
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
        v-if="form.square === 0"
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
              :value="{
                val: 'Самовывоз',
                price: calculateData.delivery.get('pickup'),
              }"
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
              :value="{
                val: 'Адрес',
                price: calculateData.delivery.get('adress'),
              }"
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
              :value="{
                val: 'Компания',
                price: calculateData.delivery.get('company'),
              }"
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
        v-if="!form.delivery"
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
              @change="form.customTerms.value = null"
              :value="{ val: 'Сегодня', k: calculateData.terms.get('today') }"
              v-model="form.terms"
            />
            <label class="form-check-label" for="today">Сегодня </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="terms"
              id="tomorrow"
              :value="{ val: 'Завтра', k: calculateData.terms.get('tomorrow') }"
              @change="form.customTerms.value = null"
              v-model="form.terms"
            />
            <label class="form-check-label" for="tomorrow">Завтра</label>
          </div>
          <div class="form-check form-check-inline">
            <span>Выбрать свою дату</span>
            <input
              type="date"
              name="customDate"
              id=""
              class="form-control bg-light mt-2"
              @input="form.terms.value = null"
              v-model="form.customTerms.value"
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
        v-if="!form.terms && !form.customTerms.value"
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
            <span class="bg-primary text-white rounded-1 px-1">{{formWatch}} руб.</span>
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