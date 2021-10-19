<template>
  <div>
    <div
      class="shadow-2xl pb-24"
      v-for="{
        id,
        title,
        featuredImage: {
          node: { sourceUrl, altText, srcSet }
        }
      } in egresado"
      :key="id"
    >
      <LayoutButtonBack class="text-center mb-5" />
      <img :src="sourceUrl" :alt="altText" :srcset="srcSet" />
      <div class="py-2">
        <h2 class="text-black text-center text-3xl bg-white px-6 mt-12 ">
          {{ title }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    egresado: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
