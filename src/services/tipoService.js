import { axiosInstance } from "../helper/axios-config";

const getTipos = () => {
    return axiosInstance.get('tipo-equipo', {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const crearTipo = (data) => {
    return axiosInstance.post('tipo-equipo', data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const actualizarTipo = (data, tipoEquipoId) => {
    return axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getTipos, crearTipo, actualizarTipo
}