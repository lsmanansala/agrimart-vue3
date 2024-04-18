<template>
  <q-layout view="hhh lpR fFf">
    <q-header reveal elevated class="bg-white text-black" height-hint="100">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar square style="width: auto; height: auto">
            <img src="../assets/logo.png" />
          </q-avatar>
        </q-toolbar-title>

        <q-tabs>
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/shop" label="Shop" />
          <q-route-tab to="/about" label="About Us" />
          <q-route-tab to="/contact" label="Contact" />
        </q-tabs>
        <q-space />
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn to="/product-seeker" flat round dense icon="person" class="q-mr-xs" />
        <q-btn flat round dense icon="shopping_bag" class="q-mr-xs" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <slot/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from "../assets/logo.png";
import { useRoute, useRouter } from "vue-router";

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const router = useRoute();

const pushRoute = (path: string) => {
  router.push(path);
};
</script>
