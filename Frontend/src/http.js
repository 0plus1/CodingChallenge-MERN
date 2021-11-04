import Axios from "axios";

const API_DOMAIN = "http://localhost:5000";
const APIClient = Axios.create({
  baseURL: `${API_DOMAIN}/api`,
});

export default APIClient;
