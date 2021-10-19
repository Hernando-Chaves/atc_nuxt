<template>
  <div>
    <div class="carousel rounded relative overflow-hidden shadow-xl">
      <div
        class="carousel-inner relative overflow-hidden w-full"
        v-for="({
          informacionDelSlide: {
            titulo,
            textoEnFranjaRoja,
            subtitulo,
            posicionDelTexto,
            imagen
          }
        },
        i) in slider"
        :key="i + 1"
      >
        <input
          class="carousel-open"
          type="radio"
          :id="`carousel-${i}`"
          name="carousel"
          aria-hidden="true"
          hidden=""
          :checked="i == 1 ? 'checked' : false"
        />

        <div
          class="carousel-item absolute flex items-center  opacity-0 bg-center z-0 bb-no-repeat bg-cover"
          :class="
            posicionDelTexto == 'derecha' ? 'justify-center' : 'justify-start'
          "
          style="height:500px"
          :style="{ backgroundImage: `url(${imagen.sourceUrl})` }"
        >
          <div
            class=" w-96 h-64"
            :class="posicionDelTexto == 'derecha' ? 'ml-96' : 'ml-48'"
          >
            <h2 class="text-xl text-black underline font-bold">
              {{ subtitulo }}
            </h2>
            <h1 class="text-black uppercase text-7xl font-bold">
              {{ titulo }}
            </h1>

            <h3
              class="text-2xl text-white uppercase font-bold bg-primary-500 mt-2 pl-3 py-2"
            >
              {{ textoEnFranjaRoja }}
            </h3>
          </div>
        </div>
        <label
          :for="`carousel-${i == 1 ? Object.keys(slider).length : i + 1}`"
          class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer  font-bold text-black hover:text-white rounded-full bg-white hover:bg-primary-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"
        >
          <span>
            <fa class="mt-3" :icon="['fas', 'angle-left']" />
          </span>
        </label>
        <label
          :for="`carousel-${i == Object.keys(slider).length ? 1 : i + 1}`"
          class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-primary-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          <span>
            <fa class="mt-3" :icon="['fas', 'angle-right']" />
          </span>
        </label>

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3" v-for="(img, i) in slider" :key="i">
            <label
              :for="`carousel-${i + 1}`"
              class="carousel-bullet cursor-pointer block text-4xl hover:text-black text-primary-700"
              >•</label
            >
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: ""
    };
  },
  async fetch() {
    let client = this.$apollo.getClient();
    let query = {
      query: require("~/queries/plantillas/slider-home.gql")
    };

    await client
      .query(query)
      .then(resp => {
        const [{ cmbSlider }] = resp.data.plantillas.nodes;
        this.slider = cmbSlider.slide;
      })
      .catch(console.log);
  }
};
</script>

<style>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #fe1b28;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
