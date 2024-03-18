import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import { HomePage } from "../pages/HomePage";
const NanniesPage = lazy(() => import("../pages/NanniesPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="nannies"
          element={
              <NanniesPage />
          }
        />
        <Route
          path="favorites"
          element={
              <FavoritesPage />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
