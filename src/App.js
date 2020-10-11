import React, { useState } from 'react';
import UsuarioTabla from './components/UsuarioTabla';
import UsuarioFormulario from './components/UsuarioFormulario';
import UsuarioEditar from './components/UsuarioEditar.jsx';
function App() {
  const usuariosData = [
    {
      nombre: 'Juan',
      cedula: 'A00120234',
      apellido: 'Araica',
       correo: 'juanaraica149@gmail.com'
    }
  ]

  const [currentUser, setCurrentUser] = useState({
    nombre: '', cedula: null, apellido: '', correo: ''
  });

  const [usuario, setUsuarios] = useState(usuariosData);
  const [editar, setEditar] = useState(false);

  const agregarUsuario = (user) => {
    setUsuarios([
      ...usuario,      user
    ])
  }

  const eliminar = (cedula) => {
    setUsuarios(usuario.filter(user => user.cedula !== cedula));
  }

  const usuarioEditar = (user) => {
    setEditar(true)
    setCurrentUser({
      cedula: user.cedula, nombre: user.nombre, apellido: user.apellido, correo: user.correo
    })
  }

  const usuarioActualizado = (cedula, usuarioActualizado) => {
    setEditar(false);
    setUsuarios(usuario.map(user => user.cedula === cedula ? usuarioActualizado : user))
  }


  return (
    <div className="container">
      <h1>Control de Usuarios</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
              editar ? (
                <div>
                <h2>Editar</h2>
                <UsuarioEditar currentUser = {currentUser} usuarioActualizado={usuarioActualizado}/> 
        
                </div>
              ) : (
                <div>
                <h2>Agregar/Editar un Usuario</h2>
                    <UsuarioFormulario agregarUsuario={agregarUsuario}/>
                </div>
              )
          }
        </div>
        <div className="flex-large">
          <h2>Usuarios Registrados</h2>
          <UsuarioTabla 
            usuario = {usuario}
            eliminar = {eliminar}
            usuarioEditar = {usuarioEditar} 
            />
          
        </div>
      </div>
  </div>
  );
}

export default App;
