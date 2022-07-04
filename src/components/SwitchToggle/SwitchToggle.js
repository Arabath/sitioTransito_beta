import React from 'react'
import './switch.css'

const SwitchToggle = ({ isOn, handleToggle }) => {
    return (
      <div style={{display: 'flex', height: '35px', padding: '0.1rem 0 0 0.5rem', alignItems: 'center'}}>

        <label className='switch'>
        <input
          defaultChecked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          type="checkbox"
        />
          <span className="slider round"></span>
        </label>

      </div>
    );
  };
  export default SwitchToggle;