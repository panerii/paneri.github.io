const about = {
  aboutDetail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nobis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, odio.`
}

const data = [
  {
    cardId: 0,
    card: [
      {
        id: 0,
        field: `Birth Date:`,
        detail: `1st January 1996`,
      },
      {
        id: 1,
        field: `Birth Place:`,
        detail: `United States`,
      },
      {
        id: 2,
        field: `Age:`,
        detail: `27 years old`,
      },
    ],
  },
  {
    cardId: 1,
    card: [
      {
        id: 0,
        field: `Weight:`,
        detail: `150 pounds`,
      },
      {
        id: 1,
        field: `Height:`,
        detail: `5'10"`,
      },
      {
        id: 2,
        field: `Complexion:`,
        detail: `Fair`,
      },
    ],
  },
  {
    cardId: 2,
    card: [
      {
        id: 0,
        field: `Blood Group:`,
        detail: `o+`,
      },
      {
        id: 1,
        field: `Caste:`,
        detail: `My Caste`,
      },
      {
        id: 2,
        field: `Religion:`,
        detail: `Christan`,
      },
    ],
  },
  {
    cardId: 3,
    card: [
      {
        id: 0,
        field: `Languages Known:`,
        detail: `English, French, german`,
      },
      {
        id: 1,
        field: `Address:`,
        detail: `Canada`,
      },
      {
        id: 2,
        field: `Education:`,
        detail: `Graduate`,
      },
    ],
  },
  {
    cardId: 4,
    card: [
      {
        id: 0,
        field: `Occupation:`,
        detail: `Buisness`,
      },
      {
        id: 1,
        field: `Hobbies:`,
        detail: `Traveling,
          Hiking, Foodie, Binge Watching, Shopping, Reading`,
      },
    ],
  },
]

//Do not change anything below this

function About() {
  return (
    <div className='mx-5 my-10 lg:mx-20 lg:flex lg:items-center lg:justify-between lg:gap-x-10'>
      <div className='lg:w-1/2'>
        <p className='text-2xl font-bold lg:text-4xl'>About me</p>
        <p className='text-lg my-5 lg:text-2xl'>{about.aboutDetail}</p>
      </div>

      <div className='cards flex mx-auto flex-col justify-center items-center my-10 gap-4 lg:w-3/4 lg:flex-wrap lg:flex-row'>
        {data.map((cards) => {
          return (
            <div
              key={cards.cardId}
              className='bg-white text-sm h-40 text-black rounded-md px-4 py-2 capitalize w-full font-semibold lg:w-[18rem]'
            >
              {cards.card.map((data) => {
                return (
                  <p key={data.id} className='my-4'>
                    <span className='text-gray-600 mr-2 uppercase'>
                      {data.field}
                    </span>
                    {data.detail}
                  </p>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About
