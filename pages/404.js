import Link from "next/link"

export default function Custom404() {
    return(
      <div className='bg-[#33312e] w-full min-h-screen flex flex-col items-center justify-center text-white'>
        <h1 className='text-2xl'>404 | Página não encontrada</h1>
        <Link href="/" passHref>
        <button className="m-5 border-2 border-white py-3 px-5 rounded-md text-white hover:border-[#3e6ac4] hover:text-[#3e6ac4]">
          Ir para Home
        </button>
      </Link>
      </div>
    )
  }