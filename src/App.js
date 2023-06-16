import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbarTop from "./components/navigation/CustomNavbarTop";
import AppRoutes from "./navigation/AppRoutes";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CustomNavbarBottom from "./components/navigation/CustomNavbarBottom";

const routes = [
  {
    path: "/",
    element: <Home />,
    text: "Home",
  },
  // {
  //   path: "/projects",
  //   element: <Projects />,
  //   text: "Projects",
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  //   text: "Contact",
  // },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes routes={routes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
