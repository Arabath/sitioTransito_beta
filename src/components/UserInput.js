import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from '../components/Accordion'

export default function UserInput({onChangeInput, documento}) {
	const [show, setShow] = useState(true)
    const formSend = e => {
        e.preventDefault();
    };

		const buttonClickHandler = event => {
			onChangeInput(event)
			setShow(!show)
		}

    return (
        <form onSubmit={formSend} noValidate>
					<div className='form-component'>
						<div>
							<input
								id='documento'
								className='form-control'
								name='documento'
								type='text'
								placeholder='Ingrese su DNI*'
								onChange={buttonClickHandler}
							/>

							<button className="toggle-btn" type='submit'>
								<FontAwesomeIcon className='icon-search' icon={faSearch} />
							</button>
							<div>
								<Accordion />
							</div>
						</div>
					</div>
        </form>
    )
}