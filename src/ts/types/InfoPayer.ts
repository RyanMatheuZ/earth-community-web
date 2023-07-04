type InfoPayer = {
  payer: {
    user_id: string;
    email: string;
    first_name: string;
    last_name: string;
    identification: {
      type: 'CPF';
      partialCPF: string;
    }
  };
};

export default InfoPayer;
