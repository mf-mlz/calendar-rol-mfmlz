import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import apiService from '../services/ApiService';
import Mycalendar from '../services/Mycalendar';
import { useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import * as htmlToImage from 'html-to-image';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';


function Roles() {

  /* Constants */
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const idToRoleMap = {
    'rolesb': 'Bienvenida',
    'rolesl': 'Limpieza',
    'rolesn': 'Niños',
    'roleso': 'Oración',
    'rolessc': 'Santa Cena',
    'rolesdo': 'Oración Presencial'
  };

  const role = idToRoleMap[id] || null;
  const title = `Rol ${role} ${months[month]} ${year} | La Casa del Carpintero`;

  useEffect(() => {
    document.title = title;
    const apiUrl = process.env.REACT_APP_API_URL + '/' + id;
    const apiUrlEvents = process.env.REACT_APP_API_URL_EVENTS;

    /* Function to get data rol */
    const fetchData = async (url) => {
      try {
        const jsonData = await apiService.fetchData(url);
        if (Array.isArray(jsonData)) {
          setTimeout(() => {
            setLoading(false);
            setData(jsonData);
          }, 3000);
        } else {
          redirectSwal();
        }
      } catch (error) {
        redirectSwal();
      }
    };

    /* Function to get data events */
    const fetchDataEvents = async (url) => {
      try {
        const jsonData = await apiService.fetchData(url);
        setEvent(jsonData);
      } catch (error) {
        redirectSwal();
      }
    };

    fetchData(apiUrl);
    fetchDataEvents(apiUrlEvents);
  }, [id, title]);


  /* Function to swal error => redirect */
  function redirectSwal() {
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        title: "Datos no existentes",
        text: "Ocurrió un error al Obtener los datos, o ingreso a una liga inexistente",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok"
      }).then((result) => {
        if (result.isConfirmed) {
          setRedirect(true);
        }
      });
    }, 3000);
  }


  /* If not data => redirect to / */
  if (redirect) {
    return <Redirect to="/" />;
  }

  /* Create Events to Month */
  const events = [];
  data.forEach(d => {
    let name = d.name_user;
    let title = name.split(' ');
    let obj = {
      start: new Date(d.year, d.month - 1, d.day),
      end: new Date(d.year, d.month - 1, d.day),
      title: title[0]
    }
    events.push(obj);
  });


  event.forEach(e => {
    const date = new Date(e.year, e.month - 1, e.day);
    const noApply = e.not_apply;
    const notApplyArray = noApply.split(',');
    const index = events.findIndex(rol => {
      return new Date(rol.start).toISOString() === new Date(date).toISOString();
    });

    /* Exists Index to event */
    if (index !== -1) {
      const searchNotApply = notApplyArray.some(noapply => noapply === id);
      /* Si coincide que es el Rol que no Aplica */
      if (searchNotApply) {
        events[index].title = `No aplica, ${e.name}`;
      }

    }

  });

  /* Function to export div => image */
  const handleExport = () => {
    setLoading(true);
    const node = document.getElementById('divRole');
    node.style.backgroundColor = '#80683f';
    node.style.width = '800px';
    node.style.height = '800px';
    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = `Rol_${role}_${months[month]}_${year}.png`;
        link.href = dataUrl;
        link.click();
        node.style.backgroundColor = '';
        node.style.width = '';
        node.style.height = '';
        setLoading(false);
      });

  };

  /* Function to redirect => cards */
  const handleRedirect = () => {
    setRedirect(true);
  };

  return (

    <div id="fatherID">
      <div className='full-width d-flex justify-content-end align-items-center' style={
        {
          padding: 10
        }
      }>
        <button className='btn btn-dark' onClick={handleExport}>Exportar como imagen</button>
        <button className='btn btn-info text-white mx-2' onClick={handleRedirect}>
          <FontAwesomeIcon icon={faHome} />
        </button>
      </div>
      <div className={loading ? 'loading-overlay' : ''}>
        <DotLoader color="#ffffff" cssOverride={{ display: "block", margin: "0 auto", borderColor: "red", }} loading={loading} size={100} />
      </div>
      <div className='text-white text-center my-3' id="divRole" style={{ padding: 10 }}>
        <h1> Rol {role} {months[month]} {year} </h1>
        <div className="container full-height full-width d-flex justify-content-center align-items-center my-2">
          <Mycalendar events={events} />
        </div>
      </div>
    </div>


  );
}

export default Roles;