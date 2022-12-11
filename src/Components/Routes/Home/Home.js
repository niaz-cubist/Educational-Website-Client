import React, { useContext, useEffect } from 'react';
import img1 from '../../Images/front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241011.jpg'
import img2 from '../../Images/live-class-3559138-2992757.png'
import img3 from '../../Images/hw.png';
import img4 from '../../Images/images.jpeg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/Context.js';
import './Home.css'
const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, [])
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className='my-30 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 gap-20 w-10/12 mx-auto grid grid-cols-2'>
                <div>
                    <h2 className='text-4xl my-5'>Enter to Learn <br />Leave to Serve</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis pariatur nemo nostrum repellat natus reiciendis vel amet ab ipsum, quos minus officia sint animi aut!</p>
                    <>
                        {
                            user?.uid ?
                                <>
                                    <div className=' getStarted'>
                                        <Link to="/courses"><button className="my-3 text-white btn btn-outline btn-info">Watch Videos</button></Link>
                                    </div>
                                </>
                                :
                                <>
                                    <div className=' getStarted'>
                                        <Link to="/login"><button className="my-3 text-white btn btn-outline btn-info">Get Started</button></Link>
                                    </div>
                                </>
                        }
                    </>

                </div>
                <div>
                    <img className='h-86 w-80' src={img1} alt="" />
                </div>
            </div>
            <div className='justify-between sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 mt-32 gap-20 w-10/12 mx-auto grid grid-cols-2'>
                <div>
                    <p className='text-xl w-90'>নিজের শেখা নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক <br />যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে</p>
                </div>
                <div>
                    <h2 className='text-4xl'>Why choose Us!!</h2>
                </div>
            </div>
            <div className='my-12 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 container gap-10 w-10/12 mx-auto grid grid-cols-3'>
                <div className="card w-86 sm:mx-auto sm:w-9/12 xs:mx-auto xs:w-9/12 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">লাইভ ক্লাসের মাধ্যমে ফুল সিলেবাস কভার</h2>
                        <li>লাইভ ক্লাসে প্রতিটি বিষয়ের বেসিক থেকে এডভান্সড ধারণা ব্যাখ্যা করা হবে</li>
                        <li>নিয়মিত অনুশীলন এবং বইয়ের গুরুত্বপূর্ণ প্রশ্ন সমাধান করা হবে</li>
                        <li>ক্লাসকে অংশগ্রহণমূলক করতে থাকবে লাইভ কুইজ এবং কমেন্টের অপশন</li>
                        <div className="card-actions justify-end">
                            <img className='h-20' src={img2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card w-86 sm:mx-auto sm:w-9/12 xs:mx-auto xs:w-9/12 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">লাইভ ক্লাসেই প্রশ্ন সমাধান</h2>
                        <li>প্রতিটি ক্লাসে স্পেশাল চ্যাট সেকশন যেখানে সরাসরি শিক্ষককে প্রশ্ন করার সুযোগ থাকছে</li>
                        <li>কনফিউশন ক্লিয়ার না হওয়া পর্যন্ত থাকবে শিক্ষকের সাথে ওয়ান টু ওয়ান সেশনের সুযোগ
                        </li>
                        <li>
                            সময় অতিক্রম হয়ে গেলেও সাপোর্ট দেয়া হবে
                        </li>
                        <div className="card-actions justify-end">
                            <img className='h-20' src={img3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card w-86 sm:mx-auto sm:w-9/12 bg-base-100 xs:mx-auto xs:w-9/12 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">নিয়মিত হোমওয়ার্ক ও পরীক্ষা</h2>
                        <li>চ্যাপ্টারভিত্তিক হোমওয়ার্ক এর মাধ্যমে নিয়মিত অনুশীলন করানো হবে</li>
                        <li>প্রতি মাসে থাকবে নির্ধারিত সিলেবাসের উপর কমপ্লিট কুইজ পরীক্ষা</li>
                        <li>প্রতিটি হোমওয়ার্ক ও কুইজের লিডারবোর্ড থেকে নিজের অবস্থান তুলনা করতে পারবে</li>
                        <div className="card-actions justify-end">
                            <img className='h-20' src={img4} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;