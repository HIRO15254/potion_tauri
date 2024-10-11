import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routeData} from "./routeData.tsx";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeData.map(({path, Component}) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
