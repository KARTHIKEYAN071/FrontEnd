import React from 'react'
import "./delete.css"

export default function Delete() {
  return (
    <div>
        <div className='contain'>
            <div className='del'>
               <div className='m'><h2>DELETE</h2></div> 
                <form>
            <div className='inputt'>
                <input type="number" placeholder='Enter Id'></input>
                <button type='submit'>SUBMIT</button>
            </div>
            </form>
            </div>
        </div>
    </div>
  )
}
