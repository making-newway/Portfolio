import React from 'react';
import { Section, SectionText, SectionTitle } from '../../Theme/Globals'
import Button from '../../Theme/Button'
import './_Hero.scss';

const Hero = () => {
    return (
        <Section row nopadding>
            <div className='leftSec'>
                <SectionTitle main center>
                    Let's Build Together <br/> Something Awesome
                </SectionTitle>
                <SectionText>
                    MySelf Sayan Dey, An Energetic, Ambitious Full Stack Website and Appliaction Developer and Machine Learning Enthusiast. And This is my portfolio.
                </SectionText>
                <div className='heroBut'>
                    <Button onClick={() => window.location = 'https://github.com/making-newway?tab=repositories'}>
                        Learn more
                    </Button>
                    <a href='https://res.cloudinary.com/corvus141/image/upload/fl_attachment:Sayan_Dey_Resume/v1662963808/Portfolio/Sayan_Dey_Porfolio.pdf' rel="noopener noreferrer" download='Sayan_Dey'>
                        <Button alt='Dowload'>
                            Download Resume
                        </Button>
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default Hero