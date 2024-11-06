import React from 'react';

const Contact = () => {
    return (
        <div className='bg-black min-h-screen flex items-center justify-center px-4 max-w-screen-2xl mx-auto'>
            <div className='w-full max-w-xl lg:max-w-2xl p-6'>
                <div className="text-left mb-10">
                    <h1 className="text-customBlue text-4xl md:text-5xl font-bold">Contact Me</h1>
                    <hr className="border border-customBlue mt-4 w-1/2 sm:w-1/3 lg:w-1/4" />
                </div>

                <p className='text-white text-center mb-10 text-lg md:text-xl'>
                    I would love to hear about your project and how I can help. Please fill in the form, and Ill get back to you as soon as possible.
                </p>

                <form className='bg-black p-6 rounded-md'>
                    <div className='mb-8'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='name'>Name</label>
                        <input
                            className='border-b-2 border-white w-full bg-black text-white text-base pb-2 focus:outline-none'
                            type='text'
                            id='name'
                            aria-label="Enter your Name"
                        />
                    </div>
                    <div className='mb-8'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='email'>Email</label>
                        <input
                            className='border-b-2 border-white w-full bg-black text-white text-base pb-2 focus:outline-none'
                            type='email'
                            id='email'
                            aria-label="Enter your Email"
                        />
                    </div>
                    <div className='mb-12'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='message'>Message</label>
                        <textarea
                            className='border-b-2 border-white w-full bg-black text-white text-base pb-2 focus:outline-none'
                            id='message'
                            rows={4}
                            aria-label="Enter your Message"
                        ></textarea>
                    </div>
                    <div className='text-center'>
                        <button
                            className='text-white text-base font-extrabold border-customBlue border-b-4 py-2 px-6 transition-colors hover:bg-customBlue hover:text-black'
                            type='submit'
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
