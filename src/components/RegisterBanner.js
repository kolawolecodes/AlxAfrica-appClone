import React from 'react';
import "./registerBanner.css";


function RegisterBanner(props) {
  return (
    <div className='registerBanner'>
        <div className='reg_banner_main_container'>
            <div className='small_banner_img'>
                <img src={props.image} alt="aws" />
                <span className='startSoon'>{props.start}</span>
            </div>

            <div className='small_banner_content'>
                <h3 className='reg_text'>{props.text}</h3>
                <div>
                    {/* material ui */}
                    <span className='reg_duration'>{props.duration}</span>
                </div>
            </div>

            <button className='reg_btn'>{props.register}</button>
            <p className='reg_learn'>{props.learn}</p>
        </div>
    </div>
  );
}

export default RegisterBanner;
