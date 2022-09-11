import React, { useState } from 'react'
import './_Footer.scss';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
    const [data, setData] = useState({ user: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { user, email, message } = data;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = (e) => {
        setLoading(true);

        fetch('https://formsubmit.co/ajax/sayandey15102001@gmail.com', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: data.user,
                email: data.email,
                message: data.message
            })
        })
        .then(res => res.json())
        .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
            console.log('loading stopped');
        })
        .catch(err => console.log(err));
    }

    return (
        <section className='footer'>
            <ul className='linkList'>
                <li className='linkCol'>
                    <h4 className='linkTitle'><AiOutlinePhone/> Call  Me</h4>
                    <a aria-label='Phone' className='linkItem' href="tel:629-453-1877">(+91) 629-453-1877</a>
                </li>
                <li className='linkCol'>
                    <h4 className='linkTitle'><AiOutlineMail/> Mail  Me</h4>
                    <a aria-label='Email' className='linkItem' href="mailto:sayandey15102001@gmail.com">sayandey15102001@gmail.com</a>
                </li>
            </ul>
            {!isFormSubmitted ? (
                <div className='footerForm'>
                    <div>
                        <input type="text" placeholder="Your Name" name="user" value={user} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email" name="email" value={email} onChange={handleChange} />
                    </div>
                    <div>
                        <textarea placeholder="Your Message" value={message} name="message" onChange={handleChange} />
                    </div>
                    <button type="button" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                </div>
            ) : (
                <div className='thanks'>
                    <h3>
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </section>
    )
}

export default Footer