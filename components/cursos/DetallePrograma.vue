<template>
  <div>
    <div class="shadow-2xl px-4 py-4 max-h-96">
      <h3 class="uppercase text-2xl font-semibold">Detalle del programa</h3>
      <div class="grid grid-cols-3 pt-6">
        <div class="">
          <p class="text-md mt-4">Empieza</p>
          <p class="text-md mt-4">Duración</p>
          <p class="text-md mt-4">Sede</p>
          <p class="text-md mt-4">Valor</p>
        </div>
        <div class="col-span-2">
          <p class="text-md mt-4">
            {{ config.fechaDeInicio }}
          </p>
          <p class="text-md mt-4">
            {{ config.duracion }}
          </p>
          <p class="text-md mt-4 capitalize">
            {{ config.sede }}
          </p>
          <p class="text-md mt-4">${{ convertToCurency(config.valor) }}</p>
        </div>
      </div>
      <button
        @click="prueba()"
        class="text-sm w-full px-2 py-4 bg-primary-500 hover:bg-black hover:shadow-lg transition duration-500 uppercase text-white mt-3"
      >
        descargar programa
        <span class="ml-2">
          <fa :icon="['fas', 'file-download']" />
        </span>
      </button>
      <button
        class="text-sm w-full px-2 py-4 bg-white hover:shadow-lg transition duration-500 uppercase text-black border border-black mt-3"
      >
        inscribirse
        <span class="ml-2"> <fa :icon="['fas', 'long-arrow-alt-right']"/></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
