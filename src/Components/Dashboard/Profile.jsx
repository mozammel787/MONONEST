import { useAuth } from '../../Hook/useAuth';
import { FaSave } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, passwordChange } = useAuth();
    const [userInfo, setUserInfo] = useState({
        displayName: user?.displayName || '',
        email: user?.email || '',
        address: '',
        phoneNumber: '',
        photoURL: user?.photoURL || '',
        oldPassword: '',
        newPassword: ''
    });
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL || 'https://mononest-backend.onrender.com';

    useEffect(() => {
        fetch(`${API_URL}/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const { email, displayName, address, phoneNumber, photoURL, oldPassword, newPassword } = userInfo;
        const updatedData = { email, displayName, address, phoneNumber, photoURL };

        // Handle password change if both fields are filled
        if (oldPassword && newPassword) {
            await passwordChange(oldPassword, newPassword)
                .then(() => {
                    toast.success('Password changed successfully');
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        }

        // Update user profile
        await fetch(`${API_URL}/user/${user?.email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updatedData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Profile updated successfully');
                    navigate('/dashboard');
                }
            })
            .catch((error) => {
                toast.error('Error updating profile');
            });
    };

    return (
        <div className="p-10 flex flex-col rounded shadow border ">
            <div className="w-full">
                <h4 className="text-2xl font-bold mb-6">Update Personal Information</h4>
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <div className="flex flex-col justify-start items-start">
                        <label className="text-gray-500 font-medium">Display Name</label>
                        <input
                            type="text"
                            name="displayName"
                            value={userInfo.displayName}
                            onChange={handleInputChange}
                            className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full"
                        />

                        <label className="mt-4 text-gray-500 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleInputChange}
                            className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full"
                        />

                        <label className="mt-4 text-gray-500 font-medium">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={userInfo.address}
                            onChange={handleInputChange}
                            className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full"
                        />

                        <label className="mt-4 text-gray-500 font-medium">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={userInfo.phoneNumber}
                            onChange={handleInputChange}
                            className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full"
                        />

                        <label className="mt-4 text-gray-500 font-medium">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            value={userInfo.photoURL}
                            onChange={handleInputChange}
                            className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full"
                        />

                        <label className="mt-4 text-gray-500 font-medium">Old Password</label>
                        <input
                            type="password"
                            name="oldPassword"
                            value={userInfo.oldPassword}
                            onChange={handleInputChange}
                            className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full"
                        />

                        <label className="mt-4 text-gray-500 font-medium">New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={userInfo.newPassword}
                            onChange={handleInputChange}
                            className="border focus:outline-none p-2 rounded bg-transparent border-gray-400 w-full"
                        />
                    </div>
                    <button
                        type="submit"
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
