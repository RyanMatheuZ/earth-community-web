import { SignInIcon, SignUpIcon, StyledLink } from './styles';

export const actions = [
  {
    icon: <StyledLink href='/sign-in'><SignInIcon /></StyledLink>,
    label: 'Entrar'
  },
  {
    icon: <StyledLink href='/sign-up'><SignUpIcon /></StyledLink>,
    label: 'Cadastrar-se'
  }
];
