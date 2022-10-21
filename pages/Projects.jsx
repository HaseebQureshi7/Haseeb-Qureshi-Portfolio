import { motion, useInView } from 'framer-motion'
import Image from 'next/image';
import Zeymal from '../public/images/projects/Zeymal-banner.jpg';
import PashForPash from '../public/images/projects/passforpash.jpg';
import EaseWork from '../public/images/projects/easework.gif';
import onlyIdentity from '../public/images/projects/only-identity.gif';
import hiam from '../public/images/projects/hiam.gif';
import budgetory from '../public/images/projects/budgetory.gif';
import BackHomeIcon from '../public/images/back-icon.png';
import Link from 'next/link';
import { useRef } from 'react';

export default function Projects() {

  const proj1ViewRef = useRef()
  const proj1InView = useInView(proj1ViewRef)

  const proj2ViewRef = useRef()
  const proj2InView = useInView(proj2ViewRef)

  const proj3ViewRef = useRef()
  const proj3InView = useInView(proj3ViewRef)

  const proj4ViewRef = useRef()
  const proj4InView = useInView(proj4ViewRef)

  const proj5ViewRef = useRef()
  const proj5InView = useInView(proj5ViewRef)

  const proj6ViewRef = useRef()
  const proj6InView = useInView(proj6ViewRef)

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
                  <li><sup>1.</sup> Developed over 250 pages for the new version of ZEYMAL.</li>
                  <li><sup>2.</sup> Built interactive prototypes for ZEYMAL WEB.</li>
                  <li><sup>3.</sup> Designed page layouts and forms for ZEYMAL.</li>
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
                  <li><sup>1.</sup> Designed the whole website from scratch.</li>
                  <li><sup>2.</sup> Implemented my own animation system in the site.</li>
                  <li><sup>3.</sup> Performed SEO and page optimizations for this website.</li>
                </ul>
              </motion.div>

            </div>
            <motion.div initial={{ x: proj2InView ? -50 : 0, opacity: proj2InView ? 0 : 1 }} animate={{ x: proj2InView ? 0 : -50, opacity: proj2InView ? 1 : 0 }} exit={{ x: proj2InView ? -50 : 0, opacity: proj2InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.5 }} style={{ backgroundImage: `url(${PashForPash.src})` }} className="project-image">
              <div className="project-name-wrapper">
                <a href="https://www.passionateforpashmina.co.nz/">PASSIONATE</a>
              </div>
            </motion.div>
          </motion.div>


          {/* EASEWORK */}
          <motion.div initial={{ x: proj3InView ? 50 : 0, opacity: proj3InView ? 0 : 1 }} animate={{ x: proj3InView ? 0 : 50, opacity: proj3InView ? 1 : 0 }} exit={{ x: proj3InView ? 50 : 0, opacity: proj3InView ? 0 : 1 }} transition={{ duration: 0.5, }} className="project">
            <div className="project-stats">

              <div className="project-head">
                <h1><span>EASEWORK</span></h1>
              </div>

              <motion.div initial={{ y: proj3InView ? 50 : 0, opacity: proj3InView ? 0 : 1 }} animate={{ y: proj3InView ? 0 : 50, opacity: proj3InView ? 1 : 0 }} exit={{ y: proj3InView ? 50 : 0, opacity: proj3InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} ref={proj3ViewRef} className="project-description">
                <h5>EASEWORK is a free and open-source educational erp system, developed by <span>Haseeb Qureshi</span>, carries out school and college management tasks.</h5>
              </motion.div>
              <motion.div initial={{ x: proj3InView ? 50 : 0, opacity: proj3InView ? 0 : 1 }} animate={{ x: proj3InView ? 0 : 50, opacity: proj3InView ? 1 : 0 }} exit={{ x: proj3InView ? 50 : 0, opacity: proj3InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} className="project-bullets">
                <ul>
                  <li><sup>1.</sup> School admins can use this for management purposes.</li>
                  <li><sup>2.</sup> Accessible design for ease of use and convenience.</li>
                  <li><sup>3.</sup> Helpful for small schools that can&apos;t pay for an enterprise ERP system.</li>
                </ul>
              </motion.div>

            </div>
            <motion.div initial={{ x: proj3InView ? -50 : 0, opacity: proj3InView ? 0 : 1 }} animate={{ x: proj3InView ? 0 : -50, opacity: proj3InView ? 1 : 0 }} exit={{ x: proj3InView ? -50 : 0, opacity: proj3InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.5 }} style={{ backgroundImage: `url(${EaseWork.src})` }} className="project-image">
              <div className="project-name-wrapper">
                <a href="https://easework.vercel.app/">EASEWORK</a>
              </div>
            </motion.div>
          </motion.div>

          {/* ONLY-IDENTITY */}
          <motion.div initial={{ x: proj4InView ? 50 : 0, opacity: proj4InView ? 0 : 1 }} animate={{ x: proj4InView ? 0 : 50, opacity: proj4InView ? 1 : 0 }} exit={{ x: proj4InView ? 50 : 0, opacity: proj4InView ? 0 : 1 }} transition={{ duration: 0.5, }} className="project">
            <div className="project-stats">

              <div className="project-head">
                <h1><span>ONLY IDENTITY</span></h1>
              </div>

              <motion.div initial={{ y: proj4InView ? 50 : 0, opacity: proj4InView ? 0 : 1 }} animate={{ y: proj4InView ? 0 : 50, opacity: proj4InView ? 1 : 0 }} exit={{ y: proj4InView ? 50 : 0, opacity: proj4InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} ref={proj4ViewRef} className="project-description">
                <h5>ONLY IDENTITY is an Open Source web app generates IDs of people who don&apos;t exist in real life, developed by <span>Haseeb Qureshi</span>, puts together AI generated data.</h5>
              </motion.div>
              <motion.div initial={{ x: proj4InView ? 50 : 0, opacity: proj4InView ? 0 : 1 }} animate={{ x: proj4InView ? 0 : 50, opacity: proj4InView ? 1 : 0 }} exit={{ x: proj4InView ? 50 : 0, opacity: proj4InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} className="project-bullets">
                <ul>
                  <li><sup>1.</sup> Based on Next.js to achieve SEO friendliness.</li>
                  <li><sup>2.</sup> Builds a unique ID card that can be printed.</li>
                  <li><sup>3.</sup> Uses a ton of open-APIs for data retrieval.</li>
                </ul>
              </motion.div>

            </div>
            <motion.div initial={{ x: proj4InView ? -50 : 0, opacity: proj4InView ? 0 : 1 }} animate={{ x: proj4InView ? 0 : -50, opacity: proj4InView ? 1 : 0 }} exit={{ x: proj4InView ? -50 : 0, opacity: proj4InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.5 }} style={{ backgroundImage: `url(${onlyIdentity.src})` }} className="project-image">
              <div className="project-name-wrapper">
                <a href="https://only-identity.vercel.app/">ONLY-IDENTITY</a>
              </div>
            </motion.div>
          </motion.div>

          {/* HIAM */}
          <motion.div initial={{ x: proj5InView ? 50 : 0, opacity: proj5InView ? 0 : 1 }} animate={{ x: proj5InView ? 0 : 50, opacity: proj5InView ? 1 : 0 }} exit={{ x: proj5InView ? 50 : 0, opacity: proj5InView ? 0 : 1 }} transition={{ duration: 0.5, }} className="project">
            <div className="project-stats">

              <div className="project-head">
                <h1><span>HIAM</span></h1>
              </div>

              <motion.div initial={{ y: proj5InView ? 50 : 0, opacity: proj5InView ? 0 : 1 }} animate={{ y: proj5InView ? 0 : 50, opacity: proj5InView ? 1 : 0 }} exit={{ y: proj5InView ? 50 : 0, opacity: proj5InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} ref={proj5ViewRef} className="project-description">
                <h5>HIAM is a vision of replacing traditional static resume with interactive, live, and sharable resumes, concept introduced and developed by <span>Haseeb Qureshi</span>.</h5>
              </motion.div>
              <motion.div initial={{ x: proj5InView ? 50 : 0, opacity: proj5InView ? 0 : 1 }} animate={{ x: proj5InView ? 0 : 50, opacity: proj5InView ? 1 : 0 }} exit={{ x: proj5InView ? 50 : 0, opacity: proj5InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} className="project-bullets">
                <ul>
                  <li><sup>1.</sup> Makes live, sharable profiles within minutes.</li>
                  <li><sup>2.</sup> Builds the whole user experience for different users.</li>
                  <li><sup>3.</sup> Very understandable and easy to get started.</li>
                </ul>
              </motion.div>

            </div>
            <motion.div initial={{ x: proj5InView ? -50 : 0, opacity: proj5InView ? 0 : 1 }} animate={{ x: proj5InView ? 0 : -50, opacity: proj5InView ? 1 : 0 }} exit={{ x: proj5InView ? -50 : 0, opacity: proj5InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.5 }} style={{ backgroundImage: `url(${hiam.src})` }} className="project-image">
              <div className="project-name-wrapper">
                <a href="https://hiam-fe.vercel.app/">HIAM</a>
              </div>
            </motion.div>
          </motion.div>

          {/* BUDGETORY */}
          <motion.div initial={{ x: proj6InView ? 50 : 0, opacity: proj6InView ? 0 : 1 }} animate={{ x: proj6InView ? 0 : 50, opacity: proj6InView ? 1 : 0 }} exit={{ x: proj6InView ? 50 : 0, opacity: proj6InView ? 0 : 1 }} transition={{ duration: 0.5, }} className="project">
            <div className="project-stats">

              <div className="project-head">
                <h1><span>BUDGETORY</span></h1>
              </div>

              <motion.div initial={{ y: proj6InView ? 50 : 0, opacity: proj6InView ? 0 : 1 }} animate={{ y: proj6InView ? 0 : 50, opacity: proj6InView ? 1 : 0 }} exit={{ y: proj6InView ? 50 : 0, opacity: proj6InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} ref={proj6ViewRef} className="project-description">
                <h5>Budgetory is an expense tracker app developed by <span>Haseeb Qureshi</span>.This web app will help calculate and track budget and track expenses.</h5>
              </motion.div>
              <motion.div initial={{ x: proj6InView ? 50 : 0, opacity: proj6InView ? 0 : 1 }} animate={{ x: proj6InView ? 0 : 50, opacity: proj6InView ? 1 : 0 }} exit={{ x: proj6InView ? 50 : 0, opacity: proj6InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.2 }} className="project-bullets">
                <ul>
                  <li><sup>1.</sup> Lightweight, simple, and easy to use.</li>
                  <li><sup>2.</sup> Builds a budget that helps in daily routines.</li>
                  <li><sup>3.</sup> Easy to use and very accessible design.</li>
                </ul>
              </motion.div>

            </div>
            <motion.div initial={{ x: proj6InView ? -50 : 0, opacity: proj6InView ? 0 : 1 }} animate={{ x: proj6InView ? 0 : -50, opacity: proj6InView ? 1 : 0 }} exit={{ x: proj6InView ? -50 : 0, opacity: proj6InView ? 0 : 1 }} transition={{ duration: 0.75, delay: 0.5 }} style={{ backgroundImage: `url(${budgetory.src})` }} className="project-image">
              <div className="project-name-wrapper">
                <a href="https://budgetory.vercel.app/">BUDGETORY</a>
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
