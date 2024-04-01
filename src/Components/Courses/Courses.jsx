import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Course from '../Course/Course';

const Courses = ({handleSelect}) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))

}, [])
    return (
        <div className='md:w-2/3'>
            <h1 className="text-3xl font-bold mb-2">Courses: {courses.length}</h1>
            <div className='grid gap-4 grid-cols-3 grid-rows-3'>
            {
                courses.map(course => <Course key={course.id} course={course} handleSelect={handleSelect}></Course>)
            }
            </div>
            
        </div>
    );
};

Courses.propTypes = {
    handleSelect: PropTypes.func
};

export default Courses;