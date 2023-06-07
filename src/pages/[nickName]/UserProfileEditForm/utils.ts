import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import type { IUser } from '@ts/interfaces';

import { pictureProfile, nickName, firstName, surname, phone, email, dateOfBirth, about } from '@utils/validationSchemas/user';
import { city, state } from '@utils/validationSchemas/address';

export interface UserDefaultValues {
  pictureProfile?: IUser['info']['pictureProfile'];
  nickName?: IUser['info']['nickName'];
  firstName?: IUser['info']['firstName'];
  surname?: IUser['info']['surname'];
  email?: IUser['info']['email'];
  dateOfBirth?: IUser['info']['dateOfBirth'];
  about?: IUser['info']['about'];
  phone?: IUser['info']['phone'];
  city?: IUser['address']['city'];
  state?: IUser['address']['state'];
}

export const getUserDefaultValues = (userDefaultValues?: UserDefaultValues) => ({
  pictureProfile: userDefaultValues?.pictureProfile ?? '',
  nickName: userDefaultValues?.nickName ?? '',
  firstName: userDefaultValues?.firstName ?? '',
  surname: userDefaultValues?.surname ?? '',
  email: userDefaultValues?.email ?? '',
  dateOfBirth: new Date(String(userDefaultValues?.dateOfBirth)) ?? undefined as unknown as Date,
  about: userDefaultValues?.about ?? '',
  phone: userDefaultValues?.phone ?? '',
  city: userDefaultValues?.city ?? '',
  state: userDefaultValues?.state ?? ''
});

export const schema = zodResolver(
  z.object({
    pictureProfile,
    nickName,
    firstName,
    surname,
    email,
    dateOfBirth,
    about,
    phone,
    city,
    state
  })
);
