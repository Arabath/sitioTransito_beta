import AccordionItem from '../Accordion/AccordionItem'
import FetchMulta from '../../API/FetchMulta';

const Body = ({dni,onFetch, onValidate}) => {
	const faqs = [
		{
			question: 'Deuda del contribuyente',
			answer: <FetchMulta dni={dni} onFetch={onFetch} onValidate={onValidate} />,
		},
	];

  return(
    <ul className='accordion' id='home'>
    {faqs.map((faq, index) => (
      <AccordionItem key={index} faq={faq} />
    ))}
  </ul>
  )
}

export default Body;