import axios from "axios";

const baseURL = "https://www.omdbapi.com/?apiKey=ffd0c3a5";

export const apiCall = (url, data, header, method) =>
  axios({
    method,
    url: baseURL + url,
    data,
    header,
  });
