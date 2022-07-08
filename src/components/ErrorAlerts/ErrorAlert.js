import React from 'react'

import '../ErrorAlerts/errorAlert.css'

const ErrorAlert = () => {
  	//Refresh page
	const refreshPage = () => {
		window.location.reload();
	}

  return (
    <div className='registerErrorOverlay'>
        <div className='errorAlert'>
            Registro Inexistente
            <button className='refresh-btn'
									onClick={refreshPage}>
									Volver
							</button>
        </div>
    </div>
  )
};

export default ErrorAlert
