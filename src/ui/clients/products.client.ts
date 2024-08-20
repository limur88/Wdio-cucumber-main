import { AxiosApiClient } from "../../utils/axios";
import { IRequestOptions } from "../data/types/api.types.js";
import { IProduct, IProductResponse } from "../data/types/product.types.js";

const apiConfig = {
  baseUrl: "https://aqa-course-project.app/",
  endpoints: {
    ["Login"]: "api/login/",
    ["Customers"]: "api/customers/",
    ["Get Customer By Id"]: (id: string) => `api/customers/${id}/`,
    ["Products"]: "api/products/",
    ["Get Product By Id"]: (id: string) => `api/products/${id}/`,
    ["Orders"]: "api/orders/",
    ["Get Order By Id"]: (id: string) => `api/orders/${id}/`,
    ["Order Delivery"]: "api/orders/delivery/",
    ["Order Receive"]: "api/orders/receive/",
    ["Order Status"]: "api/orders/status",
    ["Order Comments"]: "api/orders/comments",
  },
};

export class ProductsApiClient {
  constructor(apiClient = new AxiosApiClient()) {}

  async create(product: IProduct, token: string) {
    const options: IRequestOptions = {
      method: "post",
      baseURL: apiConfig.baseUrl,
      url: apiConfig.endpoints.Products,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: product,
    };
    return this.apiClient.send<IProductResponse>(options);
  }
}
