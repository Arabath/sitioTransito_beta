import RenderHeader from "../Accordion/RenderHeader";
import RenderBody from "../Accordion/RenderBody";

import FetchCuotas from './FetchCuotas'

import '../../Styles/tables.css'

const Table = ({data,causa,setCausa, onFetch, newData}) => {

  console.log(data)

  return(
		<>
			<table >
				<thead>
					<tr>
            <RenderHeader/>
          </tr>
				</thead>
				<tbody>
          <RenderBody onFetch={onFetch} data={data} setCausa={setCausa}/>

        </tbody>
			</table>

			<br></br>

			<div className='desc-container'>
				<p className='desc-title'>DESCRIPCIÓN</p>
				<div className='descripcion'>
          {data &&
            data.map((item, index) => {
              return (
                <table>
                  <tr className='tabla-descripcion' key={index}>
                    <>
                      {item.descripcion}
                    </>
                  </tr>
                </table>
              );
            })}
				</div>
			</div>

			<br></br>

      <div>
			{causa === '' ? null : <FetchCuotas causa={causa} newData={newData}/>}
      </div>
		</>
  )
}

export default Table;