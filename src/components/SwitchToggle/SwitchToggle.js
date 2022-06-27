import React from 'react'
import './switch.css'

const SwitchToggle = ({ isOn, handleToggle }) => {
    return (
      <>
        <label className='switch'>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          type="checkbox"
        />
          <span class="slider round"></span>
          
        </label>
        
      </>
    );
  };
  
  export default SwitchToggle;