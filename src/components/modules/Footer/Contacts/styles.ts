import styled from 'styled-components';

import { iconBaseStyles } from '../utils';

export const ContactContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const IconContainer = styled.div`
  ${iconBaseStyles}
`;
