import axios from 'axios';

const apiClient = axios.create({
    baseUrl: `http://18.220.29.105`,
    headers: {
        'Content-Type': 'application/json'
    }
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