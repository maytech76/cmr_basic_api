<script setup>
import {onMounted, reactive}from 'vue'
import ClienteService from '@/services/ClienteService'
import{FormKit} from '@formkit/vue'
import {useRouter, useRoute} from 'vue-router'
import RouterLink from '../components/UI/RouterLink.vue'
import Heading from '../components/UI/Heading.vue'


const router = useRouter()
const route = useRoute()

const {id} = route.params

const formData = reactive({
    nombre:'',
    apellidos:'',
    email:'',
    telefono:'',
    empresa:'',
    puesto:''

})

onMounted(()=>{
    ClienteService.mostrarCliente(id)
    .then(({data})=>{
       formData.nombre = data.nombre
       formData.apellidos = data.apellidos
       formData.email = data.email
       formData.telefono = data.telefono
       formData.empresa = data.empresa
       formData.puesto = data.puesto
    })
    .catch(error => console.log(error))
})

defineProps ({
    titulo: {
        type: String
    }
})

const handleSubmit = (data)=>{

   ClienteService.editarCliente(id, data)

   .then(()=> router.push({name: 'listado-clientes'}))

   .catch(error => console.log(error))
    
}
</script>


<template>
  <div>
    <div class="flex justify-end">
        <RouterLink to="listado-clientes">Listado de Clientes</RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:2/5 py-10 px-7">

            <FormKit type="form" submit-label="Editar Registro"
            incomplete-message="Imposible registrar, revisa los mensajes y formatos"
            @submit="handleSubmit"
            @value="formData"
            >

                    <FormKit
                    label="Nombre"
                    type="text" 
                    name="nombre"
                    placeholder="Ingresa el nombre del cliente"
                    validation="required"
                    :validation-messages="{required: 'El Nombre del cliente es Obligatorio'}"
                    v-model="formData.nombre"

                    />

                    <FormKit
                    label="Apellidos"
                    type="text"
                    name="apellidos"
                    placeholder="Ingresa el nombre del cliente"
                    validation="required"
                    :validation-messages="{required: 'Los Apellidos del cliente es Obligatorio'}"
                    v-model="formData.apellidos"

                    />

                    <FormKit
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Ingresa el email del cliente"
                    help="Ejemplo: correo@servidor.com"
                    validation="required|email"
                    :validation-messages="{required: 'El Email del cliente es Obligatorio', email: 'Ingresa un email Valido'}"
                    v-model="formData.email"

                    />

                    <FormKit
                    label="Teléfono"
                    type="text"
                    name="telefono"
                    placeholder="Teléfono : XXXX-XXXX-XX"
                    help="Ejemplo: 950-5051-00"
                    validation="*matches:/^[0-9]{3}-[0-9]{4}-[0-9]{2}$/"
                    :validation-messages="{matches: 'Ingrese numero respetando el formato'}"
                    v-model="formData.telefono"

                    />

                    <FormKit
                    label="Nombre de la Empresa"
                    type="text"
                    name="empresa"
                    placeholder="Ingresa Nombre de la empresa"
                    v-model="formData.empresa"
                    />

                    <FormKit
                    label="Puesto de Trabajo"
                    type="text"
                    name="puesto"
                    placeholder="¿Cuel es su puesto de trabajo?"
                    v-model="formData.puesto"
                    />


            </FormKit>
        </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper{
    max-width: 100%;
}
</style>