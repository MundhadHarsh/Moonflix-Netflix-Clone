import axios from "axios";

const get = async (url) => {
  const responsef = await axios.get(url, {
    headers: {
      Accept: "application/json",
      "Accept-Encoding": "identity"
    }
  });
  return responsef.data;
};

export default { get };