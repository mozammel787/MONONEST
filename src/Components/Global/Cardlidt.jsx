import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';

const Cardlidt = ({ item }) => {
    return (
        <li key={item.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full bg-transparent">
                <img className="flex-shrink-0 object-cover w-10 h-10 sm:w-20 sm:h-20 bg-gray-200 rounded" src={item.images[0]} alt={item.name} />
                <div className="flex flex-col items-start justify-between w-full">
                    <div className="w-full pb-2 space-y-2">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="font-semibold">${item.price}</p>
                        <div className="inline-flex items-center justify-between gap-3">
                            <div className="inline-flex items-center bg-gray-100 rounded-md w-auto">
                                <button
                                    onClick={() => dispatch(decrementQuantity(item.id))}
                                    className="px-4 py-2 text-xl hover:bg-black rounded-md rounded-e-none hover:text-white"
                                > - </button>
                                <span className="text-xl font-semibold px-2">{item.quantity}</span>
                                <button
                                    onClick={() => dispatch(incrementQuantity(item.id))}
                                    className="px-4 py-2 text-xl hover:bg-black rounded-md rounded-s-none hover:text-white"
                                > + </button>
                            </div>
                            <button
                                onClick={() => dispatch(removeFromCart(item.id))}
                                className="btn btn-circle bg-gray-100 border-0 shadow text-xl">
                               <RiDeleteBin2Line ></RiDeleteBin2Line>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Cardlidt;