import React from 'react';
import {useForm} from 'react-hook-form';


const UsuarioEditar = (props) => {
    const {register, error, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });
    setValue('cedula', props.currentUser.cedula);
    setValue('nombre', props.currentUser.nombre);
    setValue('apellido', props.currentUser.apellido);
    setValue('correo', props.currentUser.correo);
    
    const onSubmit = (data, e) => {
        console.log(data);
        data.cedula = props.currentUser.cedula
        props.usuarioActualizado(props.currentUser.cedula, data);
        e.target.reset();
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <label>Cédula</label>
            <input type="text" name="cedula" ref={
                register({
                    required: {value: true, message: 'El campo es requerido'}
                })
            } />
           
            <label>Nombre</label>
            <input type="text" name="nombre" ref={
                register({
                    required: {value: true, message: 'El campo es requerido'}
                })
            } />
          
            <label>Apellido</label>
            <input type="text" name="apellido" ref={
                register({
                    required: {value: true, message: 'El campo es requerido'}
                })
            }/>
            
            <label>Correo</label>
            <input type="text" name="correo" ref={
                register({
                    required: {value: true, message: 'El campo es requerido'}
                })
            }/>
            
            <button>Actualizar</button>

      </form>
    );
}

export default UsuarioEditar;