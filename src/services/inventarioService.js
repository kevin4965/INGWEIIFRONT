import { axiosInstance } from "../helper/axios-config";

const getInventarios = () => {
    return axiosInstance.get('inventario', {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const CrearInventario = (data) => {
    return axiosInstance.post('inventario', {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const ActualizarInventario = (data) => {
    return axiosInstance.put('inventario', {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getInventarios, CrearInventario, ActualizarInventario
}