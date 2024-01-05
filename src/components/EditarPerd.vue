<template>
    <div>
        <h1>Editar Persona con ID: {{ ids }}</h1>
    </div>
    <br>
    <table>
        <tr>
            <td><label for="">Nombre: </label></td>
            <td><input type="text" required v-model="nombre" id="idNombre"></td>
         
        </tr>
        <tr>
            <td><label for="">Direccion: </label></td>
            <td><input type="text" required v-model="direccion" id="idDireccion"></td>

        </tr>
        <tr>
            <td><label for="">Edad: </label></td>
            <td><input type="text" required v-model="edad" id="idEdad"></td>

        </tr>
    </table>
    <br>
    <table>
        <tr>
            <td><button @click="actualizar()">Actualizar</button></td>
        </tr>
        <tr>
            <td><label for="">{{ mensaje }}</label></td>
        </tr>
    </table>
</template>

<script>

    import { actualizarPer } from '@/js/ProcesarPersona';

    export default {
        data(){
            return{
                nombre: null,
                direccion: null,
                edad: null,
                mensaje: null
            }
        },
        props:{
            ids:null,
            nombres:{
                type:String
            },
            direccions:{
                type: String
            },
            edads:{
                type:String
            }
        },
        methods:{
            valoresDefinidos(){
                document.getElementById("idNombre").value = this.nombres
                document.getElementById("idDireccion").value = this.direccions
                document.getElementById("idEdad").value = this.edads
            },
            async actualizar(){
                const persona = {
                    id: this.ids,
                    nombre: this.nombre,
                    direccion: this.direccion,
                    edad: this.edad
                };
                if(this.nombre == null ||
                    this.direccion == null ||
                    this.edad == null ){
                        this.mensaje = "Llene todos los parametros"
                    }else{
                        await actualizarPer(this.ids, persona);
                        this.nombre = null,
                        this.direccion = null,
                        this.edad = null
                        this.mensaje = "Se ha actualizado correctamente"
                        this.regresar()

                    }
            },
            regresar(){
                this.$router.replace('/mostrar')
            }
        },
        mounted(){
            this.valoresDefinidos()
        }

    }



</script>
<style>
table{
    margin: 0 auto;
}
</style>