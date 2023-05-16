<template>
  <!--AFFICHER ICI LE PERSONNAGE-->
  <PersonnageComponent
    v-for="personnage in personnages"
    :name="personnage.name"
    :classe="personnage.classe"
    :health="personnage.health"
    :mana="personnage.mana"
    :image="imageMarchand"
    :money="personnage.money"
  />
</template>
<script>
import PersonnageComponent from "./components/PersonnageComponent.vue"
export default {
  name: "App",
  components: {
    PersonnageComponent,
  },
  data() {
    return {
      personnages: [
        {
          name: "Gandalf le mage",
          classe: "Mage",
          health: 0,
          mana: 5,
          money: 0,
        },
        {
          name: "Gandalf le guerrier",
          classe: "Guerrier",
          health: 20,
          mana: 0,
          money: 15,
        },
        {
          name: "Gandalf le voleur",
          classe: "Voleur",
          health: 12,
          mana: 5,
          money: 1,
        },
        {
          name: "Gandalf le marchand",
          classe: "Marchand",
          health: 12,
          mana: 5,
          money: -10,
        },
      ],
    }
  },
  /**
   * 1 -- Faire un composant PersonnageComponent
   * Affiche son nom (DATA)
   * Affiche sa classe (par ex "Guerrier") (DATA)
   * Affiche une image
   * Affiche ses points de vie (DATA)
   * Affiche ses points de mana (DATA)
   */

  /**
   * 2 -- Ajouter des boutons au personnage pour lui
   * retirer / ajouter de la vie
   */

  /**
   * 3 -- Rendre le personnage dynamique avec des props
   */

  /**
   * 4 -- Afficher une liste dynamique de personnages
   */

  /**
   * 5 -- Afficher l'état d'un personnage avec une computed
   */
}
</script>
<style>
:root {
  font-family: sans-serif;
}
</style>
