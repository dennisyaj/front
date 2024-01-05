import axios from "axios"

export const insertarFachada= async (body) => {
    return await insertar(body)
}

export const listaTodasFachada = async () => {
    return await listar()
}

export const eliminarPorIdFachada= async (id) => {
    return await eliminar(id)
}

export const buscarPorIdFachada = async (id) => {
    return await buscarPorID(id)
}

export const actualizarFachada= async (id, body) => {
    return await actualizar(id, body)
}

const insertar = async (body) => {
    const data = axios.post(`http://localhost:8080/personas`, body).then(r=> r.data)
    return data
}

const listar = async () =>{
    const data = axios.get(`http://localhost:8080/personas`).then(r => r.data)
    return data
}

const eliminar = async (id) =>{
    const data = axios.delete(`http://localhost:8080/personas/${id}`).then(r => r.data)
    return data
}

const buscarPorID = async (id) =>{
    const data = axios.get(`http://localhost:8080/personas/${id}`).then(r => r.data)
    return data
}

const actualizar = async (id, body) =>{
    axios.put(`http://localhost:8080/personas/${id}`, body).then(r => r.data)
}