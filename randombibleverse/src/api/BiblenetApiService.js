import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retrieveAllFolders = () => apiClient.get("/folders");
