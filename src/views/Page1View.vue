<template>
  <section>
    <h1>PAGE 1</h1>
    <p>{{ routeQuery }}</p>
  </section>
</template>

<script>
  export default {
    computed: {
      routeQuery: function () {
        return this.$route.query
      },
    },
  }
</script>

<style scoped>
  section {
    margin-top: 4rem;
  }
</style>
