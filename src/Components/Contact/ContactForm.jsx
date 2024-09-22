import React from 'react';
const ContactForm = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row-reverse justify-between container items-center '>
            <div className='md:w-[50%]  overflow-hidden'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.7548035186411!2d-79.90169744704961!3d-2.146328326269203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d828f9f4a5b%3A0xb240bba1370b385f!2sMononestra%20restobar!5e0!3m2!1sen!2sbd!4v1726917367580!5m2!1sen!2sbd" width="900" height="400" loading="lazy" ></iframe>
            </div>
            <div className='w-full md:w-[50%] inline-flex flex-col justify-center gap-4'>
                <section className="p-6 ps-0 text-gray-800">
                    <form noValidate="" className="space-y-6 ">
                        <div>
                            <label htmlFor="name" className="block mb-1 ml-1 text-gray-400 font-medium">Name</label>
                            <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded border" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 ml-1 text-gray-400 font-medium">Email</label>
                            <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded border" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 ml-1 text-gray-400 font-medium">Message</label>
                            <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand border  h-32"></textarea>
                        </div>
                        <div>
                            <button type="submit" className=" px-4 py-2 font-bold rounded shadow btn btn-neutral">Send Message</button>
                        </div>
                    </form>
                </section>
            </div>

        </div>
    );
};

export default ContactForm;