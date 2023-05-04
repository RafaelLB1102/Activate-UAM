import { Inter } from 'next/font/google'
import  Navbar  from './Components/NavBar'
import { useSession, signIn, signOut } from "next-auth/react"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session } = useSession()

  if(session) {
    return (
      <div>
        <Navbar/>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div>
        <Navbar/>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
