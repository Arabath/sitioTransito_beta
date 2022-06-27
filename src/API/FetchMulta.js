import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/tables.css';
import FetchCuotas from './FetchCuotas';
import LoadingSpinner from '../components/Spinner/LoadingSpinner';

export default function FetchMulta({ dni, onFetch }) {
	const [data, setData] = useState([]);
	const [causa, setCausa] = useState('');
	const [isLoading, setIsLoading] = useState(false); //spinner load
	const [errorMessage, setErrorMessage] = useState(""); //Error display 

	const getData = async (dni) => {
		if (dni) {
			try {
				setIsLoading(true); //spinner load
				let url = `http://testiis01.campana.gov.ar/campana/api/Rentas/Causas/${dni}`;
				const response = await axios.get(url);
				setData(response.data);
				onFetch()
				setIsLoading(false); // After spinner load
			} catch (err) {
				console.log('Error de conexión');
				setErrorMessage("DNI no posee registros");
      			setIsLoading(false); //hide the loading spinner as the API has already responded.
			}
		}
	};
	
	useEffect(() => {
		getData(dni);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dni]);

	//render header tabla
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

	const seleccionar = (causa) => {
		setCausa(causa);
	};
	
	//render body tabla
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
					<table>
						<tr className='tabla-descripcion' key={index}>
							<>
								{item.descripcion}
							</>
						</tr>
					</table>
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
			{isLoading ? <LoadingSpinner /> : renderBody} {/* Spinner */}
			{errorMessage && <div className="error">{errorMessage}</div>} {/* Error display  */}
		</>
	);
}
