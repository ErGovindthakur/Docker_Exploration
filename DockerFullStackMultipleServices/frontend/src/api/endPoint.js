const baseUrl = "http://localhost:9090"
import axios from "axios";

export const getData = async() => await axios.get(baseUrl);

// import axios from "axios";

// const baseUrl = "http://localhost:9090";

// export const getData = async () => {
//   const response = await axios.get(baseUrl);
//   return response.data;
// };