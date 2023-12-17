import { useState } from 'react'
import './App.css'
import './comp1'
import './comp2'
import './comp3'
import './left_comp'
import './right_comp'



import Nam from './comp1'
import Para from './comp2'
import Left_side from './left_comp'
import Right_side from './right_comp'




function App() {

  return (

    <div>
      <Nam></Nam>
      <div className='row'>
        <div className='left'>
          <Left_side></Left_side>
        </div>
        <div className='right'>
          <Para></Para>
          <Right_side></Right_side>
        </div>

      </div>

    </div>

  )
}

export default App
