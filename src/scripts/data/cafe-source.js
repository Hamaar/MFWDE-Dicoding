import API_ENDPOINT from "../global/api-endpoint";

class CafeSource {
  static async listCafe() {
    const response = await fetch(API_ENDPOINT.LIST_CAFE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailCafe(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default CafeSource;
