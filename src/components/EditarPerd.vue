<template>
    <div>
        <h1>Actualizar persona con ID: {{ id }}</h1>
    </div>
    <br>
    <table>
        <tr>
            <td><label for="">Nombre: </label></td>
            <td><input class="form-control" type="text" required v-model="nombre"> </td>
        </tr>
        <tr>
            <td><label for="">Direccion: </label></td>
            <td><input class="form-control" type="text" required v-model="direccion"></td>
        </tr>
        <tr>
            <td><label for="">Edad: </label></td>
            <td><input class="form-control" type="text" required v-model="edad"></td>
        </tr>
    </table>
    <br>
    <table>
        <tr>
            <td><button class="btn btn-outline-success" @click="actualizar()">Actualizar</button></td>
        </tr>
        <tr>
            <td><label for="">{{ mensaje }}</label></td>
        </tr>
    </table>
</template>

<script>

import { actualizarFachada } from '@/js/ProcesarPersona';

export default {
    data() {
        return {
            id: this.idProp,
            nombre: this.nombreProp,
            direccion: this.direccionProp,
            edad: this.edadProp,
            mensaje: null
        }
    },
    props: {
        idProp: Number,
        nombreProp: String,
        direccionProp: String,
        edadProp: String
    },
    methods: {
        async actualizar() {
            const persona = {
                id: this.id,
                nombre: this.nombre,
                direccion: this.direccion,
                edad: this.edad
            };
            console.log(persona)
            if (this.nombre == null ||
                this.direccion == null ||
                this.edad == null) {
                this.mensaje = "Llene todos los parametros"
            } else {
                await actualizarFachada(this.id, persona);
                this.mensaje = "Se ha actualizado correctamente"
                this.regresar()
            }
        },
        regresar() {
            this.$router.push({ name: "todos" })
        }

    }
}

</script>
<style>
table {
    margin: 0 auto;
}
</style>