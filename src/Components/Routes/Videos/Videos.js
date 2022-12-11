import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import VideoCart from './VideoCart/VideoCart';
import Button from 'react-bootstrap/Button';


const Videos = () => {
    const data = useLoaderData()
    console.log(data);
    const { videos, _id } = data


    return (
        <div className='grid xs:grid xs:grid-cols-2 grid-cols-3 mt-24 gap-4 p-2 container'>
            {
                videos.map(param => <VideoCart key={_id} param={param}></VideoCart>)
            }
            <Link to={'/courses'}><Button variant="primary">Back To Courses</Button>{' '}</Link>

        </div>
    );
};

export default Videos;