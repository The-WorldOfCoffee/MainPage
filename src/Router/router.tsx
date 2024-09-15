import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import Home from "@/Views/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    //we have many routs probebly so it shoul be in routs

    // <Route index at='home' errorElement={<div>Ops!</div>}>
    <Route path="/" element={<Home />} errorElement={<div>Ops!</div>}>
      {/* Child Elements */}
    </Route>,
  ),
) as ReturnType<typeof createBrowserRouter>;

export default router;