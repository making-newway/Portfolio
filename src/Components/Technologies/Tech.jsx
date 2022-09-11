import React from 'react';
import { motion } from 'framer-motion';
import './_Tech.scss';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../Theme/Globals';
import { Technology } from '../../constants/constants'

const Tech = () => {
    return (
        <Section id="tech">
            <SectionDivider />
            <SectionTitle>Technology</SectionTitle>
            <SectionText>I have worked with varoius technologies from Web Development to Machine Learning</SectionText>
            <div className='list'>
                {Technology.map((tech) => (
                    <motion.div key={tech.title} className='listItem' whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                        <img src={tech.imgUrl} alt={tech.title} />
                        <h4>{tech.title}</h4>
                        <p>{tech.paragraph}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

export default Tech