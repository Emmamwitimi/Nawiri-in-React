import React from 'react';
import TopNav from '../components/TopNav';
import LeftNav from '../components/LeftNav';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
        <TopNav/>
        <div className="flex mt-6">
        {/* Left Navigation */}
            <LeftNav/>
            <div className="flex mt-6">
                <h1>DashboardPage</h1>
            </div>
        </div>
    </div>
  );
}
