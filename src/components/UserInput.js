
export default function UserInput({setDocumento, documento}) {
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
					<button className='btn btn-primary' id='enviar-turno' type='submit'>
						CONTINUAR
					</button>
				</div>
			</div>
        </form>
    )
}