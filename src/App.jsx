import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  
  const getData = async ()=>{
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=17`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  } , [index])

  let printUserData = <h3 className='text-gray-300  text-xl '>No USer Avalialble </h3>

  if (userData.length>0) {
    printUserData = (userData.map(function(elem , idx){
    return <div key={idx}>
     <a href={elem.download_url} target='_blank'>
       <div className='h-40 w-44 overflow-hidden rounded-2xl '>
      <img className= 'h-full w-full object-cover ' src={elem.download_url} alt="" />
    </div>
    <h2 className=' rounded-3xl text-balck text-lg font-bold '>{elem.author}</h2>
     </a>
    </div>
    })
  
    )}

  return (
  
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h2 className='fixed text-xl'>{index}</h2>
    <div className='flex flex-wrap gap-4 p-2'>
      {printUserData}
    </div>
    <div  className='flex justify-center items-center gap-6 p-4'>
    <button onClick={()=>{
      if (index>1) {
              
        setIndex(index-1)
        }
    }} className='rounded-2xl px-4 text-black bg-amber-300 font-semibold cursor-pointer active:scale-95'>Preview</button>
    <button onClick={()=>{
      
      setIndex(index+1)
    }} className='rounded-2xl px-4 text-black bg-amber-300 font-semibold cursor-pointer active:scale-95'>Next</button>

    </div>
    </div>
  )

}

export default App