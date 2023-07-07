<script setup lang="ts">

import {reactive} from "vue";
import RouterDestinations from "@/router/RouterDestinations";

const state = reactive({
  isDrawerPresented: false
})

type NavigationDrawerItem = {
  title: string,
  icon: string,
  destination: RouterDestinations
}

const items: Array<NavigationDrawerItem> = [
  {
    title: "Domu",
    icon: "mdi-home",
    destination: RouterDestinations.HOME
  },
  {
    title: "Kalkulacka",
    icon: "mdi-calculator",
    destination: RouterDestinations.CALCULATOR
  }
]

</script>

<template>

  <v-app-bar
    color="teal-darken-2"
  >
    <v-app-bar-nav-icon
      color="white"
      @click.stop="state.isDrawerPresented = !state.isDrawerPresented"
    />

    <v-app-bar-title>
      Payroll
    </v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer
    v-model="state.isDrawerPresented"
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :to="{name: item.destination}"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        {{ item.title }}
      </v-list-item>

    </v-list>

  </v-navigation-drawer>

</template>

<style scoped>

</style>
