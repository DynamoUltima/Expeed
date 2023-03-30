import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {


//  const {data:userSession}=  useSession()
// console.log(session)

//  if(session?.user.token){

//  }


  return (
    <SessionProvider session={session} baseUrl='http://localhost:8080'>
    
      <Component {...pageProps} />
    </SessionProvider>
  )
}
export default MyApp
