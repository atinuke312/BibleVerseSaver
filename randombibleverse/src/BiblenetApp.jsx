import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Verses from "./pages/Verses";
export default function BiblenetApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/folders" element={<Verses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
