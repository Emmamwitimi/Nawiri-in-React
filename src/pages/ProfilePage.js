import LeftNav from "../components/LeftNav";
import React from "react";
import BookingForm from '../components/BookingForm';
import Login from "../components/LoginForm";
import Signup from "../components/SignupForm";
import TopNav from "../components/TopNav";
import App from "../App";
import ProfileCards from "../components/ProfileCards";


function ProfilePage(){
    return(
            <div className="Profile">
                {/* Top Navigation Bar */}
                <TopNav/>
                {/* Main Content Area */}
                <div className="main-content">
                    <LeftNav />
                    <ProfileCards/>
                </div>
            </div>
    )
}
export default ProfilePage;