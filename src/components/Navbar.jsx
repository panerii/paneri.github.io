import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <div className='mx-5 my-4 items-center flex justify-between lg:mx-14 lg:mt-5'>
        <div>
          <p className='text-4xl font-bold'>Portfolio</p>
        </div>
        <div
          className='w-10 h-10 bg-white rounded-full relative text-black justify-center text-center flex items-center text-3xl font-bold cursor-pointer z-20'
          onClick={() => setToggle(!toggle)}
        >
          <p className='-mt-1'>{toggle ? '=' : 'x'}</p>
        </div>
      </div>
      {!toggle && (
        <div className='z-10 w-1/2 lg:w-[15rem] h-screen absolute top-0 right-0 bg-white text-black text-lg font-[syne] font-semibold'>
          <ul className='absolute right-1/4 top-1/4 text-center'>
            <Link
              onClick={() => {
                setToggle(!toggle)
              }}
              to={'/'}
            >
              <li className='my-10'>Home</li>
            </Link>
            <Link
              onClick={() => {
                setToggle(!toggle)
              }}
              to={'/about'}
            >
              <li className='my-10'>About Me</li>
            </Link>
            <Link
              onClick={() => {
                setToggle(!toggle)
              }}
              to={'/family'}
            >
              <li className='my-10'>Family</li>
            </Link>
            <Link
              onClick={() => {
                setToggle(!toggle)
              }}
              to={'/gallary'}
            >
              <li className='my-10'>Gallary</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
