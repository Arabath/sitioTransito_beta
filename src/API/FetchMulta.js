import { useEffect } from 'react';
import axios from 'axios';

export default function FetchMulta({ dni, onFetch,onFetchData, onLoading}) {

	const getData = async (dni) => {
		if (dni) {
			try {
				let url = `http://testiis01.campana.gov.ar/campana/api/Rentas/Causas/${dni}`;
				const response = await axios.get(url);
				onLoading(true); // After spinner load

				if (response.data.length === 0 ){
					// setErrorData(true) Error not Found
				}else{
					console.log("Exito");
					onFetch()
					onFetchData(response.data)
					onLoading(false)
					}
			} catch (err) {
				// setErrorMessage(true); Error Fetch
      	onLoading(false); //hide the loading spinner as the API has already responded.
			}
		}
	};

	useEffect(() => {
		getData(dni);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dni]);
}
