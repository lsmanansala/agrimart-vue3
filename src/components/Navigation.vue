<template>
  <div class="row justify-center">
    <div class="col">
      logo
    </div>
    <q-space/>
    <div class="col">
      <q-tabs v-model="tab">
        <q-tab name="images" label="Images" />
        <q-tab name="videos" label="Videos" />
        <q-tab name="articles" label="Articles" />
      </q-tabs>
    </div>
    <q-space/>
    <div class="col">
      logo
    </div>
  </div>
</template>
