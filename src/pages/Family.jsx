const about = {
  aboutFamily: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint et minima commodi omnis assumenda! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, vel.`,
}

const contact = {
  mobile: '+01-123-456-7890',
  email: 'example@gmail.com',
}

const data = [
  {
    id: 0,
    field: `Mother's name`,
    detail: `laura williams`,
  },
  {
    id: 1,
    field: `mother's occupation`,
    detail: `marketing`,
  },
  {
    id: 2,
    field: `Maternal Grandfather's Name`,
    detail: `john doe`,
  },
  {
    id: 3,
    field: `Address`,
    detail: `united states`,
  },
  {
    id: 4,
    field: `Siblings`,
    detail: `brother, sister`,
  },
]

//Do not change anything below this


function Family() {
  return (
    <>
      <div className='mx-5 my-10 flex flex-col lg:mx-20 lg:mt-20 lg:flex-row lg:justify-between lg:items-center'>
        <div className='lg:w-1/2'>
          <p className='text-2xl font-bold lg:text-3xl'>My Family</p>
          <p className='text-lg mt-5 lg:text-xl'>{about.aboutFamily}</p>
        </div>

        <div className='flex gap-4 justify-center items-center my-10 flex-col lg:flex-row lg:flex-wrap lg:w-auto'>
          {data.map((data) => {
            return (
              <div
                key={data.id}
                className='con rounded-lg relative h-[20vh] w-full text-black bg-white text-center lg:w-56'
              >
                <div className='rounded-lg w-full h-full flex justify-center items-center'>
                  <p className='block uppercase text-xl font-bold p-2 lg:text-lg'>
                    {data.field}
                  </p>
                </div>
                <div className='rounded-md absolute text-white bg-black overlay hover:opacity-100 flex justify-center items-center top-0 bottom-0 left-0 right-0 h-full w-full opacity-0'>
                  <p className='absolute uppercase text-xl font-bold p-2 lg:text-lg'>
                    {data.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='text-center my-10 bg-white text-black py-4'>
        <p className='text-3xl font-bold'>Contact</p>
        <div className='flex flex-col gap-5 my-5 text-lg font-semibold mx-5 lg:flex-row lg:justify-center lg:items-center lg:gap-10'>
          <p>
            Mobile:
            <a href='tel:+01-123-456-7890'> {contact.mobile} </a>
          </p>
          <p>
            Email:
            <a href='mailto:example@gmail.com'> {contact.email} </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Family
