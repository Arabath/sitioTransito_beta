// import { useState } from 'react';
// import axios from 'axios';

// export const GetData = async (dni) => {
//     const [data, setData] = useState([]);
//     if (dni) {
//         try {
//             let url = `http://testiis01.campana.gov.ar/campana/api/Rentas/Causas/${dni}`;
//             // let url = 'http://localhost:3001/deudores/'; (endpoint de prueba local.)

//             const response = await axios.get(url);

//             setData(response.data);
//         } catch (err) {
//             console.log('Error de conexión');
//         }
//     }
// };
