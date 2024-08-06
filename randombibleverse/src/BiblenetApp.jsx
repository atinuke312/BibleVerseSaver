import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Verses from "./pages/Verses";
import Login from "./pages/Login";
import AuthProvider, { useAuth } from "./security/AuthContext";
import Folder from "./pages/Folder";

export default function BiblenetApp() {
  // function AuthenticatedRoute({ children }) {
  //   const authContext = useAuth();
  //   if (authContext.isAuthenticated) return children;

  //   return <Navigate to="/"></Navigate>;
  // }

  return (
    <div>
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}

          <Route path="/" element={<Verses />} />
          {/* <Route path="/folders" element={<Folder />}></Route> */}
        </Routes>
      </BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  );
}
