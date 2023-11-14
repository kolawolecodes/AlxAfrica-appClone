import React from 'react';
import "./partnership.css";



function Partnership(props) {
  return (
    <div className='partnership'>
      <h3 className='partnership_text'>{props.text}</h3>
      <ul className='partner__image'>
          <li className=''>
            <img className='aIxeploreImg' src={props.image1} alt="cloud" />
          </li>
          <li>
            <img className='awsImg' src={props.image2} alt="cloud2" />
          </li>
      </ul>
    </div>
  );
}

export default Partnership;
