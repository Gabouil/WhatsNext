<template>
  <div id="app">
    <mainpage></mainpage>
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue"

export default {
  name: 'app',
  components: {
    'mainpage' : MainPage
  }
}
</script>

<style>
</style>
