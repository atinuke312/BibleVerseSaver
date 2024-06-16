import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Verses from "./pages/Verses";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import AuthProvider, { useAuth } from "./security/AuthContext";

export default function BiblenetApp() {
  function AuthenticatedRoute({ children }) {
    const authContext = useAuth();
    if (authContext.isAuthenticated) return children;

    return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/welcome"
              element={
                <AuthenticatedRoute>
                  <Welcome />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/folders"
              element={
                <AuthenticatedRoute>
                  <Verses />
                </AuthenticatedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
