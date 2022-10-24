import Image from "next/image";
import uxLogo from '/public/images/ux-circle.png'
import scaleWeb from '/public/images/web.png'
import stateMech from '/public/images/state-machine.png'
import cloudReady from '/public/images/cloud.png'
import phoneIcon from '/public/images/phone.png'
import instagramIcon from '/public/images/instagram.png'
import linkedinIcon from '/public/images/linkedin.png'
import gmailIcon from '/public/images/gmail.png'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Hero() {

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className="hero-master-container">
                <div className="section-right">
                    <div className="intro">
                        {/* <TypeAnimation sequence={'Hi.'} repeat={99} cursor={false} wrapper="h1" speed={50}></TypeAnimation>
                    <TypeAnimation sequence={'I AM HASEEB'} repeat={99} cursor={false} speed={50} wrapper="h1"></TypeAnimation> */}
                        <h1>Hi.</h1>
                        <h1>I AM HASEEB</h1>
                        <TypeAnimation sequence={'FULL STACK WEB & APP DEVELOPER'} repeat={99} speed={50} cursor={false} wrapper="h5" />
                        {/* <h5>FULL STACK WEB & APP DEVELOPER</h5> */}
                    </div>

                    <div className="stats">
                        <div className="open-source">
                            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 15, opacity: 0 }} transition={{ delay: 1, duration: 1 }}><span>+40</span></motion.h1>
                            <h5>OPEN SOURCE CONTRIBUTIONS</h5>
                        </div>
                        <div className="xp">
                            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 15, opacity: 0 }} transition={{ delay: 1, duration: 1 }}>+ 1</motion.h1>
                            <h5>YEARS OF EXPERIENCE</h5>
                        </div>
                        {/* <div className="projects">
                            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 15, opacity: 0 }} transition={{ delay: 1, duration: 1 }}>8</motion.h1>
                            <h5>PROFESSIONAL PROJECTS</h5>
                        </div> */}
                    </div>

                    <div className="skills">
                        <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 15, opacity: 0 }} transition={{ delay: 2, duration: 1 }} className="skill1">
                            <Image src={uxLogo} width={25} height={25} />
                            <TypeAnimation sequence={'Can develop Consistent and Well Structured User Interfaces and Designs.'} repeat={99} speed={30} cursor={false} wrapper="h5"></TypeAnimation>
                            {/* <h5>Can develop Consistent and Well Structured User Interfaces and Designs.</h5> */}
                        </motion.div>
                        <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 15, opacity: 0 }} transition={{ delay: 2, duration: 1.25 }} className="skill2">
                            <Image src={scaleWeb} width={25} height={25} />
                            <TypeAnimation sequence={'Can build Scalable and Responsive Web and Native Mobile Apps.'} repeat={99} speed={30} cursor={false} wrapper="h5"></TypeAnimation>
                            {/* <h5>Can build Scalable and Responsive Web and Native Mobile Apps.</h5> */}
                        </motion.div>
                        <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 15, opacity: 0 }} transition={{ delay: 2, duration: 1.5 }} className="skill3">
                            <Image src={stateMech} width={25} height={25} />
                            <TypeAnimation sequence={'Can build Structured and Bulletproof State-Management Systems.'} repeat={99} speed={30} cursor={false} wrapper="h5"></TypeAnimation>
                            {/* <h5>Can build Structured and Bulletproof State-Management Systems.</h5> */}
                        </motion.div>
                        <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 15, opacity: 0 }} transition={{ delay: 2, duration: 1.75 }} className="skill4">
                            <Image src={cloudReady} width={25} height={25} />
                            <TypeAnimation sequence={'Can produce very Consistent, Bug-Free, and Production-Ready Systems.'} repeat={99} speed={30} cursor={false} wrapper="h5"></TypeAnimation>
                            {/* <h5>Can produce very Consistent, Bug-Free, and Production-Ready Systems </h5> */}
                        </motion.div>
                    </div>
                </div>

                <div className="section-left">

                    <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 15, opacity: 0 }} transition={{ delay: 3, duration: 1 }} className="works">
                        <h1>
                            <Link href={'/Projects'}>
                                WORKS
                            </Link>
                        </h1>
                    </motion.div>
                    <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 15, opacity: 0 }} transition={{ delay: 3.5, duration: 1 }} className="about">
                        <h1>
                            <Link href={'/About'}>
                                ABOUT
                            </Link>
                        </h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 4, duration: 1 }} className="contact">
                        <h1>CONTACT ME</h1>
                        <div className="contact-options">
                            <div className="call-btn">
                                <a href="tel:9797055883">
                                    <Image src={phoneIcon} width={20} height={20} />
                                    <h4>CALL ME</h4>
                                </a>
                            </div>
                            <a href="https://www.linkedin.com/in/haseebqureshiishere/">
                                <Image src={linkedinIcon} width={20} height={20} />
                            </a>
                            <a href="mailto:qureshihaxeeb2@gmail.com">
                                <Image src={gmailIcon} width={20} height={17} />
                            </a>
                            <a href="https://www.instagram.com/haseebxqureshi/">
                                <Image src={instagramIcon} width={20} height={20} />
                            </a>
                        </div>

                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}
