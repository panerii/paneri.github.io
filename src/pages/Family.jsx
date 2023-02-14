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

function Family() {
  return (
    <div className='mx-5 my-10 flex sm:flex-col'>
      <div className=''>
        <p className='text-2xl font-bold'>My Family</p>
        <p className='text-lg mt-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          odio non distinctio doloribus animi eius exercitationem numquam est
          culpa fugiat.
        </p>
      </div>

      <div className='flex gap-4 justify-center items-center my-10 sm:flex-col'>
        {data.map((data) => {
          return (
            <div
              key={data.id}
              className='con rounded-lg relative h-[25vh] w-full text-black bg-white text-center'
            >
              <div className='w-full h-full flex justify-center items-center'>
                <p className='block uppercase text-2xl font-bold'>
                  {data.field}
                </p>
              </div>
              <div className='absolute bg-white overlay hover:opacity-100 flex justify-center items-center top-0 bottom-0 left-0 right-0 h-full w-full opacity-0'>
                <p className='absolute uppercase text-xl font-bold'>
                  {data.detail}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Family
