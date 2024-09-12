import { useAuth } from '../../Hook/useAuth';
import { FaSave, FaEdit, FaCamera } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
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
        <div className=" p-6 flex flex-col    ">
            <div className="w-full">
                <h4 className="text-2xl font-bold mb-6">Update Personal Information</h4>
                <form className="space-y-4 mt-6 ">
                    <div className="flex flex-col justify-start items-start">
                        <label className="text-gray-500 font-medium ">
                            Display Name
                        </label>
                        <input
                            type="text"
                            name="displayName"
                            value={profileData.displayName}
                            onChange={handleInputChange}
                            className='border focus:outline-none p-2 rounded bg-transparent border-gray-400  w-full'
                        />
                        <label className="mt-4 text-gray-500 font-medium ">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                            className='border focus:outline-none p-2 rounded bg-transparent border-gray-400  w-full'
                        />
                        <label className="mt-4 text-gray-500 font-medium ">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={profileData.address}
                            onChange={handleInputChange}
                            className='border focus:outline-none p-2 rounded bg-transparent border-gray-400  w-full'
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

            </div>
        </div>
    );
};

export default Profile;