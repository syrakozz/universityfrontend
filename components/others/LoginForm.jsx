"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import RequestEngine from '@/core/RequestEngine';
import { Utilites } from '@/core/Utilites';



export default function LoginForm() {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const engine = new RequestEngine();
      const response = await engine.userlogin(formData.usernameOrEmail, formData.password); 
      console.log('Response:', response); 
      
      if (response && response.status === 200) {
        if (response.data.success) {
          const user = response.data.data.user; 
          const token = response.data.data.token; 
          if (user && token) {
          
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            
            setIsLoggedIn(true);
            console.log('Logged in successfully:', user);
            window.location.href = "/dashboard";
          } else {
            console.error('User data or token not found in response data:', response.data);
          }
        } else {
          console.error('Login failed:', response.data.error);
        }
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  

  return (
    <div className="form-page__content lg:py-50">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Login</h3>
              <p className="mt-10">
                Don't have an account yet?{" "}
                <Link href="/signup" className="text-purple-1">
                  Sign up for free
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit}
              >
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Username Or Email
                  </label>
                  <input
                    required
                    type="text"
                    name="usernameOrEmail"
                    value={formData.usernameOrEmail}
                    onChange={handleChange}
                    placeholder="Username or Email"
                  />
                </div>
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
