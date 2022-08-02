import React, { useState, useRef } from 'react'
import { faPrint, faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import '../../Styles/tables.css'
import { Epagos } from '../../services/Epagos';

export default function FetchCuotas({causa}) {

	//# Detalle de descripcion de la causa
	const descripcion = causa.descripcion
	//console.log(descripcion)
	//console.log(causa)

	//# Array filtrado con todos los value de los checkbox checked
	const cuotasSelected = [100,200,300,400]

	////# Funcion que sumtodos los indices del array cuotasSelected a
	const finalValue = cuotasSelected.reduce((x,y)=> x+y)
	
	const [value, setValue] = useState(false);

	// const refInput = useRef([]);

		//renderizado de header tabla
	const renderHeader = () => {
		let headerElement = [ '','cuota', 'periodo', 'recargo', 'total', 'vto']

		return headerElement.map((key, index) => {
			return (
			<th
				className="tabla-deuda"
				defaultChecked={true}
				onChange={() => setValue(!value)}
				key={index}>{key.toUpperCase()}
			</th>
			)
		})
	}

	const onHandleToggle = () => {
		setValue(!value)
		refInput.current.forEach((element)=> element.checked = !value)
	}

	//renderizado de body tabla
	const renderBody = () => {
		return causa.cuotas.map((item, index) => {

			console.log(causa.descripcion)
			

			// Parsing de fecha, excluye hora
			let formattedDate = new Date(item.vencimiento)
			.toLocaleString('es-BA', {day: 'numeric', month:'numeric', year:'numeric'})

			const cuotasuma = Number(item.cuota)+1 //quitar en prod.

			return (
				<tr className="tabla-content" key={index}>
					<td>
						<input type="checkbox" ref={ref => (refInput.current[index] = ref)}
						/>
					</td>
					<td>{cuotasuma}</td>
					<td>{item.periodo}</td>
					<td>${item.recargo}</td>
					<td>${item.total}</td>
					<td>{formattedDate}</td>
				</tr>
				
			)
		})
	}

	//Refresh page
	const refreshPage = () => {
		window.location.reload();
	}

	return (
		<>
			<div className='switch-container'>
			<SwitchToggle
				isOn={value}
				handleToggle={onHandleToggle}
				/>
			</div>
			<table >
				<thead>
					<tr>{renderHeader()}</tr>
				</thead>
				<tbody>
					{renderBody()}
				</tbody>
			</table>

			{/* Sección Botonera */}
			<div className="botonera">
				<button className="btn-table"  onClick={refreshPage}>
					<FontAwesomeIcon className="email-icon" icon={faBackwardStep}/> Volver
				</button>

				<button className="btn-table">
					<FontAwesomeIcon className="print-icon" icon={faPrint} /> Imprimir
				</button>	
				
				{/* COMPONENTE BOTON EPAGOS */}
				<div className="btn-epagos-cont">
					<Epagos description={descripcion} totalValue={finalValue}/>
				</div>

			</div>
		</>
	)
}