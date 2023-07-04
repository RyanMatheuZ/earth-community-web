import styled from 'styled-components';

import { MaxWidthContainer } from '@components/modules';
import { Visibility, Info, LockOpen, HowToReg, Newspaper } from '@mui/icons-material';

import { baseIconStyles } from '@utils/datas/styles';

export const Container = styled(MaxWidthContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    display: none;
  }
`;

export const ElementsOnTheRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TransparencyIcon = styled(Visibility)`
  ${baseIconStyles};
`;

export const AboutIcon = styled(Info)`
  ${baseIconStyles};
`;

export const SignInIcon = styled(LockOpen)`
  ${baseIconStyles};
`;

export const SignUpIcon = styled(HowToReg)`
  ${baseIconStyles};
`;

export const BlogIcon = styled(Newspaper)`
  ${baseIconStyles};
`;
