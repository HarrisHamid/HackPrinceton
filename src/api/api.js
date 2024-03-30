import axios from 'axios';

const apiClient = axios.create({
    baseUrl: `http://127.0.0.1:8000/`
})

const request = async (method, url, data) => {
    try {
        const response = await apiClient[method](url, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export default request;