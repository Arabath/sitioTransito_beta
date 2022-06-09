import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/tables.css';
import FetchCuotas from "./FetchCuotas";


export default function FetchMulta() {

	const [data, setData] = useState([])
	const [causa, setCausa] = useState('')

	const getData = async () => {
		let url = 'http://testiis01.campana.gov.ar/campana/api/Rentas/Causas/20468120179'

		const response = await axios.get(url)
		console.log('response', response)
		setData(response.data)
	}

	useEffect(() => {
		getData()
	}, [])

	//renderizado de header tabla

	const renderHeader = () => {
		let headerElement = ['', 'causa', 'año', 'acta', 'dominio', 'importe']

		return headerElement.map((key, index) => {
			return <th
				className="tabla-deuda"
				key={index}>{key.toUpperCase()}
			</th>
		})
	}

	//renderizado de body tabla
	
	const seleccionar = causa => {

		setCausa(causa)
	}
	const renderBody = () => {
		return data && data.map((item, index) => {
			return (
				<tr className="tabla-content" key={index}>
					<td>
						<button className="btn btn-danger"
							onClick={() => seleccionar(item)}>
							Seleccionar
						</button>
					</td>
					<td>{item.numeroCausa}</td>
					<td>{item.añoCausa}</td>
					<td>{item.numeroActa}</td>
					<td>{item.dominio}</td>
					<td>${item.importe}</td>
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

			<br></br>
			{
				causa === '' ? <h1>SIN INFO</h1> : <FetchCuotas causa={causa} />
			}
		</>
	)
}