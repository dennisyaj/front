<template>
    <div>
        <h1>Lista personas</h1>
    </div>
    <br>
  
        <div v-if="mostrar">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="l in lista" v-bind:key="l.id">
                        <th>{{ l.id }}</th>
                        <td> {{ l.nombre }}</td>
                        <td>{{ l.direccion }}</td>
                        <td>{{ l.edad }}</td>
                        <td><a class="btn btn-outline-info"
                                @click="editarPer(l.id, l.nombre, l.direccion, l.edad)">Editar</a></td>
                        <td><a class="btn btn-outline-danger" @click="alerta(l.id)">Eliminar</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

    <br>
    <label for="">{{ mensaje }}</label>
</template>

<script>
import { listaTodasFachada, eliminarPorIdFachada } from '@/js/ProcesarPersona';

export default {
    data() {
        return {
            lista: [],
            mostrar: false,
            mensaje: null
        }
    },
    methods: {
        async mostrasLista() {
            this.lista = await listaTodasFachada()
            if (this.lista.length == 0) {
                this.mensaje = "Lista vacia"
                this.mostrar = false
            } else {
                this.mostrar = true
            }
        },
        async PerEliminar(id) {
            await eliminarPorIdFachada(id)
            alert("Se ha eliminado correctamente")
            location.reload()
        },
        alerta(id) {
            var opcion = confirm("¿Eliminar la persona con id: " + id + "?")

            if (opcion == true) {
                this.PerEliminar(id)
            } else {
                alert("Borrado cancelado")
            }
        },
        editarPer(id, nombre, direccion, edad) {
            this.$router.push({ name: "editar", params: { idProp: id, nombreProp: nombre, direccionProp: direccion, edadProp: edad } })
        }
    },
    mounted() {
        this.mostrasLista()
    }
}
</script>
<style></style>