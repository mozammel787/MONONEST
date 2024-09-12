import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider'; // Assuming you have an AuthContext

export const useAuth = () => {
  const auth = useContext(AuthContext);  // Access context values (like user and authentication status)
  const navigate = useNavigate();        // For navigation purposes

  const logout = () => {
    // Clear any user data (e.g., remove token from localStorage)
    localStorage.removeItem('token');  // Remove stored token
    localStorage.removeItem('user');   // Optional: Remove user details
    auth.setUser(null);                // Update the user state in context (if you're storing user in AuthContext)
    navigate('/signin');               // Optionally redirect to sign-in after logout
  };

  return {
    ...auth,  // Spread the existing context (e.g., user, setUser)
    logout,   // Add logout functionality
  };
};
