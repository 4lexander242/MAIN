import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    return(
            
       <div className="flex h-screen  bg-black text-white">
      <aside className="w-64 bg-gray-900 p-5 flex flex-col space-y-6">
        <div className="text-center text-2xl font-bold bg-gray-700 p-3 rounded-md">CRM</div>
        <nav className="flex flex-col space-y-4">
          <Link to="/Home" className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md">
            <span>Home</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md">
            <span>Contacts</span>
          </Link>
          <Link to="/services" className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md">
            <span>Services</span>
          </Link>
          <Link to="/ada" className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md">
            <span>Reports</span>
          </Link>
          <Link to="/" className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md mt-auto">
            <span>Logout</span>
          </Link>
        </nav>
      </aside>
     </div>       
    )
}
export default Sidebar;