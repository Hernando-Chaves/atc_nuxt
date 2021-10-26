<template>
  <div class="">
    <div class="cursos-atc pt-4">
      <div class="title-atc">
        <h2 class="text-2xl text-center text-black uppercase font-semibold">
          Egresados destacados
        </h2>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-4b mt-5 container max-w">
        <div
          class="group hover:shadow-2xl transition duration-500 cursor-pointer"
          v-for="{
            id,
            title,
            cmbEgresados: {
              miniatura: { sourceUrl, altText, srcSet }
            }
          } in egresados"
          :key="id"
        >
          <nuxt-link
            :to="{
              name: 'egresados-id',
              params: {
                id: id
              }
            }"
          >
            <div class="relative">
              <img :src="sourceUrl" :alt="altText" :srcset="srcSet" />
              <h2
                class="text-black group-hover:text-white text-xl bg-white group-hover:bg-primary-500 px-4 py-2 absolute -bottom-3 right-1 transition duration-500  shadow-xl"
              >
                {{ title }}
              </h2>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    egresados() {
      return this.$store.getters["egresados/getEgresados"];
    }
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
