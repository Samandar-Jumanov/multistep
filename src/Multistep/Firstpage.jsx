import React  from 'react'
import './multi.css'
const Multiform = () => {
 return (
    <div >
        <input type="text" placeholder='Name...' 
          className='box name '/>
         <br />
        <input type="text"  placeholder='enter email'
         className='box email' />
       <br />
    </div>
  )
}

export default Multiform