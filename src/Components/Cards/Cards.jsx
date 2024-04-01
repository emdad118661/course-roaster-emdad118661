
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Cards = ({cards, credit, price, remingHour}) => {
    return (
        <div className='md:w-1/3'>
            <div className='bg-white w-78 p-2 mr-24 mt-16 rounded-xl h-90'>
                <h1 className='text-blue-600 font-bold m-2'>Credit Hour remaining: {remingHour}</h1>
                <hr />
                 <h1 className='m-2'>Course Name:</h1>
                 {
                    cards.map((card, idx) => <Card key={idx} card={card}></Card>)
                 }
                 <hr />
                 <h1 className='m-2'>Total Credit Hour: {credit}</h1>
                 <hr />
                 <h1 className='m-2'>Total Price: {price}</h1>

            </div>

            
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array,
    credit: PropTypes.number,
    price: PropTypes.number,
    remingHour: PropTypes.number
};

export default Cards;