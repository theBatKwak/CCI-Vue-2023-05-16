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
  body,
  #app {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  #app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
  }
  :root {
    font-family: sans-serif;
  }
  main {
    margin-top: 4rem;
  }
</style>
