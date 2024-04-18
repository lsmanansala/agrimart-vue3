<template>
  <div>
    <q-card class="my-card" flat bordered style="max-width: 400px;">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Cafe Basilico
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          $・Very, Nice, Food
        </div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, alias?
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="primary">
          Add to cart
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>