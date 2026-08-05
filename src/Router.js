import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Rootlayout from "./Rootlayout";

export const router = createBrowserRouter([
 {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
    ],
  },
]);