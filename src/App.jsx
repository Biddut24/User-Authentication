import { RouterProvider } from "react-router";
import "./App.css";
import router from "./route/Router/Router";

function App(children) {
  return (
    <>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </>
  );
}

export default App;
