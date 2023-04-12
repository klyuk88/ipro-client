<script setup>
import { ref, reactive } from "vue";
definePageMeta({
  layout: "inner",
});
const modalCalc = useModalCalc();

const file = ref(null);
const form = reactive({
  metall: null,
  thickness: null,
  cutLength: null,
  thickness: null,
  square: {
    width: null,
    length: null,
  },
  delivery: null,
  terms: null,
});

watch(
  () => form.metall,
  (newVal) => {
    console.log(newVal);
  }
);
</script>
<template>
  <h1>Расчёт стоимости</h1>
  <p class="text-secondary mt-2">
    Калькулятор стоимости пока что работает только для услуги "Лазерная резка",
    в будущем мы добавим в расчёт и другие услуги. Для расчета других услуг
    обратитесь к менеджеру.
    <a href="tel:+74951234567">+7 (495) 123 45 67</a>
  </p>

  <div class="mt-5 border border-bottom-0 d-none">
    <form>
      <div class="px-4 py-4 border-bottom">
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
      <div class="px-4 py-4 border-bottom position-relative">
        <div
          class="position-absolute start-0 top-0 w-100 h-100 d-flex z-1"
          v-if="form.metall === null"
        >
          <div
            class="position-absolute start-0 top-0 bg-black w-100 opacity-75 h-100 d-flex justify-content-start align-items-center z-2"
          ></div>
          <div
            class="position-relative z-3 text-white d-flex align-items-center gap-3 ps-3 ps-md-5"
          >
            <span
              class="fs-3 border border-5 border-primary rounded-5 d-flex align-items-center justify-content-center"
              style="width: 60px; height: 60px"
              >2</span
            >
            <h3>Толщина металла</h3>
          </div>
        </div>

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
              aria-label="Default select example"
              v-model="form.thickness"
            >
              <option value="0.5">0.5</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 py-4 border-bottom position-relative">
        <div
          class="position-absolute start-0 top-0 w-100 h-100 d-flex z-1"
          v-if="form.thickness === null"
        >
          <div
            class="position-absolute start-0 top-0 bg-black w-100 opacity-75 h-100 d-flex justify-content-start align-items-center z-2"
          ></div>
          <div
            class="position-relative z-3 text-white d-flex align-items-center gap-3 ps-3 ps-md-5"
          >
            <span
              class="fs-3 border border-5 border-primary rounded-5 d-flex align-items-center justify-content-center"
              style="width: 60px; height: 60px"
              >3</span
            >
            <h3>Количество резов</h3>
          </div>
        </div>
        <div class="row align-items-center row-gap-3">
          <div class="col-md-6">
            <h2 class="fs-4">Количество резов</h2>
            <small class="text-secondary mt-2 d-block"
              >
              Выберите доступное значение или введите свое
              </small
            >
          </div>
          <div class="col-md-6 d-flex gap-3">
            <select
              class="form-select bg-light"
              aria-label="Default select example"
              v-model="form.cutLength"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <input
              type="text"
              class="form-control bg-light"
              required
              placeholder=""
              v-model="form.cutLength"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-4 border-bottom position-relative">
        <div class="position-absolute start-0 top-0 w-100 h-100 d-flex z-1">
          <div
            class="position-absolute start-0 top-0 bg-black w-100 opacity-75 h-100 d-flex justify-content-start align-items-center z-2"
          ></div>
          <div
            class="position-relative z-3 text-white d-flex align-items-center gap-3 ps-3 ps-md-5"
          >
            <span
              class="fs-3 border border-5 border-primary rounded-5 d-flex align-items-center justify-content-center"
              style="width: 60px; height: 60px"
              >4</span
            >
            <h3>Длина реза</h3>
          </div>
        </div>
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
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-4 border-bottom position-relative">
        <div class="position-absolute start-0 top-0 w-100 h-100 d-flex z-1">
          <div
            class="position-absolute start-0 top-0 bg-black w-100 opacity-75 h-100 d-flex justify-content-start align-items-center z-2"
          ></div>
          <div
            class="position-relative z-3 text-white d-flex align-items-center gap-3 ps-3 ps-md-5"
          >
            <span
              class="fs-3 border border-5 border-primary rounded-5 d-flex align-items-center justify-content-center"
              style="width: 60px; height: 60px"
              >5</span
            >
            <h3>Обработка</h3>
          </div>
        </div>
        <div class="row align-items-center row-gap-3">
          <div class="col-md-6">
            <h2 class="fs-4">Обработка</h2>
            <small class="text-secondary mt-2 d-block"
              >Далеко-далеко за словесными горами в стране гласных и согласных,
              живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
            >
          </div>
          <div class="col-lg-6 d-flex flex-wrap gap-4 align-items-start">
            <label class="d-block" for="no-paint">
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
                  name="material"
                  id="no-paint"
                  value="no-paint"
                />
                <span class="d-block">Нет</span>
              </div>
            </label>
            <label class="d-block" for="paint-ral">
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
                  name="material"
                  id="paint-ral"
                  value="paint-ral"
                />
                <span class="d-block"
                  >Порошковая<br />покраска<br />(RAL 0000)</span
                >
              </div>
            </label>
            <label class="d-block" for="other-paint">
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
                  name="material"
                  id="other-paint"
                  value="other-paint"
                />
                <span class="d-block">Свой цвет RAL</span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="px-4 py-4 border-bottom position-relative">
        <div class="position-absolute start-0 top-0 w-100 h-100 d-flex z-1">
          <div
            class="position-absolute start-0 top-0 bg-black w-100 opacity-75 h-100 d-flex justify-content-start align-items-center z-2"
          ></div>
          <div
            class="position-relative z-3 text-white d-flex align-items-center gap-3 ps-3 ps-md-5"
          >
            <span
              class="fs-3 border border-5 border-primary rounded-5 d-flex align-items-center justify-content-center"
              style="width: 60px; height: 60px"
              >6</span
            >
            <h3>Площадь изделия</h3>
          </div>
        </div>
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
              <input
                type="text"
                class="form-control bg-light"
                required
                placeholder="Длина(мм)"
              />
              <input
                type="text"
                class="form-control bg-light"
                required
                placeholder="Ширина(мм)"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-4 border-bottom position-relative">
        <div class="position-absolute start-0 top-0 w-100 h-100 d-flex z-1">
          <div
            class="position-absolute start-0 top-0 bg-black w-100 opacity-75 h-100 d-flex justify-content-start align-items-center z-2"
          ></div>
          <div
            class="position-relative z-3 text-white d-flex align-items-center gap-3 ps-3 ps-md-5"
          >
            <span
              class="fs-3 border border-5 border-primary rounded-5 d-flex align-items-center justify-content-center"
              style="width: 60px; height: 60px"
              >7</span
            >
            <h3>Дополнительно</h3>
          </div>
        </div>
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
                accept="application/octet-stream"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-4 border-bottom position-relative">
        <div class="position-absolute start-0 top-0 w-100 h-100 d-flex z-1">
          <div
            class="position-absolute start-0 top-0 bg-black w-100 opacity-75 h-100 d-flex justify-content-start align-items-center z-2"
          ></div>
          <div
            class="position-relative z-3 text-white d-flex align-items-center gap-3 ps-3 ps-md-5"
          >
            <span
              class="fs-3 border border-5 border-primary rounded-5 d-flex align-items-center justify-content-center"
              style="width: 60px; height: 60px"
              >8</span
            >
            <h3>Способы доставки</h3>
          </div>
        </div>
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
            >
              <option value="0.5">Самовывоз</option>
              <option value="1">Адрес Москва, МО</option>
              <option value="2">Транспортная компания</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 py-4 border-bottom position-relative">
        <div class="position-absolute start-0 top-0 w-100 h-100 d-flex z-1">
          <div
            class="position-absolute start-0 top-0 bg-black w-100 opacity-75 h-100 d-flex justify-content-start align-items-center z-2"
          ></div>
          <div
            class="position-relative z-3 text-white d-flex align-items-center gap-3 ps-3 ps-md-5"
          >
            <span
              class="fs-3 border border-5 border-primary rounded-5 d-flex align-items-center justify-content-center"
              style="width: 60px; height: 60px"
              >9</span
            >
            <h3>Сроки</h3>
          </div>
        </div>
        <div class="row align-items-center row-gap-3">
          <div class="col-md-6">
            <h2 class="fs-4">Сроки</h2>
            <small class="text-secondary mt-2 d-block"
              >Далеко-далеко за словесными горами в стране гласных и согласных,
              живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
            >
          </div>
          <div
            class="col-md-6 d-flex align-items-center justify-content-between"
          >
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1"
                >Сегодня <br />
                01.02.23</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2"
                >Завтра<br />02.02.23</label
              >
            </div>
            <div class="form-check form-check-inline">
              <span>Выбрать свою дату</span>
              <input
                type="date"
                name=""
                id=""
                class="form-control bg-light mt-2"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- <div
        class="px-3 py-3 px-md-4 py-md-5 border-bottom border-top bg-light position-sticky bottom-0"
      >
      <button class="btn btn-primary btn-lg mx-auto d-block px-5 py-3 rounded-1" @click="modalCalc = true">Рассчитать</button>
      
      </div> -->
    </form>
  </div>

 

  <modals-calculate v-if="modalCalc" />
</template>