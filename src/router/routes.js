import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../components/page/Auth/SignUp";
import MainPage from "../components/page/MainPage";
import SignIn from "../components/page/Auth/SignIn";
import Select from "../components/page/Auth/Select";
import InviteCode from "../components/page/Auth/invite";
import EnterCode from "../components/page/Auth/EnCode";
import WorkStatus from "../components/page/WorkStatus";
import Makecompany from "../components/page/Auth/Mkcom";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/select" element={<Select />}></Route>
          <Route path="/invite" element={<InviteCode />}></Route>
          <Route path="/encode" element={<EnterCode />}></Route>
          <Route path="/status" element={<WorkStatus />}></Route>
          <Route path="/mkcom" element={<Makecompany />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
