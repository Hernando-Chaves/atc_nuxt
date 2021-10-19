<template>
  <div>
    <div>
      <LayoutHero
        :hero="getHeroEstudiantes"
        :img="getHeroEstudiantes.imagenDeFondo"
      />
      <NoticiasPosts />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getHeroEstudiantes() {
      return this.$store.getters["estudiantes/getHeroEstudiantes"];
    }
  }
};
</script>
