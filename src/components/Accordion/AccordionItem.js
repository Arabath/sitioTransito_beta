import { useState } from 'react';
import { useRef } from 'react';

import Table from '../Table/Table'

const AccordionItem = ({ faq, data, causa, setCausa, onFetch}) => {
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
				style={clicked ? { height: 'auto' } : { height: '0' }}
			>
				<div className='answer'>{answer}</div>
			<Table onFetch={onFetch} data={data} causa={causa} setCausa={setCausa}/>
			</div>
		</li>
	);
};

export default AccordionItem;
