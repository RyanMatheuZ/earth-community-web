interface IGiver {
  transaction_amount: number;
  description: string;
  payment_method_id: 'pix';
  payer: {
    email: string;
    first_name: string;
    last_name: string;
    identification: {
      type: 'CPF';
      number: number
    };
  },
  address: {
    zip_code: number;
    street_name: string;
    street_number: string;
    neighborhood: string;
    city: string;
    federal_unit: string;
  }
}

export default IGiver;
