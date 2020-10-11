import React from 'react';
import {useForm} from 'react-hook-form';


const UsuarioFormulario = (props) => {
    const {register, error, handleSubmit} = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        props.agregarUsuario(data);
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
            <input  type="text" name="nombre" ref={
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
            
            <button>Agregar</button>

      </form>
    );
}

export default UsuarioFormulario;