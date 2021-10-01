<template>
  <div>
    <LayoutHero />

    <div class="container grid grid-cols-3 mt-5">
      <!-- {{ curso }} -->

      <!-- IMG Y DESCRIPCION -->
      <div class="col-span-2">
        <span>
          <button @click="goBack">Volver</button>
        </span>
        <h3 class="uppercase text-3xl font-semibold">perfil</h3>
        <div
          class="m-4"
          v-for="({ sourceUrl }, i) in curso.featuredImage"
          :key="i"
        >
          <img :src="sourceUrl" alt="" />
          <p class="mt-3">{{ config.descripcion }}</p>
        </div>
      </div>

      <!-- DETALLE RPROGRAMA -->
      <div class="shadow-2xl px-4 py-4 max-h-96">
        <h3 class="uppercase text-2xl font-semibold">Detalle del programa</h3>
        <div class="grid grid-cols-3 pt-6">
          <div class="">
            <p class="text-md mt-4">Empieza</p>
            <p class="text-md mt-4">Duración</p>
            <p class="text-md mt-4">Sede</p>
            <p class="text-md mt-4">Valor</p>
          </div>
          <div class="col-span-2">
            <p class="text-md mt-4">
              {{ config.fechaDeInicio }}
            </p>
            <p class="text-md mt-4">
              {{ config.duracion }}
            </p>
            <p class="text-md mt-4 capitalize">
              {{ config.sede }}
            </p>
            <p class="text-md mt-4">CO ${{ config.valor }}</p>
          </div>
        </div>
        <button
          class="text-sm w-full px-2 py-4 bg-red-500 hover:bg-black hover:shadow-lg transition duration-500 uppercase text-white mt-3"
        >
          descargar programa
        </button>
        <button
          class="text-sm w-full px-2 py-4 bg-white hover:shadow-lg transition duration-500 uppercase text-black border border-black mt-3"
        >
          descargar programa
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  },
  async asyncData({ app, route }) {
    const client = app.apolloProvider.defaultClient;
    const id = route.params.id;
    const hero = route.params.hero;
    const query = {
      query: require("~/queries/cpt/single_curso.gql"),
      variables: { id, hero }
    };
    let curso = null;
    let config = null;
    await client
      .query(query)
      .then(resp => {
        console.log("El id HERO ES " + hero);
        curso = resp.data.cPTCursoATCBy;
        config = curso.configuracionCursosATC;
      })
      .catch(console.log);

    return { curso, hero, config };
  }
};
</script>
