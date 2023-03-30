<script setup>
definePageMeta({
  layout: "inner",
});
</script>
<template>
  <h1>Расчёт стоимости</h1>
  <p class="text-secondary mt-2">
    Калькулятор стоимости пока что работает только для услуги "Лазерная резка",
    в будущем мы добавим в расчёт и другие услуги.
  </p>

  <div class="mt-5 border border-bottom-0">
    <form>
      <div class="px-4 py-4 border-bottom">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2 class="fs-4">Выбор материала</h2>
            <small class="text-secondary mt-2 d-block"
              >Далеко-далеко за словесными горами в стране гласных и согласных,
              живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
            >
          </div>
          <div class="col-md-6 d-flex gap-4">
            <label class="d-block" for="steel">
              <div class="" style="width: 120px">
                <img
                  src="@/assets/img/mock-img-sq.jpg"
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
                  value="steel1"
                  checked
                />
                <span class="d-block">Сталь СТ3</span>
              </div>
            </label>
            <label class="d-block" for="steel2">
              <div class="" style="width: 120px">
                <img
                  src="@/assets/img/mock-img-sq.jpg"
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
                  value="steel2"
                />
                <span class="d-block">Нержавейка</span>
              </div>
            </label>
            <label class="d-block" for="steel3">
              <div class="" style="width: 120px">
                <img
                  src="@/assets/img/mock-img-sq.jpg"
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
                  value="steel3"
                />
                <span class="d-block">Оцинковка</span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="px-4 py-4 border-bottom">
        <div class="row align-items-center">
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

      <div class="px-4 py-4 border-bottom">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2 class="fs-4">Количество резов</h2>
            <small class="text-secondary mt-2 d-block"
              >Далеко-далеко за словесными горами в стране гласных и согласных,
              живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
            >
          </div>
          <div class="col-md-6">
            <select
              class="form-select bg-light"
              aria-label="Default select example"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
      <div class="px-4 py-4 border-bottom">
        <div class="row align-items-center">
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
              placeholder="Длина реза"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-4 border-bottom">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2 class="fs-4">Обработка</h2>
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
              placeholder="Длина реза"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-4 border-bottom">
        <div class="row align-items-center">
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

      <div class="px-4 py-4 border-bottom">
        <div class="row align-items-center">
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

      <div class="px-4 py-4 border-bottom">
        <div class="row align-items-center">
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
              <option value="1">Транспортная компания</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 py-4">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2 class="fs-4">Сроки</h2>
            <small class="text-secondary mt-2 d-block"
              >Далеко-далеко за словесными горами в стране гласных и согласных,
              живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
            >
          </div>
          <div class="col-md-6">
            <input type="date" name="" id="" class="form-control bg-light" required/>
          </div>
        </div>
      </div>

      <div
        class="px-4 py-5 border-bottom border-top bg-light position-sticky bottom-0"
      >
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2 class="fs-2">Итого стоимость</h2>
            <button class="btn btn-primary mt-2 rounded-1 px-4 py-2">
              Расcчитать
            </button>
            <!-- <small class="text-secondary mt-2 d-block"
            >Далеко-далеко за словесными горами в стране гласных и согласных,
            живут рыбные тексты. Алфавит буквоград грамматики выйти.</small
          > -->
          </div>
          <div class="col-md-6">
            <h2 class="">0 руб.</h2>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>