import React from "react";

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
		fetch("http://localhost:3001/deudores")
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
						<th>N° Acta</th>
						<th>Causa</th>
						<th>Año</th>
						<th>Dominio</th>
						<th>Importe</th>
					</tr>
				</thead>
				<tbody>
				{
				items.map((item, index) => (
				<tr className="tabla-content" key = { index } >
					 <td>{ item.numeroActa }</td>
					 <td>{ item.numeroCausa }</td>
					 <td>{ item.añoCausa }</td>
					 <td>{ item.dominio }</td>
					 <td>{ item.importe }</td>
				</tr>
				))
				}
					<div className="botonera">
						<button className="btn-table-volver">Volver</button>
						<button className="btn-table">E-mail</button>
						<button className="btn-table">
							{/* <FontAwesomeIcon icon="fa-solid fa-print" /> */}
						Imprimir</button>

						<button className="btn-table">Pagar</button>
					</div>
				</tbody>
			</table>
		</div>
	);
}
}

export default FetchMulta;
