<template>
    <div>
        <h1>Ingrese el Id el cual quiere buscar</h1>  
    </div>
    <br>
    <table>
        <tr>
            <td><label for="">Ingrese el ID: </label></td>
            <td><input required v-model="id" type="text"></td>
        </tr>
    </table>
    <br>
    <table>
        <tr>
            <td><button @click="mostrarLista()">Buscar Persona</button></td>
        </tr>
    </table>

    <fieldset>
        <div >
            <table class="tablasP">
                <thead>
                    <tr>
                        <th class="bonito" scope="col">ID</th>
                        <th class="bonito" scope="col">Nombre</th>
                        <th class="bonito" scope="col">Direccion</th>
                        <th class="bonito" scope="col">Edad</th>
                        <th class="bonito" scope="col">Editar</th>
                        <th class="bonito" scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="bonito">{{ lista.id }}</th>
                        <td class="bonito"> {{ lista.nombre }}</td>
                        <td class="bonito">{{ lista.direccion }}</td>
                        <td class="bonito">{{ lista.edad }}</td>
                        <td class="bonito"><a id="idEditar" @click="editarPer(lista.id, lista.nombre, lista.direccion, lista.edad)">Editar</a></td>
                        <td class="bonito"><a id="idEliminar" @click="alerta(lista.id)">Eliminar</a></td>


                    </tr>
                </tbody>


            </table>
        </div>
    </fieldset>
</template>

<script>
import { eliminarPerId, buscarPerId } from '@/js/ProcesarPersona';

export default {

    data(){
        return{
            lista:[],
            mostrarB: false,
            mensaje:null,
            id:null
        }
    },
    methods:{
        async mostrarLista(){
            this.lista = await buscarPerId(this.id)
            console.log(this.lista)
            console.log(this.lista.length)
            console.log(this.lista.nombre)
            if(this.lista.length >=1){
                this.mostrarB = true
                this.mensaje = ""
                console.log("tpm")
            }else{
                this.mostrarB = false
                this.mensaje = "No existe Persona"
                console.log("tpm2")

            }
        },
        async PerEliminar(id){
            await eliminarPerId(id)
            alert("Se ha eliminado correctamente")
            location.reload()
        },
        alerta(id){
            var opcion = confirm("Desea eliminar la persona con id: " + id)
            
            if(opcion == true){
                this.PerEliminar(id)
                
            }else{
                alert("No se ha eliminado nada")
            }
        },
        editarPer(id, nombre, direccion, edad){
            this.$router.push({name: "editar", params:{ids: id, nombres:nombre, direccions: direccion, edads:edad}})
        }
    }
    }



</script>

<style>
table{
    margin: 0 auto;
  }
  .tablasP{
      margin: 0 auto;
      border: 1px solid #000;
      width: 80%;
  }
  .bonito{
     width: 18%;
     text-align: left;
     vertical-align: top;
     border: 1px solid #000;
     border-collapse: collapse;
     padding: 0.3em;
     caption-side: bottom;
  }
  th {
     background: #dadada;
  }
  
  #idEditar,#idCertificados{
      color: blue;
      text-decoration: underline;  
      cursor: pointer; 
  }
  #idEliminar{
      color: red;
      text-decoration: underline;  
      cursor: pointer;  
  }
</style>
