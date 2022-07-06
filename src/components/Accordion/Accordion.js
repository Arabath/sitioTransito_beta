import { useEffect } from 'react';

import Table from '../Table/Table';

import AccordionItem from '../Accordion/AccordionItem'
import FetchMulta from '../../API/FetchMulta';


import '../../Styles/accordion.css';

const Accordion = ({dni,onFetch,onLoading}) => {

  return(
		<>
			<Table dni={dni} onFetch={onFetch} onLoading={onLoading}/>
		</>
  )
}

export default Accordion;