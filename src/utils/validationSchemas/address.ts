import { z } from 'zod';

const schema = {
  zipCode: z
    .string()
    .nonempty('O CEP é obrigatório!'),
  streetName: z
    .string()
    .nonempty('O endereço é obrigatório!'),
  streetNumber: z
    .string()
    .nonempty('O número é obrigatório!'),
  district: z
    .string()
    .nonempty('O bairro é obrigatório!'),
  city: z
    .string()
    .nonempty('A cidade é obrigatória!'),
  state: z
    .string()
    .nonempty('O estado é obrigatório!')
};

export const {
  zipCode,
  streetName,
  streetNumber,
  district,
  city,
  state
} = schema;
