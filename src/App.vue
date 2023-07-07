<template>
  <v-app>
    <payroll-app-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import PayrollAppBar from "@/components/PayrollAppBar.vue";
</script>
