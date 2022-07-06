import React from 'react'

import '../ErrorAlerts/errorAlert.css'

const ErrorFetch = () => {
    	//Refresh page
	const refreshPage = () => {
		window.location.reload();
	}

  return (
    	    <div className='overlay-error'>
				<p className='errorAlertAdvice'>
						Error de conexión
					<button className='refresh-btn'
							onClick={refreshPage}>
							Volver
					</button>
				</p>
			</div>
        );
};

export default ErrorFetch