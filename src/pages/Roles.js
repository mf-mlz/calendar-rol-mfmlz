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
    'roleso': 'Oración'
  };

  const role = idToRoleMap[id] || null;
  const title = `Rol ${role} ${months[month]} ${year} | La Casa del Carpintero`;

  useEffect(() => {
    document.title = title;
    const apiUrl = process.env.REACT_APP_API_URL + '/' + id;
    fetchData(apiUrl);
  }, [id, title]);

  /* Function to get data rol */
  const fetchData = async (url) => {
    try {
      const jsonData = await apiService.fetchData(url); // Suponiendo que tienes un método llamado getData en tu servicio de API
      if (Array.isArray(jsonData)) {
        setTimeout(() => {
          setLoading(false);
          setData(jsonData);
        }, 3000);
      } else {
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
    } catch (error) {
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
  };


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