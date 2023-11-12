import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=39890797-00190d6beecffd2ffd1001b1e&';

export const fetchIng = async searctWords => {
  const response = await axios.get(`q=${searctWords}`);
  console.log(response.data);
  return response.data;
};
