<template>
  <div>
    <nuxt-link :to="`/programas/${single.id}`">
      <img
        v-for="({ sourceUrl, altText, srcSet }, i) in single.featuredImage"
        :key="i"
        :src="sourceUrl"
        :alt="altText"
        :srcset="srcSet"
      />
    </nuxt-link>
    <div
      class="info border-2 border-t-0 border-gray-200 rounded-t-none rounded-md px-3 py-3"
    >
      <h2 class="text-md">
        {{ single.title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    single: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
