<template>
  <form action="">
    <input type="text" v-model="monTexte" />
    <input type="checkbox" name="aze" id="aze" v-model="isChecked" />
    <select name="azer" id="azer" v-model="selectedAnimal" multiple>
      <option v-for="animal in availableAnimals" :value="animal">
        {{ animal }}
      </option>
    </select>
    <input type="radio" name="1" id="1" value="1" v-model="radioButton" />
    <input type="radio" name="2" id="2" value="2" v-model="radioButton" />
    <p>{{ radioButton }}</p>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        monTexte: "",
        isChecked: false,
        selectedAnimal: [""],
        availableAnimals: ["Cat", "Dog", "Fish", "Cow"],
        radioButton: "1",
      }
    },
  }
</script>
