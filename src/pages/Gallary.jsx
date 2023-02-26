import Image1 from '../assets/gallary/pic-1.jpg'
import Image2 from '../assets/gallary/pic-2.jpg'
import Image3 from '../assets/gallary/pic-3.jpg'
import Image4 from '../assets/gallary/pic-4.jpg'

const images = [Image1, Image2, Image3, Image4]


//Do not change anything below this

function Gallary() {
  return (
    <div className='my-10 mx-2 lg:mx-20'>
      <div className='lg:w-1/2 lg:m-auto'>
        <p className='text-2xl font-bold text-center my-10 lg:text-3xl'>My Gallary</p>
      </div>
      <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-4 lg:justify-center lg:flex-wrap'>
        {images.map((image) => {
          return (
            <div key={image} className='lg:w-72'>
              <img className='rounded-md' src={image} alt='' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallary