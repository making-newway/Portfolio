import React, { useState } from 'react';
import './_Header.scss';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineCodeSandbox } from 'react-icons/ai';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const sideVariants = {
        closed: {
            transition: {
            staggerChildren: 0.5,
            staggerDirection: -1
            }
        },
        open: {
            transition: {
            staggerChildren: 0.5,
            staggerDirection: 1
            }
        }
    };
    const itemVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    };

    return (
        <div className='container'>
            <div className="logo">
                <Link to={'/'} style={{ display: 'flex', alignItems: 'center', color: 'white', fontWeight: '600', fontSize: '22px' }}>
                    <AiOutlineCodeSandbox size='3rem' /> <span>Portfolio</span>
                </Link>
            </div>

            <ul className="navs">
                <li>
                    <a aria-label='Projects' href='#projects' className='navLink'>
                        Projects
                    </a>
                </li>
                <li>
                    <a  aria-label='Technologies' href='#tech' className='navLink'>
                        Technology
                    </a>
                </li>
                <li>
                    <a aria-label='About' href='#about' className='navLink'>
                        About
                    </a>
                </li>
            </ul>

            <div className="icons">
                <a aria-label='Github Link' className='social' href='https://www.github.com/making-newway'>
                    <AiFillGithub size='3rem' />
                </a>
                <a aria-label='LinkedIn Link' className='social' href='https://www.linkedin.com/in/sayan-dey-950a131a5/'>
                    <AiFillLinkedin size='3rem' />
                </a>
                <a aria-label='Instagram Link' className='social' href='https://www.instagram.com/'>
                    <AiFillInstagram size='3rem' />
                </a>
            </div>

            <div className="smallDiv">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                <AnimatePresence>
                    {toggle && (
                        <motion.div initial={{ width: 0 }} animate={{ width: 320 }} exit={{ width: 0, transition: { delay: 1.4, duration: 0.85, ease: 'easeIn' }}} transition={{ duration: 0.5, ease: 'easeIn' }}>
                            <HiX onClick={() => setToggle(false)} />
                            <motion.ul initial="closed" animate="open" exit="closed" variants={sideVariants}>
                                <li>
                                    <motion.a aria-label='Projects' variants={itemVariants} href='#projects' className="navLink" onClick={() => setToggle(false)}>
                                        Projects
                                    </motion.a>
                                </li>
                                <li>
                                    <motion.a  aria-label='Technologies' variants={itemVariants} href='#tech' className="navLink" onClick={() => setToggle(false)}>
                                        Technology
                                    </motion.a>
                                </li>
                                <li>
                                    <motion.a aria-label='About' variants={itemVariants} href='#about' className="navLink" onClick={() => setToggle(false)}>
                                        About
                                    </motion.a>
                                </li>
                                <li>
                                    <motion.a aria-label='Github Link' variants={itemVariants} className='social' href='https://www.github.com/making-newway'>
                                        <AiFillGithub size='3rem' />
                                    </motion.a>
                                    <motion.a aria-label='LinkedIn Link' variants={itemVariants} className='social' href='https://www.linkedin.com/in/sayan-dey-950a131a5/'>
                                        <AiFillLinkedin size='3rem' />
                                    </motion.a>
                                    <motion.a aria-label='Instagram Link' variants={itemVariants} className='social' href='https://www.instagram.com/'>
                                        <AiFillInstagram size='3rem' />
                                    </motion.a>
                                </li>
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Header