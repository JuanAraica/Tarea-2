import React from 'react';

const tabla = (props) => {
    console.log(props.usuario);
    return (
        <table>
            <thead>
            <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Opciones</th>
            </tr>
            </thead>
            <tbody>
            {
                props.usuario.length > 0 ?
                props.usuario.map(usuario =>(
                    <tr key={usuario.cedula}>
                        <td>{usuario.cedula}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.correo}</td>
                        <td>
                        <button className = "button muted-button" 
                                onClick = {() => {props.usuarioEditar(usuario)}}>
                                    Editar
                        </button>
                        <button className = "button muted-button" 
                                onClick = {() => {props.eliminar(usuario.cedula)}}>
                                    Eliminar
                        </button>
                        </td>
                     </tr>
                )) : (
                    <tr>
                        <td colSpan= {3}>
                            No tienes usuarios registrados.
                        </td>
                    </tr>
                )
            }
           
            </tbody>
        </table>

    );
}

export default tabla;