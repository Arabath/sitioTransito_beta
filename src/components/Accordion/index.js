import AccordionItem from './AccordionItem';
import '../../Styles/accordion.css';
import FetchMulta from '../../API/FetchMulta';
//import UserInput from '../UserInput';

const Accordion = ({ dni, onFetch }) => {
	const faqs = [
		{
			question: 'Deuda del vehículo',
			answer: <FetchMulta dni={dni} onFetch={onFetch} />,
		},
	];

	return (
		<ul className='accordion' id='home'>
			{faqs.map((faq, index) => (
				<AccordionItem key={index} faq={faq} />
			))}
		</ul>
	);
};

export default Accordion;
