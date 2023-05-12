import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import type { IGiver } from '@ts/interfaces';

import { email, firstName, surname, cpf } from '@utils/validationSchemas/user';
import * as addressValidationSchemas from '@utils/validationSchemas/address';

export interface GiverDefaultValues {
  transactionAmount: IGiver['transaction_amount'];
  email: IGiver['payer']['email'];
  firstName: IGiver['payer']['first_name'];
  surname: IGiver['payer']['first_name'];
  cpf: IGiver['payer']['identification']['number'];
  zipCode: IGiver['address']['zip_code'];
  streetName: IGiver['address']['street_name'];
  streetNumber: IGiver['address']['street_number'];
  district: IGiver['address']['neighborhood'];
  city: IGiver['address']['city'];
  state: IGiver['address']['federal_unit'];
}

export const giverDefaultValues: GiverDefaultValues = {
  transactionAmount: 5,
  email: '',
  firstName: '',
  surname: '',
  cpf: '',
  zipCode: '',
  streetName: '',
  streetNumber: '',
  district: '',
  city: '',
  state: ''
};

export const schema = zodResolver(
  z.object({
    email,
    firstName,
    surname,
    cpf,
    transactionAmount: z
      .string(),
    ...addressValidationSchemas
  })
);
