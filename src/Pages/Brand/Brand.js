import React from 'react';
import img1 from '../../asstesFile/logo/Toyota.jpg'
import img2 from '../../asstesFile/logo/img1.jpg'
import img3 from '../../asstesFile/logo/img3.jpg'
import img4 from '../../asstesFile/logo/img4.jpg'
import img5 from '../../asstesFile/logo/honda.jpg'

const Brand = () => {

    const brandData = [
        {
            image: img1,
            name: "Toyota"
        },
        {
            image: img2,
            name: "Mercedes"
        },
        {
            image: img3,
            name: "Tesla"
        },
        {
            image: img4,
            name: "BTM"
        },
        {
            image: img5,
            name: "Honda"
        },

    ]

    return (
        <div>
            <div className='container mx-auto'>
                <div
                    className='py-10 w-11/12 mx-auto '>
                    <div>
                        <h2 className='text-2xl py-10 text-center font-bold md:text-4xl '>Choice your Favorite Brand</h2>
                    </div>
                    <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                        {
                            brandData.map(job => <div
                                style={{
                                    backgroundColor: '#16a085',
                                }}
                                className='bg-slate-900 p-3 rounded-md' key={job.id}>
                                <div className='flex flex-col md:flex-row  items-center min-w-[150px]'>
                                    <img className='w-12 h-12 rounded-full mr-3' src={job.image} alt="" />
                                    <p className='text-xl text-white '>{job.name}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;