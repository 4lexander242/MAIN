import { Route,Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Homepage from "./pages/home/Homepage";
import VerifyOtp from "./pages/signup/verify-otp";

export default function App() {
  return (
    <div className="p-0 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Homepage />} />
        <Route path="/verify-otp" element={<VerifyOtp/>}/>
      </Routes>
    </div>
  )
}