import Head from 'next/head'
import { useEffect, useState } from 'react'
import HomePage from './home/Homepage';
// import Landing from './landing/Landing'

export default function Home() {

  const [landDur, setLandDur] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLandDur(!landDur)
    }, 5000)
  }, [])

  return (
    <div className='master'>
      <Head>
        <title>HASEEB QURESHI</title>
        <meta name="description" content="HASEEB QURESHI | FULL STACK WEB & APP DEVELOPER | JavaScript, React Native, React.js, Next.js, Python, Django, Backend Infrastructures, and Project Modelling" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomePage />
      </div>
    </div>
  )
}
