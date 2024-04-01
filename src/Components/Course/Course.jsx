import React from 'react';
import PropTypes from 'prop-types';

const Course = ({course, handleSelect}) => {
    const {cover_img, course_title, course_details, price, credit_hour} = course;
    return (
        <div className='bg-white w-78 h-100 m-4 p-4 rounded-xl'>
            <img className='flex justify-center items-center h-36 w-70 rounded-xl m-2' src={cover_img} alt={`cover picture of a title ${course_title}`} />
            <h3 className='text-center m-2'>{course_title}</h3>
            <p className='text-zinc-400'>{course_details}</p>
            <div className='flex text-slate-500 my-auto'>
                <h4>Price: ${price}</h4>
                <h4 className='ml-3'>Credit: {credit_hour} hour</h4>
            </div>
            <button onClick={() => handleSelect(credit_hour, price, course)} className='flex justify-center items-center bg-blue-600 px-20 text-white py-2 text-center m-1 rounded-xl'>Select</button>

        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelect: PropTypes.func
};

export default Course;