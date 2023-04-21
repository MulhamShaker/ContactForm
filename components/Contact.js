import React, { useState } from 'react';
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import {
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPinterest,
    FaGithub,
} from "react-icons/fa";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully');
            } else {
                alert('Failed to submit form');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to submit form');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="bg-gradient-to-r from-purple-900 to-pink-500 mix-blend-screen w-screen md:h-screen h-auto">
                <div className="flex justify-around items-center mx-20 md:flex-row flex-col">
                    {/* textual content */}
                    <div className="md:w-1/2 w-full md:p-10 my-10 md:my-0  flex-col">
                        <h1 className="text-4xl font-semibold text-white ">Say Hello ,</h1>
                        <p className="text-gray-300 font-semibold text-sm my-5">
                            Fill up the form & we will get back to you as fast as we can.
                        </p>
                        <div className="flex-col my-20 gap-5 flex  ">
                            <div className="flex gap-5 p-4 border border-gray-500 hover:border-white md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
                                <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-white" />
                                <p className="text-gray-300 text-base font-semibold group-hover:text-blue-300 group-hover:scale-110">
                                    +123456789
                                </p>
                            </div>
                            <div className="flex gap-5 p-4 border border-gray-500 hover:border-white md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
                                <GrMail className="text-xl text-gray-500  group-hover:text-white" />
                                <p className="text-gray-300 text-base font-semibold group-hover:text-blue-300 group-hover:scale-110">
                                    test@gmail.com
                                </p>
                            </div>
                            <div className="flex gap-5 p-4 border border-gray-500 hover:border-white md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
                                <GrMail className="text-xl text-gray-500  group-hover:text-white" />
                                <p className="text-gray-300 text-base font-semibold group-hover:text-blue-300 group-hover:scale-110">
                                    test.test@pandiv.com
                                </p>
                            </div>
                            <div className="flex gap-5 p-4 border border-gray-500 hover:border-white md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
                                <HiLocationMarker className="text-xl text-gray-500  group-hover:text-white" />
                                <p className="text-gray-300 text-base font-semibold group-hover:text-blue-300 group-hover:scale-110">
                                    Earth
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-8  justify-center md:justify-start ">
                            <FaInstagram href="#" className="text-2xl text-white hover:text-gray-400 cursor-pointer" />
                            <FaTwitter href="#" className="text-2xl text-white hover:text-gray-400 cursor-pointer" />
                            <FaYoutube href="#" className="text-2xl text-white hover:text-gray-400 cursor-pointer" />
                            <FaPinterest href="#" className="text-2xl text-white hover:text-gray-400 cursor-pointer" />
                            <FaGithub href="#" className="text-2xl text-white hover:text-gray-400 cursor-pointer" />
                        </div>
                    </div>



                    <div className='bg-gradient-to-r from-pink-900 to-purple-500 p-12 rounded-3xl shadow-md'>
                        <form onSubmit={handleSubmit}>
                            <div className='grid xl:grid-cols-2 xl:gap-10'>
                                <input
                                    className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-gray-300 bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                />
                                <input
                                    className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-gray-300  bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                />
                            </div>
                            <input
                                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-gray-300  bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                            />
                            <input
                                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-gray-300  bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                            />
                            <div>
                                <textarea
                                    className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-gray-300  bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="text"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                />
                            </div>
                            <button type="submit" className="text-white bg-gray-400 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-500 dark:hover:bg-purple-500 dark:focus:ring-blue-800">
                                Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ContactForm;










