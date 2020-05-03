<template>
  <div id="app">
    <ProductPlans/>
  </div>
</template>

<script>
import ProductPlans from './components/ProductPlans.vue'

export default {
  name: 'App',
  components: {
    ProductPlans
  }
}
</script>

<style lang="scss">
body {
  background-color: #fefefe;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
