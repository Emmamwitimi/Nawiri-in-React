import LeftNav from "../components/LeftNav";
import React from "react";
import BookingForm from '../components/BookingForm';
import Login from "../components/LoginForm";
import Signup from "../components/SignupForm";
import TopNav from "../components/TopNav";
import App from "../App";


function ResourcesPage(){
    return(
            <div className="Profile">
                {/* Top Navigation Bar */}
                <TopNav/>
    
                {/* Conditionally render login or signup form */}
                    
                {/* Main Content Area */}
                <div className="main-content">
                    <LeftNav />
                </div>
            </div>
    )
}
export default ResourcesPage;