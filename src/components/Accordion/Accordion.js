import { useState,useEffect } from 'react';

import Body from '../Body/Body';

import '../../Styles/accordion.css';


const Accordion = ({ dni, onFetch }) => {
const [validDni, setValidDni] = useState(true);

	useEffect(() => {
		console.log(validDni)
	}, [validDni]);

	return (
		<Body dni={dni} onFetch={onFetch} onValidate={setValidDni}/>
		// <ul className='accordion' id='home'>
		// 	{faqs.map((faq, index) => (
		// 		<AccordionItem key={index} faq={faq} />
		// 	))}
		// </ul>
	);
};

export default Accordion;
