"use client";

import React, { useEffect, useState } from "react";
import RequestEngine from '@/core/RequestEngine';
import { useParams } from "react-router-dom"; 

export default function YourComponent() {
  const [gradesData, setGradesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(""); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
     
      const parsedUserData = JSON.parse(userDataFromStorage);
      setUserData(parsedUserData);

      const userId = parsedUserData.id; 
     
    }
  }, []);

  useEffect(() => {
    const prepareData = async () => {
      try {
        
        if (selectedYear && userData && userData.id) {
          let engine = new RequestEngine();
          
   
          const response = await engine.getItem('user', `/grades/${userData.id}`);
          if (response && response.status === 200) {
            setGradesData(response.data);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    prepareData();
  }, [selectedYear, userData]); 

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Major</h1>

          </div>
        </div>
       

        <div className="row y-gap-30 pt-30">
          {userData && (
            <h1>YOUR Major is  {userData.major}</h1>
          )}
        </div>
      </div>
    </div>
  );
}