import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  
  const getData = async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setUserData(response.data)
    console.log(response.data)
  }
  return (
  
    <div className='bg-black h-screen p-4 text-white'>
      <button onClick={getData} className='m-4 rounded px-5 py-2 mb-3 active:scale-95 bg-green-600 text-white'>GetData</button>

    </div>

  )
}

export default App