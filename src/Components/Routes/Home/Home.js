import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Images/istockphoto-1320882544-170667a.jpg'
import img2 from '../../Images/glasses-1052010_1280.jpg'
import img3 from '../../Images/pexels-pixabay-301920.jpg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/Context.js';
import './Home.css'
const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='w-100'>
            <div className='mb-7 text-2xl mx-auto mt-24 text-center w-8/12'>
                <p>An educational website is a huge interactive platform to present various information for different types of people: future students, current students, teachers, parents, those who want to get a new profession, etc. All the sections have to be well-balanced and organized so users can easily find everything they need.</p>
            </div>
            <div>
                <Carousel className='d-lg-block d-none my-4'>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto w-6/12"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p className='text-white text-2xl'>Learn Effectively that will take you towards your goal</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto w-50"
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <p className='text-white  text-2xl'>Better education equals a better nation</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto w-50"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <p className='text-white  text-2xl'>Education is your basic right; you know that, right?</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <>
                {
                    user?.uid ?
                        <>

                        </>
                        :
                        <>
                            <div className='getStarted'>
                                <Link to="/login"><button className="text-black d-block mx-auto btn btn-outline btn-warning">Get Started</button></Link>
                            </div>
                        </>
                }
            </>

        </div>
    );
};

export default Home;