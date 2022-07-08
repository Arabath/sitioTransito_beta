import { useState,useEffect } from "react";

import Services from '../../services/Services'

import AccordionItem from '../Accordion/AccordionItem'

import '../../Styles/accordion.css'

const Accordion = ({dni,onFetch,onLoading,onErrorFetch,onErrorData}) => {
  const [data, setData] = useState([]);
  const [causa, setCausa] = useState('')


  const faqs = [
  {
    question: 'Deuda del contribuyente',
    answer: <Services dni={dni} 
                      onFetchData={setData} 
                      onLoading={onLoading} 
                      onErrorFetch={onErrorFetch} 
                      onErrorData={onErrorData} 
            />,
  },
];


TODO:
// useEffect(() => {
//   console.log(dni)
// }, [dni]);


  return (
		<div>
      <ul className='accordion' id='home'>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} 
                         faq={faq} 
                         onFetch={onFetch} 
                         data={data} 
                         causa={causa} 
                         setCausa={setCausa} 
          />
        ))}
      </ul>
		</div>
	);
}

export default Accordion;