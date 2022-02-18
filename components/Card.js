import React from 'react';
import Image from 'next/image';

function Card(props) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img src="https://source.unsplash.com/random" alt='Viral' className='w-full' />
    </div>
  )
}

export default Card;
