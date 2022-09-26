import axios from 'axios';

const axiosNormal = axios.create({
    baseURL: 'https://quang-ecommerce.herokuapp.com',
});

export default axiosNormal;
