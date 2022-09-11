import React from 'react';
import { Section, SectionText, SectionTitle } from '../../Theme/Globals'
import Button from '../../Theme/Button'
import './_Hero.scss';

const Hero = () => {
    return (
        <Section row nopadding>
            <div className='leftSec'>
                <SectionTitle main center>
                    Welcome to my <br/> Personal Portfolio
                </SectionTitle>
                <SectionText>
                    An Energetic, Ambitious Developer
                </SectionText>
                <Button onClick={() => window.location = 'https://github.com/making-newway?tab=repositories'}>
                    Learn more
                </Button>
                </div>
        </Section>
    )
}

export default Hero