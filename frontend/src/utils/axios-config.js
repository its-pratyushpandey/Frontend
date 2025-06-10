import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nexthire-1sg7.onrender.com/api/v1',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Add a response interceptor for handling errors
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;