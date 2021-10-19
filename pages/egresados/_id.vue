<template>
  <div class="mb-6">
    <LayoutHero
      :hero="getHeroEgresados"
      :img="getHeroEgresados.imagenDeFondo"
    />
    <EgresadosDetalle :egresado="egresado" :cmbEgresado="cmbEgresado" />
  </div>
</template>

<script>
export default {
  computed: {
    getHeroEgresados() {
      return this.$store.getters["egresados/getHeroEgresados"];
    }
  },
  async asyncData({ app, route }) {
    const client = app.apolloProvider.defaultClient;
    const id = route.params.id;
    const query = {
      query: require("~/queries/cpt/single_egresado.gql"),
      variables: { id }
    };
    let egresado = [];
    let cmbEgresado = [];
    await client
      .query(query)
      .then(resp => {
        egresado = resp.data;
        cmbEgresado = egresado.egresadoBy.cmbEgresados;
      })
      .catch(console.log);

    return { egresado, cmbEgresado };
  }
};
</script>

<style lang="scss" scoped></style>
