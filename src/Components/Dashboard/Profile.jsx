import { FaEdit, FaCamera } from 'react-icons/fa';
import { useAuth } from '../../Hook/useAuth';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuth()
    return (
        <div className=" bg-gray-200 mt-10 p-6 flex flex-col justify-center shadow max-w-lg mx-auto items-center">
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
            <div className=" text-center ">
                <h4 className="text-lg font-semibold  text-gray-500">Personal Information</h4>
                <p>Address: John Doe</p>
                <Link to={'/dashboard/settings'} className="mt-4 text-[#d17f34] flex items-center justify-center">
                    <FaEdit className="mr-2" /> Edit Information
                </Link>
            </div>

        </div>
    );
};

export default Profile;
