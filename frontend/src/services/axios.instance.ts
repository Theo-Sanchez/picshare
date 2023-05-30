import axios from 'axios';

// doc axios https://axios-http.com/fr/docs/req_config
// const API_URL = process.env.REACT_APP_API_ENDPOINT;
const API_URL = "http://localhost:8000";

export const instance = ( token?: string ) => 
   axios.create({
      baseURL: API_URL,
      headers: {
         "Content-type": "Application/json",
         "Authorization" : token ? `Bearer ${token}` : "",
      },
   });
