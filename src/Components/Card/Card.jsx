import PropTypes from 'prop-types';

const Card = ({card}) => {
    const {course_title} = card;
    return (
        <div className='ml-4'>
             <h2>{course_title}</h2>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.array
    
};

export default Card;