import { useState } from 'react';

import { signInWithPopup, type User } from 'firebase/auth';

import { auth, googleAuthProvider } from '@services/firebase';

import { catchError } from '@utils/requestMessages';

const useGoogleAuth = () => {
  const [userData, setUserData] = useState<User>();

  const handleSignIn = async () => {
    try {
      const response = await signInWithPopup(auth, googleAuthProvider);
      setUserData(response.user);
    } catch (error) {
      catchError(error);
    }
  };

  return {
    handleSignIn,
    userData
  };
};

export default useGoogleAuth;
