import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/owner/HomePage";
import AuthPage from "./pages/AuthPage";
import PaymentManagement from "./pages/owner/PaymentManagement";
import Profile from "./pages/owner/Profile";

import HomePageUser from "./pages/user/HomePageUser";
import PaymentUser from "./pages/user/PaymentUser";
import ProfileUser from "./pages/user/ProfileUser";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/payment" element={<PaymentManagement />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userhomepage" element={<HomePageUser />} />
        <Route path="/userpayment" element={<PaymentUser />} />
        <Route path="/userprofile" element={<ProfileUser />} />
      </Routes>
    </>
  );
};

export default App;
