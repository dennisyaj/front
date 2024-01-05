<template>
    <div>
        <h1>Buscar por ID</h1>
    </div>
    <br>
    <table>
        <tr>
            <td><label for=""> ID: </label></td>
            <td><input class="form-control" required v-model="id" type="text"></td>
        </tr>
    </table>
    <br>
    <table>
        <tr>
            <td><button class="btn btn-outline-success" @click="mostrarLista()">Buscar Persona</button></td>
        </tr>
    </table>

    <fieldset>
        <div v-if="lista">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">ID</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{{ lista.id }}</th>
                        <td> {{ lista.nombre }}</td>
                        <td>{{ lista.direccion }}</td>
                        <td>{{ lista.edad }}</td>
                        <td><a class="btn btn-outline-info" 
                                @click="editarPer(lista.id, lista.nombre, lista.direccion, lista.edad)">Editar</a></td>
                        <td><a class="btn btn-outline-danger" @click="alerta(lista.id)">Eliminar</a></td>


                    </tr>
                </tbody>


            </table>
        </div>
    </fieldset>
</template>

<script>
import { eliminarPorIdFachada, buscarPorIdFachada } from '@/js/ProcesarPersona';
export default {

    data() {
        return {
            lista: null,
            mostrarB: false,
            mensaje: null,
            id: null
        }
    },
    methods: {
        async mostrarLista() {
            this.lista = await buscarPorIdFachada(this.id)
            console.log(this.lista)
            console.log(this.lista.length)
            console.log(this.lista.nombre)
            if (this.lista.length >= 1) {
                this.mostrarB = true
                this.mensaje = ""
            } else {
                this.mostrarB = false
                this.mensaje = "No existe Persona"
            }
        },
        async PerEliminar(id) {
            await eliminarPorIdFachada(id)
            alert("Se ha eliminado correctamente")
            location.reload()
        },
        alerta(id) {
            var opcion = confirm("Desea eliminar la persona con id: " + id)

            if (opcion == true) {
                this.PerEliminar(id)

            } else {
                alert("No se ha eliminado nada")
            }
        },
        editarPer(id, nombre, direccion, edad) {
            this.$router.push({ name: "editar", params: { idProp: id, nombreProp: nombre, direccionProp: direccion, edadProp: edad } })
        }
    }
}



</script>

<style></style>
