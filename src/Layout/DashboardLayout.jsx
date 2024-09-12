import { FaUser, FaCog, FaHistory, FaHome, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../Hook/useAuth';


const DashboardLayout = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate('/signin');
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-neutral text-white">
                <div className="p-4">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                </div>
                <nav className="mt-6">
                    <ul>
                        {/* Profile Section */}
                        <li>
                            <Link
                                to="/dashboard/profile"
                                className="flex items-center p-4 hover:bg-white/10 transition-colors"
                            >
                                <FaUser className="mr-3" /> Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/settings"
                                className="flex items-center p-4 hover:bg-white/10 transition-colors"
                            >
                                <FaCog className="mr-3" /> Profile Settings
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

                        {/* Navigation to Home and Shop */}
                        <li>
                            <Link
                                to="/"
                                className="flex items-center p-4 hover:bg-white/10 transition-colors"
                            >
                                <FaHome className="mr-3" /> Go to Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/shop"
                                className="flex items-center p-4 hover:bg-white/10 transition-colors"
                            >
                                <FaShoppingCart className="mr-3" /> Go to Shop
                            </Link>
                        </li>

                        {/* Logout Option */}
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
            <div className="flex-1 p-8 bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
