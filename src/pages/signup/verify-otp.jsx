import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  //const email = location.state?.email || "";
  const { email, firstName, lastName, password, role } = location.state || {};

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:4232/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
  
      const data = await response.json();
      if (data.success) {

        try {
          const response = await fetch("http://localhost:4232/signUp", {
            method: "POST",
            headers: {
              "content-type": 'application/json'
            },
            body: JSON.stringify({
              fname: firstName,
              lname: lastName,
              email: email,
              password: password,
              role: role
            })
          });
          const data = await response.json();
          console.log(data.message);
        } catch (error) {
          console.log(error.message);
        }
        
        console.log('Form submitted:', email,firstName);

        alert("OTP Verified! You can now log in.");
        navigate("/login"); // Redirect to the login page
      } else {
        alert("Invalid OTP, try again.");
      }
    } catch (error) {
      console.error("OTP Verification Failed:", error);
    }
  };
  
  return (
    <div className="min-h-screen w-full flex">
      {/* Left side with background image */}
      <div className="hidden md:flex md:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg-img.png')"
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-white">
          <h1 className="text-4xl font-mono tracking-[0.3em] mb-16">
            A N A L Y T I C S
          </h1>
          <h2 className="text-2xl font-mono mb-4">
            Get Started with Us
          </h2>
          <p className="text-blue-200 text-center font-mono text-sm">
            Complete OTP Verification
          </p>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center bg-black p-10 shadow-lg">
        <h2 className="text-3xl text-white font-mono mb-4">Verify OTP</h2>
        <p className="text-gray-500 font-mono text-sm text-center mb-6 leading-loose">
          A one-time password has been sent to: <br />
          <span className="font-extrabold text-white">{email}</span>
        </p>

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className=" w-1/3 bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none mb-6 rounded-lg text-center tracking-widest"
        />
        

        <button
          onClick={handleVerifyOtp}
          className="w-1/3 bg-white text-black py-2 font-mono text-sm hover:bg-gray-100 transition-colors mb-3 rounded-3xl"
        >
          Verify OTP
        </button>
        {/* <p className="text-gray-500 text-center font-mono text-sm mt-4">
              Didn't receive OTP?{' '}
              <button className="text-blue-400 hover:text-blue-300">
                Resend OTP
              </button>
            </p> */}
      </div>
      </div>
    </div>
  );


}




export default VerifyOtp;
