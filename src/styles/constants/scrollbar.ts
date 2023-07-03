import { css } from 'styled-components';

export const scrollbarBaseStyles = css`
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.palette.lightGray.main};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 50px;
    transition: all 500ms ease;

    &:hover {
      background-color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;
