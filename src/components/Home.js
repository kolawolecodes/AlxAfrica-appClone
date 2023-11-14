import React, {useState} from 'react';
import "./home.css";
import Partnership from './Partnership';
// import {Link} from "react-router-dom";
import cloudImg from "../images/img-cloudcomputing-p-1.webp";
import RegisterBanner from './RegisterBanner';
import Unlock from './Unlock';

function Home() {

    const programs = [
        "AWS Cloud Computimh",
        "Data Analitics",
        "Salesforce Administrator", "Intro to Software Engineering"
    ]

   const [openExp, setOpenExp]  =useState(false)

  return (
    <div className='home'>
        <div className='banner_cover'>
            {/* <img className='banner_bg' src='https://www.alxafrica.com/wp-content/uploads/2023/10/home-banner-scaled.jpg' alt='bg_banner'></img> */}
            <div className='container'>
                <div className='inner_container'>
                    <div className='main_content_container'>
                        <div className='content_title'>
                            <h1>
                                Tech Training for 
                                <br />
                                the Digital Future
                            </h1>
                        </div>

                            <div className='content_details'>
                            <p>
                                Rigorous programmes. Real-world tech skills.
                                <br />
                                Lifelong career acceleration.
                            </p>
                        </div> 
                        <div onClick={() => setOpenExp(!openExp)} id='content_btn'>Explore Programmes</div>
                        <ul id='content_btn_dropdown' className={openExp ? "openExp" : ""}>
                            {
                                programs.map(program => {
                                    return(
                                        <li  className={openExp ? "openExp" : ""} key={program}>{program}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className='partnership__wrapper'>
                <Partnership 
                text = "In partnership with"
                image1 = "https://assets-global.website-files.com/62de8b6b5cbf78a4f4c6a8ca/62dfbeba01149a9db2a4b868_Group%20555.png" 
                image2 = "https://cyberlab.pacific.edu/user/pages/03.courses/01.comp175/resources/aws-academy/Academy-Member-Institution-logo_color_405x180.png"
                />
            </div>
        </div>

        <div className='RegisterBanner_container'>
            <h1 className='banner_title'>
                Gain Career-Ready Skills to 
                <br />
                <span>Transform Your Digital Future</span>
            </h1>
            <div className='regist_collection'>
                <RegisterBanner 
                    image = {cloudImg}
                    start = "STARTING SOON"
                    text = "AWS Cloud Computing"
                    duration = "6 Months"
                    register = "Register Interest"
                    learn = "Learn more"
                />
                <RegisterBanner 
                    image = {cloudImg}
                    start = "STARTING SOON"
                    text = "AWS Cloud Computing"
                    duration = "6 Months"
                    register = "Register Interest"
                    learn = "Learn more"
                />
                <RegisterBanner 
                    image = {cloudImg}
                    start = "STARTING SOON"
                    text = "AWS Cloud Computing"
                    duration = "6 Months"
                    register = "Register Interest"
                    learn = "Learn more"
                />
                <RegisterBanner 
                    image = {cloudImg}
                    start = "STARTING SOON"
                    text = "AWS Cloud Computing"
                    duration = "6 Months"
                    register = "Register Interest"
                    learn = "Learn more"
                />
            </div>
        </div>
        <div className='second_Container'>
            <Unlock text = "Unlock Text" />
        </div>
    </div>
  );
}

export default Home;
