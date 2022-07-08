import { useState, useEffect, useRef } from 'react';

import ErrorAlert from '../ErrorAlerts/ErrorAlert';
import ErrorFetch from '../ErrorAlerts/ErrorFetch';
import LoadingSpinner from '../Spinner/LoadingSpinner'

import UserInput from '../UserInput';

import Main from '../Main/main';

import '../../Styles/styles.css';

export default function Home() {
	const [dni, setDni] = useState('');
	const [errorFetch, setErrorFetch] = useState(false); //Error Fetch
	const [errorData,setErrorData] = useState(false) //Error Not Found
	const [isLoading, setIsLoading] = useState(false) //Spinner


	const scrollToRef = ref => window.scrollTo({
		top: 400,
		behavior: 'smooth',
	})

	const myRef = useRef(null);

	const executeScroll = () => scrollToRef(myRef)

	const mainInputChangeHandler = (inputValue) => {
		setDni(inputValue);
	};

	return (
		<div className='app__container' >
			<div className='login__wrapper' >
				<div className='login__logo'>
					<img
						src='https://mi.campana.gov.ar/Content/Images/logoLogin.svg'
						alt='login-logo'
					></img>
				</div>
				<div className='userInputHolder'>
					<div  className='subtitle-section'>
						<h3 className='logo-subtitulo'>CONSULTA DE INFRACCIONES MUNICIPALES</h3>

						<UserInput onChangeInput={mainInputChangeHandler} />

						{isLoading && <LoadingSpinner />}
						{errorFetch && <ErrorAlert/>}
						{errorData && <ErrorFetch/>}

					</div>
				</div>
					<div className={isLoading ? 'display-none' : ''}>
						<Main dni={dni} 
						      onFetch={executeScroll} 
							  onLoading={setIsLoading} 
							  onErrorFetch={setErrorFetch} 
							  onErrorData={setErrorData}
						/>
					</div>
					<div ref={myRef}></div>
			</div>
		</div>
	);
}