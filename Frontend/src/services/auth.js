import axios from 'axios';

const API_URL = 'http://localhost:5173';

const createAccount = async (name, email, password, phoneNumber) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
      phoneNumber
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
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

export default { createAccount, login, logout };