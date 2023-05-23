<template>
  <section>
    <h1>Page produit</h1>
    <RouterLink to="/boutique">Retour à la boutique</RouterLink>
    <div v-if="product">
      <p>{{ product.title }}</p>
      <SliderComponent :imagesUrls="product.images" />
    </div>
  </section>
</template>

<script>
  // Importer axios pour pouvoir l'utiliser après
  import axios from "axios"
  import SliderComponent from "../components/SliderComponent.vue"
  // id du produit reçue dans l'URL
  // Aller chercher le produit avec axios sur :
  // https://dummyjson.com/products/ID_DU_PRODUIT
  export default {
    components: { SliderComponent },
    data() {
      return {
        // Produit (null par défaut parce qu'on l'a pas encore)
        product: null,
      }
    },
    methods: {
      /**
       * Cette méthode va chercher un produit sur l'API
       * et le stocke dans une data
       */
      fetchProductForId: async function (id) {
        const data = await axios.get("https://dummyjson.com/products/" + id)
        console.log(data)
        this.product = data.data
      },
    },
    mounted() {
      console.log(this.$route.query.id)
      this.fetchProductForId(this.$route.query.id)
    },
  }
</script>
