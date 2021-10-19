<template>
  <div>
    <div>
      <LayoutHero
        :hero="getheroPorqueAtc"
        :img="getheroPorqueAtc.imagenDeFondo"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getheroPorqueAtc() {
      return this.$store.getters["porque-atc/getheroPorqueAtc"];
    }
  }
};
</script>
