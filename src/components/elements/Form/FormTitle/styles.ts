import styled from 'styled-components';

import type { ITheme } from '@ts/interfaces';

const FormTitle = styled.h1<ITheme>`
  color: ${({ $themeColor, theme }) =>
    $themeColor === 'white' ? theme.palette.common.white : theme.palette.common.black
};
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export default FormTitle;
