import React, { useState, useEffect } from 'react';
import { crearMedia } from '../../services/mediaService';
import Swal from 'sweetalert2';
import moment from 'moment';

export const MediaNew = ({ handleOpenModal, listarMedias }) => {

  const [valoresForm, setValoresForm] = useState({
    serial: '',
    titulo: '',
    sinopsis: '',
    urlPelicula: '',
    portadaUrl: '',
    anioEstreno: '',
    generoPrincipal: '',
    directorPrincipal: '',
    productora: '',
    tipo: ''
  });

  const {
    serial,
    titulo,
    sinopsis,
    urlPelicula,
    portadaUrl,
    anioEstreno,
    generoPrincipal,
    directorPrincipal,
    productora,
    tipo
  } = valoresForm;

  // Manejar cambios en los inputs del formulario
  const handleOnChange = (e) => {
    setValoresForm({
      ...valoresForm,
      [e.target.name]: e.target.value
    });
  };

  // Manejar la creación de una nueva media
  const handleCrearMedia = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Guardando...'
      });
      Swal.showLoading();

      await crearMedia(valoresForm); // Llamar al servicio para crear la media

      Swal.fire({
        icon: 'success',
        title: 'Media creada con éxito',
        showConfirmButton: false,
        timer: 1500
      });

      // Limpiar el formulario
      setValoresForm({
        serial: '',
        titulo: '',
        sinopsis: '',
        urlPelicula: '',
        portadaUrl: '',
        anioEstreno: '',
        generoPrincipal: '',
        directorPrincipal: '',
        productora: '',
        tipo: ''
      });

      listarMedias(); // Refrescar la lista de medios después de crear
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al crear la media',
        text: 'Por favor intenta nuevamente.'
      });
    }
  };

  return (
    <div className="container-fluid mt-4">
      <form onSubmit={handleCrearMedia}>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Serial</label>
              <input required name="serial" value={serial} type="text" className="form-control" onChange={handleOnChange} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input required name="titulo" value={titulo} type="text" className="form-control" onChange={handleOnChange} />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="mb-3">
              <label className="form-label">Sinopsis</label>
              <textarea required name="sinopsis" value={sinopsis} className="form-control" onChange={handleOnChange}></textarea>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">URL de la Película</label>
              <input required name="urlPelicula" value={urlPelicula} type="text" className="form-control" onChange={handleOnChange} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Imagen de Portada</label>
              <input required name="portadaUrl" value={portadaUrl} type="text" className="form-control" onChange={handleOnChange} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Año de Estreno</label>
              <input required name="anioEstreno" value={anioEstreno} type="number" className="form-control" onChange={handleOnChange} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Género Principal</label>
              <input required name="generoPrincipal" value={generoPrincipal} type="text" className="form-control" onChange={handleOnChange} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Director Principal</label>
              <input required name="directorPrincipal" value={directorPrincipal} type="text" className="form-control" onChange={handleOnChange} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Productora</label>
              <input required name="productora" value={productora} type="text" className="form-control" onChange={handleOnChange} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Tipo</label>
              <input required name="tipo" value={tipo} type="text" className="form-control" onChange={handleOnChange} />
            </div>
          </div>
        </div>
        <button className="btn btn-primary mb-3">Guardar</button>
      </form>
    </div>
  );
};

    }, []);


    const listarMarcas = async () => {
        try{
            const { data } = await getMarcas();
            setMarcas(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarMarcas();
    }, []);


    const listarTipos = async () => {
        try{
            const { data } = await getTipos();
            setTipos(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarTipos();
    }, []);


    const listarEstados = async () => {
        try{
            const { data } = await getEstados();
            setEstados(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarEstados();
    }, []);

    
    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const inventario = {
            serial, modelo, descripcion, color, foto,
            fechaCompra, precio,
            usuario: {
                _id: usuario
            },
            marca: {
                _id: marca
            },
            tipoEquipo:{
                _id: tipo
            },
            estadoEquipo: {
                _id: estado
            }
        }
        console.log(inventario);
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await crearInventario(inventario);
            handleOpenModal();
            listarInventarios();
            Swal.close();

        } catch(error) {
            console.log(error);
            Swal.close();
        }
        
    }

  return (
    <div className='sidebar'>
        <div className='container-fluid'>
            <div className='row'>

                <div className='col'>
                    <div className='sidebar-header'>
                        <h3>Nuevo Inventario</h3>
                        <i className="fa-solid fa-xmark" onClick={ handleOpenModal }> </i>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <hr  />
                    </div>
                </div>

                <form onSubmit={(e) => handleOnSubmit(e) }>
                    <div className='row'>

                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Serial</label>
                                <input type="text" name='serial' 
                                value= {serial}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Modelo </label>
                                <input type="text" name='modelo' 
                                value={modelo}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Descripción </label>
                                <input type="text" name='descripcion' 
                                value={descripcion}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Color </label>
                                <input type="text" name='color' 
                                value={color}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Foto </label>
                                <input type="text" name='foto'
                                value={foto} 
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Fecha Compra </label>
                                <input type="date" name='fechaCompra' 
                                value={fechaCompra}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Precio </label>
                                <input type="number" name='precio' 
                                value={precio}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Usuario </label>
                                <select className='form-select'
                                required
                                name= 'usuario'
                                value={usuario}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        usuarios.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Marca </label>
                                <select className='form-select'
                                required
                                name= 'marca'
                                value={marca}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        marcas.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Tipo Equipo</label>
                                <select className='form-select'
                                required
                                name= 'tipo'
                                value={tipo}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        tipos.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Estado Equipo</label>
                                <select className='form-select'
                                required
                                name= 'estado'
                                value={estado}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        estados.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                        
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
} 