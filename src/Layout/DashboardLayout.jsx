import { FaUser, FaCog, FaHistory, FaHome, FaShoppingCart, FaSignOutAlt, FaCamera } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../Hook/useAuth';


const DashboardLayout = () => {
    const { logOut, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate('/signin');
    };

    return (
        <div className="min-h-screen container mx-auto">
            <h3 className='text-center text-5xl font-bold mt-10 mb-20'>My Account</h3>
            <div className="flex  ">

                {/* Sidebar */}
                <aside className="w-72 bg-gray-100 text-neutral px-4 py-8 h-fit rounded ">
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
                            <h3 className="text-xl font-bold">{user?.displayName}</h3>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>
                    </div>
                    <nav className="mt-6">
                        <ul>
                            {/* Profile Section */}
                            <li>
                                <Link
                                    to="/dashboard"
                                    className="flex items-center p-4 hover:bg-white/10 transition-colors"
                                >
                                    <FaUser className="mr-3" /> Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/orders"
                                    className="flex items-center p-4 hover:bg-white/10 transition-colors"
                                >
                                    <FaHistory className="mr-3" /> Order History
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center p-4 w-full text-left hover:bg-white/10 transition-colors"
                                >
                                    <FaSignOutAlt className="mr-3" /> Logout
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="flex-1 ml-24">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
