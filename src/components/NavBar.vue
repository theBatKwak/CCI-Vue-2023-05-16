<template>
  <button @click="showNav = true">
    <img v-if="!showNav" src="../assets/hamb.png" alt="menu hamburger" />
  </button>
  <Transition>
    <section v-show="showNav">
      <button @click="showNav = false">
        <img src="../assets/close.png" alt="fermer menu hamburger" />
      </button>
      <nav>
        <ul>
          <li>
            <RouterLink @click="showNav = false" to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink @click="showNav = false" to="/page1">Page 1</RouterLink>
          </li>
        </ul>
      </nav>
    </section>
  </Transition>
</template>

<script>
  export default {
    data() {
      return {
        showNav: false,
      }
    },
  }
</script>

<style scoped>
  section {
    background: rgb(206, 206, 206);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
  }
  button {
    background: none;
    border: none;
  }
  button img {
    height: 3rem;
  }
  nav ul li {
    margin: 1rem 2rem;
  }
  nav {
    height: 100vh;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
