import { create } from 'zustand';

import { persist, type PersistOptions } from 'zustand/middleware';

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
  name: '@user_data',
  version: 1
};

const useUserStore = create<IState & IActions>()(
  persist(
    (set) => ({
      ...initialState,
      handlePersistUserData: (user) => set({ user }),
      handleCleanUserData: () => set(initialState)
    }),
    persistOptions
  )
);

export default useUserStore;
