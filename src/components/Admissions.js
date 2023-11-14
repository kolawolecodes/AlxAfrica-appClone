import React from 'react';


function Admissions({admission}) {
  return (
    <div className='admissions'>
      <li>
         <div className='admission__links'>{admission.title}</div>
      </li>
    </div>
  );
}

export default Admissions;
