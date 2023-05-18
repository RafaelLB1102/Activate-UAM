import { Inter } from 'next/font/google'
import Navbar from './Components/NavBar'
import { useSession, signIn, signOut } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Index.module.css';


export default function Home () {

  const { data: session } = useSession()

  return (

    <>
      <Navbar />
      <div className={ `${styles.height} d-flex justify-content-center align-items-center` }>
        <div className={ styles.card }>
          {
            session 
              ? (
                <>
                  <span>Signed in as <strong>{ session.user.email }</strong></span>
                  <button className={ styles.buttonOut } onClick={ () => signOut() }>Sign out</button>
                </>
              )
              : (
                <>
                  <span>Not signed in</span>
                  <button className={ styles.buttonIn } onClick={() => signIn()}>Sign in</button>
                </>
              )
          }
        </div>
      </div>
    </>
  )
}
