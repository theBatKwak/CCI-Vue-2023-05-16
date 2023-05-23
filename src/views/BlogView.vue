<template>
  <section>
    <article v-for="article in blogPosts">
      <RouterLink :to="'/article?id=' + article.id">{{
        article.title
      }}</RouterLink>
    </article>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        blogPosts: [
          {
            id: 1,
            created_at: 1684825253000,
            title: "Article 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            created_at: 1682825253000,
            title: "Article 2",
            content:
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: 3,
            created_at: 1682825253000,
            title: "Article 3",
            content:
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            id: 4,
            created_at: 1684825253000,
            title: "Article 4",
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          },
          {
            id: 5,
            created_at: 1681825253000,
            title: "Article 5",
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            id: 6,
            created_at: 1685825253000,
            title: "Article 6",
            content:
              "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
          },
        ],
      }
    },
  }
</script>
