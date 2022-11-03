import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../components/page/Auth/SignUp";
import MainPage from "../components/page/MainPage";
import SignIn from "../components/page/Auth/SignIn";
import Select from "../components/page/Auth/Select";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/select" element={<Select />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
