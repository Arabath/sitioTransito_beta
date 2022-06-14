import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/tables.css';
import FetchCuotas from './FetchCuotas';

export default function FetchMulta({ dni }) {
	const [data, setData] = useState([]);
	const [causa, setCausa] = useState('');

	const getData = async (dni) => {
		{
			if (dni) {
				try {
					// let url = `http://testiis01.campana.gov.ar/campana/api/Rentas/Causas/${dni}`;
					let url = 'http://localhost:3001/deudores/';

					const response = await axios.get(url);

					setData(response.data);
				} catch (err) {
					console.log('Error de conexión');
				}
			}
		}
	};

	useEffect(() => {
		getData(dni);
		console.log(`Dni: ${dni}`);
		console.log(data);
	}, [dni]);

	//renderizado de header tabla

	const renderHeader = () => {
		let headerElement = ['', 'causa', 'año', 'acta', 'dominio', 'importe'];

		return headerElement.map((key, index) => {
			return (
				<th className='tabla-deuda' key={index}>
					{key.toUpperCase()}
				</th>
			);
		});
	};

	//renderizado de body tabla

	const seleccionar = (causa) => {
		setCausa(causa);
	};
	const renderBody = () => {
		return (
			data &&
			data.map((item, index) => {
				return (
					<tr className='tabla-content' key={index}>
						<td>
							<button className='btn btn-danger' onClick={() => seleccionar(item)}>
								Seleccionar
							</button>
						</td>
						<td>{item.numeroCausa}</td>
						<td>{item.añoCausa}</td>
						<td>{item.numeroActa}</td>
						<td>{item.dominio}</td>
						<td>${item.importe}</td>
					</tr>
				);
			})
		);
	};

	return (
		<>
			<table>
				<thead>
					<tr>{renderHeader()}</tr>
				</thead>
				<tbody>{renderBody()}</tbody>
			</table>

			<br></br>
			{/* eslint-disable */}
			{causa === '' ? <h1></h1> : <FetchCuotas causa={causa} />}
		</>
	);
}
