"use client";
import React, { useEffect, useState } from "react";

export default function DashboardOne() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      // Parse the user data if it exists
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Dashboard</h1>
           
          </div>
        </div>

        <div className="row y-gap-30 pt-30">
          {userData && (
            <h1>Welcome {userData.fullname}</h1>
          )}
        </div>
      </div>
    </div>
  );
}
