import React from "react";

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
						<th>Numero Acta</th>
						<th>Numero Causa</th>
						<th>Año Causa</th>
						<th>Dominio</th>
						<th>Fecha</th>
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
					 <td>{ item.fecha }</td>
					 <td>{ item.importe }</td>
				</tr>
				))
				}
				</tbody>
			</table>
		</div>
	);
}
}

export default FetchMulta;
