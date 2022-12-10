<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Home APP</h1>
  <factures-page></factures-page>
</template>

<script>
import FacturesPage from './pages/FacturesPage.vue';

export default {
  name: 'App',
  components: {
    FacturesPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
