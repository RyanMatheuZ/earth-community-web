import { create } from 'zustand';

import { persist, type PersistOptions } from 'zustand/middleware';

import { setCookie } from 'cookies-next';

import type { IState, IActions } from '@ts/interfaces';

const initialState: IState = {
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
  }
};

const persistOptions: PersistOptions<IState & IActions> = {
  name: process.env.NEXT_PUBLIC_COOKIE_NAME,
  version: 1
};

const useUserStore = create<IState & IActions>()(
  persist(
    (set) => ({
      ...initialState,
      handlePersistUserData: (user) => {
        setCookie(process.env.NEXT_PUBLIC_COOKIE_NAME, user, {
          sameSite: 'lax'
        });
        set({ user });
      },
      handleCleanUserData: () => set(initialState)
    }),
    persistOptions
  )
);

export default useUserStore;
