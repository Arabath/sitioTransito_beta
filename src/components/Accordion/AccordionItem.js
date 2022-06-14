import { useState } from 'react';
import { useRef } from 'react';

const AccordionItem = ({ faq }) => {
	const [clicked, setClicked] = useState(true);
	const contentEl = useRef();

	const { question, answer } = faq;

	const handleToggle = () => {
		setClicked((prev) => !prev);
	};

	return (
		<li className={`accordion_item ${clicked ? 'active' : ''}`}>
			<button className='button' onClick={handleToggle}>
				{question}
				<span className='control'>{clicked ? '—' : '+'} </span>
			</button>

			<div
				ref={contentEl}
				className='answer_wrapper'
				style={clicked ? { height: '500px' } : { height: '0' }}
			>
				<div className='answer'>{answer}</div>
			</div>
		</li>
	);
};

export default AccordionItem;
