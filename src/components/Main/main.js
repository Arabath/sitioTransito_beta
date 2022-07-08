import Accordion from '../Accordion/Accordion';

const Main = ({dni,onFetch, onLoading,onErrorFetch,onErrorData}) =>{

  { if(dni){
    return (
      <div>
        <Accordion dni={dni} 
                   onFetch={onFetch} 
                   onLoading={onLoading} 
                   onErrorFetch={onErrorFetch} 
                   onErrorData={onErrorData}
        />
      </div>
    )}
  }
}

export default Main;