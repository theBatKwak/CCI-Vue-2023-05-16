<template>
  <div class="personnage">
    <img :src="image" alt="" />
    <div>
      <h2><span v-if="isDead">☠️</span>{{ name }}</h2>
      <p>{{ classe }}</p>
      <div class="stats">
        <p>
          Vie : <span class="health-points">{{ health }}</span>
        </p>
        <p>
          Mana : <span class="mana-points">{{ mana }}</span>
        </p>
      </div>
      <p>Thunes : {{ moneyText }}.</p>
    </div>
  </div>
</template>

<script>
import imageGuerrier from "../assets/img/guerrier.png"
import imageMage from "../assets/img/mage.png"
import imageMarchand from "../assets/img/marchand.png"
import imageSorcier from "../assets/img/sorcier.png"
import imageVoleur from "../assets/img/voleur.png"

export default {
  name: "PersonnageComponent",
  props: {
    name: String,
    classe: String,
    health: Number,
    mana: Number,
    image: File,
    money: Number,
  },
  methods: {},
  computed: {
    isDead: function () {
      return this.health <= 0
    },
    image: function () {
      switch (this.classe) {
        case "Mage":
          return imageMage
        case "Guerrier":
          return imageGuerrier
        case "Voleur":
          return imageVoleur
        case "Sorcier":
          return imageSorcier
        case "Marchand":
          return imageMarchand
      }
    },
    moneyText: function () {
      if (this.money > 1) {
        return this.money + " pièces d'or"
      } else if (this.money === 1) {
        return "1 pièce d'or"
      } else if (this.money === 0) {
        return "À sec"
      } else if (this.money <= 0) {
        return "Endetté"
      }
    },
  },
}
</script>

<style scoped>
.personnage {
  display: flex;
  padding: 1rem;
  border-radius: 6px;
  background: rgb(223, 223, 223);
  margin: 0.5rem auto;
}

.personnage img {
  height: 8rem;
  margin-right: 1rem;
}
.health-points {
  background: rgb(197, 197, 197);
  padding: 0.5rem;
  border-radius: 6px;
  color: rgb(49, 145, 20);
  margin-right: 0.5rem;
}
.mana-points {
  background: rgb(197, 197, 197);
  padding: 0.5rem;
  border-radius: 6px;
  color: rgb(20, 62, 145);
}
.personnage .stats {
  display: flex;
  align-items: center;
}
</style>
