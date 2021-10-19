<template>
  <div>
    <div
      class="w-full h-72 flex items-center justify-center"
      :style="{
        backgroundImage: `url(${img.sourceUrl})`
      }"
    >
      <div
        class=" h-52 flex content-center bg-cover bg-no-repeat flex-col justify-center flex-wrap "
      >
        <button class="bg-primary-500 text-white uppercase px-4 py-2 mx-auto">
          {{ hero.textoBotonRojo }}
        </button>
        <h2 class="text-3xl  text-white ">
          {{ hero.titulo }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: false
    },
    img: {
      type: Object,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped></style>
