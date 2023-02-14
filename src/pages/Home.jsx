import HeroImage from '../assets/profile-pic.jpg'

function Home() {
  return (
    <div className='mx-5 my-10 flex flex-col'>
      <div>
        <p className='uppercase font-extrabold text-2xl font-[syne]'>
          FirstName SurName
        </p>
        <p className='uppercase text-sm font-[syne]'>
          CREATIVE WEB & APP DEVELOPER
        </p>
      </div>
      <div className='hero-banner my-10'>
        <img className='w-full' src={HeroImage} alt='' />
      </div>
    </div>
  )
}

export default Home