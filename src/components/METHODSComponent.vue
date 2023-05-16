<template>
  <p>{{ compteur }}</p>
  <button @click="increment">Incrémenter</button>
  <button @click="decrement">Décrémenter</button>
</template>

<script>
export default {
  name: "METHODSComponent",
  data() {
    return {
      compteur: 0,
    }
  },
  methods: {
    increment: function () {
      this.compteur++
    },
    decrement: function () {
      this.compteur--
    },
  },
}
</script>
