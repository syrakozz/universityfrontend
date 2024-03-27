"use client";
import React, { useEffect, useState } from "react";

export default function DashboardOne() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
   
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {

      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        

        <div className="row y-gap-30 pt-30">
          {userData && (
            <h1>Welcome {userData.fullname}</h1>
          )}
        </div>
      </div>
    </div>
  );
}