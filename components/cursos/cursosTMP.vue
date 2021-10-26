<template>
  <div class="my-4">
    <div class="cursos-atc pt-4">
      <div class="title-atc">
        <h2 class="text-2xl text-center text-black uppercase font-semibold">
          NUESTROS PROGRAMAS
        </h2>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-4b mt-5 container">
        <div
          class="group pb-6 pt-2 px-3 hover:shadow-xl transition duration-500"
          v-for="{
            title,
            id,
            configuracionCursosATC: { categoria, sede, miniatura }
          } in cursos"
          :key="id"
        >
          <nuxt-link
            :to="{
              name: 'programas-id',
              params: {
                id: id,
                hero: hero,
                img: imgHero
              }
            }"
          >
            <div class="card ">
              <img
                :src="miniatura.sourceUrl"
                :alt="miniatura.altText"
                :srcset="miniatura.srcSet"
              />
            </div>
            <div class="mt-2">
              <span class="text-sm text-primary-500 uppercase font-semibold">
                {{ categoria }}--
              </span>
              <span class="text-sm text-gray-500 uppercase font-semibold">
                {{ sede }}
              </span>
            </div>
            <h2 class="text-lg text-black font-semibold h-14 mt-2">
              {{ title }}
            </h2>
            <button
              class="text-gray-900 text-base group-hover:bg-primary-500 group-hover:text-white transition duration-500 px-5 py-3 mt-8"
            >
              Ver programa
              <span>
                <fa :icon="['fas', 'arrow-right']" />
              </span>
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cursos: "",
      hero: "",
      imgHero: ""
    };
  },
  async fetch() {
    const client = this.$apollo.getClient();
    const query = {
      query: require("@/queries/paginas/programas.gql")
    };
    await client
      .query(query)
      .then(resp => {
        this.cursos = resp.data.cPTCursosATC.nodes;

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
<style scoped>
.title-atc {
  position: relative;
}
.title-atc h2::before {
  content: "";
  position: absolute;
  top: 5px;
  right: 59%;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: red;
  z-index: -1;
}
.title-atc h2 {
  z-index: 1;
}
</style>
