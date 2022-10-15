import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import BackHomeIcon from '../public/images/back-icon.png';


export default function About() {

    const xp1Ref = useRef()
    const xp1InView = useInView(xp1Ref)

    const xp2Ref = useRef()
    const xp2InView = useInView(xp2Ref)

    const xp3Ref = useRef()
    const xp3InView = useInView(xp3Ref)

    const xp4Ref = useRef()
    const xp4InView = useInView(xp4Ref)

    return (
        <>
            <div className="about-master">
                <div className="about-intro">
                    <motion.div initial={{ scale: 0.75, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.75, opacity: 0 }} transition={{ duration: 3 }} className="about-intro-wrapper">

                        <TypeAnimation sequence={['MAKE', 100, 'AKE', 100, 'AE', 100, 'A', 100,]} repeat={'infinity'} speed={70} cursor={false} wrapper="h1" />

                        <TypeAnimation sequence={['BEST', 110, 'BES', 100, 'BS', 100, 'B', 100,]} repeat={'infinity'} speed={70} cursor={false} wrapper="h1" />

                        <TypeAnimation sequence={['DIAMONDS', 120, 'DIAMONS', 100, 'DIMONS', 100, 'DIMOS', 100, 'IMOS', 100, 'IOS', 100, 'OS', 100, 'O', 100,]} repeat={'infinity'} speed={70} cursor={false} wrapper="h1" />

                        <TypeAnimation sequence={['BEAUTIFUL', 130, 'BEAUTIUL', 100, 'BEAUTIL', 100, 'BEAUTI', 100, 'BAUTI', 100, 'BUTI', 100, 'BUT', 100, 'UI', 100, 'U', 100, 'BEAUTIFUL', 130, 'BEAUTIUL', 100, 'BEAUTIL', 100, 'BEAUTI', 100, 'BAUTI', 100, 'BUTI', 100, 'BUT', 100, 'UI', 100, 'U', 100,]} speed={70} cursor={false} wrapper="h1" />

                        <TypeAnimation sequence={['THINK', 140, 'THIN', 100, 'THN', 100, 'TN', 100, 'T', 100, 'THINK', 140, 'THIN', 100, 'THN', 100, 'TN', 100, 'T', 100,]} speed={70} cursor={false} wrapper="h1" />

                        <TypeAnimation sequence={[' ', 500, '-', 500]} speed={70} cursor={false} wrapper="h1" repeat={1} />

                        <TypeAnimation sequence={[2000, 'MIND', 130, 'MID', 100, 'MI', 100, 'M', 100, , 'MIND', 130, 'MID', 100, 'MI', 100, 'M', 100,]} speed={70} cursor={false} wrapper="h1" />

                        <TypeAnimation sequence={[2000, 'PRESSURE', 140, 'RESSURE', 100, 'RESSUE', 100, 'RESUE', 100, 'REUE', 100, 'REE', 100, 'RE', 100, 'E', 100,]} speed={70} cursor={false} wrapper="h1" />

                    </motion.div>
                </div>

                <div className="word-about-me">
                    <div className="about-tab-heading">
                        <div></div>
                        <h1>A WORD ABOUT ME</h1>
                        <div></div>
                    </div>
                    <div className="about-main">
                        <div className="about-text">
                            <h3>I design and develop <strong>web, mobile applications, and backend infrastructures</strong>. Design and development help me to <span>free my creative mind</span> and allow me to satisfy my desire towards constant self-growth.</h3>
                        </div>
                        <div className="about-image">

                        </div>
                    </div>

                </div>

                <div className="work-xp-tab">
                    <div className="xp-tab-heading">
                        <div></div>
                        <h1>WORK EXPERIENCE</h1>
                        <div></div>
                    </div>
                    {/* TO MAKE A NEW EXPERIENCE, MAKE AND REPLACE INVIEW REFS  */}
                    <motion.div initial={{ opacity: xp1InView ? 1 : 0 }} animate={{ opacity: xp1InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }} className="experience">
                        <div className="xp-contents">
                            <h1>iQuasar Software Solutions</h1>
                            <h4 ref={xp1Ref}><span>FULL STACK DEVELOPER</span></h4>
                            <h5>3/10/2022 - CURRENT</h5>
                            <br />
                            <motion.p initial={{ y: xp1InView ? 10 : 0, opacity: xp1InView ? 0 : 0 }} animate={{ y: xp1InView ? 0 : 10, opacity: xp1InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.5, duration: 0.75 }}><sup>1. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                            <motion.p initial={{ y: xp1InView ? 10 : 0, opacity: xp1InView ? 0 : 0 }} animate={{ y: xp1InView ? 0 : 10, opacity: xp1InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.75, duration: 0.75 }}><sup>2. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                            <motion.p initial={{ y: xp1InView ? 10 : 0, opacity: xp1InView ? 0 : 0 }} animate={{ y: xp1InView ? 0 : 10, opacity: xp1InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 1, duration: 0.75 }}><sup>3. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                        </div>
                    </motion.div>

                    <div className="xp-outline">
                        <div className="xp-line"></div>
                        <div className="xp-img"></div>
                        <div className="xp-line"></div>
                    </div>

                    <motion.div initial={{ opacity: xp2InView ? 0 : 0 }} animate={{ opacity: xp2InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }} className="experience">
                        <div className="xp-contents">
                            <h1>Rational Tabs Technologies</h1>
                            <h4 ref={xp2Ref}><span>FRONT END DEVELOPER</span></h4>
                            <h5>5/01/2022 - 5/04/2022</h5>
                            <br />
                            <motion.p initial={{ y: xp2InView ? 10 : 0, opacity: xp2InView ? 0 : 0 }} animate={{ y: xp2InView ? 0 : 10, opacity: xp2InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.5, duration: 0.75 }}><sup>1. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                            <motion.p initial={{ y: xp2InView ? 10 : 0, opacity: xp2InView ? 0 : 0 }} animate={{ y: xp2InView ? 0 : 10, opacity: xp2InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.75, duration: 0.75 }}><sup>2. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                            <motion.p initial={{ y: xp2InView ? 10 : 0, opacity: xp2InView ? 0 : 0 }} animate={{ y: xp2InView ? 0 : 10, opacity: xp2InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 1, duration: 0.75 }}><sup>3. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                        </div>
                    </motion.div>

                    <div className="xp-outline">
                        <div className="xp-line"></div>
                        <div className="xp-img"></div>
                        <div className="xp-line"></div>
                    </div>
                    <motion.div initial={{ opacity: xp3InView ? 1 : 0 }} animate={{ opacity: xp3InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }} className="experience">
                        <div className="xp-contents">
                            <h1>FREELANCING</h1>
                            <h4 ref={xp3Ref}><span>UI/UX DESIGNER</span></h4>
                            <h5>2/05/2020 - 26/04/2021</h5>
                            <br />
                            <motion.p initial={{ y: xp3InView ? 10 : 0, opacity: xp3InView ? 0 : 0 }} animate={{ y: xp3InView ? 0 : 10, opacity: xp3InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.5, duration: 0.75 }}><sup>1. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                            <motion.p initial={{ y: xp3InView ? 10 : 0, opacity: xp3InView ? 0 : 0 }} animate={{ y: xp3InView ? 0 : 10, opacity: xp3InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.75, duration: 0.75 }}><sup>2. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                            <motion.p initial={{ y: xp3InView ? 10 : 0, opacity: xp3InView ? 0 : 0 }} animate={{ y: xp3InView ? 0 : 10, opacity: xp3InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 1, duration: 0.75 }}><sup>3. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                        </div>
                    </motion.div>

                    <div className="xp-outline">
                        <div className="xp-line"></div>
                        <div className="xp-img"></div>
                        <div className="xp-line"></div>
                    </div>

                    <motion.div initial={{ opacity: xp4InView ? 1 : 0 }} animate={{ opacity: xp4InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }} className="experience">
                        <div className="xp-contents">
                            <h1>Valley Mist</h1>
                            <h4 ref={xp4Ref}><span>UNITY 3D DEVELOPER</span></h4>
                            <h5>27/02/2018 - 20/08/2019</h5>
                            <br />
                            <motion.p initial={{ y: xp4InView ? 10 : 0, opacity: xp4InView ? 0 : 0 }} animate={{ y: xp4InView ? 0 : 10, opacity: xp4InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.5, duration: 0.75 }}><sup>1. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                            <motion.p initial={{ y: xp4InView ? 10 : 0, opacity: xp4InView ? 0 : 0 }} animate={{ y: xp4InView ? 0 : 10, opacity: xp4InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.75, duration: 0.75 }}><sup>2. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                            <motion.p initial={{ y: xp4InView ? 10 : 0, opacity: xp4InView ? 0 : 0 }} animate={{ y: xp4InView ? 0 : 10, opacity: xp4InView ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ delay: 1, duration: 0.75 }}><sup>3. </sup>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quas?</motion.p>
                        </div>
                    </motion.div>

                    <div className="about-end-heading">
                        <div></div>
                        <h1>THAT SUMS IT UP!</h1>
                        <div></div>
                    </div>
                    <div className="back-home">
                        <Link href={"/"}><Image src={BackHomeIcon} width={50} height={35} /></Link>
                        <Link href={"/"}>BACK TO HOME</Link>
                    </div>

                </div>

            </div>
        </>
    )
}
