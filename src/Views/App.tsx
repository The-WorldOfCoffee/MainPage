import { BrowserRouter, Navigate, Route, Routes,redirect } from "react-router-dom";

import { CoffeeProvider } from "@/Contexts/CoffeesContext";
import routes from "@/Router/router";
import NotFound from "./NotFound";
import Home from "./Home/Home";
const App: React.FC = () => {
  return (
    <CoffeeProvider>
   
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/main" />} />
      </Routes>

    </BrowserRouter>

    </CoffeeProvider>
  );
};

export default App;