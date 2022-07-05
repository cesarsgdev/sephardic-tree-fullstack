import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./routes/Login";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import { useEffect, useState } from "react";

function App() {
  // const [logedIn, setLogedIn] = useState(false);
  // // const token = localStorage.getItem("token");
  // const [token, setToken] = useState(localStorage.getItem("token"));

  // useEffect(() => {
  //   if (token) {
  //     setLogedIn(true);
  //   }
  // }, [token]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            index
            element={
              <PrivateRoute>
                <Home></Home>
              </PrivateRoute>
            }
          ></Route>
          <Route path="tree/:id" element={<h1>Tree editor</h1>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
