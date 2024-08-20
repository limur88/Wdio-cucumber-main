import { apiConfig } from "../../config/apiConfig.js";
import { AxiosApiClient } from "../../utils/axios.js";
import { IRequestOptions } from "../data/types/api.types.js";
import { IUserCredentials, ILoginResponse } from "../data/types/user.types.js";

export class SignInApiClient {
  constructor(private apiClient = new AxiosApiClient()) {}

  async login(credentials: IUserCredentials) {
    const options: IRequestOptions = {
      method: "post",
      baseURL: apiConfig.baseUrl,
      url: apiConfig.endpoints.Login,
      headers: { "Content-Type": "application/json" },
      data: credentials,
    };
    return this.apiClient.send<ILoginResponse>(options);
  }
}

export default new SignInApiClient();
