<template>
  <form @submit.prevent="submit">
    <h1>Formulaire d'inscription</h1>
    <div class="form-input">
      <label for="nickname">Pseudonyme</label>
      <input type="text" id="nickname" v-model="nickName" />
    </div>
    <div class="form-input">
      <label for="email">Adresse email</label>
      <input type="email" id="email" v-model="email" />
      <p v-if="email !== '' && !isEmailValid" class="form-error">
        Veuillez renseigner une adresse email valide
      </p>
    </div>
    <div class="form-input">
      <label for="password">Mot de passe</label>
      <input type="text" id="password" v-model="password" />
      <p
        v-if="password !== '' && !passwordHasMinEightCharacters"
        class="form-error"
      >
        Le mot de passe doit contenir 8 caractères
      </p>
      <p
        v-if="password !== '' && !passwordContainsOneNumber"
        class="form-error"
      >
        Le mot de passe doit contenir au moins un nombre
      </p>
      <p
        v-if="password !== '' && !passwordContainsOneCapitalLetter"
        class="form-error"
      >
        Le mot de passe doit contenir au moins une majuscule
      </p>
      <p
        v-if="password !== '' && !passwordContainsOneSpecialCharacter"
        class="form-error"
      >
        Le mot de passe doit contenir au moins un caractère spécial
      </p>
    </div>
    <div class="form-input">
      <p>Je suis</p>
      <div v-for="profile in availableProfiles">
        <input
          type="radio"
          :name="profile"
          :id="'user' + profile"
          :value="profile"
          v-model="userProfile"
        />
        <label :for="'user' + profile">{{ profile }}</label>
      </div>
    </div>
    <div class="form-input">
      <p>Je cherche</p>
      <div v-for="profile in availableProfiles">
        <input
          type="checkbox"
          :name="profile"
          :id="'search' + profile"
          :value="profile"
          v-model="selectedProfiles"
        />
        <label :for="'search' + profile">{{ profile }}</label>
      </div>
    </div>
    <div class="form-input">
      <label for="relation">Type de relation</label>
      <select name="relation" id="relation" v-model="selectedRelation">
        <option v-for="relation in availableRelations" :value="relation">
          {{ relation }}
        </option>
      </select>
    </div>
    <div>
      <input type="checkbox" name="cgu" id="cgu" v-model="acceptedCGUs" />
      <label for="cgu">J'accepte les sombres conditions d'utilisation</label>
    </div>
    <button v-if="canSubmitForm" type="submit">S'inscrire</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        nickName: "",
        email: "",
        password: "",
        availableProfiles: ["Chat", "Chien", "Cochon d'inde", "Capybara"],
        selectedProfiles: [],
        userProfile: "",
        availableRelations: [
          "Trouver sa moitié",
          "Prendre un verre",
          "Friendzone",
          "Coup d'un soir",
        ],
        selectedRelation: "",
        acceptedCGUs: false,
      }
    },
    computed: {
      isEmailValid() {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)
      },
      passwordHasMinEightCharacters: function () {
        return this.password.length >= 8
      },
      passwordContainsOneNumber: function () {
        return /[0-9]/.test(this.password)
      },
      passwordContainsOneCapitalLetter: function () {
        return /[A-Z]/.test(this.password)
      },
      passwordContainsOneSpecialCharacter: function () {
        return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.password)
      },
      canSubmitForm: function () {
        return (
          this.nickName !== "" &&
          this.isEmailValid &&
          this.passwordHasMinEightCharacters &&
          this.passwordContainsOneNumber &&
          this.passwordContainsOneCapitalLetter &&
          this.passwordContainsOneSpecialCharacter &&
          this.selectedProfiles.length > 0 &&
          this.selectedRelation !== "" &&
          this.acceptedCGUs
        )
      },
    },
    methods: {
      submit() {
        console.log("Le formulaire a été validé")
        console.log(`Pseudo choisi : ${this.nickName}`)
        console.log(`Adresse email : ${this.email}`)
        console.log(`Mot de passe : ${this.password}`)
        console.log(`Profil : ${[...this.selectedProfiles]}`)
        console.log(`Relation : ${this.selectedRelation}`)
      },
    },
  }
</script>
<style scoped>
  .form-input {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
  .form-error {
    color: red;
  }
</style>
