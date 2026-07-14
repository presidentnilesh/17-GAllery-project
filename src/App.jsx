import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  
  const getData = async ()=>{
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  } , [index])

  let printUserData = <h3 className='text-gray-300  text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length>0) {
    printUserData = (userData.map(function(elem , idx){
    return <div key={idx}>
      <Card elem={elem}/>
    </div>
    })
  
    )}

  return (
  
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
    <div className='relative flex h-[80%] flex-wrap gap-4 p-2'>
      {printUserData}
    </div>

    <div  
      style={{opacity:index == 1?0.5 : 1}}
      className='flex justify-center items-center gap-6 p-4'>
      <button onClick={()=>{
        if (index>1) {
            
          setUserData([])
          setIndex(index-1)
        }
      }} 
    className='rounded-2xl px-4 text-black bg-amber-300 font-semibold cursor-pointer active:scale-95'>
      Preview</button>
      <h2>Page {index}</h2>
    <button onClick={()=>{
      
      setUserData([])
      setIndex(index+1)
    }}
     className='rounded-2xl px-4 text-black bg-amber-300 font-semibold cursor-pointer active:scale-95'>
      Next</button>

    </div>
    </div>
  )

}

export default App