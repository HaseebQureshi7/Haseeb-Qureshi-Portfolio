import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import Hero from "./sections/Hero"

export default function HomePage() {

    const [greetings, setGreetings] = useState(true)

    useState(() => {
        setTimeout(() => {
            setGreetings(!greetings)
        }, 3000)
    }, [])

    return (
        <motion.div initial={{ opacity: 0, size: 0.75 }} animate={{ opacity: 1, size: 1 }} exit={{ opacity: 0, size: 1.5 }} transition={{ duration: 1 }} className="Landing-master">

            <AnimatePresence mode="wait">
                {greetings === true ? <motion.div key={greetings} initial={{ scale: 0.90, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }} className="greetings">
                    {/* <TypeAnimation sequence={[1000, 'WELCOME', 100, 'WELCOM', 100, 'WELCO', 100, 'WELC', 100, 'WEL', 100, 'WE', 100, 'W', 100]} speed={30} cursor={false} wrapper="h1"></TypeAnimation>
                    <TypeAnimation sequence={[1000, 'WELCOME', 100, 'WELCOM', 100, 'WELCO', 100, 'WELC', 100, 'WEL', 100, 'WE', 100, 'E', 100]} speed={30} cursor={false} wrapper="h1"></TypeAnimation>
                    <TypeAnimation sequence={[1000, 'WELCOME', 100, 'WELCOM', 100, 'WELCO', 100, 'WELC', 100, 'WEL', 100, 'EL', 100, 'L', 100]} speed={30} cursor={false} wrapper="h1"></TypeAnimation>
                    <TypeAnimation sequence={[1000, 'WELCOME', 100, 'WELCOM', 100, 'WELCO', 100, 'WELC', 100, 'WEC', 100, 'LC', 100, 'C', 100]} speed={30} cursor={false} wrapper="h1"></TypeAnimation>
                    <TypeAnimation sequence={[1000, 'WELCOME', 100, 'WELCOM', 100, 'WELCO', 100, 'WECO', 100, 'WEO', 100, 'WO', 100, 'O', 100]} speed={30} cursor={false} wrapper="h1"></TypeAnimation>
                    <TypeAnimation sequence={[1000, 'WELCOME', 100, 'WELCOM', 100, 'WELCM', 100, 'WEOM', 100, 'WEM', 100, 'EM', 100, 'M', 100]} speed={30} cursor={false} wrapper="h1"></TypeAnimation>
                    <TypeAnimation sequence={[1000, 'WELCOME', 100, 'WELCOE', 100, 'WELCE', 100, 'WELE', 100, 'WEE', 100, 'WE', 100, 'E', 100]} speed={30} cursor={false} wrapper="h1"></TypeAnimation> */}
                    <TypeAnimation sequence={['Hi', 100, '.Hi.', 100,]} speed={30} cursor={false} wrapper="h1" repeat={999}></TypeAnimation>
                </motion.div> : <Hero key={greetings} />
                }
            </AnimatePresence>

        </motion.div>
    )
}