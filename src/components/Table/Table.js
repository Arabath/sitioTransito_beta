import { useState,useEffect } from "react";

import RenderHeader from "./RenderHeader";
import RenderBody from "./RenderBody";

import FetchMulta from '../../API/FetchMulta'
import FetchCuotas from '../../API/FetchCuotas'

import AccordionItem from '../Accordion/AccordionItem'

import '../../Styles/accordion.css'
import '../../Styles/tables.css'

const Table = ({dni,onFetch,onLoading}) => {
  const [data, setData] = useState([]);
  const [causa, setCausa] = useState('')


  const faqs = [
  {
    question: 'Deuda del contribuyente',
    answer: <FetchMulta dni={dni} onFetch={onFetch} onFetchData={setData} onLoading={onLoading} />,
  },
];


TODO:
useEffect(() => {
  console.log(dni)
}, [dni]);

const renderDesc = () => {
  return (
    data &&
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
    })
  );
};

  return (
		<>
			<table>
				<thead>
					<tr>
            <RenderHeader/>
          </tr>
				</thead>
				<tbody style={{border: '3px solid red'}}>
          <RenderBody data={data} setCausa={setCausa}/>
          <ul className='accordion' id='home'>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} faq={faq} />
            ))}
          </ul>
        </tbody>
			</table>

			<br></br>
			<div className='desc-container'>
				<p className='desc-title'>DESCRIPCIÓN</p>
				<div className='descripcion'>
					{renderDesc()}
				</div>
			</div>

			<br></br>
			{causa === '' ? null : <FetchCuotas causa={causa} />}
		</>
	);
}

export default Table;