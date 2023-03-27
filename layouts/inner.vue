<template>
  <div>
    <the-header></the-header>
    <section class="border-top py-5">
      <div class="container">
        <bread-crumbs />
        <h2 class="mt-4">О компании</h2>
        <div class="row mt-5">
          <div class="col-md-3">
            <page-sidebar />
          </div>
          <div class="col-md-9">
            <slot name="content"/>
          </div>
        </div>
      </div>
    </section>
     <cta-section /> 
    <the-footer></the-footer>
  </div>

</template>