import React from "react";
import Root from "./routes/root";
import Register from "./routes/user/Register";
import Start from "./routes/user/Start";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";

let name;
let studentID;

function formDataHandler(formData) {
  name = formData.name;
  studentID = formData.studentID;
  console.log(name);
  console.log(studentID);
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/" 
        element={<Root />} 
        errorElement={<ErrorPage />} 
      />
      <Route
        path="/register"
        element={
          <Register
            onSaveFormData={formDataHandler}
          />}
        errorElement={<ErrorPage />}
      />
      <Route
        path={`/user/start/:name/:studentID`}
        element={<Start />}
        errorElement={<ErrorPage />}
      />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
