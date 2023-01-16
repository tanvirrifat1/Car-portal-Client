import React from 'react';

const Hero = () => {
    return (
        <div className='mt-8' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className='p-16' style={{
                backgroundColor: '#ffffff',
            }}>
                <h1 className='text-center  text-3xl font-bold'>Your Dream Car Are Waiting</h1>
                <p className='text-center  my-5 font-bold'>over 1 million interactions, 50,000 success stories Make yours now.</p>
                <div className='flex justify-center'>
                    <button className="btn btn-outline btn-warning mr-5">Search Car</button>

                    <button className="btn btn-outline bg-white">Apply For Car</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
