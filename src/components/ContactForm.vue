<template>
  <form>
    <h1>Formulaire de contact</h1>
    <InputComponent />
    <InputComponent />
  </form>
</template>

<script>
import InputComponent from "./InputComponent.vue"
export default {
  name: "ContactForm",
  components: {
    InputComponent,
  },
}
</script>
