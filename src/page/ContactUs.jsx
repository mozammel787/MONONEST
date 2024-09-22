import React from 'react';
import About from '../Components/Contact/About';
import Service from '../Components/Home/Service';
import ContactInfo from '../Components/Contact/ContactInfo';
import ContactForm from '../Components/Contact/ContactForm';

const ContactUs = () => {
    return (
        <div className='container mx-auto px-6 md:p-0 '>
            <div className="breadcrumbs text-sm my-3">
                <ul>
                    <li className='text-gray-500'><a>Home</a></li>
                    <li className=''><a>Contact Us</a></li>
                </ul>
            </div>
            <div className='lg:w-[65vw] space-y-6 my-10'>
                <h2 className='text-4xl md:text-6xl font-semibold'>We believe in sustainable decor. We’re passionate about life at home.</h2>
                <p className='text-lg'>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present</p>
            </div>
            <About />
            <ContactInfo />
            <ContactForm />
            <Service />
        </div>
    );
};

export default ContactUs;