import axios from 'axios';

const SERVER_URL = 'http://localhost:4000'; 

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${SERVER_URL}/users`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (userData) => {
    try {
        const response = await axios.post(`${SERVER_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
        await axios.delete(`${SERVER_URL}/logout`);
    } catch (error) {
        throw error.response.data;
    }
};
