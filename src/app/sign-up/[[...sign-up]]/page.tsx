import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex justify-center pt-20 bg-gradient-to-br from-black to-gray-900'>
      <SignUp/>
    </div>
  )
}