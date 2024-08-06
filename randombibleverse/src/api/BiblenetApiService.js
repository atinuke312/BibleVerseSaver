import { apiClient } from "./ApiClient";

export const addNewFolderApi = (username, folder) =>
  apiClient.post(`/users/${username}/folders`, folder);

export const retrieveAllFoldersApi = (username) =>
  apiClient.get(`/users/${username}/folders`);

export const addVersesToFolderApi = (foldername, verse) =>
  apiClient.post(`/folders/${foldername}/verses`, verse);

// export const retrieveFolderApi = (username, id) =>
//   apiClient.get(`/users/${username}/folders/${id}`);
