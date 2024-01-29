import axios from 'axios'


/* creamos una variable api y almacenamos alli la url base de nuestro proyecto */
const api = axios.create({
    baseURL:'http://localhost:4000'
})


/* exportamos este valor a todo el proyecto */
export default api