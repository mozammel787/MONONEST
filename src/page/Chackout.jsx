import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Payment from './Payment';
import { useEffect, useState } from 'react';
import { useAuth } from '../Hook/useAuth';
import { CgCheck } from 'react-icons/cg';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Checkout = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState({
        displayName: user?.displayName || '',
        email: user?.email || '',
        address: '',
        phoneNumber: '',
    });

    const dispatch = useDispatch();
    const { cartItems, totalAmount, totalItems } = useSelector((state) => state.cart);

    useEffect(() => {
        if (user?.email) {
            fetch(`${API_URL}/user/${user.email}`)
                .then((res) => res.json())
                .then((data) => setUserInfo(prevState => ({
                    ...prevState,
                    ...data
                })));
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleIncrement = (id) => dispatch(incrementQuantity(id));
    const handleDecrement = (id) => dispatch(decrementQuantity(id));
    const handleRemove = (id) => dispatch(removeFromCart(id));

    return (
        <div className="container mx-auto">
            <h1 className='text-5xl font-semibold my-5 text-center'>Checkout</h1>
            <div className='flex justify-between items-center gap-6 w-full max-w-2xl mx-auto my-10'>
                <div className='flex items-center justify-between gap-6 font-medium border-b-2 border-green-500 pb-3 text-green-500 '>
                    <h1 className='text-3xl  rounded-full bg-green-500 text-white h-10 w-10 flex items-center justify-center'><CgCheck /></h1>
                    <p>Shopping cart</p>
                </div>
                <div className='flex items-center justify-between gap-6 font-medium border-b-2 border-neutral pb-3 text-neutral '>
                    <h1 className='text-3xl  rounded-full bg-neutral text-white h-10 w-10 flex items-center justify-center'><CgCheck /></h1>
                    <p>Checkout details</p>
                </div>
                <div className='flex items-center justify-between gap-6 font-medium border-b-2 border-gray-200 pb-3 text-gray-200 '>
                    <h1 className='text-3xl  rounded-full bg-gray-200 text-white h-10 w-10 flex items-center justify-center'><CgCheck /></h1>
                    <p>Order complete</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-10 items-start w-full">
                <div className="lg:card w-[40%] rounded-xl">
                    <div className="border p-6 rounded shadow">
                        <h2 className="text-xl font-semibold">Contact Information</h2>
                        <div>
                            <div className="form-control text-neutral-focus">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="displayName"
                                    value={userInfo.displayName}
                                    onChange={handleInputChange}
                                    className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full"
                                />
                            </div>

                            <div className="form-control text-neutral-focus">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={userInfo.email}
                                    className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full text-gray-500"
                                    readOnly
                                />
                            </div>

                            <div className="form-control text-neutral-focus">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={userInfo.phoneNumber}
                                    onChange={handleInputChange}
                                    className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full"
                                />
                            </div>

                            <div className="form-control text-neutral-focus">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={userInfo.address}
                                    onChange={handleInputChange}
                                    className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full"
                                />
                            </div>

                            <Elements stripe={stripePromise}>
                                <Payment userInfo={userInfo} />
                            </Elements>
                        </div>
                    </div>
                </div>

                {/* Product info */}
                <div className="card border p-6 rounded shadow justify-center items-center">
                    {cartItems.length === 0 ? (
                        <p className="text-lg">Your cart is empty</p>
                    ) : (
                        <div>
                            <ul className="space-y-4">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="p-4 border-b">
                                        <div className="flex items-center justify-between">
                                            <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover rounded" />
                                            <div className="flex-1 ml-4">
                                                <h2 className="text-xl font-semibold">{item.name}</h2>
                                                <p className="text-lg font-medium">${item.price}</p>
                                                <div className="inline-flex items-center mt-2 bg-gray-200 rounded">
                                                    <button
                                                        onClick={() => handleDecrement(item.id)}
                                                        className="px-3 py-1 rounded-md hover:bg-neutral hover:text-white"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-4">{item.quantity}</span>
                                                    <button
                                                        onClick={() => handleIncrement(item.id)}
                                                        className="px-3 py-1 rounded-md hover:bg-neutral hover:text-white"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleRemove(item.id)}
                                                className="btn btn-circle bg-gray-100 border-0 shadow text-xl"
                                            >
                                                <RiDeleteBin2Line />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-4">
                                <h2 className="text-3xl font-semibold">Total</h2>
                                <p className="text-xl">Total Items: {totalItems}</p>
                                <p className="text-xl">Total Amount: ${totalAmount.toFixed(2)}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
