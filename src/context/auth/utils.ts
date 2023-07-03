import type { IAuthContext } from '@ts/interfaces';

export const authContextDefaultValues: IAuthContext = {
  user: {
    _id: '',
    info: {
      nickName: '',
      firstName: '',
      surname: '',
      email: '',
      dateOfBirth: null as unknown as Date,
      phone: '',
      pictureProfile: '',
      about: ''
    },
    address: {
      city: '',
      state: ''
    },
    groups: [],
    donationIds: [],
    createdAt: ''
  },
  isLoadingSignUp: false,
  isLoadingSignIn: false,
  handleSignUp: () => Promise.resolve(),
  handleSignIn: () => Promise.resolve(),
  handleSignOut: () => null
};
