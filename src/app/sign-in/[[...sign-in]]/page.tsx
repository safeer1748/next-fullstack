"use client"
import { SignIn} from '@clerk/nextjs'

export default function Page() {
 return (
     <div className='flex justify-center pt-20 bg-gradient-to-br from-black to-gray-900'>
       <SignIn />
     </div>
   )
}