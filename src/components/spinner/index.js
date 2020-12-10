import React from 'react';
import './spinner.css';
import { Spinner as SpinnerB } from 'reactstrap';


const Spinner = () => {
  return (
    <div className="spinner-box" >
      <SpinnerB style={{width: "15vw", height:"15vw"}} color="primary" />
    </div>
  );
}

export default Spinner;
