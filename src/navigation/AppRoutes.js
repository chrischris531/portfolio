import { Routes, Route } from "react-router-dom";

const AppRoutes = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route["text"]}
          path={route["path"]}
          element={route["element"]}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
