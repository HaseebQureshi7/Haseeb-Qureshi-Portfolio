import { motion, useInView } from 'framer-motion'
import Image from 'next/image';
import PashForPash from '../public/images/projects/passforpash.jpg';
import Zeymal from '../public/images/projects/Zeymal-banner.jpg';
import BackHomeIcon from '../public/images/back-icon.png';
import Link from 'next/link';
import { useRef } from 'react';

export default function Projects() {

  const proj1ViewRef = useRef()
  const proj1InView = useInView(proj1ViewRef)

  const proj2ViewRef = useRef()
  const proj2InView = useInView(proj2ViewRef)

  return (
    <>
      <div className="projects-master">
        <div className="project-heading">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}><span>WORKS</span></motion.h1>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="projects-tab">
          <div className="projects-tab-heading">
            <h1>ALL PROJECTS</h1>
            <div></div>
          </div>

          {/* ZEYMAL */}
          <motion.div initial={{ x: proj1InView ? 50 : 0, opacity: proj1InView ? 0 : 1 }} animate={{ x: proj1InView ? 0 : 50, opacity: proj1InView ? 1 : 0 }} exit={{ x: proj1InView ? 50 : 0, opacity: proj1InView ? 0 : 1 }} transition={{ duration: 0.5, }} className="project">
            <div className="project-stats">

              <div className="project-head">
                <h1><span>ZEYMAL EDUCATIONAL ERP</span></h1>
              </div>

              <motion.div initial={{ y: proj1InView ? 50 : 0, opacity: proj1InView ? 0 : 1 }} animate={{ y: proj1InView ? 0 : 50, opacity: proj1InView ? 1 : 0 }} exit={{ y: proj1InView ? 50 : 0, opacity: proj1InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} ref={proj1ViewRef} className="project-description">
                <h5>An expert Educational Management Software Solution
                  by <span>RationalTabs Technologies</span> Private Limited suitable for different types of Educational Institutions.</h5>
              </motion.div>
              <motion.div initial={{ x: proj1InView ? 50 : 0, opacity: proj1InView ? 0 : 1 }} animate={{ x: proj1InView ? 0 : 50, opacity: proj1InView ? 1 : 0 }} exit={{ x: proj1InView ? 50 : 0, opacity: proj1InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} className="project-bullets">
                <ul>
                  <li><sup>1.</sup> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, voluptates.</li>
                  <li><sup>2.</sup> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, voluptates.</li>
                  <li><sup>3.</sup> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, voluptates.</li>
                </ul>
              </motion.div>

            </div>
            <motion.div initial={{ x: proj1InView ? -50 : 0, opacity: proj1InView ? 0 : 1 }} animate={{ x: proj1InView ? 0 : -50, opacity: proj1InView ? 1 : 0 }} exit={{ x: proj1InView ? -50 : 0, opacity: proj1InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.5 }} style={{ backgroundImage: `url(${Zeymal.src})` }} className="project-image">
              <div className="project-name-wrapper">
                <a href="https://zeymal.com">ZEYMAL</a>
              </div>
            </motion.div>
          </motion.div>

          {/* PASSIONATE FOR PASHMINA */}
          <motion.div initial={{ x: proj2InView ? 50 : 0, opacity: proj2InView ? 0 : 1 }} animate={{ x: proj2InView ? 0 : 50, opacity: proj2InView ? 1 : 0 }} exit={{ x: proj2InView ? 50 : 0, opacity: proj2InView ? 0 : 1 }} transition={{ duration: 0.5, }} className="project">
            <div className="project-stats">

              <div className="project-head">
                <h1><span>PASSIONATE FOR PASHMINA</span></h1>
              </div>

              <motion.div initial={{ y: proj2InView ? 50 : 0, opacity: proj2InView ? 0 : 1 }} animate={{ y: proj2InView ? 0 : 50, opacity: proj2InView ? 1 : 0 }} exit={{ y: proj2InView ? 50 : 0, opacity: proj2InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} ref={proj2ViewRef} className="project-description">
                <h5>A luxury clothing company, founded by <span>Syed Fuzail</span>, a Kashmiri-NewZealand based luxury brand that is known for their quality of pure pashmina products.</h5>
              </motion.div>
              <motion.div initial={{ x: proj2InView ? 50 : 0, opacity: proj2InView ? 0 : 1 }} animate={{ x: proj2InView ? 0 : 50, opacity: proj2InView ? 1 : 0 }} exit={{ x: proj2InView ? 50 : 0, opacity: proj2InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} className="project-bullets">
                <ul>
                  <li><sup>1.</sup> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, voluptates.</li>
                  <li><sup>2.</sup> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, voluptates.</li>
                  <li><sup>3.</sup> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, voluptates.</li>
                </ul>
              </motion.div>

            </div>
            <motion.div initial={{ x: proj2InView ? -50 : 0, opacity: proj2InView ? 0 : 1 }} animate={{ x: proj2InView ? 0 : -50, opacity: proj2InView ? 1 : 0 }} exit={{ x: proj2InView ? -50 : 0, opacity: proj2InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.5 }} style={{ backgroundImage: `url(${PashForPash.src})` }} className="project-image">
              <div className="project-name-wrapper">
                <a href="https://www.passionateforpashmina.co.nz/">PASSIONATE</a>
              </div>
            </motion.div>
          </motion.div>

          {/* TO ADD MORE PROJECTS, ADD INVIEW REFS AND INLINE STYLES FOR IMAGE */}

          <div className="projects-end-heading">
            <div></div>
            <h1>MORE PROJECTS OTW!</h1>
            <div></div>
          </div>
          <div className="back-home">
            <Link href={""}><Image src={BackHomeIcon} width={50} height={35} /></Link>
            <a href={"/"}>BACK TO HOME</a>
          </div>
        </motion.div>
      </div>
    </>
  )
}
