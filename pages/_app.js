import '../styles/masterStyles.scss'
import './home/homeStyles.scss'
import '../styles/projectStyles.scss'
import '../styles/aboutStyles.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={router.asPath}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
