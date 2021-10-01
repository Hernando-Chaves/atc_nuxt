<template>
  <div>
    <!-- <p v-for="item in hero.nodes" :key="item.id">
      {{ item.featuredImage.node.sourceUrl }}
    </p> -->
    <div
      class="bg-cover h-60 w-full"
      v-for="item in settings.nodes"
      :key="item.id"
      :style="{
        backgroundImage: `url(${item.featuredImage.node.sourceUrl})`
      }"
    >
      <div
        class="container h-52 flex content-center flex-col justify-center flex-wrap "
      >
        <button class="bg-red-500 text-white uppercase px-4 py-2 mx-auto">
          {{ item.pageProgramas.textoBotonRojo }}
        </button>
        <h2 class="text-3xl  text-white ">
          {{ item.pageProgramas.tituloHero }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: ""
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
        this.settings = data.data.pages;
      })
      .catch(console.log);
  }
};
</script>

<style lang="scss" scoped></style>
