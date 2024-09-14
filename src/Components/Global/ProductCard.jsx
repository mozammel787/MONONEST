import React from 'react';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { IoStar, IoStarOutline, IoStarHalf } from 'react-icons/io5';

const ProductCard = ({ product }) => {
    const { name, price, images, ratings, _id } = product;
    // console.log(product);
    

    // Function to render stars based on rating
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(ratings)) {
                stars.push(<IoStar key={i} className="text-lg text-neutral" />); // Full Star
            } else if (i === Math.ceil(ratings) && ratings % 1 !== 0) {
                stars.push(<IoStarHalf key={i} className="text-lg text-neutral" />); // Half Star
            } else {
                stars.push(<IoStarOutline key={i} className="text-lg text-gray-400" />); // Empty Star
            }
        }
        return stars;
    };

    return (
        <div className="card rounded-none group">
            <figure className='relative bg-[#f2f4f6]'>
                <img
                    src={images[0]}
                    alt={name}
                    className='w-[262px] h-[350px] object-cover group-hover:scale-110 duration-700' />
                <div className="absolute top-4 left-4 badge badge-secondary rounded bg-white border-0 font-bold shadow-xl">NEW</div>
                <div className="absolute top-12 left-4 badge bg-[#d17f34] rounded border-0 font-bold text-white shadow-xl">-50%</div>

                <label className="swap absolute top-4 right-4 p-2 rounded-full bg-white shadow-xl md:hidden group-hover:inline-grid duration-700">
                    <input type="checkbox" />
                    <GoHeart className="swap-off text-2xl" />
                    <GoHeartFill className="swap-on text-2xl" />
                </label>

                <div className="absolute bottom-4 px-4 w-full md:hidden group-hover:inline-block duration-700">
                    <Link to={`/product/${_id}`} className="btn btn-neutral w-full shadow-xl text-gray-50">Add to cart</Link>
                </div>
            </figure>
            <div className="card-body p-0 pt-3">
                <div className="flex items-center gap-1">
                    {renderStars()} {/* Dynamic star ratings */}
                </div>
                <h2 className="card-title font-semibold">
                    {name}
                </h2>
                <p className="card-title font-semibold">${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
