"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import Constants from '@/core/Constants'; 

export default function YourComponent() {
  const [gradesData, setGradesData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null); 
  const [selectedYear, setSelectedYear] = useState(""); // State for selected year

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      const parsedUserData = JSON.parse(userDataFromStorage);
      setUserData(parsedUserData);
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken); 
  }, []); 

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        if (userData && userData.id && token) {
          const userId = userData.id;
          const serverLink = Constants.serverlink; 
          let url = `${serverLink}api/user/grades/${userId}`;
          
          if (selectedYear) {
            url += `?year=${selectedYear}`;
          }
  
          const headers = {
            token: token
          };
  
          const response = await axios.get(url, { headers }); 
          if (response && response.status === 200) {
            setGradesData(response.data.data);
            console.log("Grades Data:", response.data); 
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchGrades();
  }, [userData, token, selectedYear]); 

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
  };

  const noGradesMessage = () => {
    if (selectedYear !== "" && !gradesData.some(grade => grade.year.toString() === selectedYear)) {
      return <p>No grades available for Year {selectedYear}.</p>;
    }
    return null;
  };
  
  

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Grades</h1>
          </div>
        </div>

        <div className="row y-gap-30 pt-30">
          <div className="col-auto select-wrapper">
            <select value={selectedYear} onChange={handleYearChange}>
              <option value="">All Years</option>
              <option value="1">Year 1</option>
              <option value="2">Year 2</option>
              <option value="3">Year 3</option>
            </select>
          </div>

         
          {noGradesMessage()}

          {gradesData && Array.isArray(gradesData) && gradesData
            .filter(grade => selectedYear === "" || grade.year.toString() === selectedYear)
            .map((grade) => (
              <div key={grade._id}>
                <p>Year: {grade.year}</p>
                {grade.full_picture && (
                  <div className="col-12">
                    <button className="button -md -purple-1 text-white">
                      <a href={grade.full_picture} target="_blank" rel="noopener noreferrer">View Grade</a>
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
