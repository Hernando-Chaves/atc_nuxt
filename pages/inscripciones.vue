<template>
  <div>
    <div>
      <LayoutHero
        :hero="getHeroInscripciones"
        :img="getHeroInscripciones.imagenDeFondo"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getHeroInscripciones() {
      return this.$store.getters["inscripciones/getHeroInscripciones"];
    }
  }
};
</script>
