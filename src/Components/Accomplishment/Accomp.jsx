import React, { useState } from 'react';
import './_Accomp.scss';
import { Section, SectionDivider, SectionTitle } from '../../Theme/Globals';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { data } from '../../constants/constants';

const Accomp = () => {
    const [ind, setInd] = useState(0);

    const handleClick = (index) => {
        setInd(index);
    }

    return (
        <Section id='accomplishment'>
            <SectionDivider />
            <SectionTitle main>Testimonials</SectionTitle>
            {data.length && (
                <div className='testimonial'>
                    <div className='testimonialItem'>
                        <img src={data[ind].imgUrl} alt={data[ind].company} />
                        <div className="testimonialContent">
                            <p>{data[ind].text}</p>
                            <div>
                                <h4>{data[ind].name}</h4>
                                <h5>{data[ind].company}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div onClick={() => handleClick(ind === 0 ? data.length - 1 : ind - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div onClick={() => handleClick(ind === data.length - 1 ? 0 : ind + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </div>
            )}
        </Section>
    )
}

export default Accomp