<template>
  <p v-for="fruit in fruits">{{ fruit.title }}, {{ fruit.price }} €</p>
</template>

<script>
export default {
  name: "VFORComponent",
  data() {
    return {
      fruits: [
        {
          title: "Banane",
          price: 2,
        },
        {
          title: "Pomme",
          price: 4,
        },
        {
          title: "Fraise",
          price: 1,
        },
      ],
    }
  },
}
</script>
