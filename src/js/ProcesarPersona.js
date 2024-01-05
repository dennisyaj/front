import axios from "axios"

export const InsertarPer = async (body) => {
    return await insertar(body)
}

export const listaPerTodos = async () => {
    return await listaPer()
}

export const eliminarPerId = async (id) => {
    return await eliminar(id)

}

export const buscarPerId = async (id) => {
    return await buscarDPersonaPorID(id)
}

export const actualizarPer = async (id, body) => {
    return await actualizar(id, body)
}




const insertar = async (body) => {

    const data = axios.post(`http://localhost:8080/personas`, body).then(r=> r.data)
    return data

}

const listaPer = async () =>{
    const data = axios.get(`http://localhost:8080/personas`).then(r => r.data)
    console.log(data);
    return data
}

const eliminar = async (id) =>{
    const data = axios.delete(`http://localhost:8080/personas/${id}`).then(r => r.data)
    return data
}

const buscarDPersonaPorID = async (id) =>{
    const data = axios.get(`http://localhost:8080/personas/${id}`).then(r => r.data)
    return data
}

const actualizar = async (id, body) =>{
    axios.put(`http://localhost:8080/personas/${id}`, body).then(r => r.data)

}