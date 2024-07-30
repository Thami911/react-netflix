import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/41cd1c4c-71f6-4370-b79c-74cb938b00d7/ZA-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f66df35-fbd8-426e-9b4e-3ced4bc3f46f_medium.jpg" alt='/' />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Liked Shows</h1>
      </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account