import { useState, useEffect } from 'react';
import UserInput from '../UserInput';
import '../../Styles/styles.css';
import Accordion from '../Accordion';

export default function Home() {
	const [dni, setDni] = useState('');

	const mainInputChangeHandler = (inputValue) => {
		setDni(inputValue);
	};

	useEffect(() => {
		// Filtrado del componente FetchMulta
		// dni && console.log(dni);
	}, [dni]);

	return (
		<div className='App__wrapper'>
			<div className='login__container'>
				<div className='login__logo'>
					<img
						src='https://mi.campana.gov.ar/Content/Images/logoLogin.svg'
						alt='login-logo'
					></img>
					<div className='subtitle-section'>
						<h3 className='logo-subtitulo'>CONSULTA DE INFRACCIONES MUNICIPALES</h3>
						<UserInput onChangeInput={mainInputChangeHandler} />
					</div>
					<div>{dni && <Accordion dni={dni} />}</div>
				</div>
			</div>
		</div>
	);
}
