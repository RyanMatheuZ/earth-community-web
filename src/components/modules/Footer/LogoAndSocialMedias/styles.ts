import styled from 'styled-components';

import Link from 'next/link';

import { iconBaseStyles } from '../utils';

export const SocialMediaContainer = styled(Link)`
  ${iconBaseStyles}
  margin-top: ${({ theme }) => theme.spacing(1)};
`;
