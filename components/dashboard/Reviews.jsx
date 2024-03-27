"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Constants from '@/core/Constants'; 

export default function Reviews() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      const parsedUserData = JSON.parse(userDataFromStorage);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Notes</h1>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">All Notes</h2>
              </div>

              <div className="py-30 px-30">
                <div className="row y-gap-30">
                  {userData ? (
                    <div className="md:direction-column">
                      <div className="d-flex pt-30">
                        <div className="mr-20">
                          <Image src={userData.fullpicture}  width={50} height={50} />
                        </div>

                        <div className="comments__body md:mt-15">
                          <h5 className="text-15 fw-500 mt-15">{userData.fullname}</h5>
                          <hr /> 
                          <div className="comments__text mt-10">
                            <p>{userData.note}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>No user data available.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
