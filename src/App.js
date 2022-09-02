import React from "react";
import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes/routesList";
import "./App.css";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/home")
  //     .then((res) => res.json())
  //     .then((res) => setData(res.message));
  // });
  return (
    <Routes>
      {publicRoutes.map(({ path, component: Component, exact }, idx) => {
        return (
          <Route key={idx} path={path} exact={exact} element={<Component />} />
        );
      })}
    </Routes>
  );
}

export default App;
