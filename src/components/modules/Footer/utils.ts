import { css } from 'styled-components';

export const iconBaseStyles = css`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(.5)};
  width: fit-content;
`;
