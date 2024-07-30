import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <>
     <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/41cd1c4c-71f6-4370-b79c-74cb938b00d7/ZA-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f66df35-fbd8-426e-9b4e-3ced4bc3f46f_medium.jpg" alt='/' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
               <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                {error ? <p className='p-3 bg-red-700 my-2'>{error}</p> : null}
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-500 rounded' type='email' placeholder='Email' autoComplete='email' />
                    <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-500 rounded' type='password' placeholder='Password' autoComplete='current-password' />
                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                    <div className='flex justify-between items-center text-sm text-gray-400'>
                        <p><input className='mr-2' type='checkbox'/>Remember me</p>
                        <p>Need Help?</p>
                    </div>
                    <p className='py-7'><span className='text-gray-400'>New to Netflix?</span>{' '}<Link to='/signup'>Sign Up</Link></p>
                </form>
               </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Login