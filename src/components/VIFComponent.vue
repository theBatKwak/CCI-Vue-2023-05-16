<template>
  <p v-if="afficherParagraphe">
    Ce texte est affiché seulement si "afficherParagraphe" est à "true"
  </p>
</template>
<script>
export default {
  name: "VIFComponent",
  data() {
    return {
      afficherParagraphe: true,
    }
  },
}
</script>
