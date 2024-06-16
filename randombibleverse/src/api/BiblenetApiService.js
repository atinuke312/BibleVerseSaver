import { apiClient } from "./ApiClient";

export const retrieveAllFolders = () => apiClient.get("/folders");
