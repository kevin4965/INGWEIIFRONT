import { axiosInstance } from "../helper/axios-config";

// Obtener lista de media
const getMedia = () => {
    return axiosInstance.get('media', {
        headers: { // Corregido 'header' por 'headers'
            'Content-Type': 'application/json'
        }
    });
}

// Crear un nuevo elemento de media
const crearMedia = (data) => {
    return axiosInstance.post('media', data, {
        headers: { // Corregido 'header' por 'headers'
            'Content-Type': 'application/json'
        }
    });
}

// Actualizar un elemento de media existente
const actualizarMedia = (mediaId, data) => {
    return axiosInstance.put(`media/${mediaId}`, data, {
        headers: { // Corregido 'header' por 'headers'
            'Content-Type': 'application/json'
        }
    });
}

export {
    getMedia, crearMedia, actualizarMedia
}
