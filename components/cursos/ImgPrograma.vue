<template>
  <div>
    <div>
      <span>
        <CursosButtonBack />
      </span>
      <h3 class="uppercase text-3xl font-semibold">perfil</h3>
      <div
        class="m-4"
        v-for="({ sourceUrl }, i) in curso.featuredImage"
        :key="i"
      >
        <img :src="sourceUrl" alt="" />
        <p class="mt-3 text-justify">{{ descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    descripcion: {
      type: String,
      required: true
    },
    curso: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
