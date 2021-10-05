<template>
  <div class="mb-6">
    <LayoutHero :hero="hero" :img="img" />

    <div class="container grid grid-cols-3 mt-5">
      <CursosImgPrograma
        class="col-span-2"
        :curso="curso"
        :descripcion="config.descripcion"
      />

      <CursosDetallePrograma :config="config" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    const client = app.apolloProvider.defaultClient,
      id = route.params.id,
      hero = route.params.hero,
      img = route.params.img,
      query = {
        query: require("~/queries/cpt/single_curso.gql"),
        variables: { id, hero, img }
      };
    let curso = null;
    let config = null;
    await client
      .query(query)
      .then(resp => {
        curso = resp.data.cPTCursoATCBy;
        config = curso.configuracionCursosATC;
      })
      .catch(console.log);

    return { curso, hero, config, img };
  }
};
</script>
