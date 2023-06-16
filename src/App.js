import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./navigation/AppRoutes";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
    text: "Home",
  },
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
