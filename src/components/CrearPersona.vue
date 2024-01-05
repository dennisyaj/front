<template>
    <div>
        <h1>Registrar nuevo cliente:</h1>
        <br>
        <table>
            <tr>
                <td><label for="">Nombre: </label></td>
                <td><input v-model="nombre" required type="text"></td>
            </tr>
            <tr>
                <td><label for="">Direccion: </label></td>
                <td><input v-model="direccion" required type="text"></td>
            </tr>
            <tr>
                <td><label for="">Edad: </label></td>
                <td><input v-model="edad" required type="text"></td>
            </tr>
        </table>

        <table>
            <tr>
                <td><button @click="Insertar()">Guardar</button></td>
            </tr>
            <tr>
                <td><label for="">{{ mensaje }}</label></td>
            </tr>
        </table>
        
    </div>
</template>
<script>
import { InsertarPer } from '@/js/ProcesarPersona';

export default {

    data(){
        return {
            nombre: null,
            direccion: null,
            edad: null,
            mensaje: null,
        }
    },
    methods:{
        async Insertar(){
            const per = {
                    nombre: this.nombre,
                    direccion: this.direccion,
                    edad: this.edad
                };
             if(
                this.nombre == null ||
                this.direccion == null ||
                this.edad == null
             ){
                this.mensaje = "Llene todos los datos"
             }else{
              await InsertarPer(per);
                this.mensaje = "Se ha ingresado correctamente",
                this.nombre == null,
                this.direccion == null,
                this.edad == null
             }
        }
    }
}

</script>

<style>
table{
    margin: 0 auto;
  }

</style>