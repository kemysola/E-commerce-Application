import axios from "axios";

export default axios.create({
    baseURL: "",
  headers: {
    // token: `Bearer ${localStorage.getItem('token')}`,
    'Content-type': 'application/json; charset=utf-8',
  }
});