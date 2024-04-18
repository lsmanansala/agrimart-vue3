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

    <q-drawer v-model="leftDrawerOpen" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-expansion-item expand-separator icon="dashboard" label="Dashboard">
            <q-card>
              <q-card-section>
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/product-seeker"
                >
                  <q-item clickable v-ripple>
                    <q-item-section> Product Seeker </q-item-section>
                  </q-item>
                </router-link>
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/farmer"
                >
                  <q-item clickable v-ripple>
                    <q-item-section> Farmer </q-item-section>
                  </q-item>
                </router-link>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Loreen Jade Wong</div>
          <div>@ljwong</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
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
