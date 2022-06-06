import { useState } from 'react';
import UserInput from './UserInput';
import '../Styles/styles.css';


export default function Home() {
	const [documento, setDocumento] = useState('');

	return (
			<div className='App__wrapper'>
				<div className='login__container'>
					<div className='login__logo'>
						<img
							src='https://mi.campana.gov.ar/Content/Images/logoLogin.svg'
							alt='login-logo'>
						</img>
						<div className="subtitle-section">
							<h3 className='logo-subtitulo'>CONSULTA DE INFRACCIONES MUNICIPALES</h3>
							<UserInput setDocumento={setDocumento} documento={documento} />
						</div>
					</div>
				</div>
			</div>	
	);
}