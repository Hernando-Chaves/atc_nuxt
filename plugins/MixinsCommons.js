import Vue from 'vue'

Vue.mixin({
    methods: {
        cleanUrl(url) {
            let path = url.split("/");
            return path[2];
        },
        regresar() {
            return this.$router.go(-1);
        },
        convertToCurency(number) {
            var setter = new Intl.NumberFormat('es-ES', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            })
            return setter.format(number);
        }
    }
})