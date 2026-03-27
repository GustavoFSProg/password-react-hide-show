import axios from "axios";

const api = axios.create({
  baseURL: "https://react-native-api-financas.onrender.com/",
});

export default api;
