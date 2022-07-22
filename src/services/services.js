import { useEffect } from 'react';
import axios from 'axios';

export default function Services({ dni, onFetchData, onLoading, onErrorFetch,onErrorData}) {

	const getData = async (dni) => {
		if (dni) {
			try {
				let url = `http://testiis01.campana.gov.ar/campana/api/Rentas/Causas/${dni}`;
				onLoading(true); // After spinner load
				const response = await axios.get(url);
				if (response.data.length === 0 ){
					onErrorFetch(true)
				}else{
					console.log("Exito");
					onFetchData(response.data)
					onLoading(false)
					}
			} catch (err) {
				onErrorData(true)
      	onLoading(false); //hide the loading spinner as the API has already responded.
			}
		}
	};

	useEffect(() => {
		getData(dni);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dni]);
} 