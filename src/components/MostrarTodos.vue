<template>
    <div>
        <h1>A continuacion se muestran todas las personas registradas</h1>
    </div>
    <br>
    <fieldset>
        <div v-if="mostrarB">
            <table class="tablasP">
                <thead>
                    <tr>
                        <th class="bonito" scope="col">
                            ID
                        </th>
                        <th class="bonito" scope="col">Nombre</th>
                        <th class="bonito" scope="col">Direccion</th>
                        <th class="bonito" scope="col">Edad</th>
                        <th class="bonito" scope="col">Editar</th>
                        <th class="bonito" scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="l in lista" v-bind:key="l" >
                        <th class="bonito">{{ l.id }}</th>
                        <td class="bonito"> {{ l.nombre }}</td>
                        <td class="bonito">{{ l.direccion }}</td>
                        <td class="bonito">{{ l.edad }}</td>
                        <td class="bonito"><a id="idEditar" @click="editarPer(l.id, l.nombre, l.direccion, l.edad)">Editar</a></td>
                        <td class="bonito"><a id="idEliminar" @click="alerta(l.id)">Eliminar</a></td>


                    </tr>
                </tbody>


            </table>
        </div>
    </fieldset>
    <br>
    <label for="">{{ mensaje }}</label>
</template>

<script>
import { listaPerTodos, eliminarPerId } from '@/js/ProcesarPersona';

export default {

    data(){
        return{
            lista: [],
            mostrarB: false,
            mensaje: null
        }
    },
    methods: {
        async mostrasLista(){
            this.lista = await listaPerTodos()
            console.log(this.lista)
            console.log(this.lista.length)
            if(this.lista.length == 0){
                this.mensaje = "No hay personas ingresadas"
                this.mostrarB = false
            }else{
                this.mostrarB = true
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
    },
    mounted(){
        this.mostrasLista()
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