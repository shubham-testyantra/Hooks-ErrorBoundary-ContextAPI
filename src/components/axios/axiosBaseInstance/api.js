import Axios from "axios";

export default Axios.create({
  //axios request parameter
  baseURL: `https://jsonplaceholder.typicode.com/users`,
});
