import axios from 'axios';

const base_url = "https://app.moreno.gob.ar/api/";

export const LogIn = async (data) => {
    try {
        const hashid = "0A8084441FA93D97776F5B3B5EEEA9D25CA1C58662865A28843D07E327A4998827E460762F659D700D680514F30B2951A80607A7CA6B323B074D443382439DAB"
        const clave = "FDCECD935CD7C0A4776A765E696271085D8B9970A85EC628F46E46CE34E6B682A0849B78C25807CDDE314F534E37C339A2D35AD1FD3164F23426B72CEC5A4C8E"

        const response = await axios.get(`${base_url}login?hashid=${hashid}&dni=${data.email}&clave=${clave}`);
        // console.log('LogIn successful:', response.data.isOk);

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