import { useState, useEffect, useRef } from 'react';
import UserInput from '../UserInput';
import '../../Styles/styles.css';
import Accordion from '../Accordion';

export default function Home() {
	const [dni, setDni] = useState('');
	
	const scrollToRef = ref => window.scrollTo({
		top: 400,
		behavior: 'smooth',
	})

	const myRef = useRef(null);
	const executeScroll = () => scrollToRef(myRef)

	const mainInputChangeHandler = (inputValue) => {
		setDni(inputValue);
	};

	useEffect(() => {
	}, [dni]);

	return (
		<div className='App__wrapper'>
			<div className='login__container'>
				<div className='login__logo'>
					<img
						src='https://mi.campana.gov.ar/Content/Images/logoLogin.svg'
						alt='login-logo'
					></img>
					<div className='userInputHolder'>
						<div  className='subtitle-section'>
							<h3 className='logo-subtitulo'>CONSULTA DE INFRACCIONES MUNICIPALES</h3>
							<UserInput onChangeInput={mainInputChangeHandler} />
						</div>
					</div>
					<div ref={myRef}>{dni && <Accordion dni={dni} onFetch={executeScroll} />}</div>
				</div>
			</div>
		</div>
	);
}
