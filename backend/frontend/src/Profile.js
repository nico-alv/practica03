import './App.css';
import React, { useState, useEffect } from 'react';

function Profile() {
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const toggleEditMode = () => {
        setEditMode(!editMode);
      };

    const openModal = () => {
    setModalOpen(true);
    };

    const closeModal = () => {
    setModalOpen(false);
    };

    const executeDummyQuery = () => {
        console.log('Consulta dummy ejecutada');
      };

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/profile')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error al obtener datos:', error));
      }, []);

    if (!data) {
    return <div>Cargando perfil...</div>;
    }

    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Perfil</title>
  <link rel="stylesheet" href="App.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  />
  <header className="head">
    <div>
      <h1 className="titulo">Perfil personal</h1>
  <button onClick={toggleEditMode}>
    <i className={`fas fa-${editMode ? 'times' : 'pencil-alt'}`} />{" "}
    {editMode ? "Cancelar" : "Editar"}
  </button>
  {editMode && (
            <button>Guardar perfil</button>
        )}
        <h3>
        Hola, mi nombre es{" "}
        <span className={editMode ? "editable-field" : ""} contentEditable={editMode}>
            {data.name}
        </span>{" "}
        <span className={editMode ? "editable-field" : ""} contentEditable={editMode}>
            {data.lastname}
        </span>.
        </h3>
      <div className="imagenPerfil">
        <img width={90} height={110} src='pfp.jpg'/>
      </div>
      <p className={editMode ? "editable-field" : ""} contentEditable={editMode}>{data.summary}</p>
      <p>
       Vivo en <span className={editMode ? "editable-field" : ""} contentEditable={editMode}>{data.city}</span>,{" "}
       <span className={editMode ? "editable-field" : ""} contentEditable={editMode}>{data.country}</span>.
      </p>
      <p className={editMode ? "editable-field" : ""} contentEditable={editMode}>{data.email}</p>
      <div className="redesSociales">
        <a href="https://github.com/nico-alv">
          <i className="fab fa-github" />
        </a>
        <a href="https://instagram.com/nico._alvrz?igshid=YTQwZjQ0NmI0OA==">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100054628355935">
          <i className="fab fa-facebook" />
        </a>
      </div>
    </div>
  </header>
  <div className="container contenedorFlex">
    <section className="datosPersonales">
    <h2>Intereses</h2>
    {editMode && (
    <div className="editarBotones">
        <button className='addRow transparentButton' onClick={openModal}>
        <i className="fas fa-plus-circle fa-2x" />
        </button>
    </div>
    )}
    <h4>Mis hobbies e intereses son...</h4>
    <table>
        <tbody>
        {data.hobbies.map((hobby) => (
  <tr key={hobby.name}>
    <th>
      {hobby.name}
    </th>
    <td>{hobby.description}</td>
    {editMode && (
      <td>
        <button className='transparentButton'>
          <i className="fas fa-trash-alt" style={{ color: 'red' }} />
        </button>
        <button className='transparentButton'>
          <i className="fas fa-pencil-alt" style={{ color: 'blue' }} />
        </button>
      </td>
    )}
  </tr>
))}




        </tbody>
    </table>
    </section>
    <section className="herramientas">
        <h2>Herramientas Tecnológicas</h2>
        {editMode && (
        <div className="editarBotones">
            <button className='addRow transparentButton'>
            <i className="fas fa-plus-circle fa-2x" />
            </button>
        </div>
        )}
        <h4>Algunas herramientas que conozco son...</h4>
        <table>
        <tbody>
        {data.frameworks.map((framework) => (
  <tr key={framework.name}>
    <th>
      {framework.name}
    </th>
    <td>Nivel: {framework.level}, Año: {framework.year}</td>
    {editMode && (
      <td>
        <button className='transparentButton'>
          <i className="fas fa-trash-alt" style={{ color: 'red' }} />
        </button>
        <button className='transparentButton'>
          <i className="fas fa-pencil-alt" style={{ color: 'blue' }} />
        </button>
      </td>
    )}
  </tr>
))}



        </tbody>
        </table>
    </section>
  </div>

  {modalOpen && (
  <div className="modal">
    <div className="modalContent">
      <h2>Editar / Añadir Datos</h2>
      <input type="text" placeholder="Campo 1" />
      <input type="text" placeholder="Campo 2" />
      <button onClick={executeDummyQuery}>Enviar</button>
      <button onClick={closeModal}>Cancelar</button>
    </div>
  </div>
)}

</>
    );

};

export default Profile;
