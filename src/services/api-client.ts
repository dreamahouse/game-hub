import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bdcfe331e34f423c885b56bb0bf3d688",
  },
});
