<template>
  <div>
    <LayoutHero :hero="hero" :img="imgHero" />
    <!-- <CursosProgramas /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: "",
      imgHero: ""
    };
  },
  async fetch() {
    const client = this.$apollo.getClient();
    const query = {
      query: require("~/queries/paginas/egresados.gql")
    };

    await client
      .query(query)
      .then(resp => {
        const [
          {
            node: {
              template: {
                heroPaginas,
                heroPaginas: { imagenDeFondo }
              }
            }
          }
        ] = resp.data.pages.edges;

        this.hero = heroPaginas;
        this.imgHero = imagenDeFondo;
      })
      .catch(console.log);
  }
};
</script>

<style lang="scss" scoped></style>
