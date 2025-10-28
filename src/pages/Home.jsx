import React from 'react'
import { ShieldCheckIcon, StarIcon, HandThumbUpIcon, BoltIcon } from "@heroicons/react/24/solid";
import MoneyTrackSection from '../components/MoneyTrackSection';
import MoneyTrackerSection2 from '../components/MoneyTrackSection2';
import MoneyTrackerSection3 from '../components/MoneyTrackSection3';

const Home = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl font-semibold mt-5 font-stretch-semi-expanded text-center text-blue-600'>Simple Way </h1>
                <h1 className='text-5xl font-normal mt-4 font-stretch-semi-expanded text-center'>to manage <span className='font-semibold text-blue-600'>personal finances</span></h1>
            </div>
            <div className='flex justify-center mt-6'>
                <button className="flex justify-center bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200">Get Started For Free</button>
            </div>
            <div className='w-full flex justify-around mt-10'>
                <div className="bg-blue-100 w-40 p-4 text-center rounded-lg shadow">
                    <ShieldCheckIcon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                    <p>100% Secured data</p>
                </div>
                <div className="bg-blue-100 w-40 p-4 text-center rounded-lg shadow">
                    <StarIcon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                    <p>App of the day</p>
                </div>
                <div className="bg-blue-100 w-40 p-4 text-center rounded-lg shadow">
                    <HandThumbUpIcon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                    <p>5★ Reviews</p>
                </div>
                <div className="bg-blue-100 w-40 p-4 text-center rounded-lg shadow">
                    <BoltIcon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                    <p>Fast & Reliable</p>
                </div>
            </div>
            <MoneyTrackSection/>
            <MoneyTrackerSection2/>
            <MoneyTrackerSection3/>

        </div>
    )
}

export default Home
