import About from './About'
import Family from './Family'
import Gallary from './Gallary'
import HeroImage from '../assets/profile-pic.jpg'

const data = {
  fullname: `FirstName SurName`,
  designation: `CREATIVE WEB & APP DEVELOPER`,
}

function Home() {
  return (
    <>
      <div className='mx-5 my-10 lg:mx-20 lg:my-20 flex flex-col lg:flex-row lg:justify-center lg:items-center'>
        <div className='lg:w-1/2'>
          <p className='uppercase font-extrabold text-2xl lg:text-4xl'>
            {data.fullname}
          </p>
          <p className='uppercase text-sm lg:text-2xl lg:my-5'>
            {data.designation}
          </p>
        </div>
        <div className='hero-banner my-10 lg:my-0'>
          <img className='w-full' src={HeroImage} alt='' />
        </div>
      </div>
      {window.location.pathname == '/' && (
        <div className='flex flex-col gap-10'>
          <About />
          <Family />
          <Gallary />
        </div>
      )}
    </>
  )
}

export default Home
