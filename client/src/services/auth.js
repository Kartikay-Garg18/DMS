import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_APP_API_URI;

const setAccessToken = (token) => {
  Cookies.set('accessToken', token, { expires: 1 });
};

const setRefreshToken =  (token) => {
 Cookies.set('refreshToken', token, { expires: 7 });
};

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
    throw error;
  }
}

const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email : data.email,
      password : data.password
    });
    setAccessToken(response.data.data.accessToken);
    setRefreshToken(response.data.data.refreshToken);
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

const getCurrentUser = async () => {
  try {
    const accessToken = Cookies.get('accessToken');
    if(!Cookies.get('accessToken')) return { error: 'No access token found' };

    const response = await axios.get(`${API_URL}/user`,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export { createAccount, login, logout, getCurrentUser };