import React from "react";
import Root from "./routes/Root";
import Register from "./routes/user/Register";
import Start from "./routes/user/Start";
import Test from "./routes/user/Test";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import { Provider } from "react-redux";
import store from "./reducer/store"

const getFormData = {
  name: "",
  studentID: "",
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />} />
      <Route
        path="/register"
        element={<Register />}
        errorElement={<ErrorPage />}
      />
      <Route
        path={`/user/start/:name/:studentID`}
        element={
          <Start />
        }
        errorElement={<ErrorPage />}
      />
      <Route
        path={`/user/start/:name/:studentID/test`}
        element={
          <Test />
        }
        errorElement={<ErrorPage />}
      />
    </>
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
