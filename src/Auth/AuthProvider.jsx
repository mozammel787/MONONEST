import { useState, createContext, useEffect } from "react";
import { app } from "../FireBase/FireBase.config";
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true); 

  const googleProvider = new GoogleAuthProvider();

  // Register a new user with email and password
  const registration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  // Log in with email and password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  // Log in with Google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .finally(() => setLoading(false));
  };

  // Change password
  const passwordChange = async (currentPassword, newPassword) => {
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      setMessage('Password changed successfully.');
    } catch (error) {
      handleErrors(error);
    }
  };

  // Error handler
  const handleErrors = (error) => {
    setMessage(`Error: ${error.message}`);
  };

  // Log out the user
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null); 
    } catch (error) {
      handleErrors(error);
    } finally {
      setLoading(false);
    }
  };

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    googleLogin,
    registration,
    logIn,
    user,
    loading,
    logOut,
    setLoading,
    passwordChange,
    message 
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
