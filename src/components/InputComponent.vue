<template>
  <label for="recherche">Rechercher</label>
  <input id="recherche" type="text" placeholder="1234" />
</template>
<script>
export default {
  name: "InputComponent",
}
</script>
<style scoped>
label {
  text-transform: uppercase;
  font-size: 0.75rem;
}
</style>
