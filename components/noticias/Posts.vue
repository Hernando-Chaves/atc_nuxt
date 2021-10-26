<template>
  <div class="">
    <div class="cursos-atc pt-7">
      <div class="title-atc">
        <h2 class="text-2xl text-center text-black uppercase font-semibold">
          EVENTOS Y NOTICIAS
        </h2>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-4b mt-5 container">
        <div
          class="group pb-6 pt-2 px-3 hover:shadow-xl transition duration-500"
          v-for="{ id, title, excerpt, categories, featuredImage } in posts"
          :key="id"
        >
          <nuxt-link
            :to="{
              name: 'noticias-id',
              params: {
                id: id
              }
            }"
          >
            <div
              class="card bg-cover bg-no-repeat"
              v-for="{ sourceUrl, altText, srcSet, id } in featuredImage"
              :key="id"
            >
              <img
                class="max-h-48 w-full "
                :src="sourceUrl"
                :alt="altText"
                :srcset="srcSet"
              />
            </div>
            <div class="mt-2">
              <span
                class="text-xl text-primary-500  font-semibold"
                v-for="({ name }, i) in categories.nodes"
                :key="i + Math.random()"
              >
                {{ name }}
              </span>
            </div>
            <h2 class="text-lg text-black font-semibold h-14 mt-2">
              {{ title }}
            </h2>
            <p v-html="excerpt.substring(0, 80)"></p>
            <button
              class="text-gray-900 group-hover:text-white text-base group-hover:bg-primary-500 group-hover:shadow-xl transition duration-500 px-5 py-3 mt-8"
            >
              Ver más
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
  computed: {
    posts() {
      return this.$store.getters["posts/getPosts"];
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
