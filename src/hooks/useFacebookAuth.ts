import { useState, useCallback } from 'react';

import { signInWithPopup, FacebookAuthProvider, type User } from 'firebase/auth';

import { auth, facebookAuthProvider } from '@services/firebase';

import { catchError } from '@utils/requestMessages';

const useFacebookAuth = () => {
  const [userData, setUserData] = useState<User>();

  const handleSignIn = useCallback(async () => {
    try {
      const response = await signInWithPopup(auth, facebookAuthProvider);

      const credential = FacebookAuthProvider.credentialFromResult(response);
      const accessToken = credential?.accessToken;

      const userProfilePictureURL = await fetch(
        `https://graph.facebook.com/${response.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}
      `);

      const blobUserProfilePictureURL = await userProfilePictureURL.blob();

      setUserData({
        ...response.user,
        photoURL: URL.createObjectURL(blobUserProfilePictureURL)
      });
    } catch (error) {
      catchError(error);
    }
  }, []);

  return {
    handleSignIn,
    userData
  };
};

export default useFacebookAuth;
