<template>
  <section>
    <h1>Projets</h1>
    <p>Voici une liste des super projets</p>
    <ProjectComponent
      v-for="project in projects"
      :key="project.name"
      :title="project.name"
      :description="project.description"
      :image="project.image"
    />
  </section>
</template>

<script>
  import ProjectComponent from "../components/ProjectComponent.vue"

  export default {
    data() {
      return {
        projects: [
          {
            name: "Machine à voyager dans le temps",
            description:
              "Invention de la machine à voyager dans le temps. Ne fonctionne que vers le futur, à une cadence de 1 seconde toutes les secondes.",
            image:
              "https://file1.telestar.fr/var/telestar/storage/images/2/8/9/289342/1727784-2/Retour-vers-le-futur-4-Christopher-Lloyd-alias-le-Doc-est-partant.jpg",
          },
          {
            name: "Un objet de ouf",
            description: "On sait pas trop à quoi ça sert",
            image:
              "https://file1.telestar.fr/var/telestar/storage/images/2/8/9/289342/1727784-2/Retour-vers-le-futur-4-Christopher-Lloyd-alias-le-Doc-est-partant.jpg",
          },
          {
            name: "J'ai plus d'idées",
            description: "On sait pas trop à quoi ça sert",
            image:
              "https://file1.telestar.fr/var/telestar/storage/images/2/8/9/289342/1727784-2/Retour-vers-le-futur-4-Christopher-Lloyd-alias-le-Doc-est-partant.jpg",
          },
        ],
      }
    },
    components: { ProjectComponent },
  }
</script>
