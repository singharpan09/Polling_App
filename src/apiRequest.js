import axios from "axios";

export default async function apiRequest(url, method) {
  let response;
  try {
    switch (method) {
      case "get":
        response = await axios.get(url);
        return response.data;

      default:
        break;
    }
  } catch (error) {
    response = await axios.get(url, { error: error });
  }
}
