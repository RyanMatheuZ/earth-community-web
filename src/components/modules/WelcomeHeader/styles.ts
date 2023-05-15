import styled from 'styled-components';

import { MaxWidthContainer } from '@components/modules';
import { Info } from '@mui/icons-material';

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

export const AboutIcon = styled(Info)`
  ${baseIconStyles};
`;
