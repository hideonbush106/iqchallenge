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

const getFormData = {
  name: "",
  studentID: "",
};

function formDataHandler(formData) {
  getFormData.name = formData.name;
  getFormData.studentID = formData.studentID;
  console.log(formData);
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />} />
      <Route
        path="/register"
        element={<Register onSaveFormData={formDataHandler} />}
        errorElement={<ErrorPage />}
      />
      <Route
        path={`/user/start/:name/:studentID`}
        element={
          <Start name={getFormData.name} studentID={getFormData.studentID} />
        }
        errorElement={<ErrorPage />}
      />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
