<template>
  <div>
    <div>
      <LayoutHero
        :hero="getHeroProgramas"
        :img="getHeroProgramas.imagenDeFondo"
      />
      <CursosProgramas />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getHeroProgramas() {
      return this.$store.getters["cursos/getHeroPrograms"];
    }
  }
};
</script>
