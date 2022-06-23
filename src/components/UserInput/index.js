import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import LoadingSpinner from '../Spinner/LoadingSpinner';

export default function UserInput({ onChangeInput, isLoading }) {


	const [inputValue, setInputValue] = useState('');

	const formSend = (e) => {
		e.preventDefault();
		onChangeInput(inputValue);
	};

	const inputChangeHandler = (event) => {
		setInputValue(event.target.value);
	};

	// const element = document.getElementById("home");
	// element.scrollIntoView({block: "end", behavior: "smooth"});

	return (
		<form onSubmit={formSend} noValidate>
			<div className='form-component'>
				<div>
					<input
						id='documento'
						className='form-control'
						name='documento'
						type='text'
						value={inputValue}
						placeholder={'Ingrese dni'}
						onChange={inputChangeHandler}
					/>

					<button className='toggle-btn' type='submit'>
						<FontAwesomeIcon className='icon-search' icon={faSearch} />
					</button>
				</div>
			</div>
		</form>
	);
}
