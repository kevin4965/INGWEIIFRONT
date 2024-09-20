import { axiosInstance } from "../helper/axios-config";

const getEstados = () => {
    return axiosInstance.get('estado', {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const crearEstado = (data) => {
    return axiosInstance.post('estado-equipo', data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const actualizarEstado = (data) => {
    return axiosInstance.put(`estado-equipo/${estadoEquipoId}`, data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getEstados, crearEstado, actualizarEstado
}