import { useAuth } from '../../Hook/useAuth';
import { FaSave, FaEdit, FaCamera } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
    const { user } = useAuth();
    const [profileData, setProfileData] = useState({
        displayName: user?.displayName || '',
        email: user?.email || '',
        address: '', // Add fields as needed
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSave = () => {
        // Save profile data logic here
        console.log('Profile data saved:', profileData);
    };

    return (
        <div className="bg-gray-200 mt-10 p-6 flex flex-col justify-center shadow max-w-lg mx-auto items-center">
            <div className="flex flex-col items-center mb-6">
                <div className="relative">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-24 h-24 rounded-full"
                    />
                    <button className="absolute bottom-0 right-0 bg-gray-200 p-2 rounded-full">
                        <FaCamera />
                    </button>
                </div>
                <div className="ml-6 text-center">
                    <h3 className="text-2xl font-bold">{user?.displayName}</h3>
                    <p className="text-gray-600">{user?.email}</p>
                </div>
            </div>
            <div className="w-full text-center">
                <h4 className="text-lg font-semibold text-gray-500">Update Personal Information</h4>
                <form className="space-y-4 mt-6 mx-10">
                    <div className="flex flex-col justify-start items-start">
                        <label className="text-gray-500 font-medium ">
                            Display Name
                        </label>
                            <input
                                type="text"
                                name="displayName"
                                value={profileData.displayName}
                                onChange={handleInputChange}
                                className='border-b focus:outline-none py-3 bg-transparent border-gray-400  w-full'
                            />
                        <label className="mt-4 text-gray-500 font-medium ">
                            Email
                        </label>
                            <input
                                type="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleInputChange}
                                className='border-b focus:outline-none py-3 bg-transparent border-gray-400  w-full'
                            />
                        <label className="mt-4 text-gray-500 font-medium ">
                            Address
                        </label>
                            <input
                                type="text"
                                name="address"
                                value={profileData.address}
                                onChange={handleInputChange}
                                className='border-b focus:outline-none py-3 bg-transparent border-gray-400  w-full'
                            />
                    </div>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="mt-6 mx-auto btn btn-neutral flex items-center justify-center"
                    >
                        <FaSave className="mr-2" /> Save Changes
                    </button>
                </form>
                <div className="mt-6 text-gray-600">
                    <Link to={'/dashboard'} className="text-[#d17f34] hover:underline">
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Settings;
