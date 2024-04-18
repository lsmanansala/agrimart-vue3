<template>
  <div>
    <BasicLayout>
      <div class="q-pa-lg">
        <span class="text-h4 text-secondary">Agriculture Products</span>
      </div>
      <div class="q-pa-lg q-mx-auto row">
        <div class="col-2 q-ma-lg" v-for="i in 10">
          <ProductCard />
        </div>
      </div>
    </BasicLayout>
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '../layouts/BasicLayout.vue'
import ProductCard from '../components/ProductCard.vue'
</script>