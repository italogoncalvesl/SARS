import axios from "axios";

// LEMBRE-SE DE ALTERAR O IP PARA O SEU IP LOCAL
export const api = axios.create({ baseURL: "http://192.168.100.7:5000" });
