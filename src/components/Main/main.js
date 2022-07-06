import {useEffect} from 'react'

import Accordion from '../Accordion/Accordion';

const Main = ({dni,onFetch, onLoading}) =>{

  // TODO:
  // useEffect(() => {
	// 	console.log(dni)
	// }, [dni]);

  { if(dni){
    return (
      <>
        <Accordion dni={dni} onFetch={onFetch} onLoading={onLoading}/>
      </>
    )}
  }
}

export default Main;