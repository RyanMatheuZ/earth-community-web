import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray.main};
  padding: ${({ theme }) => theme.spacing(2)};
  min-height: 100vh;
  height: 100%;
`;

export const Title = styled(Typography).attrs({
  variant: 'h1'
})`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-block: ${({ theme }) => theme.spacing(6)};
`;

export const Description = styled(Typography)`
  font-size: 1.2rem;
  line-height: 1.75;
  text-align: center;
  margin-inline: auto;
  max-width: 800px;
  width: 100%;
`;

export const UnderlinedText = styled.span`
  text-decoration: wavy underline ${({ theme }) => theme.palette.primary.main} 2.5px;
`;

export const UppercaseText = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(149, 157, 165, .2) 0px 8px 24px;
  border-left: 5px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing(4)};
  max-width: 1200px;
  width: 100%;
`;

export const FormTitle = styled(Typography).attrs({
  variant: 'h2'
})`
  font-size: 1.2rem;
  border-left: 5px solid ${({ theme }) => theme.palette.primary.main};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(1)};
`;
