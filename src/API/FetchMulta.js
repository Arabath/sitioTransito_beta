import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { faPrint, faEnvelope, faMoneyBill, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/tables.css';


export default function FetchMulta() {

  const [data, setData] = useState([])
  
  const getData = async () => {
    let url = 'http://testiis01.campana.gov.ar/campana/api/Rentas/Causas/20468120179'

    const response = await axios.get(url)
    console.log('response', response)
    setData(response.data)
}


    useEffect(() => {
        getData()
}, []) 


const renderHeader = () => {
    let headerElement = ['causa', 'año', 'acta', 'dominio', 'importe']

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

const renderBody = () => {
    return data && data.map((item, index) => {
        return (
            <tr className="tabla-content" key = { index }>
                <td>{ item.numeroCausa }</td>
				<td>{ item.añoCausa }</td>
				<td>{ item.numeroActa }</td>
				<td>{ item.dominio }</td>
				<td>${ item.importe }</td>
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
		<div className="botonera">
					<button className="btn-table-volver">
						<FontAwesomeIcon className="email-icon" icon={faBackward}/> Volver
					</button>

					<button className="btn-table">
						<FontAwesomeIcon className="email-icon" icon={faEnvelope}/> E-mail
					</button>

					<button className="btn-table">
						<FontAwesomeIcon className="print-icon" icon={faPrint}/> Imprimir
					</button>

					<button className="btn-table">
						<FontAwesomeIcon className="pay-icon" icon={faMoneyBill}/> Pagar
					</button>
				</div>
    </>
)

}