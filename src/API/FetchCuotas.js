import React, { useState } from 'react'
import { faPrint, faEnvelope, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import SwitchToggle from '../components/SwitchToggle/SwitchToggle';
import '../Styles/tables.css';

export default function FetchCuotas(props) {
	const [checked, setChecked] = useState(true);
	// const [value, setValue] = useState(false);

	/*
	<SwitchToggle 
		isOn={value}
		handleToggle={() => setValue(!value)}
	/> 
	*/
	
		//renderizado de header tabla
	const renderHeader = () => {
		let headerElement = [ '','cuota', 'periodo', 'recargo', 'total', 'vto']
		
		return headerElement.map((key, index) => {
			return <th
				className="tabla-deuda"
				key={index}>{key.toUpperCase()}
			</th>
		})
	}

	//renderizado de body tabla
	const renderBody = () => {
		return props.causa.cuotas.map((item, index) => {
			// Parsing de fecha, excluye hora
			let formattedDate = new Date(item.vencimiento)
			.toLocaleString('es-BA', {day: 'numeric', month:'numeric', year:'numeric'})

			return (
				<tr className="tabla-content" key={index}>
					<td>
						<input type="checkbox"
							defaultChecked={checked}
							onChange={() => setChecked(!checked)}
						/>
					</td>
					<td>{item.cuota}</td>
					<td>{item.periodo}</td>
					<td>${item.recargo}</td>
					<td>${item.total}</td>
					<td>{formattedDate}</td>
				</tr>
			)
		})
	}

	return (
		<>
			<table>
				<thead>
					<tr>{renderHeader()}</tr>
				</thead>
				<tbody>
					{renderBody()}
				</tbody>
			</table>

			{/* Sección Botonera */}
			<div className="botonera">
				<button className="btn-table">
					<FontAwesomeIcon className="email-icon" icon={faEnvelope} /> E-mail
				</button>

				<button className="btn-table">
					<FontAwesomeIcon className="print-icon" icon={faPrint} /> Imprimir
				</button>

				<button className="btn-table">
					<FontAwesomeIcon className="pay-icon" icon={faMoneyBill} /> Pagar
				</button>
			</div>
		</>
	)
}