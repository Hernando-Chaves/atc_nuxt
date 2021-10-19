<template>
  <div>
    <div class="flex items-center bg-gray-100 p-10 rounded-md ">
      <div class="">
        <h2
          class="text-3xl my-4 text-black bg-white py-5 px-4 uppercase font-semibold"
        >
          {{ cmbEgresado.titulo }}
        </h2>
        <p class="bg-white py-5 px-4 text-justify">
          {{ cmbEgresado.descripcion }}
        </p>
        <div class="flex gap-3 bg-white py-5 px-4 my-4">
          <span
            v-for="({ nombreDeUsuario, redSocial, urlDeLaRedSocial },
            i) in cmbEgresado.redesSociales"
            :key="i + Math.random()"
            class=""
          >
            <a class=" text-md" :href="urlDeLaRedSocial" target="_blank">
              <fa class="text-primary-600" :icon="['fab', `${redSocial}`]" />
              {{ nombreDeUsuario }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cmbEgresado: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
