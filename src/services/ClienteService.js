import api from "@/lib/axios";

export default{

    listarClientes(){
         //Listar Clientes (get)
        return api.get('/clientes')
    },

     insertarCliente(data){
        //Insertar Clientes (post)
        return api.post('/clientes', data)
     },

     mostrarCliente(id){
        return api.get('/clientes/' + id)
     },

     editarCliente(id, data){
        return api.patch('/clientes/'+ id, data)

     },
     cambiarEstado(id, data){
        return api.patch('/clientes/' + id, data)
     },
     eliminarCliente(id){
        return api.delete('/clientes/' + id)
     }
}