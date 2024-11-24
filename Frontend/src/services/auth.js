import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URI;

const createAccount = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name:data.name,
      email:data.email,
      password : data.password,
      phoneNumber : data.phoneNumber
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email : data.email,
      password : data.password
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export { createAccount, login, logout };