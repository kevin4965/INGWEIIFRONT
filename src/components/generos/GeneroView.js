import React, { useState, useEffect } from 'react';
import { getGeneros, crearGenero, actualizarGenero } from '../../services/generoService';
import Swal from 'sweetalert2';
import moment from 'moment';

export const GeneroView = () => {
  const [valoresForm, setValoresForm] = useState({ nombre: '', estado: '' });
  const [generos, setGeneros] = useState([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState(null);

  // Función para listar los géneros
  const listarGeneros = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      const { data } = await getGeneros();
      setGeneros(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  useEffect(() => {
    listarGeneros();
  }, []);

  // Manejo de cambios en el formulario
  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  };

  // Crear o actualizar género
  const handleCrearGenero = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();

      if (generoSeleccionado) {
        await actualizarGenero(valoresForm, generoSeleccionado);
        setGeneroSeleccionado(null);
      } else {
        await crearGenero(valoresForm);
      }

      setValoresForm({ nombre: '', estado: '' });
      listarGeneros();
      Swal.close();
    } catch (error) {
      console.log(error);
 
