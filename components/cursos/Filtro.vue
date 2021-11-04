<template>
  <div class="flex justify-center w-full bg-primary-500 space-x-3  py-8">
    <form action="">
      <select
        class="border border-gray-300 py-2 px-12 "
        v-model="modSelected"
        @change="ciudadesArr"
      >
        <option value="">Modalidad</option>
        <option :value="option" v-for="(option, i) in modalidad" :key="i">{{
          option
        }}</option>
      </select>

      <select
        class="border border-gray-300 py-2 px-12 "
        v-model="citySelected"
        @change="cursosArr"
      >
        <option value="">Selecciona una ciudad</option>
        <option :value="option" v-for="(option, i) in ciudad" :key="i">{{
          option
        }}</option>
      </select>
      <select
        class="border border-gray-300 py-2 px-12 "
        v-model="cursoSelected"
      >
        <option value="">Tipo de capacitación</option>
        <option :value="option" v-for="(option, i) in cursos" :key="i">{{
          option
        }}</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modSelected: "",
      citySelected: "",
      cursoSelected: "",
      ciudad: "",
      cursos: "",
      modalidad: ["Online", "Presencial", "Mixto"],
      programas: [
        { curso: "PHP", modalidad: "Presencial", ciudad: "Medellín" },
        { curso: "JavaScript", modalidad: "Mixto", ciudad: "Medellín" },
        { curso: "Diseño Web", modalidad: "Online", ciudad: "Bogotá" },
        { curso: "Laravel", modalidad: "Mixto", ciudad: "Bogotá" },
        { curso: "SEO", modalidad: "Presencial", ciudad: "Bogotá" },
        { curso: "Angular", modalidad: "Presencial", ciudad: "Cali" },
        { curso: "Wordpress", modalidad: "Mixto", ciudad: "Cali" }
      ]
    };
  },
  methods: {
    ciudadesArr() {
      this.citySelected = "";
      this.cursoSelected = "";
      let Arr = this.programas.filter(
        city => city.modalidad == this.modSelected
      );
      let ciudades = [];
      for (let item of Arr) {
        ciudades.push(item.ciudad);
      }
      this.ciudad = [...new Set(ciudades)];
    },
    cursosArr() {
      this.cursoSelected = "";
      let cursosArr = this.programas.filter(
        curso =>
          curso.ciudad == this.citySelected &&
          curso.modalidad == this.modSelected
      );
      let cursos = [];
      for (let item of cursosArr) {
        cursos.push(item.curso);
      }
      this.cursos = [...new Set(cursos)];
    }
  }
};
</script>
