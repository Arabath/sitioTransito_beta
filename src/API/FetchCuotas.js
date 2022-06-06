import React from "react";

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
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "FetchCuota">
			<table>
				<thead>
					<tr className="tabla-cuotas">
						<th>Cuota</th>
						<th>Periodo</th>
						<th>Importe</th>
						<th>Recargo</th>
						<th>Total</th>
						<th>Estado</th>
						<th>Vencimiento</th>
					</tr>
				</thead>
                <tbody>
				{
				items.map((item, index) => (
				<tr key = { index } >
					 <td>{ item.cuotas.cuota }</td>
					 <td>{ item.cuotas.periodo }</td>
					 <td>{ item.cuotas.importeOriginal }</td>
					 <td>{ item.cuotas.recargo }</td>
					 <td>{ item.cuotas.total }</td>
					 <td>{ item.cuotas.estado }</td>
					 <td>{ item.cuotas.vencimiento }</td>
				</tr>
				))
				}
				</tbody>
			</table>
		</div>
	);
}
}

export default FetchCuotas;
