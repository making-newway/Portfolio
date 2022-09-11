import React from 'react';
import { motion } from 'framer-motion';
import './_Projects.scss';
import { Section, SectionDivider, SectionTitle } from '../../Theme/Globals'
import { projects } from '../../constants/constants';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const Projects = () => {
    return (
        <Section nopadding id='projects'>
            <SectionDivider />
            <SectionTitle main>Projects</SectionTitle>
            <motion.section className='gridContainer' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delayChildren: 0.5 }}>
                {projects.map(project => (
                    <div className='blogCard' key={project.id}>
                        <div className='imgContainer'>
                            <img src={project.image} alt={project.id} />
                            <motion.div className='work' whileHover={{ opacity: [0, 1] }} transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}>
                                <a aria-label='Live Link' href={project.visit} target="_blank" rel="noreferrer">
                                    <motion.div className='workDiv' whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.90] }} transition={{ duration: 0.25 }}>
                                        <AiFillEye style={{ width: '50%', height: '50%', color: 'white' }}/>
                                    </motion.div>
                                </a>
                                <a aria-label='Github Source' href={project.source} target="_blank" rel="noreferrer">
                                    <motion.div className='workDiv' whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.90] }} transition={{ duration: 0.25 }}>
                                        <AiFillGithub style={{ width: '50%', height: '50%', color: 'white' }}/>
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className='titleContent'>
                            <h3 className='header'>{project.title}</h3>
                            <p className='content'>{project.description}</p>
                            <div className='tagList'>
                                {project.tags.map((tag, i) => (
                                    <div className='tag' key={i}>{tag}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </motion.section>
        </Section>
    )
}

export default Projects