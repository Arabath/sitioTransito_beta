import AccordionItem from './AccordionItem';
import '../../Styles/accordion.css';
import FetchMulta from '../../API/FetchMulta';

const Accordion = ({ dni }) => {
	const faqs = [
		{
			question: 'Deuda del vehículo',
			answer: <FetchMulta dni={dni} />,
		},
	];

	return (
		<ul className='accordion'>
			{faqs.map((faq, index) => (
				<AccordionItem key={index} faq={faq} />
			))}
		</ul>
	);
};

export default Accordion;
