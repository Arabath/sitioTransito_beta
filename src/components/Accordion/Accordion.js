import { useState, useEffect } from "react";

import Services from '../../services/Services'

import AccordionItem from '../Accordion/AccordionItem'

import '../../Styles/accordion.css'

const Accordion = ({dni,onFetch,onLoading,onErrorFetch,onErrorData}) => {
  const [data, setData] = useState([]);
  const [causa, setCausa] = useState('')
  const [newData, setNewData] = useState([])

  const filteredArray = []
  
  useEffect(() => {
  data.map((item,index) => {
    filteredArray.push({
        description: item.descripcion, 
        valor: item.cuotas[index].total})
  })
  setNewData(filteredArray)
  console.log(newData)
}, [data])


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
                         newData={newData}
          />
        ))}
      </ul>
		</div>
	);
}

export default Accordion;