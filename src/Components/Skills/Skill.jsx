import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { experiences, skills } from '../../constants/constants';
import './_Skill.scss';
import { Section, SectionDivider, SectionTitle } from '../../Theme/Globals';
import ReactTooltip from 'react-tooltip';

const Skill = () => {
    const [tooltip, setTooltip] = useState(false);

    return (
        <Section nopadding id='skill'>
            <SectionDivider />
            <SectionTitle>Skills & Experience</SectionTitle>
            <div className='skillContainer'>
                <motion.div className='skillList'>
                    {skills.map((skill, i) => (
                        <motion.div key={i} className="skillItem" whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <div className='imgContainer'>
                                <img src={skill.text} alt={skill.name} />
                            </div>
                            <p>{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className='experienceList'>
                    {experiences.map((exp, i) => (
                        <div key={i} className='experienceItem'>
                            <div className='year'>
                                <p>{exp.time}</p>
                            </div>
                            <div style={{flex: '1'}}>
                                {exp.works.map(work => (
                                    <div key={work.name}>
                                        <motion.div className='workContainer' data-tip data-for={work.name} key={work.name} onMouseEnter={() => setTooltip(true)} onMouseLeave={() => { setTooltip(false); setTimeout(() => setTooltip(true), 50); }}>
                                            <h3>{work.name}</h3>
                                            <p>{work.company}</p>
                                        </motion.div>
                                        {tooltip && <ReactTooltip className='tip' id={work.name} place={"right"} effect='solid' arrowColor='#fff'>{work.description}</ReactTooltip>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Skill