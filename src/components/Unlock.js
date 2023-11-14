import React from 'react';
import "./unlock.css";

function Unlock(props) {
  return (
      <div className='unlock_container' >
          <div className='overlay'></div>
          <div className='inner_unlock_container'>
            <div className='unlock_content_container'>
              <div className='unlock_content'>
                <div className='content__left'>
                  <h2>
                    Unlock Your 
                    <br />
                    <span>Tech Future</span>
                  </h2>
                  <p>
                    Our world-class programmes will help you develop your 
                    technical and professional skills, while our community 
                    and network will help accelerate your career.
                  </p>
                  <button className='expore_btn'>Explore programmes</button>
                </div>
                <div className='content__right'>
                  <img className="image_video" src="https://www.alxafrica.com/wp-content/uploads/2023/10/ALX_Programmes_Thumbnail.png" alt="" />
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}

export default Unlock;
