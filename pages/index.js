import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function Home() {

  const [inputValue, setInputValue] = useState('')

 

  return (  
    <div className='bg-[#33312e] w-full min-h-screen flex flex-col items-center justify-center'>
     <h1 className='text-5xl mb-8 text-white'>Git Search!</h1>


    <form>
     <div className='w-full md:w-[800px] flex flex-col gap-2 items-center'>
     <input className='w-[90%] py-3 px-5 rounded-md outline-none' placeholder='Digite um nome de usuário...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
     <Link href={`/user/${inputValue.toLocaleLowerCase()}`}>
     <button className='w-[90%] border-2 border-white py-3 px-5 rounded-md text-white hover:border-[#3e6ac4] hover:text-[#3e6ac4]' type='submit'>VER GITHUB</button>
     </Link>
     </div>
     </form>


    </div>


  )
}

export default Home


