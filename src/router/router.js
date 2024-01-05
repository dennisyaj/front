import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
{
    path: '/',
    component : () => import('../components/PaginaMain')

},
{
    path: '/clientes/registrar',
    component : () => import('../components/CrearPersona')

},
{
    path: '/clientes/todos',
    component : () => import('../components/MostrarTodos')
},
{
    path: '/clientes/buscar',
    component : () => import('../components/BuscarId')
},
{
    path: '/editar/:ids-:nombres-:direccions-:edads',
    name: 'editar',
    props: true,
    component : () => import('../components/EditarPerd')
}



]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router