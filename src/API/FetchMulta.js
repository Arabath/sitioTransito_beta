import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/tables.css';
import FetchCuotas from './FetchCuotas';

export default function FetchMulta({ dni, onFetch }) {
	const [data, setData] = useState([]);
	const [causa, setCausa] = useState('');

	const getData = async (dni) => {
		if (dni) {
			try {
				let url = `http://testiis01.campana.gov.ar/campana/api/Rentas/Causas/${dni}`;
				const response = await axios.get(url);
				setData(response.data);
				onFetch()
			} catch (err) {
				console.log('Error de conexión');
			}
		}
	};

	useEffect(() => {
		getData(dni);
	}, [dni]);

	//renderizado de header tabla
	const renderHeader = () => {
		let headerElement = ['', 'causa', 'año', 'acta', 'dominio'];

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
							<button className='btn-detalle' onClick={() => seleccionar(item)}>
								Detalle
							</button>
						</td>
						<td>{item.numeroCausa}</td>
						<td>{item.añoCausa}</td>
						<td>{item.numeroActa}</td>
						<td>{item.dominio}</td>
					</tr>
				);
			})
		);
	};

	const renderDesc = () => {
		return (
			data &&
			data.map((item, index) => {
				return (
					<tr className='tabla-descripcion' key={index}>	
						<div>
							{item.descripcion}
						</div>
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
			<div className='desc-container'>
				<p className='desc-title'>DESCRIPCIÓN</p>
				<div className='descripcion'>
					{renderDesc()}
				</div>
			</div>

			<br></br>
			{/* eslint-disable */}
			{causa === '' ? <h1></h1> : <FetchCuotas causa={causa} />}
		</>
	);
}
