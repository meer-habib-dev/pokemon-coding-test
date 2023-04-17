import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const api = axios.create({
  baseURL: baseUrl,
});


export default api;
