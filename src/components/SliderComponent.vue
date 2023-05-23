<template>
  <section>
    <!-- Image avec comme src l'image à l'index "activeSlide" -->
    <img :src="imagesUrls[activeSlide]" />
    <button @click="nextSlide">Suivant</button>
    <button @click="prevSlide">Précédent</button>
  </section>
</template>

<script>
  export default {
    props: {
      // Liste des images de la galerie
      imagesUrls: [String],
    },
    data() {
      return {
        // Index de la photo actuelle du slider
        activeSlide: 0,
      }
    },
    methods: {
      nextSlide: function () {
        // Si l'image actuelle n'est pas la dernière du tableau
        if (this.activeSlide < this.imagesUrls.length - 1) {
          // On augmente l'index
          this.activeSlide++
          // Sinon
        } else {
          // On revient à la première image
          this.activeSlide = 0
        }
      },
      prevSlide: function () {
        // Si l'image actuelle n'est pas la première du tableau
        if (this.activeSlide !== 0) {
          // On diminue l'index
          this.activeSlide--
          // Sinon
        } else {
          // On affiche la dernière image du tableau
          this.activeSlide = this.imagesUrls.length - 1
        }
      },
    },
  }
</script>
