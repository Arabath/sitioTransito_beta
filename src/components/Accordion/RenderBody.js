import { useState, useEffect } from 'react';

import '../../Styles/tables.css'

const RenderBody = ({data,setCausa, onFetch}) => {
const [clicked, setClicked] = useState(false)


useEffect(() => {
  onFetch()
  // eslint-disable-next-line 
}, [clicked])


  const seleccionar = (causa) => {
    setCausa(causa);
    setClicked(true)
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