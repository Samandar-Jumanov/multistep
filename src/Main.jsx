import React, {useState} from 'react'
import './App.css'
import Company from './Multistep/Company'
import Dates from './Multistep/Dates'
import Multiform from './Multistep/Firstpage'


const Main = () => {
  const [page , setPage ] = useState(0)
  const [step , setStep   ] = useState(1)
  //Next Page Func 
  const getPage = () =>{
    setPage(page+1)
    setStep(step+1)
  }
  //Refreshing the page
  const RefreshPage = () =>{
    window.location.reload(true);
  }
  //Back btn Func
  const BackBtn= () =>{
    setPage(page-1)
    setStep(step-1)
  }
  //Declaring Buttons 
const nextPageBtn = <button  onClick={getPage}>Next</button>
const backPageBtn = <button onClick={BackBtn}>Back</button>
const refreshBtn = <button onClick={RefreshPage}>Refresh</button>

//Steps Condintional
const Steps = () =>{
  if(step ===1){
    return  nextPageBtn 
  } else if (step ===2 || step <4){
      return(
        <>
        {nextPageBtn}
        {backPageBtn}
        </>
      )
  }   else 
  {
    return  refreshBtn
  }
}
//Ended Logic here 
  return (
    <div>
 <div className="Container">
 <h1>Step:{step}</h1>
 {/* Showing Pages  */}
 {page ===0 && <Multiform/>}
 {page ===1 && <Company/>}
 {page ===2 && <Dates/>}
 <Steps/>
    </div>
    </div>
  )
}
export default Main