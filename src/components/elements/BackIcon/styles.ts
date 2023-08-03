import styled from 'styled-components';

import { ChevronLeft } from '@mui/icons-material';

import type { ITheme } from '@ts/interfaces';

import { resolveTheme } from '@utils/theme';

const BackIcon = styled(ChevronLeft) <ITheme>`
  fill: ${({ $themeColor }) => resolveTheme({ $themeColor })};
  width: 30px;
  height: 30px;
`;

export default BackIcon;
