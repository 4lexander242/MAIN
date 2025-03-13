import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Homepage = () => {
  return (

    <><Sidebar/>
    <div className="flex h-screen w-full bg-black text-white">

      
      

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to CRM Dashboard</h1>
          <p className="text-gray-400 mt-2">Manage your contacts, services, and reports efficiently.</p>
        </div>
      </main>
    </div>
    </>
  );
};

export default Homepage;
