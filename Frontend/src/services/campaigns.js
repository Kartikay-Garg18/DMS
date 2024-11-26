import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_APP_API_URI;

const createCampaign = async (data) => {
  try {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');
    
    const response = await axios.post(`${API_URL}/create-campaign`, {
      title: data.MainCause,
      description: data.about,
      targetAmount: data.amount,
      endDate : data.endDate,
      accountNumber : data.BankAcc,
      accountHolder : data.AccName,
      ifsc : data.ifsc,
      upi : data.upi,
      qrImage : data.qrImage,
      category : data.category,
      beneficiaryImage : data.beneficiaryImage,
      bankName : data.BankName,
      beneficiaryName : data.username
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
        RefreshToken: refreshToken,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

const getSingleCampaign = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/${slug}`);
    console.log(response);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

const getCampaigns = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export { createCampaign, getSingleCampaign, getCampaigns };