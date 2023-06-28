import styled, { css } from 'styled-components';

const baseMarkStyles = css`
  color: ${({ theme }) => theme.palette.common.white};
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing(.25, .5)};
`;

export const ContinuousDevelopment = styled.span`
  background-color: ${({ theme }) => theme.palette.primary.main};
  ${baseMarkStyles}
`;

export const Divulgation = styled.span`
  background-color: #EFBD19;
  ${baseMarkStyles}
`;

export const Emergencies = styled.span`
  background-color: #720E07;
  ${baseMarkStyles}
`;

export const Transfer = styled.span`
  background-color:  #273469;
  ${baseMarkStyles}
`;
