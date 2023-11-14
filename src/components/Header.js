import React, { useContext, useState, useEffect } from 'react';
import { HeaderNavContext } from './HeaderNavContext';
import imgLogo from "../images/newAlxLogo.png";
import "./header.css";



function Header() {

  const {programmes}  = useContext(HeaderNavContext);
  const {admissions}  = useContext(HeaderNavContext);
  const {abouts}  = useContext(HeaderNavContext);
  const {medias}  = useContext(HeaderNavContext);

  const [openProg, setOpenProg] = useState(false);
  const [openAdmi, setOpenAdmi] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);

  useEffect(() => {
    let progHandler = () => {
      setOpenProg(false);
    };

    let admHandler = () => {
      setOpenAdmi(false);
    };

    let aboutHandler = () => {
      setOpenAbout(false);
    };

    let mediaHandler = () => {
      setOpenMedia(false);
    };
    document.addEventListener("mousedown", progHandler);
    document.addEventListener("mousedown", admHandler);
    document.addEventListener("mousedown", aboutHandler);
    document.addEventListener("mousedown", mediaHandler);
  });

  return (
    <div className='header_container'>
      <div className='bgdiv'></div>
      <div className='header'>
        <img className='alx_logo' src={imgLogo} alt='logo' ></img>
        <div className='main_header__Navs_wrapper'>
          <div className='program_wrapper'>
            <h3 onMouseEnter={() => setOpenProg(!openProg)} className='Nav__title'>PROGRAMMES</h3>
            {
              openProg && (
                <ul className='programmes_dop_wrapper'>
                  {
                    programmes.map((program) => {
                      return(
                        <li key={program.id}>{program.title}</li>
                      )
                    })
                  }
                </ul>
              )
            }
          </div>

          <div className='admission_wrapper'>
            <h3 onMouseEnter={() => setOpenAdmi(!openAdmi)} className='Nav__title'>ADMISSION</h3>
            {
              openAdmi && (
              <ul className='admission_dop_wrapper'>
                {
                  admissions.map(admission => {
                    return(
                      <li key={admission.id}>{admission.title}</li>
                    )
                  })
                }
              </ul>
              )
            }
          </div>

          <div className='abouts_wrapper'>
            <h3 onMouseEnter={() => setOpenAbout(!openAbout)} className='Nav__title'>ABOUT</h3>
            {
              openAbout && (
                <ul className='abouts_dop_wrapper'>
                  {
                    abouts.map(about => {
                      return(
                        <li key={about.id}>{about.title}</li>
                      )
                    })
                  }
                </ul>
              )
            }
          </div>

          <div className='media_wrapper'>
            <h3 onMouseEnter={() => setOpenMedia(!openMedia)} className='Nav__title'>MEDIA</h3>
            {
              openMedia && (
                <ul className='media_dop_wrapper'>
                  {
                    medias.map(media => {
                      return(
                        <li key={media.id}>{media.title}</li>
                      )
                    })
                  }
                </ul>
              )
            }
          </div>

        </div>
        <img className='master_card_logo' src='https://www.alxafrica.com/wp-content/uploads/2023/10/logo-mcf-white.svg' alt='mastercard' ></img>
      </div>
    </div>
  );
}

export default Header;
