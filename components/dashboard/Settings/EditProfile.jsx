import React, { useEffect, useState } from "react";
import axios from "axios";
import Constants from '@/core/Constants'; 

export default function EditProfile({ activeTab }) {
  const [previewImage, setPreviewImage] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    addressLine1: "",
  });
  const [token, setToken] = useState(null); 
  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      const parsedUserData = JSON.parse(userDataFromStorage);
      setUserData(parsedUserData);
      setPreviewImage(parsedUserData.fullpicture);
    }
  }, []);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken); 
  }, []); 
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serverLink = Constants.serverlink; 
      const url = `${serverLink}api/user/updateprofile`;
      const headers = {
        token: token
      };
  
      const response = await axios.post(
        url,
        userData,
        { headers }
      );
  
      console.log("Update profile response:", response.data);
     
  
    } catch (error) {
      console.error("Error updating profile:", error);
     
    }
  };
  

  return (
    <div className={`tabs__pane -tab-item-1 ${activeTab === 1 ? "is-active" : ""}`}>
      <div className="row y-gap-20 x-gap-20 items-center">
        <label
          className="col-auto"
          htmlFor="imageUpload"
          style={previewImage ? {} : { backgroundColor: "#f2f3f4", width: 100, height: 100 }}
        >
          <img
            src={previewImage}
            alt={previewImage ? "image" : ""}
            width={100}
            height={100}
            className="size-100"
          />
        </label>

        <div className="col-auto">
          <div className="text-16 fw-500 text-dark-1">Your avatar</div>
          <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
            <div>
              <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                <label
                  style={{ cursor: "pointer" }}
                  htmlFor="imageUpload1"
                  className="icon-cloud text-16"
                ></label>
                <input
                  required
                  id="imageUpload1"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  document.getElementById("imageUpload1").value = "";
                  setPreviewImage("");
                }}
                className="d-flex justify-center items-center size-40 rounded-8 bg-light-3"
              >
                <div className="icon-bin text-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top-light pt-30 mt-30">
        <form onSubmit={handleSubmit} className="contact-form row y-gap-30">
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">First Name</label>
            <input
              required
              type="text"
              placeholder={userData.fullname}
              value={userData.firstName}
              onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Last Name</label>
            <input
              required
              type="text"
              placeholder={userData.lastName}
              value={userData.lastName}
              onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Phone</label>
            <input
              required
              type="text"
              placeholder="Phone"
              value={userData.phone}
              onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Address Line 1</label>
            <input
              required
              type="text"
              placeholder={userData.address}
              value={userData.address}
              onChange={(e) => setUserData({ ...userData, addressLine1: e.target.value })}
            />
          </div>
          <div className="col-12">
            <button className="button -md -purple-1 text-white">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}
