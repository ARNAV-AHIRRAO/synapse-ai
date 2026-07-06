import axios from "axios";

const API = axios.create({
  baseURL: "https://synapse-ai-production-f9ef.up.railway.app",
});

export default API;