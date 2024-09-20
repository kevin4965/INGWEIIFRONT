import { axiosInstance } from "../helper/axios-config";

const getUsuarios = () => {
    return axiosInstance.get('usuario', {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const crearUsuario = (data) => {
    return axiosInstance.post('usuario', data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const actualizarUsuario = (data) => {
    return axiosInstance.put(`usuario/${usuarioId}`, data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getUsuarios, crearUsuario, actualizarUsuario
}