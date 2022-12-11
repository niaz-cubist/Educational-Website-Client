import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseDetails.css'

const CoursesDisplay = ({ course }) => {

    useEffect(() => {
        document.title = 'Course';
    }, [])

    const courseName = course.name
    const courseImage = course.logo
    const courseId = course._id
    const courseDetails = course.details

    return (
        <div className='container'>
            <Card className='sm:w-60 w-80 sm:mx-auto xs:w-60 xs:mx-auto '>
                <Card.Img variant="top" src={courseImage} />
                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                        {courseDetails}
                    </Card.Text>
                    <Link className='courseDetails' to={`/videos/${courseId}`}>Start</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CoursesDisplay;