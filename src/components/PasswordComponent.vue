<template>
  <input type="password" v-model="password" />
  <p v-if="password !== '' && !passwordHasMinEightCharacters">
    Le mot de passe doit contenir 8 caractères
  </p>
  <p v-if="!passwordContainsOneNumber">
    Le mot de passe doit contenir au moins un nombre
  </p>
  <p v-if="!passwordContainsOneCapitalLetter">
    Le mot de passe doit contenir au moins une majuscule
  </p>
  <p v-if="!passwordContainsOneSpecialCharacter">
    Le mot de passe doit contenir au moins un caractère spécial
  </p>
</template>

<script>
  export default {
    data() {
      return {
        password: "",
      }
    },
    computed: {
      passwordHasMinEightCharacters: function () {
        return this.password.length >= 8
      },
      // /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      passwordContainsOneNumber: function () {
        return /[0-9]/.test(this.password)
      },
      passwordContainsOneCapitalLetter: function () {
        return /[A-Z]/.test(this.password)
      },
      passwordContainsOneSpecialCharacter: function () {
        return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.password)
      },
    },
  }
</script>
