import React from 'react';
import '../../assets/style/about.css';
import profile from '../../assets/images/profile.jpg';

export default function About() {
  return (
      <div className="about-container d-flex py-5"> 
          <div className="about-text flex-grow-1"> 
              <h1 className="text-center mb-4">Jake's Bio</h1>
              <p className="lead">
                  As a passionate videographer and designer with over ten years of experience, I thrive on the creative process. My journey has led me through various disciplines, including photography, graphic design, filmmaking, and branding, allowing me to cultivate a diverse skill set. <br />
                  <br />
                  Now, I am excited to merge my artistic background with coding, empowering myself to bring my projects to life from concept to completion. My goal is to harness the power of technology to create visually stunning and engaging experiences that resonate with audiences.
              </p>
          </div>
          <img 
              src={profile} 
              alt="profile photo" 
              className="about-image" 
              style={{ width: '300px', height: 'auto' }} 
          />
      </div>
  );
}
