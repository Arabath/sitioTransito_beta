import React from "react";
import { faPrint, faEnvelope, faMoneyBill, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/tables.css';

class FetchMulta extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("http://testiis01.campana.gov.ar/campana/api/Rentas/Causas/20468120179")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "FetchInf">
			<table>
				<thead>
					<tr className="tabla-deuda">
						<th>Causa</th>
						<th>Año</th>
						<th>Acta</th>
						<th>Dominio</th>
						<th>Importe</th>
					</tr>
				</thead>
				<tbody>
				{
				items.map((item, index) => (
				<tr className="tabla-content" key = { index } >
					 <td>{ item.numeroCausa }</td>
					 <td>{ item.añoCausa }</td>
					 <td>{ item.numeroActa }</td>
					 <td>{ item.dominio }</td>
					 <td>{ item.importe }</td>
				</tr>
				))
				}
					<div className="botonera">
						<button className="btn-table-volver">
							<FontAwesomeIcon className="email-icon" icon={faBackward}/>Volver
						</button>

						<button className="btn-table">
							<FontAwesomeIcon className="email-icon" icon={faEnvelope}/>E-mail
						</button>

						<button className="btn-table">
							<FontAwesomeIcon className="print-icon" icon={faPrint}/>Imprimir
						</button>

						<button className="btn-table">
							<FontAwesomeIcon className="pay-icon" icon={faMoneyBill}/>Pagar
						</button>
					</div>
				</tbody>
			</table>
		</div>
	);
}
}

export default FetchMulta;
