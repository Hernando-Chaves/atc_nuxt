<template>
  <div class="my-4">
    <!-- <nuxt-link :to="`/programas/${curso.id}`"> -->
    <div class="cursos-atc">
      <div class="title-atc">
        <h2 class="text-2xl text-center text-black uppercase font-semibold">
          NUESTROS PROGRAMAS
        </h2>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4b mt-5 container">
        <div v-for="item in cursos" :key="item.node.id">
          <nuxt-link
            :to="{
              name: 'programas-id',
              params: {
                id: item.node.id
              }
            }"
          >
            <div
              class="card "
              v-for="{ sourceUrl, altText, id, srcSet } in item.node
                .featuredImage"
              :key="id"
            >
              <img :src="sourceUrl" :alt="altText" :srcset="srcSet" />
              {{ img }}
            </div>
            <h2 class="text-md text-gray-700">
              {{ item.node.title }}
            </h2>
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
      cursos: ""
    };
  },
  async fetch() {
    const client = this.$apollo.getClient();
    const query = {
      query: require("@/queries/paginas/programas.gql")
    };
    await client
      .query(query)
      .then(data => {
        this.cursos = data.data.cPTCursosATC.edges;
      })
      .catch(console.log);
  }
};
</script>
<style scoped>
.title-atc {
  position: relative;
}
.title-atc::after {
  content: "";
  position: absolute;
  top: 5px;
  left: 39.5%;
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
