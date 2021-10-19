<template>
  <div>
    <div>
      <LayoutHero
        :hero="getHeroEgresados"
        :img="getHeroEgresados.imagenDeFondo"
      />
      <Egresados />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getHeroEgresados() {
      return this.$store.getters["egresados/getHeroEgresados"];
    }
  }
};
</script>
