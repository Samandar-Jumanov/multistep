import React, {useRef, useState} from 'react'


const Dates = () => {
  const [year , setYear] = useState()
  const [month , setMonth] = useState()
  const [day , setDay] = useState()
  //Refs 
  const monthRef = useRef(null)
  const dayRef = useRef(null)
  //Getyear func 
const getYear =(e)=>{
  setYear(e.target.value)
  if(year.length ===3){
    monthRef.current.focus()
  }
}
//getmonth
const getMonth = e =>{
        setMonth(e.target.value)
        if(month.length === 1){
          dayRef.current.focus()
        }
}

const getDays = e =>{
  setDay(e.target.value)
   if(day.length===2){
    setDay('')
   }
}
//Logic ends 
  return (
    <div>

        <input type="number"  placeholder='year'
        className='box year'onChange={getYear} value={year}/>
        <br />

        <input type="number"  placeholder='month'
        className='box month' ref={monthRef} onChange={getMonth} />
        <br />

        <input type="number"  placeholder='day'
        className='box day' ref={dayRef} onChange={getDays} value={day}/>

    </div>
  )
}

export default Dates