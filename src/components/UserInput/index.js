import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function UserInput({ onChangeInput }) {
	const [inputValue, setInputValue] = useState('');

	const formSend = (e) => {
		e.preventDefault();
		onChangeInput(inputValue);
	};

	const inputChangeHandler = (event) => {
		setInputValue(event.target.value);
	};

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
