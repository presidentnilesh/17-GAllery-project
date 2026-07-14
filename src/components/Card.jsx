import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.download_url} target='_blank' rel='noreferrer' className='block'>
        <div className='h-40 w-44 overflow-hidden rounded-2xl'>
          <img className='h-full w-full object-cover' src={props.elem.download_url} alt='' />
        </div>
        <h2 className='mt-2 rounded-3xl bg-white/10 px-2 py-1 text-sm font-semibold text-white'>
          {props.elem.author}
        </h2>
      </a>
    </div>
  )
}

export default Card