<template>
  <div class="app-wrapper">
    <sidebar />
    <div class="main-container">
      <div class="navbar-wrapper">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
</script>