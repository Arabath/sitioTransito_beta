import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserInput({setDocumento, documento}) {
	const [show, setShow] = useState(true)
    const formSend = (e) => {
        e.preventDefault();
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
						placeholder='Ingrese su DNI*'
						onChange={(e) => setDocumento(e.target.value)}
					/>
					<button onClick={() => setShow(!show)} className="toggle-btn">
						<FontAwesomeIcon className='icon-search' icon={faSearch} />
					</button>
					<div>
						Componente tabla con acordion aquí
					</div>
				</div>
			</div>
        </form>
    )
}