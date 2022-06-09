import React from 'react'
import { faPrint, faEnvelope, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/tables.css';

export default function FetchCuotas(props) {

	//renderizado de header tabla

	const renderHeader = () => {
		let headerElement = ['', 'cuota', 'periodo', 'recargo', 'total', 'vto']

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
			return (
				<tr className="tabla-content" key={index}>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>{item.cuota}</td>
					<td>{item.periodo}</td>
					<td>${item.recargo}</td>
					<td>${item.total}</td>
					<td>{item.vencimiento}</td>
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