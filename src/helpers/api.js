import axios from 'axios';
import { makeHash } from './makeHash';

const base_url = "https://app.moreno.gob.ar/api/";

export const LogIn = async (data) => {
    try {
        // const clave = "FDCECD935CD7C0A4776A765E696271085D8B9970A85EC628F46E46CE34E6B682A0849B78C25807CDDE314F534E37C339A2D35AD1FD3164F23426B72CEC5A4C8E"
        const hashid = "0A8084441FA93D97776F5B3B5EEEA9D25CA1C58662865A28843D07E327A4998827E460762F659D700D680514F30B2951A80607A7CA6B323B074D443382439DAB"
        const clave = makeHash(data.password)

        // usuario: 32946097
        // contraseña: 030787

        // const hashid2 = makeHash((makeHash(data.password) + data.dni))

        // const hash1 = makeHash("sonvolt") + "31014119";
        // const hash2 = makeHash(hash1)
        // console.log(hash1);
        // // const password2 = makeHash(data.password)

        // console.log(hashid2);

        const response = await axios.get(`${base_url}login?hashid=${hashid}&dni=${data.dni}&clave=${clave}`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error logging out:', error);
        throw error; // Maneja errores según sea necesario
    }
};

export const logout = async () => {
    try {
        // Aquí simularíamos una solicitud GET para cerrar sesión
        const response = await axios.get('https://api.example.com/logout');
        console.log('Logout successful:', response.data);
        return response.data; // En un caso real, podrías manejar la respuesta según sea necesario
    } catch (error) {
        console.error('Error logging out:', error);
        throw error; // Maneja errores según sea necesario
    }
};

export const NoticiasGet = async (data) => {
    try {
        const hashid = makeHash("");
        const response = await axios.get(`${base_url}NoticiasGet?hashid=${hashid}&qty=2&start=0`);

        return response.data;
    } catch (error) {
        console.error('Error NoticiasGet out:', error);
        throw error; // Maneja errores según sea necesario
    }
};

export const NoticiaGet = async (data) => {
    try {
        const hashid = makeHash("");
        const response = await axios.get(`${base_url}NoticiaGet?hashid=${hashid}&id=${data.id}`);

        console.log(`${base_url}NoticiaGet?hashid=${hashid}&id=${data.id}`);
        // console.log(response.data);

        return response.data;
    } catch (error) {
        console.error('Error NoticiasGet out:', error);
        throw error; // Maneja errores según sea necesario
    }
};

export const ImagenGet = async (id) => {
    try {
        const response = await axios.get(`${base_url}Imagen?id=${id}`);

        return response.data;
    } catch (error) {
        console.error('Error NoticiasGet out:', error);
        throw error; // Maneja errores según sea necesario
    }
};