import { useEffect } from "react";
import { retrieveFolderApi } from "../api/BiblenetApiService";
import { useAuth } from "../security/AuthContext";
import { useParams } from "react-router-dom";

function Folder() {
  const authContext = useAuth();
  const username = authContext.username;

  return <div>folder page</div>;
}

export default Folder;
