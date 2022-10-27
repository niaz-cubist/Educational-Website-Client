import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseDetails.css'

const CoursesDisplay = ({ course }) => {
    const courseName = course.name
    const courseImage = course.logo
    const courseId = course._id
    const courseDetails = course.details

    return (
        <div className='container'>
            <Card style={{ width: '17rem' }}>
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