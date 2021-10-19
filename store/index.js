export const actions = {

    async nuxtServerInit({ dispatch }) {
        await dispatch('egresados/cargaEgresados');
        await dispatch('egresados/cargaHeroEgresados');
        await dispatch('posts/cargarPosts');
        await dispatch('cursos/cargaCursos');
        await dispatch('cursos/cargaHeroProgramas');
        await dispatch('porque-atc/cargaPorqueAtc');
        await dispatch('inscripciones/cargarHeroInscripciones')
        await dispatch('estudiantes/cargaHeroEstudiantes')
    }
}