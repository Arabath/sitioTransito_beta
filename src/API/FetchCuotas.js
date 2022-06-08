import React from "react";
import '../Styles/tables.css';
import { faPrint, faEnvelope, faMoneyBill, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FetchCuotas extends React.Component {
	
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
			<h1> Loading... </h1> </div> ;

		return (
		<div className = "FetchCuota">
			<table>
				<thead>
					<tr className="tabla-cuotas">
						<th>
							<input type="checkbox"></input>
						</th>
						<th>Cuota</th>
						<th>Periodo</th>
						<th>Importe</th>
						<th>Recargo</th>
						<th>Total</th>
						<th>Vto</th>
					</tr>
				</thead>
                <tbody>
				{
				items[0].cuotas.map((item, index) => (
				<tr key = { index } >
					<th>
						 <input type="checkbox"></input>
					</th>	
					<td>{ item.cuota }</td>
					<td>{ item.periodo }</td>
					<td>{ item.importeOriginal }</td>
					<td>{ item.recargo }</td>
					<td>{ item.total }</td>
					<td>{ item.vencimiento }</td>
				</tr>
				))
				}
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
		</div>
	);
}
}

export default FetchCuotas;
