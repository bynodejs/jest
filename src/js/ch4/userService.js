const axios = require("axios");
const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

module.exports = {
  findAll(cb) {
    axios
      .get(`${API_ENDPOINT}/users`)
      .then(response => cb(null, response.data));
  },

  findOne(id) {
    return axios
      .get(`${API_ENDPOINT}/users/${id}`)
      .then(response => response.data);
  }
};
