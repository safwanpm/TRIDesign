import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const contactInfo = {
    phone: "+917561819183",
    email: "infotridesigning@gmail.com",
    social: {
        linkedin: "#",
        instagram: "https://www.instagram.com/tri._design?igsh=MXMyNHVvb2Q5Z3U2eA==",
        whatsapp: "https://wa.me/+917561819183",
    }
};

const SocialIcon = ({ href, Icon, label }) => (
    <a href={href} className="hover:text-black" aria-label={label}>
        <Icon size={20} />
    </a>
);

const Contact = () => {
    return (
        <div className="min-h-full lg:min-h-screen space-x-10 flex justify-center items-center py-12 sm:px-4 md:px-8">
            <div className='sm:px-4'>
                <div className="text-left mb-12">
                    <h1 className="text-4xl md:text-7xl font-bold text-black">
                        Got an Interesting Project?
                    </h1>
                    <h2 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-primary-gradient mt-2">
                        Let’s Connect.
                    </h2>
                </div>

                <div className="inline-flex items-center px-4 p-2 space-x-0 md:space-x-4 border rounded-full shadow-lg">
                    <a href={`tel:${contactInfo.phone}`}
                        className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-600 hover:text-black focus:outline-none">
                        <FaPhoneAlt />
                        <span className='text-xs md:text-sm'>Call now</span>
                    </a>

                    <a href={`mailto:${contactInfo.email}`}
                        className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-600 hover:text-black focus:outline-none">
                        <FaEnvelope />
                        <span className='text-xs md:text-sm'>Mail us</span>
                    </a>

                    <div className="flex space-x-4 text-gray-600">
                        <SocialIcon href={contactInfo.social.linkedin} Icon={FaLinkedin} label="LinkedIn" />
                        <SocialIcon href={contactInfo.social.instagram} Icon={FaInstagram} label="Instagram" />
                        <SocialIcon href={contactInfo.social.whatsapp} Icon={FaWhatsapp} label="WhatsApp" />
                    </div>
                </div>
            </div>

            <div className="sm:mt-8">
                <a className="p-4 md:p-10 bg-primary-gradient rounded-full shadow-lg">
                    <span className="text-white text-2xl">↗️</span>
                </a>
            </div>
        </div>
    );
};

export default Contact;
