import axios from "axios";
import { appConfiguration } from "./AppConfiguration";

export const axiosInstance = axios.create({
  baseURL: appConfiguration.api.baseUrl,
})