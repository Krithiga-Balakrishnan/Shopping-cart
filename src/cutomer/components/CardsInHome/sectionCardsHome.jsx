import React from 'react'

const sectionCardsHome = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-black rounded-lg shadow-lg overflow-hidden w-[20rem] mx-3'>

<div className='h-[18rem] w-[10rem]'>
    <img className='object-cover object-top w-full h-full'src="https://lucafaloni.com/_next/image?url=https%3A%2F%2Flucafaloni.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F372_985e6b1d40-luca-faloni_versilia-linen-shirt_made-in-italy_sand_35384-copy-full.jpg&w=828&q=75" alt=""/>
</div>
<div className='p-4'>
    <h3 className='text-lg font-medium ☐ text-gray-900'>Versilia Shirt</h3>
    <p className='mt-2 text-sm text-gray-500'>LINEN</p>

</div>

    </div>
  )
}

export default sectionCardsHome