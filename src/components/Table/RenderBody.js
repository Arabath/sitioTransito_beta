
import '../../Styles/tables.css'

const RenderBody = ({data,setCausa}) => {

  const seleccionar = (causa) => {
		setCausa(causa);
	};


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

export default RenderBody;