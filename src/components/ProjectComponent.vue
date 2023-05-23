<template>
  <article class="project">
    <img :src="image" :alt="description" />
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
      image: String,
    },
  }
</script>

<style scoped>
  .project {
    display: flex;
  }
  .project img {
    max-height: 6rem;
    margin-right: 1rem;
  }
</style>
