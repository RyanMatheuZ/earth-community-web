interface IContact {
  name: string;
  email: string;
  company?: string;
  whoAreYou:
  | 'Pessoa física'
  | 'Startup'
  | 'Instituto ou Fundação'
  | 'Fundo de investimento ou Investidor(a)'
  | 'Universidade/Pesquisa'
  | 'Outro';
  subject:
  | 'Dúvidas'
  | 'Comunicação/Imprensa'
  | 'Parcerias'
  | 'Vagas'
  | 'Outro';
  message: string;
}

export default IContact;
