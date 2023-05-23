<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>
<script>
  import AppFooter from "./components/AppFooter.vue"
  import NavBar from "./components/NavBar.vue"

  export default {
    name: "App",
    components: { NavBar, AppFooter },
  }
</script>
<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }
  :root {
    font-family: sans-serif;
  }
  main {
    margin-top: 4rem;
  }
</style>
