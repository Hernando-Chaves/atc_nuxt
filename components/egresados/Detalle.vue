<template>
  <div>
    <div class="cursos-atc pt-12 container mb-24">
      <div class=" mt-4b mt-5 container max-w">
        <div class="grid grid-cols-2">
          <EgresadosImgEgresado :egresado="egresado" />
          <EgresadosInfo :cmbEgresado="cmbEgresado" />
        </div>
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
    },
    cmbEgresado: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
